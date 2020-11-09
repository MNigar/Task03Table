
    btn=document.querySelector("#btn");

    ad=document.querySelector('#UserName');
	soyad=document.querySelector('#UserSurname');
	email=document.querySelector('#Email');
	tarix=document.querySelector('#Date');
	var data=[]
     var table=document.querySelector(".tb");
     
	class UserData{
	constructor(_name,_surname,_email,_date){
		this.name=_name;
		this.Surname=_surname;
		this.Email=_email;
		this.tarix=_date;	
    }
    
}

btn.addEventListener('click',function(){
    
    user= new UserData(ad.value,soyad.value,email.value,tarix.value);
	
	tablerow=`<tr>
	<td>${user.name}</td>
	<td>${user.Surname}</td>
	<td>${user.Email}</td>
	<td>${user.tarix}</td>
    <td>
    <div class="icons">
<div class="add-icon" onclick="EditItem(this)"><i class="fas fa-plus"></i></div>
<div class="remove-icon" onclick="removeItem(this)"> <i class="fas fa-minus"></i></div>
</div>  
    </td>
	</tr>`

	
	table.innerHTML+=tablerow;
		ad.value=' ';
		soyad.value=' ';
		email.value=' ';
	
	
})

function removeItem(el){
    
   var remove=el.parentElement.parentElement.parentElement.parentElement;
table.removeChild(remove);
    }
function EditItem(el){
//     var cols = el.parentElement.parentElement.parentElement;
// console.log(cols);


    
		 }
		 
		 tablerow=`<tr>
		 	<td></td>
		 	<td></td>
		 	<td></td>
		 	<td></td>
		     <td>
		     <div class="icons">
		 <div class="add-icon" onclick="EditItem(this)"><i class="fas fa-plus"></i></div>
		 <div class="remove-icon" onclick="removeItem(this)"> <i class="fas fa-minus"></i></div>
		 </div>  
		     </td>
		 	</tr>`

	// function productAddToTable(e) {
	// 	e.preventDefault();
	// 		user= new UserData(ad.value,soyad.value,email.value,tarix.value);
			

	// 		//  var tbody=document.getElementsByTagName("tbody")
	// 		// if (tbody.length == 0) {
				
	// 		// 	var item=document.createElement("tbody")
	// 		// 	var tr=document.createElement("tr")
	// 		// 	item.appendChild(tr)

	// 		// 	for (var i=0;i<user.length;i++){
	// 		// 		var td=document.createElement("td")
	// 		// 		td.innerHTML=user[i]
	// 		// 		tr.appendChild(td)

	// 		// 	}

	// 		// 	table.appendChild(item)




	// 		// }
		
			
	// 	}

         
         
    
         
         
