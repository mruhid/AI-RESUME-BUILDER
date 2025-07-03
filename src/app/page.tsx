import Image from "next/image";
import Logo from "@/assets/logo.png";
import ResumeImage from "@/assets/Ruhid-CV.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 px-5 py-12 text-center text-gray-900 md:flex-row md:text-start lg:gap-12">
      <div className="max-w-prose space-y-3">
        <Image
          src={Logo}
          alt="Logo"
          width={150}
          height={150}
          className="mx-auto md:ms-0"
        />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Create the{" "}
          <span className="inline-block bg-gradient-to-r from-primary/50 to-primary bg-clip-text text-transparent">
            Perfect Resume
          </span>{" "}
          in Minutes
        </h1>
        <p className="text-lg text-gray-500">
          Our <span className="font-bold">Ai resume builder</span> helps you
          design a professional resume with easy method.
        </p>
        <Button variant={"premium"} size={"forPremium"} asChild>
          <Link href={"/resumes"}>Get started</Link>
        </Button>
      </div>
      <div>
        <Image
          src={ResumeImage}
          alt="Resume preview"
          width={500}
          className="shadow-md lg:rotate-[1.5deg]"
        />
      </div>
    </main>
  );
}
