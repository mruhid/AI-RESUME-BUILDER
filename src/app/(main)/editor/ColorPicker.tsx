import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PaletteIcon } from "lucide-react";
import { useState } from "react";
import { Color, ColorChangeHandler, TwitterPicker } from "react-color";
import { useSubscriptionLevel } from "../SubscriptionLevelProvider";
import usePremiumModal from "@/hooks/usePremiumModal";
import { canUseCustomizations } from "@/lib/permitions";

interface ColorPickerProps {
  color: Color | undefined;
  onChange: ColorChangeHandler;
}

export default function ColorPicker({ color, onChange }: ColorPickerProps) {
  const subsLevel = useSubscriptionLevel();
  const premiumModal = usePremiumModal();

  const [showPopover, setShowPopover] = useState<boolean>(false);

  return (
    <Popover open={showPopover} onOpenChange={setShowPopover}>
      <PopoverTrigger asChild>
        <Button
          className="rounded-sm"
          variant={"outline"}
          size={"icon"}
          title="change resume color"
          onClick={() => {
            if (!canUseCustomizations(subsLevel)) {
              premiumModal.setOpen(true);
              return;
            }
            setShowPopover(true);
          }}
        >
          <PaletteIcon className="size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="border-none bg-transparent shadow-none"
      >
        <TwitterPicker triangle="top-right" color={color} onChange={onChange} />
      </PopoverContent>
    </Popover>
  );
}
