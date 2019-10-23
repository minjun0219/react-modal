import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import cx from 'classnames';

import styles from './Modal.module.scss';

const CLOSE_TIMEOUT_MS = 80;

class Modal extends React.PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onAfterOpen: PropTypes.func,
    onRequestClose: PropTypes.func
  };

  static defaultProps = {
    isOpen: false,
    onAfterOpen() {},
    onRequestClose() {}
  };

  render() {
    const {
      isOpen,
      children,
      onAfterOpen,
      onRequestClose
    } = this.props;
    return (
      <ReactModal
        isOpen={isOpen}
        htmlOpenClassName={styles.html}
        bodyOpenClassName={styles.body}
        portalClassName={styles.portal}
        overlayClassName={{
          base: cx(styles.overlay, {
            // [styles.alignCenter]: isAlignCenter
          }),
          afterOpen: styles.overlayAfterOpen,
          beforeClose: styles.overlayBeforeClose
        }}
        className={{
          base: cx(styles.window, {
            // [styles.scrollFixed]: isContainer
          }),
          afterOpen: styles.windowAfterOpen,
          beforeClose: styles.windowBeforeClose
        }}
        closeTimeoutMS={CLOSE_TIMEOUT_MS}
        appElement={global.document && document.body}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
      >
        {children}
      </ReactModal>
    );
  }
}

export default Modal;
