import { motion } from "motion/react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  DisclosureProps
} from "@headlessui/react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { Fragment, useMemo, useState } from "react";

type ShowMoreProps = DisclosureProps<"div"> & {
  overlayClassName?: string;
  buttonClassName?: string;
};

export function ShowMore(props: ShowMoreProps) {
  const {
    className,
    children,
    overlayClassName,
    buttonClassName,
    defaultOpen,
    onTransitionEnd,
    ...otherProps
  } = props;
  const [closed, setClosed] = useState(!defaultOpen);

  const ourProps = useMemo(() => {
    return {
      ...(closed ? { "data-closed": "" } : {})
    };
  }, [closed]);

  return (
    <Disclosure as={Fragment} defaultOpen={defaultOpen} {...otherProps}>
      {({ open }) => (
        <div
          className={cn("flex flex-col gap-1.5 [--closed:3.25rem]", className)}
          onTransitionEnd={(e) => {
            if (onTransitionEnd) onTransitionEnd(e);
            setClosed(!open);
          }}
          {...ourProps}
        >
          <motion.div
            className="relative flex overflow-hidden"
            initial={false}
            animate={open ? "open" : "closed"}
            variants={{
              closed: {
                height: "var(--closed)"
              },
              open: {
                height: "auto"
              }
            }}
          >
            <DisclosurePanel static>{children}</DisclosurePanel>
            <div
              className={cn(
                "pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent to-white transition-opacity duration-300",
                {
                  "opacity-0": open
                },
                overlayClassName
              )}
            />
          </motion.div>
          <DisclosureButton
            className={cn(
              "group text-info flex items-center gap-1 self-start text-sm",
              buttonClassName
            )}
            onClick={() => setClosed(false)}
          >
            <span>{open ? "بستن" : "بیشتر"}</span>
            <ChevronDownIcon
              data-slot="icon"
              className={cn("size-4 transition group-data-[open]:rotate-180", {
                buttonClassName
              })}
            />
          </DisclosureButton>
        </div>
      )}
    </Disclosure>
  );
}
