
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, MapPin, Heart } from "lucide-react";

const Index = () => {
  const [selectedDate] = useState(28);

  const weekDays = [
    { day: "MON", date: 23 },
    { day: "TUE", date: 24 },
    { day: "WED", date: 25 },
    { day: "THU", date: 26 },
    { day: "FRI", date: 27 },
    { day: "SAT", date: 28 },
    { day: "SUN", date: 29 }
  ];

  const schedule = [
    {
      time: "12:00",
      title: "Guest Gathering",
      description: "Time will fly by unnoticed with games and socializing with other guests"
    },
    {
      time: "14:00",
      title: "Ceremony",
      description: "There will be many dances, fun, congratulations and, of course, love"
    },
    {
      time: "21:00",
      title: "Evening End",
      description: "You will witness the creation of a new family — our family"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-200 text-wine-900 relative overflow-hidden">
      {/* Curved decorative line for hero section */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="none">
          <path
            d="M0,100 Q200,50 400,150 L400,0 L0,0 Z"
            fill="none"
            stroke="rgba(139, 21, 56, 0.1)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6">
        {/* Names above the card */}
        <div className="text-center text-wine-900 mb-8 z-10">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold italic mb-4 animate-fade-in">
            Anna
          </h1>
          <div className="flex items-center justify-center my-6">
            <div className="h-px bg-wine-300 w-16"></div>
            <span className="mx-4 text-2xl">&</span>
            <div className="h-px bg-wine-300 w-16"></div>
          </div>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold italic animate-fade-in">
            Maxim
          </h1>
        </div>

        {/* Video Card */}
        <Card className="w-full max-w-md h-64 overflow-hidden border-wine-200 shadow-lg relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=1200&fit=crop&crop=faces')`
            }}
          >
            <div className="absolute inset-0 bg-wine-900/30"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center">
            <Button 
              size="lg" 
              className="rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 text-white"
            >
              <Play className="w-6 h-6 mr-2" />
              <span className="font-inter">Watch Our Story</span>
            </Button>
          </div>
        </Card>

        {/* Decorative floral elements */}
        <div className="absolute top-10 right-4 opacity-30">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-wine-300">
            <path d="M30 10C35 15 40 20 30 30C20 20 25 15 30 10Z" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M15 30C20 25 25 30 30 30C25 35 20 35 15 30Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      </section>

      {/* Invitation Message */}
      <section className="py-16 px-6 text-center relative">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold mb-8 decorative-line">
            Dear Guests
          </h2>
          <p className="text-lg leading-relaxed text-wine-700 font-inter">
            We invite you to share with us the joyful day when we become a family!
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
            <p className="font-playfair text-2xl italic text-wine-800">September</p>
          </div>
        </div>
      </section>

      {/* Schedule with curved background design */}
      <section className="py-16 px-6 bg-cream-50 relative overflow-hidden">
        {/* Curved decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="none">
            <path
              d="M0,50 Q200,0 400,100 L400,200 Q200,150 0,250 L0,300 Q200,250 400,350 L400,600 L0,600 Z"
              fill="rgba(139, 21, 56, 0.03)"
              stroke="rgba(139, 21, 56, 0.1)"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="max-w-md mx-auto relative z-10">
          <div className="space-y-12">
            {schedule.map((item, index) => (
              <div key={index} className="relative">
                {/* Curved connecting line */}
                {index < schedule.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-wine-200"></div>
                )}
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 text-right mr-6">
                    <div className="font-inter text-lg font-semibold text-wine-900">
                      {item.time}
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-wine-100 shadow-sm">
                    <h3 className="font-playfair text-2xl font-bold text-wine-900 mb-2 italic">
                      {item.title}
                    </h3>
                    <p className="text-wine-700 font-inter leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Decorative floral element */}
                <div className="absolute -right-2 top-2 opacity-20">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="text-wine-400">
                    <path d="M15 5C17.5 7.5 20 10 15 15C10 10 12.5 7.5 15 5Z" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.1"/>
                  </svg>
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
                Location
              </h3>
              <p className="text-wine-700 font-inter mb-1">Royal Beach Restaurant</p>
              <p className="text-wine-600 font-inter text-sm mb-4">South Road, 14</p>
              
              <Button className="bg-wine-900 hover:bg-wine-800 text-cream-200 font-inter">
                <MapPin className="w-4 h-4 mr-2" />
                Open Map
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Love Story */}
      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold text-wine-900 mb-8 decorative-line">
            Love Story
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
            It was during our college years. My friend and I were studying at different 
            institutes and decided to meet in a group. From one side, he didn't leave 
            me alone all evening, gave compliments, constantly joked, and I constantly 
            laughed. And we couldn't resist — I couldn't resist his jokes, he couldn't 
            resist my charming laughter.
          </p>
        </div>
      </section>

      {/* Requests */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-wine-900 mb-8 text-center decorative-line">
            A Few Requests
          </h2>
          
          <div className="space-y-6">
            <Card className="bg-wine-900 text-cream-200 border-wine-800">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-bold mb-4">Flowers</h3>
                <p className="font-inter leading-relaxed">
                  Please don't give us live flowers. We won't have time to 
                  enjoy their beauty before leaving for our honeymoon.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-wine-900 text-cream-200 border-wine-800">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-bold mb-4">Gifts</h3>
                <p className="font-inter leading-relaxed">
                  If you want to give us a valuable and useful gift — 
                  an envelope would be best!
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
          <p className="font-inter text-sm opacity-75">September 28, 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
