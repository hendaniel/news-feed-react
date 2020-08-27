import { connect } from "react-redux";
import { getNews } from "../actions/index";
import NewsPage from "../components/NewsPage";
import * as Constants from "../constants";

const mapStateToProps = (state, props) => ({
  news: state.news,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress,
});

const mapDispatchToProps = (dispatch) => ({
  newsByCategory: (value) =>
    dispatch(getNews(Constants.CATEGORY_FILTER, value)),
  newsByDate: (value) => dispatch(getNews(Constants.LATEST_FILTER, value)),
  newsBySearch: (value) => dispatch(getNews(Constants.SEARCH_FILTER, value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
