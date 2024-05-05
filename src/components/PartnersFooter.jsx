import styled from "styled-components";

const PartnersFooter = () => {
  return (
    <Partners className="card"  style={{ width: "18rem" }}>
      <div className="card-body">
          <h5 className="card-title">PARTNERS</h5>
          <div>
            <img src="/images/TRZ-logo.png" alt="" />
          </div>
          <div>
            <img src="/images/Powerhandz_logo.png" alt="" />
          </div>
          <div>
            <img src="/images/GTP_logo.png" alt="" />
          </div>
        </div>
    </Partners>
  )
}

export default PartnersFooter;

const Partners = styled.div`
  
  .card-title{
      color: #c2a44e;
      text-align: center;
      font-size: 16px;
  }
  img{
    width: 200px;
  }
  .card-body{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    div{
      margin: 5px auto;
    }
  }
`;
