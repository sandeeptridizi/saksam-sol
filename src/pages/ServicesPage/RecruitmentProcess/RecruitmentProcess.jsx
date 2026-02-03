import './RecruitmentProcess.css';

import rectangle22 from '../../../assets/rectangle22.png';
import useAppContext from '../../../context/AppContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import recruitmain from '../../../assets/recruitmain.png';
import recruitsub from '../../../assets/recruitsub.png';

import { IoMdCheckmark } from 'react-icons/io';
import GetInTouchModal from '../../../components/Modals/GetInTouchModal/GetInTouchModal';
import PostJobModal from '../../../components/Modals/PostJobModal/PostJobModal';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const RecruitmentProcess = () => {
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
          <h1 className='serviceherotitle'>Recruiment Process</h1>
          <div className='serivcehighlight'>
            <div className='serviceicon'>
              <IoMdCheckmark />
            </div>
            <div className='servicepoint'>
              <span className='servicetitle'>Dedicated Recruitment Team</span>{' '}
              <br></br>
              <span className='servicedesc'>
                Get a full team managing your entire hiring cycle, customized
                for your organization.
              </span>
            </div>
          </div>
          <div className='serivcehighlight'>
            <div className='serviceicon'>
              <IoMdCheckmark />
            </div>
            <div className='servicepoint'>
              <span className='servicetitle'>Scalable Hiring Solutions</span>{' '}
              <br></br>
              <span className='servicedesc'>
                Easily scale recruitment support for volume, niche, or
                multi-location hiring needs.
              </span>
            </div>
          </div>
          <div className='serivcehighlight'>
            <div className='serviceicon'>
              <IoMdCheckmark />
            </div>
            <div className='servicepoint'>
              <span className='servicetitle'>Streamlined & Cost-Effective</span>{' '}
              <br></br>
              <span className='servicedesc'>
                Optimize your hiring process, reduce costs, and improve
                efficiency through structured RPO solutions.
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
          <img src={recruitmain} alt='recruit' className='main-img' />
        </div>
      </div>
      <div className='servicebodydesc'>
        <span className='servicebodynote'>
          At SakSam Sol, our Recruitment Process Outsourcing (RPO) services
          provide organizations with a dedicated recruitment team to manage the
          entire hiring lifecycle efficiently. We offer end-to-end recruitment
          solutions, including candidate sourcing, screening, assessments,
          interviews, and onboarding, tailored to your business requirements.
          Our RPO model is scalable and flexible, making it ideal for
          organizations experiencing high-volume hiring, rapid expansion, or
          multi-location operations. By leveraging our industry expertise,
          structured processes, and technology-driven recruitment tools, we
          deliver high-quality candidates quickly while reducing recruitment
          costs and administrative burdens. With SakSam Sol, you gain
          consistent, reliable, and transparent hiring support, allowing your HR
          team to focus on strategic initiatives while we handle the operational
          aspects of recruitment.
        </span>
      </div>
      <div className='serviceadvantages'>
        <div className='advantageimagesection'>
          <span className='advantagetitle'>Advantages</span> <br></br>
          <span className='advantagedesc'>
            Our RPO services streamline your hiring process, deliver quality
            candidates at scale, and provide cost-effective, end-to-end
            recruitment support tailored to your business needs.
          </span>
          <br></br>
          <span className='advantageimage'>
            <img src={recruitsub} alt='recruit' className='main-img' />
          </span>
        </div>
        <div className='advantagepoint'>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>1.</li>
              <li className='highlightheading'>
                End-to-End Recruitment Support
              </li>
              <li className='highlightdesc'>
                Manage the complete hiring lifecycle from sourcing to onboarding
                efficiently.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>2.</li>
              <li className='highlightheading'>Dedicated Recruitment Team</li>
              <li className='highlightdesc'>
                A team exclusively focused on your hiring needs for better
                quality and faster results.
              </li>
            </ul>
          </div>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>3.</li>
              <li className='highlightheading'>
                Scalable & Flexible Solutions
              </li>
              <li className='highlightdesc'>
                Adjust recruitment resources as per volume, location, or
                specialized role requirements.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>4.</li>
              <li className='highlightheading'>Cost-Effective Hiring</li>
              <li className='highlightdesc'>
                Reduce recruitment costs while maintaining high-quality
                candidate delivery and compliance.
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

export default RecruitmentProcess;
