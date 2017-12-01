import * as React from 'react';
import { connect } from 'dva';
import styles from './style.less';

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.text}>show me your code</div>
    );
  }
}

const mapStateToProps = ({ app }) => ({});

export default connect(mapStateToProps)(App);
