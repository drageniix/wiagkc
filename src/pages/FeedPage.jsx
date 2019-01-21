import React from 'react';
import Feed from '../components/FeedPage/Feed';
import PageControl from '../components/FeedPage/PageControl';

const FeedPage = () => {
    return (
        <div className="feed">
            <Feed />
            <PageControl />
        </div>
    );
};

export default FeedPage;
