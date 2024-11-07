import { useState, useRef } from 'react';
import { InputText } from '../Inputs/InputText';
import { InputRadio } from '../Inputs/InputRadio';

export function Signup() {
    const formRef = useRef(null)
    const [values, setValues] = useState(
      {
        Name: '',
        Nickname: '',
        Email: '',
        Password: '',
        RepeatPassword: '',
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
      className="col-3">
        <div className="row align-self-center">
          <InputText name="Name" value={values.Name} type="text" label="Name" placeholder="Введите имя" description="Name" error="Неккоретное имя" radius="3" size="md"/>
        </div>
        <div className="row align-self-center">
          <InputText name="Nickname" value={values.Nickname} type="text" label="Nickname" placeholder="Введите ник" description="Nickname" error="Неккоретный ник" radius="3" size ="md"/>
        </div>
        <div className="row align-self-center">
          <InputText name="Email" value={values.Email} type="email" label="Email" placeholder="Введите почту" description="Email" error="Неккоретный Email" radius="3" size ="md"/>
        </div>
        <div className="row align-self-center mt-4">
          <InputRadio/>
        </div>
        <div className="row align-self-center">
          <InputText name="Password" value={values.Password} type="password" label="Password" placeholder="Введите пароль" description="Password" error="Неккоретный Password" radius="3" size ="md"/>
        </div>
        <div className="row align-self-center">
          <InputText name="RepeatPassword" value={values.RepeatPassword} type="password" label="Repeat password" placeholder="Повторите пароль" description="Repeat password" radius="3" error="Неккоретный Password" size ="md"/>
        </div>
        <div className="row align-self-center">
        <button className="btn btn-outline-primary mt-4" type="submit">Зарегистрироваться</button>
        </div>
      </form>
    );
  }