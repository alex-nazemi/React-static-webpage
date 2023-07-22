import "../index.css";

export default function Concept({title, image, description}) {
    return (
        <div className="concept">
            <img src={image} alt={title}></img> 
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}