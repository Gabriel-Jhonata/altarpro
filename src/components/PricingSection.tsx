import { Sun, Crown, Check, Clock, Trophy, Sparkles } from "lucide-react";

const luzFeatures = [https://pay.cakto.com.br/y2dp3os_680781?affiliate=jUNuovvt
  "35 Livros de Colorir Digitais",
  "Suporte por E-mail",
  "Garantia de 7 Dias",
  "DIREITO DE REVENDA",
];

const altarProFeatures = [https://pay.cakto.com.br/rs6wvr9?affiliate=mxvwDEwG
  "TUDO do Plano LUZ",
  "TUDO do Plano CHAMA",
  "CONTEÚDO COMPLETO",
  "Atualizações Vitalícias",
  "Suporte Prioritário",
  "DIREITO DE REVENDA",
];

export const PricingSection = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <section id="pricing" className="py-12 bg-card">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Limited Offer Alert */}
        <div className="bg-gradient-danger text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 mx-auto w-fit mb-8 font-semibold text-sm animate-pulse">
          <Clock className="w-4 h-4" />
          <span>OFERTA LIMITADA - Apenas no dia {formattedDate}</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-foreground animate-fade-in">
          Escolha Sua Oferta Especial
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-8 animate-fade-in">
          Livros de qualidade profissional para enriquecer seus momentos de fé
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Plano LUZ */}
          <div className="bg-card rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in-up border border-border/50 hover:shadow-xl hover:border-accent/30">
            <div className="flex flex-col items-center justify-center gap-2 mb-6 mt-2">
              <span className="text-muted-foreground text-sm uppercase tracking-wider">Plano</span>
              <div className="flex items-center gap-2">
                <Sun className="w-8 h-8 text-amber-400" />
                <h3 className="text-2xl font-bold text-foreground">LUZ</h3>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-1">
                <span className="text-muted-foreground text-lg">R$</span>
                <span className="text-5xl font-extrabold text-foreground">12,90</span>
              </div>
              <p className="text-accent font-medium mt-2">Acesso Vitalício</p>
              <p className="text-muted-foreground text-sm mt-1">Uma parcela e pronto!</p>
            </div>

            <div className="space-y-3 mb-6">
              {luzFeatures.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://pay.cakto.com.br/y2dp3os_680781?affiliate=jUNuovvt"
              className="block w-full bg-gradient-cta text-success-foreground py-4 rounded-2xl font-semibold text-center animate-pulse-cta hover:scale-105 transition-transform"
            >
              QUERO O PLANO LUZ
            </a>
          </div>

          {/* Plano ALTAR PRO */}
          <div className="bg-card rounded-2xl p-6 shadow-lg border-4 border-accent relative md:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up hover:shadow-2xl">
            {/* Best Seller Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-white py-2 px-4 rounded-full text-xs font-semibold flex items-center gap-2 whitespace-nowrap animate-bounce">
              <Trophy className="w-4 h-4" />
              MAIS VENDIDO
            </div>

            <div className="flex flex-col items-center justify-center gap-2 mb-6 mt-4">
              <span className="text-muted-foreground text-sm uppercase tracking-wider">Plano</span>
              <div className="flex items-center gap-2">
                <Crown className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-accent">ALTAR PRO</h3>
                <Sparkles className="w-5 h-5 text-accent animate-pulse" />
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-1">
                <span className="text-muted-foreground text-lg">R$</span>
                <span className="text-5xl font-extrabold text-foreground">15,90</span>
              </div>
              <p className="text-accent font-medium mt-2">Acesso Vitalício</p>
              <p className="text-muted-foreground text-sm mt-1">Uma parcela e pronto!</p>
            </div>

            <div className="space-y-3 mb-6">
              {altarProFeatures.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://pay.cakto.com.br/rs6wvr9?affiliate=mxvwDEwG"
              className="block w-full bg-gradient-gold text-white py-4 rounded-2xl font-semibold text-center animate-pulse-gold hover:scale-105 transition-transform"
            >
              QUERO O PLANO ALTAR PRO
            </a>

            <p className="text-center text-muted-foreground text-sm mt-4">
              +500 pessoas já escolheram este plano
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
