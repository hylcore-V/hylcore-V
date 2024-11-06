import { useEffect } from "react";
import "./Components.css";
import TypewriterEffect from "../Utils/TypewriterEffect.jsx";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.title = "Hylcore | Home";
    document.getElementsByTagName("META")[3].content =
      "I am a frontend | Blockchain Developer";
  }, []);

  const phrases = [
    "Blockchain Developer.",
    "Frontend Developer.",
    "Crypto Enthusiaster.",
  ];

  return (
    <div className="about-pan">
      <div className="about-main">
        <h1>
          🌟{" "}
          <span className="gradient-text home-ttl">
            {" "}
            Shaping the Future, <br /> One Line of Code at a Time
          </span>
        </h1>
        <p>
          I’m{" "}
          <strong style={{ fontSize: "24px", color: "var(--black)" }}>
           {"<Hylcore />"}{" "}
          </strong>
          with a passion for precision, constantly pushing the limits of
          Blockchain Technology.
        </p>
        <TypewriterEffect
          phrases={phrases}
          prefix="Hi, I am a "
          speed={100}
          delay={800}
        />
        <p>
          <span style={{ fontSize: "20px", color: "var(--black)" }}>
            <img src="./assets/rust.webp" className="about-logo" alt="rust" />{" "}
            Rust
          </span>{" "}
        
          I'm dedicated to developing secure, scalable blockchain solutions
          using Rust, while crafting dynamic user experiences with
          <span style={{ fontSize: "20px", color: "var(--black)" }}>
            {" "}
            <img
              src="./assets/react.webp"
              className="about-logo"
              alt="React logo"
            />{" "}
            React.
          </span> 
        </p>
        <p>
          This site is your portal to my journey—explore insights on Blockchain
          and AI, dive into reviews of inspiring books, films, and articles, and
          join me as we shape the future of technology, one project at a time.
          Step in and discover what’s next!
        </p>
        <div className="home-grp home-grp-footer">
          <div>
            <h4>© 2024 • Powered by Hylcore</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
