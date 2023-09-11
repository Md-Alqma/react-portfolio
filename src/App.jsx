import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
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
      <ReactFullpage
        scrollingSpeed={1000}
        navigation
        navigationPosition="left"
        navigationTooltips={["Home", "About", "Skills", "Portfolio", "Contact"]}
        showActiveTooltip
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Home sectionStyle={SectionStyle} />
              {/* <button onClick={() => fullp ageApi.moveSectionDown()}>
                  Click me to move down
                </button> */}
              <About sectionStyle={SectionStyle} />
              <Skills sectionStyle={SectionStyle} />
              <Portfolio sectionStyle={SectionStyle} />
              <Contact sectionStyle={SectionStyle} />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default App;
