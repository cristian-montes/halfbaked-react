import React from 'react'
import FilterForm from '../Forms/FilterForm'
import SearchForm from '../Forms/SearchForm'
// import SortForm from '../Forms/SortForm' ---> 1st error.
import './Controls.css'

export default function Controls({
  name,
  handleSubmit,
  handleNameChange,
  types,
  filterChange,
  selectedType,
  sortChange,
}) {
  return (
    <div className="controlsContainer">
      <SearchForm name={name} handleSubmit={handleSubmit} handleNameChange={handleNameChange} />
      <FilterForm types={types} filterChange={filterChange} selectedType={selectedType} />
    </div>
  )
}
