import React from 'react';

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha email válido.',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A Senha precisa ter 1 caracter minusculo, 1 caracter minúsculo e 1 digito. Com no mínimo 8 caracteres.',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize número apenas',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  const validate = (value) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha algum valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;