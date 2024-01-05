import argon2 from 'argon2';

const password = process.argv[2];

try {
  const hashedPassword = await argon2.hash(password);
  console.log(hashedPassword);
} catch (err) {
  console.error(err);
}
