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
import alma from '../../assets/image1.jpg';
import santos from '../../assets/image2.jpg';
import rita from '../../assets/image3.jpg';
import layer from '../../assets/layer.png';
import group from '../../assets/group.png';
import leftRectangle from '../../assets/right-rectangle (1).png';
import rightRectangle from '../../assets/right-rectangle (3).png';
import rectangle22 from '../../assets/rectangle22.png';
import peter from '../../assets/peter.png';
import jacline from '../../assets/jacline.png';
import jessica from '../../assets/jessica.png';
import josh from '../../assets/josh.png';

import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import MeetingCard from '../../components/MeetingCard/MeetingCard';

import Accordion from '../../components/Accordion/Accordion';
import { useState } from 'react';

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

const meetingData = [
  {
    id: 1,
    image: alma,
    name: 'Alma Marquardt',
    role: 'Founder & Managing Director',
    text: 'Lorem ipsum dolor sit amet consectetur. Eget elit vel cras amet. Sit etiam nullam accumsan tincidunt odio vitae mattis fermentum in. Eget duis volutpat.',
  },
  {
    id: 2,
    image: santos,
    name: 'Santos lockman',
    role: 'Operations Manager',
    text: 'Lorem ipsum dolor sit amet consectetur. Nam netus ornare diam vivamus. In erat erat bibendum porttitor. Risus quisque eu vitae imperdiet quisque dignissim.',
  },
  {
    id: 3,
    image: rita,
    name: 'Rita Heller',
    role: 'New Business',
    text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar at gravida id et imperdiet quam. Eget feugiat id.',
  },
];

const faqs = [
  {
    id: 1,
    question: 'Lorem ipsum dolor sit amet consectetur. Arcu.',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Porttitor in senectus vulputate tempor phasellus. Potenti at placerat duis felis bibendum pulvinar velit. Nascetur in at tellus pellentesque placerat egestas vulputate. Semper sagittis vestibulum tempor mauris lectus maecenas sed dignissim. Quam.',
    isOpen: false,
  },
  {
    id: 2,
    question: 'Lorem ipsum dolor sit amet consectetur. Amet et.',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Porttitor in senectus vulputate tempor phasellus. Potenti at placerat duis felis bibendum pulvinar velit. Nascetur in at tellus pellentesque placerat egestas vulputate. Semper sagittis vestibulum tempor mauris lectus maecenas sed dignissim. Quam.',
    isOpen: false,
  },
  {
    id: 3,
    question: 'Lorem ipsum dolor sit amet consectetur. Eu eget.',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Porttitor in senectus vulputate tempor phasellus. Potenti at placerat duis felis bibendum pulvinar velit. Nascetur in at tellus pellentesque placerat egestas vulputate. Semper sagittis vestibulum tempor mauris lectus maecenas sed dignissim. Quam.',
    isOpen: false,
  },
  {
    id: 4,
    question: 'Lorem ipsum dolor sit amet consectetur. Aliquet.',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Porttitor in senectus vulputate tempor phasellus. Potenti at placerat duis felis bibendum pulvinar velit. Nascetur in at tellus pellentesque placerat egestas vulputate. Semper sagittis vestibulum tempor mauris lectus maecenas sed dignissim. Quam.',
    isOpen: false,
  },
  {
    id: 5,
    question: 'Lorem ipsum dolor sit amet consectetur. Arcu.',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Porttitor in senectus vulputate tempor phasellus. Potenti at placerat duis felis bibendum pulvinar velit. Nascetur in at tellus pellentesque placerat egestas vulputate. Semper sagittis vestibulum tempor mauris lectus maecenas sed dignissim. Quam.',
    isOpen: false,
  },
  {
    id: 6,
    question: 'Lorem ipsum dolor sit amet consectetur. Volutpat.',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Porttitor in senectus vulputate tempor phasellus. Potenti at placerat duis felis bibendum pulvinar velit. Nascetur in at tellus pellentesque placerat egestas vulputate. Semper sagittis vestibulum tempor mauris lectus maecenas sed dignissim. Quam.',
    isOpen: false,
  },
];

