import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTask } from "../redux/actionRedux/task";

const AddTask = ({ funcion }) => {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");
  const [taskType, setTaskType] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [mechanic, setMechanic] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      taskName,
      date,
      taskType,
      serialNumber,
      mechanic,
      description,
      status,
      priority
    };
    dispatch(postTask(data));
    funcion(false);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <label className="w-full">Nombre de Tarea</label>
        <input className="w-full border" onChange={(event) => setTaskName(event.target.value)} />
        <label className="w-full">Fecha</label>
        <input type="date" className="w-full border" onChange={(event) => setDate(event.target.value)} />
        <label className="w-full">Tipo de Tarea</label>
        <input className="w-full border" onChange={(event) => setTaskType(event.target.value)} />
        <label className="w-full">Número de serie</label>
        <input className="w-full border" onChange={(event) => setSerialNumber(event.target.value)} />
        <label className="w-full">Mecánico</label>
        <input className="w-full border" onChange={(event) => setMechanic(event.target.value)} />
        <label className="w-full">Descripción</label>
        <textarea className="w-full border" onChange={(event) => setDescription(event.target.value)} />
        <label className="w-full">Estado</label>
        <input className="w-full border" onChange={(event) => setStatus(event.target.value)} />
        <label className="w-full">Prioridad</label>
        <input className="w-full border" onChange={(event) => setPriority(event.target.value)} />
        <div className="flex justify-end pt-2">
          <button className="bg-black text-white rounded p-2" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
