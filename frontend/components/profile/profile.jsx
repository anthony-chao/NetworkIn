import React from "react";
import { connect } from "react-redux";
import GlobalNavBar from '../globalnavbar/global_nav_bar'
import EducationIndexContainer from './education/education_index_container';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //receive user action
    }

    render() {
        return (
            <div>
                < GlobalNavBar />
                <h1>The profile is showing!</h1>
                < EducationIndexContainer viewedPageId={this.props.viewedPageId} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    viewedPageId: ownProps.match.params.id
})

export default connect(mapStateToProps, null)(Profile);