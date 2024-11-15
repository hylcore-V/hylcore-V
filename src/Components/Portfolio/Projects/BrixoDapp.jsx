import React from "react";
import { useEffect, useRef } from "react";
import TableOfContents from '../../../Utils/TableOfContents'; 
function BrixoDapp() {
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <div ref={contentRef}>
        <TableOfContents content={contentRef} />
      <div className="project-detail-header">
        <h1 className="dot-ttl">
          Brixo Dapp
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <img
          src="/assets/brixo-dapp.webp"
          alt="Acria network"
          className="project-detail-fv"
        />
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.webp" alt="website" />
            <a className="doc-link" href="https://app.brixo.xyz/">
              Website
            </a>
          </div>
          <div className="project-link">
            <img src="/assets/icons/github.webp" alt="github" />
            <span className="private-link">Private</span>
              
          </div>
        </div>
        <p className="project-ttl-comment">
          A decentralized application that allows users to swap and bridge
          assets across various blockchain networks, enhancing liquidity and
          interoperability.
        </p>
        <div className="project-tag-grp tag-grp">
          <span className="blockchain-tag blog-tag">Blockchain</span>
          <span className="frontend-tag blog-tag">Typescript</span>
          <span className="eth-tag blog-tag">Swap</span>
          <span className="rust-tag blog-tag">Bridge</span>
          <span className="blockchain-tag blog-tag">li.fi SDK</span>
        </div>
      </div>

      <div className="project-detail-description">
        <div>
          <h2 className="hover-dot">
            Project Overview
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Brixo DApp is a cutting-edge decentralized application designed to
            enhance interoperability and liquidity across various blockchain
            networks. Hosted at app.brixo.xyz, this platform allows users to
            effortlessly swap and bridge assets between multiple chains,
            leveraging smart contracts to ensure secure and transparent
            transactions.
          </p>
        </div>

        <div>
          <h2 className="hover-dot">
            Technology Stack
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <div className="project-image brixo-sub-image-pan">
            <img
              src="/assets/brixo1.webp"
              alt="brixo dapp"
              className="brixo-sub-image"
              style={{ width: "40vw" }}
            />
            <img
              src="/assets/brixo3.webp"
              alt="brixo dapp"
              className="brixo-sub-image"
              style={{ width: "40vw" }}
            />
            <img
              src="/assets/brixo2.webp"
              alt="brixo dapp"
              className="brixo-sub-image"
              style={{ width: "40vw" }}
            />
          </div>
          <ul>
            <li>
              <strong>Li.Fi SDK:</strong> Utilized this advanced SDK to
              integrate robust bridging and swapping functionalities that
              connect 31 different blockchains, including Ethereum, Solana,
              Binance, Arbitrum, and Base.
            </li>
            <li>
              <strong>Next.js: </strong> Leveraged Next.js for its server-side
              rendering capabilities to enhance SEO and improve user experience
              by delivering a fast, scalable, and responsive front-end for the
              decentralized application.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="hover-dot">
            Key Contributions:
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <ul>
            <li>
              <strong>Integration of Li.Fi SDK:</strong> I spearheaded the
              integration of the Li.Fi SDK into our Next.js-based application,
              enabling seamless cross-chain transactions directly within the
              user interface. This included setting up and managing the SDK
              configurations to ensure compatibility and optimal performance
              across all supported blockchains.
              <div className="project-link">
                <img src="/assets/icons/website.webp" alt="website" />
                <a className="doc-link" href="https://docs.li.fi/">
                  Li.Fi SDK Official Doc
                </a>
              </div>
              <div className="project-link">
                <img src="/assets/icons/website.webp" alt="website" />
                <a className="doc-link" href="https://playground.li.fi/">
                  Li.Fi SDK Widget Paradigm
                </a>
              </div>
            </li>
            <li>
              <strong>Development of Swap and Bridge Features:</strong>{" "}
              Implemented and fine-tuned the swap and bridge functionalities,
              allowing users to efficiently move and exchange assets across a
              wide network of blockchains. My focus was on ensuring these
              features not only met functional requirements but also provided
              the best possible rates and reduced transaction fees.{" "}
            </li>
            <li>
              <strong>UI/UX Implementation: </strong> Developed a clean and
              intuitive user interface that simplifies the complexities of
              cross-chain transactions. Incorporated feedback mechanisms and
              real-time updates to enhance user engagement and trust.{" "}
            </li>
            <li>
              <strong>Performance Optimization: </strong> Constantly tested and
              optimized the DApp to handle high transaction volumes and
              potential network congestions, ensuring a smooth user experience
              even during peak usage times.{" "}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="hover-dot">
            Outcome:
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The project successfully launched with features that support high
            liquidity and interoperability across multiple blockchains, driving
            better user adoption and positioning Brixo as a competitive player
            in the decentralized finance space.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BrixoDapp;
