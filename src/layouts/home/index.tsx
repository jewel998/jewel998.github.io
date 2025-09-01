import "./index.scss";
import { type PropsWithChildren } from "react";
import { HomeNavigation } from "./navigation";
import { HomeInset } from "./inset";

export function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div id="home-layout" className="bg-slate-50 dark:bg-slate-950">
      <HomeInset side="top" />
      <HomeInset side="bottom" />
      <HomeNavigation />
      <main className="px-6 pt-6 md:pt-0 pb-20 md:pb-6">{children}</main>
    </div>
  );
}

export function HomeLayoutPage({ children }: PropsWithChildren) {
  return (
    <div className="bg-background border md:border-t-0 relative">
      {children}
    </div>
  );
}
