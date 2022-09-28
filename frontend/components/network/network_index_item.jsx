import React from 'react';

const NetworkIndexItem = (props) => {

    const { user } = props;

    return (
        <div>
            {user.first_name}
        </div>
    )
}

export default NetworkIndexItem;