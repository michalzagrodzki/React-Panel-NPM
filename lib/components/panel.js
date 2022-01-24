import React from 'react';
/**
 * Panel containing title, content and action buttons.
 * @constructor
 * @param {string} title - The title in the panel.
 * @param {string} content - The content of the panel.
 * @param {function} onCancel - Callback method on cancel button.
 * @param {function} onSubmit - Callback method on submit button.
 * @param {any} children - Children components, that you can pass to panel
 */
const Panel = ({title, content, children, onCancel, onSubmit}) => {
   return (
    <div> 
      { 
        title && 
        <h2>{title}</h2>
      }
      { 
        content && 
        <p>{content}</p>
      }
      {children}
      {
        onCancel &&
        <button onClick={onCancel}>Cancel</button>
      }
      {
        onSubmit &&
        <button onClick={onSubmit}>Submit</button>
      }
    </div>
   )
}
export default Panel;