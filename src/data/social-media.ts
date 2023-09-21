import { FaTelegram as TelegramIcon } from "react-icons/fa";
import { MdEmail as EmailIcon } from "react-icons/md";
import {
  RiGithubFill as GithubIcon,
  RiLinkedinBoxFill as LinkedinIcon,
  RiWhatsappFill as WhatsappIcon,
} from "react-icons/ri";

import { SocialMediaButtonProps } from "@/components/social-media-button";

export const socialMediaBarLabel = "Contact Walber Zaldivar";

export const socialMediaButtonProps: SocialMediaButtonProps[] = [
  {
    href: "https://linkedin.com/in/walber-zaldivar-herrera",
    icon: LinkedinIcon,
    "aria-label": "Go to LinkedIn profile",
  },
  {
    href: "https://github.com/wzaldivar",
    icon: GithubIcon,
    "aria-label": "Go to GitHub profile",
  },
  {
    href: "mailto:walber.zaldivar@gmail.com",
    icon: EmailIcon,
    "aria-label": "Send email",
  },
  {
    href: "https://wa.me/59895059121",
    icon: WhatsappIcon,
    "aria-label": "Send WhatsApp message",
  },

  {
    href: "https://t.me/wzaldivar",
    icon: TelegramIcon,
    "aria-label": "Send Telegram message",
  },
];
