import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
    name: "LinkList.cc",
    author: "natlify",
    description: "Simple Links Collation",
    keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
    url: {
        base: env.NEXT_PUBLIC_APP_URL,
        author: "https://arjnatz.com",
    },
    links: {
        github: "https://github.com/hckrs1/linklist.cc",
    },
    ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
