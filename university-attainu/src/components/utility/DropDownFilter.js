import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropDownFilter = () => (
  <Dropdown
    text='Filter'
    icon='filter'
    floating
    labeled
    button
    className='icon'
  >
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Filter by tag' />
      <Dropdown.Item>Coding Challenge</Dropdown.Item>
      <Dropdown.Item>Assignment</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropDownFilter;