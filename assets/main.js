const ul = document.querySelector("ul.list")

for (let i = 1; i <= 100; i++) {


    if (i % 15 === 0) {
        const li = `<li class="fizzbuzz fizzbuzz--${i}">FizzBuzz</li>`;
        ul.innerHTML += li;
    }
    else if (i % 5 === 0) {
        const li = `<li class="buzz buzz--${i}">Buzz</li>`;
        ul.innerHTML += li;
    }
    else if (i % 3 === 0) {
        const li = `<li class="fizz fizz--${i}">Fizz</li>`;
        ul.innerHTML += li;
    }
    else {
        const li = `<li class="box box--${i}">${i}</li>`;
        ul.innerHTML += li;
    }
}
