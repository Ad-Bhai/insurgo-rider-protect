import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { ShieldCheck, Wallet, Clock, CheckCircle, AlertTriangle, TrendingUp, ArrowRight } from "lucide-react";

const Dashboard = () => (
  <div className="min-h-screen pt-24">
    <section className="py-10">
      <div className="container">
        <AnimatedSection className="mb-8">
          <h1 className="text-3xl font-display font-bold mb-1">Welcome back, Ravi 👋</h1>
          <p className="text-muted-foreground">Here's your protection overview for this week.</p>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: ShieldCheck, label: "Active Plan", value: "Standard", sub: "₹99/week", color: "text-primary" },
            { icon: Wallet, label: "Total Saved", value: "₹4,750", sub: "This month", color: "text-accent" },
            { icon: Clock, label: "Claims Filed", value: "3", sub: "All approved", color: "text-primary" },
            { icon: TrendingUp, label: "Protection Score", value: "92%", sub: "Excellent", color: "text-accent" },
          ].map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.08}>
              <div className="p-5 rounded-xl bg-card border border-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{s.label}</span>
                  <s.icon className={`h-5 w-5 ${s.color}`} />
                </div>
                <p className="text-2xl font-display font-bold">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Claims */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="p-6 rounded-xl bg-card border border-border h-full">
              <h3 className="font-display font-semibold mb-4">Recent Claims</h3>
              <div className="space-y-3">
                {[
                  { date: "Mar 15", reason: "Heavy Rain — South Zone", amount: "₹850", status: "approved" },
                  { date: "Mar 12", reason: "Traffic Jam — City Center", amount: "₹400", status: "approved" },
                  { date: "Mar 8", reason: "Extreme Heat Warning", amount: "₹600", status: "approved" },
                  { date: "Mar 5", reason: "Road Closure — Highway", amount: "₹350", status: "pending" },
                ].map((c) => (
                  <div key={c.date + c.reason} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border/50">
                    <div className="flex items-center gap-3">
                      {c.status === "approved" ? (
                        <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0" />
                      )}
                      <div>
                        <p className="text-sm font-medium">{c.reason}</p>
                        <p className="text-xs text-muted-foreground">{c.date}, 2026</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-accent">{c.amount}</p>
                      <p className="text-xs text-muted-foreground capitalize">{c.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Actions */}
          <AnimatedSection delay={0.3}>
            <div className="p-6 rounded-xl bg-card border border-border h-full">
              <h3 className="font-display font-semibold mb-4">Your Plan</h3>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                <p className="text-sm text-muted-foreground">Current Plan</p>
                <p className="text-xl font-display font-bold text-primary">Standard</p>
                <p className="text-sm text-muted-foreground">₹99/week • Renews Mar 22</p>
              </div>
              <div className="space-y-3">
                <Link to="/pricing">
                  <Button variant="outline" className="w-full justify-between">
                    Upgrade Plan <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full justify-between text-muted-foreground">
                  View History <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </div>
);

export default Dashboard;
