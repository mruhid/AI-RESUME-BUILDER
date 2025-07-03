"use client";

import LoadingButton from "@/components/LoadingButton";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { createCustomerPortalSession } from "./action";

export default function ManageSubscriptionButton() {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  async function handleClick() {
    try {
      setLoading(true);
      const redirectUrl = await createCustomerPortalSession();
      window.location.href = redirectUrl;
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: "Something went wrong.Please try again",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoadingButton
      className="h-12 rounded-md border border-transparent bg-foreground text-lg text-background transition-all duration-300 hover:border-primary/30 hover:bg-muted-foreground/30 hover:text-foreground"
      onClick={handleClick}
      loading={loading}
    >
      Manage subscription
    </LoadingButton>
  );
}
