import React from "react";
import Button from "./atoms/Button";

export default function Article() {
    return (
        <section id="article" className="mx-5 my-5 py-5">
            <h2 className="text-center">Check out our latest article</h2>

            <div className="d-flex mt-5 justify-content-center gap-5">
                <div className="card border-0 shadow">
                    <img src="/images/article 1.svg" className="card-img-top" alt="" />
                    <div className="card-body px-4 py-4">
                        <h5 className="card-title mb-4">Disease detection, check up in the laboratory</h5>
                        <p className="card-text">In this case, the role of the health laboratory is very important to do a disease detection...</p>
                        <a href="/" className="d-flex h-25 text-decoration-none align-items-center">
                            Read more
                            <img src="/icons/rightarrow.svg" alt="" width="12" height="12" className="ms-2 my-auto" />
                        </a>
                    </div>
                </div>

                <div className="card border-0 shadow">
                    <img src="/images/article 2.svg" className="card-img-top" alt="" />
                    <div className="card-body px-4 py-4">
                        <h5 className="card-title mb-4">Herbal medicines that are safe for consumption</h5>
                        <p className="card-text">Herbal medicine is very widely used at this time because of its very good for your health...</p>
                        <a href="/" className="d-flex h-25 text-decoration-none align-items-center">
                            Read more
                            <img src="/icons/rightarrow.svg" alt="" width="12" height="12" className="ms-2 my-auto" />
                        </a>
                    </div>
                </div>

                <div className="card border-0 shadow">
                    <img src="/images/article 3.svg" className="card-img-top" alt="" />
                    <div className="card-body px-4 py-4">
                        <h5 className="card-title mb-4">Natural care for healthy facial skin</h5>
                        <p className="card-text">A healthy lifestyle should start from now and also for your skin health. There are some...</p>
                        <a href="/" className="d-flex h-25 text-decoration-none align-items-center">
                            Read more
                            <img src="/icons/rightarrow.svg" alt="" width="12" height="12" className="ms-2 my-auto" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5">
                <Button text="View all" />
            </div>
        </section>
    );
}
