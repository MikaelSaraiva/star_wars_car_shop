import React from 'react'

function PagesNavBar({ pageNumber, nextPageUrl, setPage }) {

    let nextPage = 1
    if (nextPageUrl != 'null') {
        nextPage = parseInt(nextPageUrl.slice(nextPageUrl.length - 1, nextPageUrl.length))

    } else {
        nextPage = nextPageUrl
    }

    if (pageNumber === 1) {
        return (
            <div>
                <button onClick={() => { setPage(pageNumber + 1) }}>Proximo</button>
            </div>
        )

    } else if (nextPage === 'null') {
        return (
            <div>
                <button onClick={() => { setPage(pageNumber - 1) }}>Anterior</button>
            </div>
        )

    }

    return (
        <div>
            <button onClick={() => { setPage(pageNumber - 1) }}>Anterior</button>
            <button onClick={() => { setPage(pageNumber + 1) }}>Proximo</button>
        </div>
    )
}

export default PagesNavBar