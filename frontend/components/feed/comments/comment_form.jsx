import React from "react";
import { useState, useEffect } from "react";

const CommentForm = (props) => {

    const { comment, currentUser, formType, commentFunction } = props;

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
        };
    };

    const toAuthorsProfile = () => {
        history.push(`/users/${currentUser.id}`);
    }

    return (
        <div className='comment-form-area'>
            <div onClick={toAuthorsProfile}> <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-index-profile-image" style={{height: 40, width: 40, cursor: "pointer"}}/></div>
            <form className="comment-form" onSubmit={handleSubmit}>
                <input className="comment-form-input" type="text" placeholder={formType} value={state.body} onChange={handleUpdate("body")}/>
                {(!error) ? <button type="submit" className="comment-post-button">Post</button> : null}
            </form>
        </div>
    )


}

export default CommentForm;