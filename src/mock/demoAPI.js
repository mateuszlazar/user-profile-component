import { mockedProfile } from './profile';

class demoAPIMethods {
  static getUserProfile() {
    return new Promise((resolve) => {
      resolve(Object.assign({}, mockedProfile));
    });
  }
}

export default demoAPIMethods;
