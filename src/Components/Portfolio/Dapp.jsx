import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioStyle.css";

function Substrate() {
  useEffect(() => {
    document.title = "Portfolio | Substrate";
    document.getElementsByTagName("META")[3].content =
      "React is a component based Javascript library for building user interfaces.";

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
          onClick={() => toDetailPage("/portfolio/brixo-dapp")}
        >
          <img
            src="/assets/brixo-dapp.webp"
            className="portfolio-fv"
            alt="Brixo Dapp"
          />
          <div className="project-overview-sub">
            <h2>Brixo Dapp</h2>
            <p>
            A decentralized application that allows users to swap and bridge assets across various blockchain networks, enhancing liquidity and interoperability.
            </p>
            <div className="project-overview-tag-grp">
                  <span className="eth-tag blog-tag">Swap</span>
          <span className="rust-tag blog-tag">Bridge</span>
          <span className="blockchain-tag blog-tag">li.fi SDK</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Substrate;
