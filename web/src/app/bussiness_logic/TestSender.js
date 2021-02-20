export default class TestSender {
  async send() {
    return new Promise(async function(resolve, reject) {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const json = await response.json();
      resolve(json)
    });
  }
}
