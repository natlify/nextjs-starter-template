import { PropsWithChildren } from "react"

// import { createClient } from "@/lib/supabase/server"
import { ThemeProvider } from "@/components/theme-provider"

export default async function MainLayout({ children }: PropsWithChildren) {
  //   const cookiesStore = cookies()
  //   const server = createClient(cookiesStore)

  //   const { data } = await server.auth.getUser()
  //   if (!data.user) return redirect("/login")

  //   const { data: profile } = await server
  //     .from("profiles")
  //     .select("username, fullname")
  //     .single()

  //   if (!profile?.fullname || !profile?.username)
  //     return redirect("/complete-signup")

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      storageKey="station-theme"
    >
      {children}
    </ThemeProvider>
  )
}
