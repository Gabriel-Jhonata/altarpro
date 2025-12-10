import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const productImages = [
  "https://i.ibb.co/Q7kYm6bT/1-1.webp",
  "https://i.ibb.co/bj2gfd1M/2.webp",
  "https://i.ibb.co/Jw2RZTm3/3.webp",
  "https://i.ibb.co/9mVV2GbZ/4.webp",
  "https://i.ibb.co/wFTyMmRC/5.webp",
  "https://i.ibb.co/ks53L6Cv/6.webp",
  "https://i.ibb.co/kV0Kw5MY/7.webp",
  "https://i.ibb.co/TxDD57PJ/8.webp",
  "https://i.ibb.co/wFQmCM9d/9.webp",
  "https://i.ibb.co/j9cnTYGW/2.png",
  "https://i.ibb.co/ymFZXvvZ/1-Capa.png",
  "https://i.ibb.co/0ppB27W1/2.png",
  "https://i.ibb.co/vx1ZwF1P/1-CAPA.png",
  "https://i.ibb.co/zV9P94DN/1.jpg",
  "https://i.ibb.co/rGncvKH4/Captura-de-Tela-2025-06-26-a-s-09-43-48.png",
  "https://i.ibb.co/FbvzCFn4/Captura-de-Tela-2025-06-26-a-s-09-46-01.png",
  "https://i.ibb.co/PZT9fgdb/Captura-de-Tela-2025-06-26-a-s-09-47-56.png",
  "https://i.ibb.co/gMbmYVN3/Captura-de-Tela-2025-06-26-a-s-09-49-07.png",
  "https://i.ibb.co/tMPkF74h/tita-HC-capajesusquad21x21-01b.jpg",
  "https://i.ibb.co/WW3qKWjb/5-20250305-151831-0004.png",
  "https://i.ibb.co/yBy9qVP5/01-CAPA-COM-BORDA.png",
  "https://i.ibb.co/G1XJd9G/CAPA-1.png",
  "https://i.ibb.co/8LyDTgw7/CAPA-2.png",
  "https://i.ibb.co/TMq5zQJd/CAPA.png",
  "https://i.ibb.co/d4kN2D3G/CAPA.png",
  "https://i.ibb.co/Rk9NJPbb/CAPA.png",
  "https://i.postimg.cc/655Z9VcY/CAPA.png",
  "https://i.postimg.cc/Hx9Jmj7q/LIVRO-HEROIS-DA-FE.png",
  "https://i.postimg.cc/HLGj7b0G/LIVRO-MULHERES-DA-BIBLIA.png",
  "https://i.postimg.cc/gjB2chcT/LIVRO-VIRTUDES.png",
  "https://i.postimg.cc/rF3wv5Pd/LIVRO-VERSI-CULOS-E-PROMESSAS.png",
];

interface ProductsGalleryProps {
  onCtaClick: () => void;
}

export const ProductsGallery = ({ onCtaClick }: ProductsGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 2 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, productImages.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + itemsPerView));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - itemsPerView));
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-foreground">
          Conheça Nossos Livros de Colorir
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-8">
          Livros únicos para momentos de fé e relaxamento
        </p>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-card/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-success hover:text-success-foreground transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-card/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-success hover:text-success-foreground transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {productImages.map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <img
                    src={src}
                    alt={`Livro de Colorir Cristão ${index + 1}`}
                    className="w-full h-56 md:h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="block mx-auto mt-8 bg-gradient-cta text-success-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
        >
          QUERO VER AS OFERTAS
        </button>
      </div>
    </section>
  );
};
