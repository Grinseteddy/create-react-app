import React from 'react';
import { askForPermissionToReceiveNotifications } from './push-notification';

const NotificationButton = () => (
    <button onClick={askForPermissionToReceiveNotifications} >
        Click here to get notifications
    </button>
);

export default NotificationButton;
