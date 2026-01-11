import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  user: { email: string; name: string } | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate login - in real app, this would call an API
    // For demo purposes, accept any email/password
    if (email && password) {
      setIsLoggedIn(true);
      setUser({
        email,
        name: email.split("@")[0],
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
