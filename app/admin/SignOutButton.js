"use client";

import { useRouter } from "next/navigation";
import s from "./admin.module.css";
import { signOut } from "./actions";

export default function SignOutButton() {
  const router = useRouter();

  async function handleClick() {
    await signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button type="button" className={s.signOutBtn} onClick={handleClick}>
      Sign Out
    </button>
  );
}
