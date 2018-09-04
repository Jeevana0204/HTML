
	
			function validate()
				{
					var name=document.getElementById("u").value;
					console.log(name);
					var pwd=document.getElementById("p").value;
					console.log(pass)
					
					if(name=="admin" && pwd=="admin")
					{
						//document.write("Login success")
						alert("Login success")
					}
					else if(name=="" && pwd=="")
					{
						alert("login credentials should not be blank")
					}

					else{
						//document.write("Login fail")
						alert("Login fail")
					}
				}
				

