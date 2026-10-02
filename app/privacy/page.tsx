import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  alternates: { canonical: "https://www.wapple.life/privacy" },
};

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 mb-3 text-[17px] font-bold">{children}</h2>
);

export default function PrivacyPage() {
  return (
    <LegalPage title="プライバシーポリシー">
      <p>
        株式会社Wapple（以下「当社」）は、個人向けコーチングの提供にあたってお預かりする個人情報を、以下の方針にもとづいて適切に取り扱います。
      </p>

      <H>1. 取得する情報</H>
      <p>
        お申し込みフォームやメールを通じて、お名前、メールアドレス、ご相談の内容など、お客様ご自身が入力・送信された情報を取得します。セッションの中でお話しいただいた内容も、コーチングの提供に必要な範囲で記録することがあります。
      </p>

      <H>2. 利用の目的</H>
      <ul className="list-disc pl-5 space-y-1">
        <li>体験セッション・コーチングの日程調整と実施のため</li>
        <li>お問い合わせへの回答や、ご連絡のため</li>
        <li>お支払いの確認のため</li>
        <li>サービスの改善のため（個人が特定できない形で利用します）</li>
      </ul>

      <H>3. 第三者への提供</H>
      <p>
        法令にもとづく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。なお、フォームの受付（Google フォーム）、オンライン会議（Zoom）、クレジットカード決済には外部のサービスを利用しており、必要な範囲で情報が各サービスに送信されます。
      </p>

      <H>4. 守秘義務</H>
      <p>
        セッションでお話しいただいた内容は、国際コーチング連盟（ICF）の倫理規定にもとづき、秘密として扱います。ご本人の同意なく外部に開示することはありません。
      </p>

      <H>5. 安全管理</H>
      <p>個人情報への不正なアクセスや紛失、漏えいを防ぐため、必要かつ適切な安全管理を行います。</p>

      <H>6. 開示・訂正・削除のご請求</H>
      <p>
        ご本人から個人情報の開示・訂正・利用停止・削除のご請求があった場合は、ご本人であることを確認したうえで、速やかに対応します。
      </p>

      <H>7. お問い合わせ窓口</H>
      <p>
        株式会社Wapple 個人情報のお問い合わせ窓口
        <br />
        メール：
        <a href="mailto:yoshinari.hata@wapple.co.jp" className="underline underline-offset-2">yoshinari.hata@wapple.co.jp</a>
      </p>

      <p className="mt-12 text-[13px]" style={{ color: "var(--text-muted)" }}>制定日：2026年10月2日</p>
    </LegalPage>
  );
}
