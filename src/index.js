import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import DragAndDropZone from './layouts/DND';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <DragAndDropZone />
   </React.StrictMode>
);
