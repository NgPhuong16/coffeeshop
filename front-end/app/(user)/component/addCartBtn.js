"use client";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/slices/cartSlice";

export default function AddCartBtn(props) {
    const dispatch = useDispatch();
    const { product, quantity, size, className } = props;
    return (
        <>
            <button onClick={() =>
                dispatch(addItem({ product, quantity, size }))}
                className={`btn btn-dark w-100 ${className}`}>
                {props.children}
            </button>
        </>
    );
}