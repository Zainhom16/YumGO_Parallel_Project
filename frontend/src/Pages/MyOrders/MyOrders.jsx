import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";
 
const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [budget, setBudget] = useState(5000); // Initial budget
 
  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };
 
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
 
  /*************CALCULATE BUDGET AFTER EACH TRANSACTION*************/
  useEffect(() => {
    const totalAmount = data.reduce((acc, order) => acc + order.amount, 0);
    setBudget(5000 - totalAmount);
  }, [data]);
 
  return (
<div className="my-orders">
<div className="user-info">
<div className="budget-info">
<p>
<b>Initial Budget:</b> $5000
</p>
<p>
<b>Current Budget:</b> ${budget}
</p>
</div>
</div>
<h2>My Orders</h2>
<div className="container">
        {data.map((order, index) => {
          return (
<div className="my-orders-order" key={index}>
<img src={assets.parcel_icon} alt="" />
<p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
</p>
<p>${order.amount}.00</p>
<p>Items: {order.items.length}</p>
<p>
<span>&#x25cf; </span>
<b>{order.status}</b>
</p>
<button onClick={fetchOrders}>Track Order</button>
</div>
          );
        })}
</div>
</div>
  );
};
 
export default MyOrders;
