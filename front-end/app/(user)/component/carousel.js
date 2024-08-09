export default function Carousel() {
    return (
        <>
            {/* <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/banner/banner.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/banner/banner.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/banner/banner.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
            <article class="">
                <div className="row">
                    <div id="carouselExampleCaptions" class="col-9 carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/img/banner/banner-slider-1.png" class="d-block w-100" alt="..." />

                            </div>
                            <div class="carousel-item">
                                <img src="/img/banner/banner-slider-2.png" class="d-block w-100" alt="..." />

                            </div>
                            <div class="carousel-item">
                                <img src="/img/banner/banner-slider-3.png" class="d-block w-100" alt="..." />

                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button"
                            data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button"
                            data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="col-3">
                        <img src="/img/banner/vertical-banner.png" className="w-100" alt="" />
                    </div>
                </div>
                {/* <div className="row row-cols-2">
                    <div className="col">
                        <img src="/assets/images/banner-center-1.png" alt="" className="w-100 h-50" />
                    </div>
                    <div className="col">
                        <img src="/assets/images/banner-center-2.png" alt="" className="w-100 h-50" />
                    </div>

                </div> */}

            </article>

        </>
    );
}