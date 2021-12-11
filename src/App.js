import "./App.css";
import Hero from "./components/hero/hero";
import OpeningParagraph from "./components/openingParagraph/openingParagraph";
import NavBar from "./components/navBar/navBar";
import SkincareGallery from "./components/skincareGallery/skincareGallery";
import MakeupGallery from "./components/makeupGallery/makeupGallery";
import Footer from "./components/footer/footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSmile,
  faBolt,
  faKiwiBird,
  faMapMarkedAlt,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faSmile, faBolt, faKiwiBird, faMapMarkedAlt, faGlobeAmericas);
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="AppMargin">
        <Hero></Hero>
        <OpeningParagraph></OpeningParagraph>
      </div>
      <SkincareGallery></SkincareGallery>
      <MakeupGallery></MakeupGallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
