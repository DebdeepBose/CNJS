// Stack Memory (Primitive)

/*
→ Stack memory is used for storing primitive data types like number, string, boolean, null, undefined.
→ It stores data in a fixed, last-in-first-out (LIFO) structure.
→ Each time a variable is declared, it's pushed onto the stack.
→ If we copy a primitive variable to another, it creates a copy — both variables work independently.
→ Example: let a = 10; let b = a; changing b won't affect a.
→ It's fast and automatically managed.
*/


// Heap Memory (Non-Primitive)

/*
→ Heap memory is used for storing non-primitive data types like objects, arrays, functions.
→ It allows dynamic allocation — memory is allocated at runtime.
→ When a non-primitive value is assigned to another variable, it copies the reference, not the value.
→ Example: let obj1 = {name: "Deb"}; let obj2 = obj1; changing obj2 also affects obj1.
→ Heap is slower than stack, but flexible and necessary for complex data.
*/
