import { queryURL, apiKey } from './constants';

function queryDatabase(query) {
  window
      .fetch(queryURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        //TODO: Remove this console log when done.
        console.log(data);
        return data;

      });

}

export {
  queryDatabase
}