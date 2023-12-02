import { useContext } from "react";
import { Card } from "../../Comonents/Card";
import { Layout } from "../../Comonents/Layout";
import { ProductDetails } from "../../Comonents/ProductDetails";
import { ShoppingCartContext } from "../../Context";

function Home() {

    const context = useContext(ShoppingCartContext);
    const renderView = () => {
        if (context.searchByTitle?.length > 0) {
            if(context.filteredItems?.length > 0){
                return (
                    context.filteredItems?.map((item) => {
                        return <Card key={item.id} data={item} />
                    })
                )
            }else{
                return (<div>Not Found</div>)
            }
        } else {
            return (
                context.items?.map((item) => {
                    return <Card key={item.id} data={item} />
                })
            )
        }
    }

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-3">
                <h1 className="font-medium text-lg">Exclusive products</h1>
            </div>
            <input type="text" placeholder="Search a product" className="rounded-lg border border-black w-80 p-4 mb-4" onChange={(event) => context.setSearchByTitle(event.target.value)} />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {
                    renderView()
                }
            </div>
            <ProductDetails />
        </Layout>
    )
};

export default Home;