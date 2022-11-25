import '../styles/cardsection.css';
import KitchenSinkExample from './card';

import { useState, useEffect } from 'react';

function GroupExample(props) {
  const url = 'http://127.0.0.1:3000';
  const [data, useData] = useState();
  const fescthApi = async () => {
    const response = await fetch(url);

    const responseJson = await response.json();
    useData(responseJson);
    console.log(data);
  };

  useEffect(() => {
    fescthApi();
  }, []);

  return (
    <>
      <div className="main-container">
        <h2>{props.titulo}</h2>

        {!data ? (
          ''
        ) : (
          <div className="card-container">
            {data.slice(0, 5).map((x) => {
              return (
                <KitchenSinkExample
                  titulo={x.Title}
                  review={x.Review.slice(0, 20)}
                  fecha={x.Year}
                  calificacion={x.Rating}
                  director={x.Director}
                  genero={x.Genre}
                  img={x.imagen}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default GroupExample;
