import React from 'react';

class EducationForm extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = props.education

    this.errorMessages = {
      schoolError: "School is a required field",
      yearError: "End date can't be earlier than start date"
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
      e.preventDefault();
      const inputted_start_date = this.state.start_year.concat("-", this.state.start_month, "-13")
      const inputted_end_date = this.state.end_year.concat("-", this.state.end_month, "-13")
        if( (inputted_end_date > inputted_start_date || (this.state.end_year && this.state.end_month && !this.state.start_year && !this.state.start_month) || (this.state.start_year && this.state.start_month && !this.state.end_year && !this.state.end_month) || (!this.state.start_year && !this.state.end_year && !this.state.start_month && !this.state.end_month)) && this.state.school.length !== 0) { 
        this.setState(
          {start_date: inputted_start_date, 
          end_date: inputted_end_date,
          user_id: this.props.currentUser.id}, 
        () => {this.props.educationFunction(this.state), this.props.closeModal()})
        }
        else if (inputted_end_date < inputted_start_date && (this.state.end_year && this.state.start_year && this.state.end_month && this.state.start_month)) {
          this.setState({year_error: true})
        }
        else if (this.state.school.length === 0) {
          this.setState({school_error: true})
        }
  }

  handleUpdate(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
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
          <label className="education-form-labels">School*</label>
            <input className="education-form-input-container" type="text" value={this.state.school} onChange={this.handleUpdate('school')} placeholder="Ex: Stanford University"/>
            { this.state.school_error ? <p className="education-form-error-message">{this.errorMessages.schoolError}</p> : null }
            <br />
          <label className="education-form-labels">Degree</label>
            <input className="education-form-input-container" type="text" value={this.state.degree} onChange={this.handleUpdate('degree')} placeholder="Ex: Bachelor's"/>
            <br />
          <label className="education-form-labels">Field of Study</label>
            <input className="education-form-input-container" type="text" value={this.state.field} onChange={this.handleUpdate('field')} placeholder="Ex: Computer Science"/>
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
            <label className="education-form-labels">Activities and societies</label>
            <textarea className="education-form-input-container" id="education-form-textarea" value={this.state.activities} onChange={this.handleUpdate('activities')} placeholder="Ex: Alpha Phi Omega, Marching Band, Volleyball"></textarea>
              <br />
            <label className="education-form-labels">Description</label>
            <textarea className="education-form-input-container" id="education-form-textarea" value={this.state.description} onChange={this.handleUpdate('description')}></textarea>
              <br />
              <div className="education-form-button-container">
              {(this.props.formType === "Edit Education") ? 
            <button className="education-form-delete" onClick={() => { this.props.deleteEducation(this.state), this.props.closeModal()}}>Delete education</button>
               : null }
            <button className="education-form-button" type="submit">Save</button>
              </div>
        </form>
      </div>
    )
  }

}

export default EducationForm;