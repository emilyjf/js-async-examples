// setTimeout(function() {
//   console.log('First Task Done.');
// }, 2000);

// secondTask('Second Task Done.');

setTimeout(function() {
  console.log('First task done.');

  setTimeout(function() {
    console.log('Second task done.');

    setTimeout(function() {
      console.log('Third task done.');
    }, 2000);
  }, 2000);
}, 2000);

