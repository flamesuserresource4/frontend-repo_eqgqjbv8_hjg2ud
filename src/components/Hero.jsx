import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create gentle parallax for the overlay content
  const translateTitleX = useTransform(mouseX, [0, 1], [10, -10]);
  const translateTitleY = useTransform(mouseY, [0, 1], [10, -10]);
  const translateSubY = useTransform(mouseY, [0, 1], [6, -6]);

  useEffect(() => {
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normalize to 0..1
      mouseX.set(e.clientX / innerWidth);
      mouseY.set(e.clientY / innerHeight);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/yJBriAlCim5ZFvlc/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient overlays for readability (don't block interaction) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
          style={{ x: translateTitleX, y: translateTitleY }}
        >
          Haunting Parallax Mountain
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-base md:text-lg text-white/85"
          style={{ y: translateSubY }}
        >
          An atmospheric hero with an orange moon drifting behind a mountain. Move your mouse and watch the light and moon dance for an immersive effect.
        </motion.p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium shadow/50 shadow-black/40 hover:shadow-black/60 transition shadow"
          >
            Explore Features
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-6 py-3 font-medium backdrop-blur-md ring-1 ring-white/20 hover:bg-white/15 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
