import s from "../../admin.module.css";
import { supabaseAdmin } from "../../../lib/supabase/admin";

export const dynamic = "force-dynamic";

export default async function AdminMessagesPage() {
  const { data: messages, error } = await supabaseAdmin
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <div className={s.headRow}>
        <h1>Messages</h1>
      </div>

      {error && <p className={s.errorText}>{error.message}</p>}

      {!error && (!messages || messages.length === 0) ? (
        <div className={s.emptyState}>No messages yet.</div>
      ) : (
        messages?.map((message) => (
          <div className={s.messageCard} key={message.id}>
            <div className={s.meta}>
              <strong>{message.name}</strong> &middot; {message.email}
              {message.interest ? ` — ${message.interest}` : ""} &middot;{" "}
              {new Date(message.created_at).toLocaleString()}
            </div>
            <p>{message.message}</p>
          </div>
        ))
      )}
    </>
  );
}
