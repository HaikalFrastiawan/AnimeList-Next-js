"use client"

import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"


const InputSearch = () => {

    const searchRef = useRef()
    const router = useRouter()
    
    const handleSearch = (event) =>{
        event.preventDefault()
        const keyword = searchRef.current.value
        router.push(`/search/${keyword}`)
    }
    return (
        <div className="relative">
              <input 
                placeholder="Mau anime apa nichh...." 
                className="bg-white w-full p-2 rounded "
                ref={searchRef}
                />
              <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlassIcon size={24} />
              </button>
        </div>
   
    )
}

export default InputSearch