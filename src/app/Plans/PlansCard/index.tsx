interface PlansProps {
  href: string;
  children: React.ReactNode;
}
export default function PlansCard({ href, children }: PlansProps) {
  return (
    <div className="px-4 py-3 border-[1px] border-black/25 rounded bg-white flex flex-col gap-4 md:max-w-[20.5rem]">
      {children}

      <a
        href={href}
        role="button"
        target="_blank"
        className="button-link block text-[#FCFCFC] bg-[#F7567C] text-xs w-full lg:text-base"
      >
        SIGN UP NOW
      </a>
    </div>
  );
}
