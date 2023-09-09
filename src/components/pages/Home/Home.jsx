import React, { useRef, useState } from "react";
import { CategoriasWrapper, HomeWrapper, ProductBooks, RecomendadosSection } from "./HomeStyles";
import Hero from '../../Hero/Hero';
import About from '../../About/About';
import CardsRecomendados from "../../Recomendados/CardsRecomendados";
import Categorias from "../../Categoria/Categorias";
import CardsProductos from "../../Productos/CardsProductos";
import Contacto from "../../Contacto/Contacto";
import Alerts from "../../UI/Alert/Alerts";


function Home() {

    const productsRef = useRef();
    const [showCartAlert, setShowCartAlert] = useState(false);

    const handleCartAlert = () => {
        setShowCartAlert(true);
        setTimeout(() => {
            setShowCartAlert(false);
        }, 2000);
    };

    const doScroll = () => {
        window.scrollTo(
            productsRef.current.getBoundingClientRect().x,
            productsRef.current.getBoundingClientRect().y,
        )
    };

    return (
        <HomeWrapper>
            <Hero doScroll={doScroll} />
            <About />
            <RecomendadosSection>
                <h2>Recomendados:</h2>
                <CardsRecomendados handleCartAlert={handleCartAlert} />
            </RecomendadosSection>
            <CategoriasWrapper className="categoria">
                <h2>Categorias:</h2>
                <Categorias />
            </CategoriasWrapper>
            <ProductBooks ref={productsRef}>
                <h2>Nuestros Productos:</h2>
                <CardsProductos handleCartAlert={handleCartAlert} />
            </ProductBooks>
            <Contacto />
            {showCartAlert && <Alerts />}
        </HomeWrapper>
    );
};

export default Home;