import LinklistLogo from "@/assets/linklist-logo.svg"
import { Link, LucideProps, Moon, SunMedium } from "lucide-react"

export type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

const icons = {
  sun: SunMedium,
  moon: Moon,
  chainLink: Link,
  logo: (props: LucideProps) => <LinklistLogo {...props} />,
}

export const Icons: IconsType = icons
