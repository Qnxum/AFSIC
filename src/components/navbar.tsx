import React from "react";
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react"; // Assuming Icon is already imported, if not, add it.

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else if (localStorage.theme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else { // Default to light mode if no theme is set in localStorage
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
      localStorage.theme = 'light'; // Persist light mode as default
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };
  
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Objectives", href: "#objectives" },
    { name: "Topics", href: "#topics" },
    { name: "Speakers", href: "#speakers" },
    { name: "Packages", href: "#pricing" },
    { name: "Register", href: "#register" }
  ];

  return (
    <HeroNavbar 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred
      className="bg-background/70 backdrop-blur-md"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-text">AFSIC</div>
            <div className="ml-2 text-xs text-default-500">TOWARDS A WINNING NATION</div>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link 
              color="foreground" 
              href={item.href}
              className="font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex items-center">
          <Button 
            isIconOnly
            size="sm"
            variant="light"
            aria-label="Toggle Dark Mode"
            onClick={toggleDarkMode}
            className="mr-2"
          >
            <Icon icon={isDarkMode ? "heroicons-solid:sun" : "heroicons-solid:moon"} className="text-xl" />
          </Button>
          <Button 
            as={Link} 
            color="primary" 
            href="#register" 
            variant="flat"
            className="font-medium"
          >
            Register Now
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              color="foreground"
              className="w-full font-medium py-2"
              href={item.href}
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button 
            isIconOnly
            size="lg"
            variant="light"
            aria-label="Toggle Dark Mode"
            onClick={toggleDarkMode}
            className="w-full mt-4"
          >
            <Icon icon={isDarkMode ? "heroicons-solid:sun" : "heroicons-solid:moon"} className="text-2xl" />
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
};
