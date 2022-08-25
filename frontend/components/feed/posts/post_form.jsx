import React from 'react';

class PostForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);

        // this.checkBodyError = this.checkBodyError.bind(this);
    }

    handleUpdate(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postFunction(this.state);
        this.props.closeModal();
    }

    render() {
        return (
            <div>
            <form className="post-form-container" onSubmit={this.handleSubmit}>
                <div className="education-form-header-container">
                    <h1 className="post-form-header">{this.props.formType}</h1>
                    <button className="close-modal-button" onClick={() => this.props.closeModal()}>X</button>
                </div>
                <div className="post-form-current-user-section">
                    <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-form-profile-image"/>
                    <div className="post-form-current-user-name-anyone">
                        <div id="post-form-current-user-name">{this.props.currentUser.first_name.concat(" ", this.props.currentUser.last_name)}</div>
                        <div className="post-form-globe-anyone">
                            <img src="https://i.postimg.cc/HxY3nVxK/image.png" id="post-form-globe-image"/>
                            <div id="post-form-anyone">Anyone</div>
                        </div>
                    </div>
                </div>
                <div className="post-form-input">
                    <textarea className="post-form-input-field" type="text" value={this.state.body} onChange={this.handleUpdate('body')} placeholder="What do you want to talk about?"></textarea>
                    {/* <input className="post-form-input-field" type="text" value={this.state.body} onChange={this.handleUpdate('body')} placeholder="What do you want to talk about?"/> */}
                </div>
                <div id="body-error-handler" className="post-form-errors invisible">Post cannot be empty</div>
                    <br />
                    <button className="education-form-button" id="post-form-button" type="submit" disabled={(this.state.body.length === 0)}>Post</button>
                </form>
            </div>
        )
    }

}

export default PostForm;