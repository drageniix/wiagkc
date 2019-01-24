import React from 'react';
import Feed from '../components/FeedPage/Feed';
import Search from '../components/FeedPage/Search';
import FeedControl from '../components/FeedPage/FeedControl';

const FeedPage = () => {
    return (
        <div className="feed">
            <Search />
            <Feed />
            <FeedControl />
        </div>
    );
};

export default FeedPage;
