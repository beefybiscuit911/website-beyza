import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Save } from "lucide-react";

const Settings = () => {
  const { user } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Settings saved successfully!");
  };

  return (
    <Layout>
      <SEOHead
        title="Account Settings - ParentGO"
        description="Manage your ParentGO account settings and preferences."
        canonical="/settings"
      />

      <section className="section-padding bg-background">
        <div className="container-width max-w-2xl">
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold text-foreground mb-2">
              Account Settings
            </h1>
            <p className="text-muted-foreground">
              Manage your account information and preferences
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    defaultValue={user?.name || ""}
                    className="bg-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={user?.email || ""}
                    className="bg-muted"
                    disabled
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="020 1234 5678"
                  className="bg-muted"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="123 Family Street"
                  className="bg-muted"
                />
              </div>

              <Button type="submit" variant="hero" size="lg">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Settings;
