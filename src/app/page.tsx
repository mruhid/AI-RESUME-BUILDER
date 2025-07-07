import HomePageElements from "@/components/home/HomePageElements";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Welcome to AI Resume Builder",
};
export default function Home() {
  return <HomePageElements />;
}
