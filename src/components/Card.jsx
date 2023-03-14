import '../styles.css/card.css';
// import katieZaferes from '../images/katie-zaferes.png';
// import star from '../images/star.png';

const Card = ({ item }) => {
  const { coverImg } = item;

  let badgeText;

  if (item.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (item.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}

      <img
        src={`../images/${coverImg}`}
        className="card--image"
        alt="cardimage"
      />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" alt="starimage" />
        <span>{item.stats.rating}</span>
        <span className="gray">({item.stats.reviewCount}) • </span>
        <span className="gray">{item.location}</span>
      </div>
      <p className="card--title">{item.title}</p>
      <p className="card--price">
        <span className="bold"> From ${item.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
