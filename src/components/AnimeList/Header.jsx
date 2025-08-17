import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-white ">{title}</h1>
        {linkHref && linkTitle ? <Link href={linkHref} className="md:text-xl text-white text-md underline hover:text-amber-400  transition-all">{linkTitle}</Link> : null  }
       
      </div>
    )
}

export default Header