import * as React from "react";

// This component renders an <input> and a <button>
export function ShoppingListInput(props) {
  // onChange handler example:
  // const handleChange = (e) => {
  //   setState(e.target.value);
  // }
  const [counter, setCounter] = React.useState("");
  const handleChange = e => {
    setCounter(e.target.value);
  };
  return (
    <div>
      <input value={counter} onChange={handleChange} />
      <button
        onClick={() => {
          props.onAdd(counter);
          setCounter("");
        }}
      >
        {" "}
        Add Item{" "}
      </button>
    </div>
  );
}
