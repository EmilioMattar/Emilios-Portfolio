import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { LinkedInIcon, EmailIcon, WhatsAppIcon, DownloadIcon } from './icons';

const contactLinks = [
  {
    href: 'https://www.linkedin.com/in/emilio-mattar',
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    aria: 'Connect on LinkedIn',
  },
  {
    href: 'mailto:emilio.career@gmail.com',
    icon: <EmailIcon />,
    label: 'Email',
    aria: 'Send an email',
  },
  {
    href: 'https://wa.me/972502304925',
    icon: <WhatsAppIcon />,
    label: 'WhatsApp',
    aria: 'Chat on WhatsApp',
  },
  {
    href: '/Emilio-Mattar-Cv.pdf',
    icon: <DownloadIcon />,
    label: 'Download CV',
    aria: 'Download my CV',
    download: 'Emilio-Mattar-Cv.pdf',
  },
];

export const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-slate-400 text-lg mb-8">
          I'm currently open to new opportunities. Feel free to reach out or connect with me on social media.
        </p>
        <div className="flex justify-center items-center flex-wrap gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.aria}
              download={link.download}
              className="group flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <span className="bg-slate-800 p-4 rounded-full group-hover:bg-cyan-500/20 transition-all duration-300 transform group-hover:scale-110">
                {link.icon}
              </span>
              <span className="font-medium">{link.label}</span>
            </a>
          ))}
        </div>
        <footer className="mt-20 border-t border-slate-800 pt-6">
            <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Emilio Mattar. All rights reserved.</p>
        </footer>
      </div>
    </SectionWrapper>
  );
};
