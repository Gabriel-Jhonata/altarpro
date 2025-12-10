import { Users, Church, Heart, GraduationCap } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Células e Grupos",
    description: "Atividades interativas para engajar crianças durante reuniões",
    gradient: "bg-gradient-benefit-blue",
  },
  {
    icon: Church,
    title: "Escola Dominical",
    description: "Material complementar para aulas mais dinâmicas e envolventes",
    gradient: "bg-gradient-benefit-purple",
  },
  {
    icon: Heart,
    title: "Devocional Familiar",
    description: "Momentos especiais de conexão com Deus em família",
    gradient: "bg-gradient-benefit-green",
  },
  {
    icon: GraduationCap,
    title: "Uso Pedagógico",
    description: "Ferramenta educativa que desenvolve coordenação e criatividade",
    gradient: "bg-gradient-benefit-orange",
  },
];

interface WhyChooseSectionProps {
  onCtaClick: () => void;
}

export const WhyChooseSection = ({ onCtaClick }: WhyChooseSectionProps) => {
  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
          Por que escolher nossos livros?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card p-6 rounded-2xl shadow-lg text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
            >
              <div
                className={`w-16 h-16 ${benefit.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onCtaClick}
          className="block mx-auto bg-gradient-cta text-success-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
        >
          QUERO VER AS OFERTAS
        </button>
      </div>
    </section>
  );
};
