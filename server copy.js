import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config'
const cors = require('cors');
import axios from 'axios';
import fs from 'fs';
import crypto from 'crypto';
import session from 'express-session';
import path from 'path';
import bcyrpt from 'bcrypt-nodejs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { allowedNodeEnvironmentFlags, nextTick } from 'process';
import mysql from 'mysql';
import { Console, time } from 'console';
import cron from 'node-cron';
import cookieParser from 'cookie-parser';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/login', (req, res) => {
	res.send({
	  token: 'test123'
	});
  });


const rsHabilitadas = [1, 2];

  
const config = {
    headers: { Authorization: `Bearer ${process.env.BEARER}` }
};

const empresasHabilitadas = [1, 2]


const port = process.env.PORT || 3000;

var task = cron.schedule('0 0,2,4,6,8,10,12,14,16,18,20,22 * * *', async() =>  {
	foreach(empr in empresasHabilitadas)
	{
		await getAPIPrices(empr);
		await getAPIPricelists(empr);
		await getAPICompanies(empr);
		await getAPISellers(empr);
		await getAPIOrders(empr);
		getAPIRS(empr);
	}
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log("1 " + time)
}, {
  scheduled: true
});
task.start();
var task2 = cron.schedule('0,30 * * * *', async() =>  {
	foreach(empr in empresasHabilitadas)
	{
		await getAPIProducts(empr)
	}
	var today = new Date();
  	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  	console.log("2 " +time)
  }, {
	scheduled: true
  });
  
  task2.start();

 


app.post('/changePassword', async function(request, response) {
	let empresa = request.session.rs;
	let username = request.session.username;
	let password0 = request.body.password0;
	let password = request.body.password;
	let password1 = request.body.password1;
	let salt = process.env.KEY
	if(password == password1){
		bcyrpt.hash(password0, salt, null, (err, hash)=>{
			if(err){
				next(err);
			}
			password0 = hash;
		})
		const resp = await axios.get(
			`${process.env.URL}/sellers/auth/${empresa}/${username}`,
			config
			);
		let datos = resp.data;
		
		if(datos[0].password == password0)
		{
			bcyrpt.hash(password, salt, null, (err, hash)=>{
				if(err){
					next(err);
				}
				password = hash;
				const article = {
					'nombre': username, 'password': password};
					const headers = { 
					'Authorization': 'bearer Ng.JV8Q_ekKoiuvxPry6nVEAaAzjGq9Eirc7W-jGxmx7rZ1qSuPzOjTxJVsFujK',
					 };
					axios.put(`${process.env.URL}/sellers/${empresa}`, article, { headers })
					.then(response => console.log("ok" + password));
					
			})
			response.cookie(`registro`,`200`,{
				maxAge: 5000
			});
			response.redirect('/');
		}
		else{


		}
	}
});
app.post('/auth', async function(request, response) {
	// Capture the input fields
	response.clearCookie("errorLog");
	let empresa = request.body.empresa;
	let username = request.body.user;
	let password = request.body.password;
	let passwordIntocada = request.body.password;
	let salt = process.env.KEY
	bcyrpt.hash(password, salt, null, (err, hash)=>{
		if(err){
			next(err);
		}
		password = hash;
	})
	if (empresa && username) {
		const resp = await axios.get(
			`${process.env.URL}/sellers/auth/${empresa}/${username}`,
			config
			);
		let datos = resp.data;
		if(datos.length == 0)
		{
			response.cookie(`errorLog`,`los datos de ingreso son incorrectos`,{
				maxAge: 5000
			});
			response.redirect('/login.html');
			response.end();
		}
		else{
			if(datos[0].password== null && passwordIntocada == '')
			{
				/*response.cookie(`errorLog`,`no tiene contraseña establecida`,{
					maxAge: 5000
				});*/
				request.session.idSeller = datos[0].fk_erp_asesores;
					request.session.loggedin = true;
					request.session.username = username;
					request.session.empresa = empresa;
					request.session.rs = datos[0].fk_razones_sociales;
					// Redirect to home page
					response.redirect('/');
				response.end();
			}
			else{
				if(datos[0].password == password){
					request.session.idSeller = datos[0].fk_erp_asesores;
					request.session.loggedin = true;
					request.session.username = username;
					request.session.empresa = empresa;
					request.session.rs = datos[0].fk_razones_sociales;
					// Redirect to home page
					response.redirect('/');
				}
				else{
					response.cookie(`errorLog`,`contrasenia incorrecta`,{
						maxAge: 5000
					});
					response.redirect('/');
				}
			}
		}
		
} 
})

