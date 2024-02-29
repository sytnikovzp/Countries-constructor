'use strict';

function CountriesConstructor(
  title = 'Ukraine',
  capital = 'Kiev',
  population = 43790000,
  area = 603628
) {
  this.title = title;
  this.capital = capital;
  this.population = population;
  this.area = area;

  this.showCountry = function () {
    return `Title: ${this.title}, Capital:  ${this.capital}, Population: ${this.population}, Area: ${this.area}`;
  };
}

const ukraine = new CountriesConstructor();
const usa = new CountriesConstructor('USA', 'Washington', 331900000, 9864000);

console.log(ukraine.showCountry());
console.log('==========================');
console.log(usa);

function allProperties(country) {
  for (let key in country) {
    if (typeof country[key] !== 'function') {
      console.log(`${key} : ${country[key]}`);
    }
  }
}

console.log('==========================');
allProperties(ukraine);

console.log('==========================');
allProperties(usa);
