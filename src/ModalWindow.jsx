import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Modal from './Modal';
import styles from './ModalWindow.module.scss';

class ModalWindow extends React.PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool,
    isAlignCenter: PropTypes.bool,
    isStickyFooter: PropTypes.bool,
    header: PropTypes.element,
    footer: PropTypes.element,
    children: PropTypes.node.isRequired,
    onAfterOpen: PropTypes.func,
    onRequestClose: PropTypes.func
  };

  static defaultProps = {
    isOpen: false,
    isAlignCenter: false,
    isStickyFooter: false,
    header: null,
    footer: null,
    onAfterOpen() {},
    onRequestClose() {}
  };

  render() {
    const {
      isAlignCenter,
      isStickyFooter,
      header,
      footer,
      children,
      ...props
    } = this.props;
    return (
      <Modal {...props}>
        <div className={styles.container}>
          <div className={styles.header}>
            {header}
          </div>
          <div className={styles.content}>
            {children}
          </div>
          <div className={cx(styles.footer, {
            [styles.sticky]: isStickyFooter
          })}>
            {footer}
          </div>
        </div>
      </Modal>
    );
  }
}

export default ModalWindow;
