import React from 'react';

function FormField({ label, type, ...demaisAtributos }){
    return(
      <div>
        <label>              
          {label}
          {type === "textarea" ?
            <textarea
              type = {type}
              {...demaisAtributos}
            />
            :
            <input 
              type={type}
              {...demaisAtributos}
            />
          }
        </label>
      </div>
    );
}

export default FormField;