import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioStyle.css";

function Defi() {
  useEffect(() => {
    document.title = "Portfolio | Defi";

    document.getElementsByTagName("META")[3].content =
      "These projects showcase my ability in Decentralized Finance";

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
          onClick={() => toDetailPage("/portfolio/dedust")}
        >
          <img
            src="/assets/dedust.png"
            className="portfolio-fv"
            alt="icon generator"
          />
          
          <div className="project-overview-sub">
            <h2>Dedust Defi</h2>
            <p>
            A DeFi platform built on the Ton blockchain, offering seamless token swaps, staking, liquidity pooling, and portfolio management with a focus on security, scalability, and user experience.
            </p>
            <div className="project-overview-tag-grp">
          <span className="frontend-tag blog-tag">Next.JS</span>
          <span className="polkadot-tag blog-tag">Ton SDK</span>
          <span className="eth-tag blog-tag">Solidity</span>
   </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Defi;
