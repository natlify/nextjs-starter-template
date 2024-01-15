export const supportedLocales = ["en", "de"] as const

export type Language = (typeof supportedLocales)[number]
