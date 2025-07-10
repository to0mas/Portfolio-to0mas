import { Sidebar } from "lucide-react";

export const Home = () => {
    return (
        <div className="p-0 m-0 box-border bg-radial-at-r from-green-50 via-violet-100 to indigo-70 w-full h-screen">
            
             <nav className="w-full gap-10 text-amber-50 h-[120px] uppercase flex items-center justify-end px-[200px] sticky top-0 z-[999] shadow-md backdrop-blur-md border-b border-white/10">
           
                <a className="">About</a>
                <a>Projects</a>
                <a>Contact</a>
             </nav>


        </div>
    );
};
