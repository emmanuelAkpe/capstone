import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import Header from "./components/header/header";
import Gain from "./components/gain/Gain";
import { WhyDzoma } from "./components/whyDzoma/WhyDzoma";
import Download from "./components/download/download";
import Testimony from "./components/testimonials/Testimony";
function App() {
  return (
    <div className="App">
      <h1 className="bg-red-500"></h1>
      <Navbar />
      <Header />
      <Gain />
      <WhyDzoma />
      <Download />
      <Testimony />
    </div>
  );
}

export default App;
