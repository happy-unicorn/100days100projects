export default function getRandomFromRange(min, max) {
  return Math.random() * (max - min) + min;
}