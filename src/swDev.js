const swDev = () => {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((res)=>{
        console.log('respone', res)
    })
};

export default swDev;
