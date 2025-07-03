import LoadingButton from "@/components/LoadingButton";
import { useToast } from "@/hooks/use-toast";
import { ResumeValues } from "@/lib/validation";
import { WandSparklesIcon } from "lucide-react";
import { useState } from "react";
import { generateSummary } from "./action";
import { useSubscriptionLevel } from "../../SubscriptionLevelProvider";
import usePremiumModal from "@/hooks/usePremiumModal";
import { canUseAITools } from "@/lib/permitions";

interface GenerateSummryButtonProps {
  resumaData: ResumeValues;
  onSummaryGenerator: (summary: string) => void;
}
export default function GenerateSummryButton({
  resumaData,
  onSummaryGenerator,
}: GenerateSummryButtonProps) {
  const subsLevel = useSubscriptionLevel();
  const premiumModal = usePremiumModal();

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!canUseAITools(subsLevel)) {
      premiumModal.setOpen(true);
      return;
    }
    try {
      setLoading(true);
      const aiResponse = await generateSummary(resumaData);
      onSummaryGenerator(aiResponse);
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Something went wrong.Please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoadingButton
      variant={"outline"}
      type="button"
      loading={loading}
      onClick={handleClick}
    >
      <WandSparklesIcon className="size-4" />
      Generate (AI)
    </LoadingButton>
  );
}
