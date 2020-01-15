import React from 'react';

import './sidebar-divider.scss';

// eslint-disable-next-line react/prop-types
const SidebarDivider = ({ orientation, ...props }) => <li className="bi bi-sidebar-divider" {...props} />;

export default React.memo(SidebarDivider);
