"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const data = [
  {
    id: 1,
    image: "tainghehyperX.jpg",
    title: "HyperX",
    description: "HyperX gaming headset",
    price: 1260000,
  },
  {
    id: 2,
    image: "taingheEdifier.jpg",
    title: "Edifier",
    description: "Edifier wireless headset",
    price: 1650000,
  },
  {
    id: 3,
    image: "CaseASUSROG.jpg",
    title: "ASUS ROG Case",
    description: "ASUS gaming case",
    price: 17400000,
  },
  {
    id: 4,
    image: "MSI4K.jpg",
    title: "MSI 4K Monitor",
    description: "MSI 4K gaming monitor",
    price: 11400000,
  },
];

const Product = () => {
  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Kiểm tra sản phẩm đã tồn tại chưa
    let existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng! 🛒");
  };

  return (
    <Box sx={{ width: 600, minHeight: 400 }}>
      <Masonry columns={2} spacing={2}>
        <Stack spacing={2} direction="row">
          <Link href={`product/cart`}>
            <Button variant="contained">Giỏ hàng</Button>
          </Link>
        </Stack>
      </Masonry>
      <Masonry columns={2} spacing={2}>
        {data.map((item) => (
          <Item key={item.id} sx={{ height: "auto", padding: 2 }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", borderRadius: 8 }}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <strong>{item.price.toLocaleString()} Đ</strong>
            <Stack spacing={2} direction="row">
              <Link href={`product/${item.id}`}>
                <Button variant="contained">Xem chi tiết</Button>
              </Link>
              <Button variant="outlined" onClick={() => addToCart(item)}>
                Thêm giỏ hàng
              </Button>
            </Stack>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
};

export default Product;

        // <Grid container spacing={2}>
        //     <Grid item xs={6} md={6}>
        //     <Item><img src="frieren.jpg" width="100%"></img></Item>
        //     </Grid>
        //     <Grid item xs={6} md={6}>
        //     <Item><img src="frieren.jpg" width="100%"></img></Item>
        //     </Grid>
        //     <Grid item xs={6} md={6}>
        //     <Item><img src={data.image} width="100%"></img></Item>
        //     </Grid>
        // </Grid>

        // <Grid container spacing={2}>
        //         {data.map((item) => (
        //           <Grid item xs={6} md={6} key={item.id}>
        //             <img src={item.image} width="100%" alt={item.title} />
        //           </Grid>
        //         ))}
        // </Grid>

