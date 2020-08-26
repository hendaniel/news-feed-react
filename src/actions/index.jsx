import * as moment from "moment";

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
  const categoryEndpoint = `https://api.canillitapp.com/news/category/${value}`;

  const today = moment().format("YYYY-MM-DD");
  const latestEndpoint = `https://api.canillitapp.com/latest/${today}`;
  console.log(latestEndpoint);

  

  const news = [];

  return (dispatch) => {
    dispatch(clearNews());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(latestEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((json) => {
        json.forEach((item) => {
          if (news.length < 10) news.push(item);
        });
        dispatch(loadingSuccess(news));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};
