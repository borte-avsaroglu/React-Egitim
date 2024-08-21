import CryptoJS from "crypto-js";

//iki soru isaretinin anlami eger varsa kendisi yoksa '' alacak anlamina gelir. 
const key = process.env.REACT_APP_KEY ?? ''

export const validUserLogin = (username: any, password: any) : boolean => {
    if (username === '' || password === '') {
        return false;
    }
    return true;
}

// cyrptojs ile encript yapma
export const encrypt = (plaintext: string) => {
    const cipherText = CryptoJS.AES.encrypt(plaintext, key).toString();
    return cipherText
}