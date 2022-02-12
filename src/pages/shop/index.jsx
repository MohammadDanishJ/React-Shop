import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/container/container.component';
// import { shop } from '../../data';
import tabTitle from '../page';
import { db } from "../../firebase/firebaseUtils";
import { collection, getDocs } from 'firebase/firestore';
import { nullShop } from '../../data';
import { DotLoader } from '../../components/loader';

function findShop(arr, value) {
    const element = arr.find((el) => {
        return el.shopId.toLowerCase() === value.toLowerCase();
    });
    return typeof element === "undefined" ? [false, false] : [true, element];
}
const Shop = () => {
    // Get URl param name
    const { sname } = useParams();

    const [shop, setShop] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const shopRef = collection(db, 'shop');
    useEffect(() => {
        const getShop = async () => {
            getDocs(shopRef).then((data => {
                if (!data.empty) {
                    setShop(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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

    // check if shop exists
    const [shopFound, Shop] = findShop(shop, sname)

    sname ? shopFound ? tabTitle(document.location.pathname, Shop.name) : tabTitle(document.location.pathname, 'Not Found') : tabTitle(document.location.pathname, 'Shop')

    return (
        <Container>
            {
                !isLoading ?

                    sname ? (
                        // if user visits with id in URL
                        // path: /shop/id
                        <>
                            {
                                shopFound ? (
                                    // if shop found with GET id
                                    <div className='fl fl-c fl-d-cl w100 h100' >
                                        <div>Id {Shop.id}</div>
                                        <div>Name {Shop.name}</div>
                                        <div>Location {Shop.location}</div>
                                        <div>Rate {Shop.rate}</div>
                                    </div>
                                ) : (
                                    // if shop not found
                                    <div className='fl fl-c w100 h100'>Shop Not Found </div>
                                )
                            }
                        </>
                    ) : (
                        // if user visits without id in URL
                        // path: /shop
                        <div className='fl fl-c w100 h100'>Default Shop</div>
                    ) : <div className='fl fl-c w100 h100vh'><DotLoader/></div>}

        </Container >
    );
};

export default Shop;
