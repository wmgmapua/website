import React from 'react';
import Link from 'next/link';

interface WMGButtonProps {
  label?: string;
  icon?: React.ReactElement|string;
  type?: string;
  link?: string;
  onClick?: React.MouseEventHandler|(() => React.MouseEventHandler|void);
  isDisabled?: boolean;
  children?: React.ReactNode;
}

const WMGButton: React.FC<WMGButtonProps> = ({label, icon, type, link, onClick, isDisabled, children}) => {

  const _assertType = (types: string): string => {
    const _finalTypes: string[] = [];
    types.split(' ').forEach((type: string) => {
      _finalTypes.push(`is-${type}`);
    });
    return _finalTypes.join(' ');
  }

  const ButtonBase = (
    <>
      {icon && <i className="wmg-button__icon">{icon}</i>}
      {children && <span className="wmg-button__label">{children}</span>}
    </>
  );

  if (!link) {
    return (
      <button aria-label={label} role="button" className={`wmg-button${type ? ' ' + _assertType(type) : ''}`} onClick={onClick} disabled={isDisabled}>
        {ButtonBase}
      </button>
    );
  }

  return (
    <Link href={link} passHref>
      <a aria-label={label} role="link" className={`wmg-button${type ? ' ' + _assertType(type) : ''}`} target={ link.charAt(0) !== '/' ? '_blank' : '_self' }>
        {ButtonBase}
      </a>
    </Link>
  );
};

export default WMGButton;