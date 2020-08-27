import { connect } from "react-redux";
import { getNews } from "../actions/index";
import NewsPage from "../components/NewsPage";

const mapStateToProps = (state, props) => ({
  news: state.news,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress,
});

const mapDispatchToProps = (dispatch) => ({
  newsByCategory: (value) => dispatch(getNews("category", value)),
  newsByDate: (value) => dispatch(getNews("latest", value)),
  newsBySearch: (value) => dispatch(getNews("search", value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
