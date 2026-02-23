import { useEffect } from 'react';
import './TermsConditions.css';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className='background'>
        <div className='textlayer'>
          <div className='policytext'>
            Effective Date: January 2026
            <div className='introduction'>
              <span> Introduction</span> <br></br>
              <span className='privacybrief'>
                Welcome to Saksam Sol (“we,” “our,” or “us”). By accessing or
                using our website (www.Saksamsol.com ) or our services, you
                agree to comply with and be bound by the following Terms &
                Conditions. Please read them carefully.
              </span>
            </div>
            <div className='introduction'>
              <span> Use of Website</span> <br></br>
              <ul className='privacynotes'>
                <li>You may use this website for lawful purposes only.</li>
                <li>
                  You agree not to use the website in a way that violates any
                  applicable laws or regulations.
                </li>
                <li>
                  Unauthorized access, misuse, or interference with the website
                  is strictly prohibited.
                </li>
              </ul>
            </div>
            <div className='introduction'>
              <span>Services</span> <br></br>
              <ul className='privacynotes'>
                <li>
                  Saksam Sol provides staffing, recruitment, payroll, RPO, bulk
                  hiring, and related services.
                </li>
                <li>
                  We make reasonable efforts to ensure accuracy of information
                  on our website, but we do not guarantee completeness or
                  suitability for a specific purpose.
                </li>
                <li>
                  We reserve the right to modify, suspend, or discontinue
                  services at any time without prior notice.
                </li>
              </ul>
            </div>
            <div className='introduction'>
              <span> User Responsibilities</span> <br></br>
              <ul className='privacynotes'>
                <li>
                  You agree to provide accurate, complete, and up-to-date
                  information when submitting forms, applications, or inquiries.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of any
                  account information and for all activities under your account.
                </li>
                <li>
                  You must not submit content that is illegal, harmful,
                  offensive, or infringes the rights of others.
                </li>
              </ul>
            </div>
            <div className='introduction'>
              <span> Intellectual Property</span> <br></br>
              <ul className='privacynotes'>
                <li>
                  All content on this website, including text, images, logos,
                  graphics, and software, is the property of Saksam Sol or its
                  licensors.
                </li>
                <li>
                  You may not copy, reproduce, or distribute any content without
                  our prior written permission.
                </li>
              </ul>
            </div>
            <div className='introduction'>
              <span> Limitation of Liability</span> <br></br>
              <ul className='privacynotes'>
                <li>
                  Saksam Sol is not liable for any direct, indirect, incidental,
                  or consequential damages arising from the use of our website
                  or services.
                </li>
                <li>
                  We do not guarantee uninterrupted access, error-free
                  operation, or accuracy of third-party content.
                </li>
              </ul>
            </div>
            <div className='introduction'>
              <span> Third-Party Links</span> <br></br>
              <ul className='privacynotes'>
                <li>Our website may contain links to third-party websites.</li>
                <li>
                  We do not endorse or assume responsibility for the content,
                  privacy, or practices of these external sites.
                </li>
              </ul>
            </div>
            <div className='introduction'>
              <span> Privacy</span> <br></br>
              <span className='privacybrief'>
                Your use of the website is also governed by our Privacy Policy,
                which explains how we collect, use, and protect your personal
                information.
              </span>
            </div>
            <div className='introduction'>
              <span> Governing Law</span> <br></br>
              <ul className='privacynotes'>
                <li>
                  These Terms & Conditions are governed by the laws of India.
                </li>
                <li>
                  Any disputes arising from the use of this website or services
                  shall be subject to the exclusive jurisdiction of the courts
                  in Hyderabad, India.
                </li>
              </ul>
            </div>
            <div className='introduction'>
              <span> Changes to Terms & Conditions</span> <br></br>
              <ul className='privacynotes'>
                <li>
                  We may update these Terms & Conditions from time to time.
                </li>
                <li>
                  Changes will be posted on this page with the effective date.
                  Continued use of the website constitutes acceptance of the
                  updated terms.
                </li>
              </ul>
            </div>
            <div className='introduction'>
              <span> Contact Us</span> <br></br>
              <span className='privacybrief'>
                If you have questions regarding these Terms & Conditions, please
                contact us:
              </span>
              <ul className='privacynotes'>
                <li>Saksam Sol</li>
                <li>Email: info@Saksamsol.com</li>
                <li>Phone: +91 9398906639</li>
                <li>Address: Nallagandla, Hyderabad, India</li>
              </ul>
            </div>
            <div className='bottomline'></div>
            <div className='finalnote'>Last updated: January, 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
