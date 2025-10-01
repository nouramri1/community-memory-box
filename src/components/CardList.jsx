import Card from "./Card";
import beachImg from "../assets/beach.png";
import codeImg from "../assets/code.jpeg";
import competitionImg from "../assets/competition.png";
import googleImg from "../assets/google.png";
import hackathonImg from "../assets/hackathon.png";
import LAImg from "../assets/LA.jpeg";
import microsoftImg from "../assets/microsoft.jpeg";
import movieImg from "../assets/movie.jpeg";
import picnicImg from "../assets/park.jpeg";
import surfingImg from "../assets/surfing.jpeg";




const CardList = () => {
  const events = [
    { title: "Picnic at the Park", date: "June 1, 2025", description: "software engineers in the wilderness",link: "https://www.example.com/picnic-details", image: picnicImg },
    { title: "Movie Night", date: "June 5, 2025", description: "Fun cinema night" ,link: "https://www.example.com/movie-night", image: movieImg },
    { title: "Coding Workshop", date: "June 8, 2025", description: "Remember when you learnt React basics with friends" ,link: "https://www.example.com/coding-workshop", image: codeImg },
    { title: "Beach Day", date: "June 12, 2025", description: "codepath in the beachpath", link: "https://www.example.com/art-fair", image: beachImg },
    { title: "surfing Day", date: "June 15, 2025", description: "we loved surfing", link: "https://www.example.com/book-swap"  , image: surfingImg },
    { title: "LA trip", date: "June 18, 2025", description: "LA trip ", link: "https://www.example.com/yoga-session" , image: LAImg },
    { title: "Hackathon Prep", date: "June 20, 2025", description: "what a serious day!", link: "https://www.example.com/garden-day", image: hackathonImg },
    { title: "Google Headquarters Trip", date: "June 22, 2025", description: "codepath at google", link: "https://www.example.com/photo-walk" , image: googleImg },
    { title: "Microsoft", date: "June 25, 2025", description: "codepath at Microsoft", link: "https://www.example.com/board-games", image: microsoftImg },
    { title: "Coding Competition", date: "June 28, 2025", description: "Our first friendly coding showdown", link: "https://www.example.com/beach-cleanup", image: competitionImg },
  ];

  return (
    <div className="card-list">
      {events.map((event, index) => (
        <Card 
          key={index}
          title={event.title}
          date={event.date}
          description={event.description}
          link={event.link}
          image={event.image}

        />
      ))}
    </div>
  );
};

export default CardList;
