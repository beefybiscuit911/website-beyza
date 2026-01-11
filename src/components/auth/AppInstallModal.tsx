import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";

interface AppInstallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AppInstallModal = ({ open, onOpenChange }: AppInstallModalProps) => {
  const handleAppStoreClick = () => {
    window.open("https://apps.apple.com/app/parentgo", "_blank");
    onOpenChange(false);
  };

  const handlePlayStoreClick = () => {
    window.open("https://play.google.com/store/apps/details?id=com.parentgo", "_blank");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-coral-dark flex items-center justify-center mx-auto mb-4">
            <Smartphone className="text-primary-foreground" size={32} />
          </div>
          <DialogTitle className="font-display text-2xl font-bold text-foreground text-center">
            Install ParentGO App
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-center">
            Book activities faster and easier with our mobile app. Available on iOS and Android.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3 mt-6">
          <Button
            variant="hero"
            size="lg"
            className="w-full"
            onClick={handleAppStoreClick}
          >
            <Download className="mr-2 h-5 w-5" />
            Download for iOS
          </Button>
          <Button
            variant="teal"
            size="lg"
            className="w-full"
            onClick={handlePlayStoreClick}
          >
            <Download className="mr-2 h-5 w-5" />
            Download for Android
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-4">
          Continue booking on web?{" "}
          <button
            type="button"
            className="text-primary hover:underline font-medium"
            onClick={() => onOpenChange(false)}
          >
            Close
          </button>
        </p>
      </DialogContent>
    </Dialog>
  );
};
