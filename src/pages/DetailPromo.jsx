import React from "react";
import { Header, Footer} from "../components";
import SearchFlight from "../components/Homepage/SearchFlight";
import promo_banner from "../assets/images/promo-banner.webp";
import "../assets/styles/detailPromo.css";

const DetailPromo = () => {
    return(
        <div>
            <Header />
            <section className="jumbotron-section">
                <img src={promo_banner} alt="promo-banner" className="jumbotron-img" />
            </section>
            <SearchFlight />
            <Footer />
        </div>
    )
}

export default DetailPromo;