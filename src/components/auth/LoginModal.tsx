import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Loader2, Mail, Lock } from "lucide-react";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      const success = await login(email, password);
      if (success) {
        toast.success("Successfully logged in!");
        onOpenChange(false);
        setEmail("");
        setPassword("");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold text-foreground">
            Welcome to ParentGO
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Sign in to your account to book activities
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-muted border-border"
                disabled={isLoading}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-muted border-border"
                disabled={isLoading}
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-primary hover:underline font-medium"
              onClick={() => toast.info("Registration coming soon!")}
            >
              Sign up here
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