const HomePage = () => {
  const [faqsData, setfaqsData] = useState(faqs);

  const handleAccordion = (id) => {
    const filteredData = faqsData.map((item) =>
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    );
    setfaqsData(filteredData);
  };

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
      <div className='home-page-profile-container'>
        <img src={layer} alt='layer' className='layer-img' />
        <img src={group} alt='group' className='group-img' />
        <img src={peter} alt='peter' className='peter-img' />
        <img src={jacline} alt='jacline' className='jacline-img' />
        <img src={jessica} alt='jessica' className='jessica-img' />
        <img src={josh} alt='josh' className='josh-img' />
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
        </div>
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
        <img
          src={leftRectangle}
          alt='left rectangle'
          className='left-rectangle'
        />
        <img
          src={rightRectangle}
          alt='left rectangle'
          className='right-rectangle'
        />
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
            <h3 className='home-page-contract-heading'>Contract Staffing</h3>
            <ul className='home-page-contract-list-container'>
              <li>Lorem Ipsum Dolor Sit Amet Consectetur.</li>
              <li>Rutrum bibendum laoreet dictum turpis.</li>
              <li>
                Non faucibus maecenas rhoncus pellentesque lacinia pellentesque
                purus quis vitae.
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
                Non faucibus maecenas rhoncus pellentesque lacinia pellentesque
                purus quis vitae.
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
                Non faucibus maecenas rhoncus pellentesque lacinia pellentesque
                purus quis vitae.
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
          <TestimonialCard {...testimonialsData[0]} />
          <TestimonialCard {...testimonialsData[0]} />
          <TestimonialCard {...testimonialsData[0]} />
          <TestimonialCard {...testimonialsData[0]} />
        </div>
      </div>
      <div className='home-page-money-container'>
        <div className='home-page-money-content-container'>
          <h3 className='home-page-money-heading'>
            How much money you can save{' '}
          </h3>
          <p className='home-page-money-text'>
            Lorem ipsum dolor sit amet consectetur. Fermentum dolor mauris amet
            congue egestas. Sodales eu turpis lacus etiam. Aliquam feugiat sit
            vitae pharetra. Est odio at lacus elit nunc amet mi. Pulvinar sed
            mi.
          </p>
          <button className='home-page-money-btn'>Post a Job</button>
        </div>
        <div className='home-page-money-grid-container'>
          <div className='home-page-money-item-one-container'>
            <h3 className='item-one-heading'>&#8356;399</h3>
            <div className='item-one-range-container'>
              <div className='item-one-range-child-container'></div>
              <div className='item-one-range-point-container'></div>
            </div>
            <p className='item-one-text'>Annual salary for the position</p>
          </div>
          <div className='home-page-money-item-one-container'>
            <h3 className='item-one-heading'>10</h3>
            <div className='item-one-range-container'>
              <div className='item-one-range-child-container'></div>
              <div className='item-one-range-point-container'></div>
            </div>
            <p className='item-one-text'>People do you require</p>
          </div>
          <div className='home-page-money-item-two-container'>
            <h3 className='item-one-heading'>&#8356;1000</h3>
            <p className='item-one-text'>Recruitment Agency Fees</p>
          </div>
          <div className='home-page-money-item-three-container'>
            <h3 className='item-one-heading'>&#8356;299</h3>
            <p className='item-one-text'>Talent Finder Fees</p>
          </div>
        </div>
        <img src={rectangle22} alt='rectangle 22' className='rectangle-22' />
      </div>
      <div className='home-page-meeting-container'>
        <h3 className='home-page-meeting-heading'>Meet Our Team</h3>
        <p className='home-page-meeting-text'>
          Our Dedicated Team Is Always On Hand To Help Your Business Succeed. We
          Aim To Fill Your Roles Quickly And Efficiently.
        </p>
        <div className='home-page-meeting-grid-container'>
          {meetingData.map((item) => (
            <MeetingCard key={item.id} {...item} />
          ))}
        </div>
        <div className='home-page-meeting-btn'>View More</div>
      </div>
      <div className='home-page-faqs-container'>
        <div className='home-page-faqs-content-container'>
          <h3 className='faqs-heading'>Digital Marketing FAQs</h3>
          <p className='faqs-text'>
            Lorem ipsum dolor sit amet consectetur. Nibh laoreet malesuada eget
            vitae in turpis sed. Suspendisse volutpat vestibulum maecenas nunc
            tortor. Enim faucibus amet mattis duis eu convallis dui fringilla.
          </p>
          <div className='faqs-btn-container'>
            <button className='view-btn'>View More</button>
            <span className='contact-btn'>Contact Us</span>
          </div>
        </div>
        <div className='home-page-faqs'>
          {faqsData.map((item) => (
            <Accordion
              key={item.id}
              {...item}
              handleAccordion={handleAccordion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
