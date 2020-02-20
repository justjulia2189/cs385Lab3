import * as React from "react";
import { ShoppingListInput } from "./ShoppingListInput";
import { ShoppingListItem } from "./ShoppingListItem";

// This component renders a <ul> with its children being
// an array of ShoppingListItems
export function ShoppingList(props) {
  const [list, setList] = React.useState(["turkey"]);
  const listItem = list.map(item => <ShoppingListItem name={item} />);

  return (
    <div>
      <ul>
        <li>{listItem}</li>
      </ul>
      <ShoppingListInput
        onAdd={newItem => {
          setList([...list, newItem]);
        }}
      />
    </div>
  );
}
