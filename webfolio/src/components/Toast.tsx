import '../styles/Toast.css';

import React, { FC } from 'react';

interface ToastProps {
  message: string;
}

const Toast: FC<ToastProps> = ({ message}) => {
  return (
    <div className="success__message">
      {message}
    </div>
  );
};

export default Toast;
