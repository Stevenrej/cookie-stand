'strictly use';

// globalarrays

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

let globalstore = [];

let myForm = document.getElementById('myform');



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

  let tables = document.getElementById('table');
  let tablebody = document.createElement('tbody');
  tables.appendChild(tablebody);

  let tablecookie = document.createElement('tr');
  tablebody.appendChild(tablecookie);

  let title = document.createElement('td');
  title.innerHTML = this.name;
  tablecookie.appendChild(title);


  for (let i = 0; i < hours.length; i++) {

    let listelement = document.createElement('td');
    listelement.innerHTML = `${this.cookiesperhour[i]}`;
    tablecookie.appendChild(listelement);
  }
  let totals = document.createElement('td');
  totals.innerHTML = `Total: ${this.sumofcookie}`;
  tablecookie.appendChild(totals);

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

// functions


function render_all() {
  for (let i = 0; i < globalstore.length; i++) {
    globalstore[i].getcustomer();
    globalstore[i].getcookie();
    globalstore[i].displaydata();
  }
}


function headercreate() {
  let tables = document.getElementById('table');
  let tablehour = document.createElement('tr');
  let tablehead = document.createElement('th');
  tablehead.innerText = '';
  tablehour.appendChild(tablehead);
  tables.appendChild(tablehour);
  for (let i = 0; i < hours.length; i++) {
    let listhour = document.createElement('td');
    listhour.innerHTML = `${hours[i]}`;
    tablehour.appendChild(listhour);
  }
  let tableelement = document.createElement('td');
  tableelement.innerText = 'Daily Total';
  tablehour.appendChild(tableelement);
}

function totaltotals() {
  let tables = document.getElementById('table');
  let tablefoot = document.createElement('TFoot');
  let tabletotal = document.createElement('th');
  tabletotal.innerText = 'Total per Hour';
  tablefoot.appendChild(tabletotal);
  tables.appendChild(tablefoot);
  for (let i = 0; i < hours.length; i++) {
    let hourcook = 0;
    for (let j = 0; j < globalstore.length; j++) {
      hourcook += globalstore[j].cookiesperhour[i];
    }
    let listhour = document.createElement('td');
    listhour.innerText = hourcook;
    tablefoot.appendChild(listhour);
  }
  let grandtotal = 0;
  for (let j = 0; j < globalstore.length; j++) {
    grandtotal += globalstore[j].sumofcookie;
  }
  let tableelement = document.createElement('td');
  tableelement.innerText = grandtotal;
  tablefoot.appendChild(tableelement);
}




headercreate();
render_all();
totaltotals();

function deleteTFoot() {

  document.getElementById('table').deleteTFoot();
}

console.log(globalstore);

function handlesubmit(event) {
  event.preventDefault();

  let name = event.target.cityname.value;
  let averagecookie = event.target.averagecookie.value;
  let mincust = event.target.mincust.value;
  let maxcust = event.target.maxcust.value;

  let newcity = new City_build(name, averagecookie, mincust, maxcust);

  newcity.getcustomer();
  newcity.getcookie();
  newcity.displaydata();

  deleteTFoot();
  totaltotals();
  myForm.reset();
}






myForm.addEventListener('submit', handlesubmit);