app.post('/register', async function(request, response) {
	// Capture the input fields
	let username = request.session.username;
	let rs = request.session.rs;
	let password = request.body.password;
	let password2 = request.body.password;
	// Ensure the input fields exists and are not empty
	if (password && password2) {
		if(password == password2)
		{
											
							if(1 == 1)
							{
								//encriptacion
								let salt = process.env.KEY
								bcyrpt.hash(password, salt, null, (err, hash)=>{
									if(err){
										response.cookie(`registro`,`0`,{
											maxAge: 5000
										});
										response.redirect('/');
									}
									password = hash;
									console.log(`${process.env.URL}/sellers/${rs}`, username, password)


																			/*request.session.idSeller = rows2[index].id;

										request.session.loggedin = true;
										request.session.username = username;
										request.session.empresa = empresa;
										request.session.rs = rows[0].id;*/
										const article = {
											'nombre': username, 'password': password};
											const headers = { 
											'Authorization': 'bearer Ng.JV8Q_ekKoiuvxPry6nVEAaAzjGq9Eirc7W-jGxmx7rZ1qSuPzOjTxJVsFujK',
											 };
											axios.put(`${process.env.URL}/sellers/${rs}`, article, { headers })
											.then(response => console.log());
										// Redirect to home page
										response.cookie(`registro`,`200`,{
											maxAge: 5000
										});
										response.redirect('/');

																				
									
								})
							}
							else{
								response.cookie(`registro`,`0`,{
									maxAge: 5000
								});
								response.redirect('/');
								//Este usuario ya tiene contraseña
							}
						}
						
				else{
	response.cookie(`errorReg`,`no misma contrasenia`,{
		maxAge: 5000
	});
	response.send('0');
}}})


app.get('/products.html', function(request, response, next) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		next();
	} else {
		// Not logged in
		response.redirect('/login.html')
	}
});

app.get('/', function(request, response, next) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		next();
	} else {
		// Not logged in
		response.redirect('/login.html')
	}
});

app.get('/login.html', function(request, response, next) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.redirect('/');
	} else {
		// Not logged in
		next();
	}
});

app.get('/settings.html', function(request, response, next) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		next();
	} else {
		// Not logged in
		response.redirect('/login.html')
	}
});

app.get('/informacionPedido', async function(request,response){
	let empresas= []
	let listaPrecio= []
	let todo=[]

	connection.query('SELECT * from companies where SUBSTRING_INDEX(id, ";", 1)='  + request.session.rs, function(err, rows, fields) {
		if (err) {
			response.cookie(`error`,`error`,{
				maxAge: 5000
		});
		}
		let datos = rows;
		let count = Object.keys(datos).length;
		for(let i=0; i< count; i++)
		{
			let id = datos[i].id_erp;
			let descripcion = datos[i].descripcion;
			empresas.push({id, descripcion})
		}
		connection.query('SELECT * from pricelists where SUBSTRING_INDEX(id, ";", 1)='  + request.session.rs, function(err2, rows2, fields) {
			if (err2) {
				response.cookie(`error`,`error`,{
					maxAge: 5000
			});
			}
			let datos2 = rows2;
			let count2 = Object.keys(datos2).length;
			for(let i=0; i< count2; i++)
			{
				let id = datos2[i].id;
				let descripcion = datos2[i].descripcion;
				listaPrecio.push({id, descripcion})
			}
			todo = [{empresas, listaPrecio}]
			response.json(todo);
	})
})
})

