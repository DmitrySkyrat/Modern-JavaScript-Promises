//console.log('Topic: Promises');
// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// const p1 = new Promise(resolve => {
//   console.log("Promise is created");
// })
// console.log(p1);

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const p2 = new Promise(resolve => resolve('Promise Data'));

// p2.then((value) => console.log(value));

// console.log(p2);

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// const p3 = new Promise((resolve, reject) => {
//   reject('Promise Error');
// })

// p3.catch(err => {
//   console.log(err);
// })

// console.log(p3);

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let p4;

// setTimeout(() => {
//   p4 = Promise.resolve('Promise Data');
//   p4.then(value => console.log(value));
// }, 3000);


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// const handlePromise = {
//   promise: null,
//   resolve: null,
//   reject: null,
//   onSuccess: (paramName) => {
//     console.log(`Promise is resolved with data: ${paramName}`)
//     return paramName;
//   },
//   onError: (error) => console.log(`Promise is rejected with error: ${error}`)
// }

// const createPromise = document.getElementById('btn-create-promise');
// const resolvePromise = document.getElementById('btn-resolve-promise');
// const rejectPromise = document.getElementById('btn-reject-promise');

// createPromise.addEventListener('click', () => {
//   handlePromise.promise = new Promise((resolve, reject) => {
//     console.log('Promise is created');
//     handlePromise.resolve = resolve;
//     handlePromise.reject = reject;
//   })
//   .then(handlePromise.onSuccess)
//   .then(handlePromise.onSuccess)
//   .catch(handlePromise.onError)
// });

// resolvePromise.addEventListener('click', () => {
//   handlePromise.resolve('fulfilled')
// });

// rejectPromise.addEventListener('click', () => {
//   handlePromise.reject('Error');
// });


// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then


// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.

// new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "My name is");
// })
// .then(onSuccess)
// .then(print)

// function onSuccess(param) {
//   return param + ' Dmitry'
// }

// function print(param) {
//   console.log(param);
// }

// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.

// new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "");
// })
// .then(onSuccess)
// .then(print)
// .catch(console.log)

// function onSuccess(param) {
//   if (!param) {
//     throw new Error('Error message');
//   }
//   return param + ' Dmirty'
// }

// function print(param) {
//   console.log(param);
// }

// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData

// function getPromiseData(promise) {
//   promise.then(console.log)
// }

// const obj = {
//   name: 'Anna'
// }

// getPromiseData(Promise.resolve(obj));


// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль

// function first() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res({ name: "Anna" })
//     }, 2000);
//   })
// }

// function second() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res({age: 16})
//     }, 3000);
//   })
// }

// Promise.all([first(), second()]).then(
//   (values) => {
//     console.log(values);
//     console.log({...values[0], ...values[1]});
//     return {...values[0], ...values[1]}
//   }
// )

// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.

// function first() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res({ name: "Anna" })
//     }, 2000);
//   })
// }

// function second() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("Promise Error")
//     }, 3000);
//   })
// }

// Promise.all([first(), second()]).then(
//   (values) => {
//     console.log(values);
//     console.log({...values[0], ...values[1]});
//     return {...values[0], ...values[1]}
//   }
// )
// .catch(console.log())

// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку "Cancel Promise". Добавьте обработчик для кнопки.
// Используя метод race организуйте "отмену промиса".

// const first = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Promise Data')
//   }, 5000);
// })

// const cancelButton = document.getElementById('btn-cancel-promise');

// let reject;

// const second = new Promise((res, rej) => {
//   reject = rej
// }) 

// cancelButton.addEventListener('click', () => {
//   reject('Error')
// })

// Promise.race([first, second]).then(console.log).catch(console.log);