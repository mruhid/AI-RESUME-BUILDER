import PremiumModal from "@/components/premium/PremiumModal";
import NavBar from "./NavBar";
import { auth } from "@clerk/nextjs/server";
import { getUserSubscriptionLevel } from "@/lib/subscriptions";
import SubscriptionLevelProvider from "./SubscriptionLevelProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-gray-100 text-center">
        <h1 className="mb-4 text-4xl font-bold text-destructive">
          Unauthorized
        </h1>
        <p className="mb-6 text-lg text-muted-foreground/50">
          You must be logged in to access this page.
        </p>
        <a
          href="/"
          className="rounded-lg bg-primary px-6 py-2 text-white transition hover:bg-primary/50"
        >
          Go to Home
        </a>
      </div>
    );
  }

  const userSubscriptionLevel = await getUserSubscriptionLevel(userId);
  return (
    <SubscriptionLevelProvider userSubscriptionLevel={userSubscriptionLevel}>
      <div className="flex min-h-screen flex-col">
        <NavBar />
        {children}
        <PremiumModal />
      </div>
    </SubscriptionLevelProvider>
  );
}
