import Accordion from '../../components/Accordion/Accordion';
import useAppContext from '../../context/AppContext';
import './CareersPage.css';

import career from '../../assets/career.png';

const CareersPage = () => {
  const { faqsData, handleAccordion } = useAppContext();

  return (
    <div>
      <div className='careerhero'>
        <div className='careerbackground'>
          <div className='careerbanner'>
            <img src={career} alt='career image' className='career-img' />
            <div className='careersearchbanner'>
              <div className='searchbar'> Search for Jobs </div>
              <ul className='searchfilters'>
                <li>
                  <span className='filtertitle'>Experience Level</span>{' '}
                  <br></br>
                  <span className='filteroption'> All Experience Level</span>
                </li>

                <li>
                  <span className='filtertitle'>Location</span> <br></br>
                  <span className='filteroption'> All Locations</span>
                </li>

                <li>
                  <span className='filtertitle'>Categories</span> <br></br>
                  <span className='filteroption'> All Categories</span>
                </li>

                <li>
                  <button className='viewjobs'>View Jobs</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='jobs'>
          <div className='jobslist'>
            <div className='singlejob'>
              <div className='jobtitleinfo'>
                <span className='jobtitle'>Full Stack Developer</span>
                <button className='Applynow'>Apply Now</button>
              </div>
              <ul className='jobtypes'>
                <li className='jobcat'>Mid-Level</li>
                <li className='jobcat'>Chennai</li>
                <li className='jobcat'>Madhurai</li>
              </ul>
              <span className='jobdesc'>
                {' '}
                Primary Responsibility:Designing and implementing user
                interfaces using HTML, CSS, and JavaScript frameworks like React
                or Angular. Building and maintaining server-side application
                logic, databases....
              </span>
            </div>
            <div className='singlejob1'>
              <div className='jobtitleinfo'>
                <span className='jobtitle'>React Developer</span>
                <button className='Applynow'>Apply Now</button>
              </div>
              <ul className='jobtypes'>
                <li className='jobcat'>Mid-Level</li>
                <li className='jobcat'>Chennai</li>
                <li className='jobcat'>Madhurai</li>
              </ul>
              <span className='jobdesc'>
                {' '}
                Primary Responsibility:Designing and implementing user
                interfaces using HTML, CSS, and JavaScript frameworks like React
                or Angular. Building and maintaining server-side application
                logic, databases....
              </span>
            </div>
            <div className='singlejob1'>
              <div className='jobtitleinfo'>
                <span className='jobtitle'>Flutter Developer</span>
                <button className='Applynow'>Apply Now</button>
              </div>
              <ul className='jobtypes'>
                <li className='jobcat'>Mid-Level</li>
                <li className='jobcat'>Chennai</li>
                <li className='jobcat'>Madhurai</li>
              </ul>
              <span className='jobdesc'>
                {' '}
                Primary Responsibility:Designing and implementing user
                interfaces using HTML, CSS, and JavaScript frameworks like React
                or Angular. Building and maintaining server-side application
                logic, databases....
              </span>
            </div>
            <div className='singlejob1'>
              <div className='jobtitleinfo'>
                <span className='jobtitle'>Php Developer</span>
                <button className='Applynow'>Apply Now</button>
              </div>
              <ul className='jobtypes'>
                <li className='jobcat'>Mid-Level</li>
                <li className='jobcat'>Chennai</li>
                <li className='jobcat'>Madhurai</li>
              </ul>
              <span className='jobdesc'>
                {' '}
                Primary Responsibility:Designing and implementing user
                interfaces using HTML, CSS, and JavaScript frameworks like React
                or Angular. Building and maintaining server-side application
                logic, databases....
              </span>
            </div>
            <div className='singlejob1'>
              <div className='jobtitleinfo'>
                <span className='jobtitle'>MERN Stack Developer</span>
                <button className='Applynow'>Apply Now</button>
              </div>
              <ul className='jobtypes'>
                <li className='jobcat'>Mid-Level</li>
                <li className='jobcat'>Chennai</li>
                <li className='jobcat'>Madhurai</li>
              </ul>
              <span className='jobdesc'>
                {' '}
                Primary Responsibility:Designing and implementing user
                interfaces using HTML, CSS, and JavaScript frameworks like React
                or Angular. Building and maintaining server-side application
                logic, databases....
              </span>
            </div>
          </div>
          <div className='jobsview'>
            <span className='jobviewtitle'>Full Stack Developer</span>
            <ul className='jobviewtypes'>
              <li className='jobcat'>Mid-Level</li>
              <li className='jobcat'>Chennai</li>
              <li className='jobcat'>Madhurai</li>
            </ul>
            <span className='jobdesctitle'>Primary Responsibility:</span>
            <span className='jobdescpara'>
              Designing and implementing user interfaces using HTML, CSS, and
              JavaScript frameworks like React or Angular. Building and
              maintaining server-side application logic, databases and APIs
              using technologies such as Node.js, Python, Ruby, or
              Java.Designing, implementing, and managing databases (SQL or
              NoSQL) to ensure data integrity and efficient retrieval.Using
              version control systems like Git to manage code changes and
              collaborate with other developers.Implementing security best
              practices to protect applications from vulnerabilities and
              threats.Automating deployment processes and managing CI/CD
              pipelines to streamline development and release cycles.Working
              with cross-functional teams, including designers, product
              managers, and other developers, to deliver high-quality software.
            </span>
            <ul className='jobdesctitle'>
              Job Specification:
              <li className='jobdescpara'>
                {' '}
                Proficiency in front-end technologies HTML, CSS, JavaScript
                frameworks like React or Angular.
              </li>
              <li className='jobdescpara'>
                {' '}
                Proficiency in back-end technologies Node.js, Python, Ruby,
                Java, etc.
              </li>
              <li className='jobdescpara'>
                {' '}
                Experience in designing and managing databases (SQL and NoSQL)
              </li>
              <li className='jobdescpara'>
                {' '}
                Proficiency in schema design and query optimization.
              </li>
              <li className='jobdescpara'>
                {' '}
                Strong knowledge of version control systems, particularly Git.
              </li>
              <li className='jobdescpara'>
                {' '}
                Expertise in managing and collaborating on code repositories.
              </li>
              <li className='jobdescpara'>
                {' '}
                Knowledge of web security best practices.
              </li>
              <li className='jobdescpara'>
                {' '}
                Experience with performance optimization techniques.
              </li>
              <li className='jobdescpara'>
                {' '}
                Excellent collaboration skills for working effectively in a team
                environment
              </li>
              <li className='jobdescpara'>
                {' '}
                Ability to communicate technical concepts to non-technical
                stakeholders.
              </li>
            </ul>
            <div className='jobcatsection'>
              <span className='jobcattitle'>Employment Type:</span> <br></br>
              <span className='jobcatoption'>Full-time</span>{' '}
            </div>
            <div className='jobcatsection'>
              <span className='jobcattitle'>Work place Type:</span> <br></br>
              <span className='jobcatoption'>Hybrid</span>{' '}
            </div>
            <div className='jobcatsection'>
              <span className='jobcattitle'>Salary:</span> <br></br>
              <span className='jobcatoption'>
                Commensurate with experience and skills
              </span>{' '}
            </div>
            <div className='jobcatsection'>
              <span className='jobcattitle'>Experience Required:</span>{' '}
              <br></br>
              <span className='jobcatoption'>Minimum 3 Years</span>{' '}
            </div>
            <div className='jobcatsection'>
              <span className='jobcattitle'>Job Location:</span> <br></br>
              <span className='jobcatoption'>
                Chennai, Madurai, coimbatore
              </span>{' '}
            </div>
            <button className='jobApplynow'>Apply Now</button>
          </div>
        </div>
      </div>
      <div className='career-page-faqs-container'>
        <div className='career-page-faqs'>
          {faqsData.map((item) => (
            <Accordion
              key={item.id}
              {...item}
              handleAccordion={handleAccordion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
