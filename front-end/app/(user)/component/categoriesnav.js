import Link from "next/link";

export default function CategoriesNav(props) {
    return (
        <>
            <article class="cate_section mb-3">
                <nav>
                    <ul>
                        {props.data.map(item => {
                            return (
                                <>
                                    <li>
                                        <div>
                                            <Link href="">
                                                <div><img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/product/${item.image}`} alt="" /></div>
                                            </Link>
                                            <p>{item.name}</p>
                                        </div>
                                        <div></div>
                                    </li>
                                </>
                            );
                        }
                        )}
                        {/* <li>
                            <div>
                                <a href="">
                                    <div><img src="/assets/images/icons8-tea-100.png" alt="" /></div>
                                </a>
                                <p>Trà</p>
                            </div>
                            <div></div>
                        </li>
                        <li>
                            <div>
                                <a href="">
                                    <div><img src="/assets/images/icons8-iced-coffee-100.png" alt="" /></div>
                                </a>
                                <p>Coffee</p>
                            </div>
                            <div></div>
                        </li>
                        <li>
                            <div>
                                <a href="">
                                    <div><img src="/assets/images/icons8-bubble-tea-100.png" alt="" /></div>
                                </a>
                                <p>Trà sữa</p>
                            </div>
                            <div></div>
                        </li>
                        <li>
                            <div>
                                <a href="">
                                    <div><img src="/assets/images/icons8-orange-juice-100.png" alt="" /></div>
                                </a>
                                <p>Nước ép</p>
                            </div>
                            <div></div>
                        </li>
                        <li>
                            <div>
                                <a href="">
                                    <div><img src="/assets/images/icons8-milkshake-100.png" alt="" /></div>
                                </a>
                                <p>Đá xay</p>
                            </div>
                            <div></div>
                        </li>
                        <li>
                            <div>
                                <a href="">
                                    <div><img src="/assets/images/icons8-confectionery-100.png" alt="" /></div>
                                </a>
                                <p>Bánh</p>
                            </div>
                            <div></div>
                        </li> */}
                    </ul>
                </nav>
            </article>
        </>
    );
}