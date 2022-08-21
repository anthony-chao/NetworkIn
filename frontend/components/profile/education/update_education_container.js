import { connect } from "react-redux";
import EducationForm from "./education_form";
import { addEducation } from '../../../actions/education_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        viewedUserId: ownProps.viewedPageId,
        education: {
            user_id: state.viewedUserEducation.user_id,
            school: state.viewedUserEducation.school,
            degree: state.viewedUserEducation.degree,
            field: state.viewedUserEducation.field,
            start_date: state.viewedUserEducation.start_date,
            end_date: state.viewedUserEducation.end_date,
            activities: state.viewedUserEducation.activities,
            description: state.viewedUserEducation.description,
            start_year: state.viewedUserEducation.start_year.getFullYear(),
            start_month: state.viewedUserEducation.start_year.getMonth(),
            end_year: state.viewedUserEducation.end_year.getFullYear(),
            end_month: state.viewedUserEducation.end_year.getMonth()
        }
    }
};

const mapDispatchToProps = (dispatch) => ({
    educationFunction: (education) => dispatch(addEducation(education))
})

export default connect (mapStateToProps, mapDispatchToProps)(EducationForm);