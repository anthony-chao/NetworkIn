import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import Feed from './feed';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    openModal: (type) => dispatch(openModal(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
