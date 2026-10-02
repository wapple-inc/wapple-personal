// 特商法・プライバシーポリシー共通の体裁
export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="px-5 md:px-8 pt-32 md:pt-40 pb-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[26px] md:text-[34px] font-bold tracking-tight" style={{ color: "var(--text)" }}>
          {title}
        </h1>
        <div className="mt-10 text-[14.5px] leading-[1.95]" style={{ color: "var(--text)" }}>
          {children}
        </div>
      </div>
    </main>
  );
}

export function LegalTable({ rows }: { rows: { k: string; v: React.ReactNode }[] }) {
  return (
    <dl className="border-t" style={{ borderColor: "var(--border)" }}>
      {rows.map((r) => (
        <div key={r.k} className="grid md:grid-cols-[220px_1fr] gap-x-8 gap-y-1 py-5 border-b" style={{ borderColor: "var(--border)" }}>
          <dt className="text-[13px] font-semibold" style={{ color: "var(--text-muted)" }}>{r.k}</dt>
          <dd>{r.v}</dd>
        </div>
      ))}
    </dl>
  );
}
