import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import axios from "axios";
import Table from "../components/table";
import Loading from "../components/loading";

class CustomersDashboard extends Component {
  state = {
    create: false,
    loading: false,
    customers: []
  };
  componentDidMount() {
    this.fetch();
  }
  submit = values => {
    this.setState({ loading: true });
    axios
      .post("/.netlify/functions/customers", values)
      .then(() => {
        this.setState({ create: false });
        this.fetch();
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };
  fetch = () => {
    this.setState({ loading: true });
    axios
      .get("/.netlify/functions/customers")
      .then(r => {
        this.setState({ loading: false, customers: r.data });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div>
        <h2>Customers</h2>
        {this.state.create ? (
          <Form
            onSubmit={this.submit}
            render={({ handleSubmit, pristine, invalid }) => (
              <form onSubmit={handleSubmit}>
                <h2>First name</h2>
                <div>
                  <Field
                    name="first_name"
                    component="input"
                    placeholder="First name"
                  />
                </div>

                <h2>Last name</h2>
                <div>
                  <Field
                    name="last_name"
                    component="input"
                    placeholder="Last name"
                  />
                </div>

                <h2>Email</h2>
                <div>
                  <Field name="email" component="input" placeholder="Email" />
                </div>

                <h2>Phone number</h2>
                <div>
                  <Field
                    name="phone_number"
                    component="input"
                    placeholder="Phone"
                  />
                </div>
                <div className="button-container">
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => {
                      this.setState({ create: false });
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" disabled={pristine || invalid}>
                    Submit
                  </button>
                </div>
              </form>
            )}
          />
        ) : (
          <div>
            <div className="button-container">
              <button
                onClick={() => {
                  this.setState({ create: true });
                }}
              >
                Create customer
              </button>
            </div>
            <Table
              link={id => `/dashboard/customer/${id}`}
              headers={[
                { key: "first_name", text: "First name" },
                { key: "last_name", text: "Last name" },
                { key: "email", text: "Email" },
                { key: "phone_number", text: "Phone number" }
              ]}
              data={this.state.customers}
            />
          </div>
        )}
      </div>
    );
  }
}

export default CustomersDashboard;
