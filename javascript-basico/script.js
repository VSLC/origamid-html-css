const links = document.querySelectorAll("nav a");

function logHref(item){
  const href = item.href;
  console.log(href);
}
links.forEach(logHref)


const paragrafos = document.querySelectorAll("p")

function mudaparagrafo(){
  console.log(paragrafos.innerHtml)
  

}

paragrafos.forEach(mudaparagrafo);
console.log(paragrafos);