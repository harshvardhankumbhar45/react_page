import styled from "styled-components";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { CiMail } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { MdCall } from "react-icons/md";

const SocialLinksFooter = () => {
  const socialLinks = [
    {title: "Facebook", to: "https://facebook.com", text: <TiSocialFacebook />},
    {title: "Instagram", to: "https://instagram.com", text: <SlSocialInstagram />},
    {title: "YouTube", to: "https://youtube.com", text: <TiSocialYoutube />},
    {title: "Pinterest", to: "https://pinterest.com", text: <TiSocialPinterest />},
    {title: "LinkedIn", to: "https://linkenin.com", text: <TiSocialLinkedin />},
    {title: "Mail", to: "harsh@gmail.com", text: <CiMail />},
    {title: "Phone", to: "/111", text: <MdCall />},
  ]

  const categories_info = ["Healing Thoughts",
  "Holistic Femininity",
  "Holistic Nutrition",
  "Holistic Sports & Recovery",
  "Holistic Wellness",
  "Laws Of The Universe",
  "Mindfulness",
  "THE ESSENCE OF LIFE"]
  return (
    <SocialLinks className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="card-container">
            {socialLinks.map((data) => (
            <span key={data.title} className="links" >
                <abbr title={data.title}><NavLink className="link" to={data.to} target="_blank">{data.text}</NavLink></abbr>
            </span>
            ))}
          </div>
          <div className="journal_heading">
            Journal Categories
          </div>
          {categories_info.map((item) => (
            <div key={item} className="categories_info">{item}</div>
          ))}
        </div>
      </SocialLinks>
  )
}

export default SocialLinksFooter;

const SocialLinks = styled.div`
  .link{
    font-size: 20px;
    color: #67615a;
  }
  .card-container{
    display: flex;
    gap: 14px;
  }
  .journal_heading{
    text-align: center;
    padding: 65px 0 40px 0;
    font-size: 21px;
    font-weight: 600;
    color: #333338;
  }
  .categories_info{
    text-align: center;
    color: #333338;
    font-size: 17px;
    padding: 5px 0;
  }
`;
