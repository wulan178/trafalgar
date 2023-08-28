import {
    Article,
    Content,
    Footer,
    Header,
    Hero,
    Services,
    Testimonials,
} from "./components";

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Content
                id='find_a_doctor'
                title='Leading healthcare providers'
                img='leading.svg'
                desc='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just
                    work. We take pride in the solutions we deliver'
                button='Learn more'
            />
            <Content
                id='apps'
                type='reverse'
                title='Download our mobile apps'
                img='download.svg'
                desc='Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls,
                    or administrative hassle) and securely'
                button='Download'
            />
            <Testimonials />
            <Article />
            <Footer />
        </>
    );
}
