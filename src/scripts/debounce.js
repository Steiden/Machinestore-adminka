let timer = null;
const debounce = (func, delay) => {
  clearTimeout(timer);
  timer = setTimeout(func, delay);
};

export default debounce;
