console.table([
  { Primitive: "String", Example: "Hello" },
  { Primitive: "Number", Example: 42 },
  { Primitive: "Boolean", Example: true },
  { Primitive: "Null", Example: null },
  { Primitive: "Undefined", Example: undefined },
  { Primitive: "Symbol", Example: Symbol("id").toString() },
  { Primitive: "BigInt", Example: BigInt(12345678901234567890).toString() }
]);

console.table([
  { Non_Primitive: "Object",   Example: { name: "Debdeep" } },
  { Non_Primitive: "Array",    Example: [1, 2, 3] },
  { Non_Primitive: "Function", Example: function greet() {} },
  { Non_Primitive: "Date",     Example: new Date() },
  { Non_Primitive: "Regex",    Example: /abc/i },
]);
