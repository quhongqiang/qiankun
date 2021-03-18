const render = $ => {
  $('#subapp-viewport').html('Hello, render with jQuery');
  return Promise.resolve();
};

(global => {
  global['jquery1'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('purehtml mount');
      return render($);
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);
