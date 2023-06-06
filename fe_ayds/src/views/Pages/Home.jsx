import { useEffect, memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, getTask } from "../../redux/actionRedux/task";
import AddTask from "../../components/AddTask";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Modal from "../../components/Modal";

const Home = memo(() => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { task, isLoading, error } = useSelector((state) => state.edit);
  
  useEffect(() => {
    dispatch(getTask());
  }, []);

  const deleteTaskk = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <Layout>
        <div className="flex py-2 w-full justify-between">
          <h1>Tareas</h1>
          <button
            className="bg-black text-white hover:bg-overlay rounded p-4 ease-in duration-200"
            onClick={() => setOpenModal(true)}
          >
            Agregar tarea
          </button>
        </div>
        <div className="grid grid-cols-10 gap-4 p-5 m-4 shadow rounded bg-gray">
          <div>ID</div>
          <div>Nombre de Tarea</div>
          <div>Fecha</div>
          <div>Tipo de Tarea</div>
          <div>Número de Serie</div>
          <div>Mecánico</div>
          <div>Descripción</div>
          <div>Estado</div>
          <div>Prioridad</div>
          <div>Acción</div>
        </div>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {error ? (
                <p>{error.message}</p>
              ) : (
                task?.map((t) => (
                  <div className="m-4" key={t.id}>
                    {/* Pase todas las propiedades necesarias a su componente Card */}
                    <Card data={t} dlteTask={deleteTaskk} />
                  </div>
                ))
              )}
            </>
          )}
        </div>
      </Layout>
      <Modal
        isValidate={openModal}
        title={"Agregar tarea"}
        funcion={setOpenModal}
      >
        <AddTask funcion={setOpenModal} />
      </Modal>
    </div>
  );
});

export default Home;
