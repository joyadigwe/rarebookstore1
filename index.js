   //search for book by title
   function myFunction() {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }; 

  //function to delete a book from the system
   function deleteRow(r) {
    //only deletes row that the button is on
          var i=r.parentNode.parentNode.rowIndex;
          document.getElementById('myTable').deleteRow(i);

   };

   //add book to the syem
   function submitBook() {
     //gets the values from the input texts
   let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    let price = document.getElementById("price").value;
    let condition = document.getElementById("condition").value;
    let x = document.getElementById("delete");
    
    //get the html table
    // 0 = the first table
    let table = document.getElementsByTagName('table')[0];

    // add new empty row to the table
    //0 = in the top of the table, before the row headings
    //table.rows.length = the end
    let newRow = table.insertRow(table.rows.length);

    //add cells to the row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);

    //add values to the new cells that were added to the table
    cell1.innerHTML = title;
    cell2.innerHTML = author;
    cell3.innerHTML = genre;
    cell4.innerHTML = price;
    cell5.innerHTML = condition;
    cell6.innerHTML = `<button id="delete" onClick="deleteRow(this)">Delete </button>`
    
    //`<a id= "delete" onClick="deleteRow(this)">Delete</a>`;
    
   };

   //add books to the system for employee page layout
   function submitBook2() {
    let title = document.getElementById("title").value;
     let author = document.getElementById("author").value;
     let genre = document.getElementById("genre").value;
     let price = document.getElementById("price").value;
     let condition = document.getElementById("condition").value;
     
     
     //get the html table
     // 0 = the first table
     let table = document.getElementsByTagName('table')[0];
 
     // add new empty row to the table
     //0 = in the tope of the table, before the row headings
     //table.rows.length = the end
     let newRow = table.insertRow(table.rows.length);
 
     //add cells to the row
     let cell1 = newRow.insertCell(0);
     let cell2 = newRow.insertCell(1);
     let cell3 = newRow.insertCell(2);
     let cell4 = newRow.insertCell(3);
     let cell5 = newRow.insertCell(4);
     
     //add values to the new cells that were added to the table
     cell1.innerHTML = title;
     cell2.innerHTML = author;
     cell3.innerHTML = genre;
     cell4.innerHTML = price;
     cell5.innerHTML = condition;
     
     
     //`<a id= "delete" onClick="deleteRow(this)">Delete</a>`;
     
    };

  //checks to see if email and password is correct in order for manager to sign in
  function validateForm() {
    let x = document.forms ["myForm"]["email"].value;
    let y = document.forms ["myForm"]["password"].value;

    if (x != 'manager@gmail.com' && y != 'manager98') {
      alert("Email and/or password is incorrect");
      return false;
    }
    else {
      true;
    }
  }

  //checks to see if email and password is correct in order for manager to sign in
  function validateForm2() {
    let x = document.forms ["myForm2"]["email2"].value;
    let y = document.forms ["myForm2"]["password2"].value;

    if (x != 'employee@gmail.com' && y != 'employee98') {
      alert("Email and/or password is incorrect");
      return false;
    }
    else {
      true;
    }
  }
