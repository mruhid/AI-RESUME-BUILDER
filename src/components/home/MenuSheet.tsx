import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="size-8 cursor-pointer text-black focus:outline-none" />
      </SheetTrigger>
      <SheetContent className="w-[250px]">
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold text-primary">
            Welcome
          </SheetTitle>
          <SheetDescription>Navigate through the app</SheetDescription>
        </SheetHeader>

        <nav className="mt-6 flex flex-col gap-4 px-1">
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href={"/resumes"}>Login</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href={"/resumes"}>Signup</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href={"/resumes"}>Create Resume</Link>
          </Button>
        </nav>

        <div className="mt-10 px-1">
          <Button className="w-full">Get Started for Free</Button>
          <SheetClose asChild>
            <Button variant="outline" className="mt-2 w-full">
              Close Menu
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
