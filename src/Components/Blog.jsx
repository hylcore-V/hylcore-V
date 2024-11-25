import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./Components.css";
import { Rings } from "react-loader-spinner";
import Evm from "./Blogs/EvmVs";
const Blogindex = React.lazy(() => import("./Blogs/Blogindex"));
const Reactseo = React.lazy(() => import("./Blogs/Reactseo"));
const SubstrateAndPolkadot = React.lazy(() =>
  import("./Blogs/SubstrateAndPolkadot")
);
const LayerTwo = React.lazy(() => import("./Blogs/LayerTwo"));
const Bridge = React.lazy(() => import("./Blogs/Bridge"));
const ZkRollup = React.lazy(() => import("./Blogs/ZkRollup"));
const AiBlockchain = React.lazy(() => import("./Blogs/AiBlockchain"));
const RustBlog = React.lazy(() => import("./Blogs/RustBlog"));
const TradingBotBlog = React.lazy(() => import("./Blogs/TradingBotBlog"));






function Blog() {
  const [state, setstate] = useState("block");

  useEffect(() => {
    document.title = "Hylcore | Blog";
    document.getElementsByTagName("META")[3].content =
      "Blogs are good way to share knowledge among people";

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setstate("none");
      } else {
        setstate("block");
      }
    });

    if (window.innerWidth <= 600) {
      setstate("none");
    }
  }, []);

  function myfun() {
    if (state === "block") {
      setstate("none");
    } else {
      setstate("block");
    }
  }

  function myfun1() {
    if (window.innerWidth <= 600) {
      setstate("none");
    }
  }
  return (
    <div>
      <div style={{ display: state }} className="blogsidebar">
      <h6> · October  </h6>
      <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
          className="bloglink real-bloglink"
          to="rust"
        >
         <span>October 20, 2024 - </span> Rust Programming Language
        </NavLink>
        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
          className="bloglink real-bloglink"
          to="trading-bot"
        >
         <span>October 15, 2024 - </span> Trading Bot Development
        </NavLink>
      <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
          className="bloglink real-bloglink"
          to="ai-and-blockchain"
        >
         <span>October 9, 2024 - </span> Blockchain & AI
        </NavLink>
        <h6> · September  </h6>
        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
          className="bloglink real-bloglink"
          to="evm"
        >
          <span>September 16, 2024 - </span> Ethereum Virtual Machine (EVM)
        </NavLink>
        <h6> · August  </h6>
        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
          className="bloglink real-bloglink"
          to="bridge"
        >
          <span>August 24, 2024 - </span> The Role of Bridges in  Networks
        </NavLink>
        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
          className="bloglink real-bloglink"
          to="zk-rollup"
        >
          <span>August 20, 2024 - </span> ZK-Rollup
        </NavLink>
        <h6> · July  </h6>

        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
          className="bloglink real-bloglink"
          to="layer-two"
        >
         <span>July 4, 2024 - </span> What Is Layer 2?
        </NavLink>
        <h6> · June  </h6>
        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
          className="bloglink real-bloglink"
          to="substrate-and-polkadot"
        >
         <span>June 17, 2024 - </span> Substrate & Polkadot
        </NavLink>
        <h6> · April  </h6>

        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
          className="bloglink real-bloglink"
          to="react-seo"
        >
          <span>April 20, 2024 - </span> React SEO
        </NavLink>
       
      
      
       
       
        
      </div>

      <div className="blogsroutes">
        <Routes>
          <Route
            path="react-seo"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <Reactseo />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="substrate-and-polkadot"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <SubstrateAndPolkadot />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="layer-two"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <LayerTwo />
              </React.Suspense>
            }
          ></Route>
          <Route
            index
            element={
              <React.Suspense fallback={<>...</>}>
                <Blogindex />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="bridge"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <Bridge />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="evm"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <Evm />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="zk-rollup"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <ZkRollup />
              </React.Suspense>
            }
          ></Route>
        
        <Route
            path="ai-and-blockchain"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <AiBlockchain />
              </React.Suspense>
            }
          ></Route>
           <Route
            path="rust"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <RustBlog />
              </React.Suspense>
            }
          ></Route>
          
          <Route
            path="trading-bot"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <TradingBotBlog />
              </React.Suspense>
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Blog;
