import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ScreenB from './ScreenB'
import { increment, decrement } from '../../actions'
import { getValue } from '../../selectors/valueSelector'

const mapStateToProps = (state) => {
  return {
    value: getValue(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    increment,
    decrement
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenB)
