let person = {
    name: 'Tatjana',
    age: 35,
    evaluations: [7, 10, 9]
};

// dot notation
person.name = 'iemand anders';

console.log(person.name);

//bracket notation
person['age'] = '28';

console.log(person.age);

console.log(person.evaluations);

let diverseKleuren = ['groen', 'blauw', 'rood'];

console.log(diverseKleuren.length);

console.log(diverseKleuren[0]);

console.log(diverseKleuren[diverseKleuren.length - 1]);

diverseKleuren.push('geel', 5, { greeting: "hi ik ben een object" });

console.log(diverseKleuren);

console.log(diverseKleuren[diverseKleuren.length - 1].greeting);


