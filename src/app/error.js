"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div>
      <h2>الرابط خاطيء!</h2>
      <Link href="/">العودة </Link>
    </div>
  );
}
