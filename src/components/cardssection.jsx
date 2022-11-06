import '../styles/cardsection.css';
import KitchenSinkExample from './card';

function GroupExample(props) {
  return (
    <>
      <div className="main-container">
        <h2>{props.titulo}</h2>

        <div className="card-container">
          <KitchenSinkExample />
          <KitchenSinkExample />
          <KitchenSinkExample />
          <KitchenSinkExample />
          <KitchenSinkExample />
          <KitchenSinkExample />
          <KitchenSinkExample />
          <KitchenSinkExample />
        </div>
      </div>
    </>
  );
}

export default GroupExample;
