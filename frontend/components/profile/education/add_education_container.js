import { connect } from "react-redux";
import EducationForm from "./education_form";
import { addEducation } from '../../../actions/education_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        viewedUserId: ownProps.viewedPageId,
        education: {
            user_id: "",
            school: "",
            degree: "",
            field: "",
            start_date: "",
            end_date: "",
            activities: "",
            description: "",
            start_year: "",
            start_month: "",
            end_year: "",
            end_month: ""
        }
    }
};

const mapDispatchToProps = (dispatch) => ({
    educationFunction: (education) => dispatch(addEducation(education))
})

export default connect (mapStateToProps, mapDispatchToProps)(EducationForm);