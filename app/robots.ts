import type { MetadataRoute } from "next";

// 各ページに noindex を付けているので、クロール自体は許可する（noindex を読ませるため）
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
  };
}
