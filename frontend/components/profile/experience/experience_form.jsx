import React from 'react';

class ExperienceForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = this.props.experience;
        this.handleSubmit = this.handleSubmit.bind(this);

        this.checkDateError = this.checkDateError.bind(this);
        this.checkTitleError = this.checkTitleError.bind(this);
        this.checkCompanyError = this.checkCompanyError.bind(this);
        this.checkDateInputError = this.checkDateInputError.bind(this);
    }


    handleUpdate(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        let checkDate = this.checkDateError();
        let checkTitle = this.checkTitleError();
        let checkCompany = this.checkCompanyError();
        let checkDateInput = this.checkDateInputError();

        if (!checkDate && !checkTitle && !checkCompany && !checkDateInput) {
            const inputted_start_date = this.state.start_year.concat("-", this.state.start_month, "-13")
            const inputted_end_date = this.state.end_year.concat("-", this.state.end_month, "-13")
              this.setState(
                {start_date: inputted_start_date, 
                end_date: inputted_end_date,
                user_id: this.props.currentUser.id}, 
              () => {this.props.experienceFunction(this.state), this.props.closeModal()})
        }

    }

    checkDateError() {
        const inputted_start_date = this.state.start_year.concat("-", this.state.start_month, "-13")
        const inputted_end_date = this.state.end_year.concat("-", this.state.end_month, "-13")

        if (inputted_end_date < inputted_start_date) { 
            document.getElementById("date-error-handler").classList.remove("invisible");
            return true;
        }
        else {
            document.getElementById("date-error-handler").classList.add("invisible");
            return false;
        }
    }

    checkTitleError() {
        if (this.state.title.length === 0) {
            document.getElementById("title-error-handler").classList.remove("invisible");
            return true;
        }
        else {
            document.getElementById("title-error-handler").classList.add("invisible");
            return false;
        }
    }

    checkCompanyError() {
        if (this.state.company_name.length === 0) {
            document.getElementById("company-error-handler").classList.remove("invisible");
            return true;
        }
        else {
            document.getElementById("company-error-handler").classList.add("invisible");
            return false;
        }
    }

    checkDateInputError() {
        if (this.state.start_month.length === 0 && this.state.start_year.length === 0 && this.state.end_month.length === 0 && this.state.end_year.length === 0) {
            document.getElementById("date-input-error-handler").classList.remove("invisible");
            return true;
        }
        else {
            document.getElementById("date-input-error-handler").classList.add("invisible");
            return false;
        }
    }


    render() {
        const startYearArray = [];
        for (let i = new Date().getFullYear(); i >= 1950; i--) { startYearArray.push(i)}
        const endYearArray = [];
        for (let i = new Date().getFullYear(); i >= 1950; i--) { endYearArray.push(i)}
        const monthsArray = [  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        return (
            <div>
            <form className="education-form-container" onSubmit={this.handleSubmit}>
                <div className="education-form-header-container">
                    <h1 className="education-form-header">{this.props.formType}</h1>
                    <button className="close-modal-button" onClick={() => this.props.closeModal()}>X</button>
                </div>
                <label className="education-form-labels">Title*</label>
                    <input className="education-form-input-container" type="text" value={this.state.title} onChange={this.handleUpdate('title')} placeholder="Ex: Retail Sales Manager"/>
                    <br />
                <div id="title-error-handler" className="experience-form-errors invisible">Title is a required field</div>
                <label className="education-form-labels">Company Name*</label>
                    <input className="education-form-input-container" type="text" value={this.state.company_name} onChange={this.handleUpdate('company_name')} placeholder="Ex: Microsoft"/>
                    <br />
                <div id="company-error-handler" className="experience-form-errors invisible">Company name is a required field</div>
                <label className="education-form-labels">Location</label>
                    <input className="education-form-input-container" type="text" value={this.state.location} onChange={this.handleUpdate('location')} placeholder="Ex: London, United Kingdom"/>
                    <br />
                <label className="education-form-labels">Start date*</label>
                    <br />
                    <select className="education-form-month-selector" onChange={this.handleUpdate('start_month')} value={monthsArray[parseInt(this.state.start_month) - 1]} >
                    <option value="Month">Month</option>
                    {monthsArray.map((month) => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                    </select>
                    <select className="education-form-year-selector" onChange={this.handleUpdate('start_year')} value={this.state.start_year}>
                    <option value="Year">Year</option>
                    {startYearArray.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                    </select>
                    <br />
                <label className="education-form-labels">End date (or expected)*</label>
                    <br />
                    <select className="education-form-month-selector" onChange={this.handleUpdate('end_month')} value={monthsArray[parseInt(this.state.end_month) - 1]}>
                        <option value="Month">Month</option>
                        {monthsArray.map((month) => (
                        <option key={month} value={month}>{month}</option>
                        ))}
                    </select>
                    <select className="education-form-year-selector" onChange={this.handleUpdate('end_year')} value={this.state.end_year}>
                    <option value="Year">Year</option>
                        {endYearArray.map((year) => (
                        <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    <br />
                    <div id="date-error-handler" className="experience-form-errors invisible">End date can’t be earlier than start date</div>
                    <div id="date-input-error-handler" className="experience-form-errors invisible">Start and end dates are required</div>
                    <label className="education-form-labels">Description</label>
                    <textarea className="education-form-input-container" id="education-form-textarea" value={this.state.description} onChange={this.handleUpdate('description')}></textarea>
                    <br />
                    <div className="education-form-button-container">
                        {(this.props.formType === "Edit Experience") ? 
                        <button className="experience-form-delete" onClick={() => { this.props.deleteExperience(this.state), this.props.closeModal()}}>Delete experience</button>
                        : null }
                    <button className="education-form-button" type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default ExperienceForm;