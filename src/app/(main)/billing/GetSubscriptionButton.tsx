"use client";

import { Button } from "@/components/ui/button";
import usePremiumModal from "@/hooks/usePremiumModal";

export default function GetSubscriptionButton() {
  const premModal = usePremiumModal();

  return (
    <Button onClick={() => premModal.setOpen(true)} variant={"premium"}>
      Get Premium subscription
    </Button>
  );
}
