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
  console.log('llega aca');
  const categoryEndpoint = `https://api.canillitapp.com/news/category/${value}`;
  const latestEndpoint = `https://api.canillitapp.com/news/latest/${new Date()}`;

  return (dispatch) => {
    dispatch(clearRepos());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(categoryEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((news) => dispatch(loadingSuccess(news)))
      .catch(() => dispatch(loadingError(true)));
  };
};
