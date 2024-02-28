'use strict';

function countryConstructor(
  title,
  capital = 'Kiev',
  population = '43790000',
  area = '603628'
) {
  this.title = title;
  this.capital = capital;
  this.population = population;
  this.area = area;

  this.showCountry = function () {
    return `Title: ${this.title}, Capital:  ${this.capital}, Population: ${this.population}, Area: ${this.area}`;
  };
}

const Ukraine = new countryConstructor('Ukraine');
const USA = new countryConstructor('USA', 'Washington', 331900000, 9864000);

console.log(Ukraine.showCountry());
console.log('==========================');
console.log(USA);

function allProperties(country) {
  for (let key in country) {
    if (typeof country[key] !== 'function') {
      console.log(`${key} : ${country[key]}`);
    }
  }
}

console.log('==========================');
allProperties(Ukraine);

console.log('==========================');
allProperties(USA);
