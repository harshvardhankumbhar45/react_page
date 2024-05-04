import styled from "styled-components";

const Card1 = ({ card }) => {

  return (
      <CardContainer
        className="card"
        style={{ width: "14rem", margin: "20px", border: "none" }}
      >
        <img src={card.image} style={{width: "100%", height: "130px"}} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
        </div>
      </CardContainer>
  );
};

export default Card1;

const CardContainer = styled.div`
  .card-title {
      font-size: 22px;
      text-align: center;
      font-family: Georgia, "Times New Roman", Times, serif;
      font-weight: 500;
      color: #333338;
    }
`;