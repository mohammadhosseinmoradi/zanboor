import { Messenger } from "@/modules/messanger/messenger";

type Props = {
  params: Promise<{
    ids: string[];
  }>;
};

export default async function Page(props: Props) {
  const { params } = props;

  const { ids } = await params;

  const chatId = ids?.[0];

  return <Messenger chatId={chatId} />;
}
