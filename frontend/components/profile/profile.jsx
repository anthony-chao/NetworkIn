import React from "react";
import EducationIndexItem from './education/education_index_item'
import { connect } from "react-redux";
import GlobalNavBar from '../globalnavbar/global_nav_bar'
import { fetchEducations } from "../../actions/education_actions";

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchEducations();
        console.log(this.props)
    }

    render() {
        return (
            <div>
                < GlobalNavBar />
                <h1>The profile is showing!</h1>
                {this.props.currentUser.id}
                {console.log(this.props.viewedUser[0])}
                {/* {this.props.viewedUser} */}
                {/* < EducationIndexItem  /> */}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const array = Object.values(state.entities.viewedUser);
    let newArray = array.filter(element => element.user_id === parseInt(ownProps.match.params.id));
    return {
        currentUser: state.entities.users[state.session.id],
        viewedUser: newArray
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchEducations: (userId) => dispatch(fetchEducations(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);