import { connect } from "react-redux";
import EducationForm from "./education_form";
import { updateEducation, deleteEducation } from '../../../actions/education_actions';
import { closeModal } from "../../../actions/modal_actions";

const mapStateToProps = (state) => {
    debugger;
    return {
        currentUser: state.entities.users[state.session.id],
        viewedUserId: state.entities.viewedUser,
        education: {
            id: 1,
            user_id: state.entities.viewedUser[1].id,
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
    educationFunction: (education) => dispatch(updateEducation(education)),
    deleteEducation: (education) => dispatch(deleteEducation(education)),
    closeModal: () => dispatch(closeModal())
})

export default connect (mapStateToProps, mapDispatchToProps)(EducationForm);