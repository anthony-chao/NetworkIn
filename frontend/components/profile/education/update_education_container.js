import { connect } from "react-redux";
import EducationForm from "./education_form";
import { updateEducation, deleteEducation } from '../../../actions/education_actions';
import { closeModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    const toUpdateEducation = state.entities.viewedUserEducation[ownProps.educationId]
    return {
        currentUser: state.state.session.user,
        viewedUserId: state.entities.viewedUser,
        education: {
            id: toUpdateEducation.id,
            user_id: toUpdateEducation.user_id,
            school: toUpdateEducation.school,
            degree: toUpdateEducation.degree,
            field: toUpdateEducation.field,
            start_date: toUpdateEducation.start_date,
            end_date: toUpdateEducation.end_date,
            activities: toUpdateEducation.activities,
            description: toUpdateEducation.description,
            start_month: String(toUpdateEducation.start_date).slice(5, 7),
            start_year: String(toUpdateEducation.start_date).slice(0, 4),
            end_month: String(toUpdateEducation.end_date).slice(5, 7),
            end_year: String(toUpdateEducation.end_date).slice(0, 4)
        },
        formType: 'Edit Education'
    }
};

const mapDispatchToProps = (dispatch) => ({
    educationFunction: (education) => dispatch(updateEducation(education)),
    deleteEducation: (education) => dispatch(deleteEducation(education)),
    closeModal: () => dispatch(closeModal())
})

export default connect (mapStateToProps, mapDispatchToProps)(EducationForm);