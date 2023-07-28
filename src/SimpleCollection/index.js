// import local components
import Block from "./components/Block";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import ImageBand from "./components/ImageBand";
import About from "./components/About";
import BottomSection from "./components/BottomSection";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
// Import the express library
import * as expressModule from "@uniwebcms/express"; // See README for more details: https://github.com/uniwebcms/express/blob/main/README.md
// import CSS
import "./index.css";

export default {
  ...expressModule,
  Block,
  Header,
  Introduction,
  ImageBand,
  About,
  BottomSection,
  Articles,
  Footer,
};
