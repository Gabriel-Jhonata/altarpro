import { Shield, Lock, Award } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Guarantee Box */}
        <div className="bg-card rounded-2xl shadow-lg p-8 text-center max-w-lg mx-auto mb-8">
          <div className="w-20 h-20 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-success-foreground" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">Garantia de 7 dias</h3>
          <p className="text-muted-foreground">
            Se não ficar satisfeito, devolvemos seu dinheiro sem perguntas
          </p>
        </div>

        {/* Security Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-muted-foreground font-medium">
            <Lock className="w-5 h-5 text-success" />
            <span>Pagamento Seguro</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground font-medium">
            <Award className="w-5 h-5 text-success" />
            <span>SSL Protegido</span>
          </div>
        </div>
      </div>
    </section>
  );
};
