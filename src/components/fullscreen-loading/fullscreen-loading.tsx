"use client";

import { Portal } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Loading } from "@/components/loading";
import { ThemeImage } from "@/components/theme-image";

type FullScreenLoadingProps = {
  show: boolean;
};

export default function FullscreenLoading(props: FullScreenLoadingProps) {
  const { show } = props;

  return (
    <Portal>
      <AnimatePresence initial={true}>
        {show && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-backdrop backdrop-blur-sm"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.div
              className="flex flex-col items-center justify-center rounded-rounded bg-bg p-4 shadow"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.1,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
            >
              <ThemeImage
                className="w-24"
                srcLight="/images/logo.png"
                srcDark="/images/logo.png"
                width={150}
                height={150}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                alt="logo"
              />
              <Loading className="mt-4 text-primary" size="lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
