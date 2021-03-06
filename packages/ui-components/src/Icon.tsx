// Copyright 2018-2019 @paritytech/substrate-light-ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from 'styled-components';
import SUIIcon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';

const Icon = styled(SUIIcon)`
  &&& {
    color: ${props => props.theme.lightBlue2}
  }`;

export default Icon;
