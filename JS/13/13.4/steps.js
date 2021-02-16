function step(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j > i) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("#");
      }
    }
    console.log();
  }
}
step(10);
