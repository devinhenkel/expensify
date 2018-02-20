import React from 'react';

const EditExpense = (props) => {
    console.log(props);
    return (
        <div>
            <p>Edit! {props.match.params.id && 'This has id: ' + props.match.params.id}</p>
        </div>
    );
};

export default EditExpense;