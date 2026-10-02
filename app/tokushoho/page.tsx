import type { Metadata } from "next";
import LegalPage, { LegalTable } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  alternates: { canonical: "https://www.wapple.life/tokushoho" },
};

export default function TokushohoPage() {
  return (
    <LegalPage title="特定商取引法に基づく表記">
      <LegalTable
        rows={[
          { k: "販売事業者", v: "株式会社Wapple" },
          { k: "運営責任者", v: "代表取締役 秦 善成" },
          { k: "所在地", v: "〒153-0064 東京都目黒区下目黒1丁目1番14号 コノトラビル7F" },
          { k: "電話番号", v: "ご請求があれば遅滞なく開示します。下記のメールアドレスまでご連絡ください。" },
          { k: "メールアドレス", v: <a href="mailto:yoshinari.hata@wapple.co.jp" className="underline underline-offset-2">yoshinari.hata@wapple.co.jp</a> },
          {
            k: "販売価格（税込）",
            v: (
              <>
                伴走コーチング：スタンダード（月1回・60分）月額4,500円／伴走プラン（月2回・60分）月額8,000円
                <br />
                ジャーナリング・コーチング：3ヶ月・全6回 30,000円（一括）
                <br />
                無料体験セッション（60分）：無料
              </>
            ),
          },
          { k: "商品代金以外の必要料金", v: "インターネット接続に必要な通信料はお客様のご負担となります。" },
          { k: "お支払い方法", v: "クレジットカード決済" },
          {
            k: "お支払い時期",
            v: "伴走コーチングは、毎月その月の初回セッションの前にお支払いください。ジャーナリング・コーチングは、初回セッションの前に一括でお支払いください。",
          },
          { k: "役務の提供時期", v: "お支払いの確認後、お客様と調整した日時にオンライン（Zoom）でセッションを行います。" },
          {
            k: "キャンセル・日程変更",
            v: "セッション前日までにご連絡いただいた場合は、無料で日程を変更します。当日のキャンセルや、ご連絡のない欠席は1回分の実施として扱います。",
          },
          {
            k: "返金について",
            v: "サービスの性質上、お支払い後の返金は原則としてお受けしていません。体調不良などやむを得ない事情がある場合は、ご相談ください。",
          },
          { k: "動作環境", v: "Zoomが利用できるパソコン・タブレット・スマートフォンと、安定したインターネット接続が必要です。" },
        ]}
      />
    </LegalPage>
  );
}
