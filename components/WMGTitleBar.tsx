import React from 'react';

type TitleBarElementType = 'h1' | 'h2' | 'h3';

interface WMGTitleBarProps {
  as?: TitleBarElementType;
  children?: React.ReactNode;
}

const WMGTitleBar: React.FC<WMGTitleBarProps> = ({ as = 'h1', children }) => {
  const sizeMapping: Record<TitleBarElementType, string> = {
    h1: 'xl',
    h2: 'lg',
    h3: 'md',
  };
  return React.createElement(as, {
    className: `wmg-title-bar is-${sizeMapping[as]} weight-black`
  }, children);
};

export default WMGTitleBar;