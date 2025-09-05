import { Header } from "@/components/ui/header";
import { Link, useLocation } from "@tanstack/react-router";
import { HeaderTheme } from "@/components/ui/header/theme";
import { Home, Mail, User } from "lucide-react";
import { cn } from "@/lib";
import { Dot } from "@/components/ui/dot";
import { motion, useScroll, useTransform } from "motion/react";
import {
  useCallback,
  useEffect,
  useMemo,
  type ComponentProps,
  type ExoticComponent,
  type ReactNode,
} from "react";
import { useMobile } from "@/hooks/useMobile";
import { Trans } from "@lingui/react";
import { useI18n } from "@/components/providers/i18n";

export function HomeNavigation() {
  const { locale, loadMessages } = useI18n();
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

  useEffect(() => {
    loadMessages(
      locale,
      import(`@/layouts/home/navigation/i18n/${locale}.json`)
    );
  }, [loadMessages, locale]);

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
        <div
          className={cn(
            "w-full flex items-center justify-between relative",
            isMobile ? "pb-[--isab]" : ""
          )}
        >
          <NavigationButton
            path="/"
            children="JB"
            className="hidden md:block text-2xl font-sign font-bold text-primary"
            isActiveable={false}
          />
          <div className="flex flex-auto md:flex-none items-center justify-evenly space-x-8 text-sm">
            <NavigationButton path="/" icon={Home}>
              <Trans id="home" message="Home" />
            </NavigationButton>
            <NavigationButton path="/about" icon={User}>
              <Trans id="about" message="About" />
            </NavigationButton>
            <NavigationButton path="/contact" icon={Mail}>
              <Trans id="contact" message="Contact" />
            </NavigationButton>
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
  children: ReactNode;
  className?: string;
  isActiveable?: boolean;
}

function NavigationButton({
  path,
  icon: Icon,
  children,
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
      {Icon && <Icon className="size-5 md:size-4" />}
      <p>{children}</p>
    </Link>
  );
}