function insertarProducts(datos){
	let count = Object.keys(datos.data).length;
	if(datos.data.id)
		{
			connection.query('INSERT INTO products(id, id_erp, descripcion, fk_razones_sociales, stock, created_at, updated_at, por_iva) VALUES (?,?,?,?,?,?,?,?)', [ datos.data.id, datos.data.id_erp, datos.data.descripcion, datos.data.fk_razones_sociales, datos.data.stock, datos.data.created_at, datos.data.updated_at, datos.data.por_iva], function(err, rows, fields) {
				if (err) {
					response.cookie(`error`,`error`,{
						maxAge: 5000
				});
				}			});
		}
		else{
			for(let i=0; i< count; i++)
			{
				connection.query('INSERT INTO products(id, id_erp, descripcion, fk_razones_sociales, stock, created_at, updated_at, por_iva) VALUES (?,?,?,?,?,?,?,?)', [ datos.data[i].id, datos.data[i].id_erp, datos.data[i].descripcion, datos.data[i].fk_razones_sociales, datos.data[i].stock, datos.data[i].created_at, datos.data[i].updated_at, datos.data[i].por_iva], function(err, rows, fields) {
					if (err) {
						response.cookie(`error`,`error`,{
							maxAge: 5000
					});
					}				});
			}
		}
}
let arrProductos = [];
const getAPIProducts = async (idRsABuscar) => {
    try {
        const resp = await axios.get(
			`${process.env.URL}/products/${idRsABuscar}`,
			config
			);
		let datos = resp.data;
			console.log(datos)
		connection.query('DELETE FROM products WHERE SUBSTRING_INDEX(id, ";", 1)='  + idRsABuscar, async function(err, rows, fields) {
			if (err) {
				response.cookie(`error`,`error`,{
					maxAge: 5000
			});
			}
					insertarProducts(datos)

		if(parseInt(datos.meta.last_page) > 1)
		{
			for(var i=2; i<datos.meta.last_page+1; i++)
			{
			const respuesta = await axios.get(
				`${process.env.URL}/products/${idRsABuscar}/?page=${i}`,
				config
				);
				insertarProducts(respuesta.data)
			}
		}
	  	});
		
    } catch (err) {
        // Handle Error Here
		console.log("error en products")
			}
};
function insertarCompanies(datos){
	let count = Object.keys(datos.data).length;
	if(datos.data.id)
		  {
			connection.query('INSERT INTO companies(id, id_erp, descripcion, cuit, con_iva, cliente, proveedor) VALUES (?,?,?,?,?,?,?)', [ datos.data.id, datos.data.id_erp, datos.data.descripcion, datos.data.cuit, datos.data.con_iva, datos.data.cliente, datos.data.proveedor], function(err, rows, fields) {
				if (err) {
					response.cookie(`error`,`error`,{
						maxAge: 5000
				});
				}
							  });
		  }
		  else{
			for(let i=0; i< count; i++)
			{
				connection.query('INSERT INTO companies(id, id_erp, descripcion, cuit, con_iva, cliente, proveedor) VALUES (?,?,?,?,?,?,?)', [ datos.data[i].id, datos.data[i].id_erp, datos.data[i].descripcion, datos.data[i].cuit, datos.data[i].con_iva, datos.data[i].cliente, datos.data[i].proveedor], function(err, rows, fields) {
					if (err) {
						response.cookie(`error`,`error`,{
							maxAge: 5000
					});
					}
									  });
			}
		  }
}

const getAPICompanies = async (idRsABuscar) => {
    try {
        const resp = await axios.get(
			`${process.env.URL}/companies/${idRsABuscar}`,
			config
			);
		let datos = resp.data;
		connection.query('DELETE FROM companies WHERE SUBSTRING_INDEX(id, ";", 1)='  + idRsABuscar, async function(err, rows, fields){
			if (err) {
				response.cookie(`error`,`error`,{
					maxAge: 5000
			});
			}
			
		insertarCompanies(datos)


		if(parseInt(datos.meta.last_page) > 1)
		{
			for(var i=2; i<datos.meta.last_page+1; i++)
			{
			const respuesta = await axios.get(
				`${process.env.URL}/companies/${idRsABuscar}/?page=${i}`,
				config
				);
				insertarCompanies(respuesta.data)
			}
		}
	  	});

    } catch (err) {
        // Handle Error Here
		if (err) {
			
		}
			}
};


const getAPIRS = async (idRsABuscar) => {
    try {
        const resp = await axios.get(
			`${process.env.URL}/rs/${idRsABuscar}`,
			config
			);
		let datos = resp.data;
		let count = Object.keys(datos).length;
		connection.query('DELETE FROM rs WHERE id ='  + idRsABuscar, async function(err, rows, fields){
			if (err) {
				response.cookie(`error`,`error`,{
					maxAge: 5000
			});
			}
				  	});

		if(datos.id)
		{
			connection.query('INSERT INTO rs(id, descripcion, cuit) VALUES (?,?,?)', [ datos.id, datos.descripcion, datos.cuit], function(err, rows, fields) {
				if (err) {
					response.cookie(`error`,`error`,{
						maxAge: 5000
				});
				}
							});
		}
		else{
			for(let i=0; i< count; i++)
			{
				connection.query('INSERT INTO rs(id, descripcion, cuit) VALUES (?,?,?)', [ datos[i].id, datos[i].descripcion, datos[i].cuit], function(err, rows, fields) {
					if (err) {
						response.cookie(`error`,`error`,{
							maxAge: 5000
					});
					}
									  });
			}
		}
		
    } catch (err) {
        // Handle Error Here
		if (err) {
			
		}
			}
};

