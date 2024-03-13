import HomeCategories from "@/components/Shop/HomeCategories";
import TopCreator from "@/components/Shop/TopCreator";
import TrendingProduct from "@/components/Shop/TrendingProduct";
import Carousel from "@/components/Shop/Carousel";
import ShopLayout from "@/components/Shop/ShopLayout";

const HomePage: React.FC = () => {
  return (
    <>
      <ShopLayout>
        <Carousel />
        <TrendingProduct />
        <TopCreator />
        <HomeCategories />
      </ShopLayout>
    </>
  );
};

export default HomePage;
