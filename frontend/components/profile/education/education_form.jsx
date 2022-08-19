import React from 'react';
import GlobalNavBar from '../../globalnavbar/global_nav_bar';

class EducationForm extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <GlobalNavBar/>
          <p>Education goes here</p>
      </div>
    )
  }

}

export default EducationForm;