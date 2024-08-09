"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Carousel from "./component/carousel";
import Link from "next/link";
import ProductList from "./component/productList";
import useSWR from "swr";
import CategoriesNav from "./component/categoriesnav";
import BestDeal from "./component/bestdeals";
import SpecialProducts from "./component/specialproducts";
import BestSeller from "./component/bestseller";

export default function Home() {
  const fetcher = (...agrs) => fetch(...agrs).then((res) => res.json());
  const { data: productList, error: errorProduct, isLoading: isLoadingProduct } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/products`, fetcher);
  const { data: categoryList, error: errorCategory, isLoading: isLoadingCategory } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/categories`, fetcher);
  const { data: bestDealList, error: errorBestDeal, isLoading: isLoadingBestDeal } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/products/bestdeals`, fetcher);
  const { data: specialProductList, error: errorSpecialProduct, isLoading: isLoadingSpecialProduct } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/products/specialProducts`, fetcher);
  const { data: bestSellerList, error: errorBestSeller, isLoading: isLoadingBestSeller } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/products/bestSellers`, fetcher);
  if (errorProduct || errorCategory || errorBestDeal || errorSpecialProduct || errorBestSeller) return <strong>Có lỗi xảy ra</strong>
  if (isLoadingProduct || isLoadingCategory || isLoadingBestDeal || isLoadingSpecialProduct || isLoadingBestSeller) return <strong>Đang load</strong>
  return (
    <>
      <div className="container">

        <Carousel />
        <CategoriesNav data={categoryList} />
        {/* <div className="d-flex justify-content-center my-3 gap-3">
        {categoryList.map(item => {
          return (
            <>
              <Link href="/" className="text-center text-decoration-none text-dark fw-bold">
                <img style={{ width: 48 + 'px' }} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/product/${item.image}`} />
                <br />
                Cà phê
              </Link>
            </>
          );
        })}
      </div> */}
        <BestDeal data={bestDealList} />
        {/* <div className="d-flex justify-content-center my-3">
        <Link className="text-center gap-3" href=""><i class="fa-solid fa-mug-saucer"></i> <br /> Cà phê</Link>
        <Link className="text-center gap-3" href=""><i class="fa-solid fa-mug-hot"></i> <br /> Trà</Link>
      </div> */}
        <SpecialProducts data={specialProductList} />
        <BestSeller data={bestSellerList} />
        {/* <div className="container mt-5">
        <h2 className="text-center">Sản phẩm nổi bật</h2>
        <ProductList data={productList} />

        <h2 className="text-center">Sản phẩm nổi bật</h2>
        <ProductList data={productList} />
      </div> */}
      </div>
    </>
  );
}
