import * as React from 'react';
import styles from './style.less';

class NotFound extends React.Component<any, any> {
  render() {
    return (
      <div className={styles.notFound}>404</div>
    );
  }
}

export default NotFound;
