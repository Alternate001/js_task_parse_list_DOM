'use strict';

const listOrigin = document.querySelector('ul');

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort((a, b) => {
    return Number(b.dataset.salary) - Number(a.dataset.salary);
  });
  list.append(...items);
}

function convertor(salary) {
  return Number(salary);
}

function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map((item) => {
    return {
      name: item.dataset.name,
      position: item.dataset.position,
      salary: convertor(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

sortList(listOrigin);
getEmployees(listOrigin);
