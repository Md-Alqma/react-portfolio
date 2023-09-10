import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Home from "./Home";
import TestNavbar from "./TestNavbar";
function App() {
  const SectionStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001",
  };

  return (
    <>
      <Navbar />
      <ReactFullpage
        scrollingSpeed={1000}
        navigation
        navigationPosition="left"
        navigationTooltips={["Home", "About", "Skills", "Portfolio", "Contact"]}
        showActiveTooltip
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {/* <div className="section 1 fp-auto-height">
                <Navbar />
              </div> */}
              <div style={SectionStyle} className="section 1">
                <Home />
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div style={SectionStyle} className="section 2">
                <About />
              </div>
              <div style={SectionStyle} className="section 3">
                <Skills />
              </div>
              <div style={SectionStyle} className="section 4">
                <Portfolio />
              </div>
              <div style={SectionStyle} className="section 5">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default App;
