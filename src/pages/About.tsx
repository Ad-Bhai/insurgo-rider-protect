import AnimatedSection from "@/components/AnimatedSection";
import { ShieldCheck, CloudRain, Thermometer, Wind, TrafficCone, Clock, Zap, CreditCard, Smartphone } from "lucide-react";

const coverage = [
  { icon: CloudRain, title: "Heavy Rain", desc: "Monsoons and storms that cancel orders" },
  { icon: Thermometer, title: "Extreme Heat", desc: "Heatwaves reducing delivery demand" },
  { icon: Wind, title: "High Pollution", desc: "Air quality alerts limiting outdoor work" },
  { icon: TrafficCone, title: "Traffic Jams", desc: "City-wide congestion blocking routes" },
  { icon: Clock, title: "Restrictions", desc: "Curfews and sudden lockdowns" },
];

const payoutSteps = [
  { icon: Zap, title: "Automatic Detection", desc: "Our system monitors weather, traffic, and government alerts in real-time across your city." },
  { icon: CreditCard, title: "Hours-Based Payout", desc: "Compensation is calculated based on the hours you were affected, not flat rates." },
  { icon: Smartphone, title: "Instant Credit", desc: "Payouts are credited directly to your InsurGo wallet within minutes — no forms needed." },
];

const About = () => (
  <div className="min-h-screen pt-24">
    {/* Hero */}
    <section className="py-20">
      <div className="container">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <ShieldCheck className="h-4 w-4" /> Our Mission
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Protecting the People Who <span className="text-gradient">Keep Cities Moving</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Delivery riders are the backbone of modern commerce. Yet they bear the biggest risks — unpredictable weather, traffic chaos, and policy changes that can wipe out a day's earnings in minutes. InsurGo exists to change that.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* What We Cover */}
    <section className="py-20 bg-card/50">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Real-World Problems <span className="text-gradient">We Cover</span></h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coverage.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.08}>
              <div className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/30 hover:shadow-glow-blue transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <c.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-1 text-sm">{c.title}</h3>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Payout System */}
    <section className="py-20">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">How Payouts <span className="text-gradient">Work</span></h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">No manual claims. No waiting. Just automatic protection.</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {payoutSteps.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.15}>
              <div className="p-8 rounded-xl bg-card border border-border h-full">
                <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <s.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
