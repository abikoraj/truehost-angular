/* eslint-disable max-len */
export class Helper{
  static  extractContent(s) {
    const span = document.createElement('span');
    span.innerHTML = s;
    console.log(span.innerText);
    return  span.innerText;
  };
  static validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
