import React from 'react';

const FormErrors = ({ formErrors }) => {
  return (
    <div className='form-errors'>
      {
        Object.keys(formErrors).map((fieldName, i) => {
          if (formErrors[fieldName]) {
            return (
              <p key={i}>{formErrors[fieldName]}</p>
            );
          }
        })
      }
    </div>
  );
};

export default FormErrors;