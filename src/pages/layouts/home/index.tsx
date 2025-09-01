import "./index.scss";
import type { PropsWithChildren } from "react";
import { Header } from "@/components/ui/header";
import { Link } from "@tanstack/react-router";
import { HeaderTheme } from "@/components/ui/header/theme";

export function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div id="home-layout">
      <Header>
        <div className="px-6">
          <div className="flex items-center justify-between h-16 relative">
            <Link to="/" className="text-2xl font-sign font-bold text-primary">
              JB
            </Link>
            <div className="flex items-center space-x-4">
              <HeaderTheme />
            </div>
          </div>
        </div>
      </Header>
      <main className="px-6 pb-6">{children}</main>
    </div>
  );
}
