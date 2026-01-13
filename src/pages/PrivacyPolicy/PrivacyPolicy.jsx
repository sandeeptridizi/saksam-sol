import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return <div>
    <div className='background'>
      <div className='textlayer'>
        <div className='policytext'>
          Privacy Policy 
          <div className='introduction'>
          <span> Introduction</span> <br></br>
          <span className='privacybrief'>This Privacy Policy describes how JobsNextDoor from Taskify collects, uses, and protects the personal information you provide when joining our job seeker network. We are committed to ensuring your privacy and handling your data with care and respect.</span>
          </div>
          <div className='introduction'>
          <span> Information We Collect</span> <br></br>
          <span className='privacybrief'>We collect the following types of information:</span>
          <ul className='privacynotes'>
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Professional information (resume, work experience, skills, education)</li>
            <li>Job preferences and career goals</li>
            <li>Any other information you voluntarily provide in the application form</li>
          </ul>
          </div>
          <div className='introduction'>
          <span> How We Use Your Information</span> <br></br>
          <span className='privacybrief'>We use your information to:</span>
          <ul className='privacynotes'>
            <li>Match you with relevant job opportunities</li>
            <li>Communicate with you about potential positions</li>
            <li>Share your profile with potential employers (with your consent)</li>
            <li>Provide career guidance and support services</li>
            <li>Improve our services and understand our network members needs</li>
          </ul>
          </div>
          <div className='introduction'>
          <span> Information Sharing</span> <br></br>
          <span className='privacybrief'>We may share your information with:</span>
          <ul className='privacynotes'>
            <li>Potential employers who have job opportunities matching your profile</li>
            <li>Service providers who assist us in operating our network</li>
            <li>Legal authorities when required by law</li>
          </ul>
          <span className='privacybrief'>We will never sell your personal information to third parties for marketing purposes.</span>
          </div>
          <div className='introduction'>
          <span> Data Security</span> <br></br>
          <span className='privacybrief'>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</span>
          </div>
          <div className='introduction'>
          <span> Your Rights</span> <br></br>
          <span className='privacybrief'>You have the right to:</span>
          <ul className='privacynotes'>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of receiving communications from us</li>
            <li>Withdraw consent for us to share your information with employers</li>
          </ul>
          </div>
          <div className='introduction'>
          <span> Data Retention</span> <br></br>
          <span className='privacybrief'>We will retain your information for as long as you remain an active member of our network or as needed to provide you with our services. If you wish to be removed from our network, please contact us and we will delete your information within 30 days.</span>
          </div>
          <div className='introduction'>
          <span> Changes to This Policy</span> <br></br>
          <span className='privacybrief'>We may update this Privacy Policy from time to time. We will notify you of any significant changes by email or through our website. The latest version will always be available on this page.</span>
          </div> 
          <div className='bottomline'></div>
          <div className='finalnote'>Last updated: October 31, 2025</div> 
        </div>
      </div>
    </div>
  </div>;
};

export default PrivacyPolicy;
