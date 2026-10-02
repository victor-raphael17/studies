export default class Encrypt {
    private static readonly KEY_LENGTH = 5;

    public static encrypt(message: string, key: string): string {
        if (key.length !== this.KEY_LENGTH) {
            throw new Error(`A chave deve ter exatamente ${this.KEY_LENGTH} caracteres.`);
        }

        let encrypted = "";

        for (let i = 0; i < message.length; i++) {
            const messageCode = message.charCodeAt(i);
            console.log("messageCode: " + messageCode);

            const keyCode = key.charCodeAt(i % this.KEY_LENGTH);
            console.log("keyCode: " + keyCode);

            const encryptedCode = messageCode ^ keyCode;
            console.log("encryptedCode: " + encryptedCode);

            encrypted += encryptedCode.toString(16).padStart(2, "0");
            console.log("encrypted: " + encrypted);
        }

        return encrypted;
    }
}

const message = "teste";
const key = "abc";

console.log(Encrypt.encrypt(message, key));

console.log("---------------------")a

const message2 = "testes";
const key2 = "abcd";

console.log(Encrypt.encrypt(message2, key2));
