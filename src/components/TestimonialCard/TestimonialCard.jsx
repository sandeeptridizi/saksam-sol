import './TestimonialCard.css';

const TestimonialCard = ({ text, name, role, logo }) => {
  return (
    <div className='testimonial-card-container'>
      <p className='testimonial-card-text'>{text}</p>
      <div className='testimonial-card-role-logo-container'>
        <p className='testimonial-role'>
          {name} - {role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
