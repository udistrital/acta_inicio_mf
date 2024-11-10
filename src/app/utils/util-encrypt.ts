import { secretKey } from "../constants/secret-ket";
import * as CryptoJS from 'crypto-js';

export const encrypt = (data: any) => {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
};

export const decrypt = (valueEncrypt: any) => {
    const valueDecrypt = CryptoJS.AES.decrypt(valueEncrypt, secretKey).toString(CryptoJS.enc.Utf8);
    if (!valueDecrypt) {
        return null;
    } else {
        return JSON.parse(valueDecrypt);
    }
}