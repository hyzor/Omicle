import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

import './styling/App.css';
import './styling/header.css';

import scrollToComponent from 'react-scroll-to-component';
import CountUp from 'react-countup';

import { ParallaxBanner } from 'react-scroll-parallax';
import { SocialIcon } from 'react-social-icons';

// Material UI
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CircularProgress from '@material-ui/core/CircularProgress';

import Email from './external/smtp';

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
      name: '',
      email: '',
      message: '',
      sendingMail: false,
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

  handleFormChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSend = () => {
    const { name, email, message } = this.state;

    this.setState({ sendingMail: true });

    Email.send({
      SecureToken: 'bcf27272-e748-4032-b44c-ee6625c88510',
      To: 'hello@omicle.se',
      From: 'contactform@omicle.se',
      FromName: name,
      ReplyAddress: email,
      Subject: `${name} contacted you via omicle.se`,
      Body: message,
    }).then(msg => {
      console.log(msg);
      this.setState({ name: '', email: '', message: '', sendingMail: false });
    });
  };

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
    const { scrollTop, partners, team, social, name, email, message, sendingMail } = this.state;

    return (
      <div className="App">
        <header className={`header ${scrollTop}`}>
          <img id="logo" className="logo" src={Logo} alt="logo" />
          <div className="burger">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon" />
            </label>
            <ul className="menu-list">
              <li style={{ padding: 0, margin: '24px' }}>
                <Button variant="outlined" onClick={() => scrollToComponent(this.footerDiv)}>
                  Contact us
                </Button>
              </li>
            </ul>
          </div>
        </header>
        <div className="page-content">
          <Section className="flex-parent camo" style={{ minHeight: '90vh' }}>
            <div className="headliner">
              <Typography variant="h3">Optimization is at the heart of what we do.</Typography>
            </div>
          </Section>
          <div className="arrow-container">
            <div className="scroll-down" />
          </div>
          <Section className="flex-parent cash-savings" style={{ minHeight: '70vh' }}>
            <div className="half-child center">
              <Typography variant="h2" style={{ maxWidth: '75%' }}>
                Pilot test at Ekonomikum Uppsala University suggests 2/3 collection time saved.
              </Typography>
            </div>
            <div className="half-child">
              <div className="numbers">
                <ul className="flex-parent row">
                  <li>
                    <Typography variant="h4">Route A</Typography>
                    <Typography variant="h4">1350 miles</Typography>
                  </li>
                  <li>
                    <Typography variant="h4" style={{ color: '#72C396' }}>
                      {' '}
                      <CountUp
                        ref={countUp => {
                          this.myCountUp = countUp;
                        }}
                        duration={3}
                        end={1350}
                      />{' '}
                      $
                    </Typography>
                  </li>
                </ul>
                <ul style={{ color: 'gray', marginTop: '32px' }} className="flex-parent row">
                  <li>
                    <Typography variant="h4">Route B</Typography>
                    <Typography variant="h4">1820 miles</Typography>
                  </li>
                  <li>
                    <Typography variant="h4" className="thin">
                      <CountUp
                        ref={countUp => {
                          this.myCountUp = countUp;
                        }}
                        duration={4}
                        end={2025}
                      />{' '}
                      $
                    </Typography>
                  </li>
                </ul>
                <ul style={{ color: 'gray', marginTop: '32px' }} className="flex-parent row">
                  <li>
                    <Typography variant="h4">Route C</Typography>
                    <Typography variant="h4">1950 miles</Typography>
                  </li>
                  <li>
                    <Typography variant="h4" className="thin">
                      <CountUp
                        ref={countUp => {
                          this.myCountUp = countUp;
                        }}
                        duration={6}
                        end={2345}
                      />{' '}
                      $
                    </Typography>
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
                <Typography variant="h2" style={{ marginLeft: '32px' }}>
                  Route optimization at your service.
                </Typography>
              </div>
              <div className="half-child flex-parent">
                <img src={phoneDemo} alt="Demo of the app" className="phone-demo" />
              </div>
            </div>
          </Section>
          <Section className="flex-parent column features" style={{ justifyContent: 'flex-start' }}>
            <Typography variant="h2" style={{ padding: '1em' }}>
              Omicle advantages
            </Typography>
            <div className="grid-parent">
              <div className="grid-child feature ">
                <div className="logo-container">
                  <img alt="app-logo" src={PhoneApp} />
                </div>
                <div>
                  <Typography variant="h5" className="feature-title">
                    App-based solution
                  </Typography>
                </div>
              </div>
              <div className="grid-child feature">
                <div className="logo-container">
                  <img alt="saving-logo" src={Saving} />
                </div>
                <div>
                  <Typography variant="h5" className="feature-title">
                    35% operational savings
                  </Typography>
                </div>
              </div>
              <div className="grid-child feature">
                <div className="logo-container">
                  <img alt="household-logo" src={House} />
                </div>
                <div>
                  <Typography variant="h5" className="feature-title">
                    Household collection fee reduction{' '}
                  </Typography>
                </div>
              </div>
              <div className="grid-child feature">
                <div className="logo-container">
                  <img alt="GHG-logo" src={GHG} />
                </div>
                <div>
                  <Typography variant="h5" className="feature-title">
                    Less green house gases
                  </Typography>
                </div>
              </div>
              <div className="grid-child feature">
                <div className="logo-container">
                  <img alt="Approved-logo" src={Scientist} />
                </div>
                <div>
                  <Typography variant="h5" className="feature-title">
                    Solid approved by optimisation scientists
                  </Typography>
                </div>
              </div>
              <div className="grid-child feature">
                <div className="logo-container">
                  <img alt="Dynamic-scheduling" src={Scheduling} />
                </div>
                <div>
                  <Typography variant="h5" className="feature-title">
                    Dynamic scheduling
                  </Typography>
                </div>
              </div>
            </div>
          </Section>
          {partners && (
            <Section
              className="flex-parent column partners"
              style={{ justifyContent: 'flex-start' }}
            >
              <Typography variant="h2">Partnerships built on trust</Typography>
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
              <Typography variant="h2" style={{ marginBottom: '64px' }}>
                Meet the team
              </Typography>
              <div className="grid-parent">
                {team.map((profile, i) => {
                  return (
                    <Card key={i} className="grid-child team" elevation={4}>
                      <CardActionArea
                        style={{ height: '100%' }}
                        onClick={() => {
                          if (profile.www) {
                            window.location = profile.www;
                          }
                        }}
                      >
                        <CardContent>
                          <div className="img-container profile-img">
                            <img alt={profile.name} src={profile.img} />
                          </div>
                          <Typography
                            variant="h6"
                            className="team-name"
                            style={{ marginTop: '16px' }}
                          >
                            {profile.name}
                          </Typography>
                          <Typography variant="subtitle1">{profile.title}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  );
                })}
              </div>
            </Section>
          )}
          <Section className="flex-parent column" style={{ minHeight: '70vh' }}>
            <Typography variant="h2" style={{ marginBottom: '64px' }}>
              Contact us
            </Typography>
            <Box display="flex" flexDirection="column" style={{ width: '360px' }}>
              <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={name}
                  onChange={this.handleFormChange('name')}
                />
              </FormControl>
              <FormControl variant="outlined" style={{ marginTop: '16px' }}>
                <InputLabel htmlFor="component-outlined">Email</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={email}
                  onChange={this.handleFormChange('email')}
                />
              </FormControl>
              <FormControl variant="outlined" style={{ marginTop: '16px' }}>
                <InputLabel htmlFor="component-outlined">Message</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={message}
                  onChange={this.handleFormChange('message')}
                  multiline
                  rows="6"
                />
              </FormControl>
              {!sendingMail && (
                <Button
                  variant="outlined"
                  onClick={this.handleSend}
                  style={{ width: '80px', margin: 'auto', marginTop: '16px' }}
                >
                  Send
                </Button>
              )}
              {sendingMail && (
                <CircularProgress size={32} style={{ margin: 'auto', marginTop: '16px' }} />
              )}
            </Box>
          </Section>
          <Footer
            ref={section => {
              this.footerDiv = section;
            }}
          >
            <div className="information">
              <div className="information-wrapper">
                <address>
                  <Typography variant="body1">Klostergatan 10 c/o Base10</Typography>
                  <Typography variant="body1">753 21 Uppsala</Typography>
                </address>
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
