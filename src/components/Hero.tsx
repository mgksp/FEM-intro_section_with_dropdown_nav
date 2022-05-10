import clientAudiophile from "../images/client-audiophile.svg";
import clientDatabiz from "../images/client-databiz.svg";
import clientMaker from "../images/client-maker.svg";
import clientMeet from "../images/client-meet.svg";

import heroMobile from "../images/image-hero-mobile.png";
import heroDesktop from "../images/image-hero-desktop.png";

export default function Hero() {
  return (
    <main className="md:grid grid-cols-2 max-w-6xl mx-auto">
      <img className="md:hidden" src={heroMobile} alt="" />
      <img
        className="hidden md:block col-start-2 pl-24"
        src={heroDesktop}
        alt=""
      />
      <div className="px-3 py-12 text-center md:text-left row-start-1 md:grid grid-rows-heroDescLayout items-center md:p-0 md:pl-8">
        <div className="">
          <h1 className="font-bold text-4xl -tracking-[0.5px] mb-6 text-almostBlack md:text-[5rem] md:leading-[1em] md:mb-16">
            Make <br className="hidden md:block" /> remote work
          </h1>
          <p className="font-medium text-mediumGray text-base mb-6 md:mb-14 md:max-w-[42ch] md:text-lg">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="text-white bg-almostBlack rounded-2xl border-1 border-almostBlack py-3 px-6 font-bold mb-6 md:px-8 md:py-4 md:text-lg hover:bg-almostWhite hover:text-almostBlack transition-colors duration-200 ease-in">
            Learn more
          </button>
        </div>
        <div className="flex items-center justify-between md:justify-start">
          <img
            className="w-1/5 max-h-6 object-contain"
            src={clientDatabiz}
            alt="client databiz"
          />
          <img
            className="w-1/5 max-h-6 object-contain"
            src={clientAudiophile}
            alt="client audiophile"
          />
          <img
            className="w-1/5 max-h-6 object-contain"
            src={clientMeet}
            alt="client meet"
          />
          <img
            className="w-1/5 max-h-6 object-contain"
            src={clientMaker}
            alt="client maker"
          />
        </div>
      </div>
    </main>
  );
}
