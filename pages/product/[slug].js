import React from "react";
import { client } from "../../utils/client";
import ProductLayout from "../../components/product/ProductLayout";
import ProductImage from "../../components/product/ProductImage";
import ProductInfo from "../../components/product/ProductInfo";
import Suggestions from "../../components/suggestions/Suggestions";

const Product = ({ products, product }) => {
  return (
    <div>
      <ProductLayout>
        <ProductImage image={product?.image && product?.image} />

        <ProductInfo
          id={product?._id}
          image={product?.image && product?.image}
          name={product?.name}
          details={product?.details}
          price={product?.price}
        />
      </ProductLayout>

      <Suggestions products={products} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);

  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default Product;
