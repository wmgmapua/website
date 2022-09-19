import React from 'react';
import s from '../scss/components/wmg-button.module.scss';

interface WMGButtonProps {
  label?: string;
  icon?: React.ReactElement|string;
  type?: string;
  link?: string;
  onClick?: React.MouseEventHandler | (() => React.MouseEventHandler|void);
  isDisabled?: boolean;
}

const WMGButton: React.FC<WMGButtonProps> = ({label, icon, type, link, onClick, isDisabled, children}) => {
  const ButtonBase = (
    <>
      {icon && <i className={s['wmg-button__icon']}>{icon}</i>}
      {children && <span className={s['wmg-button__label']}>{children}</span>}
    </>
  );

  const _assertType = (types: string): string => {
    const _finalTypes: string[] = [];
    types.split(' ').forEach((type: string) => {
      _finalTypes.push(`is-${type}`);
    });
    return _finalTypes.join(' ');
  }

  if (!link) {
    return (
      <button aria-label={label} role="button" className={`${s['wmg-button']}${type ? ' ' + _assertType(type) : ''}`} onClick={onClick} disabled={isDisabled}>
        {ButtonBase}
      </button>
    );
  }

  return (
    <a aria-label={label} href={link} role="link" className={`${s['wmg-button']}${type ? ' ' + _assertType(type) : ''}`} rel="noreferrer">
      {ButtonBase}
    </a>
  );
};

export default WMGButton;