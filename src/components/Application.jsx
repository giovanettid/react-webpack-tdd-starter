import React from 'react';
import PropTypes from 'prop-types';

import 'components/Application.scss';

export default class Application extends React.Component {
  static propTypes = {
    configuration: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = this.props.configuration();
  }

  render() {
    return <div className="starter">js starter...</div>;
  }
}
