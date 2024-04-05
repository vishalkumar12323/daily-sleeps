import Navbar from "@/app/ui/components/navbar";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
        <div className="max-w-screen-lg mx-auto">
            <header className="pt-5">
                <Navbar/>
            </header>
            {children}
        </div>
        </>
    )
}