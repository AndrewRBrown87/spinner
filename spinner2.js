const spin = function(position, interval) {
  setTimeout(() => {
    process.stdout.write(position);
  }, interval);
};
let positions = ["\r|   ","\r/   ","\r-   ","\r\\   ","\r|   ","\r/   ","\r-   ","\r\\   ","\r|   "];
for (let i = 0; i < 9; i++) {
  spin(positions[i], 100 + (200 * i));
}