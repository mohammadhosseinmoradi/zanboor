"use client";

import { Fragment, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar, AvatarProps } from "@/components/avatar";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Button } from "@/components/button";
import { XIcon } from "lucide-react";

type AvatarZoomableProps = AvatarProps & {
  avatar?: {
    className?: string;
  };
  online?: boolean;
};

export function AvatarZoomable(props: AvatarZoomableProps) {
  const { avatar, src, online, className, ...otherProps } = props;

  const [open, setOpen] = useState(false);
  const [isTransition, setIsTransition] = useState(false);
  const id = useId();

  return (
    <div className={cn("relative rounded-full", className)}>
      <motion.div
        layoutId={id}
        className={cn("relative", {
          "z-30": isTransition || open,
          "cursor-pointer": src
        })}
        onClick={() => src && setOpen(true)}
        onLayoutAnimationStart={() => setIsTransition(true)}
        onLayoutAnimationComplete={() => setIsTransition(false)}
      >
        <Avatar
          className={cn("size-full", avatar?.className)}
          src={src}
          {...otherProps}
        />
      </motion.div>
      {online != undefined && (
        <div className="pointer-events-none absolute inset-0 flex rotate-[225deg] justify-center">
          <div
            className={cn(
              "border-surface relative -top-3 size-5 rounded-full border-4",
              {
                "bg-success": "online"
              }
            )}
          />
        </div>
      )}

      <AnimatePresence initial={false}>
        {open && (
          <Dialog open={true} onClose={() => setOpen(false)}>
            <DialogPanel as={Fragment}>
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                exit={{
                  opacity: 0
                }}
                className="bg-surface-bright fixed inset-0 z-30 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.5
                    }
                  }}
                  exit={{
                    opacity: 0
                  }}
                >
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="fixed end-4 top-4"
                    onClick={() => setOpen(false)}
                  >
                    <XIcon data-slot="icon" />
                  </Button>
                </motion.div>

                <motion.div
                  layoutId={id}
                  className="bg-surface-container relative aspect-square w-full rounded-full sm:max-w-96"
                  onClick={() => setOpen(true)}
                >
                  <Avatar className="size-full" src={src} {...otherProps} />
                </motion.div>
              </motion.div>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
