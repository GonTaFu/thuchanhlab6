"use client"; 
import React from 'react';
import { useParams } from 'next/navigation';

const data = [
  { id: 1, image: "/tainghehyperX.jpg", title: "HyperX", description: "HyperX gaming headset", price: 1260000 },
  { id: 2, image: "/taingheEdifier.jpg", title: "Edifier", description: "Edifier wireless headset", price: 1650000 },
  { id: 3, image: "/CaseASUSROG.jpg", title: "ASUS ROG Case", description: "ASUS gaming case", price: 17400000 },
  { id: 4, image: "/MSI4K.jpg", title: "MSI 4K Monitor", description: "MSI 4K gaming monitor", price: 11400000 }
];

const DetailProduct = () => {
    const params = useParams(); // Lấy params từ URL
    const id = params.id; // Lấy ID từ params
    const product = data.find(item => item.id === parseInt(id));

    if (!product) {
        return <div>Sản phẩm không tồn tại</div>;
    }

    return (
      // <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      //   <div style={{ maxWidth: "600px", width: "100%", marginBottom: "20px" }}></div>
      //       <h1>{product.title}</h1>
      //       <p>{product.description}</p>
      //       <strong>{product.price.toLocaleString()} Đ</strong>
      //   </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
            <div style={{ maxWidth: "600px", width: "100%", marginBottom: "20px" }}>
                <img src={product.image} alt={product.title} style={{ width: "100%", borderRadius: 8 }} />
            </div>
            <div style={{ maxWidth: "600px", width: "100%", textAlign: "center" }}>
                <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>{product.title}</h1>
                <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "20px" }}>{product.description}</p>
                <strong style={{ fontSize: "1.5rem", color: "#e60000" }}>{product.price.toLocaleString()} Đ</strong>
            </div>
      </div>
      
    );
}

export default DetailProduct;
