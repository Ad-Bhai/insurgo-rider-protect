import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    toast.success("Login successful! Redirecting...");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-24 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 font-display text-2xl font-bold mb-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-gradient">InsurGo</span>
          </Link>
          <p className="text-muted-foreground">Welcome back, rider</p>
        </div>
        <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="email" placeholder="rider@email.com" required className="pl-10 bg-secondary border-border" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="password" placeholder="••••••••" required className="pl-10 bg-secondary border-border" />
            </div>
          </div>
          <Button variant="hero" size="lg" type="submit" className="w-full">Log In</Button>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account? <Link to="/signup" className="text-primary hover:underline">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
