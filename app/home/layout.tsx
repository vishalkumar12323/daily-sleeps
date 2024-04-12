import Navbar from "@/app/ui/components/navbar";
import Footer from "../ui/components/footer";
import { fetchUser } from "@/app/lib/data";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await fetchUser();
  return (
    <>
      <div className={`max-w-screen-lg mx-auto`}>
        <header className="pt-3">
          <Navbar />
        </header>
        {children}
        <footer className="mb-3 bg-gray-100 rounded-md">
          <Footer />
        </footer>
      </div>
    </>
  );
}
