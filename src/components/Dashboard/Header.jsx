"use client"

import { ArrowSquareLeftIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"


const Header = ({title}) => {
    const router = useRouter()
    const handleBack = (event) =>{
        event.preventDefault()
        router.back()
    }

    return (
         <div className=" flex justify-between items-center mb-4">
            <button className="text-white" onClick={handleBack}> 
                <ArrowSquareLeftIcon  size={32}/></button>
            
            <h3 className="text-2xl text-white   font-bold ">{title}</h3> 
        </div>
    )

}
export default Header