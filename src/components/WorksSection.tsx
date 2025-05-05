
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const works = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
    title: "Контурная пластика губ"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
    title: "Биоревитализация"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1598731334000-7c520deb2ec6?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
    title: "Чистка лица"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
    title: "Мезотерапия"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
    title: "Массаж лица"
  }
];

const WorksSection = () => {
  return (
    <section id="works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Мои работы</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Результаты работы с реальными клиентами. Фото сделаны с их разрешения.
        </p>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {works.map((work) => (
              <CarouselItem key={work.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="overflow-hidden rounded-lg">
                    <AspectRatio ratio={3/4}>
                      <img
                        src={work.image}
                        alt={work.title}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                  <h3 className="mt-2 text-center font-medium">{work.title}</h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default WorksSection;
