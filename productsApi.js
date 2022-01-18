// API CALLS
/**
 * fetches all boots from the backend
 * @param {(Boot[]) => void} cb function that renders boot list into DOM
 * @returns void
 */
 const fetchAllBoots = (cb) => {
    fetch("/api/v1/boots/")
      .then(res => res.json())
      .then(handle500Error)
      .then(json => cb(json))
      .catch(renderError);
  }