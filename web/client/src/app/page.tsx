// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
      <main>
          <div className={"container-fluid"}>
              <div className={'row'}>
                  <div className={'col-6 mt-5 pt-1'}>
                      <p className={'mt-5 fw-medium'}>EMPOWERING FARMERS WITH CUTTING-EDGE AI TECHNOLOGY</p>
                      <p className={'display-6 fw-lighter'}>AI-POWERED</p>
                      <h2 className={'display-6 fw-bold'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AGRICULTURE AT<br/>
                          YOUR FINGER TIPS</h2>
                      <p className={'fw-normal'}>
                          Introducing WeedDetect: The cutting-edge AI web app revolutionizing weed detection! Say goodbye to manual labor and guesswork in identifying unwanted plants plaguing your crops. Our hero, WeedDetect, employs state-of-the-art artificial intelligence algorithms to swiftly pinpoint and classify various weed species with unparalleled accuracy.
                          <br/>
                          <br/>
                          Gone are the days of tedious manual inspection; simply upload an image of your field, and WeedDetect goes to work, swiftly analyzing and identifying any pesky intruders. Whether it's broadleaf, grassy, or sedges, WeedDetect has got you covered, empowering farmers and agricultural professionals to take swift, targeted action against invasive plants.
                          <br/>
                          <br/>
                          With its user-friendly interface and lightning-fast processing speed, WeedDetect is the ultimate ally in maintaining crop health and maximizing yields. Embrace the future of precision agriculture with WeedDetect, your indispensable partner in weed management.
                      </p>
                      <div className={'row justify-content-center'}>
                          <a className={'btn btn-lg btn-outline-dark w-50 rounded-5 display-inline'} href={'try-weed-detector'}>Try WeeD DetecT</a>
                          <p className={''}><i className="bi bi-arrow-up-right-circle"></i></p>
                      </div>
                  </div>
                  <div className={'col-6'}>
                      <img className={'img-fluid vh-100 p-2 w-100'} src={'/images/Rectangle 1.png'}/>
                  </div>
              </div>
          </div>
      </main>
  );
}
