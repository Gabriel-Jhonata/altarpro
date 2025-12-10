import { Shield, Users, Church, Heart, GraduationCap } from "lucide-react";

const Crayons = () => (
  <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2.5">
    {[
      { color: "bg-red-500", tip: "bg-red-600" },
      { color: "bg-orange-500", tip: "bg-orange-600" },
      { color: "bg-yellow-500", tip: "bg-yellow-600" },
      { color: "bg-green-500", tip: "bg-green-600" },
      { color: "bg-blue-500", tip: "bg-blue-600" },
      { color: "bg-violet-500", tip: "bg-violet-600" },
    ].map((crayon, i) => (
      <div key={i} className="relative">
        <div className={`w-7 h-28 ${crayon.color} rounded-t-2xl rounded-b-sm`} />
        <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 ${crayon.tip} rounded-full`} 
          style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }} />
      </div>
    ))}
  </div>
);

const features = [
  { icon: Users, label: "Células" },
  { icon: Church, label: "Escola Dominical" },
  { icon: Heart, label: "Devocional Familiar" },
  { icon: GraduationCap, label: "Pedagogia" },
];

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <header className="bg-gradient-hero text-primary-foreground py-6 pb-12 min-h-[85vh] flex items-center">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Security Badge */}
        <div className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm py-3 px-6 rounded-full mb-8 mx-auto w-fit text-sm font-medium">
          <Shield className="w-4 h-4" />
          <span>Compra 100% segura e protegida</span>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Product Image */}
          <div className="relative flex items-center justify-center order-1 lg:order-1">
            <Crayons />
            <img
              src="https://i.ibb.co/G4jNRSF9/1.webp"
              alt="35 Livros de Colorir Cristãos"
              className="w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-2xl shadow-2xl object-cover animate-fade-in-up"
            />
          </div>

          {/* Hero Text */}
          <div className="text-center lg:text-left order-2 lg:order-2 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              35 Livros de Colorir{" "}
              <span className="text-gradient-gold font-black">Cristãos</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Transforme momentos especiais com sua família, célula e escola dominical
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-2xl"
                >
                  <feature.icon className="w-5 h-5 text-accent" />
                  <span className="font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onCtaClick}
              className="bg-gradient-cta text-success-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg animate-pulse-cta"
            >
              QUERO VER AS OFERTAS
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
