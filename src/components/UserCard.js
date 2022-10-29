import React from 'react';
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

const UserCard = ({ user }) => {
  const userInitial = user.name[0];

  return (
    <div className='user-wrapper'>
      <div className='user-avatar'>
        <p>{userInitial}</p>
        {/* <div ref={componentRef}>
          <p>width: {width}px</p>
          <p>height: {height}px</p>
        </div> */}
      </div>
      <div className='user-info'>
        <div className='user-name'>
          <p>{user.name}</p>
        </div>
        <div className='user-contact '>
          <PhoneEnabledRoundedIcon />
          <p>{user.phone}</p>
        </div>
        <div className='user-contact'>
          <MailRoundedIcon />
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
