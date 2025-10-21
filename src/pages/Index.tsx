import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openLightbox = (image: string) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  const services = [
    {
      title: 'Персональный шопинг',
      description: 'Подбор гардероба с учётом вашего стиля и бюджета',
      price: 'от 15 000 ₽',
      icon: 'ShoppingBag'
    },
    {
      title: 'Разбор гардероба',
      description: 'Анализ существующих вещей и рекомендации по обновлению',
      price: 'от 10 000 ₽',
      icon: 'Shirt'
    },
    {
      title: 'Стилизация образов',
      description: 'Создание готовых комплектов для разных случаев',
      price: 'от 12 000 ₽',
      icon: 'Sparkles'
    },
    {
      title: 'Создание образов для особых случаев',
      description: 'Эксклюзивные образы для свадеб, торжеств и важных мероприятий',
      price: 'от 25 000 ₽',
      icon: 'Crown'
    },
    {
      title: 'Имидж-консультация',
      description: 'Полный анализ стиля и разработка индивидуального образа',
      price: 'от 20 000 ₽',
      icon: 'Star'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/fdb7f08c-7ccf-4d2b-bbfa-602d46a71b84/files/f9bb85d0-2a34-4b00-81cb-6e8dc98a6b18.jpg',
      title: 'Деловой стиль',
      description: 'Элегантный образ для бизнес-встреч'
    },
    {
      image: 'https://cdn.poehali.dev/projects/fdb7f08c-7ccf-4d2b-bbfa-602d46a71b84/files/17769df2-88ff-458a-9e49-4bb22e5c358e.jpg',
      title: 'Повседневный шик',
      description: 'Стильные решения на каждый день'
    },
    {
      image: 'https://cdn.poehali.dev/files/92e8a819-15ae-4ad3-a3a0-26553cd76128.JPG',
      title: 'Романтический образ',
      description: 'Утончённый стиль с кружевными акцентами'
    },
    {
      image: 'https://cdn.poehali.dev/files/66cd84e5-83c9-4904-8597-6dc8bdf2818c.JPG',
      title: 'Вечерний образ',
      description: 'Роскошь для особых случаев'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-semibold tracking-wide">Анна Соколова</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors">
                Обо мне
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-accent transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-accent transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('booking')} className="text-sm font-medium hover:text-accent transition-colors">
                Записаться
              </button>
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-serif font-light mb-6 tracking-tight">
              Персональный стилист
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
              Создаю гармоничные образы, которые подчёркивают вашу индивидуальность
            </p>
            <Button 
              onClick={() => scrollToSection('booking')} 
              size="lg" 
              className="px-8 py-6 text-base"
            >
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/6d5585fd-2c38-4514-afdb-2bbae9ce80f3.JPG" 
                alt="Анна Соколова" 
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-4xl font-serif font-light">Обо мне</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Более 10 лет я помогаю людям раскрыть свой стиль и обрести уверенность через одежду. 
                Моя цель — создать гардероб, который будет работать на вас каждый день.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Я верю, что стиль — это не следование трендам, а умение выбирать вещи, 
                которые отражают вашу личность и образ жизни.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-serif font-semibold">500+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-semibold">10+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-serif font-light mb-4">Портфолио</h3>
            <p className="text-lg text-muted-foreground">Примеры моих работ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden group cursor-pointer" onClick={() => openLightbox(item.image)}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon name="Expand" size={32} className="text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-serif font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-serif font-light mb-4">Услуги</h3>
            <p className="text-lg text-muted-foreground">Индивидуальный подход к каждому клиенту</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 border-none shadow-md hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-serif font-semibold mb-2">{service.title}</h4>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="text-xl font-serif font-semibold text-primary">{service.price}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-serif font-light mb-4">Записаться на консультацию</h3>
            <p className="text-lg text-muted-foreground">Заполните форму, и я свяжусь с вами в ближайшее время</p>
          </div>
          <Card className="p-8 border-none shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input 
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о ваших пожеланиях..."
                  rows={4}
                  className="w-full"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-serif font-semibold mb-4">Анна Соколова</h4>
              <p className="text-sm opacity-90">Персональный стилист по одежде</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-sm opacity-90">
                <p>+7 (999) 123-45-67</p>
                <p>anna@stylist.ru</p>
                <p>Москва, Россия</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
            © 2024 Анна Соколова. Все права защищены.
          </div>
        </div>
      </footer>

      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            aria-label="Закрыть"
          >
            <Icon name="X" size={32} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Полноэкранный просмотр"
            className="max-w-full max-h-full object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Index;