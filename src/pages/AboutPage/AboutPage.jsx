import './AboutPage.css';

const AboutPage = () => {
  return (
    <div>
      <div className='abouthero'>
        <div className='abouthighlights'>
          <ul className='aboutinfo'>
            <li className='aboutheading'>About Us</li>
            <li className='aboutdesc'>
              Building High-Performing Teams for Businesses Nationwide with Trusted Staffing Solutions{' '}
            </li>
            <br></br>
            <button className='aboutbutton'>Get a Quote</button>
          </ul>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>1.</li>
              <li className='highlightheading'>Commitment to Excellence</li>
              <li className='highlightdesc'>
                We consistently deliver high-quality staffing solutions and ensure the right talent is matched with every client’s needs.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>2.</li>
              <li className='highlightheading'>Client-Centric Approach</li>
              <li className='highlightdesc'>
                Your business goals guide our strategies. We tailor our recruitment process to provide the best fit for your organization.
              </li>
            </ul>
          </div>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>3.</li>
              <li className='highlightheading'>Speed & Efficiency</li>
              <li className='highlightdesc'>
                We provide fast turnaround times without compromising on quality, helping your business stay agile and competitive.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>4.</li>
              <li className='highlightheading'>Integrity & Trust</li>
              <li className='highlightdesc'>
                Transparent processes, ethical practices, and long-term partnerships form the foundation of everything we do.
              </li>
            </ul>
          </div>
        </div>
        <div className='aboutmedia'>ImagesSection</div>
      </div>
      <div className='visionmission'>
        <div>
          <ul className='vision'>
            <li className='visionicon'></li>
            <li className='visionheading'>Vision</li>
            <li className='visiondesc'>
              To become India’s most trusted and innovative staffing partner, empowering companies across industries to build high-performing teams and achieve long-term business excellence.
            </li>
          </ul>
        </div>
        <div>
          <ul className='vision'>
            <li className='visionicon'></li>
            <li className='visionheading'>Mission</li>
            <li className='visiondesc'>
              To provide businesses with efficient, reliable, and customized staffing solutions that connect the right talent with the right opportunities, enabling organizational growth and success.
            </li>
          </ul>
        </div>
      </div>
      <div className='founders'>
        <div className='foundersheading'>
          <span className='foundershead'>Our Success Founders</span> <br></br>
          <span className='foundersdesc'>
            At Saksam Sol, we take pride in offering more than just products; we
            offer an experience. Here's what makes us unique:
          </span>
        </div>
        <div className='foundersbrief'>
          <div className='founder1'>
            <span className='founderimage1'></span> <br></br>
            <span className='foundername'>Sowmya P</span> <br></br>
            <span className='foundertitle'>Co Founder</span>
          </div>
          <div className='founder2'>
            <span className='founderimage2'></span> <br></br>
            <span className='foundername'>Raghavendra Chary</span> <br></br>
            <span className='foundertitle'>Founder and CEO</span>
          </div>
          <div className='founder1'>
            <span className='founderimage1'></span> <br></br>
            <span className='foundername'>Another Founder</span> <br></br>
            <span className='foundertitle'>Founder Title</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// psowmya543@gmail.com

// tambulam@125

export default AboutPage;
