import './ContingetStaffing.css';

import rectangle22 from '../../../assets/rectangle22.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import useAppContext from '../../../context/AppContext';

import contingentmain from '../../../assets/contingentmain.png';
import contingentsub from '../../../assets/contingentsub.jpg';

import { IoMdCheckmark } from 'react-icons/io';
import GetInTouchModal from '../../../components/Modals/GetInTouchModal/GetInTouchModal';
import PostJobModal from '../../../components/Modals/PostJobModal/PostJobModal';
import { Link } from 'react-router-dom';

const ContingetStaffing = () => {
  const {
    carouselData,
    isGetInTouchModalOpen,
    setIsGetInTouchModalOpen,
    isPostJobModalOpen,
    setIsPostJobModalOpen,
  } = useAppContext();

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
          <h1 className='serviceherotitle'>Saff Augmentation</h1>
          <div className='serivcehighlight'>
            <div className='serviceicon'>
              <IoMdCheckmark />
            </div>
            <div className='servicepoint'>
              <span className='servicetitle'>
                Scale Your Workforce On Demand
              </span>{' '}
              <br></br>
              <span className='servicedesc'>
                Quickly add skilled professionals for short-term projects,
                seasonal peaks, or urgent hiring needs.
              </span>
            </div>
          </div>
          <div className='serivcehighlight'>
            <div className='serviceicon'>
              <IoMdCheckmark />
            </div>
            <div className='servicepoint'>
              <span className='servicetitle'>
                Compliance & Payroll Made Easy
              </span>{' '}
              <br></br>
              <span className='servicedesc'>
                We handle all contracts, documentation, and payroll, ensuring a
                smooth and hassle-free process.
              </span>
            </div>
          </div>
          <div className='serivcehighlight'>
            <div className='serviceicon'>
              <IoMdCheckmark />
            </div>
            <div className='servicepoint'>
              <span className='servicetitle'>Flexible Staffing Solutions</span>{' '}
              <br></br>
              <span className='servicedesc'>
                Choose from full-time contracts, part-time, or project-based
                hires tailored to your business requirements.
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
          <img
            src={contingentmain}
            alt='contingent main image'
            className='main-img'
          />
        </div>
      </div>
      <div className='servicebodydesc'>
        <span className='servicebodynote'>
          At SakSam Sol, our Contingent Staffing services are designed to help
          businesses scale their workforce quickly and efficiently without the
          long-term commitments of permanent hiring. We provide pre-screened,
          skilled professionals who are ready to contribute immediately to your
          projects, seasonal demands, or short-term assignments. From sourcing
          and screening candidates to handling payroll, statutory compliance,
          and documentation, our team manages every step of the process so you
          can focus on core business operations. Our flexible staffing models
          allow you to hire on a full-time contract, part-time, or
          project-specific basis, ensuring cost-effective and agile workforce
          solutions. Trusted by companies across IT, Non-IT, Healthcare,
          Manufacturing, BFSI, Retail, and Logistics, our contingent staffing
          solutions deliver speed, reliability, and high-quality talent, helping
          your business meet deadlines and scale seamlessly.
        </span>
      </div>
      <div className='serviceadvantages'>
        <div className='advantageimagesection'>
          <span className='advantagetitle'>Advantages</span> <br></br>
          <span className='advantagedesc'>
            Unlock the benefits of flexible, fast, and cost-effective staffing
            with SakSam Sol. We provide skilled professionals, hassle-free
            compliance, and scalable workforce solutions tailored to your
            business needs.
          </span>
          <br></br>
          <span className='advantageimage'>
            <img
              src={contingentsub}
              alt='advantages image'
              className='sub-img'
            />
          </span>
        </div>
        <div className='advantagepoint'>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>1.</li>
              <li className='highlightheading'>Quick Workforce Deployment</li>
              <li className='highlightdesc'>
                Hire pre-screened professionals fast to meet project deadlines
                and urgent staffing needs.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>2.</li>
              <li className='highlightheading'>Cost-Effective Staffing</li>
              <li className='highlightdesc'>
                Reduce overhead costs by paying only for the duration and
                resources you require.
              </li>
            </ul>
          </div>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>3.</li>
              <li className='highlightheading'>
                Flexible & Scalable Solutions
              </li>
              <li className='highlightdesc'>
                Easily scale your workforce up or down with contract, part-time,
                or project-based hires.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>4.</li>
              <li className='highlightheading'>Hassle-Free Compliance</li>
              <li className='highlightdesc'>
                We manage payroll, contracts, documentation, and statutory
                compliance for all contract staff.
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

export default ContingetStaffing;
