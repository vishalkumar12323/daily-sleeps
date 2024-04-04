import Navbar from "@/app/ui/components/navbar";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
        <div className="max-w-screen-lg mx-auto">
            <div className="pt-5">
                <Navbar/>
            </div>
            {children}
        </div>
        </>
    )
}