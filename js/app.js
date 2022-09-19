'strictly use';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomcustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let Seattle = {
  name: 'Seattle',
  customers: [],
  cookiesperhour: [],
  averagecookie: 6.3,
  sumofcookie: 0,
  mincust: 23,
  maxcust: 65,
  getcustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourcustomer = randomcustomer(this.mincust, this.maxcust);
      this.customers.push(hourcustomer);
    }
  },
  getcookie: function () {
    this.getcustomer();
    for (let i = 0; i < hours.length; i++) {
      let hourcookie = this.averagecookie * this.customers[i];
      let roundedhourcookie = Math.ceil(hourcookie);
      this.cookiesperhour.push(roundedhourcookie);
    }
  },
  addall: function () {
    let sum = 0;
    for (let i = 0; i < this.cookiesperhour.length; i++)
      sum += this.cookiesperhour[i];
    this.sumofcookie.push(sum);
  }
};


let Tokyo = {
  name: 'Toyko',
  customers: [],
  cookiesperhour: [],
  sumofcookie: 0,
  averagecookie: 1.2,
  mincust: 3,
  maxcust: 24,
  getcustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourcustomer = randomcustomer(this.mincust, this.maxcust);
      this.customers.push(hourcustomer);
    }
  },
  getcookie: function () {
    this.getcustomer();
    for (let i = 0; i < hours.length; i++) {
      let hourcookie = this.averagecookie * this.customers[i];
      let roundedhourcookie = Math.ceil(hourcookie);
      this.cookiesperhour.push(roundedhourcookie);
    }
  },
  addall: function () {
    let sum = 0;
    for (let i = 0; i < this.cookiesperhour.length; i++)
      sum += this.cookiesperhour[i];
    this.sumofcookie.push(sum);
  }
};


let Dubai = {
  name: 'Dubai',
  customers: [],
  cookiesperhour: [],
  sumofcookie: 0,
  averagecookie: 3.7,
  mincust: 11,
  maxcust: 38,
  getcustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourcustomer = randomcustomer(this.mincust, this.maxcust);
      this.customers.push(hourcustomer);
    }
  },
  getcookie: function () {
    this.getcustomer();
    for (let i = 0; i < hours.length; i++) {
      let hourcookie = this.averagecookie * this.customers[i];
      let roundedhourcookie = Math.ceil(hourcookie);
      this.cookiesperhour.push(roundedhourcookie);
    }
  },
  addall: function () {
    let sum = 0;
    for (let i = 0; i < this.cookiesperhour.length; i++)
      sum += this.cookiesperhour[i];
    this.sumofcookie.push(sum);
  }
};


let Paris = {
  name: 'Paris',
  customers: [],
  cookiesperhour: [],
  sumofcookie: 0,
  averagecookie: 2.3,
  mincust: 20,
  maxcust: 38,
  getcustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourcustomer = randomcustomer(this.mincust, this.maxcust);
      this.customers.push(hourcustomer);
    }
  },
  getcookie: function () {
    this.getcustomer();
    for (let i = 0; i < hours.length; i++) {
      let hourcookie = this.averagecookie * this.customers[i];
      let roundedhourcookie = Math.ceil(hourcookie);
      this.cookiesperhour.push(roundedhourcookie);
    }
  },
  addall: function () {
    let sum = 0;
    for (let i = 0; i < this.cookiesperhour.length; i++)
      sum += this.cookiesperhour[i];
    this.sumofcookie.push(sum);
  }
};


let Lima = {
  name: 'Lima',
  customers: [],
  cookiesperhour: [],
  sumofcookie: 0,
  averagecookie: 4.6,
  mincust: 2,
  maxcust: 16,
  getcustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourcustomer = randomcustomer(this.mincust, this.maxcust);
      this.customers.push(hourcustomer);
    }
  },
  getcookie: function () {
    this.getcustomer();
    for (let i = 0; i < hours.length; i++) {
      let hourcookie = this.averagecookie * this.customers[i];
      let roundedhourcookie = Math.ceil(hourcookie);
      this.cookiesperhour.push(roundedhourcookie);
    }
  },
  addall: function () {
    let sum = 0;
    for (let i = 0; i < this.cookiesperhour.length; i++)
      sum += this.cookiesperhour[i];
    this.sumofcookie.push(sum);
  }
};


const parentElement = document.getElementById('citiescookienumbers');
const article = document.createElement('article');
parentElement.appendChild(article);

const h2 = document.createElement('h2');
h2.textContent = ;
article.appendChild(h2);

const p = document.createElement('p');
p.textContent = 'Frankie is adorable, and is ' + frankie.age + ' old.';
article.appendChild(p);

const ul = document.createElement('ul');
article.appendChild(ul);

for (let i = 0; i < frankie.interests.length; i++) {
  const li = document.createElement('li');
  li.textContent = frankie.interests[i];
  ul.appendChild(li);
}



