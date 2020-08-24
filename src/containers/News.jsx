import { connect } from "react-redux";
import { getNews } from "../actions/index";
import NewsPage from "../components/NewsPage";

const mapStateToProps = (state) => ({
  news: state.news,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNews: (apiFilter, value) => dispatch(getNews(apiFilter, value))
});
export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
