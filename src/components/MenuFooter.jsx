import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuFooter = ({ navLink }) => {
  return (
      <Menu className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">MENU</h5>
          <div className="card-text-container">
          {navLink.map((data) => (
            <div className="card-text" key={data.text}>
              <NavLink className="text" to={data.to}>
                {data.text}
              </NavLink>
            </div>
          ))}
          </div>
        </div>
      </Menu>
  );
};

export default MenuFooter;

const Menu = styled.div`
    h5 {
      text-align: center;
      color: #c2a44e;
      font-size: 16px;
    }
    .text {
      color: #333338;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      padding: 20px;
    }
    .card-text {
      padding: 10px 0;
    }
    .card-text-container {
      padding: 20px 0;
      margin: 10px 0;
    }
`;
