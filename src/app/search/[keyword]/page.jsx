import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({params}) => {
  const  {keyword} = params
  const decodeKeyword = decodeURI(keyword)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const searchAnime = await response.json();

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
