const abcLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const abcUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateEmail(emailNameLength, includeLowercase, includeUppercase, includeNumbers) {
  let characters = '';
  if (includeLowercase) {
    characters += abcLowerCase;
  }

  if (includeUppercase) {
    characters += abcUpperCase;
  }

  if (includeNumbers) {
    characters += numbers;
  }

  let email = '';
  for (let i = 0; i <= emailNameLength - 1; i++) {
    email += characters[rand(0, characters.length - 1)];
  }

  return email;
}

//we passing options when we generate our email
const emailNameLength = 8;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = true;

const email = generateEmail(emailNameLength, includeLowercase, includeUppercase, includeNumbers);

console.log(`Generated email: ${email}@bit.lt`);
