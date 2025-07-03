import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { formatDate } from "date-fns";
import { Badge } from "./ui/badge";
import { BorderStyle } from "@/app/(main)/editor/BorderStyleButton";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  className?: string;
  contentRef?: React.Ref<HTMLDivElement>;
}
export default function ResumePreview({
  resumeData,
  contentRef,
  className,
}: ResumePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useDimensions(containerRef);
  return (
    <div
      className={cn(
        "aspect-[210/297] h-fit w-full bg-white text-black",
        className,
      )}
      ref={containerRef}
    >
      <div
        className={cn("space-y-6 p-6", !width && "invisible")}
        style={{
          zoom: (1 / 794) * width,
        }}
        ref={contentRef}
        id="resumePreviewContent"
      >
        <PersonalINfoHeader resumeData={resumeData} />
        <SummarySection resumeData={resumeData} />
        <WorkExperienceSection resumeData={resumeData} />
        <EducationSection resumeData={resumeData} />
        <SkillsSection resumeData={resumeData} />
      </div>
    </div>
  );
}

interface ResumeSectionProps {
  resumeData: ResumeValues;
}

function PersonalINfoHeader({ resumeData }: ResumeSectionProps) {
  const {
    photo,
    firstName,
    lastName,
    jobTitle,
    city,
    country,
    phone,
    email,
    colorHex,
    borderStyle,
  } = resumeData;

  const [photoSrc, setPhotoSrc] = useState(photo instanceof File ? "" : photo);

  useEffect(() => {
    const objectUrl = photo instanceof File ? URL.createObjectURL(photo) : "";
    if (objectUrl) setPhotoSrc(objectUrl);
    if (photo === null) setPhotoSrc("");

    return () => URL.revokeObjectURL(objectUrl);
  }, [photo]);

  return (
    <div className="flex items-center gap-6">
      {photoSrc && (
        <Image
          src={photoSrc}
          width={100}
          height={100}
          alt="Auto photo"
          style={{
            borderRadius:
              borderStyle === BorderStyle.SQUARE
                ? "0px"
                : borderStyle === BorderStyle.CIRCLE
                  ? "9999px"
                  : "10%",
          }}
          className="aspect-square object-cover"
        />
      )}

      <div className="space-y-2.5">
        <div className="space-y-1">
          <p
            style={{
              color: colorHex,
            }}
            className="text-3xl font-bold"
          >
            {firstName} {lastName}
          </p>
          <p
            style={{
              color: colorHex,
            }}
            className="font-medium"
          >
            {jobTitle}
          </p>
        </div>
        <p className="text-xs text-gray-500">
          {city}
          {city && country ? ", " : ""}
          {country}
          {(city || country) && (phone || email) ? " • " : ""}
          {[phone, email].filter(Boolean).join(" • ")}
        </p>
      </div>
    </div>
  );
}

function SummarySection({ resumeData }: ResumeSectionProps) {
  const { summary, colorHex } = resumeData;
  if (!summary) {
    return null;
  }

  return (
    <>
      <hr
        className="border-2"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="spac-y-3 break-inside-avoid">
        <p
          style={{
            color: colorHex,
          }}
          className="text-lg font-semibold"
        >
          Professional profile
        </p>
        <div className="whitespace-pre-line text-sm">{summary}</div>
      </div>
    </>
  );
}

function WorkExperienceSection({ resumeData }: ResumeSectionProps) {
  const { workExperiences, colorHex } = resumeData;

  const workExperiencesNotEmpty = workExperiences?.filter(
    (item) => Object.values(item).filter(Boolean).length > 0,
  );

  if (!workExperiencesNotEmpty?.length) return null;

  return (
    <>
      <hr
        className="border-2"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="space-y-3">
        <p
          style={{
            color: colorHex,
          }}
          className="text-lg font-semibold"
        >
          Work experience
        </p>
        {workExperiencesNotEmpty.map((exp, i) => (
          <div key={i} className="break-inside-avoid space-y-1">
            <div
              style={{
                color: colorHex,
              }}
              className="flex items-center justify-between text-sm font-semibold"
            >
              <span>{exp.position}</span>
              {exp.startDate && (
                <span>
                  {formatDate(exp.startDate, "MM/yyyy")} -{" "}
                  {exp.endDate ? formatDate(exp.endDate, "MM/yyyy") : "Present"}
                </span>
              )}
            </div>

            <p className="text-xs font-semibold">{exp.company}</p>
            <div className="whitespace-pre-line text-xs">{exp.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function EducationSection({ resumeData }: ResumeSectionProps) {
  const { educations, colorHex } = resumeData;

  const educationsNotEmpty = educations?.filter(
    (item) => Object.values(item).filter(Boolean).length > 0,
  );

  if (!educationsNotEmpty?.length) return null;

  return (
    <>
      <hr
        style={{
          borderColor: colorHex,
        }}
        className="border-2"
      />
      <div className="space-y-3">
        <p
          style={{
            color: colorHex,
          }}
          className="text-lg font-semibold"
        >
          Education
        </p>
        {educationsNotEmpty.map((edu, i) => (
          <div key={i} className="break-inside-avoid space-y-1">
            <div
              style={{
                color: colorHex,
              }}
              className="flex items-center justify-between text-sm font-semibold"
            >
              <span className="text-sm font-semibold">{edu.school}</span>
              {edu.startDate && (
                <span>
                  {edu.startDate &&
                    `${formatDate(edu.startDate, "MM/yyyy")} ${edu.endDate ? `- ${formatDate(edu.endDate, "MM/yyyy")}` : ""}`}
                </span>
              )}
            </div>

            <p className="text-xs font-semibold">
              <span className="capitalize">{edu.degree}</span>
              {" degree of"} {edu.major}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function SkillsSection({ resumeData }: ResumeSectionProps) {
  const { skills, colorHex, borderStyle } = resumeData;
  if (!skills?.length) return null;

  return (
    <>
      <hr
        className="border-2"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="break-inside-avoid space-y-3">
        <p
          style={{
            color: colorHex,
          }}
          className="text-lg font-semibold"
        >
          Skills
        </p>

        <div className="flex break-inside-avoid flex-wrap gap-2">
          {skills?.map((skill, i) => (
            <Badge
              style={{
                backgroundColor: colorHex,
                borderRadius:
                  borderStyle === BorderStyle.SQUARE
                    ? "0px"
                    : borderStyle === BorderStyle.CIRCLE
                      ? "9999px"
                      : "8px",
              }}
              key={i}
              className="rounded-sm bg-black p-1 capitalize text-white hover:bg-black"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
}
