'strictly use';

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

function randomcustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let Seattle = {
  name: 'Seattle',
  customer: 0,
  getcustomer: function () {
    this.customer = randomcustomer(23, 65);
  },
};

let Toyko = {
  name: 'Toyko',
  customer: 0,
  getcustomer: function () {
    this.customer = randomcustomer(3, 24);
  },
};

let Dubai = {
  name: 'Dubai',
  customer: 0,
  getcustomer: function () {
    this.customer = randomcustomer(3, 24);
  },
};





