import React, { Component } from "react";

class Answerphone extends Component {
  render() {
    return (
      <button
        className="phone-btn answerphone-btn"
        onClick={this.props.onClick}
      >
        <svg
          width="25px"
          height="15px"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-2"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Desktop-HD"
              transform="translate(-794.000000, -767.000000)"
              fill="#FFFFFF"
            >
              <g id="Group-2" transform="translate(567.000000, 754.000000)">
                <g
                  id="icon-phone-ring"
                  transform="translate(227.000000, 13.000000)"
                >
                  <path
                    d="M2,2.22044598e-16 L6,2.22044598e-16 C6.47526862,-9.70016784e-05 6.88494628,0.334333746 6.98,0.8 L7.98,5.8 C8.04532437,6.12623595 7.94411628,6.46359625 7.71,6.7 L5.19,9.22 C6.37170081,11.6589309 8.34106908,13.6282992 10.78,14.81 L13.29,12.29 C13.5264038,12.0558837 13.863764,11.9546756 14.19,12.02 L19.19,13.02 C19.66,13.12 20,13.52 20,14 L20,18 C20,19.1045695 19.1045695,20 18,20 L16,20 C7.163444,20 8.8817842e-16,12.836556 0,4 L0,2 C0,0.9 0.9,2.22044598e-16 2,2.22044598e-16 Z"
                    id="Path"
                  />
                  <path
                    d="M20,8 C20,8.55228475 19.5522847,9 19,9 C18.4477153,9 18,8.55228475 18,8 C18,4.6862915 15.3137085,2 12,2 C11.4477153,2 11,1.55228475 11,1 C11,0.44771525 11.4477153,-8.8817842e-16 12,-8.8817842e-16 C14.1217319,-4.4408921e-16 16.1565632,0.842854723 17.6568542,2.34314575 C19.1571453,3.84343678 20,5.87826808 20,8 Z M16,8 C16,8.55228475 15.5522847,9 15,9 C14.4477153,9 14,8.55228475 14,8 C14,6.8954305 13.1045695,6 12,6 C11.4477153,6 11,5.55228475 11,5 C11,4.44771525 11.4477153,4 12,4 C14.209139,4 16,5.790861 16,8 Z"
                    id="Shape"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
    );
  }
}

export default Answerphone;
