import Link from "next/link";
import Image from "next/image";
import { Globe, Menu } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function Homepage(props: { signedIn: boolean }) {
  async function signIn() {
    "use server";
    const jar = await cookies();
    jar.set("session", "1234");
    redirect("/");
  }
  async function signOut() {
    "use server";
    const jar = await cookies();
    jar.delete("session");
    redirect("/");
  }
  return (
    <div className="min-h-screen bg-black text-gray-200 font-mono">
      <header className="border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex hidden sm:block items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-white" />
              <span className="font-bold">GalaxyScale</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <form className="block" action={signIn}>
              <button
                type={"submit"}
                className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
              >
                {props.signedIn ? "Dashboard" : "Sign in"}
              </button>
            </form>
            {props.signedIn && (
              <form className="block" action={signOut}>
                <button
                  type={"submit"}
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                >
                  Sign out
                </button>
              </form>
            )}
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold border-l-4 border-orange-600 pl-4">
            The database website built for a demo
          </h1>

          <p className="text-gray-300 leading-relaxed max-w-3xl text-sm md:text-base">
            GalaxyScale is the world&apos;s most scalable and reliable OLTP
            database. Built on Vitess, our cloud platform is trusted by some of
            the world&apos;s largest brands. We offer a range of{" "}
            <Link href="/deployment" className="text-blue-400 hover:underline">
              deployment options
            </Link>{" "}
            including multi-tenant cloud, single-tenant, or bring your own cloud
            account with{" "}
            <Link href="/managed" className="text-blue-400 hover:underline">
              GalaxyScale Managed
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
