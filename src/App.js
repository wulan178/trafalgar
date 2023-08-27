import { BrowserRouter, Route, Routes } from "react-router-dom";

import Article from "./components/Article";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Providers from "./components/Providers";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Providers />
            <Download />
            <Testimonials />
            <Article />
            <Footer />
        </>
    );
}

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}
