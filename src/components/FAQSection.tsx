import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como recebo os livros?",
    answer:
      "Após a confirmação do pagamento, você receberá um email com o link para download dos 35 livros em formato PDF. O acesso é imediato e vitalício.",
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer:
      "Sim! Com o acesso vitalício, você pode imprimir quantas cópias precisar para uso pessoal, familiar ou em atividades da igreja.",
  },
  {
    question: "Qual a faixa etária recomendada?",
    answer:
      "Os livros são adequados para crianças de 3 a 12 anos, com diferentes níveis de complexidade para cada faixa etária.",
  },
  {
    question: "Como funciona o bônus mensal?",
    answer:
      "No pacote Premium, você recebe 2 livros novos todo mês durante um ano, totalizando 24 livros extras com temas sazonais e especiais.",
  },
];

interface FAQSectionProps {
  onCtaClick: () => void;
}

export const FAQSection = ({ onCtaClick }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
          Perguntas Frequentes
        </h2>

        <div className="max-w-3xl mx-auto space-y-3 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 bg-muted/50 hover:bg-muted transition-colors text-left"
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="p-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onCtaClick}
          className="block mx-auto bg-gradient-cta text-success-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
        >
          TIREI MINHAS DÚVIDAS, QUERO COMPRAR
        </button>
      </div>
    </section>
  );
};
