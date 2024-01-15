import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

import { Language, supportedLocales } from "@/config/language"

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!supportedLocales.includes(locale as Language)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
