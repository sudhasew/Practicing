const personalDetails = {
  name: "Sudha",
  age: 32,
  birthday: "December 16",
  pineapplePizza: false,
};

const lifeEvents = [
  "I was born in India,AP",
  "I went to MPUP School",
  "I was sewing course when I was 25 years old",
  "I love to be in my house",
];

if (personalDetails.pineapplePizza) {
  console.log(
    `My name is ${personalDetails.name} and I like pineapples on pizza. I am currently ${personalDetails.age} years old and my birthday is on ${personalDetails.birthday}.}`
  );
} else {
  console.log(
    `My name is ${personalDetails.name} and I'm not into pineapples on pizza. I am currently ${personalDetails.age} years old and my birthday is on ${personalDetails.birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

var counter = 0;

while (true) {
  var randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);
  if (randomNumber !== 5) {
    counter++;
    console.log("randomNumber !== 5");
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
