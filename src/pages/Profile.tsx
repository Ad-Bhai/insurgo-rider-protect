import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, User, Mail, Phone, MapPin, Calendar, LogOut } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useAuth } from "@/hooks/useAuth";

const Profile = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container max-w-2xl">
        <AnimatedSection>
          <div className="text-center mb-10">
            <div className="h-24 w-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-4">
              <User className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl font-display font-bold mb-1">My Profile</h1>
            <p className="text-muted-foreground">Manage your InsurGo account</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl bg-card border border-border p-8 space-y-6">
            <h2 className="font-display font-semibold text-lg mb-4">Personal Information</h2>
            <div className="space-y-4">
              {[
                { icon: User, label: "Full Name", value: "Rajesh Kumar" },
                { icon: Mail, label: "Email", value: "rajesh.kumar@email.com" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: MapPin, label: "City", value: "Mumbai, Maharashtra" },
                { icon: Calendar, label: "Member Since", value: "March 2026" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50">
                  <item.icon className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl bg-card border border-border p-8 mt-6 space-y-4">
            <h2 className="font-display font-semibold text-lg mb-4">Active Plan</h2>
            <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div>
                <p className="font-display font-bold text-primary">Smart Shield</p>
                <p className="text-sm text-muted-foreground">₹49/week • Renews in 4 days</p>
              </div>
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div className="flex gap-3">
              <Link to="/dashboard" className="flex-1">
                <Button variant="outline" className="w-full">View Dashboard</Button>
              </Link>
              <Link to="/pricing" className="flex-1">
                <Button variant="default" className="w-full">Upgrade Plan</Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-6 text-center">
            <Button variant="ghost" className="text-destructive hover:text-destructive hover:bg-destructive/10" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" /> Log Out
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Profile;
