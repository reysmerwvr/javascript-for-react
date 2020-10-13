import { isRequired } from './validations.js';

function makeIcecream(
  flavor1 = isRequired("flavor1"),
  flavor2 = isRequired("flavor2")
) {
  // console.log(flavor1)
  alert(
    `New icecream of ${flavor1.dataset.flavor} and ${flavor2.dataset.flavor}`
  );
}

export { makeIcecream };
