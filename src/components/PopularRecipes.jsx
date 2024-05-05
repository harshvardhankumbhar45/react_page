import styled from "styled-components";
import { Button } from "./MainContent";

const PopularRecipes = () => {
  const imgArr = [
    { src: "/images/popular_recipes/img_1.png" },
    { src: "/images/popular_recipes/img_2.jpg" },
    { src: "/images/popular_recipes/img_3.jpg" },
    { src: "/images/popular_recipes/img_4.png" },
    { src: "/images/popular_recipes/img_5.jpg" },
    { src: "/images/popular_recipes/img_6.png" },
  ];

  return (
    <PRContainer>
      <center className="pr_heading">
        <Button>POPULAR RECIPES</Button>
      </center>
      <div className="recipe_container">
        <div className="card" style={{ width: "45rem" }}>
          <img src="/images/popular_recipes/img.png" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Roasted Garlic Hummus</h5>
            <hr className="line" />
            <p className="card-text">
              Chickpeas, also known as garbanzo beans, have been grown and eaten
              in Middle Eastern countries for thousands of years. Their nutty
              taste and grainy texture pair well with many other foods and
              ingredients. As a rich source of vitamins, minerals, and fiber,
              chickpeas may offer a variety of health
            </p>
            <Button>Learn More</Button>
          </div>
        </div>

        <div className="images_arr">
          {imgArr.map((source) => (
            <span key={source.src}>
              <img src={source.src} />
            </span>
          ))}
        </div>
      </div>
    </PRContainer>
  );
};

export default PopularRecipes;

const PRContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 40px;
  .line {
    color: #e5e5e5;
    border: 1px solid #e5e5e5;
  }
  .pr_heading {
    margin: 40px 0;
  }
  .recipe_container {
    display: flex;
    .images_arr {
      width: 60%;
      margin-left: 45px;
    }
    .images_arr img {
      width: 260px;
      height: 180px;
      margin: 0 10px;
      margin-bottom: 20px;
    }
    .card-text {
      font-size: 17px;
      color: #67615a;
      text-align: justify;
      margin-bottom: 20px;
    }
    .card-title {
      margin-top: 20px;
      color: #333338;
      font-size: 22px;
    }
  }
`;
