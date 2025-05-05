
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b py-4 px-6 sticky top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold text-primary">Beauty Expert</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О мастере</a>
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
          <a href="#works" className="text-gray-700 hover:text-primary transition-colors">Работы</a>
          <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
        </div>
        <Button asChild>
          <a href="#appointment">Записаться</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
