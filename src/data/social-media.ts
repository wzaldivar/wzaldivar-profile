import { FaTelegram as TelegramIcon } from 'react-icons/fa';
import { MdEmail as EmailIcon } from 'react-icons/md';
import {
  RiGithubFill as GithubIcon,
  RiLinkedinBoxFill as LinkedinIcon,
  RiWhatsappFill as WhatsappIcon,
} from 'react-icons/ri';

import { SocialMediaButtonProps } from '@/components/social-media';

export const socialMediaBarAriaLabel = 'Contact Walber Zaldivar';

export const socialMediaButtonsProps: SocialMediaButtonProps[] = [
  {
    'href': 'https://linkedin.com/in/walber-zaldivar-herrera',
    'icon': LinkedinIcon,
    'aria-label': 'Go to LinkedIn profile',
    'key': 'btn-linkedin',
  },
  {
    'href': 'https://github.com/wzaldivar',
    'icon': GithubIcon,
    'aria-label': 'Go to GitHub profile',
    'key': 'btn-github',
  },
  {
    'href': 'mailto:walber.zaldivar@gmail.com',
    'icon': EmailIcon,
    'aria-label': 'Send email',
    'key': 'btn-email',
  },
  {
    'href': 'https://wa.me/59895059121',
    'icon': WhatsappIcon,
    'aria-label': 'Send WhatsApp message',
    'key': 'btn-whatsapp',
  },
  {
    'href': 'https://t.me/wzaldivar',
    'icon': TelegramIcon,
    'aria-label': 'Send Telegram message',
    'key': 'btn-telegram',
  },
];
