"use client";

import NextTopLoader from "nextjs-toploader";

export default function TopLoading() {
  return (
    <NextTopLoader
      color="var(--color-primary-500)"
      shadow=""
      showSpinner={false}
    />
  );
}
