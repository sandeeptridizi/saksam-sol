import './HomePage.css';

<<<<<<< HEAD
const HomePage = () => {
  return <div>Home Page</div>;
=======
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
        </div>
      </div>
    </div>
  );
>>>>>>> b456873e3c57be6b39359b091e937e5f02192a71
};

export default HomePage;
