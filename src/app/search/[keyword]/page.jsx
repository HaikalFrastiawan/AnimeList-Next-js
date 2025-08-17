import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({params}) => {
  const  {keyword} = params
  const decodeKeyword = decodeURI(keyword)


  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}` )

  return (
    <>
    {/*Anime Terpopuler */}
      <section>
        <Header title={`pencarian Untuk ${decodeKeyword}... `} linkTitle="Lihat semua" linkHref="/populer"/>
       <AnimeList api ={searchAnime} />
      </section>

  
    </>
  );
}

export default Page;
