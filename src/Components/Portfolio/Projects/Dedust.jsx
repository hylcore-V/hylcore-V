import React from "react";
import { useEffect, useRef } from "react";
import TableOfContents from '../../../Utils/TableOfContents'; 
function Dedust() {
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div ref={contentRef}>
        <TableOfContents content={contentRef} />
      <div className="project-detail-header">
        <h1 className="dot-ttl">
          Dedust Defi
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <img
          src="/assets/dedust.png"
          alt="Dedust Defi"
          className="project-detail-fv"
        />
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.webp" alt="website" />
            <a className="doc-link" href="https://dedust.io/">
              Website
            </a>
          </div>
          <div className="project-link">
            <img src="/assets/icons/github.webp" alt="github" />
            <span className="private-link">Private</span>
          </div>
        </div>
        <p className="project-ttl-comment">
        A DeFi platform built on the Ton blockchain, offering seamless token swaps, staking, liquidity pooling, and portfolio management with a focus on security, scalability, and user experience.
        </p>
        <div className="project-tag-grp tag-grp">
        <span className="frontend-tag blog-tag">Next.JS</span>
          <span className="polkadot-tag blog-tag">Ton SDK</span>
          <span className="eth-tag blog-tag">Solidity</span>
        </div>
      </div>

      <div className="project-detail-description">
  <div>
    <h2 className="hover-dot">
      Platform Overview
      <img src="/assets/green-dot.svg" className="hover-dot-image" alt="green dot" />
    </h2>
    <p>
      The Ton blockchain was chosen for its scalability and high throughput, essential for creating a fast and efficient DeFi platform. Despite its advantages, Ton’s unique architecture posed challenges in smart contract development, particularly in handling a high volume of transactions. To address this, I optimized smart contract logic for gas efficiency and ran extensive performance tests, ensuring the platform could manage high-frequency operations without delays.
    </p>
  </div>

  <div>
    <h2 className="hover-dot">
      Smart Contract Development and Security
      <img src="/assets/green-dot.svg" className="hover-dot-image" alt="green dot" />
    </h2>
    <p>
      Developing secure, cost-efficient smart contracts for swapping tokens, staking, and managing liquidity pools was a primary challenge. Vulnerabilities in smart contracts could result in significant financial losses.
    </p>
    <p>
      To resolve this, I implemented comprehensive testing, including unit tests and integration tests, to simulate real-world scenarios and identify potential exploits. The contracts were also optimized for reduced gas fees, ensuring smooth, low-cost transactions for users.
    </p>
    <div className="project-image dedust-img">
      <img src="/assets/dedust1.png" alt="Swap Page" />
    </div>
  </div>

  <div>
    <h2 className="hover-dot">
      Creating a Seamless User Experience
      <img src="/assets/green-dot.svg" className="hover-dot-image" alt="green dot" />
    </h2>
    <p>
      Designing a mobile-first interface that allows users to interact with complex DeFi features like token swaps and staking was a challenge. My goal was to make these operations simple and intuitive for both novice and experienced users.
    </p>
    <p>
      I designed a streamlined UI with clear calls to action, making it easy for users to engage with staking, pooling, and portfolio management features.
    </p>
    <div className="project-image dedust-img">
      <img src="/assets/dedust2.png" alt="Pool Page" />
    </div>
   </div>

  <div>
    <h2 className="hover-dot">
      Cross-Platform Integration
      <img src="/assets/green-dot.svg" className="hover-dot-image" alt="green dot" />
    </h2>
    <p>
      Integrating wallet connectivity and ensuring secure transactions across devices was essential for enabling users to interact with the platform seamlessly. I used Web3.js and Ton SDK for wallet integration, ensuring secure connections and smooth transactions on both desktop and mobile platforms.
    </p>
    <div className="project-image dedust-img">
      <img src="/assets/dedust3.png" alt="Stake Page" />
      <p>The Stake page illustrates how users can easily stake tokens, view current APRs, and monitor the status of their staked assets.</p>
    </div>
  </div>

  <div>
    <h2 className="hover-dot">
      Real-Time Data and Portfolio Management
      <img src="/assets/green-dot.svg" className="hover-dot-image" alt="green dot" />
    </h2>
    <p>
      Displaying real-time data on staking rewards, token balances, and pool investments was crucial to the platform’s success. The challenge was ensuring that data updates frequently without affecting platform performance.
    </p>
    <p>
      I implemented a dynamic data-fetching system that keeps user balances and staking information updated in real-time, ensuring users always have access to the latest data.
    </p>
  </div>

  <div>
    <h2 className="hover-dot">
      Security Measures and Auditing
      <img src="/assets/green-dot.svg" className="hover-dot-image" alt="green dot" />
    </h2>
    <p>
      Given the sensitive nature of DeFi transactions, ensuring robust security was paramount. I implemented multi-signature wallets, secure access control, and audit logging, and performed both internal and external audits to guarantee the safety of user assets.
    </p>
  </div>

  <div>
    <h2 className="hover-dot">
      Scalability and Performance Optimization
      <img src="/assets/green-dot.svg" className="hover-dot-image" alt="green dot" />
    </h2>
    <p>
      Ensuring the platform could handle high transaction volumes, particularly during token swaps or staking events, was crucial. I identified performance bottlenecks during initial testing and resolved them by implementing load balancing, caching mechanisms, and optimizing both the frontend and backend for faster response times.
    </p>
  </div>

  <div>
    <h2 className="hover-dot">
      Deployment and Post-Launch Enhancements
      <img src="/assets/green-dot.svg" className="hover-dot-image" alt="green dot" />
    </h2>
    <p>
      After deploying the platform to the Ton mainnet, I established monitoring systems to track user engagement and system performance. This allowed me to quickly address issues, roll out updates, and continuously improve the platform based on user feedback and real-world usage.
    </p>
  </div>

  <div>
    <h2 className="hover-dot">
      Technologies Used
      <img src="/assets/green-dot.svg" className="hover-dot-image" alt="green dot" />
    </h2>
    <ul>
      <li><strong>Frontend:</strong> Next.js, TypeScript, React</li>
      <li><strong>Blockchain:</strong> Ton Blockchain</li>
      <li><strong>Smart Contracts:</strong> Ton Solidity</li>
      <li><strong>Web3 Integration:</strong> Ton SDK, Web3.js</li>
    </ul>
  </div>
</div>

    </div>
  );
}

export default Dedust;
