import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"

const Page = async () => {
  const user = await authUserSession()

  return (
    <div className="text-white">
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
    </div>
  )
}

export default Page
