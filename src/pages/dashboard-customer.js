import React, { Component } from "react";
import Table from "../components/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = {
  _id: "5c720df9158ab7231880842c",
  first_name: "Luke",
  last_name: "Harris",
  email: "lukeharris01170@gmail.com",
  phone_number: "+447957267708",
  orders: [
    {
      id: "5c720e2d158ab7231880842d",
      name: "Water Bottle",
      price: 6.99
    },
    {
      id: "5c720e2d158ab7231880842d",
      name: "Rucksack",
      price: 9.99
    }
  ]
};

const products = [
  {
    id: "5c720e2d158ab7231880842d",
    name: "Water Bottle",
    price: 6.99
  },
  {
    id: "5c720e2d158ab7231880842d",
    name: "Budget trainers",
    price: 4.99
  },
  {
    id: "5c720e2d158ab7231880842d",
    name: "Tracksuit",
    price: 11.59
  },
  {
    id: "5c720e2d158ab7231880842d",
    name: "Rucksack",
    price: 9.99
  }
];

class DashboardCustomer extends Component {
  state = {
    extraOrders: []
  };
  render() {
    return (
      <div>
        <div className="customerHeader">
          <div className="customerCard">
            <h2>
              {data.first_name} {data.last_name}
            </h2>
            <p>
              <FontAwesomeIcon icon="phone" /> {data.phone_number}
            </p>
            <p>
              <FontAwesomeIcon icon="envelope" /> {data.email}
            </p>
          </div>
          <div className="orderBlock">
            <h3>Recent orders</h3>
            <Table
              noView
              link={id => `/dashboard/customer/${id}`}
              headers={[
                { key: "name", text: "Product Name" },
                { key: "price", text: "Price" }
              ]}
              data={data.orders}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardCustomer;
