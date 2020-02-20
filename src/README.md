# CS 385 Lab 3

## Overview

You will create a "shopping list" app. It has these features:

1. Keep track of a list of items in an array
2. Render the items that are in the array
3. Allow the user to input a new name and add it to the array
4. Show count of how many items are on the list

You can view a sample of the completed app [here](https://em.link/385/lab3/example) to get a clearer picture of what you're building. It's expected that questions will come up while you're working on the lab and I will add more clarification on the steps as needed.

## Instructions

1. Start by looking at src/components/ShoppingList.js. Notice the JSX that it returns.
2. Now look at the `App` component in src/index.js. Replace its `p` tag with your `ShoppingList` component. When you do this, you should see the output of ShoppingList you noticed in step 1.
3. Try adding a title to the top of your page called "Shopping List App". You can use an `h1` tag inside the `App` component's `div` for this.
4. Render the `ShoppingListInput` component in your `ShoppingList`.
5. Render an `input` and a `button` in your ShoppingListInput component. You should see your `input` and `button` on the page now.
6. Put a `React.useState` in the top of your ShoppingList component. Set the initial state to `["turkey"]` for now.
7. Render a `ul` in your ShoppingList above the ShoppingListInput component. It won't have any children yet.
8. [Map your state variable (the one from useState) from an array of strings to an array of ShoppingListItem](https://reactjs.org/docs/lists-and-keys.html#rendering-multiple-components) and render it as children of the `ul` element in ShoppingList. You should see one bullet point with the placeholder message in ShoppingListItem. See if you can figure out what this means and how to do it by reading the linked React doc first.
9. Now enhance ShoppingListItem to take a "name" prop. Check the [Welcome component on the React docs](https://reactjs.org/docs/components-and-props.html#rendering-a-component).
10. Where you're mapping your list in ShoppingList, pass the list item as a prop to ShoppingListItem. You should now see one bullet point with "turkey" as the content.
11. Now you should hook up the `input` in ShoppingListInput. Create another React.useState in ShoppingListInput with the default state set to "" (empty string).
12. Put a prop called `onChange` onto your `input`, and pass an update handler function to it. Your update handler should call the setState method on your useState from step 11. There's an example of an update handler inside you ShoppingListInput file.
13. Put a prop called `value` onto your input and connect it to the state variable from your useState in step 11.
14. Add an `onClick` prop to your `button` and pass a function which calls `props.onAdd` with the state from your useState.
15. Now you need to provide the onAdd function to your ShoppingListInput component, since it's currently undefined. In ShoppingList, pass a prop called `onAdd` to ShoppingListInput which takes an argument for the new list item and adds it to the array stored in the useState inside ShoppingList. Don't use array.push for this — you'll need to create a copy of the original array with the new item. [This article explains mutable vs immutable methods](https://vincent.billey.me/pure-javascript-immutable-array/).
16. Enhance your ShoppingListInput component so that it resets the useState back to "" when you click the add button.

## Note

Please save your code sandbox URL. You will need the code you wrote for this lab to do the homework. Homework specification will be uploaded by Sunday night. It is expected to take 2-3 hours so please plan accordingly.
