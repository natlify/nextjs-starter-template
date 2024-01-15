import createMiddleware from "next-intl/middleware"

import { supportedLocales } from "@/config/language"

export default createMiddleware({
  // A list of all locales that are supported
  locales: supportedLocales,

  // Used when no locale matches
  defaultLocale: supportedLocales[0],

  localePrefix: "as-needed",
})

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
    "/(de|en)/:path*",
  ],
}
