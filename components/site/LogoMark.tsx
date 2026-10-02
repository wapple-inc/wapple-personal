// Wapple ロゴのマーク（五感の5つの輪＋中心の一滴）。正本は wapple.co.jp と同じ（ブランドガイド v1）
export default function LogoMark({ size = 24, color = "#4F6D8A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <g stroke={color} strokeWidth={size < 40 ? 4.2 : 2.6}>
        <circle cx="50" cy="28" r="21" />
        <circle cx="71" cy="43" r="21" />
        <circle cx="63" cy="68" r="21" />
        <circle cx="37" cy="68" r="21" />
        <circle cx="29" cy="43" r="21" />
      </g>
      <circle cx="50" cy="50" r={size < 40 ? 5.5 : 4.5} fill={color} />
    </svg>
  );
}
