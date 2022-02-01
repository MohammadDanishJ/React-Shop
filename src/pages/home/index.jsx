import React from "react";
import Banner from "../../components/banner/banner.component";
import Card from "../../components/card/card.component";
import Container from "../../components/container/container.component";
import tabTitle from "../page";
import "../index.styles.scss";
import { shop } from "../../data";
import './index.styles.scss';
import Search from "../../components/search/search.component";

const Home = () => {
    tabTitle(document.location.pathname);

    let minShop = shop.reduce(function (res, obj) {
        return (obj.rate < res.rate) ? obj : res;
    });

    return (
        <Container>
            <Search placeholder='Search Shops, Products' data={shop}></Search>
            <Banner value={minShop} />
            {/* card for min shop */}
            <div className="fl fl-d-cl shop-container">
                <h1 className="title">Best Shop</h1>
                <Card key={minShop.id} value={minShop}></Card>
            </div>
            <div className="fl fl-d-cl shop-container">
                <h1 className="title">All Shops</h1>
                {shop.map((item, index) => {
                    return (
                        <Card key={item.id} value={item}></Card>
                    );
                })}
            </div>
        </Container>
    );
}

export default Home;
