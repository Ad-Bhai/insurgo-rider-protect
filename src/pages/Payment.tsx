import { useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, CreditCard, Smartphone, CheckCircle, ArrowLeft, Lock } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const planDetails: Record<string, { name: string; price: string; period: string; features: string[] }> = {
  lite: {
    name: "Lite Shield",
    price: "₹29",
    period: "/week",
    features: ["2 disruptions / week", "₹200 per event", "₹400 weekly max"],
  },
  smart: {
    name: "Smart Shield",
    price: "₹49",
    period: "/week",
    features: ["4 disruptions / week", "₹300 per event", "₹1,200 weekly max"],
  },
  pro: {
    name: "Pro Shield",
    price: "₹99",
    period: "/week",
    features: ["1 payout per day", "₹400 per event", "₹2,400 weekly max"],
  },
  flex: {
    name: "Daily Flex Plan",
    price: "₹5",
    period: "/day",
    features: ["₹150 payout per day", "Pay only when active", "No weekly commitment"],
  },
};

const Payment = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const planKey = params.get("plan") || "smart";
  const plan = planDetails[planKey] || planDetails.smart;

  const [method, setMethod] = useState<"upi" | "card">("upi");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [processing, setProcessing] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      toast.success("Payment successful! Your plan is now active.");
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container max-w-4xl">
        <Link to="/pricing" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Plans
        </Link>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Order Summary */}
          <AnimatedSection className="md:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 sticky top-24">
              <h2 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" /> Order Summary
              </h2>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-4">
                <p className="font-display font-bold text-primary text-lg">{plan.name}</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-display font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border pt-4 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total due today</span>
                <span className="font-display font-bold text-lg text-foreground">{plan.price}</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Payment Form */}
          <AnimatedSection delay={0.1} className="md:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display font-semibold text-xl mb-1">Payment Details</h2>
              <p className="text-sm text-muted-foreground mb-6 flex items-center gap-1">
                <Lock className="h-3.5 w-3.5" /> Secure & encrypted payment
              </p>

              {/* Method Toggle */}
              <div className="flex gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setMethod("upi")}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-medium transition-all ${
                    method === "upi"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  <Smartphone className="h-4 w-4" /> UPI
                </button>
                <button
                  type="button"
                  onClick={() => setMethod("card")}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-medium transition-all ${
                    method === "card"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  <CreditCard className="h-4 w-4" /> Card
                </button>
              </div>

              <form onSubmit={handlePay} className="space-y-4">
                {method === "upi" ? (
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-foreground">UPI ID</label>
                    <Input
                      placeholder="yourname@upi"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">e.g. name@paytm, name@gpay, name@ybl</p>
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Cardholder Name</label>
                      <Input
                        placeholder="Full name on card"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Card Number</label>
                      <Input
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))}
                        required
                        maxLength={16}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Expiry</label>
                        <Input
                          placeholder="MM/YY"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          required
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">CVV</label>
                        <Input
                          type="password"
                          placeholder="•••"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                          required
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </>
                )}

                <Button type="submit" variant="hero" size="lg" className="w-full mt-6" disabled={processing}>
                  {processing ? "Processing..." : `Pay ${plan.price} ${plan.period}`}
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-3">
                  By paying, you agree to InsurGo's Terms of Service. Cancel anytime.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Payment;
