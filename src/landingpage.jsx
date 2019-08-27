import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

import './styling/App.css';
import './styling/header.css';

import scrollToComponent from 'react-scroll-to-component';
import CountUp from 'react-countup';

import { ParallaxBanner } from 'react-scroll-parallax';
import { SocialIcon } from 'react-social-icons';

import Section from './components/section';
import Footer from './components/footer';

import Logo from './img/Omicle.png';
import FooterCamo from './img/camoFooter.png';
import phoneDemo from './img/phone.png';

import PhoneApp from './icons/app.png';
import Saving from './icons/saving.png';
import House from './icons/house.png';
import GHG from './icons/ghg.png';
import Scientist from './icons/scientist.png';
import Scheduling from './icons/Scheduling.png';

// IMPORT OF PARALLAX
import PARA1 from './img/parallax/1.png';
import PARA2 from './img/parallax/2.png';
import PARA3 from './img/parallax/3.png';
import PARA4 from './img/parallax/4.png';
import PARA5 from './img/parallax/5.png';
import PARA6 from './img/parallax/6.png';
import PARA7 from './img/parallax/7.png';
import PARA8 from './img/parallax/8.png';
import PARA9 from './img/parallax/9.png';
import PARA10 from './img/parallax/10.png';
import PARA11 from './img/parallax/11.png';
import PARA12 from './img/parallax/12.png';

import TRUCK from './img/parallax/truck.png';

class landingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: undefined,
      team: undefined,
      social: undefined,
      scrollTop: true,
    };
  }

  componentDidMount() {
    this.getSponsors();
    this.getTeam();
    this.getSocialMedia();
    landingPage.truckEffect();
    window.addEventListener('scroll', this.listenScrollEvent.bind(this));
  }

  static truckEffect() {
    $(window).on('load resize scroll', function() {
      $('.bg-static').each(function() {
        const windowTop = $(window).scrollTop();
        const elementTop = $(this).offset().top;
        const leftPosition = windowTop - elementTop;
        const realPOS = leftPosition * 3 + 2000;
        $(this)
          .find('.bg-move')
          .css({ left: realPOS });
      });
    });
  }

  listenScrollEvent() {
    if (window.scrollY > 50) {
      this.setState({ scrollTop: false });
    } else {
      this.setState({ scrollTop: true });
    }
  }

  getSponsors() {
    axios
      .get(`${window.location.origin}/assets/partners.json`)
      .then(response => this.setState({ partners: response.data }))
      .catch(error => {
        console.log(error.response);
      });
  }

  getTeam() {
    axios
      .get(`${window.location.origin}/assets/team.json`)
      .then(response => this.setState({ team: response.data }))
      .catch(error => {
        console.log(error.response);
      });
  }

  getSocialMedia() {
    axios
      .get(`${window.location.origin}/assets/social.json`)
      .then(response => this.setState({ social: response.data }))
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {
    const { scrollTop, partners, team, social } = this.state;

    return (
      <div className="App">
        <header className={`header ${scrollTop}`}>
          <img id="logo" className="logo" src={Logo} alt="logo" />
          <div className="burger">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon" />
            </label>
            <ul className="menu">
              <li>
                <p onClick={() => scrollToComponent(this.footerDiv)} aria-hidden="true">
                  Contact us
                </p>
              </li>
              {/* <li><p href='#about'>blog</p></li> */}
            </ul>
          </div>
        </header>
        <div className="page-content">
          <Section className="flex-parent camo" style={{ minHeight: '90vh' }}>
            <div className="headliner">
              <h1 className="heading flex-parent">Optimization is at the heart of what we do.</h1>
            </div>
          </Section>
          <div className="arrow-container">
            <div className="scroll-down" />
          </div>
          <Section className="flex-parent cash-savings" style={{ minHeight: '70vh' }}>
            <div className="half-child center">
              <h1 style={{ maxWidth: '75%' }} className="heading">
                Pilot test at Ekonomikum Uppsala University suggests 2/3 collection time saved.
              </h1>
            </div>
            <div className="half-child">
              <div className="numbers">
                <ul className="flex-parent row">
                  <li>
                    <h3>Route A</h3>
                    <h3>1350 miles</h3>
                  </li>
                  <li>
                    <h3 style={{ color: '#72C396' }}>
                      {' '}
                      <CountUp
                        ref={countUp => {
                          this.myCountUp = countUp;
                        }}
                        duration={3}
                        end={1350}
                      />{' '}
                      $
                    </h3>
                  </li>
                </ul>
                <ul style={{ color: 'gray' }} className="flex-parent row">
                  <li>
                    <h3>Route B</h3>
                    <h3>1820 miles</h3>
                  </li>
                  <li>
                    <h3 className="thin">
                      <CountUp
                        ref={countUp => {
                          this.myCountUp = countUp;
                        }}
                        duration={4}
                        end={2025}
                      />{' '}
                      $
                    </h3>
                  </li>
                </ul>
                <ul style={{ color: 'gray' }} className="flex-parent row">
                  <li>
                    <h3>Route C</h3>
                    <h3>1950 miles</h3>
                  </li>
                  <li>
                    <h3 className="thin">
                      <CountUp
                        ref={countUp => {
                          this.myCountUp = countUp;
                        }}
                        duration={6}
                        end={2345}
                      />{' '}
                      $
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </Section>
          <Section className="flex-parent" style={{ minHeight: '100vh' }}>
            <ParallaxBanner
              className="contain-parallax"
              layers={[
                {
                  image: `${PARA1}`,
                  amount: -0.9,
                },
                {
                  image: `${PARA2}`,
                  amount: -0.9,
                },
                {
                  image: `${PARA3}`,
                  amount: -0.6,
                },
                {
                  image: `${PARA4}`,
                  amount: -0.7,
                },
                {
                  image: `${PARA5}`,
                  amount: -0.4,
                },
                {
                  image: `${PARA6}`,
                  amount: -0.1,
                },
                {
                  image: `${PARA7}`,
                  amount: -0.9,
                },
                {
                  image: `${PARA8}`,
                  amount: -0.5,
                },
                {
                  image: `${PARA9}`,
                  amount: -0.2,
                },
                {
                  image: `${PARA10}`,
                  amount: -0.3,
                },
                {
                  image: `${PARA11}`,
                  amount: -0.4,
                },
                {
                  image: `${PARA12}`,
                  amount: -0.7,
                },
              ]}
              style={{
                height: '100vh',
              }}
            />
            <div className="mobile-container">
              <div className="half-child headliner">
                <h1 className="heading flex-parent">Route optimization at your service.</h1>
              </div>
              <div className="half-child flex-parent">
                <img src={phoneDemo} alt="Demo of the app" className="phone-demo" />
              </div>
            </div>
          </Section>
          <Section className="flex-parent column features" style={{ justifyContent: 'flex-start' }}>
            <h1 className="heading" style={{ padding: '1em' }}>
              Omicle Advantages
            </h1>
            <div className="grid-parent">
              <div className="grid-child feature ">
                <div className="logo-container">
                  <img alt="app-logo" src={PhoneApp} />
                </div>
                <div>
                  <h3 className="feature-title">App-based solution</h3>
                </div>
              </div>
              <div className="grid-child feature">
                <div className="logo-container">
                  <img alt="saving-logo" src={Saving} />
                </div>
                <div>
                  <h3 className="feature-title">35% operational savings</h3>
                </div>
              </div>
              <div className="grid-child feature">
                <div className="logo-container">
                  <img alt="household-logo" src={House} />
                </div>
                <div>
                  <h3 className="feature-title">Household collection fee reduction </h3>
                </div>
              </div>
              <div className="grid-child feature">
                <div className="logo-container">
                  <img alt="GHG-logo" src={GHG} />
                </div>
                <div>
                  <h3 className="feature-title">Less green house gases</h3>
                </div>
              </div>
              <div className="grid-child feature">
                <div className="logo-container">
                  <img alt="Approved-logo" src={Scientist} />
                </div>
                <div>
                  <h3 className="feature-title">Solid approved by optimisation scientists</h3>
                </div>
              </div>
              <div className="grid-child feature">
                <div className="logo-container">
                  <img alt="Dynamic-scheduling" src={Scheduling} />
                </div>
                <div>
                  <h3 className="feature-title">Dynamic scheduling</h3>
                </div>
              </div>
            </div>
          </Section>
          {partners && (
            <Section
              className="flex-parent column partners"
              style={{ justifyContent: 'flex-start' }}
            >
              <h1 className="heading">Partnerships built on trust</h1>
              <div className="grid-parent">
                {partners.map((partner, i) => {
                  return (
                    <div key={i} className="grid-child sponsor">
                      <div className="img-container">
                        <img alt={partner.name} src={partner.img} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Section>
          )}
          {team && (
            <Section className="flex-parent column team-members" style={{ minHeight: '70vh' }}>
              <div className="section bg-static">
                <div className="bg-move" style={{ backgroundImage: `url(${TRUCK})` }} />
              </div>
              <h1 className="heading">Meet the team</h1>
              <div className="grid-parent">
                {team.map((profile, i) => {
                  return (
                    <div key={i} className="grid-child">
                      <div className="img-container profile-img">
                        <img alt={profile.name} src={profile.img} />
                      </div>
                      <div>
                        <h3 className="team-name">{profile.name}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Section>
          )}
          <Footer
            ref={section => {
              this.footerDiv = section;
            }}
          >
            <div className="information">
              <div className="information-wrapper">
                <address>
                  Klostergatan 10 c/o Base10
                  <br />
                  753 21 Uppsala
                </address>
                <p className="email">hello@omicle.com</p>
                {social && (
                  <div className="social-media">
                    {social.map((soc, i) => {
                      return <SocialIcon key={i} url={soc.src} />;
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="bubbles" style={{ backgroundImage: `url(${FooterCamo})` }} />
          </Footer>
        </div>
      </div>
    );
  }
}

export default landingPage;