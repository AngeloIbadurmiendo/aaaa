import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatedTask } from "../../redux/actionRedux/task";

const FormTask = ({ ...props }) => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState(props.taskName);
  const [date, setDate] = useState(props.date);
  const [taskType, setTaskType] = useState(props.taskType);
  const [serialNumber, setSerialNumber] = useState(props.serialNumber);
  const [mechanic, setMechanic] = useState(props.mechanic);
  const [description, setDescription] = useState(props.description);
  const [status, setStatus] = useState(props.status);
  const [priority, setPriority] = useState(props.priority);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = {
      taskName,
      date,
      taskType,
      serialNumber,
      mechanic,
      description,
      status,
      priority
    };
    dispatch(updatedTask(props.id, updatedData));
    props.funcion(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="w-full">Nombre de Tarea</label>
          <input
            className="border w-full"
            type="text"
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
          />
          <label className="w-full">Fecha</label>
          <input
            className="border w-full"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <label className="w-full">Tipo de Tarea</label>
          <input
            className="border w-full"
            type="text"
            value={taskType}
            onChange={(event) => setTaskType(event.target.value)}
          />
          <label className="w-full">Número de Serie</label>
          <input
            className="border w-full"
            type="text"
            value={serialNumber}
            onChange={(event) => setSerialNumber(event.target.value)}
          />
          <label className="w-full">Mecánico</label>
          <input
            className="border w-full"
            type="text"
            value={mechanic}
            onChange={(event) => setMechanic(event.target.value)}
          />
          <label className="w-full">Descripción</label>
          <input
            className="border w-full"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <label className="w-full">Estado</label>
          <input
            className="border w-full"
            type="text"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
          <label className="w-full">Prioridad</label>
          <input
            className="border w-full"
            type="text"
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
          />
        </div>
        <div className="flex justify-end pt-2">
          <button className="bg-black text-white rounded p-2" type="submit">
            Editar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTask;
