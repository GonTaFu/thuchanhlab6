"use client";
import DetailProduct from "./detailproduct";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Page({params}) {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Chi tiết sản phẩm</h1>
        <DetailProduct params = {params}></DetailProduct>
        <Stack spacing={2} direction="row">
        <Button variant="contained" href="./">Trở về</Button>
        </Stack>
        </div>
    );
}