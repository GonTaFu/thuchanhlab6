"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load giỏ hàng từ localStorage khi component được render
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <Box sx={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>🛒 Giỏ hàng</h1>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        cart.map((item) => (
          <Paper
            key={item.id}
            sx={{ padding: 2, marginBottom: 2, display: "flex", alignItems: "center" }}
          >
            <img
              src={`/${item.image}`}
              alt={item.title}
              style={{ width: "80px", borderRadius: 8, marginRight: "15px" }}
            />
            <div>
              <h3>{item.title}</h3>
              <p>Số lượng: {item.quantity}</p>
              <strong>{(item.price * item.quantity).toLocaleString()} Đ</strong>
            </div>
          </Paper>
        ))
      )}
      <Stack spacing={2} direction="row">
        <Button variant="contained" href="/product">
          Tiếp tục mua hàng
        </Button>
        <Button variant="outlined">Thanh toán</Button>
      </Stack>
    </Box>
  );
};

export default Cart;
