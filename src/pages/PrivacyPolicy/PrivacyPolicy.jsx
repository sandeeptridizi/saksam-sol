import { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
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
                At SakSam Sol (“we,” “our,” or “us”), your privacy is important
                to us. This Privacy Policy explains how we collect, use, store,
                and protect your personal information when you visit our website
                or use our services. By using our website or services, you agree
                to the terms outlined below.
              </span>
            </div>
            <div className='introduction'>
              <span> Information We Collect</span> <br></br>
              <span className='privacybrief'>
                We may collect the following types of information from users:
              </span>
              <ul className='privacynotes'>
                <li>
                  Personal Information: Name, email address, phone number,
                  company name, job title, and other details submitted via
                  contact forms or service inquiries.
                </li>
                <li>
                  Professional Information: Resume, work experience, skills, and
                  other employment-related information if you apply for jobs or
                  services through our site.
                </li>
                <li>
                  Usage Data: IP address, browser type, pages visited, time
                  spent on pages, and other analytics data collected
                  automatically via cookies or tracking tools.
                </li>
              </ul>
            </div>
            <div className='introduction'>
              <span> How We Use Your Information</span> <br></br>
              <span className='privacybrief'>We use your information to:</span>
              <ul className='privacynotes'>
                <li>
                  Provide and manage our staffing, payroll, RPO, and recruitment
                  services.
                </li>
                <li>
                  Respond to inquiries, applications, and service requests.
                </li>
                <li>
                  Improve website functionality, user experience, and content.
                </li>
                <li>
                  Send updates, newsletters, and promotional communications
                  (only if you opt-in).
                </li>
                <li>Comply with legal and regulatory requirements.</li>
              </ul>
            </div>
            <div className='introduction'>
              <span> Cookies and Tracking Technologies</span> <br></br>
              <span className='privacybrief'>
                We use cookies and similar technologies to:
              </span>
              <ul className='privacynotes'>
                <li>Track website performance and user behavior.</li>
                <li>Enhance user experience and site functionality.</li>
                <li>
                  Deliver relevant content and targeted communication. You can
                  disable cookies via your browser settings; however, some
                  website features may not function properly.
                </li>
              </ul>
            </div>
            <div className='introduction'>
              <span> Data Sharing and Disclosure</span> <br></br>
              <span className='privacybrief'>
                We do not sell or rent your personal information to third
                parties. We may share your data with:
              </span>
              <ul className='privacynotes'>
                <li>
                  Service providers or partners assisting us in providing
                  staffing and recruitment services.
                </li>
                <li>
                  Legal authorities if required by law or to protect our rights
                  and safety.
                </li>
              </ul>
            </div>
            <div className='introduction'>
              <span> Data Security</span> <br></br>
              <span className='privacybrief'>
                We implement appropriate technical and organizational measures
                to protect your personal information from unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the internet or electronic storage is 100%
                secure.
              </span>
            </div>
            <div className='introduction'>
              <span> Your Rights</span> <br></br>
              <span className='privacybrief'>You have the right to:</span>
              <ul className='privacynotes'>
                <li>Access, update, or correct your personal information</li>
                <li>
                  Request deletion of your data, subject to legal or contractual
                  obligations.
                </li>
                <li>Opt-out of promotional communications at any time.</li>
              </ul>
              <span className='privacybrief'>
                To exercise your rights, please contact us at
                info@saksamsol.com.
              </span>
            </div>
            <div className='introduction'>
              <span> Third-Party Links</span> <br></br>
              <span className='privacybrief'>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                external sites.
              </span>
            </div>
            <div className='introduction'>
              <span> Changes to This Policy</span> <br></br>
              <span className='privacybrief'>
                We may update this Privacy Policy from time to time. The updated
                policy will be posted on this page with the effective date. We
                encourage you to review this page periodically for changes.
              </span>
            </div>
            <div className='introduction'>
              <span> Contact Us</span> <br></br>
              <span className='privacybrief'>
                If you have any questions about this Privacy Policy or how your
                information is used, please contact us:
              </span>
              <ul className='privacynotes'>
                <li>Saksam Sol</li>
                <li>Email: info@saksamsol.com</li>
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

export default PrivacyPolicy;
