import { FunctionComponent } from "react";

import { FaTelegram as TelegramIcon } from "react-icons/fa";
import { MdEmail as EmailIcon } from "react-icons/md";
import {
  RiGithubFill as GithubIcon,
  RiLinkedinBoxFill as LinkedinIcon,
  RiWhatsappFill as WhatsappIcon,
} from "react-icons/ri";

import SocialMediaButton from "@/components/social-media-button";

const SocialMediaBar: FunctionComponent = () => {
  const LINKEDIN_URL = "https://linkedin.com/in/walber-zaldivar-herrera";
  const GITHUB_URL = "https://github.com/wzaldivar";
  const MAIL_TO_URL = "mailto:walber.zaldivar@gmail.com";
  const WHATSAPP_URL = "https://wa.me/59895059121";
  const TELEGRAM_URL = "https://t.me/wzaldivar";

  return (
    <div className="social-link-bar">
      <SocialMediaButton href={LINKEDIN_URL} icon={LinkedinIcon} />
      <SocialMediaButton href={GITHUB_URL} icon={GithubIcon} />
      <SocialMediaButton href={MAIL_TO_URL} icon={EmailIcon} />
      <SocialMediaButton href={WHATSAPP_URL} icon={WhatsappIcon} />
      <SocialMediaButton href={TELEGRAM_URL} icon={TelegramIcon} />
    </div>
  );
};

export default SocialMediaBar;
