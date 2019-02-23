import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

export default {
  hash(data) {
    return new Promise((res, rej) => {
      bcrypt.hash(data, salt, (err, hashed) => {
        if (err) {
          return rej(err);
        }
        res(hashed);
      });
    });
  },
  compare(data, hashed) {
    return new Promise((res, rej) => {
      bcrypt.compare(data, hash, (err, match) => {
        if (err) {
          return rej(err);
        }
        res(match);
      });
    });
  }
};
