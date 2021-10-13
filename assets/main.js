const list = document.querySelector(".list")

for (let i = 0; i <= 100; i++) {
    const li = `<li class="box box--${i}">${i}</li>`;
    list.innerHTML += li;

    if (i % 3 === 0) {
        list.toggleAttribute("class", "fizz");
    }
    else if (i % 5 === 0) {
        list.toggleAttribute("class", "buzz");
    }
    else if (i % 15 === 0) {
        list.toggleAttribute("class", "fizzbuzz");
    }
}
