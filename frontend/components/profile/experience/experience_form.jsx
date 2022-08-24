import React from 'react';

class ExperienceForm extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const startYearArray = [];
        for (let i = new Date().getFullYear(); i >= 1950; i--) { startYearArray.push(i)}
        const endYearArray = [];
        for (let i = new Date().getFullYear() + 10; i >= 1950; i--) { endYearArray.push(i)}
        const monthsArray = [  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        return (
            <div>
            <form className="education-form-container" onSubmit={this.handleSubmit}>
                <div className="education-form-header-container">
                    <h1 className="education-form-header">{this.props.formType}</h1>
                    <button className="close-modal-button" onClick={() => this.props.closeModal()}>X</button>
                </div>
                <label className="education-form-labels">Title*</label>
                    <input className="education-form-input-container" type="text" value={this.state.school} onChange={this.handleUpdate('school')} placeholder="Ex: Retail Sales Manager"/>
                    { this.state.school_error ? <p className="education-form-error-message">{this.errorMessages.schoolError}</p> : null }
                    <br />
                <label className="education-form-labels">Company Name*</label>
                    <input className="education-form-input-container" type="text" value={this.state.degree} onChange={this.handleUpdate('degree')} placeholder="Ex: Microsoft"/>
                    <br />
                <label className="education-form-labels">Location</label>
                    <input className="education-form-input-container" type="text" value={this.state.field} onChange={this.handleUpdate('field')} placeholder="Ex: London, United Kingdom"/>
                    <br />
                <label className="education-form-labels">Start date</label>
                    <br />
                    <select className="education-form-month-selector" onChange={this.handleUpdate('start_month')}>
                    <option value="Month">Month</option>
                    {monthsArray.map((month) => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                    </select>
                    <select className="education-form-year-selector" onChange={this.handleUpdate('start_year')}>
                    <option value="Year">Year</option>
                    {startYearArray.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                    </select>
                    <br />
                <label className="education-form-labels">End date (or expected)</label>
                    <br />
                    <select className="education-form-month-selector" onChange={this.handleUpdate('end_month')}>
                        <option value="Month">Month</option>
                        {monthsArray.map((month) => (
                        <option key={month} value={month}>{month}</option>
                        ))}
                    </select>
                    <select className="education-form-year-selector" onChange={this.handleUpdate('end_year')}>
                    <option value="Year">Year</option>
                        {endYearArray.map((year) => (
                        <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    { this.state.year_error ? <p className="education-form-error-message">{this.errorMessages.yearError}</p> : null }
                    <br />
                    <label className="education-form-labels">Description</label>
                    <textarea className="education-form-input-container" id="education-form-textarea" value={this.state.description} onChange={this.handleUpdate('description')}></textarea>
                    <br />
                    <div className="education-form-button-container">
                    <button className="education-form-button" type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }

}