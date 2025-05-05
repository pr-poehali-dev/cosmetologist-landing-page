
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";

const AppointmentSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Имитация отправки данных
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      // Сброс формы
      setFormData({
        name: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 1000);
  };
  
  return (
    <section id="appointment" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Запись на приём</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Заполните форму ниже, и я свяжусь с вами для подтверждения записи в течение 24 часов
        </p>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Ваше имя</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Введите ваше имя"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Телефон</label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-1">Услуга</label>
              <Select value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cleaning">Чистка лица</SelectItem>
                  <SelectItem value="biorevitalization">Биоревитализация</SelectItem>
                  <SelectItem value="epilation">Лазерная эпиляция</SelectItem>
                  <SelectItem value="rejuvenation">Фракционное омоложение</SelectItem>
                  <SelectItem value="mesotherapy">Мезотерапия</SelectItem>
                  <SelectItem value="massage">Массаж лица</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Сообщение (опционально)</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Дополнительная информация или пожелания"
                rows={3}
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                  Отправка...
                </>
              ) : (
                "Записаться"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
