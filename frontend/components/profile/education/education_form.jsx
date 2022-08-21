import React from 'react';

class EducationForm extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = this.props.education

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();
      this.setState(
        {start_date: (this.state.start_year.concat("-", this.state.start_month, "-01")), 
        end_date: (this.state.end_year.concat("-", this.state.end_month, "-01"))}, 
      () => console.log(this.state))
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
        <form onSubmit={this.handleSubmit}>
          <label>School*</label>
            <input type="text" value={this.state.school} onChange={this.handleUpdate('school')} placeholder="Ex: Stanford University"/>
          <label>Degree</label>
            <input type="text" value={this.state.degree} onChange={this.handleUpdate('degree')} placeholder="Ex: Bachelor's"/>
          <label>Field of Study</label>
            <input type="text" value={this.state.field} onChange={this.handleUpdate('field')} placeholder="Ex: Computer Science"/>
          <label>Start date</label>
            <select onChange={this.handleUpdate('start_month')}>
              <option value="Month">Month</option>
              {monthsArray.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <select onChange={this.handleUpdate('start_year')}>
              <option value="Year">Year</option>
              {startYearArray.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          <label>End date (or expected)</label>
              <select onChange={this.handleUpdate('end_month')}>
                <option value="Month">Month</option>
                {monthsArray.map((month) => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            <select onChange={this.handleUpdate('end_year')}>
              <option value="Year">Year</option>
                {endYearArray.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            <label>Activities and societies</label>
            <input type="text" value={this.state.activities} onChange={this.handleUpdate('activities')} placeholder="Ex: Alpha Phi Omega, Marching Band, Volleyball"/>
            <label>Description</label>
            <input type="text" value={this.state.description} onChange={this.handleUpdate('description')}/>
            <button type="submit">Save</button>
        </form>
      </div>
    )
  }

}

export default EducationForm;