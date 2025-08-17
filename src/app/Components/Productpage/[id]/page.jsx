"use client";
import { useState, useEffect } from "react";

export default function ProductDetail({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (!product) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left: Image Carousel */}
        <div className="col-md-6">
          <img
            src={product.images[0]}
            alt={product.title}
            className="img-fluid mb-3"
            style={{ borderRadius: "8px" }}
          />
          <div className="d-flex gap-2">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                className="img-thumbnail"
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <h3 className="text-success">₹{product.price}</h3>

          <div className="mt-4 d-flex gap-3">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-danger">Wishlist</button>
            <button className="btn btn-success">Buy Now</button>
          </div>

          <div className="mt-5">
            <h5>Description</h5>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
