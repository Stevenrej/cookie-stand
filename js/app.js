'strictly use';

// globalarrays

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let globalstore = [];




// protype methods

City_build.prototype.getcustomer = function () {
  for (let i = 0; i < hours.length; i++) {
    let hourcustomer = randomcustomer(this.mincust, this.maxcust);
    this.customers.push(hourcustomer);
  }
};

City_build.prototype.getcookie = function () {
  this.getcustomer();
  for (let i = 0; i < hours.length; i++) {
    let hourcookie = this.averagecookie * this.customers[i];
    let roundedhourcookie = Math.ceil(hourcookie);
    this.sumofcookie += roundedhourcookie;
    this.cookiesperhour.push(roundedhourcookie);
  }
};

City_build.prototype.displaydata = function () {
  this.getcookie();
  let section = document.getElementById('display');

  let title = document.createElement('h2');
  title.innerHTML = this.name;
  section.appendChild(title);

  let list = document.createElement('ul');
  section.appendChild(list);


  let city = this.name;


  for (let i = 0; i < hours.length; i++) {
    let listelement = document.createElement('li');
    listelement.innerHTML = `${hours[i]}: ${this.cookiesperhour[i]} cookies`;
    list.appendChild(listelement);
  }
  let totals = document.createElement('li');
  totals.innerHTML = `Total ${this.sumofcookie}`;
  list.appendChild(totals);
};

// contructor

function City_build(name, averagecookie, mincust, maxcust) {
  this.name = name;
  this.averagecookie = averagecookie;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.customers = [];
  this.sumofcookie = 0;
  this.cookiesperhour = [];
  globalstore.push(this);
}


// random number generator

function randomcustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// creating new objects

new City_build('Seattle', 6.3, 23, 65);
new City_build('Toyko', 1.2, 3, 24);
new City_build('Dubai', 3.7, 11, 38);
new City_build('Paris', 2.3, 20, 38);
new City_build('Lima', 4.6, 2, 16);

// prototypes

function render_all() {
  for (let i = 0; i < globalstore.length; i++) {
    globalstore[i].getcustomer();
    globalstore[i].getcookie();
    globalstore[i].displaydata();
  }
}

render_all();

// city objects

// let Seattle = {
//   name: 'Seattle',
//   customers: 0,
//   cookiesperhour: [],
//   averagecookie: 6.3,
//   sumofcookie: 0,
//   mincust: 23,
//   maxcust: 65,
//   getcustomer: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let hourcustomer = randomcustomer(this.mincust, this.maxcust);
//       this.customers = hourcustomer;
//     }
//   },
//   getcookie: function () {
//     this.getcustomer();
//     for (let i = 0; i < hours.length; i++) {
//       let hourcookie = this.averagecookie * this.customers;
//       let roundedhourcookie = Math.ceil(hourcookie);
//       this.sumofcookie += roundedhourcookie;
//       this.cookiesperhour.push(roundedhourcookie);
//       return this.cookiesperhour;
//     }
//   },
// };

// let Tokyo = {
//   name: 'Toyko',
//   customers: 0,
//   cookiesperhour: [],
//   sumofcookie: 0,
//   averagecookie: 1.2,
//   mincust: 3,
//   maxcust: 24,
//   getcustomer: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let hourcustomer = randomcustomer(this.mincust, this.maxcust);
//       this.customers = hourcustomer;
//     }
//   },
//   getcookie: function () {
//     this.getcustomer();
//     for (let i = 0; i < hours.length; i++) {
//       let hourcookie = this.averagecookie * this.customers;
//       let roundedhourcookie = Math.ceil(hourcookie);
//       this.sumofcookie += roundedhourcookie;
//       this.cookiesperhour.push(roundedhourcookie);
//       return this.cookiesperhour;
//     }
//   },
// };


// let Dubai = {
//   name: 'Dubai',
//   customers: 0,
//   cookiesperhour: [],
//   sumofcookie: 0,
//   averagecookie: 3.7,
//   mincust: 11,
//   maxcust: 38,
//   getcustomer: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let hourcustomer = randomcustomer(this.mincust, this.maxcust);
//       this.customers = hourcustomer;
//     }
//   },
//   getcookie: function () {
//     this.getcustomer();
//     for (let i = 0; i < hours.length; i++) {
//       let hourcookie = this.averagecookie * this.customers;
//       let roundedhourcookie = Math.ceil(hourcookie);
//       this.sumofcookie += roundedhourcookie;
//       this.cookiesperhour.push(roundedhourcookie);
//       return this.cookiesperhour;
//     }
//   },
// };


// let Paris = {
//   name: 'Paris',
//   customers: 0,
//   cookiesperhour: [],
//   sumofcookie: 0,
//   averagecookie: 2.3,
//   mincust: 20,
//   maxcust: 38,
//   getcustomer: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let hourcustomer = randomcustomer(this.mincust, this.maxcust);
//       this.customers = hourcustomer;
//     }
//   },
//   getcookie: function () {
//     this.getcustomer();
//     for (let i = 0; i < hours.length; i++) {
//       let hourcookie = this.averagecookie * this.customers;
//       let roundedhourcookie = Math.ceil(hourcookie);
//       this.sumofcookie += roundedhourcookie;
//       this.cookiesperhour.push(roundedhourcookie);
//       return this.cookiesperhour;
//     }
//   },
// };


// let Lima = {
//   name: 'Lima',
//   customers: 0,
//   cookiesperhour: [],
//   sumofcookie: 0,
//   averagecookie: 4.6,
//   mincust: 2,
//   maxcust: 16,
//   getcustomer: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let hourcustomer = randomcustomer(this.mincust, this.maxcust);
//       this.customers = hourcustomer;
//     }
//   },
//   getcookie: function () {
//     this.getcustomer();
//     for (let i = 0; i < hours.length; i++) {
//       let hourcookie = this.averagecookie * this.customers;
//       let roundedhourcookie = Math.ceil(hourcookie);
//       this.sumofcookie += roundedhourcookie;
//       this.cookiesperhour.push(roundedhourcookie);
//       return this.cookiesperhour;
//     }
//   },
// };

// let storearray = [Seattle, Tokyo, Dubai, Paris, Lima];

// const displaydata = function () {
//   let section = document.getElementById('display');
//   for (let i = 0; i < storearray.length; i++) {

//     let title = document.createElement('h2');
//     title.innerHTML = storearray[i].name;
//     section.appendChild(title);

//     let list = document.createElement('ul');
//     section.appendChild(list);

//     let totals = document.createElement('li');
//     totals.innerhtml = 'Total';
//     section.appendChild(totals);

//     let city = storearray[i];


//     for (let i = 0; i < hours.length; i++) {
//       city.getcookie();
//       let listelement = document.createElement('li');
//       listelement.innerHTML = `${hours[i]}: ${city.cookiesperhour[i]} cookies`;
//       list.appendChild(listelement);
//     }
//   }
// };

// displaydata();














