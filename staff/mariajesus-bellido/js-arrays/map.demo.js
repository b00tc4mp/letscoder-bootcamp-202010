console.log("DEMO for MAP"); 

var nums = [1, 2, 3, 4, 5]; 

console.log("multiply numbers by 10 from ", nums); 

var result = map(nums, function(value) {return value * 10})

console.log(result); 

console.log("Convert numbers into strings from ", nums); 


var result = map(nums, function(value)  { return value + ''}); 

console.log(result); 



var booleans = [true, false, false, true]; 

console.log ("convert these booleans to string and then change them to uppercase from", booleans);

var result = map(booleans, function(value)  {return (value + ' ' ).toUpperCase()})


console.log (result); 






console.log("An additional demo / example with sort of common data"); 


console.log("We have a group of companies, and we want to get the company names")


var companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
var ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  // Get company names 
var companyNames = companies.map (function(company) {
  
    return company.name;}); 
  
    console.log (companyNames);