import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import ReactDOM from 'react-dom'
import { CompletedBooks } from './CompletedBooks'

describe('CompletedBooks', () => {
    test('should display number of completed books from api', () => {
        const mockApiFn = jest.fn()
        render(<CompletedBooks/>)
    })
})

