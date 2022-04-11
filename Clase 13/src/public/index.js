const template = Handlebars.compile(`<ul>
<li>{{first_name}}</li>
<li>{{last_name}}</li>
<li>{{age}}</li>
<li>{{email}}</li>
<li>{{phone}}</li>
</ul>
`);

const html = template({
    first_name: 'Luciano',
    last_name: 'Yomayel',
    age: 21,
    email: 'l.yomayel@gmail.com',
    phone: 1123905295
});

document.getElementById('data').innerHTML = html;