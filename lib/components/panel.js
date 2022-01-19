import React from 'react';
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