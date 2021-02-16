function step(N) {
  let str = "";

  for (let i = 1; i < N; i++) {
    str = "";
    for (let j = 0; j < i; j++) {
      str = str.concat("#");
    }
    console.log(str);
  }
}
step(10);
