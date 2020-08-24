const timer = function() {
  let a = process.argv.slice(2).sort();
  let count = 1;

  for (const i of a) {
    if (isNaN(i) || i < 0 || i === undefined) {
      return "";
    }
  }

  for (const i of a) {
    setTimeout(() => {
      process.stdout.write(i);
    }, count * i);
  }count++;
};
timer();