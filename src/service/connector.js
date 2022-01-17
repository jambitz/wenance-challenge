import axios from "axios";
import humps from 'humps';
import { get } from 'lodash';

const API_URL = "https://swapi.dev/";

const path = (url) => `${API_URL}${url}`;

function processResponse(response) {
    return humps.camelizeKeys(response.data);
  }
  

async function fetch(url, config) {
  const { headers, method = "GET", ...rest } = config;

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      post: { "Content-Type": "application/json" },
      ...headers,
    },
    ...rest,
  };

  try {
    return processResponse(await axios(path(url), options));
  } catch (e) {
    const status = get(e, "response.status");
    const data = get(e, "response.data");
    console.log("error", data, status);
    throw e;
  }
}

export { fetch };
