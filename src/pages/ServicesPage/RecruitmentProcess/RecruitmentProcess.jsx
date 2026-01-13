import './RecruitmentProcess.css';

const RecruitmentProcess = () => {
  return <div>
    <div className='servicehero'>
      <div className='serviceheronotes'>
        <h1 className='serviceherotitle'>Recruiment Process</h1>
        <div className='serivcehighlight'>
          <div className='serviceicon'></div>
          <div className='servicepoint'>
            <span className='servicetitle'>Dedicated Recruitment Team</span> <br></br>
            <span className='servicedesc'>Get a full team managing your entire hiring cycle, customized for your organization.</span>
          </div>
        </div>
        <div className='serivcehighlight'>
          <div className='serviceicon'></div>
          <div className='servicepoint'>
            <span className='servicetitle'>Scalable Hiring Solutions</span> <br></br>
            <span className='servicedesc'>Easily scale recruitment support for volume, niche, or multi-location hiring needs.</span>
          </div>
        </div>
        <div className='serivcehighlight'>
          <div className='serviceicon'></div>
          <div className='servicepoint'>
            <span className='servicetitle'>Streamlined & Cost-Effective</span> <br></br>
            <span className='servicedesc'>Optimize your hiring process, reduce costs, and improve efficiency through structured RPO solutions.</span>
          </div>
        </div>
        <button className='serviceherobutton'>Get in touch</button>
      </div>
      <div className='serviceimage'></div>
    </div>
    <div className='servicebodydesc'>
      <span className='servicebodynote'>At SakSam Sol, our Recruitment Process Outsourcing (RPO) services provide organizations with a dedicated recruitment team to manage the entire hiring lifecycle efficiently. We offer end-to-end recruitment solutions, including candidate sourcing, screening, assessments, interviews, and onboarding, tailored to your business requirements. Our RPO model is scalable and flexible, making it ideal for organizations experiencing high-volume hiring, rapid expansion, or multi-location operations. By leveraging our industry expertise, structured processes, and technology-driven recruitment tools, we deliver high-quality candidates quickly while reducing recruitment costs and administrative burdens. With SakSam Sol, you gain consistent, reliable, and transparent hiring support, allowing your HR team to focus on strategic initiatives while we handle the operational aspects of recruitment.</span>
    </div>
    <div className='serviceadvantages'>
      <div className='advantageimagesection'>
        <span className='advantagetitle'>Advantages</span> <br></br>
        <span className='advantagedesc'>Our RPO services streamline your hiring process, deliver quality candidates at scale, and provide cost-effective, end-to-end recruitment support tailored to your business needs.</span><br></br>
        <span className='advantageimage'></span>
      </div>
      <div className='advantagepoint'>
        <div className='aboutrow'>
          <ul className='abouthighlight'>
            <li className='highlightnum'>1.</li>
            <li className='highlightheading'>End-to-End Recruitment Support</li>
            <li className='highlightdesc'>Manage the complete hiring lifecycle from sourcing to onboarding efficiently.</li>
          </ul>
          <ul className='abouthighlight'>
            <li className='highlightnum'>2.</li>
            <li className='highlightheading'>Dedicated Recruitment Team</li>
            <li className='highlightdesc'>A team exclusively focused on your hiring needs for better quality and faster results.</li>
          </ul>
        </div>
         <div className='aboutrow'>
          <ul className='abouthighlight'>
            <li className='highlightnum'>3.</li>
            <li className='highlightheading'>Scalable & Flexible Solutions</li>
            <li className='highlightdesc'>Adjust recruitment resources as per volume, location, or specialized role requirements.</li>
          </ul>
          <ul className='abouthighlight'>
            <li className='highlightnum'>4.</li>
            <li className='highlightheading'>Cost-Effective Hiring</li>
            <li className='highlightdesc'>Reduce recruitment costs while maintaining high-quality candidate delivery and compliance.</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='knowmoreaboutus'>
      <div className='knowmoreinfo'>
        <span className='knowmoretitle'>Know more About us</span><br></br>
        <span className='knowmoredesc'>Lorem ipsum dolor sit amet consectetur. Fermentum dolor mauris amet congue egestas. Sodales eu turpis lacus etiam. Aliquam feugiat sit vitae pharetra. Est odio at lacus elit nunc amet mi. Pulvinar sed mi.</span><br></br>
        <button className='knowmorebutton'>Know More</button>
      </div>
      <div className='knowmorepoints'>
        <div className='knowmorerow'>
          <div className='knowmorepoint'>
            <span className='pointheading'>£399</span> <br></br>
            <span className='pointdesc'>Annual salary for the position</span>
          </div>
          <div className='knowmorepoint'>
            <span className='pointheading'>10</span> <br></br>
            <span className='pointdesc'>People do you require</span>
          </div>
        </div>
        <div className='knowmorerow'>
          <div className='knowmorepoint1'>
            <span className='pointheading'>£1000</span> <br></br>
            <span className='pointdesc'>Recruitment Agency Fees</span>
          </div>
          <div className='knowmorepoint2'>
            <span className='pointheading'>£299</span> <br></br>
            <span className='pointdesc'>Talent Finder Fees</span>
          </div>
        </div>
      </div>
    </div>
    <div className='relatedservices'>
      <div className='relateddesc'>Choose a Service that works best for you</div>
      <div className='bottomservices'>
        <div className='founder1'>
          <span className='relatedservicetitle'>Contract Staffing</span>
          <ul className='relatedservicepoints'>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Rutrum bibendum laoreet dictum turpis.</li>
            <li>Non faucibus maecenas rhoncus pellentesque lacinia pellentesque purus quis vitae</li>
          </ul>
          <button className='knowmorebutton'>Get Started</button>
        </div>
        <div className='founder2'>
          <span className='relatedservicetitle'>Permenant Staffing</span>
          <ul className='relatedservicepoints1'>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Rutrum bibendum laoreet dictum turpis. </li>
            <li>Non faucibus maecenas rhoncus pellentesque lacinia pellentesque purus quis vitae. </li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Rutrum bibendum laoreet dictum turpis.</li>
          </ul>
          <button className='knowmorebutton1'>Get Started</button>
        </div>
        <div className='founder1'>
          <span className='relatedservicetitle'>RPO</span>
          <ul className='relatedservicepoints'>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Rutrum bibendum laoreet dictum turpis.</li>
            <li>Non faucibus maecenas rhoncus pellentesque lacinia pellentesque purus quis vitae</li>
          </ul>
          <button className='knowmorebutton'>Get Started</button>
        </div>
      </div>
    </div>
  </div>;
};

export default RecruitmentProcess;
