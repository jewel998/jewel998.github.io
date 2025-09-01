import { Header } from "@/components/ui/header";
import { Link, useLocation } from "@tanstack/react-router";
import { HeaderTheme } from "@/components/ui/header/theme";
import { Home, Mail, User } from "lucide-react";
import { cn } from "@/lib";
import { Dot } from "@/components/ui/dot";
import { motion, useScroll, useTransform } from "motion/react";
import { useCallback, useMemo } from "react";
import { useMobile } from "@/hooks/useMobile";

export function HomeNavigation() {
  const isMobile = useMobile();
  const location = useLocation();
  const { scrollY } = useScroll();
  const threshold = useMemo(() => 200, []);
  const widthValues = useMemo(
    () => (isMobile ? ["100%", "100%"] : ["100%", "60%"]),
    [isMobile]
  );
  const width = useTransform(scrollY, [0, threshold], widthValues);
  const top = useTransform(scrollY, [0, threshold], [0, 20]);
  const bottom = useTransform(scrollY, [0, threshold], [0, 0]);
  const roundedValues = useMemo(
    () => (isMobile ? [0, 0] : [0, 36]),
    [isMobile]
  );
  const rounded = useTransform(scrollY, [0, threshold], roundedValues);

  const isActive = useCallback(
    (path: string) => {
      return location.pathname === path;
    },
    [location.pathname]
  );
  return (
    <Header className="top-auto h-14 flex items-center border" asChild>
      <motion.nav
        className="m-auto px-6 lg:px-8 xl:px-12 w-full"
        style={{
          top: isMobile ? undefined : top,
          bottom: isMobile ? bottom : undefined,
          width,
          borderRadius: rounded,
        }}
      >
        <div className="w-full flex items-center justify-between relative">
          <Link
            to="/"
            className="hidden md:block text-2xl font-sign font-bold text-primary"
          >
            JB
          </Link>
          <div className="flex flex-auto md:flex-none items-center justify-evenly space-x-8 text-sm">
            <Link
              to="/"
              className={cn(
                "flex items-center space-x-3",
                isActive("/") ? "text-primary" : ""
              )}
            >
              {isActive("/") && (
                <Dot color="bg-primary" className="hidden md:block" />
              )}
              <Home className="size-6 md:size-4" />
              <p>Home</p>
            </Link>
            <Link
              to="/about"
              className={cn(
                "flex items-center space-x-3",
                isActive("/about") ? "text-primary" : ""
              )}
            >
              {isActive("/about") && (
                <Dot color="bg-primary" className="hidden md:block" />
              )}
              <User className="size-6 md:size-4" />
              <p>About</p>
            </Link>
            <Link
              to="/contact"
              className={cn(
                "flex items-center space-x-3",
                isActive("/contact") ? "text-primary" : ""
              )}
            >
              {isActive("/contact") && (
                <Dot color="bg-primary" className="hidden md:block" />
              )}
              <Mail className="size-6 md:size-4" />
              <p>Contact</p>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <HeaderTheme />
          </div>
        </div>
      </motion.nav>
    </Header>
  );
}
