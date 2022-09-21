import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import Feed from './feed';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user
    }
};

const mapDispatchToProps = dispatch => ({
    openModal: (type) => dispatch(openModal(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
