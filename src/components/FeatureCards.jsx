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
    <section id="features" className="relative bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What makes it pop</h2>
          <p className="mt-2 text-slate-600">
            Built for visual impact with smooth performance and delightful motion.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
