console.log('siema!');
const name = 'Michał';
const age = 75;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);


const about = document.querySelector('.about__paragraph--js');

console.log(about.innerHTML);

about.innerHTML = `Nazywam się ${name} i mam ${age} lat.`;


const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

if ('javascript' != 'java') {
    console.log('to prawda!')
}

if (age < 20) {
    console.log('masz mniej niż 20 lat');
} else if ((age >= 20) && (age <= 29)) {
    console.log('masz więcej niż 20 lat ale mniej niż 30');
} else {
    console.log('jesteś 30+');
}

switch (age) {
    case 20:
        console.log('masz równo 20 lat')
        break;
    case 30:
        console.log('masz równo 30 lat')
        break;
    default:
        console.log(`masz ${age} lat`);
        break;
}

const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld);

///////
function calculate(x) {
    x = x + 3;
    console.log(`tradycyjne ${x}`);
    return x*7;
}

console.log(calculate(2));

/////arrrow f

const calculateFat = x => (x+3)*7;

console.log(calculateFat(2));