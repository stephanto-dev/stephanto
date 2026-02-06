import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}

/** Arrow icon pointing up-right (external link style) */
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

const variantStyles = {
  primary:
    "bg-white text-slate-900 hover:bg-slate-100 shadow-sm hover:shadow-md border border-slate-200",
  secondary:
    "bg-slate-900 text-white border border-slate-700 hover:bg-slate-800 hover:border-slate-600 shadow-sm hover:shadow-md",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 w-fit hover:scale-105";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
        <ArrowIcon />
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClassName}>
      {children}
      <ArrowIcon />
    </button>
  );
}
