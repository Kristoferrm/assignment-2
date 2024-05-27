
class Medicine {
	constructor(producename, produceid, manufacturer, expirationdate, quantity) {
	this.producename = producename;
	this.produceid = produceid;
	this.manufacturer = manufacturer;
	this.expirationdate = expirationdate;
	this.quantity = quantity;
	
	}
	
	}
	
	class UI {
	
	addBookToList(book) {
	
			const list = document.getElementById('medicine-list');
			const row = document.createElement('tr');
			row.innerHTML = `
			
			<td>${book.producename}</td>
			<td>${book.produceid}</td>
			<td>${book.manufacturer}</td>
			<td>${book.expirationdate}</td>
			<td>${book.quantity}</td>
			<td><a href="" class="delete">X</a></td>
	
			`;
	list.appendChild(row);
	
		
	}
	
	showAlert(message, className){
	
				const div = document.createElement('div');
	
				div.className = `alert ${className}`;
				
				div.appendChild(document.createTextNode(message));
				
				const container = document.querySelector('.container');
		
				const form = document.querySelector('#prescription');
				
				container.insertBefore(div, form);
			
				setTimeout(function(){
				
					document.querySelector('.alert').remove();
				}, 3000);
	}

	deleteBook(target) {
	
		if(target.className === 'delete'){
			target.parentElement.parentElement.remove();
	
		}
	}
	
	clearFields(){
	
		document.getElementById('producename').value = '';
		document.getElementById('produceid').value = '';
		document.getElementById('manufacturer').value = '';
		document.getElementById('expirationdate').value = '';
		document.getElementById('quantity').value = '';
	
	}
	
	}
	
	
	
	document.getElementById('prescription').addEventListener('submit',function(e){
		
		const producename = document.getElementById('producename').value;
		const produceid = document.getElementById('produceid').value;
		const manufacturer = document.getElementById('manufacturer').value;
		const expirationdate = document.getElementById('expirationdate').value;
		const quantity = document.getElementById('quantity').value;
		
		const book = new Medicine (producename, produceid, manufacturer, expirationdate, quantity);
		
		const ui = new UI();
		
		if(producename === '' || produceid === '' || manufacturer === '' || expirationdate === '' || quantity === '') {
		
			ui.showAlert('please fill in all fields', 'error');
		}
		else{
			
		ui.addBookToList(book);
	
		ui.showAlert('Prescription Added', 'success');
	
		ui.clearFields();
		   
		}
		
		e.preventDefault();
		})
	
		document.getElementById('medicine-list').addEventListener('click', function(e){
	
		const ui = new UI();
	
		ui.deleteBook(e.target);
	
		ui.showAlert('Prescription Removed!', 'success');
		
		e.preventDefault();
		});