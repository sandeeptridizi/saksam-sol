import MeetingCard from '../../components/MeetingCard/MeetingCard';
import './AboutPage.css';

import alma from '../../assets/image1.jpg';
import santos from '../../assets/image2.jpg';
import rita from '../../assets/image3.jpg';

import aboutImg from '../../assets/about.png';

const meetingData = [
  {
    id: 1,
    image: alma,
    name: 'Raghavendra Chary',
    role: 'Founder & Managing Director',
    text: 'With over 10 years of experience in recruitment and talent management, Raghavendra leads SakSam Sol with a vision to deliver quality staffing solutions across industries.',
  },
  {
    id: 2,
    image: santos,
    name: 'Sowmya P',
    role: 'Co Founder & CHRO',
    text: 'Sowmya brings expertise in operations and workforce strategy, ensuring seamless execution of recruitment processes and client satisfaction.',
  },
  {
    id: 3,
    image: rita,
    name: 'Rajesh Verma',
    role: 'Co Founder & COO',
    text: 'Rajesh drives innovation through technology-driven recruitment solutions, optimizing sourcing, screening, and talent management workflows.',
  },
];

const AboutPage = () => {
  return (
    <div>
      <div className='abouthero'>
        <div className='abouthighlights'>
          <ul className='aboutinfo'>
            <li className='aboutheading'>About Us</li>
            <li className='aboutdesc'>
              Building High-Performing Teams for Businesses Nationwide with
              Trusted Staffing Solutions{' '}
            </li>
            <br></br>
            <button className='aboutbutton'>Get a Quote</button>
          </ul>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>1.</li>
              <li className='highlightheading'>Commitment to Excellence</li>
              <li className='highlightdesc'>
                We consistently deliver high-quality staffing solutions and
                ensure the right talent is matched with every client’s needs.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>2.</li>
              <li className='highlightheading'>Client-Centric Approach</li>
              <li className='highlightdesc'>
                Your business goals guide our strategies. We tailor our
                recruitment process to provide the best fit for your
                organization.
              </li>
            </ul>
          </div>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>3.</li>
              <li className='highlightheading'>Speed & Efficiency</li>
              <li className='highlightdesc'>
                We provide fast turnaround times without compromising on
                quality, helping your business stay agile and competitive.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>4.</li>
              <li className='highlightheading'>Integrity & Trust</li>
              <li className='highlightdesc'>
                Transparent processes, ethical practices, and long-term
                partnerships form the foundation of everything we do.
              </li>
            </ul>
          </div>
        </div>
        <div className='aboutmedia'>
          <img src={aboutImg} alt='about image' className='main-img' />
        </div>
      </div>
      <div className='visionmission'>
        <div>
          <ul className='vision'>
            <li className='visionicon'></li>
            <li className='visionheading'>Vision</li>
            <li className='visiondesc'>
              To become India’s most trusted and innovative staffing partner,
              empowering companies across industries to build high-performing
              teams and achieve long-term business excellence.
            </li>
          </ul>
        </div>
        <div>
          <ul className='vision'>
            <li className='visionicon'></li>
            <li className='visionheading'>Mission</li>
            <li className='visiondesc'>
              To provide businesses with efficient, reliable, and customized
              staffing solutions that connect the right talent with the right
              opportunities, enabling organizational growth and success.
            </li>
          </ul>
        </div>
      </div>
      <div className='home-page-meeting-container'>
        <h3 className='home-page-meeting-heading'>Our Success Founders</h3>
        <p className='home-page-meeting-text'>
          At Saksam Sol, we take pride in offering more than just products; we
          offer an experience. Here's what makes us unique:
        </p>
        <div className='home-page-meeting-grid-container'>
          {meetingData.map((item) => (
            <MeetingCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

// psowmya543@gmail.com

// tambulam@125

export default AboutPage;
