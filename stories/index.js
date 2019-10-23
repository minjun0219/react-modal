import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import ModalWindow from '../src/ModalWindow';
import SampleHeader from './SampleHeader';
import SampleFooter from './SampleFooter';

storiesOf('ModalWindow', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <ModalWindow
      isOpen={boolean('Open', true)}
      onAfterOpen={action('onAfterOpen')}
      onRequestClose={action('onRequestClose')}
    >
      <div>
        ModalWindow
      </div>
    </ModalWindow>
  ))
  .add('align center', () => (
    <ModalWindow
      isOpen={boolean('Open', true)}
      isAlignCenter={boolean('Align Center', true)}
    >
      <div>
        ModalWindow
      </div>
    </ModalWindow>
  ))
  .add('container', () => (
    <ModalWindow
      isOpen={boolean('Open', true)}
      header={<SampleHeader />}
      footer={<SampleFooter />}
    >
      <div style={{ height: '1000px' }}>
        ModalWindow
      </div>
    </ModalWindow>
  ))
  .add('container sticky footer', () => (
    <div>
      <p>테스트-ㅇ-</p>
      <ModalWindow
        isOpen={boolean('Open', true)}
        isStickyFooter
        header={<SampleHeader />}
        footer={<SampleFooter />}
      >
        <div style={{ height: '1000px' }}>
          ModalWindow
        </div>
      </ModalWindow>
    </div>
  ))
  .add('modalWindow in modalWindow', () => (
    <React.Fragment>
      <ModalWindow
        isOpen={boolean('Open', true)}
        isAlignCenter={boolean('Align Center', true)}
      >
        <div>
          ModalWindow
        </div>
      </ModalWindow>
      <ModalWindow
        isOpen={boolean('Open 2', true)}
      >
        <div>
          ModalWindow 2
        </div>
      </ModalWindow>
    </React.Fragment>
  ))
  .add('modalWindow in modalWindow 2', () => (
    <ModalWindow
      isOpen={boolean('Open', true)}
      isAlignCenter={boolean('Align Center', true)}
    >
      <div>
        ModalWindow
      </div>
      <ModalWindow
        isOpen={boolean('Open 2', true)}
      >
        <div>
          ModalWindow 2
        </div>
      </ModalWindow>
    </ModalWindow>
  ));
