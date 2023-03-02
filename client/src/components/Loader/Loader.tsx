import styled from "styled-components";

const Loader = () => <Spiner></Spiner>;

const Spiner = styled.span`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 9999;

  :after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: -50px;
    border: 10px solid #f4f4f4;
    border-top-color: #333;
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
