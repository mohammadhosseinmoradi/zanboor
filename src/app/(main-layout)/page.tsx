import { decrypt, encrypt } from "@/modules/auth/session";

export default async function Home() {
  console.log(
    await decrypt("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJoaSIsImlhdCI6MTczMjI5Mjg1NSwiZXhwIjoxNzM0NzEyMDU1fQ.H71vbzPOyqu_-jSeEUlYEDZhpfMvwLjzQvi9T1F9gmA")
  );

  return <div className="flex grow items-center justify-center">ویترین</div>;
}
