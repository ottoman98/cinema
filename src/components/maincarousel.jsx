import Carousel from 'react-bootstrap/Carousel';
import '../styles/maincarousel.css';

function CarouselFadeExample() {
  return (
    <div className="carousel-container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://images8.alphacoders.com/695/695217.jpg"
            alt="DareDevil"
          />
          <Carousel.Caption>
            <h3>Drago Dragon</h3>
            <p>
              "En el corral de mi corazon eres la burra que mas patea"-Mateo
              Murcia
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://images8.alphacoders.com/695/695217.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://free4kwallpapers.com/uploads/originals/2019/02/14/the-punisher-wallpaper.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>ban jelsin</h3>
            <p>
              "la vida es como la monda parece corta pero se vuelve larga cuando
              se pone dura"-Chapo guzman
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
