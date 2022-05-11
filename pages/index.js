import React from "react";
import { client, urlFor } from "../utils/client";
import HeroBanner from "../components/hero-banner/HeroBanner";
import Headings from "../components/headings/Headings";
import ProductItem from "../components/product-item/ProductItem";
import FooterBanner from "../components/footer-banner/FooterBanner";

const Home = ({ products, banner }) => {
  console.log({ products, banner });

  return (
    <div>
      {banner.length && (
        <HeroBanner
          smallText={banner[0].smallText}
          midText={banner[0].midText}
          largeText={banner[0].largeText1}
          btnText={banner[0].buttonText}
          product={banner[0].product}
          desc={banner[0].desc}
        />
      )}

      <Headings
        header="Best Selling Products"
        text="Speakers of many variations"
      />

      <div className="products">
        {products?.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner
        discount={banner[0]?.discount}
        largeText1={banner[0]?.largeText1}
        largeText2={banner[0]?.largeText2}
        saleTime={banner[0]?.saleTime}
        smallText={banner[0]?.smallText}
        midText={banner[0]?.midText}
        desc={banner[0]?.desc}
        image={banner[0]?.image && urlFor(banner[0]?.image)}
        btnText={banner[0]?.buttonText}
        product={banner[0]?.product}
      />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';

  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';

  const banner = await client.fetch(bannerQuery);

  return {
    props: { products, banner },
  };
};

export default Home;
