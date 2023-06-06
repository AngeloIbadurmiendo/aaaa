const Button = ({ name, colortext, colorbakcground, modo, func}) => {
  return <button type="submit" onClick={()=>{func(!modo)}} className={`${colorbakcground} pointer hover:bg-blue ${colortext} w-24 h-8 rounded`}>{name}</button>;
};

export default Button;
