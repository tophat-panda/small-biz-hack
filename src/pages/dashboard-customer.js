import React, { Component } from "react";

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
    }
  ]
};

class DashboardCustomer extends Component {
  render() {
    return (
      <div>
        <h2>
          {data.first_name} {data.last_name}
        </h2>
        info
      </div>
    );
  }
}

export default DashboardCustomer;