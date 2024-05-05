import styled from "styled-components";

const AssociationsFooter = () => {
  return (
    <Association className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">ASSOCIATIONS</h5>
          <div>
            <img src="/images/RYT500_logo.png" alt="" />
          </div>
          <div>
            <img src="/images/Nama_logo.png" alt="" />
          </div>
          <div>
            <img src="/images/impa_logo.png" alt="" />
          </div>
          <div>
            <img src="/images/byta_logo.png" alt="" />
          </div>          
        </div>
      </Association>
  )
}

export default AssociationsFooter;

const Association = styled.div`
  .card-title{
    text-align: center;
    font-size: 16px;
    color: #c2a44e;
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
`
