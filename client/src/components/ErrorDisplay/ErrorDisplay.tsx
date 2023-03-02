import styled from "styled-components";

import HttpError from "../../classes/HttpError";

type ErrorProps = {
  error: HttpError;
};

const ErrorDisplay = ({ error }: ErrorProps) => {
  return (
    <Container>
      <ErrorCode>{error.getCode()}</ErrorCode>
      <ErrorText>{error.getMsg()}</ErrorText>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

const ErrorCode = styled.h1`
  font-size: 1.6rem;
  color: #f00;
`;

const ErrorText = styled.p`
  font-size: 2rem;
  color: #000;
  text-align: center;
`;

export default ErrorDisplay;
