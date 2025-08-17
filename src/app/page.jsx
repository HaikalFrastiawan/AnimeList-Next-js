import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime","entry")

  recommendedAnime = {data: recommendedAnime.slice(0,5)}

  return (
    <>
    {/*Anime Terpopuler */}
      <section>
        <Header title="PALING POPULER" linkTitle="Lihat semua" linkHref="/populer"/>
       <AnimeList api ={topAnime} />
      </section>

     {/*Anime Rekomendasi */}
      <section>
        <Header title="Rekomendasi"/>
       <AnimeList api ={recommendedAnime} />
      </section> 

  
    </>
  );
}

export default Page;
