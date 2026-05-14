import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Moon, Sun, Calculator, FileText, Briefcase, Settings } from "lucide-react";
import { useTheme } from "../theme-provider";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const isLanding = location.pathname === "/";

  const navigation = [
    { name: "Scorer un deal", href: "/eval/new", icon: Calculator },
    { name: "Analyser PV AG", href: "/copro/new", icon: FileText },
    { name: "Portefeuille", href: "/portfolio", icon: Briefcase },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-7xl items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">ScoringDeal</span>
          </Link>
          {!isLanding && (
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`transition-colors hover:text-foreground/80 ${
                    location.pathname === item.href ? "text-foreground" : "text-foreground/60"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
        
        {/* Mobile Nav Drawer */}
        <Sheet>
          <SheetTrigger 
            render={
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            }
          />
          <SheetContent side="left" className="pr-0">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="font-bold">ScoringDeal</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex items-center gap-2 text-foreground/70 transition-colors hover:text-foreground"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/settings"
                  className="flex items-center gap-2 text-foreground/70 transition-colors hover:text-foreground"
                >
                  <Settings className="h-4 w-4" />
                  Paramètres
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        {/* Mobile Header Title */}
        <div className="flex w-full md:hidden">
          <Link to="/" className="flex items-center space-x-2">
             <span className="font-bold">ScoringDeal</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center gap-2">
            {!isLanding && (
              <Link to="/settings" className="hidden md:block">
                <Button variant="ghost" size="icon" title="Paramètres">
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>
            )}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            {isLanding && (
               <Link to="/eval/new">
                 <Button className="hidden sm:flex">Commencer gratuitement</Button>
               </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
