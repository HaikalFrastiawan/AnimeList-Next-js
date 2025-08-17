import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  


  const topAnime = await getAnimeResponse("top/anime", "limit=8")

  return (
    <>
    {/*Anime Terpopuler */}
      <section>
        <Header title="PALING POPULER" linkTitle="Lihat semua" linkHref="/populer"/>
       <AnimeList api ={topAnime} />
      </section>

  
    </>
  );
}

export default Page;
