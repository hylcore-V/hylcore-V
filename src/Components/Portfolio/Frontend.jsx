import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioStyle.css";

function Whatisreact() {
  useEffect(() => {
    document.title = "Portfolio | Frontend";
    document.getElementsByTagName("META")[3].content =
      "This projects showcase my ability to develop frontend";
    document.documentElement.scrollTop = 0;
  }, []);

  const navigate = useNavigate();

  function toDetailPage(domain) {
    navigate(`${domain}`);
  }
  return (
    <div>
      <div className="projects-grp">
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/subsocial")}
        >
          <video className="portfolio-fv" loop autoPlay muted>
            <source src="/assets/subsocial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="project-overview-sub">
            <h2>Subsocial</h2>
            <p>
              The project is a simplified implementation of Subsocial Web App
            </p>
            <div className="project-overview-tag-grp">
  <span className="blog-tag">Subsocial</span>
          <span className="blog-tag">Next.JS</span>
          <span className="substrate-tag blog-tag">Substrate</span>
   <span className="blog-tag">Social Media</span>
   </div>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() =>
            toDetailPage("/portfolio/health-care-hospital")
          }
        >
          <img
            src="/assets/healthcare.webp"
            className="portfolio-fv"
            alt="health care hospital"
          />
          <div className="project-overview-sub">
            <h2>Health Care Hospital</h2>
            <p>
              This project is based on a Healthcare hospitalsservice in this
              project and the technology is used here is react js.
            </p>
            <div className="project-overview-tag-grp">
<span className="frontend-tag blog-tag">React.JS</span>
          <span className="frontend-tag blog-tag">MUI</span>       
   </div>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/zenlink")}
        >
          <img
            src="/assets/zenlink-overview.webp"
            className="portfolio-fv"
            alt="zenlink"
          />
          <div className="project-overview-sub">
            <h2>Zenlink Protocol Interface</h2>
            <p>An open source interface for the Zenlink protocol</p>
            <div className="project-overview-tag-grp">
  <span className="frontend-tag blog-tag">Typescript</span>
          <span className="blog-tag">Zenlink</span>
          <span className="polkadot-tag blog-tag">Polkadot</span>
          <span className="blog-tag">MonoRepo</span>   </div>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/travel-explorer")}
        >
          <img
            src="/assets/travel explorer.webp"
            className="portfolio-fv"
            alt="explorer Indonesia"
          />
          <div className="project-overview-sub">
            <h2>Travel Explorer</h2>
            <p>
              A single-page landing site designed to provide an engaging and
              informative experience for users interested in traveling to
              Indonesia, Nepal, and Thailand.
            </p>
            <div className="project-overview-tag-grp">
    <span className="frontend-tag blog-tag">React</span>
          <span className="frontend-tag blog-tag">Next.js</span>
          <span className="frontend-tag blog-tag">Typescript</span>
          <span className="blog-tag">Swiper</span>
   </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatisreact;
