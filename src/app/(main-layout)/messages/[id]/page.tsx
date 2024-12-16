import { Chat } from "@/modules/messanger/components/chat";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page(props: Props) {
  const { params } = props;

  const { id } = await params;

  return <Chat id={id} />;
}
