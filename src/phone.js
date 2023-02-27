export default class Phone {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  convertPhone() {
    const formatPhone = ['+'];
    const array = /[+]?\s*(\d+)[-\s]*[(]?\s*(\d{3})\s*[)]?[-\s]*(\d+)[-\s]*(\d+)[-\s]*(\d+)/.exec(this.phoneNumber);

    if (this.phoneNumber.trim().startsWith('+')) {
      formatPhone.push(array[1]);
    } else {
      formatPhone.push('7');
    }

    for (let i = 2; i < array.length; i += 1) {
      formatPhone.push(array[i]);
    }
    return formatPhone.join('');
  }
}
