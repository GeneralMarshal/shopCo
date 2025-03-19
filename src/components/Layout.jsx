import Sidebar from "./Sidebar"
import Header from "./Header"
import { useState } from "react"

export default function Layout({children}){
    const [isOpen, setIsOpen] = useState(false)

    function toggleSidebar(){
        setIsOpen( open => !open)
    }
    return(
        <div className="relative overflow-hidden w-full">
            <Header toggleSidebar={toggleSidebar} isOpen={isOpen}/>
            <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
            <main>{children}</main>
        </div>
    )
}