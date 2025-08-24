import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
  const user = await authUserSession()

  return (
    <div className="mt-8 text-white flex flex-col justify-center items-center">
      <h3>Dashboard</h3>
      <h4>Welcome... {user?.name}</h4>

      {user?.image && (
        <Image 
          src={user.image} 
          alt="User profile picture" 
          width={250} 
          height={300} 
          className="rounded-full"
        />
      )}

      <div className="flex flex-wrap py-8 gap-4">
        <Link 
          href="/user/dashboard/collection"
          className="bg-amber-400 text-gray-950 font-black px-4 py-3 text-xl">MY COLLECTION</Link>

        <Link 
          href="/user/dashboard/comment"
          className="bg-amber-400 text-gray-950 font-black px-4 py-3 text-xl">MY COMMENT</Link>
      </div>


   
    </div>
  )
}

export default Page
