import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const DemoGenerator = () => {
  const { toast } = useToast();
  const [contentType, setContentType] = useState('article');
  const [topic, setTopic] = useState('');
  const [length, setLength] = useState([2000]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, укажите тему для генерации",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setGeneratedText('');

    await new Promise(resolve => setTimeout(resolve, 2000));

    const sampleTexts: Record<string, string> = {
      article: `# ${topic}\n\n## Введение\n\nВ современном мире ${topic.toLowerCase()} играет ключевую роль в развитии бизнеса и повседневной жизни. Эта тема становится все более актуальной с каждым днем.\n\n## Основные аспекты\n\n### Первый аспект\nОдним из важнейших элементов является понимание основ. Это позволяет построить прочный фундамент для дальнейшего развития.\n\n### Второй аспект\nНе менее важным является практическое применение полученных знаний. Теория без практики теряет свою ценность.\n\n## Заключение\n\nПодводя итоги, можно с уверенностью сказать, что ${topic.toLowerCase()} - это перспективное направление, требующее внимания и детального изучения.`,
      product: `**${topic}**\n\n✨ Описание:\nПревосходный продукт, созданный с учетом последних тенденций и требований рынка. Идеально подходит для тех, кто ценит качество и надежность.\n\n🎯 Основные характеристики:\n• Высокое качество материалов\n• Современный дизайн\n• Простота использования\n• Долгий срок службы\n\n💎 Преимущества:\n- Экономия времени и средств\n- Проверенная надежность\n- Положительные отзывы клиентов\n- Гарантия производителя\n\n🚀 Закажите прямо сейчас и получите специальную скидку!`,
      ad: `🔥 ${topic.toUpperCase()} 🔥\n\n⚡ Специальное предложение только сегодня!\n\nНе упустите уникальную возможность получить максимальную выгоду. Мы подготовили для вас невероятное предложение!\n\n✅ Что вы получите:\n• Лучшую цену на рынке\n• Быструю доставку\n• Гарантию качества\n• Бонусы при заказе\n\n⏰ Предложение ограничено!\n\n👉 Переходите по ссылке и оформляйте заказ прямо сейчас!\n\n#акция #специальноепредложение #выгода`,
      email: `Тема: ${topic}\n\nЗдравствуйте!\n\nСпешим поделиться с вами важной новостью! Мы подготовили специальное предложение, которое точно вас заинтересует.\n\n${topic} - это то, что вы так долго ждали. Наша команда работала над этим, чтобы предоставить вам лучший сервис.\n\nЧто для вас:\n• Персональные условия\n• Специальные бонусы\n• Приоритетная поддержка\n\nНе упустите эту возможность! Предложение действует ограниченное время.\n\nС уважением,\nКоманда ContentAI\n\nP.S. Если у вас есть вопросы, мы всегда на связи!`
    };

    const text = sampleTexts[contentType] || sampleTexts.article;
    
    for (let i = 0; i <= text.length; i += 5) {
      setGeneratedText(text.substring(0, i));
      await new Promise(resolve => setTimeout(resolve, 10));
    }

    setIsGenerating(false);
    toast({
      title: "Готово!",
      description: "Контент успешно сгенерирован",
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    toast({
      title: "Скопировано",
      description: "Текст скопирован в буфер обмена",
    });
  };

  const contentTypes = {
    article: { label: 'SEO статья', icon: 'FileText' },
    product: { label: 'Описание товара', icon: 'ShoppingBag' },
    ad: { label: 'Рекламный текст', icon: 'Megaphone' },
    email: { label: 'Email рассылка', icon: 'Mail' },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Попробуйте прямо сейчас</h2>
          <p className="text-xl text-muted-foreground">
            Создайте свой первый контент за 30 секунд
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Параметры генерации</CardTitle>
              <CardDescription>Настройте параметры для создания контента</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Тип контента</Label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(contentTypes).map(([key, value]) => (
                      <SelectItem key={key} value={key}>
                        <div className="flex items-center space-x-2">
                          <span>{value.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Тема контента</Label>
                <Textarea
                  placeholder="Например: Преимущества искусственного интеллекта в маркетинге"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Длина текста: {length[0]} слов</Label>
                <Slider
                  value={length}
                  onValueChange={setLength}
                  min={500}
                  max={5000}
                  step={500}
                  className="mt-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>500</span>
                  <span>5000</span>
                </div>
              </div>

              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating}
                className="w-full"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Генерируем...
                  </>
                ) : (
                  <>
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Сгенерировать контент
                  </>
                )}
              </Button>

              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Info" size={16} />
                  <span>Это демо-версия. Зарегистрируйтесь для полного доступа</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Результат</CardTitle>
                  <CardDescription>Сгенерированный контент появится здесь</CardDescription>
                </div>
                {generatedText && (
                  <Button variant="outline" size="sm" onClick={handleCopy}>
                    <Icon name="Copy" size={16} className="mr-2" />
                    Копировать
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {generatedText ? (
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/50 rounded-lg min-h-[400px] max-h-[500px] overflow-y-auto">
                    <div className="prose prose-sm max-w-none whitespace-pre-wrap">
                      {generatedText}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span>Слов: ~{Math.round(generatedText.split(' ').length)}</span>
                      <span>Символов: {generatedText.length}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-600">
                      <Icon name="Check" size={16} />
                      <span>Уникальность 97%</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                  <Icon name="Sparkles" size={48} className="text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Укажите тему и нажмите "Сгенерировать контент"
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoGenerator;
