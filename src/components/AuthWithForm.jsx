import { useState } from 'react';

function AuthWithForm(props) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const handleChange = evt => {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    props.onSubmit(formValue.email, formValue.password);
  };

  return (
    <div className="login">
      <h2 className="login__title">{props.title}</h2>
      <form className="login__form" name={props.name} onSubmit={handleSubmit}>
        <input
          className="login__input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formValue.email}
        />
        <input
          className="login__input"
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={handleChange}
          value={formValue.password}
        />
        <button className="login__button" type="submit">
          {props.textButton}
        </button>
        {props.children}
      </form>
    </div>
  );
}

export default AuthWithForm;
