define(function () {
  const internals = {};
  const externals = {};

  internals.shows = [
    {
      id: 1,
      country: "Portugal",
      city: "Lisbon",
      year: 2014,
      event: "The Mrs. Carter Show World Tour",
      src: "resources/Portugal.jpg",
    },
    {
      id: 2,
      country: "Spain",
      city: "Barcelona",
      year: 2014,
      event: "The Mrs. Carter Show World Tour",
      src: "resources/Spain.jpg",
    },
    {
      id: 3,
      country: "England",
      city: "London",
      year: 2003,
      event: "Dangerously in Love Tour",
      src: "resources/England.jpg",
    },
    {
      id: 4,
      country: "Indonesia",
      city: "Jakarta",
      year: 2007,
      event: "The Beyoncé Experience",
      src: "resources/Indonesia.jpg",
    },
    {
      id: 5,
      country: "Mexico",
      city: "Monterrey",
      year: 2007,
      event: "The Beyoncé Experience",
      src: "resources/Mexico.jpg",
    },
    {
      id: 6,
      country: "South Korea",
      city: "Seoul",
      year: 2007,
      event: "The Beyoncé Experience",
      src: "resources/SouthKorea.jpg",
    },
    {
      id: 7,
      country: "France",
      city: "Paris",
      year: 2009,
      event: "I Am... (Beyoncé tour)",
      src: "resources/France.jpg",
    },
    {
      id: 8,
      country: "Sweden",
      city: "Stockholm",
      year: 2009,
      event: "I Am... (Beyoncé tour)",
      src: "resources/Sweden.jpg",
    },
    {
      id: 9,
      country: "Denmark",
      city: "Copenhagen",
      year: 2016,
      event: "The Formation World Tour",
      src: "resources/Denmark.jpg",
    },
    {
      id: 10,
      country: "Belgium",
      city: "Brussels",
      year: 2016,
      event: "The Formation World Tour",
      src: "resources/Belgium.jpeg",
    },
    {
      id: 11,
      country: "Scotland",
      city: "Glasgow",
      year: 2016,
      event: "The Formation World Tour",
      src: "resources/Scotland.jpg",
    },
    {
      id: 12,
      country: "Poland",
      city: "Warsaw",
      year: 2023,
      event: "Renaissance World Tour",
      src: "resources/Poland.jpg",
    },
    {
      id: 13,
      country: "Canada",
      city: "Toronto",
      year: 2023,
      event: "Renaissance World Tour",
      src: "resources/Canada.jpg",
    },
    {
      id: 14,
      country: "Netherlands",
      city: "Amsterdam",
      year: 2023,
      event: "Renaissance World Tour",
      src: "resources/Netherlands.jpg",
    },
    {
      id: 15,
      country: "United States",
      city: "Chicago",
      year: 2023,
      event: "Renaissance World Tour",
      src: "resources/UnitedStates.jpg",
    },
    {
      id: 16,
      country: "Croatia",
      city: "Zagreb",
      year: 2009,
      event: "I Am... (Beyoncé tour)",
      src: "resources/Croatia.jpg",
    },
    {
      id: 17,
      country: "Austria",
      city: "Vienna",
      year: 2009,
      event: "I Am... (Beyoncé tour)",
      src: "resources/Austria.jpg",
    },
    {
      id: 18,
      country: "Hungary",
      city: "Budapest",
      year: 2009,
      event: "I Am... (Beyoncé tour)",
      src: "resources/Hungary.jpg",
    },
    {
      id: 19,
      country: "Czech Republic",
      city: "Prague",
      year: 2009,
      event: "I Am... (Beyoncé tour)",
      src: "resources/CzechRepublic.jpg",
    },
    {
      id: 20,
      country: "Brazil",
      city: "Rio de Janeiro",
      year: 2013,
      event: "The Mrs. Carter Show World Tour",
      src: "resources/Brazil.jpg",
    },
    {
      id: 21,
      country: "Colombia",
      city: "Medellín",
      year: 2013,
      event: "The Mrs. Carter Show World Tour",
      src: "resources/Colombia.jpg",
    },
    {
      id: 22,
      country: "Venezuela",
      city: "Caracas",
      year: 2013,
      event: "The Mrs. Carter Show World Tour",
      src: "resources/Venezuela.jpg",
    },
    {
      id: 23,
      country: "Australia",
      city: "Sydney",
      year: 2013,
      event: "The Mrs. Carter Show World Tour",
      src: "resources/Australia.jpeg",
    },
    {
      id: 24,
      country: "China",
      city: "Shanghai",
      year: 2007,
      event: "The Beyoncé Experience",
      src: "resources/China.jpg",
    },
    {
      id: 25,
      country: "Philippines",
      city: "Taguig",
      year: 2007,
      event: "The Beyoncé Experience",
      src: "resources/Philippines.jpg",
    },
    {
      id: 26,
      country: "Thailand",
      city: "Bangkok",
      year: 2007,
      event: "The Beyoncé Experience",
      src: "resources/Thailand.jpg",
    },
    {
      id: 27,
      country: "India",
      city: "Mumbai",
      year: 2007,
      event: "The Beyoncé Experience",
      src: "resources/India.jpg",
    },
    {
      id: 28,
      country: "Puerto Rico",
      city: "San Juan",
      year: 2013,
      event: "The Mrs. Carter Show World Tour",
      src: "resources/PuertoRico.jpg",
    },
    {
      id: 29,
      country: "New Zealand",
      city: "Auckland",
      year: 2013,
      event: "The Mrs. Carter Show World Tour",
      src: "resources/NewZealand.jpg",
    },
    {
      id: 30,
      country: "Serbia",
      city: "Belgrade",
      year: 2013,
      event: "The Mrs. Carter Show World Tour",
      src: "resources/Serbia.jpg",
    },
    {
      id: 31,
      country: "Ireland",
      city: "Dublin",
      year: 2003,
      event: "Dangerously in Love Tour",
      src: "resources/Ireland.jpeg",
    },
  ];

  externals.getShow = async function (countryName, cb) {
    console.log("http://192.168.2.49:8080/" + countryName);

    console.log(2);

    let response = await fetch("http://192.168.2.49:8080/" + countryName);

    let data = await response.json();

    chosenData = data;

    console.log("data");
    console.log(data);

    cb();

    return data;

    for (let i = 0; i < internals.shows.length; i++) {
      if (countryName === internals.shows[i].country) {
        return internals.shows[i];
      }
    }
  };

  externals.getChosenData = function () {
    return chosenData;
  };

  return externals;
});
