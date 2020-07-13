import React from 'react'
import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import { FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core'

const Checkbox = ({ label, ...props }) => (
  <FormControlLabel
    control={<Controller as={MuiCheckbox} {...props} />}
    label={label}
  />
)

Checkbox.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Checkbox