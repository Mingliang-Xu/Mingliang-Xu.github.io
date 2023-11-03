const obj = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
};

const word = obj[1];
console.log(word);

function twoWords(str) {
  let hours = Number(str.slice(0, 2));
  let minutes = Number(str.slice(3, 5));

  if (hours === 0 && minutes === 0) {
    return "midnight";
  }
  if (hours === 12 && minutes === 0) {
    return "noon";
  }

  let ans = "";
  let hoursWord = obj[hours % 12];

  ans += hoursWord;
  if (minutes === 0) ans += " o'clock";

  // ... calculate minutesWord

  ans += minutesWord;

  // ... calculate amPm

  ans += amPm;

  return ans;
}

let ansList = [hoursWord, minutesWord, amPm];
let ansList = [hoursWord, "o'clock", minutesWord, amPm];
// let ansList = ["six", "eighteen", "am"]

" ".join(ansList);

// 'six eighteen am' -> hoursWord = six, minutesWord = eighteen, amPm = am
// 'ten thirty four am'

// 1%12
//12%12=0
// 0 % 12 = 0
// 1 % 12 =1
// 2 % 12 =2
// 3 % 12 = 3
// 4 % 12 = 4
// 5 % 12 =5
// 6 % 12 =6
// 7 % 12 = 7
// 8 % 12 =8
// 9 % 12 =9
// 10 % 12 =10
// 11% 12 =11
// 12% 12 =0
// 13% 12 =1
// 14% 12 =2
// 15% 12 =3
// 16% 12 =3
// 17% 12 =5
// 18% 12 =6
// 19% 12 =7
// 20% 12 =8
// 21% 12 =9
// 22% 12 =10
// 23% 12 =11
//
