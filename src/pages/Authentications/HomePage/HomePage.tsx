import React from 'react'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import Expenses from '../../../Components/ExpensesTable/Expense'
import { StyledHomePage } from './HomePage.styles'
import ExpNavbar from '../../../Components/ExpNavbar/ExpNavbar'
const HomePage = () => {
  return (
    <StyledHomePage>
        <ExpNavbar />
        <Sidebar />
        <Expenses />
    </StyledHomePage>
  )
}

export default HomePage
