import React from 'react'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Travel Agency</title>
        <meta property="og:title" content="Travel Agency" />
      </Helmet>
      <div className="landing-page-top-container">
        <nav data-role="Header" className="landing-page-navbar">
          <h1>Travel</h1>
          <div className="landing-page-right-side">
            <a href="#main-section" className="landing-page-link">
              <div className="landing-page-links-container">
                <div className="landing-page-container1"></div>
              </div>
            </a>
            <a
              href="https://www.holidify.com/country/india/places-to-visit.html"
              target="_blank"
              rel="noreferrer noopener"
              className="landing-page-link01"
            >
              <SolidButton
                button="Explore places"
                className="landing-page-component"
              ></SolidButton>
            </a>
          </div>
          <div
            data-role="BurgerMenu"
            className="landing-page-burger-menu"
          ></div>
          <div data-role="MobileMenu" className="landing-page-mobile-menu">
            <div className="landing-page-nav">
              <div className="landing-page-top">
                <h1>Travel</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="landing-page-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="landing-page-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="landing-page-right-side1">
                <div className="landing-page-links-container1">
                  <span className="landing-page-text">Home</span>
                  <span className="landing-page-text01">About</span>
                  <span className="landing-page-text02">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="landing-page-link02">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="landing-page-follow-container">
              <span className="landing-page-text04">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="landing-page-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link03"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="landing-page-icon02"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link04"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="landing-page-icon04"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link05"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="landing-page-icon06"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="landing-page-hero">
          <div className="landing-page-content-container">
            <h1 className="Heading landing-page-text05">Book an exclusive</h1>
            <h2 className="Subheading landing-page-subheading">
              home for your personal travel
            </h2>
            <span className="landing-page-text06">
              <span>
                Each property is hand-picked,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>personally visited and cannot be found elsewhere.</span>
            </span>
          </div>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <h1>Most famous places</h1>
        <span className="landing-page-text11">Recommended</span>
        <div className="landing-page-cards-container">
          <a
            href="https://www.holidify.com/places/manali/"
            target="_blank"
            rel="noreferrer noopener"
            className="landing-page-link06"
          >
            <PlaceCard
              city="Manali"
              image="https://www.tripsavvy.com/thmb/ZDRQXV-PiFDTFZu4x22mZkYuw9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-930881934-5ae56fe48023b90036464e72.jpg"
              description="Manali is a  town in Himachal Pradesh, India, known for its cool climate, snow-capped mountains, and lush forests"
              className="landing-page-component2"
            ></PlaceCard>
          </a>
          <a
            href="https://www.holidify.com/places/jodhpur/"
            target="_blank"
            rel="noreferrer noopener"
            className="landing-page-link07"
          >
            <PlaceCard
              city="Jodhpur"
              image="https://static.toiimg.com/thumb/msid-80643897,width-748,height-499,resizemode=4,imgsize-1101324/.jpg"
              description="Jodhpur, known as the “Blue City”, is a historic city in Rajasthan, India, famous for its palaces, forts, and temples"
              className="landing-page-component3"
            ></PlaceCard>
          </a>
          <a
            href="https://www.holidify.com/places/mumbai/"
            target="_blank"
            rel="noreferrer noopener"
            className="landing-page-link08"
          >
            <PlaceCard
              city="Mumbai"
              image="https://c1.wallpaperflare.com/preview/118/656/973/mumbai-gateway-to-india-india-ship.jpg"
              description="Mumbai is India’s financial hub, known for its bustling lifestyle and home to Bollywood"
              className="landing-page-component4"
            ></PlaceCard>
          </a>
          <a
            href="https://www.holidify.com/state/kerala/"
            target="_blank"
            rel="noreferrer noopener"
            className="landing-page-link09"
          >
            <PlaceCard
              city="Kerela"
              image="https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=pYHem1q8SIdCC7t7pv3s6QM1ZrmU3nkCoSaEQMg8vqg="
              description="Kerala is a state in India, renowned for its scenic landscapes, rich culture, and diverse wildlife"
              className="landing-page-component5"
            ></PlaceCard>
          </a>
          <a
            href="https://www.holidify.com/state/sikkim/"
            target="_blank"
            rel="noreferrer noopener"
            className="landing-page-link10"
          >
            <PlaceCard
              city="Sikkim"
              image="https://www.bharatbooking.com/admin/webroot/img/uploads/blog/1581398977_415344-Lachung-City-In-between-the-Mountain-Ranges.jpg"
              description="Sikkim is a biodiverse, landlocked state in northeastern India, home to Kangchenjunga, the third highest peak on Earth"
              className="landing-page-component6"
            ></PlaceCard>
          </a>
          <a
            href="https://www.holidify.com/places/mathura/sightseeing-and-things-to-do.html"
            target="_blank"
            rel="noreferrer noopener"
            className="landing-page-link11"
          >
            <PlaceCard
              city="Mathura"
              image="https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/cover-image-of-Mathura_30th-nov.jpg"
              description="Mathura, located in Uttar Pradesh, India, is a city of great religious significance, being the birthplace of Lord Krishna"
              className="landing-page-component7"
            ></PlaceCard>
          </a>
        </div>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-menu">
          <h1>Travel</h1>
          <div className="landing-page-follow-container1">
            <span className="landing-page-text12">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="landing-page-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link12"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="landing-page-icon08"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link13"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="landing-page-icon10"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link14"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="landing-page-icon12"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
