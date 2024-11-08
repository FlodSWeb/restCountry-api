const countryContainer = document.querySelector(".countryContainer");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((res) => logCountries(res));

async function logCountries(data) {
  return data
    .filter((data) => data.population > 1000000)
    .sort((a, b) => {
      if (a.population < b.population) {
        return 1;
      } else if (a.population > b.population) {
        return -1;
      }
    })
    .slice(0, 24)
    .map((data) => {
      countryContainer.innerHTML += `<span class="card"><h3>${
        data.name.common
      }</h3><br>
        <img src="${data.flags.png}"/><br>
        ${data.capital}<br><br>
        ${data.population.toLocaleString()} hab<br>
        ${displayCurr(data.currencies)}
        ${displaySymbol(data.currencies)}<br>

      <span>`;
    });
}

fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
  .then((res) => res.json())
  .then((res) => res.data)
  .then((res) =>
    res
      .filter((city) => city.country === "Germany")
      .map((city) => console.log(city))
  );

const displayCurr = (data) => {
  for (let curr in data) {
    // console.log(curr);
    return curr;
  }
};

const displaySymbol = (data) => {
  for (let [key, value] of Object.entries(data)) {
    console.log("key ::: " + key + "\nvalue ::: " + value.name);
    return value.symbol;
  }
};

// const obj = [];

// async function displayObj() {
//   let cityData = {};

//   fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
//     .then((res) => res.json())
//     .then((res) => res.data)
//     .then((res) =>
//       res
//         .filter((city) => city.country === "Canada")
//         .map((city) => {
//           Object.assign(cityData, { city });
//           console.log(cityData);
//         })
//     );
//   console.log(cityData);
//   return obj;

// Step 1: Convert object values to an array
//   const valuesArray = Object.values(myObject);
// console.log(valuesArray);

// Step 2: Use map() to transform the values
//   const transformedValues = valuesArray.map((value) => {
//     return value.toUpperCase();
//   });

// Step 3: Convert the resulting array back to an object
//   const transformedObject = Object.keys(myObject).reduce((acc, key, index) => {
//     acc[key] = transformedValues[index];
//     //   console.log(acc);
//     return acc;
//   }, {});

// Output: { key1: 'VALUE1', key2: 'VALUE2', key3: 'VALUE3' }
// }

// displayObj();
