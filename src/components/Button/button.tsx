import React from 'react';

interface buttonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = (props: buttonProps) => {
  const { onClick, children } = props;
  return (
    <button type="button" data-testid="button" onClick={onClick}>
      {children}
    </button>
  );
};
