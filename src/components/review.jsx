import { React, useState, useEffect } from 'react';

import { useParams } from 'react-router';
import '../styles/gamedetails.css';

function Review() {
  return (
    <>
      <div className="details-content">
        <h1>Drago dragon</h1>
        <img
          className="img-detail"
          src="https://images8.alphacoders.com/695/695217.jpg"
        />
        <div className="details-tags">
          <p>
            <b>Genero: </b>
            no binarie
          </p>
          <p>
            <b>Developer: </b>
            sad
          </p>
          <p>
            <b>Publisher:</b> asdasd
          </p>
          <p>
            <b>Fecha de lanzamiento: </b>
            ayer
          </p>
        </div>

        <p className="details-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          assumenda quia ratione suscipit dignissimos sapiente cumque id eveniet
          exercitationem, perspiciatis sit fugit nisi error! Odit reprehenderit
          quia sit nisi ab. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eligendi maxime aut quisquam impedit temporibus quae, beatae
          inventore dolore et obcaecati, at ipsam accusamus molestiae tempore.
          Veniam nam minus ratione ea?Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sed perferendis sequi odit explicabo tempora
          repellat reprehenderit quia, excepturi, totam minima voluptatum nulla,
          tenetur officiis. Optio dolor possimus nobis aliquid quam! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatum mollitia neque
          eos quod magni qui, libero dolore maxime possimus esse unde dolorem
          porro ab modi tempora iure voluptatibus aliquam aspernatur! Voluptates
          cum aperiam aspernatur sit tenetur voluptatem nihil amet voluptas
          labore quae incidunt, est quisquam beatae, eaque soluta. Eos quas
          nulla placeat dolor perferendis quis quod officiis eligendi unde
          adipisci. Iure in vitae nemo quibusdam expedita, ullam soluta minus ad
          sunt quia nisi voluptatum! A maxime dignissimos explicabo neque
          ducimus doloremque veniam aperiam sapiente unde culpa. Laboriosam
          dignissimos ullam rem. Modi impedit, minima, facere soluta ab
          repellendus quod harum veritatis hic inventore nemo placeat laudantium
          vitae ducimus! Sunt qui aspernatur facilis, atque beatae dolor
          repellat repudiandae sequi sint quos harum? Consequuntur praesentium
          suscipit labore, consectetur reprehenderit ipsum quidem voluptatibus
          sunt, voluptatem vel veritatis in error. Est exercitationem similique
          ratione, facilis et, recusandae, assumenda aliquid iure sed vitae
          ipsum explicabo esse.
        </p>
      </div>
    </>
  );
}

export default Review;
