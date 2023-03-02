import React from "react";
import styled from "styled-components";

const FruitDetails = (fruitInfo: Fruit) => {
  return (
    <>
      <Ttile>
        <NomFruit>{fruitInfo.nom}</NomFruit> Information Nutritionelle
      </Ttile>
      <Image src={fruitInfo.image} alt={fruitInfo.nom} />
      <Table>
        <tbody>
          <tr>
            <th>Nom</th>
            <td>{fruitInfo.nom}</td>
          </tr>
          <tr>
            <th>Calories</th>
            <td className="highlight">{fruitInfo.calories}</td>
          </tr>
          <tr>
            <th>Glucides</th>
            <td className="highlight">{fruitInfo.glucides}</td>
          </tr>
          <tr>
            <th>Fibres</th>
            <td className="highlight">{fruitInfo.fibres}</td>
          </tr>
          <tr>
            <th>Vitamines</th>
            <td>
              <ul>
                {Object.entries(fruitInfo.vitamines).map(([key, value]) => (
                  <li key={key}>{`${key}: ${value}`}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <th>Minéraux</th>
            <td>
              <ul>
                {Object.entries(fruitInfo.mineraux).map(([key, value]) => (
                  <li key={key}>{`${key}: ${value}`}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <th>Composants Chimiques</th>
            <td>
              <ul>
                <li>
                  Majeurs:{" "}
                  {Object.values(fruitInfo.composantsChimiques.majeurs).join(
                    ", "
                  )}
                </li>
                <li>
                  Mineurs:{" "}
                  {Object.values(fruitInfo.composantsChimiques.mineurs).join(
                    ", "
                  )}
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Saison</th>
            <td>{fruitInfo.saison}</td>
          </tr>
          <tr>
            <th>Disponibilité</th>
            <td>{fruitInfo.disponibilite}</td>
          </tr>
          <tr>
            <th>Utilisations</th>
            <td>
              <ul>
                {fruitInfo.utilisations.map((utilisation: string) => (
                  <li key={utilisation}>{utilisation}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

const Source = styled.a`
  display: block;
  text-align: right;
  font-size: 14px;
  color: #f4791f;
  text-decoration: none;
  margin-bottom: 20px;
`;

const Ttile = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-top: 0;
`;

const NomFruit = styled.span`
  color: #f4791f;
  font-weight: bold;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  th,
  td {
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
    text-align: left;
    font-size: 18px;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
    color: #666;
  }

  td ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  td li {
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 1.5;
  }

  td.highlight {
    color: #f4791f;
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 10px 10px;
    }
  }
`;

export default FruitDetails;
