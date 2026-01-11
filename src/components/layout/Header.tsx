import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, User, Settings, LayoutDashboard, LogOut, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "next-themes";
import { LoginModal } from "@/components/auth/LoginModal";
import { AppInstallModal } from "@/components/auth/AppInstallModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [appInstallModalOpen, setAppInstallModalOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/activities", label: "Activities" },
    { href: "/blog", label: "Blog" },
    { href: "/providers", label: "Providers" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleDownloadApp = () => {
    setAppInstallModalOpen(true);
  };

  const handleLogout = () => {
    logout();
  };

  const getUserInitials = () => {
    if (user?.name) {
      const nameParts = user.name.split(" ");
      if (nameParts.length >= 2) {
        return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
      }
      return user.name.substring(0, 2).toUpperCase();
    }
    return "U";
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <nav className="container-width section-padding py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">P</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">ParentGO</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons / User Menu */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="tealOutline" size="sm" onClick={handleDownloadApp}>
                Download App
              </Button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/providers">List Your Activity</Link>
              </Button>
              
              {!isLoggedIn ? (
                <Button variant="outline" size="sm" onClick={() => setLoginModalOpen(true)}>
                  Log In
                </Button>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-coral-dark flex items-center justify-center text-primary-foreground font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      {getUserInitials()}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-card border-border">
                    <DropdownMenuLabel className="font-display">
                      {user?.name || "User"}
                    </DropdownMenuLabel>
                    <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                      {user?.email}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="cursor-pointer">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/bookings" className="cursor-pointer">
                        <Calendar className="mr-2 h-4 w-4" />
                        My Bookings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/favourites" className="cursor-pointer">
                        <Heart className="mr-2 h-4 w-4" />
                        Favourites
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings" className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        Account Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel className="text-xs text-muted-foreground">
                      Theme
                    </DropdownMenuLabel>
                    <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                      <DropdownMenuRadioItem value="light" className="cursor-pointer">
                        <Sun className="mr-2 h-4 w-4" />
                        Day
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="dark" className="cursor-pointer">
                        <Moon className="mr-2 h-4 w-4" />
                        Dark
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive focus:text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-colors py-2 ${
                      isActive(link.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <Button variant="tealOutline" size="default" onClick={handleDownloadApp}>
                    Download App
                  </Button>
                  <Button variant="hero" size="default" asChild>
                    <Link to="/providers">List Your Activity</Link>
                  </Button>
                  {!isLoggedIn ? (
                    <Button variant="outline" size="default" onClick={() => { setLoginModalOpen(true); setIsMenuOpen(false); }}>
                      Log In
                    </Button>
                  ) : (
                    <>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="default" className="w-full justify-start">
                            <User className="mr-2 h-4 w-4" />
                            {user?.name || "Account"}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 bg-card border-border">
                          <DropdownMenuLabel className="font-display">
                            {user?.name || "User"}
                          </DropdownMenuLabel>
                          <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                            {user?.email}
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link to="/dashboard" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                              <LayoutDashboard className="mr-2 h-4 w-4" />
                              Dashboard
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link to="/bookings" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                              <Calendar className="mr-2 h-4 w-4" />
                              My Bookings
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link to="/favourites" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                              <Heart className="mr-2 h-4 w-4" />
                              Favourites
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link to="/settings" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                              <Settings className="mr-2 h-4 w-4" />
                              Account Settings
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuLabel className="text-xs text-muted-foreground">
                            Theme
                          </DropdownMenuLabel>
                          <DropdownMenuRadioGroup value={theme || "light"} onValueChange={setTheme}>
                            <DropdownMenuRadioItem value="light" className="cursor-pointer">
                              <Sun className="mr-2 h-4 w-4" />
                              Day
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="dark" className="cursor-pointer">
                              <Moon className="mr-2 h-4 w-4" />
                              Dark
                            </DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="cursor-pointer text-destructive focus:text-destructive">
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
      
      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
      <AppInstallModal open={appInstallModalOpen} onOpenChange={setAppInstallModalOpen} />
    </>
  );
};

export default Header;
