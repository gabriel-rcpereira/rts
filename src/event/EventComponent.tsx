

const EventComponent: React.FC = () => {

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const handleOnDragOverInput = (event: React.DragEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={handleOnChangeInput} ></input>
      <input draggable onDragStart={handleOnDragOverInput} ></input>
      {/* <input onChange={(e) => console.log(e)} ></input> */}
    </div>
  );
};

export default EventComponent;