import { FaPodcast } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { GiShoppingCart } from "react-icons/gi";
import styled from "styled-components";

const Header = () => {

  const linksArray = [
    { title: "Facebook", link: "https://www.facebook.com/holisticwellnessbty",text: <TiSocialFacebook /> },
    { title: "Instragram", link: "https://www.instagram.com/holisticwellnessbty/",text: <SlSocialInstagram /> },
    { title: "YouTube", link: "https://www.youtube.com/c/holisticwellnessbeauty",text: <TiSocialYoutube /> },
    { title: "LinkedIn", link: "https://www.linkedin.com/in/dr-crystal-g-a9230255/",text: <TiSocialLinkedin /> },
    { title: "Pinterest", link: "https://www.pinterest.com/holisticwellnessbeauty/?invite_code=163723402ff24f4ca167f2fbb55dd955&sender=808325970527414677",text: <TiSocialPinterest /> },
  ]

  return (
    <Container>
      <NavBar1>
          <ul className="nav2links">
              <li>
            <Link to="/podcast">
                <span style={{fontSize: "16px"}}><FaPodcast /></span> <span>Our Show</span>
            </Link>
              </li>
              <li>
            <Link to="/my-account/#/dashboard">
                <span style={{fontSize: "16px"}}><FaUserAlt /></span> <span>Account Log in</span>
            </Link>
              </li>
          </ul>
        <div className="holistic-image-container">
          <img
            src="/images/Holistic-Black-letter.png"
            alt="holistic-black-letter"
          />
        </div>
        <nav className="social-links">

          {linksArray.map((links) => (
            <div className="social-icon" key={links.title}>
            <abbr title={links.title}><NavLink className="links" to={links.link} target="_blank">{links.text}</NavLink></abbr>
          </div>
          ))}
        </nav>
      </NavBar1>
      <NavBar2>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/shop">PRODUCTS</Link></li>
          <li><Link to="/call-for-scheduling">SCHEDULING</Link></li>
          <li><Link to="/disclosure">DISCLOSURE</Link></li>
          <li><Link to="/events">EVENTS</Link></li>
          <li><Link to="/podcast">PODCAST</Link></li>
          <li><Link to="/about-us">ABOUT</Link></li>
          <li><Link to="/contact-us">CONTACT</Link></li>
          <li><Link to="/cart"><GiShoppingCart /></Link></li>
        </ul>
      </NavBar2>
    </Container>
  );
};

export default Header;



const NavBar2 = styled.div`
  margin-bottom: 24px;
  ul{
    list-style: none;
    display: flex;
    /* gap: 24px; */
    justify-content: space-evenly;
  }
  ul li{
    font-size: 16px;
    font-weight: 500;
  }
  `;

export const Link = styled(NavLink)`

  text-decoration: none;
  color: black;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: #c2a44e;
  }

  &.active,
  &:hover > span {
    color: #c2a44e;
  }
`;

const NavBar1 = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;

    .nav2links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    list-style: none;
    font-size: 14px;
    margin-top: 12px;
    padding-left: 0;
  }

  .social-links {
    display: flex;
    gap: 10px;
    margin-right: 10px;
  }

  .social-icon {
    padding: 8px;
    font-size: 18px;
    margin: 5px 0;
    border-radius: 5px;
    transition: background-color 0.3s;
    cursor: pointer;
  }

  .social-icon .links {
    color: #67615a;
  }


  abbr {
    cursor: pointer;
  }

  .social-icon:hover {
    background-color: white;
  }

  .holistic-image-container {
    width: 600px;
    position: relative;
  }
  .holistic-image-container img {
    height: 300px;
    width: 300px;
    position: absolute;
    left: 0;
  }
  .holistic-image-container img:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  max-width: 1248px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`;