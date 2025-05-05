
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Профессиональная косметология для вашей красоты</h1>
          <p className="text-xl mb-8">Современные процедуры, индивидуальный подход и гарантированный результат</p>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <a href="#appointment">Записаться</a>
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <a href="#services">Услуги</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
