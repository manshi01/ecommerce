'use client'
import { useState,useEffect } from "react";
import Image from "next/image";
import ProductPage from "./Components/Productpage/ProductCard";
import ProductCard from "./Components/Productpage/ProductCard";
import Header from "./Components/Header/page";
import Carousel from "./Components/Carousel/page";
import Feature from "./Components/Feature/page";
export default function Home() {
const anoterdata='https://dummyjson.com/products/1'

 const [data, setData] = useState([]);

 

 useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://corsproxy.io/https://pastebin.com/raw/0QcdEDBL"); // JSON endpoint
        const json = await response.json();
        console.log("Fetched Data:", json);

        // Access the list of products/restaurants depending on JSON structure
        // The pastebin JSON has `data.cards[2].card.card.gridElements.infoWithStyle.restaurants`
        const products =
          json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        setData(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Carousel />
      <Feature />
    <div className="container mt-4">
  <div className="row">
    {data.length > 0 ? (
      data.map((product, index) => (
        <ProductCard key={index} resData={product.info} />
      ))
    ) : (
      <p>Loading products...</p>
    )}
  </div>
</div>
    </>
  );
}