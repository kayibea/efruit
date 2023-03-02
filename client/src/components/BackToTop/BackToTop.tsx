import styled from "styled-components";

function backToTop() {
  window.scrollTo(0, 0);
}

const BackToTop = () => {
  return (
    <Container>
      <Button onClick={backToTop}>&#8593;</Button>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
  }
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f4791f;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  border: none;
`;

export default BackToTop;
