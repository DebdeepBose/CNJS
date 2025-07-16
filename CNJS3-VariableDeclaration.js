/*

➤ Const:
→ It is used to declare block-scoped constants.
→ It cannot be reassigned or re-declared after the initial value is set.
→ It is hoisted but remains uninitialized until the code reaches the declaration line (TDZ).
Ex: const pi = 3.14;

➤ Let:
→ It is used to declare block-scoped variables.
→ It can be reassigned but cannot be re-declared within the same scope.
→ It is hoisted but remains uninitialized, which means accessing before declaration throws an error.
Ex: let c = 5;

➤ Var:
→ It is used to declare function-scoped variables.
→ It can be re-declared and re-assigned.
→ It is hoisted on top of their scope & initialized with "undefined".
Ex: var name = "Bob";

➤ Why var is advised to be left out / not used?
→  Since var is only limited to the function scope, 
it may result in unexpected bugs due to unexpected access.

*/