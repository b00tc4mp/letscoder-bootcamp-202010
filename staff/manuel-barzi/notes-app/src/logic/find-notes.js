export default function(query, tags, visibility) {
    // if (typeof query !== 'undefined') TODO validate query (string)
    // if (typeof tags !== 'undefined) TODO validate tags (array)
    // if (typeof visibility !== 'undefined') TODO validate visibility (string)

    // TODO mount query string

    const queryParams = {}

    if (query) queryParams.query = query
    if (tags) queryParams.tags = tags.join(',')
    if (visibility) queryParams.visibility = visibility

    const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&')

    debugger

    // TODO call api GET to `${API_URL}?${queryString}` // query=asdfasdf&tags=asdf,asdf,asda&visibility=asdfasdf


    return Promise.resolve()
}