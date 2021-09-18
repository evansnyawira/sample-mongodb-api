import bcrypt from "bcryptjs";

class PwdHasher {
  #rounds = 12;

  async hashPwd(password) {
    return await bcrypt.hash(password, this.#rounds);
  }

  async check(password, hash) {
    return await bcrypt.compare(password, hash);
  }
}

export default PwdHasher;
