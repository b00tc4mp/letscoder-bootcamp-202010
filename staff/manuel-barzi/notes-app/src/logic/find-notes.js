export default function(query, tags, visibility, fromYear, toYear) {
    // if (typeof query !== 'undefined') TODO validate query (string)
    // if (typeof tags !== 'undefined) TODO validate tags (array)
    // if (typeof visibility !== 'undefined') TODO validate visibility (string)
    // if (typeof fromYear !== 'undefined') TODO validate fromYear (number)
    // if (typeof toYear !== 'undefined') TODO validate toYear (number)

    // TODO mount query string

    const queryParams = {}

    if (query) queryParams.query = query
    if (tags) queryParams.tags = tags.join(',')
    if (visibility) queryParams.visibility = visibility
    if (typeof fromYear === 'number') queryParams.fromYear = fromYear
    if (typeof toYear === 'number') queryParams.toYear = toYear

    const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&')

    debugger

    // TODO call api GET to `${API_URL}?${queryString}` // query=asdfasdf&tags=asdf,asdf,asda&visibility=asdfasdf


    // TODO server-side in the API endpoint handler (handle-find-notes)
    /*
    let { query: { query, tags, visibility, fromYear, toYear } } = req

    tags && tags = tags.split(',')

    fromYear && fromYear = Number(fromYear)
    fromYear && fromYear = Number(fromYear)
    */

    return Promise.resolve()
}