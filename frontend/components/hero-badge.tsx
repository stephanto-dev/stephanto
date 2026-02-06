interface HeroBadgeProps {
  icon: string;
  text: string;
}

export default function HeroBadge({ icon, text }: HeroBadgeProps) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 sm:py-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl transition-all duration-300 hover:scale-105 hover:border-[#3a3a3a]">
      <p className="text-lg sm:text-xl text-slate-400">{icon}</p>
      <p className="text-sm sm:text-base text-slate-400">{text}</p>
    </div>
  );
}
