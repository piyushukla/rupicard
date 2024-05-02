import React from "react";
import Navbar from "./navbar";
import FeatureContainer from "./featuresContainer";

const HomeScreen = () => {
  return (
    <div>
      <div className="bg-container" style={{}}>
        <video
          src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
          autoPlay
          loop
          muted
          className="bg-video"
        />
        <div className="container-main">
          <Navbar />

          <div className="hero-section1">
            <div>
              <p className="heroSection-heading">
                <strong>NX Wave.</strong> The next-gen credit card for those who
                love rewards.
              </p>
              <p className="reward-txt">
                1% Cashback{" "}
                <svg
                  class="mx-[8px] mb-[2px] inline leading-5"
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                    fill="#000"
                    style={{ mixBlendMode: "darken" }}
                  ></path>
                </svg>
                5x Rewards
                <svg
                  class="mx-[8px] mb-[2px] inline leading-5"
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                    fill="#000"
                    style={{ mixBlendMode: "darken" }}
                  ></path>
                </svg>
                Zero Forex Markup
              </p>
              <div className="phone-container">
                <input placeholder="Enter Phone Number" />
                <button>Apply Now</button>
              </div>
              <div className="agreement-container">
                <input type="checkbox" id="agreement-checkbox" />
                <p>
                  You agree to be contacted by Uni Cards over Call, SMS, Email
                  or WhatsApp to guide you through your application.
                </p>
              </div>
            </div>
            <div>
              <img
                className="img"
                src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
                alt="rupicard"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-container">
        <div className="container-main">
          <div className="section2">
            <p className="featuer-txt">
              Earn 1% assured cashback <span>on your spends. Get</span> 5X
            </p>
            <p className="featuer-txt">
              more value than cashback<span>at the Uni Store. Enjoy</span>{" "}
            </p>
            <p className="featuer-txt">
              <span>round the clock</span> Whatsapp support.{" "}
              <span>And it's</span>
            </p>
            <p className="featuer-txt">
              lifetime free;<span>no joining fee, no annual charges.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-container">
        <div className="container-main">
          <div className="section3">
            <div className="parent-container">
              <p className="section3-txt">
                1% assured cashback on your spends.
                <span style={{ fontWeight: "400", color: "#9EA7AE" }}>
                  The more you spend, the more you earn.
                </span>
              </p>
              <p className="section3-subTxt">
                Not applicable on fuel purchase, rent & wallet transfers, ATM
                withdrawals & international transactions.
              </p>
            </div>
            <div>
              <img
                src="https://www.uni.cards/images/one_percent_cashback.png"
                alt="img3"
                className="img"
              />
            </div>
          </div>
          <div className="section3" style={{ flexDirection: "row-reverse" }}>
            <div className="parent-container">
              <p className="section3-txt">
                5x more value than your cashback,
                <span style={{ fontWeight: "400", color: "#9EA7AE" }}>
                  only at the Uni Store.
                </span>
              </p>
            </div>
            <div>
              <img
                src="https://www.uni.cards/images/five_x_rewards.png"
                alt="img3"
                className="img"
              />
            </div>
          </div>
          <div className="section3">
            <div className="parent-container">
              <p className="section3-txt">
                Zero Forex Markup{" "}
                <span style={{ fontWeight: "400", color: "#9EA7AE" }}>
                  Go international, without any fees.
                </span>
              </p>
            </div>
            <div>
              <img
                src="https://www.uni.cards/images/forex_globe.png"
                alt="img3"
                className="img"
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className="charges-txt">
              Lifetime{" "}
              <span style={{ color: "rgba(90, 214, 196,1)" }}>free.</span> No
              joining fee. No annual charges.
            </p>
          </div>
        </div>
      </div>
      <section style={{ background: "black", position: "relative",display:'flex',justifyContent:'center',alignItems:'center' }}>
        <div className="container-main"s>
          <img
            src="https://www.uni.cards/images/circles.png"
            alt="pattern"
            style={{
              width: "70%",
              height: "auto",
              top: "0",
              left: "0",
              position: "absolute",
            }}
          />
          <div className="instant-container">
            <div
              style={{
                color: "#ffffff",
                flex: "1",
                maxWidth: "500px",
                textAlign: "left",
              }}
            >
              <p className="instant-containerTxt">
                We’ve all heard of instant groceries, now say hello to instant
                credit.
              </p>
              <p
                style={{
                  color: "grey",
                  fontSize: "1.5rem",
                  lineHeight: "2remss",
                }}
              >
                0% hassle, 100% paperless. Get your Uni Card instantly.
              </p>
            </div>
            <img
              src="https://www.uni.cards/images/nx-wave/app_screen_1.webp"
              alt="img_alt"
              className="img"
              style={{ flex: "1" }}
            />
          </div>
          <div className="instant-container">
            <div
              style={{
                color: "#ffffff",
                flex: "1",
                maxWidth: "500px",
                textAlign: "left",
              }}
            >
              <p className="instant-containerTxt">
                With Uni,
                <br />
                you’re always in control.
              </p>
              <p
                style={{
                  color: "grey",
                  fontSize: "1.5rem",
                  lineHeight: "2remss",
                }}
              >
                Set your own payment limits. Choose how and where you spend.
                Lock and unlock your card. All right from the app.
              </p>
            </div>
            <img
              src="https://www.uni.cards/images/nx-wave/app_screen_2.webp"
              alt="img_alt"
              className="img"
              style={{ flex: "1" }}
            />
          </div>
          <FeatureContainer />
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
