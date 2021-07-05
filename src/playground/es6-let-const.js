//block scoping
var fullname = 'Yash Bhalgat';
if (fullname)
{
    const firstname = fullname.split(' ')[0]
    console.log(firstname);
}
console.log(firstname);