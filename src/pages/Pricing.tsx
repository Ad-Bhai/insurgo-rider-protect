import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, Star } from "lucide-react";

const plans = [
  {
    name: "Lite Shield",
    price: "₹29",
    period: "/week",
    desc: "Best for: Part-time riders",
    features: ["2 disruptions / week", "₹200 per event", "₹400 weekly max", "Rain, Heat, AQI protection", "Auto payouts"],
    popular: false,
  },
  {
    name: "Smart Shield",
    price: "₹49",
    period: "/week",
    desc: "Best for: Regular riders",
    features: ["4 disruptions / week", "₹300 per event", "₹1,200 weekly max", "Multi-event protection", "Faster payouts", "Streak Bonus"],
    popular: true,
  },
  {
    name: "Pro Shield",
    price: "₹99",
    period: "/week",
    desc: "Best for: Full-time earners",
    features: ["1 payout per day", "₹400 per event", "₹2,400 weekly max", "Priority payouts", "Full coverage", "Streak Bonus"],
    popular: false,
  },
];

const flexPlan = {
  name: "Daily Flex Plan",
  price: "₹5",
  period: "/day",
  desc: "Only charged on work days — perfect for flexible workers",
  features: ["₹150 payout per day", "Pay only when active", "No weekly commitment", "Ideal for part-time gig workers"],
};

const Pricing = () => (
  <div className="min-h-screen pt-24">
    <section className="py-20">
      <div className="container">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Simple, Affordable <span className="text-gradient">Weekly Plans</span>
          </h1>
          <p className="text-lg text-muted-foreground">No long-term contracts. Cancel anytime. Protection that fits your pocket.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <div className={`relative p-8 rounded-2xl border h-full flex flex-col ${
                plan.popular
                  ? "border-primary shadow-glow-blue bg-card"
                  : "border-border bg-card"
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold flex items-center gap-1">
                    <Star className="h-3 w-3" /> Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display text-lg font-semibold mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/signup">
                  <Button variant={plan.popular ? "hero" : "outline"} className="w-full" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Daily Flex Plan */}
        <AnimatedSection className="max-w-2xl mx-auto mt-12">
          <div className="relative p-8 rounded-2xl border border-accent/30 bg-card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{flexPlan.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{flexPlan.desc}</p>
                <ul className="space-y-2">
                  {flexPlan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center sm:text-right shrink-0">
                <div className="flex items-baseline gap-1 justify-center sm:justify-end">
                  <span className="text-4xl font-display font-bold">{flexPlan.price}</span>
                  <span className="text-muted-foreground">{flexPlan.period}</span>
                </div>
                <Link to="/signup">
                  <Button variant="outline" className="mt-4 w-full sm:w-auto" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Pricing;
