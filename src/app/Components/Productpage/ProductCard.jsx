"use client";
import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductCard({ resData }) {
  return (
    <div className="col-6 col-md-3 mb-4">
      <Link
        href={`/product/${resData.shopify_product_id}`} // Dynamic route
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div
          style={{
            backgroundColor: "#FFF",
            padding: "10px",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            height: "100%",
            cursor: "pointer",
          }}
        >
          <img
            src={resData?.images[0]}
            alt={resData?.title}
            style={{
              width: "100%",
              height: "350px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
          <h3
            style={{
              marginTop: "10px",
              color: "#1F2937",
              fontSize: "16px",
            }}
          >
            {resData?.title}
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
