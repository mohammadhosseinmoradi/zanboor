import { PageLayout } from "@/components/page-layout";
import { Wallet } from "@/modules/wallet";

export default function Page() {
  return (
    <PageLayout
      header={{
        title: "کیف پول",
      }}
    >
      <Wallet />
    </PageLayout>
  );
}
