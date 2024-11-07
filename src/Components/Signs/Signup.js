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
          <InputText type="text" label="Name" placeholder="Введите имя" description="Name" error="Неккоретное имя" radius="3" size="md"/>
        </div>
        <div className="row align-self-center">
          <InputText type="text" label="Nickname" placeholder="Введите ник" description="Nickname" error="Неккоретный ник" radius="3" size ="md"/>
        </div>
        <div className="row align-self-center">
          <InputText type="email" label="Email" placeholder="Введите почту" description="Email" error="Неккоретный Email" radius="3" size ="md"/>
        </div>
        <div className="row align-self-center mt-4">
          <InputRadio/>
        </div>
        <div className="row align-self-center">
          <InputText type="password" label="Password" placeholder="Введите пароль" description="Password" error="Неккоретный Password" radius="3" size ="md"/>
        </div>
        <div className="row align-self-center">
          <InputText type="password" label="Repeat password" placeholder="Повторите пароль" description="Repeat password" radius="3" error="Неккоретный Password" size ="md"/>
        </div>
        <div className="row align-self-center">
        <button className="btn btn-outline-primary mt-4" type="submit">Зарегистрироваться</button>
        </div>
      </form>
    );
  }