import React from 'react'
import DropDown from '../_atoms/DropDown'


const SelectCountryComponent = ({ country, countries, onCountryChange

}) => {
  return (
    <div>
        <DropDown label="Please Select Country" options={countries} value={country} onChange={onCountryChange}/>
    </div>
  )
}

export default SelectCountryComponent