import { Sidebar } from "lucide-react"

export const Home = ( ) =>{
    return
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white   ">
        <Sidebar className="w-16 h-16 mb-4" />
        <h1 className="text-4xl font-bold mb-2">Welcome to My Portfolio</h1>
        <p className="text-lg">Explore my projects and skills</p>
    </div>;
};