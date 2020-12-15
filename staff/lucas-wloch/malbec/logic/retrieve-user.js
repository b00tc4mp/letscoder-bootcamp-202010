import call from '../utils/call'
import { validateToken } from './helpers/validations'
import context from './context'

function retrieveUser(token) {
    validateToken(token)

    const { API_URL } = context

    return call('GET', `${API_URL}/users`, { Authorization: `Bearer ${token}` }, '')
        .then(response => {
            const { status, body } = response

            if (status !== 200) {
                const { error } = JSON.parse(body);

                throw new Error(error);
            }
            const { user } = JSON.parse(body);

            return user
        })
};

export default retrieveUser 