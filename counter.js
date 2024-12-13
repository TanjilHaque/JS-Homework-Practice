const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const count = document.getElementById('count');

// console.log(Number(count.innerText) + 1);

increaseBtn.addEventListener('click', function () {
    count.innerText = Number(count.innerText) + 1;
})
decreaseBtn.addEventListener('click', function () {
    count.innerText = Number(count.innerText) - 1;
})
resetBtn.addEventListener('click', function () {
    count.innerText = 0;
})