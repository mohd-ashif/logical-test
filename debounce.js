function debounce(func, delay) {
    let timeout;
  
    function debounced() {
      clearTimeout(timeout);
      timeout = setTimeout(func, delay);
    }
  
    return debounced;
  }
  const debouncedClick = debounce(function() {
    console.log("Button clicked");
  }, 1000);
  
  document.querySelector("button").addEventListener("click", debouncedClick);
  