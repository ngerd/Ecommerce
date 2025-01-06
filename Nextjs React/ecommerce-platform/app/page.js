import Image from "next/image";
import Slider from "./components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./components/CategoryList";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

export default async function Home() {

  const sliderList=await GlobalApi.getSliders();
  
  const productList=await GlobalApi.getAllProducts();

  return (
    <div>
      <Content/>

      <div className="p-5 md:p-10 px-16">
        <Slider sliderList={sliderList}/>
      </div>

      <ProductList productList={productList}/>

      <Footer/>
    </div>
  );
}
