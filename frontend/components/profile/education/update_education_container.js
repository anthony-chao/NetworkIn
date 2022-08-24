import { connect } from "react-redux";
import EducationForm from "./education_form";
import { updateEducation, deleteEducation } from '../../../actions/education_actions';
import { closeModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        viewedUserId: state.entities.viewedUser,
        education: {
            id: state.entities.viewedUserEducation[ownProps.educationId].id,
            user_id: state.entities.viewedUserEducation[ownProps.educationId].user_id,
            school: state.entities.viewedUserEducation[ownProps.educationId].school,
            degree: state.entities.viewedUserEducation[ownProps.educationId].degree,
            field: state.entities.viewedUserEducation[ownProps.educationId].field,
            start_date: state.entities.viewedUserEducation[ownProps.educationId].start_date,
            end_date: state.entities.viewedUserEducation[ownProps.educationId].end_date,
            activities: state.entities.viewedUserEducation[ownProps.educationId].activities,
            description: state.entities.viewedUserEducation[ownProps.educationId].description,
            // start_month: "",
            // start_year: "",
            // end_month: "",
            // end_year: "",
            start_month: String(state.entities.viewedUserEducation[ownProps.educationId].start_date).slice(5, 7),
            start_year: String(state.entities.viewedUserEducation[ownProps.educationId].start_date).slice(0, 4),
            end_month: String(state.entities.viewedUserEducation[ownProps.educationId].end_date).slice(5, 7),
            end_year: String(state.entities.viewedUserEducation[ownProps.educationId].end_date).slice(0, 4)
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