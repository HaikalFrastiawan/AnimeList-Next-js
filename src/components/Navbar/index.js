import Link from "next/link"

const Navbar = () =>{
    return (
        <header className="bg-indigo-500">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="font-bold text-white text-2xl" >KAL ANIME LIST</Link>
                <input placeholder="Mau anime apa nichh...." className="bg-white"/>
            </div>
        </header>
    )
}

export default Navbar