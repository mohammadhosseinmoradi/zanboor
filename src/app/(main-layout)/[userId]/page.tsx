import { Profile } from "@/modules/user";

type Props = {
  params: Promise<{
    userId: string;
  }>;
};

export default async function Page(props: Props) {
  const { params } = props;

  const { userId } = await params;

  return <Profile userId={userId} />;
}
