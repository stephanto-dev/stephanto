import { Mail, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";

interface InfoWithIconProps {
  icon: "mail" | "mapPin" | "linkedin" | "github" | "twitter" | "send";
  title: string;
  content: string;
}

export default function InfoWithIcon({
  icon,
  title,
  content,
}: InfoWithIconProps) {
  const iconMap = {
    mail: Mail,
    mapPin: MapPin,
    linkedin: Linkedin,
    github: Github,
    twitter: Twitter,
    send: Send,
  };
  const Icon = iconMap[icon];
  return (
    <div className="flex items-start gap-3 sm:gap-4 hover:scale-105 transition-all duration-300">
      <Icon className="w-9 h-9 sm:w-10 sm:h-10 text-slate-400 bg-background border border-[#2a2a2a] p-2 rounded-xl" />
      <div className="flex flex-col gap-1 min-w-0">
        <h1 className="text-sm sm:text-base font-medium text-slate-400">
          {title}
        </h1>
        <p className="text-sm sm:text-base break-words">{content}</p>
      </div>
    </div>
  );
}
