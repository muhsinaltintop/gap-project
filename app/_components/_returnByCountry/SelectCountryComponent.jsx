import React from 'react'
import DropDown from '../_atoms/DropDown'
import countries from "../../_components/_returnByCountry/returnCountries.json"

const SelectCountryComponent = ({ country, onCountryChange

}) => {
  return (
    <div>
        <DropDown label="Please Select Country" options={countries} value={country} onChange={onCountryChange}/>
    </div>
  )
}

export default SelectCountryComponent