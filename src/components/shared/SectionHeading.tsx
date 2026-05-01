import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  accentColor?: "turquoise" | "blue";
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
  accentColor = "turquoise",
}: SectionHeadingProps) {
  return (
    <div className={cn(centered ? "text-center" : "text-left", className)}>
      <div
        className={cn(
          "inline-block w-12 h-1 rounded-full mb-4",
          accentColor === "turquoise" ? "bg-turquoise" : "bg-blue-brand",
          centered ? "block mx-auto" : ""
        )}
      />
      <h2
        className={cn(
          "font-serif text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "hidden md:block text-base md:text-lg leading-relaxed max-w-2xl",
            centered ? "mx-auto" : "",
            light ? "text-white/80" : "text-gray-brand"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
