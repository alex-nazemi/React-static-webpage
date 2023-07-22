import "../index.css"


export default function Header({headerImage}) {
  return (
    <header className="header">
      <img src={headerImage} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
}
