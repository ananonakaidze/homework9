const names = ['John Doe', 'Alice Smith', 'Bob Johnson'];
const initials = names.map(name => {
  const nameParts = name.split(' ');
  return nameParts.map(part => part[0]).join('');
});
console.log(initials);
