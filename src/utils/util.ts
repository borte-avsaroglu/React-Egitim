import CryptoJS from "crypto-js";
import { ICustomer } from "../models/ICustomer";

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

export const decrypt = (cipherText: string) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, key)
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext
}

export const getUser = () => {
    const stUser = localStorage.getItem('user')
    if(stUser) {
        try{
            const plaintext = decrypt(stUser)
            const objUser:ICustomer = JSON.parse(plaintext)
            return objUser
        }catch(error){
            localStorage.removeItem('user')
        }
    }
    return null
}

