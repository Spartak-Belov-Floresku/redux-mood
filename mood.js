const h1 = document.querySelector('h1');
const happyBtn = document.querySelector('#happy');
const sadBtn = document.querySelector('#sad');
const angryBtn = document.querySelector('#angry');
const confusedBtn = document.querySelector('#confused');

happyBtn.addEventListener('click', () => {
  store.dispatch({ type: 'happy' });
  const state = store.getState();
  h1.innerText = state.mood;
 })

sadBtn.addEventListener('click', () => {
    store.dispatch({ type: 'sad' });
    const state = store.getState();
    h1.innerText = state.mood;
  })

angryBtn.addEventListener('click', () => {
    store.dispatch({ type: 'angry' });
    const state = store.getState();
    h1.innerText = state.mood;
  })

confusedBtn.addEventListener('click', () => {
    store.dispatch({ type: 'confused' });
    const state = store.getState();
    h1.innerText = state.mood;
  })
h1.addEventListener('click', () => {
    store.dispatch({ type: 'none' });
    const state = store.getState();
    h1.innerText = state.mood;
  })

