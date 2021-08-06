function getValue() {
    let a = document.querySelector('.name').value;
    let b = document.querySelector('.city').value;
    
    document.querySelector('.output').innerHTML = `<div>Name:${a}</div><div>City:${b}</div>`;
    
}