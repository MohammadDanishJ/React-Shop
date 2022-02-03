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
import { collection, onSnapshot } from 'firebase/firestore';

const Home = () => {
    tabTitle(document.location.pathname);

    const [shopState, setShop] = useState([]);
    const [minShop, setMinShop] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const shopRef = collection(db, 'shop');

    useEffect(() => {
        const getShop = async () => {
            const observer = onSnapshot(shopRef, data => {
                // console.log(`Received doc snapshot: ${docSnapshot}`);
                let temp = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                console.log(temp)
                setShop(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                setisLoading(false)

                let tempMin = temp.reduce((res, obj) => {
                    return (obj.rate < res.rate) ? obj : res;
                });
                setMinShop(tempMin)
            }, err => {
                console.log(`Encountered error: ${err}`);
            });
        }

        getShop()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Header>
                <Search placeholder='Search Shops, Products' data={shop}></Search>
            </Header>
            <Banner value={minShop} isLoading={isLoading} />
            {/* card for min shop */}
            <div className="fl fl-d-cl shop-container">
                <h1 className="title">Best Shop</h1>
                {
                    !isLoading ? <Card key={minShop.id} value={minShop}></Card> : <div>Loading</div>
                }

            </div>
            <div className="fl fl-d-cl shop-container">
                <h1 className="title">All Shops</h1>
                {
                    !isLoading ?
                        shopState.map((item, index) => {
                            return <Card key={item.id} value={item}></Card>;
                        })
                        : <div>Loading</div>
                }
            </div>
        </Container>
    );
}

export default Home;