const getAPISellers = async (idRsABuscar) => {
    try {
        const resp = await axios.get(
			`${process.env.URL}/sellers/${idRsABuscar}`,
			config
			);
		let datos = resp.data;
		let count = Object.keys(datos).length;
		if(datos.id)
		{
			connection.query('SELECT id FROM sellers WHERE id = ?', [datos.id], function(err, rows2, fields) {
				if (err) {
					response.cookie(`error`,`error`,{
						maxAge: 5000
				});
				}
								let datos2 = rows2;
				let count2 = Object.keys(datos2).length;
				if(count2<=0){
					connection.query('INSERT INTO sellers(id, nombre, fk_razones_sociales, fk_erp_asesores, created_at, updated_at) VALUES (?,?,?,?,?,?);', [datos.id, datos.nombre, 1, datos.fk_erp_asesores, datos.created_at, datos.updated_at], function(err, rows, fields) {
						if (err) {
							response.cookie(`error`,`error`,{
								maxAge: 5000
						});
						}
											  });
				}
				else{
					connection.query('UPDATE sellers SET nombre = ?, fk_razones_sociales = ?, fk_erp_asesores = ?, created_at = ?, updated_at = ?);', [datos.id, datos.nombre, 1, datos.fk_erp_asesores, datos.created_at, datos.updated_at], function(err, rows, fields) {
						if (err) {
							response.cookie(`error`,`error`,{
								maxAge: 5000
						});
						}
											  });
				}
			  });

		}
		else{
		for(let i=0; i< count; i++)
		{
			connection.query('SELECT id FROM sellers WHERE id = ?', [datos[i].id], function(err, rows3, fields) {
				if (err) {
					response.cookie(`error`,`error`,{
						maxAge: 5000
				});
				}
								let datos3 = rows3;
				let count2 = Object.keys(datos3).length;
				if(count2<=0){
					connection.query('INSERT INTO sellers(id, nombre, fk_razones_sociales, fk_erp_asesores, created_at, updated_at) VALUES (?,?,?,?,?,?);', [datos[i].id, datos[i].nombre, 1, datos[i].fk_erp_asesores, datos[i].created_at, datos[i].updated_at], function(err, rows, fields) {
						if (err) {
							response.cookie(`error`,`error`,{
								maxAge: 5000
						});
						}
											  });
				}
				else{
					connection.query('UPDATE sellers SET nombre = ?, fk_razones_sociales = ?, fk_erp_asesores = ?, created_at = ?, updated_at = ? WHERE id = ?;', [datos[i].nombre, 1, datos[i].fk_erp_asesores, datos[i].created_at, datos[i].updated_at, datos[i].id], function(err, rows, fields) {
						if (err) {
							response.cookie(`error`,`error`,{
								maxAge: 5000
						});
						}
											  });
				}
			  });
		}}
    } catch (err) {
        // Handle Error Here
		if (err) {
			
		}
			}
};

