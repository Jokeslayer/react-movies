import "./ActorPage.css";
import ActorCard from "../../components/ActorCard/ActorCard";

export default function ActorPage({ movies }) {
    
    // Iterates through the cast property of each movie in movies,
    // in order to generate a total cast list to use in the main function

    const actorList = movies.reduce((actors, m) => {
        m.cast.forEach((a) => {
            if (!actors.includes(a)) actors.push(a);
        });
        return actors;
    }, []);

    return (
        //iterates through actorList and placing each of its elements inside an ActorCard component
        <div className="container">
            {actorList.map((actor) => {
                return <ActorCard key={actor} actor={actor} />;
            })}
        </div>
    );
}  