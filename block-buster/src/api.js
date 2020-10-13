import { API_KEY, API_URL } from "./constants.js";

class API {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }
  baseUrl = `https://${API_URL}/3`;
  get discoverMovie() {
    return `${this.baseUrl}/discover/movie?api_key=${this.API_KEY}`;
  }
  async moviePage(page) {
    const response = await fetch(`${this.discoverMovie}&page=${page}`);
    const data = await response.json();
    return data;
  }
}

export default new API(API_KEY);
