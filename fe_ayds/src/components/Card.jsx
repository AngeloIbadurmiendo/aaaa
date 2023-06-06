import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import FormTask from "../views/Forms/FormTask";

const Card = ({ data, dlteTask }) => {
  const { id, taskName, date, taskType, serialNumber, mechanic, description, status, priority } = data;
  const [valor, setValor] = useState(false);
  return (
    <div>
      <div className="flex justify-around h-16 shadow rounded bg-magnolia">
        <div className="flex items-center w-1/4 px-4">{id}</div>
        <div className="w-1/4 p-5">{taskName}</div>
        <div className="w-1/4 p-5">{date}</div>
        <div className="w-1/4 p-5">{taskType}</div>
        <div className="w-1/4 p-5">{serialNumber}</div>
        <div className="w-1/4 p-5">{mechanic}</div>
        <div className="w-1/2 p-5">{description}</div>
        <div className="w-1/4 p-5">{status}</div>
        <div className="w-1/4 p-5">{priority}</div>
        <div className="flex w-1/4 items-center justify-end p-7">
          <div className="px-3">
            <button
              className="pointer hover:bg-black hover:text-white w-24 h-8 rounded"
              onClick={() => setValor(true)}
            >
              editar
            </button>
          </div>
          <div className="px-3">
            <button
              className="pointer bg-red hover:bg-red-300 text-white w-24 h-8 rounded"
              onClick={() => dlteTask(id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
      <Modal isValidate={valor} title={taskType} id={id} funcion={setValor}>
        <FormTask
          id={id}
          taskName={taskName}
          date={date}
          taskType={taskType}
          serialNumber={serialNumber}
          mechanic={mechanic}
          description={description}
          status={status}
          priority={priority}
          funcion={setValor}
        />
      </Modal>
    </div>
  );
};

export default Card;
