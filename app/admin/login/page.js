"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import s from "../admin.module.css";
import { login } from "../actions";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(email, password);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    router.push("/admin/products");
    router.refresh();
  }

  return (
    <main className={s.page}>
      <div className={s.loginWrap}>
        <div className={s.loginCard}>
          <div className={s.logo}>
            MVIA<span>.</span>
          </div>
          <h1>Admin Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className={s.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={s.field}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className={s.submitBtn} disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
            {error && <p className={s.errorText}>{error}</p>}
          </form>
        </div>
      </div>
    </main>
  );
}
