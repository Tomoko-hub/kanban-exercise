import React from 'react';

import Alert from 'react-bootstrap/Alert'

export const ExampleComponent = ({name, ...rest}) => {
  return (
    <>
    <p> ExampleComponent with name: {name}<br/>
    I'm a presentational component, remove me before starting the exercise- hellooo
    </p>
    {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  )
}
