/**
 * @link https://github.com/github/fetch
 * @link http://redux.js.org/docs/advanced/ExampleRedditAPI.html
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * @link https://davidwalsh.name/fetch
 */
export const getRequest = (url) => {

  const requestParam = new Request(url, {
    method: 'GET',
  })

  return fetch(requestParam)
    .then(
      responseObj => {
        if (responseObj.ok) {
          return responseObj.json()
        } else {
          throw Error(responseObj.statusText)
        }
      },
      fetchError => {
        throw Error(fetchError)
      })
    .then(
      jsonObj => {
        if (jsonObj.error) {
          throw Error(jsonObj.error)
        } else {
          return jsonObj
        }
      },
      jsonError => {
        throw Error(jsonError)
      }
    )
    .catch(error => {
      return Promise.reject(error.message)
    })

}
