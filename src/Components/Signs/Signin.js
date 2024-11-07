import {InputText} from '../Inputs/InputText';

export function Signin() {
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
      <form 
      onSubmit={handleSubmit}
      className="col-4">
        <div className="row align-self-center">
          <InputText type="email" label="Email" placeholder="Введите email" description="Email" error="Неккоретный Email" radius="3" size="md" withAsterisk="true"/>
        </div>
        <div className="row align-self-center">
          <InputText type="password" label="Password" placeholder="Введите пароль" description="Password" error="Неккоретный Password" radius="3" size="md" withAsterisk="true"/>
        </div>
        <div className="row align-self-center">
        <button className="btn btn-outline-primary mt-4" type="submit">Войти</button>
        </div>
      </form>
    );
  }