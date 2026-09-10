import Link from "next/link";
import s from "../admin.module.css";
import SignOutButton from "../SignOutButton";

export default function DashboardLayout({ children }) {
  return (
    <div className={s.page}>
      <div className={s.topbar}>
        <div className={`${s.wrap} ${s.topbarInner}`}>
          <div className={s.navlinks}>
            <Link href="/admin/products">Products</Link>
            <Link href="/admin/messages">Messages</Link>
          </div>
          <SignOutButton />
        </div>
      </div>
      <div className={s.content}>
        <div className={s.wrap}>{children}</div>
      </div>
    </div>
  );
}
