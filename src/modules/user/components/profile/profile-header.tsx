"use client";

import { cn } from "@/lib/utils";
import { Avatar } from "@/components/avatar";
import { Text } from "@/components/text";
import { BadgeCheckIcon, HeartIcon, MessagesSquareIcon, XIcon } from "lucide-react";
import { Heading } from "@/components/heading";
import { Button } from "@/components/button";
import { UserProfileDto } from "@/modules/user/types";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useId, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { getGenderTranslated } from "@/modules/utils";

type ProfileHeaderProps = {
  data: UserProfileDto;
  className?: string;
};

export function ProfileHeader(props: ProfileHeaderProps) {
  const { data, className } = props;

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-4">
        <ProfileAvatar
          className="size-16 shrink-0"
          data={{
            personalId: data.id,
            src: data.personal.image,
          }}
        />
        <Heading as="h4" variant="h4">
          {[data.personal.displayName].join(" ")}
          <span className="text-on-surface/50 ms-1.5">
            / {getGenderTranslated(data.personal.gender)}
          </span>
          <BadgeCheckIcon className="fill-on-surface text-surface ms-1 mb-0.5 inline-block size-5 rounded-full" />
        </Heading>
      </div>
      <Text className="mt-4">{data.personal.bio}</Text>

      <div className="mt-4 grid grid-cols-[auto_1fr] gap-2 lg:grid-cols-[auto_auto]">
        <Button variant="outlined" color="secondary">
          <HeartIcon data-slot="icon" />
          <span className="max-lg:hidden">افزودن به علاقمندی‌ها</span>
        </Button>
        <Button variant="outlined" color="secondary">
          <MessagesSquareIcon data-slot="start-icon" />
          درخواست علاقمندی
        </Button>
      </div>
    </div>
  );
}

type ProfileAvatarProps = {
  data: {
    personalId: string;
    src?: string | null;
  };
  className?: string;
};

function ProfileAvatar(props: ProfileAvatarProps) {
  const { data, className } = props;

  const [open, setOpen] = useState(false);
  const [isTransition, setIsTransition] = useState(false);
  const id = useId();

  return (
    <div className={cn("relative", className)}>
      <motion.div
        layoutId={id}
        className={cn("relative", {
          "z-30": isTransition || open,
          "cursor-pointer": data.src,
        })}
        onClick={() => data.src && setOpen(true)}
        onLayoutAnimationStart={() => setIsTransition(true)}
        onLayoutAnimationComplete={() => setIsTransition(false)}
      >
        <Avatar className="size-full" src={data.src} />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 flex rotate-[225deg] justify-center">
        <div
          className={cn("border-surface relative -top-3 size-5 rounded-full border-4", {
            "bg-success": "online",
          })}
        />
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <Dialog open={true} onClose={() => setOpen(false)}>
            <DialogPanel as={Fragment}>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="bg-surface-bright fixed inset-0 z-30 flex items-center justify-center"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.5,
                    },
                  }}
                  exit={{
                    opacity: 0,
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
                  className="w-full p-4 lg:max-w-96"
                  onClick={() => setOpen(true)}
                >
                  <Avatar className="size-full" src={data.src} />
                </motion.div>
              </motion.div>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
