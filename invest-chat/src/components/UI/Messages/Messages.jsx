import React from 'react';
import Message from './Message';

const Messages = () => {
  return (
    <div className='chat__messages'>
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages;