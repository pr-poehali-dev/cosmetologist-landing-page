
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-semibold mb-2">Beauty Expert</div>
            <p className="text-gray-400">Профессиональная косметология</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="https://vk.com" aria-label="VK" className="hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={20} />
            </a>
            <a href="https://t.me/username" aria-label="Telegram" className="hover:text-primary transition-colors">
              <Icon name="Send" size={20} />
            </a>
            <a href="https://wa.me/79001234567" aria-label="WhatsApp" className="hover:text-primary transition-colors">
              <Icon name="Phone" size={20} />
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2023 Beauty Expert. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
