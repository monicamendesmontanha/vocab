import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeOut: 3000,
    pauseOnInteract: true
  }
});

const v = new Vue();

const baseURL = 'http://localhost:3000/words/';

// Higher order helper function to reduce error handling boilerplate.
const handlleError = (fn) => (...params) =>
  fn(...params).catch((error) => {
    // console.log(error);
    v.flash(`${ error.response.status }: ${ error.response.statusText }`, 'error');
  });

export const api = {
  getWord: handlleError(async (id) => {
    const result = await axios.get(baseURL + id);
    return result.data;
  }),
  getWords: handlleError(async () => {
    const result = await axios.get(baseURL);
    return result.data;
  }),
  deleteWord: handlleError(async (id) => {
    const result = await axios.delete(baseURL + id);
    return result.data;
  }),
  createWord: handlleError(async (payload) => {
    const result = await axios.post(baseURL, payload);
    return result.data;
  }),
  updateWord: handlleError(async (payload) => {
    const result = await axios.put(baseURL + payload._id, payload);
    return result.data;
  })
}
