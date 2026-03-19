import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹49",
    period: "/week",
    desc: "Essential protection for part-time riders",
    features: ["Rain disruption coverage", "Up to ₹500/week payout", "Manual claim submission", "Email support"],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹99",
    period: "/week",
    desc: "Complete protection for full-time riders",
    features: ["All weather disruptions", "Up to ₹1,500/week payout", "Automatic claim detection", "Traffic & restriction coverage", "Priority support", "Instant wallet credit"],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹149",
    period: "/week",
    desc: "Maximum coverage for power riders",
    features: ["Everything in Standard", "Up to ₹3,000/week payout", "Equipment damage protection", "24/7 dedicated support", "Family emergency cover", "Bonus: accident insurance"],
    popular: false,
  },
];

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
      </div>
    </section>
  </div>
);

export default Pricing;
