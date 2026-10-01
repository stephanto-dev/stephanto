import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";

function XLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface InfoWithIconProps {
  icon: "mail" | "mapPin" | "linkedin" | "github" | "x" | "send";
  title: string;
  content: string;
  href?: string;
}

export default function InfoWithIcon({
  icon,
  title,
  content,
  href,
}: InfoWithIconProps) {
  const iconMap = {
    mail: Mail,
    mapPin: MapPin,
    linkedin: Linkedin,
    github: Github,
    x: XLogo,
    send: Send,
  };
  const Icon = iconMap[icon];
  const className =
    "flex items-start gap-3 sm:gap-4 hover:scale-105 transition-all duration-300";
  const body = (
    <>
      <Icon className="w-9 h-9 sm:w-10 sm:h-10 text-slate-400 bg-background border border-[#2a2a2a] p-2 rounded-xl shrink-0" />
      <div className="flex flex-col gap-1 min-w-0">
        <h1 className="text-sm sm:text-base font-medium text-slate-400">
          {title}
        </h1>
        <p className="text-sm sm:text-base break-words">{content}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} cursor-pointer`}
      >
        {body}
      </a>
    );
  }

  return <div className={className}>{body}</div>;
}
