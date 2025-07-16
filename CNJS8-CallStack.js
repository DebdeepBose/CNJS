/*

➤ The Call Stack is a data structure (LIFO – Last In, First Out) 
    used by the JavaScript engine to keep track of function calls.

➤ It helps the engine remember where it is in the code, 
    what function is currently running, and what to return to after a function finishes.

Global Execution Context is the very first execution context created when a JS program starts running.

→ When the JS program starts, the engine creates a Global Execution Context.
→ This context goes to the bottom of the Call Stack.
→ It runs all global code (not inside any function).
→ Once the function finishes executing, its execution context is popped off the Call Stack
→ Control goes back to the previous context (where the function was called)
→ After all code has finished executing, the Call Stack is empty again.

*/