"use client";
import usePremiumModal from "@/hooks/usePremiumModal";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { createCheckoutSession } from "./action";
import { env } from "@/env";

const premiumFeatures = ["AI tools", "Up to 3 resumes"];

const premiumPlusFeatures = ["Infinite resume", "Design customizations"];

export default function PremiumModal() {
  const { open, setOpen } = usePremiumModal();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  async function handlePremiumClick(priceId: string) {
    try {
      setIsLoading(true);
      const redirectUrl = await createCheckoutSession(priceId);
      window.location.href = redirectUrl;
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: "Something went wrong.Please try again",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!isLoading) {
          setOpen(open);
        }
      }}
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Resume Builder AI Premium</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <p>Get a premium subscription to unlock more fetures.</p>
          <div className="flex">
            <div className="flex w-1/2 flex-col space-y-5">
              <h3 className="text-center text-lg font-bold">Premium</h3>
              <ul className="list-inside space-y-2">
                {premiumFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 capitalize"
                  >
                    <Check className="size-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() =>
                  handlePremiumClick(
                    env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_MONTHLY,
                  )
                }
                disabled={isLoading}
                className="h-12 rounded-md border border-transparent bg-foreground text-lg text-background transition-all duration-300 hover:border-primary/30 hover:bg-muted-foreground/30 hover:text-foreground"
              >
                Get Premium
              </Button>
            </div>
            <div className="border-1 mx-6" />
            <div className="flex w-1/2 flex-col space-y-5">
              <h3 className="bg-gradient-to-r from-primary/30 to-primary bg-clip-text text-center text-lg font-bold text-transparent">
                Premium Plus
              </h3>
              <ul className="list-inside space-y-2">
                {premiumPlusFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 capitalize"
                  >
                    <Check className="size-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() =>
                  handlePremiumClick(
                    env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_PLUS_MONTHLY,
                  )
                }
                disabled={isLoading}
                className="h-12 rounded-md"
                variant={"premium"}
              >
                Get Premium Plus
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
