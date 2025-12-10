import { useState, useEffect } from "react";
import { X } from "lucide-react";

const brazilianNames = [
  "Maria", "Ana", "Julia", "Patricia", "Fernanda", "Camila", "Amanda", "Bruna",
  "Leticia", "Carla", "Rafaela", "Luciana", "Cristina", "Renata", "Sandra",
  "Priscila", "Vanessa", "Aline", "Daniela", "Gabriela"
];

const brazilianCities = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Brasília, DF",
  "Salvador, BA", "Fortaleza, CE", "Curitiba, PR", "Recife, PE", "Porto Alegre, RS",
  "Manaus, AM", "Goiânia, GO", "Belém, PA", "Campinas, SP", "Guarulhos, SP",
  "São Bernardo, SP", "Florianópolis, SC", "Vitória, ES", "Maceió, AL"
];

export const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [customer, setCustomer] = useState({ name: "", location: "", time: "" });

  const generateNotification = () => {
    const name = brazilianNames[Math.floor(Math.random() * brazilianNames.length)];
    const location = brazilianCities[Math.floor(Math.random() * brazilianCities.length)];
    const minutes = Math.floor(Math.random() * 10) + 1;
    
    setCustomer({
      name: `${name} acabou de comprar!`,
      location,
      time: `há ${minutes} minutos`,
    });
    setIsVisible(true);

    setTimeout(() => setIsVisible(false), 5000);
  };

  useEffect(() => {
    const initialTimeout = setTimeout(generateNotification, 8000);
    const interval = setInterval(generateNotification, 30000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-5 right-5 bg-card border-2 border-success rounded-xl p-4 shadow-xl z-50 max-w-xs animate-fade-in-up">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-3 text-muted-foreground hover:text-foreground"
      >
        <X className="w-4 h-4" />
      </button>
      <div className="font-semibold text-success mb-1">{customer.name}</div>
      <div className="text-sm text-foreground mb-1">Adquiriu o Pacote Premium</div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{customer.location}</span>
        <span>{customer.time}</span>
      </div>
    </div>
  );
};
