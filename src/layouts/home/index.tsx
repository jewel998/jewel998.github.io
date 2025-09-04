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
      <main className="px-2 md:px-6 pt-2 md:pt-0 pb-16 md:pb-6">
        {children}
      </main>
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
