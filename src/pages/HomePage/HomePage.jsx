import './HomePage.css';

import like from '../../assets/like.png';
import euro from '../../assets/euro.png';
import fluentPerson from '../../assets/fluent-person.png';
import clockFast from '../../assets/clock-fast.png';

import library from '../../assets/library.png';
import monster from '../../assets/monster.png';
import indeed from '../../assets/indeed.png';
import totaljobs from '../../assets/totaljobs.png';
import glassdoor from '../../assets/glassdoor.png';
import jobcenterplus from '../../assets/jobcenterplus.png';
import adzuna from '../../assets/adzuna.png';
import trovit from '../../assets/trovit.png';
import jobsite from '../../assets/jobsite.png';
import reed from '../../assets/reed.png';
import success from '../../assets/success.png';
import message from '../../assets/message.png';
import search from '../../assets/search.png';
import wechat from '../../assets/wechat.png';
import logo from '../../assets/logo.png';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';

const data = [
  {
    id: 1,
    icon: like,
    title: '94%',
    text: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 2,
    icon: euro,
    title: 'Millions',
    text: 'Lorem ipsum dolor sit amet consectetur. Vel.',
  },
  {
    id: 3,
    icon: clockFast,
    title: 'Fastest',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 4,
    icon: fluentPerson,
    title: 'Dedicated',
    text: 'Lorem ipsum dolor sit amet consectetur.',
  },
];

const stepsData = [
  {
    id: 1,
    icon: success,
    title: 'We write your job advert',
  },
  {
    id: 2,
    icon: message,
    title: 'Post to major job boards',
  },
  {
    id: 3,
    icon: search,
    title: 'Review the Candidates',
  },
  {
    id: 4,
    icon: wechat,
    title: 'Arrange an interview',
  },
];

const testimonialsData = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur. Eu tellus viverra cras ipsum metus tellus accumsan. Tincidunt vel eleifend diam amet viverra in ut. Augue sed turpis sed nisi. In vel quisque a purus ipsum fringilla vitae massa pretium. Curabitur sagittis senectus.',
    name: 'Julie Griffin',
    role: 'HR Manager',
    logo: logo,
  },
];

const HomePage = () => {
  return (
    <div className='home-page-main-container'>
      <div className='home-page-header-container'>
        <h1 className='home-page-heading'>
          Fill Job Roles in any Job Sector in Any Location{' '}
          <span>from £399</span>
        </h1>
        <div className='home-page-email-btn-container'>
          <input
            type='text'
            placeholder='Your Email address'
            className='home-page-email-input'
          />
          <button className='home-page-btn'>Get Free Employer Account</button>
        </div>
      </div>
      <div className='home-page-grid-container'>
        {data.map((item) => {
          const { id, icon, title, text } = item;
          return (
            <div className='home-page-item-container' key={id}>
              <img src={icon} alt='icon' className='item-icon' />
              <h2 className='item-title'>{title}</h2>
              <p className='item-text'>{text}</p>
            </div>
          );
        })}
      </div>
      <div className='home-page-company-container'>
        <div>
          <p className='home-page-company-text'>
            Lorem ipsum dolor sit amet consectetur.{' '}
          </p>
          <p className='home-page-company-title'>
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className='home-page-company-logos-container'>
            <div className='home-page-company-logos-one-grid-container'>
              <img src={library} alt='library' className='grid-image' />
              <img src={monster} alt='monster' className='grid-image' />
              <img src={indeed} alt='indeed' className='grid-image' />
              <img src={totaljobs} alt='totaljobs' className='grid-image' />
              <img src={glassdoor} alt='glassdoor' className='grid-image' />
            </div>
            <div className='home-page-company-logos-two-grid-container'>
              <img src={jobcenterplus} alt='library' className='grid-image' />
              <img src={adzuna} alt='monster' className='grid-image' />
              <img src={trovit} alt='indeed' className='grid-image' />
              <img src={jobsite} alt='totaljobs' className='grid-image' />
              <img src={reed} alt='glassdoor' className='grid-image' />
              <img src={jobcenterplus} alt='library' className='grid-image' />
            </div>
          </div>
          <div className='home-page-how-it-works-section'>
            <h2 className='home-page-working-heading'>How It Works</h2>
            <div className='home-page-steps-grid-container'>
              {stepsData.map((step) => {
                const { id, icon, title } = step;
                return (
                  <div className='home-page-step-container' key={id}>
                    <p className='step'>Step {id}</p>
                    <img src={icon} alt='icon' />
                    <p className='step-title'>{title}</p>
                  </div>
                );
              })}
            </div>
            <button className='step-btn'>Post a Job</button>
          </div>
          <div className='home-page-services-container'>
            <div className='home-page-services-header'>
              <h3 className='home-page-services-heading'>
                Core Services For Everyone!
              </h3>
              <p className='home-page-services-text'>
                Choose A Service That Works Best For You
              </p>
            </div>
            <div className='home-page-services-grid-container'>
              <div className='home-page-services-contract-container'>
                <h3 className='home-page-contract-heading'>
                  Contract Staffing
                </h3>
                <ul className='home-page-contract-list-container'>
                  <li>Lorem Ipsum Dolor Sit Amet Consectetur.</li>
                  <li>Rutrum bibendum laoreet dictum turpis.</li>
                  <li>
                    Non faucibus maecenas rhoncus pellentesque lacinia
                    pellentesque purus quis vitae.
                  </li>
                </ul>
                <button className='contract-btn'>GET STARTED</button>
              </div>
              <div className='home-page-services-recommended-container'>
                <div className='home-page-recommended-header'>
                  <div className='recommended-container'>Recommended</div>
                  <h3 className='permanant-heading'>Permanant Staffing</h3>
                </div>
                <ul className='recommended-list-container'>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Rutrum bibendum laoreet dictum turpis.</li>
                  <li>
                    Non faucibus maecenas rhoncus pellentesque lacinia
                    pellentesque purus quis vitae.
                  </li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li> Rutrum bibendum laoreet dictum turpis.</li>
                </ul>
                <button className='recommended-btn'>GET STARTED</button>
              </div>
              <div className='home-page-services-rpo-container'>
                <h3 className='home-page-rpo-heading'>RPO</h3>
                <ul className='home-page-contract-list-container'>
                  <li>Lorem Ipsum Dolor Sit Amet Consectetur.</li>
                  <li>Rutrum bibendum laoreet dictum turpis.</li>
                  <li>
                    Non faucibus maecenas rhoncus pellentesque lacinia
                    pellentesque purus quis vitae.
                  </li>
                </ul>
                <button className='contract-btn'>GET STARTED</button>
              </div>
            </div>
          </div>
          <div className='home-page-testimonial-container'>
            <div className='home-page-testimonial-header'>
              <h2 className='testimonial-heading'>Testimonials</h2>
              <p className='testimonial-text'>
                Don’t take our word for it, see what our clients have to say.
              </p>
            </div>
            <div className='home-page-testimonial-carousel-container'>
              <TestimonialCard {...testimonialsData[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
