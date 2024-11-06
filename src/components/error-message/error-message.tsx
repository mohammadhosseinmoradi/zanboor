import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ErrorMessageProps = {
  className?: string;
  children?: ReactNode;
};

export default function ErrorMessage(props: ErrorMessageProps) {
  const { className, children } = props;

  return (
    <AnimatePresence initial={false}>
      {!!children && (
        <motion.div
          data-slot="error-message"
          className={className}
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: {
              y: 0,
              opacity: 1,
            },
            closed: {
              y: -4,
              opacity: 0,
            },
          }}
          transition={{
            duration: 0.1,
          }}
        >
          <p className="text-sm text-error">{children}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
