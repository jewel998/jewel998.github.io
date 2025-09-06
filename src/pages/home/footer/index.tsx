import { useI18n } from "@/components/providers/i18n";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Socials } from "@/pages/contact/socials";

export function HomeFooter() {
  return (
    <footer className="px-6 py-8 border-t border-border scroll-section">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-sm">
          <BlurFade inView className="w-fit">
            <LocaleButton locale="en" label="English" />
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <span className="opacity-40">&middot;</span>
          </BlurFade>
          <BlurFade delay={0.3} inView className="w-fit">
            <LocaleButton locale="de" label="Deutsch" />
          </BlurFade>
        </div>
        <div>
          <Socials />
        </div>
      </div>
    </footer>
  );
}

interface LocaleButtonProps {
  locale: string;
  label: string;
}

export function LocaleButton({ locale, label }: LocaleButtonProps) {
  const { locale: currentLocale, setLocale } = useI18n();
  return (
    <Button
      disabled={currentLocale === locale}
      variant="link"
      size="none"
      onClick={() => setLocale(locale)}
      aria-label={"Switch to " + label}
    >
      {label}
    </Button>
  );
}
