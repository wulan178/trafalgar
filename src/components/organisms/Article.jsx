import React from "react";
import { articles } from "../../utils/constants";
import Button from "../atoms/Button";
import Card from "../molecules/Card";

export default function Article() {
    return (
        <section id='about_us' className='mx-5 my-5 py-5'>
            <h2 className='text-center'>Check out our latest article</h2>
            <div className='d-flex mt-5 justify-content-center gap-5'>
                {articles.map((item, i) => (
                    <Card
                        key={i}
                        type='article'
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>

            <div className='text-center mt-5'>
                <Button text='View all' />
            </div>
        </section>
    );
}
