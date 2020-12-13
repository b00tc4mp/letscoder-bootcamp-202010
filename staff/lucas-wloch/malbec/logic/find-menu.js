import call from '../utils/call'
import context from './context'

function findMenu() {

    const { API_URL } = context

    return call('GET', `${API_URL}/menu`, {}, '')
        .then(response => {
            const { status, body } = response

            if (status !== 200) {
                const { error } = JSON.parse(body);

                throw new Error(error);
            }
            const { menu } = JSON.parse(body);

            return menu
        })
};

export default findMenu 