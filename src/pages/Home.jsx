import logo from "./../assets/boardLogo.jpg";

export default function Home() {
  return (
    <article className="pico container">
      <center>
        <h2>Lets play a game!</h2>
      </center>
      <img src={logo}></img>
    </article>
  );
}
