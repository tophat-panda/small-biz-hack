import React, { Component } from "react";
import { withRouter } from "react-router";

class Table extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          {this.props.headers.map(header => {
            return <td>{header.text}</td>;
          })}
          <td />
        </thead>
        <tbody>
          {this.props.data.map(row => {
            return (
              <tr>
                {this.props.headers.map(header => {
                  return <td>{row[header.key]}</td>;
                })}
                <td>
                  <button
                    onClick={() =>
                      this.props.history.push(this.props.link(row._id))
                    }
                  >
                    View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default withRouter(Table);
