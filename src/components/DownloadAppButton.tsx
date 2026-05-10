"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type DownloadAppButtonProps = {
  children: ReactNode;
  className: string;
};

export default function DownloadAppButton({
  children,
  className,
}: DownloadAppButtonProps) {
  const scrollToDownload = () => {
    document
      .getElementById("download-app")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Link href="/#download-app" className={className} onClick={scrollToDownload}>
      {children}
    </Link>
  );
}
