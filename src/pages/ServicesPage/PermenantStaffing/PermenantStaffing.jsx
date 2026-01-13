import './PermenantStaffing.css';

import rectangle22 from '../../../assets/rectangle22.png';
import useAppContext from '../../../context/AppContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const PermenantStaffing = () => {
  const { carouselData } = useAppContext();

  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    dots: false,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div>
      <div className='servicehero'>
        <div className='serviceheronotes'>
          <h1 className='serviceherotitle'>Permenant Staffing</h1>
          <div className='serivcehighlight'>
            <div className='serviceicon'></div>
            <div className='servicepoint'>
              <span className='servicetitle'>
                Hire Full-Time Talent with Ease
              </span>{' '}
              <br></br>
              <span className='servicedesc'>
                We help you find skilled professionals who fit both your role
                requirements and company culture.
              </span>
            </div>
          </div>
          <div className='serivcehighlight'>
            <div className='serviceicon'></div>
            <div className='servicepoint'>
              <span className='servicetitle'>
                Structured Recruitment Process
              </span>{' '}
              <br></br>
              <span className='servicedesc'>
                From sourcing to shortlisting and final onboarding, we manage
                the hiring process end-to-end.
              </span>
            </div>
          </div>
          <div className='serivcehighlight'>
            <div className='serviceicon'></div>
            <div className='servicepoint'>
              <span className='servicetitle'>Long-Term Employee Success</span>{' '}
              <br></br>
              <span className='servicedesc'>
                Our focus is on delivering candidates who contribute to your
                organization’s growth and retention.
              </span>
            </div>
          </div>
          <button className='serviceherobutton'>Get in touch</button>
        </div>
        <div className='serviceimage'></div>
      </div>
      <div className='servicebodydesc'>
        <span className='servicebodynote'>
          At SakSam Sol, our Permanent Staffing services are designed to help
          businesses build strong, high-performing teams by hiring skilled
          full-time professionals who fit both the role requirements and company
          culture. We manage the entire recruitment lifecycle, from
          understanding your hiring needs, sourcing and screening candidates,
          conducting assessments and interviews, to coordinating smooth
          onboarding. By leveraging our extensive talent network and industry
          expertise, we ensure faster time-to-hire while maintaining high
          quality. Our services span across IT, Non-IT, Healthcare,
          Manufacturing, BFSI, Retail, and more, delivering professionals who
          contribute to long-term business growth. We focus on candidate
          alignment, retention, and efficiency, providing staffing solutions
          that are reliable, scalable, and tailored to your organization’s
          goals. With SakSam Sol, you can build teams that drive performance and
          support your strategic objectives effectively.
        </span>
      </div>
      <div className='serviceadvantages'>
        <div className='advantageimagesection'>
          <span className='advantagetitle'>Advantages</span> <br></br>
          <span className='advantagedesc'>
            Our Permanent Staffing solutions ensure quality, efficiency, and
            long-term fit, helping businesses hire the right talent for
            sustained success.
          </span>
          <br></br>
          <span className='advantageimage'></span>
        </div>
        <div className='advantagepoint'>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>1.</li>
              <li className='highlightheading'>Quality Talent Match</li>
              <li className='highlightdesc'>
                Candidates are carefully screened and assessed to meet both
                skill and culture requirements.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>2.</li>
              <li className='highlightheading'>End-to-End Hiring Support</li>
              <li className='highlightdesc'>
                We manage the complete recruitment process from sourcing to
                onboarding.
              </li>
            </ul>
          </div>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>3.</li>
              <li className='highlightheading'>Faster Time-to-Hire</li>
              <li className='highlightdesc'>
                Access a strong talent network to fill roles quickly without
                compromising on quality.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>4.</li>
              <li className='highlightheading'>Long-Term Employee Success</li>
              <li className='highlightdesc'>
                We focus on hiring professionals who contribute to retention and
                long-term business growth.
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
          <button className='home-page-money-btn'>Post a Job</button>
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
              const { id, title, list } = item;
              return (
                <div className='home-page-services-contract-container' key={id}>
                  <h3 className='home-page-contract-heading'>{title}</h3>
                  <ul className='home-page-contract-list-container'>
                    {list.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                  <button className='contract-btn'>GET STARTED</button>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PermenantStaffing;
