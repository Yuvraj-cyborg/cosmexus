import Image from "next/image";

export default function SpaceViewport() {
  return (
    <section className="relative py-16 md:py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-6 flex items-center justify-between text-[11px] font-mono text-white/60">
          <div>Bayronik - 0.0.1</div>
          <div>Cosmexus</div>
          <div>JOIN-THE-PROGRAM</div>
        </div>

        <div className="relative rounded-md border border-white/10 bg-black overflow-hidden">
          <div className="aspect-[16/9] relative">
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-[0.07]">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border border-white/10" />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              {/*<div className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full bg-[radial-gradient(ellipse_at_center,_#2b6aa420_0%,_transparent_60%)]" />*/}
              <Image
                src="/results.jpg"
                alt="Cosmexus Logo"
                width={1020}
                height={1020}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-10 border-t border-white/10" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-28 bg-white/5 border border-white/10" />
          ))}
        </div>
      </div>
    </section>
  );
}
