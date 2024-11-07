import {InputText} from '../Inputs/InputText';
import {InputRadio} from '../Inputs/InputRadio';

export function Signup() {
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
      <form
      onSubmit={handleSubmit}
      className="col-3">
        <div className="row align-self-center">
          <InputText type="text " label="Name" placeholder="Введите имя" />
        </div>
        <div className="row align-self-center">
          <InputText type="text " label="Nickname" placeholder="Введите ник" />
        </div>
        <div className="row align-self-center">
          <InputText type="email " label="Email" placeholder="Введите почту" />
        </div>
        <div className="row align-self-center">
          <InputRadio/>
        </div>
        <div className="row align-self-center">
          <InputText type="password " label="Password" placeholder="Введите пароль" />
        </div>
        <div className="row align-self-center">
          <InputText type="password " label="Repeat password" placeholder="Повторите пароль" />
        </div>
        <div className="row align-self-center">
        <button className="btn btn-outline-primary mt-4" type="submit">Зарегистрироваться</button>
        </div>
      </form>
    );
  }