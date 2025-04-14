let saveEl = document.getElementById('save-el');
let clicks  = 0;
let counter = document.getElementById("Counter");
function increment()
{
    clicks += 1;
    counter.innerText = clicks;
    console.log(clicks);
}
function save()
{
    let last = clicks + " - ";
    saveEl .textContent += last;
    console.log(clicks);
    counter.innerText=0;
    clicks = 0;
}
