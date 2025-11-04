import { Mountain, Moon, Sparkles } from "lucide-react";

const features = [
  {
    title: "Interactive Light",
    description:
      "The lighting responds to your cursor for a subtle, immersive parallax feel.",
    icon: Sparkles,
  },
  {
    title: "Floating Moon",
    description:
      "An orange moon gently oscillates, adding ambience and depth to the scene.",
    icon: Moon,
  },
  {
    title: "Cinematic Mountain",
    description:
      "A dramatic mountain silhouette sets a haunting, Halloween-ready tone.",
    icon: Mountain,
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What makes it pop</h2>
          <p className="mt-2 text-white/70">
            Built for visual impact with smooth performance and delightful motion.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition hover:bg-white/10 hover:border-white/20"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
