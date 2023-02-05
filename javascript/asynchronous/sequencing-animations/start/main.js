const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// task1();
// task2();
task3();


function task1() {
  alice1.animate(aliceTumbling, aliceTiming).finished
    .then(() => {
      const a2Animation = alice2.animate(aliceTumbling, aliceTiming).finished;
      a2Animation.then(() => {
        alice3.animate(aliceTumbling, aliceTiming)
      })
    })
}

function task2() {
  alice1.animate(aliceTumbling, aliceTiming).finished
    .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
    .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
    .catch(e => console.error(e))
}

async function task3() {
  try {
    await alice1.animate(aliceTumbling, aliceTiming).finished
    await alice2.animate(aliceTumbling, aliceTiming).finished
    await alice3.animate(aliceTumbling, aliceTiming).finished

  } catch (error) {
    console.log(error)
  }
}