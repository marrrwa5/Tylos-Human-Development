import { cn } from "@/lib/utils";

interface LogoItem {
  name: string;
  logo: string;
}

interface LogoCarouselProps {
  items: LogoItem[];
  className?: string;
}

export default function LogoCarousel({ items, className }: LogoCarouselProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div className="flex gap-12 animate-marquee w-max items-center">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center h-14 px-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            title={item.name}
          >
            {/* Placeholder text logo — replace with next/image when assets are available */}
            <span className="text-gray-dark font-semibold text-sm tracking-wide uppercase whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
