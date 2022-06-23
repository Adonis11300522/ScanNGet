import React from "react";
import TopBanner from "../../components/topbanner";
import Layout from "../../components/layout";
import MultiItemCarousel from "../../components/multi_item_carousel";
import { CategoryCard, RecipeCard } from "../../components/cards";
import Categories from "../../components/category";
import Offers from "../../components/offer";
import { DownloadBanner, IntroBanner, PartnerBanner, SubscribeBanner, WorkBanner } from "../../components/banners/intro_banner";
import { Loyalty } from "../../components/loyalty";
function Home() {
  return (
    <>
        <Layout>
          <TopBanner/>
          <Categories/>
          <IntroBanner/>          
          <Offers/>
          <WorkBanner/>
          <Loyalty/>
          <DownloadBanner/>
          <PartnerBanner/>
          <SubscribeBanner/>
        </Layout>
    </>
  );
}

export default Home;
