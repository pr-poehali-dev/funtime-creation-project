import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const NewPage = () => {
  const [serverStatus, setServerStatus] = useState<'online' | 'offline'>('offline');
  const [selectedPlan, setSelectedPlan] = useState('FREE');

  const plans = [
    { id: 'FREE', label: 'FREE', gb: 4, active: true },
    { id: '4GB', label: '4 GiB', gb: 4 },
    { id: '8GB', label: '8 GiB', gb: 8 },
    { id: '12GB', label: '12 GiB', gb: 12 },
    { id: '16GB', label: '16 GiB', gb: 16 },
    { id: '24GB', label: '24 GiB', gb: 24 },
    { id: '32GB', label: '32 GiB', gb: 32 },
    { id: 'UNLIM', label: 'UNLIM', gb: 999 }
  ];

  const onlinePlayers = [
    { time: '21h', count: 0 },
    { time: '22h', count: 1 },
    { time: '23h', count: 2 },
    { time: '00h', count: 3 },
    { time: '01h', count: 4 },
    { time: '02h', count: 5 },
    { time: '03h', count: 3 },
    { time: '04h', count: 1 }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-5xl mx-auto space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-black flex items-center gap-2">
              <img src="https://cdn.poehali.dev/files/330e3912-fe26-42da-9bdc-85d1b13eb625.png" alt="" className="w-8 h-8 rounded" />
              BlazeLegacy
            </h1>
            <p className="text-sm text-muted-foreground">funworldssezexxz.mcsh.io</p>
          </div>
          <Badge variant={serverStatus === 'online' ? 'default' : 'destructive'} className="text-sm px-4 py-1">
            {serverStatus === 'online' ? 'ONLINE' : 'OFFLINE'}
          </Badge>
        </div>

        {/* Control Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 font-bold"
            onClick={() => setServerStatus('online')}
          >
            START
          </Button>
          <Button variant="secondary" className="font-bold">
            RESTART
          </Button>
          <Button variant="destructive" className="font-bold" onClick={() => setServerStatus('offline')}>
            STOP
          </Button>
        </div>

        {/* Server Info Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-card border-primary/20">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground mb-1">VERSION</p>
              <p className="text-lg font-bold mb-2">Paper 1.17.1</p>
              <Button variant="link" className="text-primary p-0 h-auto text-sm">
                <Icon name="RefreshCw" size={14} className="mr-1" />
                CHANGE
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-primary/20">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground mb-1">BALANCE</p>
              <p className="text-lg font-bold mb-2">0 Credits</p>
              <Button variant="link" className="text-blue-500 p-0 h-auto text-sm">
                <Icon name="CreditCard" size={14} className="mr-1" />
                TOPUP
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-primary/20">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground mb-1">PAUSES IN</p>
              <p className="text-lg font-bold mb-2">00:59:50</p>
              <div className="flex gap-2">
                <Button variant="link" className="text-primary p-0 h-auto text-sm">
                  <Icon name="RotateCcw" size={14} className="mr-1" />
                  RENEW
                </Button>
                <Button variant="link" className="text-destructive p-0 h-auto text-sm">
                  <Icon name="Trash2" size={14} className="mr-1" />
                  DELETE
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bat Tier Plan */}
        <Card className="bg-card border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <span className="text-2xl">🦇</span>
              Bat Tier
              <span className="text-sm text-muted-foreground font-normal ml-2">0 Credits per hour</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Clock" size={16} className="text-muted-foreground" />
              <span>Unlimited idle time</span>
              <Badge variant="outline" className="text-xs">Premium plans only</Badge>
            </div>

            {/* Plan Selection */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
              {plans.map(plan => (
                <Button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  variant={selectedPlan === plan.id ? 'default' : 'outline'}
                  className={`${selectedPlan === plan.id ? 'bg-blue-600' : 'border-primary/30'} font-bold`}
                >
                  {plan.label}
                </Button>
              ))}
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 font-bold">
              APPLY
            </Button>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 text-sm">
                <Icon name="HardDrive" size={20} className="text-primary" />
                <span>10GiB SSD Storage</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="Zap" size={20} className="text-primary" />
                <span>200 % Burst CPU</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Online Players Chart */}
        <Card className="bg-card border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">Online Players</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 relative">
              <div className="absolute inset-0 flex items-end justify-between gap-1">
                {onlinePlayers.map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-primary rounded-t transition-all"
                      style={{ height: `${(data.count / 5) * 100}%` }}
                    ></div>
                    <span className="text-xs text-muted-foreground mt-2">{data.time}</span>
                  </div>
                ))}
              </div>
              <div className="absolute left-0 top-0 text-xs text-muted-foreground">5</div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">3</div>
              <div className="absolute left-0 bottom-0 text-xs text-muted-foreground">0</div>
            </div>
          </CardContent>
        </Card>

        {/* Network */}
        <Card className="bg-card border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">Network</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground mb-1">ADDRESS</p>
              <div className="flex items-center justify-between bg-black/30 p-3 rounded">
                <span className="font-mono">funworldssezexxz.mcsh.io</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Icon name="Check" size={16} className="text-green-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Icon name="Copy" size={16} />
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-1">SHARED IP</p>
              <div className="flex items-center justify-between bg-black/30 p-3 rounded">
                <span className="font-mono">191.96.231.12:10694</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Icon name="Copy" size={16} />
                </Button>
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-1">EXTRA PORTS</p>
              <div className="flex items-center justify-between bg-black/30 p-3 rounded">
                <Badge className="bg-blue-600">11797</Badge>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Icon name="Info" size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Server Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-card border-primary/20">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground mb-1">MEMORY</p>
              <p className="text-xl font-black">0.00 MiB</p>
              <p className="text-xs text-muted-foreground">of 4 GiB</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-primary/20">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground mb-1">CPU LOAD</p>
              <p className="text-xl font-black">0.00 %</p>
              <p className="text-xs text-muted-foreground">of 200 %</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-primary/20">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground mb-1">DISK</p>
              <p className="text-xl font-black">65.73 MiB</p>
              <p className="text-xs text-muted-foreground">of 10 GiB</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
