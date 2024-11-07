import { useState, useRef } from 'react';
import { InputText } from '../Inputs/InputText';

export function Signin() {
    const formRef = useRef(null)
    const [values, setValues] = useState(
      {
        Email: '',
        Password: ''
      }
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        formRef.current.reset()
    }

    const handleChange = (event) => {
      setValues(prevState =>({
        ...prevState,
        [event.target.name]: event.target.value

      }))
    }

    const handleReset = (event) => {
      setValues({})
    }

    return (
      <form 
        ref={formRef}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onReset={handleReset}
        className="col-4"
      >
        <div className="row align-self-center">
          <InputText name="Email" value={values.Email} type="email" label="Email" placeholder="Введите email" description="Email" error="Неккоретный Email" radius="3" size="md" withAsterisk="true"/>
        </div>
        <div className="row align-self-center">
          <InputText name="Password" value={values.Password} type="password" label="Password" placeholder="Введите пароль" description="Password" error="Неккоретный Password" radius="3" size="md" withAsterisk="true"/>
        </div>
        <div className="row align-self-center">
        <button className="btn btn-outline-primary mt-4" type="submit">Войти</button>
        </div>
      </form>
    );
  }