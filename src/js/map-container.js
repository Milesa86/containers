export default class ErrorRepository {
    constructor() {
      this.errors = new Map();
    }
    setError(code, textError) {
      this.errors.set(code, textError);
    }
    translate(code) {
      if (!this.errors.has(code)) {
        return "Unknown error";
      }
      return this.errors.get(code);
    }
  }
  