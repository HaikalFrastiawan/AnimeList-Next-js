import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () =>{
    return (
        <header className="bg-amber-300">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link href="/" className="font-bold text-black text-2xl" >KalAnimeList</Link>
            <InputSearch />
            </div>
        </header>
    )
}

export default Navbar