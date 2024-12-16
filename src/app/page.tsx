
import Editors from "./components/editorspick";
import FeaturedPost from "./components/feature";
import GreenDiv from "./components/green";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import ProductCard from "./components/productcard";
import White from "./components/white";
import footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar/>
      <Hero/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <White/>
      <FeaturedPost/>
    </main>
 
   
  );
}
