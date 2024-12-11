import { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { CircleStencil, Cropper, CropperRef } from "react-mobile-cropper";
import { CropIcon, Maximize2Icon, Minimize2Icon } from "lucide-react";
import { Dialog } from "@/components/dialog";
import "react-mobile-cropper/dist/style.css";

export type CropDialogProps = {
  open: boolean;
  onClose: () => void;
  imageFile: File;
  onCrop?: (imageFile: File) => void;
};

export function CropDialog(props: CropDialogProps) {
  const { open, onClose, imageFile, onCrop } = props;
  const imageSrc = useMemo(() => (open ? URL.createObjectURL(imageFile) : ""), [imageFile, open]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const cropperRef = useRef<CropperRef>(null);

  const handleCrop = () => {
    if (!cropperRef.current) return;
    cropperRef.current
      .getCanvas({
        maxWidth: 1024,
        maxHeight: 1024,
      })
      ?.toBlob(
        (blob) => {
          if (!blob) return;
          const file = new File([blob], imageFile.name);
          if (onCrop) onCrop(file);
          onClose();
        },
        "image/jpeg",
        "75"
      );
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <Dialog.Panel
        className={cn("w-full max-lg:h-dvh", {
          "lg:max-w-lg": !isFullscreen,
        })}
      >
        <Dialog.Header compact className="flex shrink-0 items-center gap-4">
          <CropIcon className="ms-2" />
          <Dialog.Title className="grow">برش تصویر</Dialog.Title>
          <Button
            className="-me-2 max-lg:hidden"
            variant="plain"
            color="secondary"
            onClick={() => setIsFullscreen((isFullscreen) => !isFullscreen)}
          >
            {isFullscreen && <Minimize2Icon data-slot="icon" />}
            {!isFullscreen && <Maximize2Icon data-slot="icon" />}
          </Button>
          <Dialog.Close />
        </Dialog.Header>
        <div className={cn("grid grow grid-cols-1 items-center justify-center overflow-hidden")}>
          <Cropper
            key={isFullscreen ? "true" : "false"}
            ref={cropperRef}
            src={imageSrc}
            className="size-full"
            stencilComponent={CircleStencil}
            stencilProps={{
              aspectRatio: 1,
              grid: true,
            }}
            defaultSize={{
              width: Infinity,
              height: Infinity,
            }}
          />
        </div>
        <Dialog.Actions>
          <Button className="lg:min-w-24" onClick={() => handleCrop()}>
            برش
          </Button>
          <Button color="secondary" onClick={onClose}>
            بستن
          </Button>
        </Dialog.Actions>
      </Dialog.Panel>
    </Dialog>
  );
}
