import React from "react";
import styled from "styled-components";
import Card1 from "./Card1";
import { SlCalender } from "react-icons/sl";

const MainContent = () => {
  const text = "the power that made the body, heals the body";
  const card = [
    { image: "/images/weight_loss.jpg", title: "WEIGHT LOSS" },
    { image: "/images/mineral_analysis.png", title: "MINERAL ANALYSIS" },
    { image: "/images/auto_immune.jpg", title: "AUTO IMMUNE" },
    { image: "/images/endocryine.jpg", title: "ENDOCRINE" },
    { image: "/images/skin_hair.jpg", title: "SKIN & HAIR" },
  ]

  return (
    <Container>
      <ImageContainer>
        <img src="/images/HWB-logo2.png" />
        <div className="wellness-info">
          <h1>&ldquo;{text}&rdquo;</h1>
          <div className="cards">
          {card.map((card) => (
            <Card1 key={card.title} card={card}/>
          ))}
          </div>
          <center>
            <Button type="button" className="button"><span><SlCalender /></span><span>SCHEDULE NOW!</span></Button>
          </center>
        </div>
      </ImageContainer>

      <div style={{marginTop: "400px", marginBottom: "30px"}}>
      <h3 style={{textAlign: "center"}}>WELCOME TO THE WORLD OF HOLISTIC WELLNESS BEAUTY!</h3>
      </div>

      <div className="text-information">
          <div className="image_intention">
            <img src="/images/intentions.png" alt="" />
          </div>
          <div className="intention_info">
          Hey there, I’m Dr. Crystal Garrett, your guide to holistic healing and beauty.<br /> <br />

Imagine a life where you feel vibrant, balanced, and deeply connected to your inner self. Through a combination of ancient wisdom and a change of mindset, I empower women like you to unlock your body’s natural healing abilities and embrace your unique beauty from within. <br /> <br />

Join me on this transformative journey and learn how to tap into the power of traditional remedies, herbal knowledge, and spiritual healing. Together, we’ll create a harmonious balance that radiates beauty, strength, and joy. <br /><br />

Explore Holistic Wellness Beauty for inspiring insights, practical tips, and uplifting stories that will guide you towards a more holistic and beautiful life. <br /><br />

Let’s embark on this path of self-discovery together! <br /><br />
          </div>
      </div>
    </Container>
  );
};

export default MainContent;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #c2a44e;
  border: 1px solid white;
  padding: 10px 20px;
  gap: 5px;

  &:hover{
  background-color: black;
  }
`;

const Container = styled.main`

  .text-information {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 40px;

    .image_intention img{
      width: 400px;
      height: 500px;
      object-fit: cover;
    }

    .intention_info {
      font-size: 18px;
    }
  }

  .wellness-info {
    width: 1200px;
    background-color: white;
    height: 400px;
    position: absolute;
    top: 325px;
    left: 10%;
    z-index: 1;
    box-sizing: border-box;

    .cards {
      display: flex;
    }

    h1 {
      text-align: center;
      font-weight: 500;
      font-style: italic;
      font-size: 21px;
      color: #c2a44e;
      margin: 30px 0 20px 0;
    }

    .card-title {
      font-size: 22px;
      text-align: center;
      font-family: Georgia, "Times New Roman", Times, serif;
      font-weight: 500;
      color: #333338;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }
`;
