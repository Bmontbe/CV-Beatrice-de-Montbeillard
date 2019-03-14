function age() {
  let today = new Date();
  let birthday = new Date('1984-12-21T03:24:00');
  let age = ((today - birthday) / 31536000000).toFixed(0);
  return age;
}

let element = document.getElementById('age');
element.innerHTML = `${age()} ans`