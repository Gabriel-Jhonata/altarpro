import { Star, Crown, Check, Gift, Clock, Trophy } from "lucide-react";

const basicFeatures = [
  "35 Livros de Colorir em PDF",
  "Temas Bíblicos Variados",
  "Acesso Vitalício",
  "Suporte por WhatsApp",
  "Garantia de 7 dias",
];

const premiumBonuses = [
  { title: "PLANER DEVOCIONAL INFANTIL", subtitle: "EXCLUSIVO" },
  { title: "LIVRO DE ATIVIDADES CRISTÃS", subtitle: "EXCLUSIVO" },
  { title: "DESAFIO BÍBLICO DE 7 DIAS", subtitle: "EXCLUSIVO" },
  { title: "CARTÕES BÍBLICOS PARA MEMORIZAÇÃO", subtitle: "EXCLUSIVO" },
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
        <div className="bg-gradient-danger text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 mx-auto w-fit mb-8 font-semibold text-sm">
          <Clock className="w-4 h-4" />
          <span>OFERTA LIMITADA - Apenas no dia {formattedDate}</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-foreground">
          Escolha Sua Oferta Especial
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-8">
          Livros de qualidade profissional para enriquecer seus momentos de fé
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Basic Package */}
          <div className="bg-card rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-transform animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6 mt-2">
              <Star className="w-7 h-7 text-accent" />
              <h3 className="text-xl font-bold text-foreground">Pacote Básico</h3>
            </div>

            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2">
                <span className="text-destructive line-through">R$ 47,00</span>
                <span className="bg-success text-success-foreground text-xs px-2 py-1 rounded-lg font-semibold">
                  -79%
                </span>
              </div>
              <div className="text-4xl font-extrabold text-success my-2">R$ 10,00</div>
              <p className="text-muted-foreground text-sm">Você economiza R$ 37,00</p>
            </div>

            <div className="space-y-3 mb-6">
              {basicFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://pay.kirvano.com/29311415-f6f4-4d68-a30a-6ba8d38fc386"
              className="block w-full bg-gradient-cta text-success-foreground py-4 rounded-2xl font-semibold text-center animate-pulse-cta hover:scale-[1.02] transition-transform"
            >
              QUERO O PACOTE BÁSICO
            </a>
          </div>

          {/* Premium Package */}
          <div className="bg-card rounded-2xl p-6 shadow-lg border-4 border-accent relative md:scale-105 hover:-translate-y-1 transition-transform animate-fade-in-up">
            {/* Best Seller Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-white py-2 px-4 rounded-full text-xs font-semibold flex items-center gap-2 whitespace-nowrap">
              <Trophy className="w-4 h-4" />
              MAIS VENDIDO
            </div>

            <div className="flex items-center justify-center gap-3 mb-6 mt-4">
              <Crown className="w-7 h-7 text-accent" />
              <h3 className="text-xl font-bold text-foreground">Pacote Premium</h3>
            </div>

            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2">
                <span className="text-destructive line-through">R$ 256,00</span>
                <span className="bg-success text-success-foreground text-xs px-2 py-1 rounded-lg font-semibold">
                  -93%
                </span>
              </div>
              <div className="text-4xl font-extrabold text-success my-2">R$ 17,00</div>
              <p className="text-muted-foreground text-sm">Você economiza R$ 239,00</p>
            </div>

            <div className="bg-success/10 text-success font-semibold py-3 px-4 rounded-xl text-center text-sm mb-4">
              TUDO DO PACOTE BÁSICO +
            </div>

            <div className="space-y-3 mb-6">
              {premiumBonuses.map((bonus) => (
                <div
                  key={bonus.title}
                  className="flex items-center gap-3 bg-accent/10 p-3 rounded-xl"
                >
                  <Gift className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <strong className="text-foreground text-sm block">+ {bonus.title}</strong>
                    <span className="text-muted-foreground text-xs">{bonus.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://pay.kirvano.com/5972d79d-b948-435d-8e0f-4e045f73b586"
              className="block w-full bg-gradient-gold text-white py-4 rounded-2xl font-semibold text-center animate-pulse-gold hover:scale-[1.02] transition-transform"
            >
              QUERO O PACOTE PREMIUM
            </a>

            <p className="text-center text-muted-foreground text-sm mt-4">
              +500 pessoas já escolheram este pacote
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
