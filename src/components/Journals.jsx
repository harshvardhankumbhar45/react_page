import styled from "styled-components";



const Journals = ({ cryJournal }) => {
  console.log(cryJournal);

  return (
    <>
      <Container className="card" style={{width: "14rem"}}>
        <img src={cryJournal.img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{cryJournal.title}</h5>
          <p className="card-text">
            By Dr. Crystal
          </p>
          <p>Read More &gt;</p>
        </div>
      </Container>
    </>
  );
};

export default Journals;

const Container = styled.div`
  border: none;
  .card-text{
    text-align: center;
    margin-bottom: 24px;
  }
`
