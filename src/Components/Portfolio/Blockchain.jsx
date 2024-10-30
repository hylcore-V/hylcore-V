import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioStyle.css";

function Blockchain() {
  useEffect(() => {
    document.title = "Portfolio | Block Explorer";
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
          onClick={() => toDetailPage("/portfolio/drips-network-contract")}
        >
          <video className="portfolio-fv" loop autoPlay muted>
            <source src="/assets/drips.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="project-overview-sub">
            <h2>Drips Network Contract</h2>
            <p>💧 Drips Protocol Smart Contracts</p>
            <div className="project-overview-tag-grp">
        <span className="eth-tag blog-tag">EVM</span>
          <span className="blog-tag">Smart Contract</span>
          <span className="blockchain-tag blog-tag">Blockchain</span>
          <span className="blog-tag">Funding</span>
          </div>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/gemforge-command-line-tool")}
        >
          <img
            src="/assets/gemforge.webp"
            className="portfolio-fv"
            alt="Gemforge command line tool"
          />
          <div className="project-overview-sub">
            <h2>Gemforge Command Line Tool</h2>
            <p>
            Command-line tool for building, deploying and upgrading Diamond Standard contracts on EVM chains.
            </p>
            <div className="project-overview-tag-grp">
                     <span className="eth-tag blog-tag">Solidity</span>
          <span className="eth-tag blog-tag">EVM</span>
          <span className="blog-tag">Diamond Standard</span>
          <span className="blog-tag">Eip-2535</span>
          </div>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/erc-20-contract")}
        >
          <img
            src="/assets/erc20contract.webp"
            className="portfolio-fv"
            alt="ERC-20 Contract"
          />
          <div className="project-overview-sub">
            <h2>ERC-20 Contract</h2>
            <p>
            High level implementation of the ERC-20 tokens contract
            </p>
            <div className="project-overview-tag-grp">
            <span className="eth-tag blog-tag">Solidity</span>
          <span className="eth-tag blog-tag">ERC-20</span>
          <span className="eth-tag blog-tag">Ethereum</span>
          <span className="blog-tag">Smart Contracts</span>
          </div>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/layer-swap")}
        >
          <img
            src="/assets/layer swap.webp"
            className="portfolio-fv"
            alt="layer swap atomice bridge"
          />
          <div className="project-overview-sub">
            <h2>Layer Swap Atomic Bridge</h2>
            <p>
            Layerswap V8 Atomic Bridging Protocol
            </p>
            <div className="project-overview-tag-grp">
               <span className="bitcoin-tag blog-tag">Bitcoin</span>
          <span className="eth-tag blog-tag">EVM</span>
          <span className="blog-tag">Solana</span>
          <span className="blog-tag">Ton</span>
   </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blockchain;
