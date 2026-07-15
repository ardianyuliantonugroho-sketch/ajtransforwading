export default function RouteLine({
  origin,
  destination,
}: {
  origin: string;
  destination: string;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-paper-100/70">
      <span className="shrink-0 rounded-sm bg-paper-50/10 px-2 py-1 text-paper-50">
        {origin}
      </span>
      <svg
        viewBox="0 0 200 8"
        className="h-2 w-full max-w-[10rem] text-cargo-orange/70 sm:max-w-[14rem]"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="4"
          x2="200"
          y2="4"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="motion-safe:animate-dashmove"
        />
      </svg>
      <span className="shrink-0 rounded-sm bg-cargo-orange px-2 py-1 text-navy-950">
        {destination}
      </span>
    </div>
  );
}
