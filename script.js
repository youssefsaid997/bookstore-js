//logic
//constructor
function Book(title, author, number) {
  this.title = title;
  this.author = author;
  this.number = number;
}

function UI() {}

UI.prototype.addBook = function (book) {
  const list = document.getElementById("book-list");

  // adding to the ui

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.number}</td>
    <td><a href='#' class="delete">X</a></td>
    `;
  list.appendChild(row);
};
UI.prototype.clearElements = function () {
  document.getElementById("name").value = "" ;
  document.getElementById("number").value = "" ;
  document.getElementById("author").value = "" ;
};
UI.prototype.showAlert =function(msg,className){
    const formControl = document.getElementById("book-form");
    const container = document.querySelector('.container');
    const div =document.createElement('div');

    div.className=`alert ${className}`;

    div.appendChild(document.createTextNode(msg));


    container.insertBefore(div,formControl);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
    
}

//deleting 
UI.prototype.deleteElement = (target)=>{
    if(target.className==="delete"){
        target.parentElement.parentElement.remove();
    }
}

//adding elements to the ui

const formControl = document.getElementById("book-form");

formControl.addEventListener("submit", (e) => {
  const title = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const author = document.getElementById("author").value;

  const newBook = new Book(title, author, number);

  const ui = new UI();
  console.log(ui);


  if(title === "" || number === "" || author === ""){
    ui.showAlert("please fill the inputs" ,"error")
  }else{

      ui.showAlert("success","success");
  
  

  ui.addBook(newBook);

  
  ui.clearElements();
  }



  // console.log(newBook);
  e.preventDefault();
});


document.getElementById("book-list").addEventListener('click',(e)=>{

    const ui = new UI();


    ui.deleteElement(e.target);
    ui.showAlert("element removed","success")


    console.log(123);
    e.preventDefault();
})