const getAPIPrices = async (idRsABuscar) => {
    try {
		const resp2 = await axios.get(
			`${process.env.URL}/prices/${idRsABuscar}`,
		config
		)
		let lista = resp2.data;
		let count = Object.keys(lista).length;
		connection.query('DELETE FROM prices WHERE SUBSTRING_INDEX(id, ";", 1)='  + idRsABuscar, async function(err, rows, fields) {
			if (err) {
				response.cookie(`error`,`error`,{
					maxAge: 5000
			});
			}
				  	});
		if(lista.id)
		{
			connection.query('INSERT INTO prices(id, fk_price_lists, fk_products, precio) VALUES (?,?,?,?)', [ lista.id, lista.fk_price_lists, lista.fk_products, lista.precio], function(err, rows, fields) {
				if (err) {
					response.cookie(`error`,`error`,{
						maxAge: 5000
				});
				}
							  });
		}
		else{
		for(let i=0; i< count; i++)
		{
			connection.query('INSERT INTO prices(id, fk_price_lists, fk_products, precio) VALUES (?,?,?,?)', [ lista[i].id, lista[i].fk_price_lists, lista[i].fk_products, lista[i].precio], function(err, rows, fields) {
				if (err) {
					throw err;
				}
							  });
		}}
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

const getAPIPricelists = async (idRsABuscar) => {
    try {
        const resp = await axios.get(
			`${process.env.URL}/pricelists/${idRsABuscar}`,
			config
			);
		let datos = resp.data;
		let count = Object.keys(datos).length;
		connection.query('DELETE FROM pricelists WHERE SUBSTRING_INDEX(id, ";", 1)='  + idRsABuscar, async function(err, rows, fields) {
			if (err) {
				response.cookie(`error`,`error`,{
					maxAge: 5000
			});
			}
						  
	  	});
		if(datos.id)
		{
			connection.query('INSERT INTO pricelists (id, descripcion, fk_erp_lis_precios, fk_razones_sociales, inc_impuestos) VALUES (?,?,?,?,?)', [ datos.id, datos.descripcion, datos.fk_erp_lis_precios, datos.fk_razones_sociales, datos.inc_impuestos], function(err, rows, fields) {
				if (err) {
					response.cookie(`error`,`error`,{
						maxAge: 5000
				});
				}
							  });
		}
		else
		{
		for(let i=0; i< count; i++)
		{
			connection.query('INSERT INTO pricelists (id, descripcion, fk_erp_lis_precios, fk_razones_sociales, inc_impuestos) VALUES (?,?,?,?,?)', [ datos[i].id, datos[i].descripcion, datos[i].fk_erp_lis_precios, datos[i].fk_razones_sociales, datos[i].inc_impuestos], function(err, rows, fields) {
				if (err) {
					response.cookie(`error`,`error`,{
						maxAge: 5000
				});
				}
							  });
		}}
    } catch (err) {
        // Handle Error Here
		if (err) {
			console.log("error en pricelsits")
		}
			}
};

app.get('/productos/:lista', async function(request,response){
	let codigo;
	let descripcion;
	let stock;
	let precio;
	let datos;
	let iva;
	arrProductos = []
	connection.query('SELECT * from products where fk_razones_sociales = ?', [request.session.rs], async function(err, rows, fields) {
		if (err) {
			response.cookie(`error`,`error`,{
				maxAge: 5000
		});
		}
				datos = rows;
			connection.query('SELECT * from prices where fk_price_lists = ?', [request.params.lista], async function(err2, rows2, fields2) {
				if (err2) {
					response.cookie(`error`,`error`,{
						maxAge: 5000
				});
				}
								let datos2 = rows2;
				let count = Object.keys(datos2).length;
				
				for(let i=0; i< count; i++)
				{
					const index2 = datos.findIndex(object => {
						var aux = object.id_erp;
						aux = request.params.lista + ";" + aux;
						return aux === datos2[i].id;
					});
					if(index2 != -1)
					{
						codigo = datos[index2].id_erp;
						descripcion = datos[index2].descripcion;
						stock = datos[index2].stock;
						iva = datos[index2].por_iva;
	
						precio = datos2[i].precio; 
						arrProductos.push({codigo, descripcion, stock, precio, iva})
					}					
					
				}
				response.json(arrProductos);
			})
	  
})
})
app.get('/admin', function(request, response){
	if (request.session.admin == true)
	{
		response.send(true)
	}
	else{
		response.send(false)
	}
})

app.get('/nombreSeller', function(request, response){
	response.send(request.session.username)
		
})

app.get('/actualizarMaestros', async function(request, response){
	const empr = request.session.rs;
	await getAPIPrices(empr);
	await getAPIPricelists(empr);
	await getAPICompanies(empr);
	await getAPISellers(empr);
	await getAPIOrders(empr);
	getAPIRS(empr);
	await getAPIProducts(empr);
	response.send(true)
	}
)	

app.get('/tieneContrasenia', async function(request, response){
	let respuesta = false;
	const resp = await axios.get(
		`${process.env.URL}/sellers/auth/${request.session.empresa}/${request.session.username}`,
		config
		);
	let datos = resp.data;
	if(datos[0].password == null)
	{
		respuesta = true;
		
		response.send(respuesta)
	}
  })	
		
app.get('/buscarProducto/:artId', function(request, response){
	let artId =  request.params.artId;
	connection.query('SELECT * from products where fk_razones_sociales = ? AND id_erp = ?', [request.session.rs, artId], function(err3, rows3, fields3) {
		if (err3) {
			response.cookie(`error`,`error`,{
				maxAge: 5000
		});
		}
				response.send(rows3[0].descripcion)
  })		
})

async function precioArticulos(idrs){
	connection.query('SELECT * from pricelists where fk_razones_sociales = ?', [idrs], function(err3, rows3, fields3) {
		if (err3) {
			response.cookie(`error`,`error`,{
				maxAge: 5000
		});
		}
		connection.query('SELECT * from prices where fk_price_lists = ?', [rows3[0].id], function(err2, rows2, fields2) {
			if (err2) {
				response.cookie(`error`,`error`,{
					maxAge: 5000
			});
			}
						let datos2 = rows2;
			return datos2;
		})
  })
}

app.post('/pedido', async function(request, resp) {
	// Capture the input fields
	if(request.session.loggedin == true){
	let orden = request.body.pedido;

	let fecha = orden[0].fecha;
	let nombre;
	let document;
	let cat_iva;
	let importe = 0;
	let estado = "A";
	let fk_sellers = request.session.rs;
	let observaciones = orden[0].observaciones;


	if(orden[0].empresa == "otro"){
		nombre = orden[0].empresaOtro[0].nombreEmpresa
		document = orden[0].empresaOtro[0].cuitEmp
		cat_iva = orden[0].empresaOtro[0].condicion
	}
	else{
		connection.query('SELECT * from companies where descripcion = ?', [orden[0].empresa], function(err5, rows5, fields5) {
			nombre = rows5[0].descripcion
			document = rows5[0].cuit
			cat_iva = rows5[0].con_iva
		});
	}

	/*let usuario = null;*/
	let email = orden[0].email;
	let telefono = orden[0].telefono;
	let calle = orden[0].calle;
	let numero = orden[0].numero;
	let piso = orden[0].piso;
	let provincia = orden[0].provincia;
	let localidad = orden[0].localidad;
	let cp = orden[0].cp;
	let documento_f = orden[0].documento_f;
	let nombre_f = orden[0].nombre_f;
	let calle_e = orden[0].calle_e;
	let numero_e = orden[0].numero_e;
	let piso_e = orden[0].piso_e;
	let provincia_e = orden[0].provincia_e;
	let localidad_e = orden[0].localidad_e;
	let cp_e  = orden[0].cp_e;
	let notas_e = orden[0].notas_e;
	/*let importe_e = null;
	let importe_e_emp = null;
	let estado_pago = null;
	let estado_envio = null;
	let tracking = null;*/
	let metodo_entrega = orden[0].metodo_entrega;
	let id_tienda = null;
	let des_cup_des = orden[0].des_cup_des;
	/*let imp_des_cupon = null;
	let imp_otr_des = null;
	let id_envio = null;
	let fk_erp_com_ven = null;*/

	connection.query('SELECT * from pricelists where fk_razones_sociales = ?', [request.session.rs], function(err3, rows3, fields3) {
		if (err3) {
			response.cookie(`error`,`error`,{
				maxAge: 5000
		});
		}
		connection.query('SELECT * from prices where fk_price_lists = ?', [rows3[0].id], function(err2, rows2, fields2) {
			if (err2) {
				response.cookie(`error`,`error`,{
					maxAge: 5000
			});
			}
						let datos2 = rows2;
			let arrProd = []				
			let count = Object.keys(orden[0].productos).length;
			for(let i=0; i< count; i++)
				{
					let sku = orden[0].productos[i].producto;
					let ivaPor = orden[0].productos[i].porIva;
					let cantidad = orden[0].productos[i].cantidad;
					let auxx = rows3[0].id + ';'+ sku
					const index = rows2.findIndex(object => {
						return object.id === auxx;
					});
					
					let precio = /*cantidad **/ rows2[index].precio;
					importe += cantidad * precio + (cantidad * precio) * ivaPor;
					arrProd.push({sku, cantidad, precio})

					connection.query('SELECT * from products where fk_razones_sociales = ? AND id_erp = ?', [request.session.rs, orden[0].productos[i].producto], function(err10, rows10, fields10) {
						let auxxx = rows10[0].stock - cantidad
						connection.query('UPDATE products SET stock = ? WHERE fk_razones_sociales = ? AND id_erp = ?', [auxxx, request.session.rs, orden[0].productos[i].producto], function(err, rows, fields) {
							if (err) {
								response.cookie(`error`,`error`,{
									maxAge: 5000
							});
							}
													  });

					})

				}
			let detailsOrders = JSON.stringify(arrProd);
			const article2 = {
				"email": email,
				"telefono": telefono,
				"calle": calle,
				"numero": numero,
				"piso": piso,
				"provincia": provincia,
				"localidad": localidad,
				"cp": cp,
				"documento_f": documento_f,
				"nombre_f": nombre_f,
				"calle_e": calle_e,
				"numero_e": numero_e,
				"piso_e": piso_e,
				"provincia_e": provincia_e,
				"localidad_e": localidad_e,
				"cp_e": cp_e,
				"notas_e": notas_e,
				"metodo_entrega": metodo_entrega,
				"id_tienda": id_tienda,
				"des_cup_des": des_cup_des,
				"fecha": fecha,
				"nombre": nombre,
				"documento": document,
				"cat_iva": cat_iva,
				"importe": importe,
				"estado": estado,
				"fk_sellers": fk_sellers,
				"detailsOrders": 
					arrProd
			}
			const headers = { 
			'Authorization': 'bearer Ng.JV8Q_ekKoiuvxPry6nVEAaAzjGq9Eirc7W-jGxmx7rZ1qSuPzOjTxJVsFujK', 'content-type': 'application/json; charset=utf-8'
			 };
			const jsonArticle = JSON.stringify(article2)
			resp.send('OK');
			

			axios.post(`${process.env.URL}/orders/${request.session.rs}`, jsonArticle, { headers })
			.then(response => 
				connection.query('INSERT INTO orders(id, fecha, nombre, ' +/*usuario*/'email, telefono, documento, calle, numero, piso, provincia, localidad, cp, documento_f, cat_iva, nombre_f, calle_e, numero_e, piso_e, provincia_e, localidad_e, cp_e, notas_e, importe,' +/* importe_e, importe_e_emp, estado_pago, estado_envio, metodo_entrega,*/ ' estado, ' +/*tracking, id_tienda,*/' des_cup_des,'+ /*imp_des_cupon, imp_otr_des,*/ ' observaciones, ' +/*id_envio, fk_erp_com_ven,*/ ' fk_sellers, detailsOrders) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [response.data.id, fecha,
					nombre,
					/*usuario,*/
					email,
					telefono,
					document,
					calle,
					numero,
					piso,
					provincia,
					localidad,
					cp,
					documento_f,
					cat_iva,
					nombre_f,
					calle_e,
					numero_e,
					piso_e,
					provincia_e,
					localidad_e,
					cp_e,
					notas_e,
					importe,
					/*importe_e,
					importe_e_emp,
					estado_pago,
					estado_envio,
					metodo_entrega,*/
					estado,
					/*tracking,
					id_tienda,*/
					des_cup_des,/*
					imp_des_cupon,
					imp_otr_des,*/
					observaciones,
					/*id_envio,
					fk_erp_com_ven,*/ 
					fk_sellers, detailsOrders], function(err, rows, fields) {
						if (err) {
							response.cookie(`error`,`error`,{
								maxAge: 5000
						});
						}
											})
			);
		})
  })
}
else{
	resp.redirect('/login.html');
}
})
app.post('/crearEmpresa', async function(request, response) {
	let nuevaEmp = request.body.empresa;
	let descripcion = nuevaEmp[0].nombre
	let cuit = nuevaEmp[0].cuit;
	let id_erp = nuevaEmp[0].id_erp;
	let condicion = nuevaEmp[0].cond;
	let id = request.session.rs + ";" + id_erp
	connection.query('SELECT id_erp from companies WHERE id = "' + id + '"', async function(err, rows, fields) {
		if (err) {
			response.cookie(`error`,`error`,{
				maxAge: 5000
		});
		}
				if(Object.keys(rows).length === 0){
			const article = {
				id_erp: id_erp, descripcion: descripcion, cuit: cuit, con_iva: condicion, cliente: true, proveedor: false};
			const headers = { 
			'Authorization': 'bearer Ng.JV8Q_ekKoiuvxPry6nVEAaAzjGq9Eirc7W-jGxmx7rZ1qSuPzOjTxJVsFujK',
			};
			
			axios.post(`${process.env.URL}/companies/${request.session.rs}`, article, { headers })
			.then(response => console.log(response.data.id));
			
			await getAPICompanies(request.session.rs);
				
			response.cookie(`crearEmp`,`200`,{
				maxAge: 5000
			});
			response.redirect('/');

			
		}
		else{
			response.cookie(`errorEmp`,`nombre existe`,{
				maxAge: 5000
			});
			response.redirect('/');
		}
	});


})
app.get('/nombreUser', function(request, response){
	const userr = []
	let nombre = request.session.username;
	userr.push({nombre})
	response.json(userr);
})

app.get('/ordenes/:pagina', async function(request,response){
	
	let arrOrdenes = []
	const resp = await axios.get(
		`${process.env.URL}/orders/${request.session.rs}?page= ${request.params.pagina}&fk_sellers= ${request.session.idSeller}`,
		config
		);
				let datos = resp.data.data;

				let count = Object.keys(datos).length;
				for(let i=0; i< count; i++)
				{
					let id = datos[i].id;
					let fecha =  datos[i].fecha;
					let nombre = datos[i].nombre;
					let document = datos[i].document;
					let cat_iva =  datos[i].cat_iva;
					let importe =  datos[i].importe;
					let estado =  datos[i].estado;
					let fk_sellers =  datos[i].fk_sellers;
					let observaciones =  datos[i].observaciones;
					let usuario =  datos[i].usuario;
					let email =  datos[i].email;
					let telefono =  datos[i].telefono;
					let calle =  datos[i].calle;
					let numero =  datos[i].numero;
					let piso =  datos[i].piso;
					let provincia =  datos[i].provincia;
					let localidad =  datos[i].localidad;
					let cp =  datos[i].cp;
					let documento_f =  datos[i].documento_f;
					let nombre_f =  datos[i].nombre_f;
					let calle_e =  datos[i].calle_e;
					let numero_e =  datos[i].numero_e;
					let piso_e =  datos[i].piso_e;
					let provincia_e =  datos[i].provincia_e;
					let localidad_e =  datos[i].localidad_e;
					let cp_e  =  datos[i].cp_e;
					let notas_e =  datos[i].notas_e;
					let importe_e =  datos[i].importe_e;
					let importe_e_emp =  datos[i].importe_e_emp;
					let estado_pago =  datos[i].estado_pago;
					let estado_envio =  datos[i].estado_envio;
					let metodo_entrega =  datos[i].metodo_entrega;
					let tracking =  datos[i].tracking;
					let id_tienda =  datos[i].id_tienda;
					let des_cup_des =  datos[i].des_cup_des;
					let imp_des_cupon =  datos[i].imp_des_cupon;
					let imp_otr_des =  datos[i].imp_otr_des;
					let id_envio =  datos[i].id_envio;
					let fk_erp_com_ven =  datos[i].fk_erp_com_ven;
					let detailsOrders =  datos[i].detailsOrders;
					arrOrdenes.push({ id, fecha, nombre, document, cat_iva, importe , estado
					, fk_sellers 
					, observaciones
					, usuario
					, email 
					, telefono 
					, calle 
					, numero 
					, piso 
					, provincia
					, localidad 
					, cp 
					, documento_f 
					, nombre_f 
					, calle_e 
					, numero_e 
					, piso_e 
					, provincia_e 
					, localidad_e 
					, cp_e  
					, notas_e 
					, importe_e 
					, importe_e_emp 
					, estado_pago 
					, estado_envio 
					, metodo_entrega 
					, tracking
					, id_tienda
					, des_cup_des
					, imp_des_cupon
					, imp_otr_des
					, id_envio
					, fk_erp_com_ven, detailsOrders})
				}
				let envioRes = [];
				envioRes.push(arrOrdenes, resp.data.meta.last_page)
				response.json(envioRes);
})  

app.get('/cerrarSesion', function(request, response){
	request.session.idSeller = null;
	request.session.username = ''
	request.session.loggedin = false
	request.session.rs = null;
	response.redirect('/login.html'); //cambiar
})
app.use(express.static(__dirname + '/public'));
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
app.use(express.static('public'));
