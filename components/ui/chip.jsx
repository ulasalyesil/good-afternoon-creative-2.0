import Link from "next/link"

export default function Chip({ label, target, onClick }) {

  const handleNavigation = (e) => {
    e.preventDefault();

    if (onClick) onClick();

    setTimeout(() => {
      window.location.href = `/${target}`;
    }, 700);
  };

  return (
    <Link href={`/${target}`}>
      <div 
        className="flex items-center justify-center h-10 px-4 rounded-full border border-black transition hover:bg-black hover:text-white"
        onClick={handleNavigation}
      >
        {label}
      </div>
    </Link>
  );
}
