import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/banner.component";
import Card from "../../components/card/card.component";
import Container from "../../components/container/container.component";
import tabTitle from "../page";
import "../index.styles.scss";
import { shop } from "../../data";
import './index.styles.scss';
import Search from "../../components/search/search.component";
import Header from "../../components/header/header.component";
import { db } from "../../firebase/firebaseUtils";
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
    tabTitle(document.location.pathname);

    const [shopState, setShop] = useState([]);
    const shopRef = collection(db, 'shop');
    useEffect(() => {
        const getShop = async () => {
            const data = await getDocs(shopRef);
            setShop(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getShop()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    let minShop = shop.reduce(function (res, obj) {
        return (obj.rate < res.rate) ? obj : res;
    });


    return (
        <Container>
            <Header>
                <Search placeholder='Search Shops, Products' data={shop}></Search>
            </Header>

            <Banner value={minShop} />
            {/* card for min shop */}
            <div className="fl fl-d-cl shop-container">
                <h1 className="title">Best Shop</h1>
                <Card key={minShop.id} value={minShop}></Card>
            </div>
            <div className="fl fl-d-cl shop-container">
                <h1 className="title">All Shops</h1>
                {shopState.map((item, index) => {
                    return (
                        <Card key={item.id} value={item}></Card>
                    );
                })}
            </div>
        </Container>
    );
}

export default Home;
