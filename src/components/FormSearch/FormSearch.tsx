import React, { useState } from 'react';
import type { FunctionComponent, FormEvent } from 'react';

import styles from '@/components/FormSearch/FormSearch.scss';
import UsersIcon from '@/components/icons/UsersIcon';

export interface FormSearchProps {
  labelText: string;
  nameButton: string;
  onSubmit: (text: string) => void;
}

const FormSearch: FunctionComponent<FormSearchProps> = ({
  labelText,
  nameButton,
  onSubmit,
}): JSX.Element => {
  const [formState, setUsername] = useState<string>('');

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsername('');
    return onSubmit(formState);
  };

  return (
    <div className={styles['form-container']}>
      <span className={styles['form-text']}>{labelText}</span>
      <form className={styles['form']} onSubmit={handleSubmit}>
        <span className={styles['icon']}>
          <UsersIcon />
        </span>
        <input className={styles['form-input']} value={formState} onChange={onChange} type="text" />
        <button disabled={formState.trim() === ''} className={styles['form-button']} type="submit">
          {nameButton}
        </button>
      </form>
    </div>
  );
};

export default FormSearch;
