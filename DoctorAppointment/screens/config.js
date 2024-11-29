
let apiUrl = 'http://192.168.1.7/apiDoctor/';

export const getApiUrl = () => {
  return apiUrl;
};

export const setApiUrl = (newApiUrl) => {
  apiUrl = newApiUrl;
};