import Header from "./components/Header/Header.js";
import News from "./components/News/News.js";
import Gallery from "./components/Gallery/Gallery.js";
import Info from "./components/Info/Info.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import './index.scss';

function App() {
  return (
    <div >
      <Header/>
      <News/>
      <Gallery/>
      <Info/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
