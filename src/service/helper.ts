import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class HelperService {
  constructor() {}

  objToQueryString = (obj: any) => {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(encodeURIComponent(key) + "=" + obj[key]);
    }
    return keyValuePairs.join("&");
  };

  getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) {
          const base64 = reader.result;
          resolve(base64);
        }
      };
      reader.onerror = error => reject(error);
    });
  };
}
