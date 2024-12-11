import { InputGroup } from "@/components/input-group";
import { cn } from "@/lib/utils";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { ReactNode, useRef, useState } from "react";
import { toast } from "sonner";

type SearchInputProps = {
  className?: string;
  value: string;
  onCopied?: (value: string) => void;
  autoFocus?: boolean;
  action?: ReactNode;
};

export function CopyBox(props: SearchInputProps) {
  const { className, value, onCopied, action } = props;

  const refId = useRef<NodeJS.Timeout | undefined>(undefined);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    clearTimeout(refId.current);
    navigator.clipboard.writeText(value).then(() => {
      if (onCopied) onCopied(value);
      setIsCopied(true);
      toast.success("با موفقیت کپی شد.");
      refId.current = setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    });
  };

  return (
    <InputGroup className={cn("", className)}>
      <Input readOnly value={value} />
      <Button size="sm" className="m-1.5" onClick={handleCopy}>
        {!isCopied && <CopyIcon data-slot="icon" />}
        {isCopied && <CheckIcon data-slot="icon" />}
      </Button>
      {action}
    </InputGroup>
  );
}
