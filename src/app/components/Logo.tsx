import React from "react";
import Image from "next/image";

export default function Logo() {
  // eslint-disable-next-line @next/next/no-img-element
  return <Image src="/stacc_logo.png" alt="logo" width={24} height={24} />;
}
