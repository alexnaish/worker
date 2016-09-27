export default {
    isLoggedIn () {
        return sessionStorage.getItem('session-token') === 'true';
    }
}
