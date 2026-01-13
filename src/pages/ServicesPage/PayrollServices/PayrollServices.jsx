import './PayrollServices.css';

const PayrollServices = () => {
  return <div>
    <div className='servicehero'>
      <div className='serviceheronotes'>
        <h1 className='serviceherotitle'>Payroll Services</h1>
        <div className='serivcehighlight'>
          <div className='serviceicon'></div>
          <div className='servicepoint'>
            <span className='servicetitle'>Accurate & Timely Payroll</span> <br></br>
            <span className='servicedesc'>Ensure your employees are paid correctly and on time, every time.</span>
          </div>
        </div>
        <div className='serivcehighlight'>
          <div className='serviceicon'></div>
          <div className='servicepoint'>
            <span className='servicetitle'>Compliance Made Easy</span> <br></br>
            <span className='servicedesc'>We manage all statutory regulations, taxes, and reporting obligations.</span>
          </div>
        </div>
        <div className='serivcehighlight'>
          <div className='serviceicon'></div>
          <div className='servicepoint'>
            <span className='servicetitle'>Hassle-Free Payroll Management</span> <br></br>
            <span className='servicedesc'>Focus on your business while we handle payroll processing, documentation, and records.</span>
          </div>
        </div>
        <button className='serviceherobutton'>Get in touch</button>
      </div>
      <div className='serviceimage'></div>
    </div>
    <div className='servicebodydesc'>
      <span className='servicebodynote'>At SakSam Sol, our Payroll Services are designed to simplify and streamline your payroll management, ensuring accuracy, compliance, and efficiency. We handle salary calculations, statutory deductions, tax filings, and employee records for organizations of all sizes. Our team ensures that employees are paid on time, every time, while keeping you compliant with all local and national regulations. By leveraging technology-driven solutions and industry expertise, we reduce errors, save time, and eliminate administrative burdens. Our payroll services are tailored to your organization, whether you have a small team, bulk employees, or multi-location operations. With SakSam Sol, you get transparent, reliable, and end-to-end payroll management that allows you to focus on your core business activities.</span>
    </div>
    <div className='serviceadvantages'>
      <div className='advantageimagesection'>
        <span className='advantagetitle'>Advantages</span> <br></br>
        <span className='advantagedesc'>Our Payroll Services simplify salary processing, ensure compliance, and provide accurate, timely, and hassle-free management for your workforce.</span><br></br>
        <span className='advantageimage'></span>
      </div>
      <div className='advantagepoint'>
        <div className='aboutrow'>
          <ul className='abouthighlight'>
            <li className='highlightnum'>1.</li>
            <li className='highlightheading'>Accurate Salary Processing</li>
            <li className='highlightdesc'>Ensure every employee is paid correctly with error-free payroll calculations.</li>
          </ul>
          <ul className='abouthighlight'>
            <li className='highlightnum'>2.</li>
            <li className='highlightheading'>Regulatory Compliance</li>
            <li className='highlightdesc'>Stay compliant with taxes, statutory deductions, and reporting requirements.</li>
          </ul>
        </div>
         <div className='aboutrow'>
          <ul className='abouthighlight'>
            <li className='highlightnum'>3.</li>
            <li className='highlightheading'>Time & Cost Efficiency</li>
            <li className='highlightdesc'>Reduce administrative workload and operational costs by outsourcing payroll management.</li>
          </ul>
          <ul className='abouthighlight'>
            <li className='highlightnum'>4.</li>
            <li className='highlightheading'>Transparent & Reliable</li>
            <li className='highlightdesc'>Maintain clear records, reports, and communication for all payroll activities.</li>
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

export default PayrollServices;
