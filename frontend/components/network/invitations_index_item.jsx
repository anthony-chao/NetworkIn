import React from 'react';

const InvitationsIndexItem = (props) => {

    const { connector } = props;

    return (
        <div>
            {connector.first_name}
        </div>
    )

}

export default InvitationsIndexItem;