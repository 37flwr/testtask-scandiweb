import CryptoJS from 'crypto-js';

export function hashing(props: any): string {
  const stringified = JSON.stringify(props);
  const wordArray = CryptoJS.enc.Utf8.parse(stringified);

  return CryptoJS.enc.Base64.stringify(wordArray);
}

export function parse(hash: string): any {
  if (!hash) return null;

  const parsedWordArray = CryptoJS.enc.Base64.parse(hash);
  const parsedHash = parsedWordArray.toString(CryptoJS.enc.Utf8);

  return JSON.parse(parsedHash);
}