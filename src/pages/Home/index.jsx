import { useState, useEffect } from "react";
import { Card } from "../../Comonents/Card";
import { Layout } from "../../Comonents/Layout";

function Home() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=30')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    return (
        <Layout>
            Home
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
                items ?.map((item) => {
                    return <Card key={item.id} data={item}/>
                })
            }
            </div>
        </Layout>
    )
};

export default Home;