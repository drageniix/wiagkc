import React from 'react';
import Feed from '../components/FeedPage/Feed';
import FeedControl from '../components/FeedPage/FeedControl';

const FeedPage = () => {
    return (
        <div className="feed">
            <Feed />
            <FeedControl />
        </div>
    );
};

export default FeedPage;
