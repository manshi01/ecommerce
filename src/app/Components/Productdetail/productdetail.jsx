"use client";
import React from "react";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams(); // Get product ID from URL

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Detail Page</h1>
      <h3>Product ID: {id}</h3>

      {/* 🔹 Here you can add: 
          - Image Carousel + Zoom
          - Title, Price, Add to Cart
          - Tabs: Description / FAQ / Shipping
          - Related Products Carousel 
      */}
    </div>
  );
}
