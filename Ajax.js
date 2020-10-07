
		let fetchBtn = document.getElementById("fetchBtn"); 

		fetchBtn.addEventListener("click", buttonclickhandler); 

		function buttonclickhandler() { 

			// Instantiate an new XHR Object 
			 xhr = new XMLHttpRequest(); 

			// Open an obejct (GET/POST, PATH, 
			// ASYN-TRUE/FALSE) 
			xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true); 

			// When response is ready 
			xhr.onload = function () { 
				if (this.status === 200) { 

					// Changing string data into JSON Object 
					obj = JSON.parse(this.responseText); 

					// Getting the ul element 
					let list = document.getElementById("list"); 
					str = "" 
					for (key in obj.data) { 
						str += 
						`<li>${obj.data[key].employee_name}</li>`; 
					} 
					list.innerHTML = str; 
				} 
				else { 
					console.log("File not found"); 
				} 
			} 
			xhr.send(); 
		} 
	