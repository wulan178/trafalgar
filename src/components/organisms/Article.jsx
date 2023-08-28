import React from "react";
import { articles } from "../../utils/constants";
import Button from "../atoms/Button";
import Card from "../molecules/Card";

export default function Article() {
    return (
        <section
            id='about_us'
            className='mx-md-5 my-md-5 py-md-5 mx-4 my-4 py-4'
        >
            <h2 className='text-center'>Check out our latest article</h2>
            <div className='d-flex flex-md-row flex-column mt-md-5 mt-4 justify-content-center align-items-center gap-md-5 gap-4'>
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
