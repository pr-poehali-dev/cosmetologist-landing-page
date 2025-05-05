
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">О мастере</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-end">
            <Avatar className="w-64 h-64 mb-6">
              <AvatarImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80" alt="Косметолог" />
              <AvatarFallback>ИА</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-semibold mb-2">Ирина Александрова</h3>
            <p className="text-gray-600 text-center md:text-right">Сертифицированный косметолог-эстетист</p>
          </div>
          
          <div>
            <p className="text-gray-700 mb-6">
              Более 8 лет я помогаю клиентам достигать идеального состояния кожи и решать различные эстетические проблемы. 
              Постоянно совершенствую свои навыки, изучаю новейшие технологии и методики в косметологии.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Award" className="text-primary" />
                    <h4 className="font-medium">Образование</h4>
                  </div>
                  <p className="text-sm text-gray-600">Московский институт красоты и здоровья, специальность "Косметология"</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="BookOpen" className="text-primary" />
                    <h4 className="font-medium">Сертификаты</h4>
                  </div>
                  <p className="text-sm text-gray-600">Более 15 сертификатов о повышении квалификации</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Clock" className="text-primary" />
                    <h4 className="font-medium">Опыт</h4>
                  </div>
                  <p className="text-sm text-gray-600">8+ лет практики в лучших салонах красоты</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Users" className="text-primary" />
                    <h4 className="font-medium">Клиенты</h4>
                  </div>
                  <p className="text-sm text-gray-600">Более 1000 довольных клиентов</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
