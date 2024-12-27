import { useRef, useState } from "react";
import { Dialog } from "@/components/dialog";
import { Description } from "@/components/description";
import { Button } from "@/components/button";
import { CopyIcon, ShareIcon } from "lucide-react";

export interface ShareModel {
  title: string;
  text?: string;
  link: string;
}

export default function ShareDialog({
  open,
  onClose,
  shareItem = {
    link: "",
    title: "",
    text: ""
  }
}: {
  open: boolean;
  onClose: () => void;
  shareItem: ShareModel;
}) {
  const shareButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeModal = () => onClose();
  const [hasCopied, setCopy] = useState(false);

  const handleShareClick = () => {
    navigator.share({
      title: shareItem.title,
      text: shareItem.text,
      url: shareItem.link
    });
  };

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(shareItem.link);
    setCopy(true);
  };

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <Dialog.Panel className="w-full lg:max-w-md">
        <Dialog.Header className="flex items-center gap-2">
          <Dialog.Title className="grow">اشتراک گذاری</Dialog.Title>
          <Dialog.Close className="-me-2" />
        </Dialog.Header>
        <Dialog.Body className="pt-0 lg:pt-0">
          <Description className="py-2">
            با دوستان خود به اشتراک بگذارید!
          </Description>
          <div className="mt-4 flex flex-col gap-2">
            <Button ref={shareButtonRef} onClick={handleShareClick} autoFocus>
              <ShareIcon data-slot="start-icon" />
              اشتراک
            </Button>
            <Button onClick={handleCopyClick} color="secondary">
              <CopyIcon data-slot="start-icon" />
              {hasCopied ? "کپی شد!" : "کپی لینک"}
            </Button>
          </div>
        </Dialog.Body>
      </Dialog.Panel>
    </Dialog>
  );
}
