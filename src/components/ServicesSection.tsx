
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Sparkles",
    title: "Чистка лица",
    description: "Глубокая очистка пор, удаление черных точек и омертвевших клеток кожи",
    price: "от 2500 ₽",
    duration: "60 мин",
  },
  {
    icon: "Droplets",
    title: "Биоревитализация",
    description: "Глубокое увлажнение и улучшение структуры кожи с помощью гиалуроновой кислоты",
    price: "от 5000 ₽",
    duration: "40 мин",
  },
  {
    icon: "ZapOff",
    title: "Лазерная эпиляция",
    description: "Безболезненное удаление нежелательных волос на длительный срок",
    price: "от 3000 ₽",
    duration: "30-60 мин",
  },
  {
    icon: "RefreshCw",
    title: "Фракционное омоложение",
    description: "Лазерная процедура для омоложения и улучшения текстуры кожи",
    price: "от 7000 ₽",
    duration: "45 мин",
  },
  {
    icon: "PanelTopOpen",
    title: "Мезотерапия",
    description: "Введение активных веществ в средние слои кожи для решения различных проблем",
    price: "от 4500 ₽",
    duration: "40 мин",
  },
  {
    icon: "Smile",
    title: "Массаж лица",
    description: "Скульптурный массаж для подтяжки контуров и улучшения цвета лица",
    price: "от 2000 ₽",
    duration: "30 мин",
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Услуги</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Я предлагаю широкий спектр косметологических услуг, используя только сертифицированные препараты и современное оборудование
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name={service.icon} className="text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>{service.duration}</span>
                  </div>
                  <span className="font-medium text-foreground">{service.price}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#appointment">Записаться</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
