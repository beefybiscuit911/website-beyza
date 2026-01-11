import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Loader2, Mail, Lock, User, Phone, MapPin, Building } from "lucide-react";

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToLogin?: () => void;
}

export const RegistrationModal = ({ open, onOpenChange, onSwitchToLogin }: RegistrationModalProps) => {
  const { login } = useAuth();
  const [step, setStep] = useState<"account" | "address">("account");
  const [isLoading, setIsLoading] = useState(false);
  
  // Account information
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    emailRepeat: "",
    phone: "",
    password: "",
    // Address information
    streetAddress: "",
    apartment: "",
    townCity: "",
    stateCounty: "",
    postCode: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validatePassword = (password: string): string | null => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one capital letter";
    }
    return null;
  };

  const validateAccountStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.surname.trim()) {
      newErrors.surname = "Surname is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.emailRepeat.trim()) {
      newErrors.emailRepeat = "Please confirm your email";
    } else if (formData.email !== formData.emailRepeat) {
      newErrors.emailRepeat = "Emails do not match";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      const passwordError = validatePassword(formData.password);
      if (passwordError) {
        newErrors.password = passwordError;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateAddressStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = "Street address is required";
    }
    if (!formData.townCity.trim()) {
      newErrors.townCity = "Town/City is required";
    }
    if (!formData.stateCounty.trim()) {
      newErrors.stateCounty = "State/County is required";
    }
    if (!formData.postCode.trim()) {
      newErrors.postCode = "Post code/ZIP is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleAccountNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAccountStep()) {
      setStep("address");
    }
  };

  const handleAddressBack = () => {
    setStep("account");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateAddressStep()) {
      return;
    }

    setIsLoading(true);
    try {
      // Simulate registration - in real app, this would call an API
      // For demo purposes, we'll just log them in
      const success = await login(formData.email, formData.password);
      if (success) {
        toast.success("Account created successfully!");
        onOpenChange(false);
        // Reset form
        setFormData({
          name: "",
          surname: "",
          email: "",
          emailRepeat: "",
          phone: "",
          password: "",
          streetAddress: "",
          apartment: "",
          townCity: "",
          stateCounty: "",
          postCode: "",
        });
        setStep("account");
        setErrors({});
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold text-foreground">
            Create Your ParentGO Account
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {step === "account" 
              ? "Step 1 of 2: Account Information"
              : "Step 2 of 2: Address Information"}
          </DialogDescription>
        </DialogHeader>

        {step === "account" ? (
          <form onSubmit={handleAccountNext} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name *
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`pl-10 bg-muted border-border ${errors.name ? "border-destructive" : ""}`}
                    disabled={isLoading}
                    required
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="surname" className="text-foreground">
                  Surname *
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="surname"
                    type="text"
                    placeholder="Smith"
                    value={formData.surname}
                    onChange={(e) => handleInputChange("surname", e.target.value)}
                    className={`pl-10 bg-muted border-border ${errors.surname ? "border-destructive" : ""}`}
                    disabled={isLoading}
                    required
                  />
                </div>
                {errors.surname && (
                  <p className="text-xs text-destructive">{errors.surname}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email Address *
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`pl-10 bg-muted border-border ${errors.email ? "border-destructive" : ""}`}
                  disabled={isLoading}
                  required
                />
              </div>
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="emailRepeat" className="text-foreground">
                Confirm Email Address *
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  id="emailRepeat"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.emailRepeat}
                  onChange={(e) => handleInputChange("emailRepeat", e.target.value)}
                  className={`pl-10 bg-muted border-border ${errors.emailRepeat ? "border-destructive" : ""}`}
                  disabled={isLoading}
                  required
                />
              </div>
              {errors.emailRepeat && (
                <p className="text-xs text-destructive">{errors.emailRepeat}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                Phone Number *
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="020 1234 5678"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`pl-10 bg-muted border-border ${errors.phone ? "border-destructive" : ""}`}
                  disabled={isLoading}
                  required
                />
              </div>
              {errors.phone && (
                <p className="text-xs text-destructive">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Password *
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  id="password"
                  type="password"
                  placeholder="At least 6 characters, 1 capital letter"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={`pl-10 bg-muted border-border ${errors.password ? "border-destructive" : ""}`}
                  disabled={isLoading}
                  required
                />
              </div>
              {errors.password && (
                <p className="text-xs text-destructive">{errors.password}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Password must be at least 6 characters and contain at least one capital letter
              </p>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              Next: Address Information
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Already have an account?{" "}
              <button
                type="button"
                className="text-primary hover:underline font-medium"
                onClick={() => {
                  onOpenChange(false);
                  onSwitchToLogin?.();
                }}
              >
                Sign in here
              </button>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="streetAddress" className="text-foreground">
                Street Address *
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  id="streetAddress"
                  type="text"
                  placeholder="123 Family Street"
                  value={formData.streetAddress}
                  onChange={(e) => handleInputChange("streetAddress", e.target.value)}
                  className={`pl-10 bg-muted border-border ${errors.streetAddress ? "border-destructive" : ""}`}
                  disabled={isLoading}
                  required
                />
              </div>
              {errors.streetAddress && (
                <p className="text-xs text-destructive">{errors.streetAddress}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="apartment" className="text-foreground">
                Apartment (Optional)
              </Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  id="apartment"
                  type="text"
                  placeholder="Flat 4A"
                  value={formData.apartment}
                  onChange={(e) => handleInputChange("apartment", e.target.value)}
                  className="pl-10 bg-muted border-border"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="townCity" className="text-foreground">
                Town/City *
              </Label>
              <Input
                id="townCity"
                type="text"
                placeholder="London"
                value={formData.townCity}
                onChange={(e) => handleInputChange("townCity", e.target.value)}
                className={`bg-muted border-border ${errors.townCity ? "border-destructive" : ""}`}
                disabled={isLoading}
                required
              />
              {errors.townCity && (
                <p className="text-xs text-destructive">{errors.townCity}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="stateCounty" className="text-foreground">
                State/County *
              </Label>
              <Input
                id="stateCounty"
                type="text"
                placeholder="Greater London"
                value={formData.stateCounty}
                onChange={(e) => handleInputChange("stateCounty", e.target.value)}
                className={`bg-muted border-border ${errors.stateCounty ? "border-destructive" : ""}`}
                disabled={isLoading}
                required
              />
              {errors.stateCounty && (
                <p className="text-xs text-destructive">{errors.stateCounty}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="postCode" className="text-foreground">
                Post Code/ZIP *
              </Label>
              <Input
                id="postCode"
                type="text"
                placeholder="SW1A 1AA"
                value={formData.postCode}
                onChange={(e) => handleInputChange("postCode", e.target.value)}
                className={`bg-muted border-border ${errors.postCode ? "border-destructive" : ""}`}
                disabled={isLoading}
                required
              />
              {errors.postCode && (
                <p className="text-xs text-destructive">{errors.postCode}</p>
              )}
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={handleAddressBack}
                disabled={isLoading}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="flex-1"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
