import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";

const Sponsors = () => {
  const sponsors = [
    {
      name: "TechCorp",
      description: "Leading technology solutions provider",
      icon: "📱",
    },
    {
      name: "Innovate Labs",
      description: "Research and development excellence",
      icon: "🔬",
    },
    {
      name: "Digital Ventures",
      description: "Investing in the future of education",
      icon: "💼",
    },
    {
      name: "Creative Studios",
      description: "Supporting artistic innovation",
      icon: "🎨",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Sponsors</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Thank you to our partners who make OTRA possible
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.map((sponsor) => (
              <Card key={sponsor.name} className="p-8 border-2 border-primary/20 hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl shrink-0">
                    {sponsor.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{sponsor.name}</h3>
                    <p className="text-muted-foreground">{sponsor.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sponsors;
