import { connect } from "react-redux";
import EducationForm from "./education_form";
import { updateEducation, deleteEducation } from '../../../actions/education_actions';
import { closeModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        viewedUserId: state.entities.viewedUser,
        education: state.entities.viewedUserEducation[ownProps.educationId],
        formType: 'Edit Education'
    }
};

const mapDispatchToProps = (dispatch) => ({
    educationFunction: (education) => dispatch(updateEducation(education)),
    deleteEducation: (education) => dispatch(deleteEducation(education)),
    closeModal: () => dispatch(closeModal())
})

export default connect (mapStateToProps, mapDispatchToProps)(EducationForm);