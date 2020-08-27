import * as Constants from "../constants";
export const loadingError = (bool) => ({
  type: "LOADING_ERROR",
  hasErrored: bool,
});

export const loadingInProgress = (bool) => ({
  type: "LOADING_IN_PROGRESS",
  isLoading: bool,
});

export const loadingSuccess = (news) => ({
  type: "LOADING_SUCCESS",
  news,
});

export const clearNews = () => ({
  type: "CLEAR_NEWS",
});

export const getNews = (filter, value) => {
  let endpoint = "https://api.canillitapp.com";
  switch (filter) {
    case Constants.CATEGORY_FILTER:
      endpoint = `${endpoint}/news/category/${value}`;
      break;
    case Constants.SEARCH_FILTER:
      endpoint = `${endpoint}/search/${value}`;
      break;
    default:
      endpoint = `${endpoint}/latest/${value}`;
  }

  return (dispatch) => {
    dispatch(clearNews());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((json) => {
        json = json.slice(0, 10);
        dispatch(loadingSuccess(json));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};
