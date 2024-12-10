import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioStyle.css";

function Polkadot() {
  useEffect(() => {
    document.title = "Portfolio | Polkadot";
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
          onClick={() => toDetailPage("/portfolio/wagerr-smart-contract")}
        >
          <img
            src="/assets/wagerr.webp"
            className="portfolio-fv"
            alt="Wagerr Smart Contract"
          />
          <div className="project-overview-sub">
            <h2>Wagerr Smart Contract</h2>
            <p>
            Wagerr smart contract written in Ink, a Rust-based smart contract language for the Polkadot ecosystem
            </p>
            <div className="project-overview-tag-grp">
  <span className="polkadot-tag blog-tag">Polkadot</span>
          <span className="blog-tag">Dapp</span>
          <span className="blog-tag">Ink</span>
   </div>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/acria-scan-explorer")}
        >
          <img
            src="/assets/acria.webp"
            className="portfolio-fv"
            alt="AcriaScan Explorer"
          />
          <div className="project-overview-sub">
            <h2>AcriaScan Explorer</h2>
            <p>
              Real-time multi-chain Explorer for Polkadot, Kusama, Rococo
              networks.
            </p>
            <div className="project-overview-tag-grp">
            <span className="blockchain-tag blog-tag">Blockchain</span>
            <span className="polkadot-tag blog-tag">Polkadot</span>
            <span className="frontend-tag blog-tag">Typescript</span>
          </div>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/paralink-network")}
        >
          <img
            src="/assets/paralink.webp"
            className="portfolio-fv"
            alt="paralink"
          />
          <div className="project-overview-sub">
            <h2>Paralink Network</h2>
            <p>
              This project contains Substrate based runtime for Paralink
              Network.
            </p>
            <div className="project-overview-tag-grp">
        <span className="substrate-tag blog-tag">substrate</span>
          <span className="polkadot-tag blog-tag">polkadot</span>
          <span className="blog-tag">oracle</span>
   </div>
          </div>
        </div>

        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/chainx")}
        >
          <video className="portfolio-fv" loop autoPlay muted>
            <source src="/assets/chainx.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="project-overview-sub">
            <h2>ChainX</h2>
            <p>
              Bitcoin's layer2 smart contract network has already supported WASM
              and EVM, and is supporting MoveVM.
            </p>
            <div className="project-overview-tag-grp">
                   <span className="substrate-tag blog-tag">substrate</span>
          <span className="blog-tag">Layer2</span>
             <span className="blog-tag">Move</span>
 <span className="blog-tag">Multichain</span>
          </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Polkadot;
