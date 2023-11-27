import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Comonents/Layout";
import { OrdersCard } from "../../Comonents/OrdersCard";
import { ShoppingCartContext } from "../../Context";


function MyOrders() {
    const context = useContext(ShoppingCartContext);

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80">
                <h1>My Orders</h1>
            </div>
            {
                context.order.map((order, index) => {
                    <Link key={index} to={`/MyOrders/${order.id}`}>
                        <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
                    </Link>
                })
            }
        </Layout>
    )
};

export default MyOrders;