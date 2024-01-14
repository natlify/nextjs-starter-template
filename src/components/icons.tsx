import { Command, Link, Moon, SunMedium } from "lucide-react"

export type IconKeys = keyof typeof icons

type IconsType = {
    [key in IconKeys]: React.ElementType
}

const icons = {
    logo: Command,
    sun: SunMedium,
    moon: Moon,
    chainLink: Link,
}

export const Icons: IconsType = icons
