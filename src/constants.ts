import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import { SITE } from "@/config";

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/umaim/",
    linkTitle: ` ${SITE.author} on Github`,
    icon: IconGitHub,
  },
  {
    name: "Mail",
    href: "mailto:hi@uma.im",
    linkTitle: `发送邮件给 ${SITE.author}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `电子邮件分享`,
    icon: IconMail,
  },
] as const;
