"use server";

import openai from "@/lib/openai";
import { canUseAITools } from "@/lib/permitions";
import { getUserSubscriptionLevel } from "@/lib/subscriptions";
import {
  GenerateSummaryInput,
  generateSummarySchema,
  GenerateWorkExperienceInput,
  generateWorkExperienceSchema,
  WorkExperienceValue,
} from "@/lib/validation";
import { auth } from "@clerk/nextjs/server";

export async function generateSummary(input: GenerateSummaryInput) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }
  const subscriptionLevel = await getUserSubscriptionLevel(userId);

  if (!canUseAITools(subscriptionLevel)) {
    throw new Error("Upgrade your subscription to use this feature");
  }

  const { jobTitle, workExperiences, skills, educations } =
    generateSummarySchema.parse(input);

  const systemMessage = `
    You are a job resume generator AI.Your task is to write a professional introducction summary for a resume given the user's provided data.
    You should only return summary and do not include any other information in the reponse.Keep it concise and professional
    `;

  const userMessage = `
    Please generate a professional resume summary from this data :
    Job title :${jobTitle || "N/A"}

    Work experiences:
    ${workExperiences
      ?.map(
        (exp) => `
 Position:${exp.position || "N/A"} at ${exp.company || "N/A"} from ${exp.startDate || "N/A"} to ${exp.endDate || "Present"}

 Description:${exp.description || "N/A"}

        `,
      )
      .join("\n\n")}

        Education:
    ${educations
      ?.map(
        (edu) => `
 Major:${edu.major || "N/A"} at ${edu.school || "N/A"} from ${edu.startDate || "N/A"} to ${edu.endDate || "N/A"}

 Degree:${edu.degree || "N/A"}

        `,
      )
      .join("\n\n")}
        
       Skills:${skills} 
        `;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: systemMessage,
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  const aiResponse = completion.choices[0].message.content;

  if (!aiResponse) {
    throw new Error("Failed to generate AI response");
  }

  return aiResponse;
}

export async function generateWorkExperience(
  input: GenerateWorkExperienceInput,
) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }
  const subscriptionLevel = await getUserSubscriptionLevel(userId);

  if (!canUseAITools(subscriptionLevel)) {
    throw new Error("Upgrade your subscription to use this feature");
  }

  const { description } = generateWorkExperienceSchema.parse(input);

  const systemMessage = `
  You are a job resume generator AI,Your task task is to generate a single work experience entry based on the user input.
  Your response must adhre following structure.You can omit fields if the can't be infered from the provided data,but you don't add any new ones.


  Job title:<Job title>
  Company:<company name>
  Start date <format:YYYY-MM-DD>(only if provided)
  End date <format:YYYY-MM-DD>(only if provided)
  Description:<an optimized description in bullet format,rigth be infered from the job title
  `;

  const userMessage = `
  Please provide a work experience entry from this description at least 3  , max 6 line
  ${description}
  `;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: systemMessage,
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  const aiResponse = completion.choices[0].message.content;

  if (!aiResponse) {
    throw new Error("Failed to generate AI response");
  }

  return {
    position: aiResponse.match(/Job title: (.*)/)?.[1] || "",
    company: aiResponse.match(/Company: (.*)/)?.[1] || "",
    description: (aiResponse.match(/Description:([\s\S]*)/)?.[1] || "").trim(),
    startDate: aiResponse.match(/Start date: (\d{4}-\d{2}-\d{2})/)?.[1],
    endDate: aiResponse.match(/End date: (\d{4}-\d{2}-\d{2})/)?.[1],
  } satisfies WorkExperienceValue;
}
