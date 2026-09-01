import Link from "next/link";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0A0A0A] text-white">
      <h2 className="text-4xl font-black text-[#EA580C] uppercase mb-4">
        404 - Not Found
      </h2>
      <p className="text-slate-400 mb-8">
        The requested resource could not be found.
      </p>
      <Link
        href="/"
        className="bg-[#EA580C] text-black font-bold uppercase px-8 py-4 text-[11px] tracking-widest"
      >
        Return to Base
      </Link>
    </div>
  );
}
