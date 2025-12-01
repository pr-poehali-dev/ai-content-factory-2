import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    toast({
      title: "Скопировано",
      description: "API ключ скопирован в буфер обмена",
    });
  };

  const handleGenerateNewKey = () => {
    const newKey = 'sk_test_' + Math.random().toString(36).substring(2, 15);
    setApiKey(newKey);
    toast({
      title: "Новый ключ создан",
      description: "API ключ успешно сгенерирован",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <Icon name="Sparkles" size={28} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">ContentAI</span>
          </a>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Иван Иванов</span>
            <Button variant="outline" size="sm">
              <Icon name="LogOut" size={16} className="mr-2" />
              Выход
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Личный кабинет</h1>
          <p className="text-muted-foreground">Управляйте вашими проектами и API ключами</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="api">API Ключи</TabsTrigger>
            <TabsTrigger value="stats">Статистика</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Использовано токенов</CardTitle>
                  <Icon name="Zap" size={20} className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45,231</div>
                  <p className="text-xs text-muted-foreground">из 200,000 в месяц</p>
                  <Progress value={22.6} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Сгенерировано</CardTitle>
                  <Icon name="FileText" size={20} className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">127</div>
                  <p className="text-xs text-muted-foreground">документов за месяц</p>
                  <p className="text-xs text-green-600 mt-2">+23% к прошлому месяцу</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Текущий план</CardTitle>
                  <Icon name="Crown" size={20} className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Pro</div>
                  <p className="text-xs text-muted-foreground">₽7,990/месяц</p>
                  <Button variant="link" className="px-0 mt-1 h-auto text-xs">
                    Улучшить план
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Последние документы</CardTitle>
                <CardDescription>Ваши недавно созданные материалы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: 'SEO статья про маркетинг', type: 'Статья', words: 2500, date: '2 часа назад' },
                    { title: 'Описания товаров для магазина', type: 'Описания', words: 1200, date: '5 часов назад' },
                    { title: 'Email рассылка о распродаже', type: 'Реклама', words: 800, date: 'Вчера' },
                    { title: 'Посты для социальных сетей', type: 'Соцсети', words: 600, date: '2 дня назад' },
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition">
                      <div className="flex items-center space-x-4">
                        <Icon name="FileText" size={24} className="text-primary" />
                        <div>
                          <p className="font-medium">{doc.title}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="secondary">{doc.type}</Badge>
                            <span className="text-xs text-muted-foreground">{doc.words} слов</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{doc.date}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Icon name="ExternalLink" size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Ключи</CardTitle>
                <CardDescription>Управляйте вашими ключами для интеграции</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-accent/50">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <p className="font-medium">Production Key</p>
                        <Badge variant="default">Активен</Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input 
                          type="password" 
                          value={apiKey} 
                          readOnly 
                          className="max-w-md font-mono text-sm"
                        />
                        <Button variant="outline" size="sm" onClick={handleCopyApiKey}>
                          <Icon name="Copy" size={16} />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Создан: 15.11.2024 • Последнее использование: 2 часа назад
                      </p>
                    </div>
                  </div>

                  <Button variant="outline" onClick={handleGenerateNewKey}>
                    <Icon name="Plus" size={16} className="mr-2" />
                    Создать новый ключ
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Использование API</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Запросов за 24 часа</span>
                      <span className="font-medium">342</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Запросов за месяц</span>
                      <span className="font-medium">8,791</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Средняя скорость ответа</span>
                      <span className="font-medium">1.2 сек</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Пример использования</h3>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    {`curl -X POST https://api.contentai.com/v1/generate \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "article",
    "topic": "AI в маркетинге",
    "length": 2000
  }'`}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Использование по типам контента</CardTitle>
                  <CardDescription>За последние 30 дней</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { type: 'Статьи', count: 45, percentage: 35, color: 'bg-blue-500' },
                    { type: 'Описания товаров', count: 38, percentage: 30, color: 'bg-green-500' },
                    { type: 'Рекламные тексты', count: 28, percentage: 22, color: 'bg-yellow-500' },
                    { type: 'Email рассылки', count: 16, percentage: 13, color: 'bg-purple-500' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{item.type}</span>
                        <span className="text-sm text-muted-foreground">{item.count} шт</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.color}`} 
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Активность по дням недели</CardTitle>
                  <CardDescription>Среднее количество документов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { day: 'Понедельник', count: 18, percentage: 90 },
                    { day: 'Вторник', count: 22, percentage: 100 },
                    { day: 'Среда', count: 15, percentage: 75 },
                    { day: 'Четверг', count: 20, percentage: 95 },
                    { day: 'Пятница', count: 16, percentage: 80 },
                    { day: 'Суббота', count: 8, percentage: 40 },
                    { day: 'Воскресенье', count: 5, percentage: 25 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{item.day}</span>
                        <span className="text-sm text-muted-foreground">{item.count} док</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary" 
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Экономия времени</CardTitle>
                  <CardDescription>Сколько времени вы сэкономили с ContentAI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-accent rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">42</div>
                      <div className="text-sm text-muted-foreground">часа за месяц</div>
                    </div>
                    <div className="text-center p-4 bg-accent rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">254,000</div>
                      <div className="text-sm text-muted-foreground">слов создано</div>
                    </div>
                    <div className="text-center p-4 bg-accent rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">127</div>
                      <div className="text-sm text-muted-foreground">документов</div>
                    </div>
                    <div className="text-center p-4 bg-accent rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">95%</div>
                      <div className="text-sm text-muted-foreground">уникальность</div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center space-x-3">
                      <Icon name="TrendingUp" size={24} className="text-primary" />
                      <div>
                        <p className="font-semibold">Отличная продуктивность!</p>
                        <p className="text-sm text-muted-foreground">
                          Вы создали на 23% больше контента, чем в прошлом месяце
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
