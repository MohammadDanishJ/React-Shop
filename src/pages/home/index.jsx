import React from "react";
import Banner from "../../components/banner/banner.component";
import Card from "../../components/card/card.component";
import Container from "../../components/container/container.component";
import tabTitle from "../page";
import "../index.styles.scss";
import { shop } from "../../data";

const Home = () => {
    tabTitle(document.location.pathname);
    return (
        <Container>
            <Banner
                value={
                    shop.reduce(function (res, obj) {
                        return (obj.rate < res.rate) ? obj : res;
                    })
                }
            />
            {shop.map((item, index) => {
                return (
                    <Card key={item.id} value={item}></Card>
                );
            })}
        </Container>
    );
}

export default Home;
