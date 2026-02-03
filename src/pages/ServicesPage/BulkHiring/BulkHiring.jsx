import './BulkHiring.css';

import rectangle22 from '../../../assets/rectangle22.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import useAppContext from '../../../context/AppContext';

import bulkhiringmain from '../../../assets/bulkhiringmain.png';
import bulkhiringsub from '../../../assets/bulkhiringsub.png';

import { IoMdCheckmark } from 'react-icons/io';
import GetInTouchModal from '../../../components/Modals/GetInTouchModal/GetInTouchModal';
import PostJobModal from '../../../components/Modals/PostJobModal/PostJobModal';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const BulkHiring = () => {
  const {
    carouselData,
    isGetInTouchModalOpen,
    setIsGetInTouchModalOpen,
    isPostJobModalOpen,
    setIsPostJobModalOpen,
  } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    dots: false,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className='servicehero'>
        <div className='serviceheronotes'>
          <h1 className='serviceherotitle'>Bulk Hiring</h1>
          <div className='serivcehighlight'>
            <div className='serviceicon'>
              <IoMdCheckmark />
            </div>
            <div className='servicepoint'>
              <span className='servicetitle'>Rapid Volume Hiring</span>{' '}
              <br></br>
              <span className='servicedesc'>
                Quickly source and hire large numbers of professionals to meet
                business demands.
              </span>
            </div>
          </div>
          <div className='serivcehighlight'>
            <div className='serviceicon'>
              <IoMdCheckmark />
            </div>
            <div className='servicepoint'>
              <span className='servicetitle'>
                Streamlined Recruitment Process
              </span>{' '}
              <br></br>
              <span className='servicedesc'>
                End-to-end bulk hiring management, from sourcing and screening
                to onboarding.
              </span>
            </div>
          </div>
          <div className='serivcehighlight'>
            <div className='serviceicon'>
              <IoMdCheckmark />
            </div>
            <div className='servicepoint'>
              <span className='servicetitle'>Quality at Scale</span> <br></br>
              <span className='servicedesc'>
                Hire skilled candidates in large volumes without compromising on
                quality or fit.
              </span>
            </div>
          </div>
          <button
            className='serviceherobutton'
            onClick={() => setIsGetInTouchModalOpen(!isGetInTouchModalOpen)}
          >
            Get in touch
          </button>
        </div>
        <div className='serviceimage'>
          <img src={bulkhiringmain} alt='bulk hiring' className='main-img' />
        </div>
      </div>
      <div className='servicebodydesc'>
        <span className='servicebodynote'>
          At SakSam Sol, our Bulk Hiring services are designed to help
          organizations meet high-volume recruitment needs efficiently and
          effectively. Whether you are staffing BPOs, retail chains,
          manufacturing units, or logistics operations, we provide pre-screened,
          qualified candidates at scale. Our team manages the entire hiring
          process, including candidate sourcing, assessments, interviews, and
          onboarding coordination. By leveraging our extensive talent network
          and structured recruitment strategies, we ensure fast turnaround times
          while maintaining high standards of candidate quality. Bulk hiring
          with SakSam Sol reduces recruitment bottlenecks, saves time, and
          ensures your workforce is ready to support business operations. Our
          services are flexible, scalable, and tailored to your organization’s
          unique requirements, helping you achieve rapid growth without
          compromising on talent excellence.
        </span>
      </div>
      <div className='serviceadvantages'>
        <div className='advantageimagesection'>
          <span className='advantagetitle'>Advantages</span> <br></br>
          <span className='advantagedesc'>
            Our Bulk Hiring solutions deliver fast, reliable, and scalable
            recruitment, enabling organizations to meet large workforce
            requirements efficiently.
          </span>
          <br></br>
          <span className='advantageimage'>
            <img src={bulkhiringsub} alt='bulk hiring' className='sub-img' />
          </span>
        </div>
        <div className='advantagepoint'>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>1.</li>
              <li className='highlightheading'>Fast & Efficient Hiring</li>
              <li className='highlightdesc'>
                Fill large volumes of positions quickly without compromising on
                candidate quality.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>2.</li>
              <li className='highlightheading'>
                Structured Recruitment Process
              </li>
              <li className='highlightdesc'>
                Manage bulk hiring with organized sourcing, screening, and
                onboarding workflows.
              </li>
            </ul>
          </div>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>3.</li>
              <li className='highlightheading'>Scalable Solutions</li>
              <li className='highlightdesc'>
                Easily scale your workforce up or down based on project or
                business requirements.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>4.</li>
              <li className='highlightheading'>Quality Assurance</li>
              <li className='highlightdesc'>
                Ensure every candidate is assessed and verified for skills,
                experience, and cultural fit.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='home-page-money-container'>
        <div className='home-page-money-content-container'>
          <h3 className='home-page-money-heading'>Our Success in Numbers </h3>
          <p className='home-page-money-text'>
            At SakSam Sol, our growth and impact are measured not just by the
            clients we serve but by the results we deliver. These numbers
            reflect our commitment to excellence, speed, and trust in the
            staffing industry.
          </p>
          <button
            className='home-page-money-btn'
            onClick={() => setIsPostJobModalOpen(!isPostJobModalOpen)}
          >
            Post a Job
          </button>
        </div>
        <div className='home-page-money-grid-container'>
          <div className='home-page-money-item-one-container'>
            <h3 className='item-one-heading'>500+</h3>
            <div className='item-one-range-container'>
              <div className='item-one-range-child-container'></div>
              <div className='item-one-range-point-container'></div>
            </div>
            <p className='item-one-text'>Successful Placements</p>
          </div>
          <div className='home-page-money-item-one-container'>
            <h3 className='item-one-heading'>95%</h3>
            <div className='item-one-range-container'>
              <div className='item-one-range-child-two-container'></div>
              <div className='item-one-range-point-container'></div>
            </div>
            <p className='item-one-text'>Client Satisfaction Rate</p>
          </div>
          <div className='home-page-money-item-two-container'>
            <h3 className='item-one-heading'>50+</h3>
            <p className='item-one-text'>Active Industry Clients</p>
          </div>
          <div className='home-page-money-item-three-container'>
            <h3 className='item-one-heading'>5+</h3>
            <p className='item-one-text'>Years of Experience</p>
          </div>
        </div>
        <img src={rectangle22} alt='rectangle 22' className='rectangle-22' />
      </div>

      <div className='home-page-services-container'>
        <div className='home-page-services-grid-container'>
          <Slider {...settings}>
            {carouselData.map((item) => {
              const { id, title, list, link } = item;
              return (
                <div className='home-page-services-contract-container' key={id}>
                  <h3 className='home-page-contract-heading'>{title}</h3>
                  <ul className='home-page-contract-list-container'>
                    {list.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                  <button className='contract-btn'>
                    <Link to={link}>Learn More</Link>
                  </button>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <GetInTouchModal
        isOpen={isGetInTouchModalOpen}
        onClose={() => setIsGetInTouchModalOpen(false)}
      />
      <PostJobModal
        isOpen={isPostJobModalOpen}
        onClose={() => setIsPostJobModalOpen(false)}
      />
    </div>
  );
};

export default BulkHiring;
