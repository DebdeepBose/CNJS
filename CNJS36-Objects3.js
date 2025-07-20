/// Lets learn about object destructuring

// Now let's say we have an object
const familyGuy = {
  HumanVoiceActors: {
    PeterGriffin: "Seth McFarlane",
    LoisGriffin: "Alex Borstein",
    StewieGriffin: "Seth McFarlane",
  },
  PetVoiceActors: {
    BrianGriffin: "Seth McFarlane",
    MegGriffin: "Mila Kunis",
  },
};

// Now say I wanna call HumanVoiceActors and the Griffins multiple times,
// it's kinda hard to write such long names. Instead, we can destructure.

const { HumanVoiceActors: HVA } = familyGuy;
const { PeterGriffin: peter, LoisGriffin: lois, StewieGriffin: stew } = HVA;

// Now we can use them as many times as we want
console.log(
  peter +
    " is the voice actor of Peter, " +
    stew +
    " is also the voice actor of Stewie, " +
    lois +
    " is the voice actor of Lois."
);

