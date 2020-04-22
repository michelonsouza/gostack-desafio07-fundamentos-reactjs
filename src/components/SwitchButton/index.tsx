import React, { useMemo } from 'react';

import { Button } from './styles';

interface Props {
  value: string;
  checked: string;
  unChecked: string;
  toogleTheme(value: string): void;
}

const SwitchButton: React.FC<Props> = ({
  value,
  checked,
  unChecked,
  toogleTheme,
}) => {
  const active = useMemo(() => {
    return value === checked;
  }, [value, checked]);

  function handleChange(): void {
    const theme = value === checked ? unChecked : checked;
    toogleTheme(theme);
  }

  return (
    <Button active={active} onClick={handleChange}>
      <span className="dash" />
      <span className="circle" />
    </Button>
  );
};

export default SwitchButton;
