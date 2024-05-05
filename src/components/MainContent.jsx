import React from "react";
import styled from "styled-components";
import Card1 from "./Card1";
import { SlCalender } from "react-icons/sl";
import Scheduling from "./Scheduling";
import PopularRecipes from "./PopularRecipes";
import Journals from "./Journals";

const MainContent = () => {
  const text = "the power that made the body, heals the body";

  const card = [
    { image: "/images/weight_loss.jpg", title: "WEIGHT LOSS" },
    { image: "/images/mineral_analysis.png", title: "MINERAL ANALYSIS" },
    { image: "/images/auto_immune.jpg", title: "AUTO IMMUNE" },
    { image: "/images/endocryine.jpg", title: "ENDOCRINE" },
    { image: "/images/skin_hair.jpg", title: "SKIN & HAIR" },
  ];

  const schedule = [
    {
      title: "Tissue Mineral Analysis",
      price: "$399.00",
      link: "",
      linkText: "Schedule (800) 678 - 6451",
      img: "/images/scheduling/tissue_mineral_analysis.png",
    },
    {
      title: "Wellness w/Dr. Crystal",
      price: "$125.00",
      link: "",
      linkText: "Schedule Here!",
      img: "/images/scheduling/wellness.png",
    },
    {
      title: "FOOT DETOX THERAPY",
      price: "$50.00",
      link: "",
      linkText: "Schedule Here!",
      img: "/images/scheduling/foot_detox_therapy.png",
    },
    {
      title: "Beauty w/Dr. Crystal",
      price: "$125.00",
      link: "",
      linkText: "Schedule Here!",
      img: "/images/scheduling/beauty.png",
    },
    {
      title: "Localized Cryotherapy",
      price: "$75.00",
      link: "",
      linkText: "Schedule Now",
      img: "/images/scheduling/localized_cryotherapy.png",
    },
    {
      title: "Exercise Recovery",
      price: "$125.00",
      link: "",
      linkText: "Schedule Now!",
      img: "/images/scheduling/exercise_recovery.png",
    },
    {
      title: "Intuitive Readings",
      price: "$125.00",
      link: "",
      linkText: "Schedule Now!",
      img: "/images/scheduling/intuitive_readings.png",
    },
    {
      title: "FOOT DETOX + HEALING HERBAL FOOT BATH & MASSAGE",
      price: "$125.00",
      link: "",
      linkText: "Schedule Here!",
      img: "/images/scheduling/foot_detox_therapy.png",
    },
    {
      title: 'Red Light Therapy "Radiant Glow Red Light Therapy Session"',
      price: "$70.00",
      link: "",
      linkText: "Schedule (800) 678-6451",
      img: "/images/scheduling/red_light_therapy.png",
    },
    {
      title: "Vibration Therapy",
      price: "$50.00",
      link: "",
      linkText: "Schedule Here!",
      img: "/images/scheduling/vibration_therapy.png",
    },
    {
      title: "Yoga|Meditaion Group Sessions",
      price: "",
      link: "",
      linkText: "Buy product!",
      img: "/images/scheduling/yoga.png",
    },
    {
      title: "Dietary Profile",
      price: "$125.00",
      link: "",
      linkText: 'Schedule as an "Add-On" to your Tissue Mineral Analysis',
      img: "/images/scheduling/dietary_profile.png",
    },
  ];

  const cryJournal = [
    { img: "/images/journals/img1.png", title: "Children & Vegetables" },
    { img: "/images/journals/img2.png", title: "HairStyle & Energy...BEWARE!" },
    { img: "/images/journals/img3.png", title: 'Empower Yourself "Minerals"' },
    { img: "/images/journals/img4.png", title: "Ancient Womb Wellness" },
    { img: "/images/journals/img5.png", title: "Dr. Crystal's Favorite Juice" },
  ];

  return (
    <Container>
      <ImageContainer>
        <img src="/images/HWB-logo2.png" />
        <div className="wellness-info">
          <h1>&ldquo;{text}&rdquo;</h1>
          <div className="cards">
            {card.map((card) => (
              <Card1 key={card.title} card={card} />
            ))}
          </div>
          <center>
            <Button type="button" className="button">
              <span>
                <SlCalender />
              </span>
              <span>SCHEDULE NOW!</span>
            </Button>
          </center>
        </div>
      </ImageContainer>

      <div style={{ marginTop: "400px", marginBottom: "30px" }}>
        <h3 style={{ textAlign: "center" }}>
          WELCOME TO THE WORLD OF HOLISTIC WELLNESS BEAUTY!
        </h3>
      </div>

      <div className="text-information">
        <div className="image_intention">
          <img src="/images/intentions.png" alt="" />
        </div>
        <div className="intention_info">
          Hey there, I’m Dr. Crystal Garrett, your guide to holistic healing and
          beauty.
          <br /> <br />
          Imagine a life where you feel vibrant, balanced, and deeply connected
          to your inner self. Through a combination of ancient wisdom and a
          change of mindset, I empower women like you to unlock your body’s
          natural healing abilities and embrace your unique beauty from within.{" "}
          <br /> <br />
          Join me on this transformative journey and learn how to tap into the
          power of traditional remedies, herbal knowledge, and spiritual
          healing. Together, we’ll create a harmonious balance that radiates
          beauty, strength, and joy. <br />
          <br />
          Explore Holistic Wellness Beauty for inspiring insights, practical
          tips, and uplifting stories that will guide you towards a more
          holistic and beautiful life. <br />
          <br />
          Let’s embark on this path of self-discovery together! <br />
          <br />
        </div>
      </div>
      <h2 className="schedule-h2">SCHEDULING</h2>
      <div className="schedule">
        {schedule.map((items) => (
          <div key={items.title}>
            <Scheduling schedule={items} />
          </div>
        ))}
      </div>
      <PopularRecipes />
      <div className="journals">
        <br />
        <span className="heading2">DR. CRYSTAL's JOURNAL</span>
        <br />
        <div className="cryJournalContainer">
          {cryJournal.map((val) => {
            return (
              <div key={val.title}>
                <Journals cryJournal={val} />
              </div>
            );
          })}
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

  &:hover {
    background-color: black;
  }
`;

const Container = styled.main`
  .journals {
    background-color: white;
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    .heading2 {
      color: #c2a44e;
      font-size: 21px;
      font-weight: 600;
    }
    .cryJournalContainer{
      display: flex;
      gap: 20px;
    }
  }

  .schedule-h2 {
    font-size: 21px;
    color: #333338;
    text-align: center;
    margin: 50px 0 20px 0;
    padding: 40px 0;
    justify-content: space-around;
  }
  .schedule {
    display: flex;
    max-width: 1200px;
    min-height: 100px;
    gap: 36px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .text-information {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 40px;
    margin-bottom: 100px;

    .image_intention img {
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
