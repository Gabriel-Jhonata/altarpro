import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonialImages = [
  "https://i.postimg.cc/xjv9CW8P/IMG-5295-2.jpg",
  "https://i.postimg.cc/KvmxgJgh/IMG-5297-2.jpg",
  "https://i.postimg.cc/hPMg8T9z/IMG-5298-2.jpg",
  "https://i.postimg.cc/zGBNxvjd/IMG-5318-2.jpg",
  "https://i.postimg.cc/8k9dTptj/IMG-5365.jpg",
  "https://i.postimg.cc/3Ns211dg/IMG-5369.jpg",
  "https://i.postimg.cc/NF91RSfs/IMG-5390.jpg",
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= testimonialImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? testimonialImages.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-foreground">
          O que nossos clientes dizem
        </h2>

        {/* Rating */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-muted-foreground">4.9/5 - 347 avaliações</span>
        </div>

        {/* Carousel */}
        <div className="relative max-w-sm mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-card shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-card shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialImages.map((src, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <div className="bg-card rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
                    <img
                      src={src}
                      alt={`Depoimento de cliente ${index + 1}`}
                      className="w-full aspect-[9/16] object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonialImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
