import './PayrollServices.css';

import rectangle22 from '../../../assets/rectangle22.png';
import useAppContext from '../../../context/AppContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import payrollmain from '../../../assets/payrollmain.png';
import payrollsub from '../../../assets/payroll.jpg';

import { IoMdCheckmark } from 'react-icons/io';
import GetInTouchModal from '../../../components/Modals/GetInTouchModal/GetInTouchModal';
import PostJobModal from '../../../components/Modals/PostJobModal/PostJobModal';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PayrollServices = () => {
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
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='servicepagecontainer'>
      <div className='servicehero'>
        <div className='serviceheronotes'>
          <h1 className='serviceherotitle'>Payroll Services</h1>
          <div className='serivcehighlight'>
            <div className='serviceicon'>
              <IoMdCheckmark />
            </div>
            <div className='servicepoint'>
              <span className='servicetitle'>Accurate & Timely Payroll</span>{' '}
              <br></br>
              <span className='servicedesc'>
                Ensure your employees are paid correctly and on time, every
                time.
              </span>
            </div>
          </div>
          <div className='serivcehighlight'>
            <div className='serviceicon'>
              <IoMdCheckmark />
            </div>
            <div className='servicepoint'>
              <span className='servicetitle'>Compliance Made Easy</span>{' '}
              <br></br>
              <span className='servicedesc'>
                We manage all statutory regulations, taxes, and reporting
                obligations.
              </span>
            </div>
          </div>
          <div className='serivcehighlight'>
            <div className='serviceicon'>
              <IoMdCheckmark />
            </div>
            <div className='servicepoint'>
              <span className='servicetitle'>
                Hassle-Free Payroll Management
              </span>{' '}
              <br></br>
              <span className='servicedesc'>
                Focus on your business while we handle payroll processing,
                documentation, and records.
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
          <img src={payrollmain} alt='payroll' className='main-img' />
        </div>
      </div>
      <div className='servicebodydesc'>
        <span className='servicebodynote'>
          At SakSam Sol, our Payroll Services are designed to simplify and
          streamline your payroll management, ensuring accuracy, compliance, and
          efficiency. We handle salary calculations, statutory deductions, tax
          filings, and employee records for organizations of all sizes. Our team
          ensures that employees are paid on time, while keeping you
          compliant with all local and national regulations. By leveraging
          technology-driven solutions and industry expertise, we reduce errors,
          save time, and eliminate administrative burdens. Our payroll services
          are tailored to your organization, whether you have a small team, bulk
          employees, or multi-location operations. With SakSam Sol, you get
          transparent, reliable, and end-to-end payroll management that allows
          you to focus on your core business activities.
        </span>
      </div>
      <div className='serviceadvantages'>
        <div className='advantageimagesection'>
          <span className='advantagetitle'>Advantages</span> <br></br>
          <span className='advantagedesc'>
            Our Payroll Services simplify salary processing, ensure compliance,
            and provide accurate, timely, and hassle-free management for your
            workforce.
          </span>
          <br></br>
          <span className='advantageimage'>
            <img src={payrollsub} alt='bulk hiring' className='sub-img' />
          </span>
        </div>
        <div className='advantagepoint'>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>1.</li>
              <li className='highlightheading'>Accurate Salary Processing</li>
              <li className='highlightdesc'>
                Ensure every employee is paid correctly with error-free payroll
                calculations.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>2.</li>
              <li className='highlightheading'>Regulatory Compliance</li>
              <li className='highlightdesc'>
                Stay compliant with taxes, statutory deductions, and reporting
                requirements.
              </li>
            </ul>
          </div>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>3.</li>
              <li className='highlightheading'>Time & Cost Efficiency</li>
              <li className='highlightdesc'>
                Reduce administrative workload and operational costs by
                outsourcing payroll management.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>4.</li>
              <li className='highlightheading'>Transparent & Reliable</li>
              <li className='highlightdesc'>
                Maintain clear records, reports, and communication for all
                payroll activities.
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
          <div className='howitoworksbuttons'>
        <button
          className='steps-btn'
          onClick={() => setIsPostJobModalOpen(!isPostJobModalOpen)}
        >
          Post a Job
        </button>

        <button
          className='steps-btn'
          onClick={() => setIsPostJobModalOpen(!isPostJobModalOpen)}
        >
          Apply Now
        </button></div>
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

export default PayrollServices;
