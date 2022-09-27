import React from 'react';

class PostForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleUpdate(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body)
        formData.append('post[user_id]', this.state.user_id)
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile)
        }

        this.props.postFunction(formData, this.state.id)
        this.props.closeModal();
    }

    handleSubmitButton() {
        let button = document.getElementById('post-form-button')

        if (this.state.body.length === 0) {
            button.setAttribute('disabled', "")
        }
        else {
            button.removeAttribute('disabled', "")
        }
    }

    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl}></img> : null
        return (
            <div>
            <form className="post-form-container" onSubmit={this.handleSubmit}>
                <div className="education-form-header-container">
                    <h1 className="post-form-header">{this.props.formType}</h1>
                    <button className="close-modal-button" onClick={() => this.props.closeModal()}>X</button>
                </div>
                <div className="post-form-current-user-section">
                {(this.props.currentUser.profilePictureUrl) ?
                    <img src={`${this.props.currentUser.profilePictureUrl}`} id="post-form-profile-image"/> 
                    : 
                    <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" id="post-form-profile-image"/>
                }
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
                </div>
                <div id="post-image-preview"> { preview } </div>
                <div className="post-form-buttons">
                    <div id="post-image-button">
                        <label htmlFor="original-post-image-button">
                            <img src="https://i.postimg.cc/kg3qM8Yq/image-trimmy.jpg"/>
                        </label>
                        <input id="original-post-image-button" type="file" onChange={this.handleFile}/>
                    </div>
                    <br />
                        <button className="education-form-button" id="post-form-button" type="submit" disabled={ (this.state.body.length === 0)}>Post</button>
                </div>
                </form>
            </div>
        )
    }

}

export default PostForm;