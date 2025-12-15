import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const AdultPage = () => {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  if (!isVerified) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-card/50 border-primary/30">
          <CardContent className="p-8 text-center space-y-6">
            <div className="text-6xl">🔞</div>
            <h1 className="text-3xl font-bold text-primary">Ограничение 18+</h1>
            <p className="text-muted-foreground">
              Данный раздел содержит контент для взрослых. 
              Подтвердите, что вам исполнилось 18 лет.
            </p>
            <div className="flex gap-4">
              <Button 
                onClick={() => setIsVerified(true)}
                className="flex-1 bg-primary hover:bg-primary/80"
              >
                Мне есть 18
              </Button>
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                className="flex-1"
              >
                Назад
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-primary/30 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-4xl">🔞</span>
              Раздел 18+
            </h1>
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              size="sm"
            >
              <Icon name="ArrowLeft" size={16} />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-card/50 border-primary/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Приватный контент</h2>
              <p className="text-muted-foreground mb-6">
                Здесь будет размещён контент для взрослой аудитории.
              </p>
              <div className="grid gap-4">
                <div className="p-4 bg-background/50 rounded-lg border border-primary/20">
                  <h3 className="font-semibold mb-2">Раздел в разработке</h3>
                  <p className="text-sm text-muted-foreground">
                    Контент добавляется администрацией сервера
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdultPage;
