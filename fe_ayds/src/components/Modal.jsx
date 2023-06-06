const Modal = ({ isValidate, title, funcion, children }) => {
  if (!isValidate) return null;
  return (
    <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center ease-in duration-200">
      <div className="w-[400px]">
        <div className="bg-white p-2 rounded">
          <div className="flex justify-between pb-3 border-b-black">
            <h2 className="p-1">{title}</h2>
            <button
              className="hover:bg-black hover:text-white p-1 rounded"
              onClick={() => funcion(!isValidate)}
            >
              X
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
