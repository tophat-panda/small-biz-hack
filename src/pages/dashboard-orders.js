import React, { Component } from "react";
// import { Form, Field } from "react-final-form";
// import axios from "axios";
import Table from "../components/table";
// import Loading from "../components/loading";

const data = {
  _id: "5c720df9158ab7231880842c",
  first_name: "Luke",
  last_name: "Harris",

  email: "lukeharris01170@gmail.com",
  phone_number: "+447957267708",
  orders: [
    {
        full_name: " Luke Harris",
      id: "5c720e2d158ab7231880842d",
      name: "Water Bottle",
      price: 6.99
    }
  ]
};

class DashboardOrders extends Component {
  render() {
    return (
      <div>
        <h2>Orders</h2>
         <Table
              link={id => `/dashboard/customer/${id}`}
              headers={[
                { key: "full_name", text: "Name" },
                { key: "name", text: "Product Name" },
                { key: "price", text: "Price" }
              ]}
              data={data.orders}
            />




      </div>
    );
  }
}
export default DashboardOrders;