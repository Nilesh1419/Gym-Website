//rafce- to create automatic function
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero";
import Join from "./Components/Join/Join";
import Plans from "./Components/Plans/plans";
import Programs from "./Components/Programs/programs";
import Reasons from "./Components/Reasons/reasons";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <span style={{ color: "white" }}>
        {" "}
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
      </span>
    </div>
  );
}

export default App;
