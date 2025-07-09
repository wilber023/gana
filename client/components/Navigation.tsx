import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Menu,
  Activity,
  ShoppingCart,
  TrendingUp,
  CreditCard,
  Users,
  Settings,
  Zap,
  Shield,
  Scan,
} from "lucide-react";
import { cn } from "@/lib/utils";
const logo = "/img/logoGanaTrace.jpg";

const navigation = [
  { name: "Marketplace", href: "/", icon: TrendingUp },
  { name: "Cómo Funciona", href: "/about", icon: Activity },
  { name: "Vender", href: "/register", icon: Scan, requiresAuth: true },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // In real app, this would come from auth context

  const NavItems = ({ className = "", onItemClick = () => {} }) => (
    <nav className={cn("flex gap-6", className)}>
      {navigation.map((item) => {
        const Icon = item.icon;
        // Don't show auth-required items if not authenticated
        if (item.requiresAuth && !isAuthenticated) return null;

        return (
          <Link
            key={item.name}
            to={item.href}
            onClick={onItemClick}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              location.pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
            <img src={logo} className="h-10 w-10 	rounded-md" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-ganatrace-600 bg-clip-text text-transparent">
            GANATRACE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavItems />
          <div className="flex items-center gap-2">
            {!isAuthenticated ? (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/login">Iniciar Sesión</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/register">Registrarse</Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/profile">
                    <Shield className="h-4 w-4 mr-2" />
                    Mi Perfil
                  </Link>
                </Button>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-6 mt-6">
                <NavItems
                  className="flex-col items-start"
                  onItemClick={() => setIsOpen(false)}
                />
                <div className="flex flex-col gap-2 pt-4 border-t">
                  <Button variant="ghost" className="justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Cumplimiento ISO 22005
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Configuración
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
