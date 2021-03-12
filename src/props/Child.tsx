interface ChildProps {
  color: string;
  onClick: () => void;
}

// One way to define react components, it's a poor way
// export const Child = ({ color }: ChildProps) => {
//   return (
//     <div>{color}</div>
//   );
// };

//export const Child: React.FunctionComponent<ChildProps> = ({ color }) => {
export const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick} ></button>
    </div>    
  );
};