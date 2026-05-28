import type { Status } from "@/data/data";

interface StatusBadgeProps {
  status: Status;
  size?: "sm" | "md" | "lg";
}

/** Badge visual de estado del módulo (disponible / ocupado) */
export function StatusBadge({ status, size = "md" }: StatusBadgeProps) {
  const isAvailable = status === "disponible";
  const sizes = {
    sm: "text-xs px-2.5 py-1",
    md: "text-sm px-3.5 py-1.5",
    lg: "text-base px-5 py-2",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-wider ${
        sizes[size]
      } ${
        isAvailable
          ? "bg-teal/15 text-teal border border-teal/30"
          : "bg-destructive/10 text-destructive border border-destructive/30"
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isAvailable ? "bg-teal" : "bg-destructive"
        } ${isAvailable ? "animate-pulse" : ""}`}
      />
      {isAvailable ? "Disponible" : "Ocupado"}
    </span>
  );
}
