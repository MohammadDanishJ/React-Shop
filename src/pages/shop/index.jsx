import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/container/container.component';
import { shop } from '../../data';

function findShop(arr, value) {
    const element = arr.find((el) => {
        return el.id === parseInt(value);
    });
    return typeof element === "undefined" ? [false, false] : [true, element];
}
const Shop = () => {
    // Get URl param name
    const { sname } = useParams();

    // check if shop exists
    const [shopFound, Shop] = findShop(shop, sname)

    return (
        <Container>
            {sname ? (
                // if user visits with id in URL
                // path: /shop/id
                <>
                    {shopFound ? (
                        // if shop found with GET id
                        <div className='fl fl-c fl-d-cl w100 h100'>
                            <div>Id {Shop.id}</div>
                            <div>Name {Shop.name}</div>
                            <div>Location {Shop.location}</div>
                            <div>Rate {Shop.rate}</div>
                        </div>
                    ) : (
                        // if shop not found
                        <div className='fl fl-c w100 h100'>Shop Not Found </div>
                    )}
                </>
            ) : (
                // if user visits without id in URL
                // path: /shop
                <div className='fl fl-c w100 h100'>Default Shop</div>
            )}
        </Container>
    );
};

export default Shop;
