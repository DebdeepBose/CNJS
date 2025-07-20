//OK lets continue
/*
So in future, if we build an E-commerce app, we would have carts right?
So multiple values can be passed or added to the cart, we cant make indiviudal functiosn for those
so what we do is use the ... operator,now in this context it is called
"REST" operator and not "SPREAD" opertor, same job tho
*/

const cartPriceTotal = (...incomingPrices) => {
  console.log(incomingPrices);
};
cartPriceTotal(10, 20, 30); // Prints [10, 20, 30]
//Yes we can totally increase it
cartPriceTotal(10, 20, 30, 50, 60, 100, 200); //Prints [10, 20, 30, 50, 60, 100, 200]

//We can even pass objects into functions

const confession = {
  name: "Walter Heartwell White",
  address1: "308 Negra Arroyo Lane, Albuquerque",
  state: "New Mexico",
  ZIP_code: "87104",
};

const fixingGoodTape = (literallyAnyObject) => {
  console.log(`
    My name is ${literallyAnyObject.name}.
    I live at ${literallyAnyObject.address1},
    ${literallyAnyObject.state} - ${literallyAnyObject.ZIP_code}
  `);
};

fixingGoodTape(confession);
