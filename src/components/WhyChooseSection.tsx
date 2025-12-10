import { Users, Church, Heart, GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      const visibleStart = windowHeight - rect.top;
      const progress = Math.min(Math.max(visibleStart / (windowHeight * 0.5), 0), 1);
      
      setScrollProgress(progress);
      setIsVisible(rect.top < windowHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 bg-card z-10"
      style={{
        opacity: scrollProgress,
        transform: `translateY(${(1 - scrollProgress) * 30}px)`,
        transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
      }}
    >
      {/* Overlay fade effect from hero */}
      <div 
        className="absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-transparent to-card pointer-events-none"
        style={{ opacity: scrollProgress }}
      />
      
      <div className="container mx-auto px-4 lg:px-10">
        <h2 
          className={`text-2xl md:text-3xl font-bold text-center mb-10 text-foreground transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Por que escolher nossos livros?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`bg-card p-6 rounded-2xl shadow-lg text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
              }}
            >
              <div
                className={`w-16 h-16 ${benefit.gradient} rounded-full flex items-center justify-center mx-auto mb-4 animate-float`}
                style={{ animationDelay: `${index * 200}ms` }}
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
          className={`block mx-auto bg-gradient-cta text-success-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-500 shadow-lg animate-pulse-cta ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
        >
          QUERO VER AS OFERTAS
        </button>
      </div>
    </section>
  );
};
