import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime = await response.json();

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
