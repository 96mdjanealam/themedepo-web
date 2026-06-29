export const SectionHeading = ({ number, title }: { number: number; title: string }) => (
  <div className="flex items-baseline gap-3 mb-6">
    <span className="font-syne font-bold text-2xl text-primary shrink-0">
      {String(number).padStart(2, "0")}.
    </span>
    <h2 className="font-syne font-bold text-2xl sm:text-3xl text-foreground">
      {title}
    </h2>
  </div>
);

export const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-3 text-sm text-medium-gray">
    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" aria-hidden="true" />
    {children}
  </li>
);

export const CardItem = ({ title, description }: { title: string; description: string }) => (
  <div>
    <div className="flex items-center gap-3 mb-2">
      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
      <p className="font-syne font-semibold text-sm text-foreground">{title}</p>
    </div>
    <p className="text-sm text-medium-gray leading-relaxed">{description}</p>
  </div>
);