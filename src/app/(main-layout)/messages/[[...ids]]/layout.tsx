import { ReactNode } from "react";
import { MessengerProvider } from "@/modules/messanger";

type Props = {
  params: Promise<{
    ids: string[];
  }>;
  children?: ReactNode;
};

export default async function Layout(props: Props) {
  const { params, children } = props;

  const { ids } = await params;

  const chatId = ids?.[0];

  return (
    <MessengerProvider
      initialData={{
        chatId,
      }}
    >
      {children}
    </MessengerProvider>
  );
}
