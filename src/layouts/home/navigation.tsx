import { Header } from "@/components/ui/header";
import { Link, useLocation } from "@tanstack/react-router";
import { HeaderTheme } from "@/components/ui/header/theme";
import { Home, Mail, User } from "lucide-react";
import { cn } from "@/lib";
import { Dot } from "@/components/ui/dot";
import { motion, useScroll, useTransform } from "motion/react";
import {
  useCallback,
  useMemo,
  type ComponentProps,
  type ExoticComponent,
} from "react";
import { useMobile } from "@/hooks/useMobile";

export function HomeNavigation() {
  const isMobile = useMobile();
  const { scrollY } = useScroll();
  const threshold = useMemo(() => 200, []);

  const widthValues = useMemo(
    () => (isMobile ? ["100%", "100%", "100%"] : ["100%", "95%", "60%"]),
    [isMobile]
  );
  const width = useTransform(
    scrollY,
    [0, threshold / 3, threshold],
    widthValues
  );

  const top = useTransform(
    scrollY,
    [0, threshold / 3, threshold],
    isMobile ? ["unset", "unset", "unset"] : ["0px", "0px", "20px"]
  );
  const bottom = useTransform(
    scrollY,
    [0, threshold],
    isMobile ? ["0px", "0px"] : ["unset", "unset"]
  );

  const roundedValues = useMemo(
    () => (isMobile ? ["0px", "0px"] : ["0px", "36px"]),
    [isMobile]
  );
  const borderRadius = useTransform(scrollY, [0, threshold], roundedValues);
  const borderWidth = useTransform(scrollY, [0, threshold], ["0px", "1px"]);
  const [borderTopWidth, borderLeftWidth, borderRightWidth, borderBottomWidth] =
    useMemo(() => {
      if (isMobile) return ["1px", "0px", "0px", "0px"];
      else return [borderWidth, borderWidth, borderWidth, "1px"];
    }, [isMobile, borderWidth]);

  return (
    <Header
      variant={isMobile ? "fixed" : "sticky"}
      className="top-auto h-14 flex items-center border"
      asChild
    >
      <motion.nav
        className="m-auto px-6 lg:px-8 xl:px-12 w-full"
        style={{
          top,
          bottom,
          width,
          borderRadius,
          borderTopWidth,
          borderLeftWidth,
          borderRightWidth,
          borderBottomWidth,
        }}
      >
        <div className="w-full flex items-center justify-between relative">
          <NavigationButton
            path="/"
            label="JB"
            className="hidden md:block text-2xl font-sign font-bold text-primary"
            isActiveable={false}
          />
          <div className="flex flex-auto md:flex-none items-center justify-evenly space-x-8 text-sm">
            <NavigationButton path="/" icon={Home} label="Home" />
            <NavigationButton path="/about" icon={User} label="About" />
            <NavigationButton path="/contact" icon={Mail} label="Contact" />
          </div>
          <div className="flex items-center space-x-4">
            <HeaderTheme />
          </div>
        </div>
      </motion.nav>
    </Header>
  );
}

interface NavigationButtonProps {
  path: string;
  icon?: ExoticComponent<ComponentProps<"svg">>;
  label: string;
  className?: string;
  isActiveable?: boolean;
}

function NavigationButton({
  path,
  icon: Icon,
  label,
  className,
  isActiveable = true,
}: NavigationButtonProps) {
  const location = useLocation();
  const isActive = useCallback(
    (path: string) => {
      return location.pathname === path;
    },
    [location.pathname]
  );

  return (
    <Link
      to={path}
      className={cn(
        "flex items-center space-x-3",
        isActive(path) ? "text-primary" : "",
        className
      )}
    >
      {isActiveable && isActive(path) && (
        <Dot color="bg-primary" className="hidden md:block" />
      )}
      {Icon && <Icon className="size-6 md:size-4" />}
      <p>{label}</p>
    </Link>
  );
}
