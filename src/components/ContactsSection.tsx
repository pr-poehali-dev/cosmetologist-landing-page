
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Контакты</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Свяжитесь со мной любым удобным способом или приходите на консультацию
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" className="text-primary" />
              </div>
              <h3 className="font-medium mb-2">Телефон</h3>
              <a href="tel:+79001234567" className="text-gray-600 hover:text-primary transition-colors">
                +7 (900) 123-45-67
              </a>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" className="text-primary" />
              </div>
              <h3 className="font-medium mb-2">Email</h3>
              <a href="mailto:beauty@example.com" className="text-gray-600 hover:text-primary transition-colors">
                beauty@example.com
              </a>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" className="text-primary" />
              </div>
              <h3 className="font-medium mb-2">Адрес</h3>
              <address className="text-gray-600 not-italic">
                г. Москва, ул. Красоты, д. 123
              </address>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white p-1 rounded-lg shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.347292035347!2d37.615173577184326!3d55.75538097987656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1588707935429!5m2!1sru!2sru" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              loading="lazy"
              title="Карта"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
