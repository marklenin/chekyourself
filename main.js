// Задание №1

// Используя API со странами выведите список со всеми странами:
// API: https://restcountries.com/v3.1/all

let link = fetch("https://restcountries.com/v3.1/all");

let list = document.querySelector("#list");
link
  .then((res) => res.json())
  .then((data) => {
    data.forEach((a, index) => {
      list.innerHTML += `
        <ol>${index}-${a.name.common}</ol>`;
      //   console.log(a.name.common);
    });
  });

// Задание №2

// Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
// Используйте fetch. Отобразите на странице имена персонажей из
// Рика и Морти в list.

let rick = fetch("https://rickandmortyapi.com/api/character");
let list1 = document.querySelector(".list");
rick
  .then((res) => res.json())
  .then((info) => {
    let res = info.results;
    console.log(res);
    res.forEach((a) => {
      list1.innerHTML += `
      <div class="char"
        <ol>${a.name}</ol>
        <img src="${a.image} "alt="#" width=50>
        <div>`;
    });
  });

// Задание №3

// Рядом с именами отобразите все изображения
// которые вы получили со второго задания
