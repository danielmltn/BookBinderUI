import React, { useEffect, useRef } from 'react'


const url = 'https://localhost:5001/api/Book/'

export const CompletedBooks = () => {

    const bookCountRef:any = useRef(null)

    useEffect(() => {
        async function bookCount() {
            await fetch(url)
            .then(res => res.json())
            .then(data => bookCountRef.current.innerText = data.length)
        }
        bookCount()
    }, [])

    return (
        <p ref={bookCountRef}></p>
    )
}