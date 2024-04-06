import Navbar from "@/app/ui/components/navbar";
import Footer from "../ui/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <header className="pt-5">
          <Navbar />
        </header>
        {children}
        <footer className="pb-2 border border-sky-400 rounded-md py-1">
          <Footer />
        </footer>
      </div>
    </>
  );
}
