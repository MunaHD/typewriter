const sentence = "hello there from me\n";

let time = 0

sentence.split('').forEach((letter) => {
  setTimeout(() => {
    process.stdout.write (letter)
  }, time);
  time += 50
})
