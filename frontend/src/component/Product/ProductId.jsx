import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductId = () => {
  const product = {
    name: "Slim Fit Men's T-Shirt",
    desc: "A comfortable and stylish slim-fit t-shirt for daily wear.",
    price: 29.99,
    percentOff: 10,
    checkStock: true,
    units: 120,
    sku: "TSHIRT-MEN-SLIM-BLK001",
    color: ["Black", "White", "Navy"],
    size: ["M", "L", "XL"],
    category: "Men's Fashion",
    brand: "UrbanWear",
    reviews: [
      {
        user: "john_doe",
        comment: "Great fit and very comfortable.",
        rating: 5,
        createdAt: "2025-06-01T12:00:00Z",
      },
      {
        user: "mark92",
        comment: "Color fades a bit after wash.",
        rating: 3,
        createdAt: "2025-06-15T08:30:00Z",
      },
    ],
    rating: 4,
    numReviews: 2,
    tags: ["tshirt", "slimfit", "menswear"],
    soldUnits: 350,
    isFeatured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
        altText: "Front view of slim fit black t-shirt",
      },
      {
        url: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
        altText: "Back view of slim fit black t-shirt",
      },
      {
        url: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
        altText: "Front view of slim fit black t-shirt",
      },
      {
        url: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
        altText: "Back view of slim fit black t-shirt",
      },
    ],
    isFlashSale: true,
    saleStartDate: "2025-07-01T00:00:00Z",
    saleEndData: "2025-07-10T23:59:59Z",
    _id: 1,
  };
  const [productImage, setProductIamge] = useState(product.images[0].url);
  const [color, setColor] = useState("");
  const [size, setSize] = useState(product.size[0]);
  const { id } = useParams();
  return (
    <div className="w-full">
      Product : {id}
      {/*---------------------------------- Image Part--------------------------- */}
      {/* ----------------------------------------------- */}
      <div className="w-full lg:w-1/2 h-[400px]">
        <div className="flex h-full">
          {/* Left side thumbnails - take full height and divide space equally */}
          <div className="flex flex-col justify-between mr-3 h-full">
            {product.images.map((prod, index) => (
              <div className="w-20 h-20" key={index}>
                <img
                  onClick={() => setProductIamge(prod.url)}
                  src={prod.url}
                  alt={prod.altText}
                  className={`border-2 rounded w-full h-full object-cover cursor-pointer transition-all ${
                    productImage === prod.url
                      ? "border-red-500"
                      : "border-black"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Right side main image */}
          <div className="flex-1 h-full">
            <img
              src={productImage}
              alt="Main Product"
              className="w-full h-full object-contain rounded border"
            />
          </div>
        </div>
      </div>
      {/*--------------------------------- Main Content--------------------------- */}
      <div className="">{size}</div>
    </div>
  );
};

export default ProductId;
