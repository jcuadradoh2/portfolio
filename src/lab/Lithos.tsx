import { useEffect, useRef } from "react";

const BG_IMAGE_1 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";
const BG_IMAGE_2 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";

export default function Lithos() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = { x: -999, y: -999 };
    const cur = { x: -999, y: -999 };
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
      if (cur.x < -500) Object.assign(cur, target);
    };
    const onLeave = () => { target.x = cur.x = -999; target.y = cur.y = -999; };
    const loop = () => {
      cur.x += (target.x - cur.x) * 0.1;
      cur.y += (target.y - cur.y) * 0.1;
      el.style.setProperty("--x", `${cur.x}px`);
      el.style.setProperty("--y", `${cur.y}px`);
      raf = requestAnimationFrame(loop);
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="lithos relative w-full overflow-hidden bg-black tracking-[-0.02em]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom" style={{ backgroundImage: `url(${BG_IMAGE_1})` }} />
      <div className="lithos-reveal absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none" style={{ backgroundImage: `url(${BG_IMAGE_2})` }} />

      <div className="absolute top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5" aria-hidden="true">
        <div className="flex items-center gap-2">
          <svg width="26" height="26" viewBox="0 0 256 256" fill="#ffffff">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span className="text-white text-2xl font-playfair italic">Lithos</span>
        </div>
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1">
          <span className="text-white px-4 py-1.5 rounded-full text-sm font-medium bg-white/20">Course</span>
          {["Field Guides", "Geology", "Plans"].map((item) => (
            <span key={item} className="text-white/80 px-4 py-1.5 rounded-full text-sm font-medium">{item}</span>
          ))}
        </div>
        <span className="hidden md:block bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full">Sign Up</span>
      </div>

      <div className="absolute top-[16%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
        <h3 className="text-white leading-[0.95]">
          <span className="block font-playfair italic font-normal text-5xl sm:text-6xl md:text-7xl hero-anim hero-reveal"
            style={{ letterSpacing: "-0.05em", animationDelay: "0.25s" }}>Layers hold</span>
          <span className="block font-normal text-5xl sm:text-6xl md:text-7xl -mt-1 hero-anim hero-reveal"
            style={{ letterSpacing: "-0.08em", animationDelay: "0.42s" }}>tales of time</span>
        </h3>
      </div>

      <div className="hidden sm:block absolute bottom-10 left-8 md:left-12 max-w-[260px] z-50 hero-anim hero-fade" style={{ animationDelay: "0.7s" }}>
        <p className="text-sm text-white/80 leading-relaxed">
          Every layer of sediment records a chapter of our planet, from ancient seabeds to drifting ash.
        </p>
      </div>

      <div className="absolute bottom-8 right-5 sm:right-8 md:right-12 max-w-[240px] z-50 hero-anim hero-fade" style={{ animationDelay: "0.85s" }}>
        <span className="inline-block bg-[#ff5a1f] text-white text-sm font-medium px-7 py-3 rounded-full">Start Digging</span>
      </div>
    </div>
  );
}
