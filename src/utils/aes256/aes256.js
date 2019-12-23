import crypto from 'crypto';

// class AES256 is thanks to https://gist.github.com/brettscott/2ac58ab7cb1c66e2b4a32d6c1c3908a7
// Will play nicely with the aes256 encryption created on the CLI (golang) side
class AES256 {
  static ALGORITHM = 'aes-256-cbc';

  static BLOCK_SIZE = 16;

  static encrypt = (message, encryptionKey) => {
    const iv = crypto.randomBytes(this.BLOCK_SIZE);
    const cipher = crypto.createCipheriv(this.ALGORITHM, encryptionKey, iv);
    let cipherText;

    try {
      cipherText = cipher.update(message, 'utf8', 'hex');
      cipherText += cipher.final('hex');
      cipherText = iv.toString('hex') + cipherText;
    } catch (e) {
      cipherText = null;
    }

    return cipherText;
  }

  static decrypt = (message, encryptionKey) => {
    const contents = Buffer.from(message, 'hex');
    const iv = contents.slice(0, this.BLOCK_SIZE);
    const textBytes = contents.slice(this.BLOCK_SIZE);
    const decipher = crypto.createDecipheriv(this.ALGORITHM, encryptionKey, iv);
    let decrypted = decipher.update(textBytes, 'hex', 'utf8');

    decrypted += decipher.final('utf8');

    return decrypted;
  }
}

export default AES256;
