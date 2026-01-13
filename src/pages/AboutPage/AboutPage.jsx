import './AboutPage.css';

const AboutPage = () => {
  return (
    <div>
      <div className='abouthero'>
        <div className='abouthighlights'>
          <ul className='aboutinfo'>
            <li className='aboutheading'>About Us</li>
            <li className='aboutdesc'>
              At Besnik Consultancy, we take pride in our values – service,
              integrity, and excellence.{' '}
            </li>
            <br></br>
            <button className='aboutbutton'>Get a Quote</button>
          </ul>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>1.</li>
              <li className='highlightheading'>Who We Are</li>
              <li className='highlightdesc'>
                You get a 2-week free trial to kick the Smarty tries. We want
                you to.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>2.</li>
              <li className='highlightheading'>What Do We Do</li>
              <li className='highlightdesc'>
                We give you a free course that guides you through the process.
              </li>
            </ul>
          </div>
          <div className='aboutrow'>
            <ul className='abouthighlight'>
              <li className='highlightnum'>3.</li>
              <li className='highlightheading'>How Do We Help</li>
              <li className='highlightdesc'>
                Use our multimedia lecturers, videos, and coaching sessions.
              </li>
            </ul>
            <ul className='abouthighlight'>
              <li className='highlightnum'>4.</li>
              <li className='highlightheading'>Create Success Story</li>
              <li className='highlightdesc'>
                With access to online learning resources anyone can transfrm.
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
              Project planning, engineering design, technical implementation,
              and quality assurance of waste management facilities
            </li>
          </ul>
        </div>
        <div>
          <ul className='vision'>
            <li className='visionicon'></li>
            <li className='visionheading'>Mission</li>
            <li className='visiondesc'>
              Administrative operations, human resources, policy coordination,
              and overall organizational management
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
