import { Homepage } from "@/components/homepage";

export const dynamic = "error";
export async function generateStaticParams(): Promise<{ authState: string }[]> {
  return [{ authState: "cookie-present" }, { authState: "cookie-present" }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ authState: string }>;
}) {
  const authState = await params.then((p) => p.authState);
  return <Homepage signedIn={authState === "cookie-present"} />;
}
