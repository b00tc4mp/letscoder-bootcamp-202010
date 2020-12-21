import call from '../utils/call'
import { validateToken } from './helpers/validations'
import context from './context'

const saveMenu = (token) => {
    validateToken(token)

    const { API_URL } = context

    return call('POST', `${API_URL}/menu`, { Authorization: `Bearer ${token}` }, '')
        .then(response => {
            const { status, body } = response

            if (status !== 201) {
                const { error } = JSON.parse(body)

                throw new Error(error)
            }
            const { menuId } = JSON.parse(body)
            debugger
            return menuId
        })

}
export default saveMenu