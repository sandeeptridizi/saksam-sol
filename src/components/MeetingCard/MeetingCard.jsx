import './MeetingCard.css';

const MeetingCard = ({ image, name, role, text }) => {
  return (
    <div className='meeting-card-container'>
      <img src={image} alt='avatar' className='avatar' />
      <div className='meeting-card-gradient-container'>
        <div className='meeting-card-header'>
          <h3 className='meeting-card-heading'>{name}</h3>
          <p className='meeting-card-role'>{role}</p>
        </div>
        <p className='meeting-card-text'>{text}</p>
      </div>
    </div>
  );
};

export default MeetingCard;
