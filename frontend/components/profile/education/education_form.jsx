import React from 'react';

class EducationForm extends React.Component {
  
  constructor(props) {
    super(props)
  }

  handleUpdate(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  render() {
    const yearsArray = [];
    for (let i = 1950; i < 2022; i++) { yearsArray.push(i)}
    const monthsArray = [  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return (
      <div>
        <form action="">
          <label>School*</label>
            <input type="text" value={this.state.school} onChange={this.handleUpdate('school')}/>
          <label>Degree</label>
            <input type="text" value={this.state.degree} onChange={this.handleUpdate('degree')}/>
          <label>Field of Study</label>
            <input type="text" value={this.state.field} onChange={this.handleUpdate('field')}/>
          <label>Degree</label>
            <input type="text" value={this.state.degree} onChange={this.handleUpdate('degree')}/>
          <label>Start date</label>
            <select name="" id="">
              {yearsArray.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select name="" id="">
              {monthsArray.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          <label>End date
            
          </label>
        </form>
      </div>
    )
  }

}

export default EducationForm;