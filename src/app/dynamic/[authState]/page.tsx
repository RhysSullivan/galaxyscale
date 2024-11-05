import { Homepage } from "@/components/homepage";

export default async function Home({
  params,
}: {
  params: Promise<{ authState: "cookie-present" | "cookie-missing" }>;
}) {
  const authState = await params.then((p) => p.authState);
  return <Homepage signedIn={authState === "cookie-present"} />;
}
