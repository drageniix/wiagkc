import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPage } from '../../redux/actions/feed';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

export class PageControl extends Component {
    static propTypes = {
        lastPage: PropTypes.number,
        page: PropTypes.number,
        setPage: PropTypes.func,
        history: PropTypes.object
    };

    state = {
        currentPage: this.props.page
    };

    static getDerivedStateFromProps(nextProps) {
        const page =
            parseInt(
                queryString.parse(nextProps.history.location.search).page
            ) || 1;
        if (page && page > 0 && nextProps.page !== page) {
            nextProps.setPage(page);
            return { currentPage: page };
        }
        return null;
    }

    changePage = change => () => {
        const page = this.state.currentPage + change;
        this.props.history.push({
            pathname: '/feed',
            search: '?page=' + page
        });

        this.setState({ currentPage: page });
        this.props.setPage(page);
    };

    render() {
        const { currentPage } = this.state;
        const { lastPage } = this.props;

        return (
            <div className="feed__controls">
                {currentPage > 1 && (
                    <button
                        className="feed__controls--prev"
                        onClick={this.changePage(-1)}
                    >
                        Previous
                    </button>
                )}
                {currentPage < lastPage && (
                    <button
                        className="feed__controls--next"
                        onClick={this.changePage(1)}
                    >
                        Next
                    </button>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    page: state.feed.page,
    lastPage: Math.ceil(state.feed.totalItems / state.feed.itemsPerPage)
});

const mapDispatchToProps = {
    setPage: direction => setPage(direction)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(PageControl));
