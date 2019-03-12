// 30 minutes max
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (let i=0; i<students.length; i++){
    console.log('Name:' + students[i]['name'] + ', ' + 'Cohort:' + students[i]['cohort']);
}


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for(let colleague in users) {
    console.log(colleague.toUpperCase());
    var count = 1;
    for(let i in users[colleague]) {
      let name = users[colleague][i].first_name+users[colleague][i].last_name;
      console.log(count + '-' + users[colleague][i].last_name.toUpperCase() + ', ' + users[colleague][i].first_name.toUpperCase() + '-' + name.length);
      count++;
    }
  }

