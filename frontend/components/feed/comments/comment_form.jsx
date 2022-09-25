import React from "react";
import { useState, useEffect } from "react";

const CommentForm = (props) => {

    const { comment, formType, commentFunction, cancelEdit, setEditing } = props;

    const [state, setState] = useState(comment);
    const [error, setError] = useState(true);
    
    useEffect(() => {
        (state.body.length === 0) ? setError(true) : setError(false);
    }, [state])

    const handleUpdate = (field) => {
        return (e) => {
            setState({ ...state, [field]: e.currentTarget.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!error) {
            commentFunction(state);
            setState({ ...state, body: "" });
            if (formType === "Update comment" ) {setEditing(false)};
        };
    };

    return (
        <div>
            { (formType === "Add a comment..." || formType === "Add a reply...") ? 
            <div className='comment-form-area' id={`${ formType === "Add a reply..." ? "reply-comment-form" : null}`}>
                <div> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-index-profile-image" style={{height: 40, width: 40, cursor: "auto"}}/></div>
                <form className="comment-form" onSubmit={handleSubmit}>
                    <input className="comment-form-input" type="text" placeholder={formType} value={state.body} onChange={handleUpdate("body")}/>
                    {(!error) ? <button type="submit" className="comment-post-button">Post</button> : null}
                </form>
            </div>
            : 
            <div className='comment-form-area'>
                <form className="comment-form" onSubmit={handleSubmit}>
                    <input id="comment-body-update" type="text" placeholder='Add a comment...' value={state.body} onChange={handleUpdate("body")}/>
                    <div>
                        <button type="submit" className={`${error ? "disable-comment-button" : 'comment-update-button'}`}>Save Changes</button>
                        <button onClick={cancelEdit} className="comment-update-button" id="comment-cancel-button">Cancel</button>
                    </div>
                </form>
            </div>
            }
        </div>
    )


}

export default CommentForm;