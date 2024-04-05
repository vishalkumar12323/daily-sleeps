import { Button } from "../buttons/button";

export default function Navbar() {
    return <nav className=" py-3 px-10 border border-sky-400 rounded-md h-16 max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center h-full">
            <div className="">
                <h2 className="uppercase text-2xl font-medium">sleepee.com</h2>
            </div>
            <div className="">
                <Button type="button" className="py-[0.7rem] px-12" children="logout"/>
            </div>
        </div>
    </nav>
};