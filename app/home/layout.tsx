import Navbar from "@/app/ui/components/navbar";
import Footer from "@/app/ui/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full">
        <header className="bg-gray-50 shadow">
          <Navbar />
        </header>{" "}
        {children}
        <footer className="bg-gray-50">
          <Footer />
        </footer>
      </div>
    </>
  );
}
