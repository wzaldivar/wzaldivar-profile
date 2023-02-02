import Link from "next/link";
import {
  RiLinkedinBoxFill as LinkedinIcon,
  RiGithubFill as GithubIcon,
  RiWhatsappFill as WhatsappIcon,
} from "react-icons/ri";
import { MdEmail as EmailIcon } from "react-icons/md";

export default function SocialMediaBar() {
  const linkedin = "https://linkedin.com/in/walber-zaldivar-herrera";
  const github = "https://github.com/wzaldivar";
  const email = "mailto:walber.zaldivar@gmail.com";
  const whatsapp = "https://wa.me/59895059121";

  return (
    <div className="social-link-bar">
      <div className="social-link-frame">
        <Link className="social-link" href={linkedin}>
          <LinkedinIcon />
        </Link>
      </div>
      <div className="social-link-frame">
        <Link className="social-link" href={github}>
          <GithubIcon />
        </Link>
      </div>
      <div className="social-link-frame">
        <Link className="social-link" href={email}>
          <EmailIcon />
        </Link>
      </div>
      <div className="social-link-frame">
        <Link className="social-link" href={whatsapp}>
          <WhatsappIcon />
        </Link>
      </div>
    </div>
  );
}
