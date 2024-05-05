import React from "react";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import styled from "styled-components";
import MenuFooter from "./MenuFooter";
import PartnersFooter from "./PartnersFooter";
import SocialLinksFooter from "./SocialLinksFooter";
import AssociationsFooter from "./AssociationsFooter";

const Footer = () => {

  const navLink = [
    { to: "/", text: "HOME"},
    { to: "/shop", text: "PRODUCTS"},
    {to: "/call-for-scheduling", text: "SCHEDULEING"},
    {to: "/disclosure", text: "DISCLOSURE"},
    {to: "/events", text: "EVENTS"},
    {to: "/podcast", text: "PODCAST"},
    {to: "/about-us", text: "ABOUT"},
    {to: "/contact-us", text: "CONTACT"},
    {to: "/cart", text: <GiShoppingCart />},
  ]

  return (
    <FooterContainer>
      <div className="social_container">
      <SocialLinksFooter />
      <MenuFooter navLink={navLink} />
      <PartnersFooter />
      <AssociationsFooter />
      </div>

      <center style={{ margin: "20px" }}>
        &copy; Copyright 2024 | All Rights Reserved | Powered by Dr. Crystal
        Garrett
      </center>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  max-width: 1200px;
  margin: 40px auto;
  .social_container {
    display: flex;
  }
`;
