# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.
- The event handler invokes the addOne func
- Then it goes to the action.js and find the matching action name that was dispatched
- Afterwards the action type is passed to the reducer to implement the case
- The case that matches the action requested then spreads state
- Goes to the total key in the object and update the value
  ...

- TotalDisplay shows the total plus 1.
