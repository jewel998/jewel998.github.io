import { I18nProvider } from "@lingui/react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { i18n, type Messages } from "@lingui/core";
import { useDebounce } from "@/lib/debounce";
import { compileMessage } from "@lingui/message-utils/compileMessage";

interface I18nContext {
  locale: string;
  setLocale: (locale: string) => void;
  isReady: boolean;
  loadMessages: (
    locale: string,
    messagesPromise: Promise<{ default: Messages }>
  ) => void;
}

const I18nContext = createContext<I18nContext | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18n");
  }
  return context;
}

export function I18n({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState(
    (navigator.languages?.[0] || navigator.language || "en")
      .slice(0, 2)
      .toLowerCase()
  );
  const [_messages, _setMessages] = useState<Promise<{ default: Messages }>[]>(
    []
  );
  const messages = useDebounce(_messages, 300);
  const [isReady, setIsReady] = useState(false);
  const loadMessages = useCallback(
    async (
      _locale: string,
      messagesPromise: Promise<{ default: Messages }>
    ) => {
      setIsReady(false);
      _setMessages((prev) => [...prev, messagesPromise]);
    },
    []
  );

  const loadMessagesDebounced = useCallback(
    async (locale: string, m: Promise<{ default: Messages }>[]) => {
      try {
        _setMessages([]);
        const messages = await Promise.all(m);
        const flatMessages = messages.reduce(
          (acc, curr) => ({ ...acc, ...curr.default }),
          {}
        );
        i18n.loadAndActivate({
          locale,
          locales: "en",
          messages: { ...i18n.messages, ...flatMessages },
        });
        setIsReady(true);
      } catch (error) {
        console.error(`Failed to load messages for locale ${locale}:`, error);
      }
    },
    []
  );

  useEffect(() => {
    if (messages.length > 0) {
      void loadMessagesDebounced(locale, messages);
    }
  }, [loadMessagesDebounced, locale, messages]);

  useEffect(() => {
    i18n.load(locale, {});
    i18n.activate(locale);
    i18n.setMessagesCompiler(compileMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values = useMemo(
    () => ({
      locale,
      setLocale,
      loadMessages,
      isReady,
    }),
    [locale, setLocale, loadMessages, isReady]
  );

  return (
    <I18nContext.Provider value={values}>
      <I18nProvider i18n={i18n}>{children}</I18nProvider>
    </I18nContext.Provider>
  );
}
