import React from 'react';
import './Rank.css'

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className="white-f3">
                {`Hi ${name}, your current entry is...`}
            </div>
            <div className="white-f1">
                {entries}
            </div>
        </div>
    );
}

export default Rank;