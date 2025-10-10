import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Product {
  id: string;
  name: string;
  icon: string;
  price: number;
  category: 'privilege' | 'item' | 'service';
  features?: string[];
  homes?: number;
  regions?: { grief: string; anka: string };
  auctionSlots?: number;
  teleportDelay?: number;
}

const products: Product[] = [
  {
    id: 'baron',
    name: 'Барон',
    icon: '⚔️',
    price: 15,
    category: 'privilege',
    features: ['Префикс [Барон]', '/kit Барон', '/salary', '/crawl'],
    homes: 2,
    regions: { grief: '2 по 40,000 блоков', anka: '3 блоков' },
    auctionSlots: 6,
    teleportDelay: 7
  },
  {
    id: 'guard',
    name: 'Страж',
    icon: '🛡️',
    price: 27,
    category: 'privilege',
    features: ['Префикс [Страж]', '/kit Страж', '/salary', '/crawl', '/hat'],
    homes: 3,
    regions: { grief: '3 по 50,000 блоков', anka: '5 блоков' },
    auctionSlots: 8,
    teleportDelay: 5
  },
  {
    id: 'hero',
    name: 'Герой',
    icon: '🏆',
    price: 39,
    category: 'privilege',
    features: ['Префикс [Герой]', '/kit Герой', '/salary', '/crawl', '/hat', '/feed'],
    homes: 4,
    regions: { grief: '4 по 60,000 блоков', anka: '7 блоков' },
    auctionSlots: 10,
    teleportDelay: 3
  },
  {
    id: 'aspid',
    name: 'Аспид',
    icon: '🐍',
    price: 79,
    category: 'privilege',
    features: ['Префикс [Аспид]', '/kit Аспид', '/salary', '/crawl', '/hat', '/feed', '/fly'],
    homes: 5,
    regions: { grief: '5 по 80,000 блоков', anka: '10 блоков' },
    auctionSlots: 12,
    teleportDelay: 2
  },
  {
    id: 'squid',
    name: 'Сквид',
    icon: '🦑',
    price: 129,
    category: 'privilege',
    features: ['Префикс [Сквид]', '/kit Сквид', '/salary', '/crawl', '/hat', '/feed', '/fly', '/fix'],
    homes: 6,
    regions: { grief: '6 по 100,000 блоков', anka: '15 блоков' },
    auctionSlots: 15,
    teleportDelay: 1
  },
  {
    id: 'chief',
    name: 'Глава',
    icon: '👑',
    price: 249,
    category: 'privilege',
    features: ['Префикс [Глава]', '/kit Глава', '/salary', 'Все команды', '/god'],
    homes: 8,
    regions: { grief: '8 по 150,000 блоков', anka: '20 блоков' },
    auctionSlots: 20,
    teleportDelay: 0
  },
  {
    id: 'elite',
    name: 'Элита',
    icon: '💎',
    price: 349,
    category: 'privilege',
    features: ['Префикс [Элита]', '/kit Элита', '/salary', 'Все команды', '/god', '/nick'],
    homes: 10,
    regions: { grief: '10 по 200,000 блоков', anka: '30 блоков' },
    auctionSlots: 25,
    teleportDelay: 0
  },
  {
    id: 'titan',
    name: 'Титан',
    icon: '⚡',
    price: 549,
    category: 'privilege',
    features: ['Префикс [Титан]', '/kit Титан', '/salary', 'Все команды VIP', '/god', '/nick'],
    homes: 15,
    regions: { grief: '15 по 300,000 блоков', anka: '50 блоков' },
    auctionSlots: 30,
    teleportDelay: 0
  },
  {
    id: 'prince',
    name: 'Принц',
    icon: '🌟',
    price: 879,
    category: 'privilege',
    features: ['Префикс [Принц]', '/kit Принц', 'Premium команды', '/god', '/nick', '/workbench'],
    homes: 20,
    regions: { grief: '20 по 500,000 блоков', anka: '100 блоков' },
    auctionSlots: 40,
    teleportDelay: 0
  },
  {
    id: 'duke',
    name: 'Герцог',
    icon: '🔥',
    price: 2379,
    category: 'privilege',
    features: ['Префикс [Герцог]', '/kit Герцог', 'Elite команды', 'Все привилегии', 'VIP поддержка'],
    homes: 50,
    regions: { grief: 'Безлимит', anka: 'Безлимит' },
    auctionSlots: 100,
    teleportDelay: 0
  },
  {
    id: 'tokens',
    name: 'Токены',
    icon: '🪙',
    price: 15,
    category: 'item'
  },
  {
    id: 'balance',
    name: 'Биржа Баланс',
    icon: '💰',
    price: 15,
    category: 'item'
  },
  {
    id: 'pass',
    name: 'Пропуск/Доступ',
    icon: '🎫',
    price: 139,
    category: 'item'
  },
  {
    id: 'key-normal',
    name: 'Обычный Ключ',
    icon: '🗝️',
    price: 10,
    category: 'item'
  },
  {
    id: 'key-coin',
    name: 'Монетный Ключ',
    icon: '🔑',
    price: 10,
    category: 'item'
  },
  {
    id: 'key-token',
    name: 'Токен Ключ',
    icon: '🔐',
    price: 18,
    category: 'item'
  },
  {
    id: 'key-tool',
    name: 'Инструментальный Ключ',
    icon: '⚒️',
    price: 18,
    category: 'item'
  },
  {
    id: 'key-weapon',
    name: 'Оружейный Ключ',
    icon: '⚔️',
    price: 18,
    category: 'item'
  },
  {
    id: 'key-armor',
    name: 'Броневой Ключ',
    icon: '🛡️',
    price: 18,
    category: 'item'
  },
  {
    id: 'key-donate',
    name: 'Донат Ключ',
    icon: '🎁',
    price: 99,
    category: 'item'
  },
  {
    id: 'unmute',
    name: 'Размут',
    icon: '🔊',
    price: 49,
    category: 'service'
  },
  {
    id: 'unban',
    name: 'Разбан',
    icon: '🔓',
    price: 249,
    category: 'service'
  }
];

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<'30' | '90' | 'forever'>('90');
  const [activeCategory, setActiveCategory] = useState<'all' | 'privilege' | 'item' | 'service'>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFreePromo, setIsFreePromo] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsFreePromo(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsFreePromo(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const getDurationMultiplier = (duration: string) => {
    if (duration === '30') return 1;
    if (duration === '90') return 2.5;
    return 5;
  };

  const calculatePrice = (basePrice: number) => {
    if (isFreePromo) return 0;
    if (selectedDuration === 'forever') return basePrice * 10;
    return Math.round(basePrice * getDurationMultiplier(selectedDuration));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-primary/30 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">⛏️</div>
              <h1 className="text-2xl md:text-3xl font-black tracking-wider">
                <span className="text-white">FUN</span>
                <span className="text-primary text-neon">TIME</span>
                <span className="text-white">.SU</span>
              </h1>
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className="text-primary" />
            </button>

            <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-card md:bg-transparent border-b md:border-0 border-primary/30 md:border-0 flex-col md:flex-row gap-2 md:gap-6 p-4 md:p-0`}>
              <a href="#privileges" className="text-sm font-semibold hover:text-primary transition-colors">Привилегии</a>
              <a href="#items" className="text-sm font-semibold hover:text-primary transition-colors">Товары</a>
              <a href="#rules" className="text-sm font-semibold hover:text-primary transition-colors">Правила</a>
              <a href="/new" className="text-sm font-semibold hover:text-primary transition-colors bg-primary/20 px-3 py-1 rounded">Создать сервер</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          {isFreePromo && (
            <div className="mb-6 inline-block">
              <Badge className="bg-primary text-white text-lg px-6 py-3 neon-glow-strong animate-pulse">
                🎉 ВСЕ БЕСПЛАТНО! Осталось: {formatTime(timeLeft)}
              </Badge>
            </div>
          )}
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-neon">
            Выберите товар
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {isFreePromo ? 'Успей забрать БЕСПЛАТНО!' : 'Улучшите свой игровой опыт на сервере FunTime'}
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { id: 'all', label: 'Все', icon: 'Grid3x3' },
              { id: 'privilege', label: 'Привилегии', icon: 'Crown' },
              { id: 'item', label: 'Товары', icon: 'Package' },
              { id: 'service', label: 'Услуги', icon: 'Wrench' }
            ].map(cat => (
              <Button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                className={`${activeCategory === cat.id ? 'neon-glow bg-primary' : 'border-primary/50 hover:border-primary'} font-bold`}
              >
                <Icon name={cat.icon as any} size={18} className="mr-2" />
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12" id="privileges">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id}
                className="bg-card border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:neon-glow cursor-pointer group overflow-hidden"
                onClick={() => setSelectedProduct(product)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform">
                      {product.icon}
                    </div>
                    <Badge variant="outline" className="border-primary/50 text-primary font-bold">
                      {product.category === 'privilege' ? '👑' : product.category === 'item' ? '📦' : '🔧'}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    {isFreePromo ? (
                      <>
                        <span className="text-2xl font-black text-primary line-through opacity-50">от {product.price}</span>
                        <span className="text-3xl font-black text-green-500">БЕСПЛАТНО</span>
                      </>
                    ) : (
                      <>
                        <span className="text-2xl font-black text-primary">от {product.price}</span>
                        <span className="text-sm text-muted-foreground font-semibold">РУБ</span>
                      </>
                    )}
                  </div>

                  {product.features && (
                    <div className="space-y-1 mb-4">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">›</span>
                          <span className="flex-1">{feature}</span>
                        </div>
                      ))}
                      {product.features.length > 2 && (
                        <div className="text-xs text-primary font-semibold">
                          +{product.features.length - 2} еще...
                        </div>
                      )}
                    </div>
                  )}

                  <Button 
                    className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold neon-glow-strong transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-12 md:py-20 bg-card/30" id="rules">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center text-neon">
            Правила сервера
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              'Запрещен читерство и использование запрещенных модификаций',
              'Уважайте других игроков и администрацию',
              'Запрещен грифинг на чужих территориях',
              'Не спамьте в чате и не используйте нецензурную лексику',
              'Запрещена реклама сторонних серверов',
              'Следуйте указаниям администрации'
            ].map((rule, idx) => (
              <Card key={idx} className="bg-card border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-sm md:text-base">{rule}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/30 bg-card/50 py-8">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Сервер FunTime никак не относится к Mojang, AB.
          </p>
          <p className="text-xs text-muted-foreground">
            ИП Литвинчук Николай Николаевич<br />
            ИНН 644940989449, ОГРНИП 322645700028254
          </p>
          <p className="text-xs text-muted-foreground">
            Копирование контента с сайта, серверов проекта запрещено.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <a href="#" className="text-primary hover:underline">Договор оферты</a>
            <a href="#" className="text-primary hover:underline">Политика обработки персональных данных</a>
          </div>
          <p className="text-sm font-bold">
            © 2025 FunTime.su — Все Права Защищены
          </p>
        </div>
      </footer>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="bg-card border-2 border-primary max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black flex items-center gap-3">
              <span className="text-4xl">{selectedProduct?.icon}</span>
              {selectedProduct?.name}
            </DialogTitle>
          </DialogHeader>

          {selectedProduct && (
            <div className="space-y-6">
              {/* Duration Selection */}
              <div>
                <h3 className="text-sm font-bold text-primary mb-3">Выберите срок:</h3>
                <div className="flex gap-2">
                  {[
                    { value: '30', label: '30 дней' },
                    { value: '90', label: '90 дней' },
                    { value: 'forever', label: 'Навсегда' }
                  ].map(duration => (
                    <Button
                      key={duration.value}
                      onClick={() => setSelectedDuration(duration.value as any)}
                      variant={selectedDuration === duration.value ? 'default' : 'outline'}
                      className={`flex-1 ${selectedDuration === duration.value ? 'bg-primary neon-glow' : 'border-primary/50'}`}
                    >
                      {duration.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Features */}
              {selectedProduct.features && (
                <div>
                  <h3 className="text-sm font-bold text-primary mb-3">Возможности привилегии:</h3>
                  <div className="space-y-2 bg-black/50 p-4 rounded-lg border border-primary/20">
                    {selectedProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary">›</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Info */}
              {selectedProduct.homes && (
                <div>
                  <h3 className="text-sm font-bold text-primary mb-3">Прочее:</h3>
                  <div className="space-y-1 bg-black/50 p-4 rounded-lg border border-primary/20 text-sm">
                    <p>Доступно Точек домов: <span className="text-primary font-bold">{selectedProduct.homes}</span></p>
                    {selectedProduct.regions && (
                      <>
                        <p>Регионов (Гриф): <span className="text-primary font-bold">{selectedProduct.regions.grief}</span></p>
                        <p>Регионов (Анка): <span className="text-primary font-bold">{selectedProduct.regions.anka}</span></p>
                      </>
                    )}
                    {selectedProduct.auctionSlots && (
                      <p>Слотов на Аукционе: <span className="text-primary font-bold">{selectedProduct.auctionSlots}</span></p>
                    )}
                    {selectedProduct.teleportDelay !== undefined && (
                      <p>Задержка телепорта: <span className="text-primary font-bold">{selectedProduct.teleportDelay} сек</span></p>
                    )}
                  </div>
                </div>
              )}

              {/* Price & Purchase */}
              <div className="border-t border-primary/30 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold">Стоимость:</span>
                  {isFreePromo ? (
                    <div className="flex flex-col items-end">
                      <span className="text-xl font-black text-muted-foreground line-through">
                        {selectedProduct.price} руб
                      </span>
                      <span className="text-4xl font-black text-green-500">
                        БЕСПЛАТНО!
                      </span>
                    </div>
                  ) : (
                    <span className="text-3xl font-black text-primary">
                      {calculatePrice(selectedProduct.price)} руб
                    </span>
                  )}
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-black text-lg py-6 neon-glow-strong">
                  {isFreePromo ? '🎁 ЗАБРАТЬ БЕСПЛАТНО' : 'ПРИОБРЕСТИ'}
                </Button>
                {isFreePromo && (
                  <p className="text-center text-sm text-primary mt-3 font-bold">
                    ⏰ Акция закончится через {formatTime(timeLeft)}
                  </p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;