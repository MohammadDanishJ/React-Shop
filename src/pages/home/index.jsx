import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/banner.component";
import Card from "../../components/card/card.component";
import Container from "../../components/container/container.component";
import tabTitle from "../page";
import "../index.styles.scss";
import { nullShop } from "../../data";
import './index.styles.scss';
import Search from "../../components/search/search.component";
import Header from "../../components/header/header.component";
import { db } from "../../firebase/firebaseUtils";
import { collection, getDocs } from 'firebase/firestore';
import UserLoader from "../../components/loader";

const Home = () => {
    tabTitle(document.location.pathname);

    const [shopState, setShop] = useState([]);
    const [minShop, setMinShop] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const shopRef = collection(db, 'shop');

    useEffect(() => {
        const getShop = async () => {
            getDocs(shopRef).then((data => {
                if (!data.empty) {
                    setShop(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                    setisLoading(false)
                } else {
                    setShop(nullShop)
                    setisLoading(false)
                }
            })).catch(e => {
                setShop(nullShop)
                setisLoading(false)
                console.log(e)
            });

        }

        getShop()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!isLoading) {
            try {
                let temp = shopState.reduce((res, obj) => {
                    return (obj.rate < res.rate) ? obj : res;
                });
                setMinShop(temp)
            } catch (e) {

                setMinShop(nullShop[0])
                console.log(e)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    return (
        <Container>
            <Header>
                <Search placeholder='Search Shops, Products' data={shopState}></Search>
            </Header>
            <Banner value={minShop} isLoading={isLoading} />
            {/* card for min shop */}
            <div className="fl fl-d-cl shop-container">
                <h1 className="title">Best Shop</h1>
                {
                    !isLoading ? <Card key={minShop.id} value={minShop}></Card> : <UserLoader />
                }

            </div>
            <div className="fl fl-d-cl shop-container">
                <h1 className="title">All Shops</h1>
                {
                    !isLoading ?
                        shopState.map((item, index) => {
                            return <Card key={item.id} value={item}></Card>;
                        })
                        : (<><UserLoader /><UserLoader /><UserLoader /></>)
                }
            </div>
        </Container>
    );
}

export default Home;
