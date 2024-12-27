"use client";

import { createContext, ReactNode, use, useState } from "react";

export type MessengerState = {
  chatId?: string;
};

const MessengerContext = createContext<MessengerState | null>(null);

export function useMessenger() {
  const context = use(MessengerContext);
  if (!context) {
    const err = new Error("useMessenger is missing MessengerProvider");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useMessenger);
    throw err;
  }
  return context;
}

export type MessengerActions = {
  setChatId: (chatId: string) => void;
};

const MessengerActions = createContext<MessengerActions | null>(null);

export function useMessengerActions() {
  const context = use(MessengerActions);
  if (!context) {
    const err = new Error("useMessengerActions is missing MessengerProvider");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useMessenger);
    throw err;
  }
  return context;
}

type MessengerProviderProps = {
  initialData: MessengerState;
  children?: ReactNode;
};

export function MessengerProvider(props: MessengerProviderProps) {
  const { initialData, children } = props;

  const [state, setState] = useState<MessengerState>(initialData);

  const setChatId = (chatId: string) => {
    setState((prevState) => ({
      ...prevState,
      chatId
    }));
  };

  return (
    <MessengerContext value={state}>
      <MessengerActions value={{ setChatId }}>{children}</MessengerActions>
    </MessengerContext>
  );
}
