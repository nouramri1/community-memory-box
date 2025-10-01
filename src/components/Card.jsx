const Card = ({ title, date, description, link, image }) => {
    return (
      <div className="card">
        <img src={image} alt={title} className="card-img" />
        <h3>{title}</h3>
        <p><strong>Date:</strong> {date}</p>
        <p>{description}</p>
        {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="card-btn">See More</button>
        </a>
      )}
      </div>
    );
  };
  
  export default Card;
  