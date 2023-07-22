import Concept from "./Concept";

export default function Concepts({concepts}) {
    return (
        <div id="concepts">
            {concepts.map((concept) => <Concept title = {concept.title} image = {concept.image} description = {concept.description} />)}
        </div>
    );
}