import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" size={28} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">ContentAI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition">Возможности</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition">Тарифы</a>
            <a href="#examples" className="text-foreground hover:text-primary transition">Примеры</a>
            <a href="#api" className="text-foreground hover:text-primary transition">API</a>
            <a href="#faq" className="text-foreground hover:text-primary transition">FAQ</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Контакты</a>
          </div>
          <Button>Начать работу</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Генерация контента нового поколения
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Создавайте качественные статьи, описания товаров и копирайтинг за считанные минуты с помощью ИИ
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="text-lg">
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Смотреть демо
            </Button>
          </div>
          <div className="mt-12 rounded-xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/06e973ce-8fc8-462c-ae41-97892ee502fc/files/ff7d2afd-7ac0-4fae-99c1-2c9e46246d5e.jpg" 
              alt="AI Platform" 
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Возможности платформы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition animate-scale-in">
              <CardHeader>
                <Icon name="FileText" size={40} className="text-primary mb-4" />
                <CardTitle>Статьи и блоги</CardTitle>
                <CardDescription>
                  Генерация SEO-оптимизированных статей для вашего сайта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Создавайте уникальные статьи на любые темы с учетом ключевых слов и требований поисковых систем
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition animate-scale-in">
              <CardHeader>
                <Icon name="ShoppingBag" size={40} className="text-primary mb-4" />
                <CardTitle>Описания товаров</CardTitle>
                <CardDescription>
                  Профессиональные описания для интернет-магазинов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Автоматическое создание продающих описаний товаров с учетом характеристик и целевой аудитории
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition animate-scale-in">
              <CardHeader>
                <Icon name="Megaphone" size={40} className="text-primary mb-4" />
                <CardTitle>Рекламные тексты</CardTitle>
                <CardDescription>
                  Эффективные рекламные материалы для всех каналов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Создание продающих текстов для социальных сетей, контекстной рекламы и email-рассылок
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Тарифные планы</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">₽2,990<span className="text-lg text-muted-foreground">/мес</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>50 000 токенов в месяц</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Генерация статей до 2000 слов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Базовая поддержка</span>
                </div>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Профессиональный</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">₽7,990<span className="text-lg text-muted-foreground">/мес</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>200 000 токенов в месяц</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Генерация статей до 5000 слов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Приоритетная поддержка</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>API доступ</span>
                </div>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-2xl">Корпоративный</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">₽19,990<span className="text-lg text-muted-foreground">/мес</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Безлимитные токены</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Без ограничений по словам</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>VIP поддержка 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Расширенный API</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Персональный менеджер</span>
                </div>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Примеры работ</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>SEO-статья о маркетинге</CardTitle>
                <CardDescription>2500 слов • Время генерации: 45 сек</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://cdn.poehali.dev/projects/06e973ce-8fc8-462c-ae41-97892ee502fc/files/3f8b2e49-a90e-4d45-8552-9753710a52f5.jpg" 
                  alt="Example 1" 
                  className="rounded-lg mb-4 w-full"
                />
                <p className="text-muted-foreground">
                  Полноценная статья с заголовками, подзаголовками и SEO-оптимизацией для продвижения в поисковых системах
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Описания товаров для интернет-магазина</CardTitle>
                <CardDescription>100 товаров • Время генерации: 5 мин</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://cdn.poehali.dev/projects/06e973ce-8fc8-462c-ae41-97892ee502fc/files/5c77382a-0c83-4406-8fe4-1090cdc1e44a.jpg" 
                  alt="Example 2" 
                  className="rounded-lg mb-4 w-full"
                />
                <p className="text-muted-foreground">
                  Уникальные продающие описания с характеристиками, преимуществами и призывами к действию
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="api" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">API Документация</h2>
          <Card>
            <CardHeader>
              <CardTitle>Интеграция через REST API</CardTitle>
              <CardDescription>Встраивайте генерацию контента в ваши приложения</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Эндпоинты:</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  POST /api/v1/generate
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Пример запроса:</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  {`{
  "type": "article",
  "topic": "Цифровой маркетинг 2024",
  "length": 2000,
  "keywords": ["SEO", "контент"]
}`}
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Icon name="Book" size={20} className="mr-2" />
                Полная документация
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Как работает генерация контента?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Наша платформа использует передовые языковые модели GPT-4 для создания уникального контента. 
                Вы задаете тему, ключевые слова и требования, а ИИ генерирует готовый текст за минуты.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Можно ли использовать контент в коммерческих целях?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, весь сгенерированный контент принадлежит вам и может быть использован в любых коммерческих проектах 
                без дополнительных ограничений.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Уникален ли сгенерированный контент?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, каждый текст генерируется индивидуально и является уникальным. Мы гарантируем уникальность 
                не менее 95% по проверке в антиплагиат-системах.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Какие языки поддерживаются?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Платформа поддерживает генерацию контента на 50+ языках, включая русский, английский, 
                испанский, немецкий, французский и многие другие.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Есть ли пробный период?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы предоставляем 7 дней бесплатного доступа ко всем функциям платформы. 
                Кредитная карта не требуется для активации пробного периода.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Свяжитесь с нами</h2>
          <Card>
            <CardHeader>
              <CardTitle>Остались вопросы?</CardTitle>
              <CardDescription>Напишите нам, и мы ответим в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sparkles" size={24} />
                <span className="text-xl font-bold">ContentAI</span>
              </div>
              <p className="text-sm opacity-80">
                Платформа для генерации текстового контента на основе искусственного интеллекта
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#features">Возможности</a></li>
                <li><a href="#pricing">Тарифы</a></li>
                <li><a href="#api">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#">О нас</a></li>
                <li><a href="#">Блог</a></li>
                <li><a href="#contact">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Юридическое</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#">Политика конфиденциальности</a></li>
                <li><a href="#">Условия использования</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 ContentAI. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
