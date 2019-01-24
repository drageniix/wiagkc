import React from 'react';
import { setQuery } from '../../redux/actions/feed';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Search extends React.Component {
    state = {
        query: this.props.query
    };

    setQuery = e => {
        e.preventDefault();
        this.props.setQuery(this.state.query);
    };

    render() {
        return (
            <div className="search">
                <form className="search__content">
                    <input
                        onChange={e => this.setState({ query: e.target.value })}
                        onSubmit={this.setQuery}
                        value={this.state.query}
                        type="search"
                        placeholder="Search Posts"
                        id="search"
                        className="search__input"
                        spellCheck={false}
                        autoFocus
                    />
                    <button className="search__button" onClick={this.setQuery}>
                        <svg className="search__icon" viewBox="0 0 20 20">
                            <title>Search Posts</title>
                            <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z" />
                        </svg>
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    query: state.feed.query
});

const mapDispatchToProps = {
    setQuery
};

Search.propTypes = {
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
