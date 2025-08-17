import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/utilities/videoPlayer"
import Image from "next/image"

const page = async ({ params }) => {
  const { id } = await params // harus di-await sekarang
  const anime = await getAnimeResponse(`anime/${id}`)
    
    return (
        <>
        <div className="pt-4 px-4">
             <h3 className="text-white text-2xl"  >{anime.data.title} - {anime.data.year}</h3>
        </div> 

s
        <div className="pt-4 px-4 flex gap-2 text-white overflow-x-auto" >
            <div className="w-36 flex flex-col justify-center items-center rounded border border-white p-2 ">
                <h3>PERINGKAT</h3>
                <p>{anime.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-white p-2">
                <h3>SKOR</h3>
                <p>{anime.data.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-white p-2  ">
                <h3>ANGGOTA</h3>
                <p>{anime.data.members}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-white p-2  ">
                <h3>EPISODE</h3>
                <p>{anime.data.episodes}</p>
            </div>

        </div>
        <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-white">
            <Image
             src= {anime.data.images.webp.image_url} 
             alt= {anime.data.images.jpg.image_url} 
             width={250}
             height={250}
             className="w-full rounded object-cover"
            />

            <p>{anime.data.synopsis}</p>
        </div>
        <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </div>

       
        </>
    )
}

export default page
