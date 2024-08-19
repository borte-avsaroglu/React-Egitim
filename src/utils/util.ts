export const validUserLogin = (username: any, password: any) : boolean => {
    if (username === '' || password === '') {
        return false;
    }
    return true;
}