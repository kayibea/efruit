import React from "react";
import styled from "styled-components";

import Loader from "./components/Loader";
import HttpError from "./classes/HttpError";
import BackToTop from "./components/BackToTop";
import FruitDetails from "./components/FruitDetails";
import ErrorDisplay from "./components/ErrorDisplay";

const App = () => {
  const [fruit, setFruit] = React.useState<Fruit>();
  const [error, setError] = React.useState<HttpError>();
  const [loading, setLoading] = React.useState(false);

  function getFruit() {
    setLoading(true);

    fetch(`/api/fruit/?limit=1`)
      .then((res) => {
        if (!res.ok) throw new HttpError(res.status, res.statusText);
        return res.json();
      })
      .then((data) => setFruit(data[0]))
      .catch((err: HttpError) => setError(err));
  }

  React.useEffect(getFruit, []);

  setTimeout(() => setLoading(false), 3000);
  if (loading) return <Loader />;
  return (
    <Container>
      <BackToTop />
      <Form>
        <Randomize type="button" onClick={() => getFruit()}>
          Fruit aléatoire
        </Randomize>
      </Form>

      {error ? (
        <ErrorDisplay error={error} />
      ) : (
        fruit && <FruitDetails {...fruit} />
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 5em;
`;

const Randomize = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f4791f;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export default App;
