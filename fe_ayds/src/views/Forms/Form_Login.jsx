import Button from "../../components/Button";
import Input from "../../components/Input";

const Form = () => {
  return (
    <div>
      <Input label={"email"} type={"email"} />
      <Input label={"contraseña"} type={"password"} />
      <Button name={"Ingresar"} />
    </div>
  );
};

export default Form;
