import { Header, Hero } from "./components";

function App() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;

const Footer = () => {
  return (
    <footer className="text-xs text-center w-full py-1 text-mediumGray absolute bottom-0 left-0">
      Challenge by&nbsp;
      <a
        className="text-sm font-bold text-almostBlack"
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noreferrer"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by&nbsp;
      <a
        className="text-sm font-bold text-almostBlack"
        href="https://www.github.com/mgksp"
        rel="noreferrer"
        target="_blank"
      >
        Prabu
      </a>
      .
    </footer>
  );
};
