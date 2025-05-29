
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, MapPin, Heart } from "lucide-react";

const Index = () => {
  const [selectedDate] = useState(28);

  const weekDays = [
    { day: "ПН", date: 23 },
    { day: "ВТ", date: 24 },
    { day: "СР", date: 25 },
    { day: "ЧТ", date: 26 },
    { day: "ПТ", date: 27 },
    { day: "СБ", date: 28 },
    { day: "ВС", date: 29 }
  ];

  const schedule = [
    {
      time: "12:00",
      title: "Сбор гостей",
      description: "Время пролетит незаметно за играми и общением с другими гостями"
    },
    {
      time: "14:00",
      title: "Церемония",
      description: "Будет много танцев, веселья, поздравлений и, конечно, любви"
    },
    {
      time: "21:00",
      title: "Окончание вечера",
      description: "Вы станете свидетелями создания новой семьи — нашей семьи"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-200 text-wine-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-gray-400"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=1200&fit=crop&crop=faces')`
          }}
        >
          <div className="absolute inset-0 bg-wine-900/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <div className="mb-8">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold italic mb-4 animate-fade-in">
              Anna
            </h1>
            <div className="flex items-center justify-center my-6">
              <div className="h-px bg-white/50 w-16"></div>
              <span className="mx-4 text-2xl">&</span>
              <div className="h-px bg-white/50 w-16"></div>
            </div>
            <h1 className="font-playfair text-6xl md:text-8xl font-bold italic animate-fade-in">
              Maxim
            </h1>
          </div>
          
          <Button 
            size="lg" 
            className="rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
          >
            <Play className="w-6 h-6 mr-2" />
            <span className="font-inter">Watch Our Story</span>
          </Button>
        </div>

        {/* Decorative floral elements */}
        <div className="absolute top-10 left-4 opacity-30">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-white">
            <path d="M30 10C35 15 40 20 30 30C20 20 25 15 30 10Z" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M15 30C20 25 25 30 30 30C25 35 20 35 15 30Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      </section>

      {/* Invitation Message */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold mb-8 decorative-line">
            Дорогие гости
          </h2>
          <p className="text-lg leading-relaxed text-wine-700 font-inter">
            Мы приглашаем вас разделить с нами радостный день, в который мы станем семьёй!
          </p>
        </div>
      </section>

      {/* Date Selector */}
      <section className="py-12 px-6">
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-7 gap-2 mb-8">
            {weekDays.map((day) => (
              <div key={day.date} className="text-center">
                <div className="text-sm font-inter text-wine-600 mb-2">{day.day}</div>
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center font-inter font-medium
                  ${day.date === selectedDate 
                    ? 'bg-wine-900 text-cream-200 relative' 
                    : 'text-wine-700 hover:bg-wine-100 transition-colors'
                  }
                `}>
                  {day.date}
                  {day.date === selectedDate && (
                    <Heart className="absolute -bottom-2 w-4 h-4 text-wine-900 animate-heart-beat" />
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="font-playfair text-2xl italic text-wine-800">Сентябрь</p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-md mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-wine-200"></div>
            
            {schedule.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 bg-wine-900 rounded-full flex items-center justify-center text-cream-200 font-inter font-semibold text-sm z-10">
                  {item.time.split(':')[0]}
                </div>
                
                <div className="ml-6">
                  <h3 className="font-playfair text-2xl font-bold text-wine-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-wine-700 font-inter leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto">
          <Card className="overflow-hidden border-wine-200 shadow-lg">
            <div className="h-48 bg-cover bg-center" style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop')`
            }}>
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="font-playfair text-2xl font-bold text-wine-900 mb-2">
                Локация
              </h3>
              <p className="text-wine-700 font-inter mb-1">Ресторан Royal Beach</p>
              <p className="text-wine-600 font-inter text-sm mb-4">Южная дор., 14</p>
              
              <Button className="bg-wine-900 hover:bg-wine-800 text-cream-200 font-inter">
                <MapPin className="w-4 h-4 mr-2" />
                Открыть карту
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Love Story */}
      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold text-wine-900 mb-8 decorative-line">
            История любви
          </h2>
          
          <div className="mb-8">
            <div 
              className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop')`
              }}
            ></div>
          </div>
          
          <p className="text-wine-700 font-inter leading-relaxed">
            Это были студенческие годы. Мы со своей подругой учились в разных 
            институтах и решили встретиться в компании из одной стороны целый вечер 
            не отходил от меня, делал комплименты, постоянно шутил, а я постоянно 
            смеялась. И мы не смогли устоять — я от его шуток, он — от моего 
            обворожительного смеха.
          </p>
        </div>
      </section>

      {/* Requests */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-wine-900 mb-8 text-center decorative-line">
            Несколько просьб
          </h2>
          
          <div className="space-y-6">
            <Card className="bg-wine-900 text-cream-200 border-wine-800">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-bold mb-4">Цветы</h3>
                <p className="font-inter leading-relaxed">
                  Пожалуйста, не дарите нам живые цветы. Мы не успеем 
                  насладиться их красотой до отъезда в свадебное путешествие.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-wine-900 text-cream-200 border-wine-800">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-bold mb-4">Подарки</h3>
                <p className="font-inter leading-relaxed">
                  Если хотите подарить ценный и нужный нам подарок — 
                  лучше всего конверт!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-wine-900 text-cream-200 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mx-auto text-cream-200 opacity-50">
              <path d="M30 10C35 15 40 20 30 30C20 20 25 15 30 10Z" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M15 30C20 25 25 30 30 30C25 35 20 35 15 30Z" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M45 30C40 35 35 30 30 30C35 25 40 25 45 30Z" stroke="currentColor" strokeWidth="1" fill="none"/>
            </svg>
          </div>
          <p className="font-playfair text-2xl italic mb-2">Anna & Maxim</p>
          <p className="font-inter text-sm opacity-75">28 сентября 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
