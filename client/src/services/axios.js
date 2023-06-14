import axios from 'axios';

const baseURL = 'http://localhost:5000/api/';

const $host = axios.create({
  baseURL,
});

export const getNumbers = async (email, number, signal) => {
  const { data } = await $host.get(
    `number/numbers?email=${email}&number=${number}`,
    { signal: signal },
  );
  return data;
};
