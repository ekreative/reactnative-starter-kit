import { connect } from 'react-redux'

import ScreenB from './ScreenB'
import { increment, decrement } from '../../actions'
import { getValue } from '../../selectors/valueSelector'

const mapStateToProps = (state) => {
  return {
    value: getValue(state)
  }
}

const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenB)
