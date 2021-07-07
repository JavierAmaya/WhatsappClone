console.log('DOM cargado');

// funcion para establecer la data a manejar en LocalStorage
const setDataUsuarios = () => {
    
    let data = [
        {
            id: 1,
            nombre: 'Goku',
            imagen: 'goku.jpg',
            contactos: [2,3,8,4,2],
            conversaciones: [
                {
                id: 'chat-1-2', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Vegeta: Kakaroto!!', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '10:50',
                nombreDestinatario: 'Vegeta',
                imagenDestinatario: 'Vegeta.jpg',
                },
                {
                id: 'chat-1-3', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Krillin: Gooookkkuuu!!!!!', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:50',
                nombreDestinatario: 'Krilin',
                imagenDestinatario: 'krilin.jpg',
                }
            ]
        },
        {
            id: 2,
            nombre: 'Vegeta',
            imagen: 'vegeta.jpg',
            contactos: [1,3,8,10],
            conversaciones: [
                {
                id: 'chat-2-1', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Goku: Hola Vegeta!!', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '10:50',
                nombreDestinatario: 'Goku',
                imagenDestinatario: 'goku.jpg',
                },
                {
                id: 'chat-2-3', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Frezer: Maldito gusano', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:50',
                nombreDestinatario: 'Freezer',
                imagenDestinatario: 'freezer.jpg',
                }
            ]
        },
        {
            id: 3,
            nombre: 'Freezer',
            imagen: 'freezer.jpg',
            contactos: [2,1,10,8,7],
            conversaciones: [
                {
                id: 'chat-3-2', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Vegeta: Maldito Gusano!!', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '10:52',
                nombreDestinatario: 'Vegeta',
                imagenDestinatario: 'vegeta.jpg',
                },
                {
                id: 'chat-3-8', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Baby: Hola bebe', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:50',
                nombreDestinatario: 'Baby',
                imagenDestinatario: 'baby.jpg',
                }
            ]
        },
        {
            id: 4,
            nombre: 'Krilin',
            imagen: 'Krilin.jpg',
            contactos: [10,9,8,7,1],
            conversaciones: [
                {
                id: 'chat-4-10', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Kami: Hola Corazon <3', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '11:11',
                nombreDestinatario: 'Kami',
                imagenDestinatario: 'kami.jpg',
                },
                {
                id: 'chat-4-1', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Goku: Donde estas?', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:50',
                nombreDestinatario: 'Goku',
                imagenDestinatario: 'goku.jpg',
                }
            ]
        },
        {
            id: 5,
            nombre: 'Androide_16',
            imagen: 'androide_16.jpg',
            contactos: [3,1,2,4,7,8],
            conversaciones: [
                {
                id: 'chat-5-7', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Androide_19: Hey vos!', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:12',
                nombreDestinatario: 'Androide_19',
                imagenDestinatario: 'androide_19.jpg',
                },
                {
                id: 'chat-5-8', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Baby: Hola Baby', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:50',
                nombreDestinatario: 'Baby',
                imagenDestinatario: 'baby.jpg',
                }
            ]
        },
        {
            id: 6,
            nombre: 'Androide_18',
            imagen: 'androide_18.jpg',
            contactos: [5,1,2,3,4],
            conversaciones: [
                {
                id: 'chat-6-1', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Goku: simon prro!', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '05:33',
                nombreDestinatario: 'Goku',
                imagenDestinatario: 'goku.jpg',
                },
                {
                id: 'chat-6-5', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Androide_16: awevosuu!!!!!', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:50',
                nombreDestinatario: 'Androide_16',
                imagenDestinatario: 'androide_16.jpg',
                }
            ]
        },
        {
            id: 7,
            nombre: 'Androide_19',
            imagen: 'androide_19.jpg',
            contactos: [1,2,3,4,5,6],
            conversaciones: [
                {
                id: 'chat-7-5', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Androide_16: Donde andas jodido!!', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '09:10',
                nombreDestinatario: 'Androide_16',
                imagenDestinatario: 'androide_16.jpg',
                },
                {
                id: 'chat-7-6', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Androide_18: Fuera JOH', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:50',
                nombreDestinatario: 'Androide_18',
                imagenDestinatario: 'androide_18.jpg',
                }
            ]
        },
        {
            id: 8,
            nombre: 'Baby',
            imagen: 'baby.jpg',
            contactos: [9,10,5,4,3,2,1],
            conversaciones: [
                {
                id: 'chat-8-9', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Mr_satan: Holaaa', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:50',
                nombreDestinatario: 'Mr_satan',
                imagenDestinatario: 'mr_satan.jpg',
                },
                {
                id: 'chat-8-10', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Kami: simon', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:50',
                nombreDestinatario: 'Kami',
                imagenDestinatario: 'kami.jpg',
                }
            ]
        },
        {
            id: 9,
            nombre: 'Mr_satan',
            imagen: 'mr_satan.jpg',
            contactos: [3,1,2,4,5,6,10],
            conversaciones: [
                {
                id: 'chat-9-6', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Androide_18: Hola corazon!!', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:00',
                nombreDestinatario: 'Androide_18',
                imagenDestinatario: 'androide_18.jpg',
                },
                {
                id: 'chat-9-10', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Kami: vos sos la unica', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:50',
                nombreDestinatario: 'Kami',
                imagenDestinatario: 'kami.jpg',
                }
            ]
        },
        {
            id: 10,
            nombre: 'Kami',
            imagen: 'kami.jpg',
            contactos: [2,3,4,5,6,7,8,9],
            conversaciones: [
                {
                id: 'chat-10-5', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Androide_16: Apurate prro', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:55',
                nombreDestinatario: 'Androide_16',
                imagenDestinatario: 'androide_16.jpg',
                },
                {
                id: 'chat-10-9', //El detalle de toda la conversacion se podrá obtener del item chat-1-2
                ultimoMensaje: 'Mr_satan: Deja de molestarme Satan', // En este punto solo se mantendrá el último mensaje.
                horaUltimoMensaje: '12:50',
                nombreDestinatario: 'Mr_satan',
                imagenDestinatario: 'mr_satan.jpg',
                }
            ]
        }
    ];

    var localStorage = window.localStorage;

    if (localStorage.getItem('usuarios') == null) {
        localStorage.setItem('usuarios',JSON.stringify(data));
    }else {
        console.log('localStorage Full');
    }
};

setDataUsuarios();

// funcion para establecer la data a manejar en LocalStorage
const setDataConversaciones = ()=> {

    let dataConversacion12 = [
        {
            idConversacion : "chat-1-2",
            descripcion: [
                {
                    emisor: 1,
                    receptor: 2,
                    mensaje: 'Hola Vegeta',
                    tipo: 'text',
                    hora: '12:30'
                },
                {
                    emisor: 2,
                    receptor: 1,
                    mensaje: 'Kakaroto!!',
                    tipo: 'text',
                    hora: '01:30'
                },
                {
                    emisor: 2,
                    receptor: 1,
                    tipo: 'sticker',
                    sticker: 1,
                    hora: '03:31'
                }
            ]
        }
    ];

    let dataConversacion13 = [
        {
            idConversacion : "chat-1-3",
            descripcion: [
                {
                    emisor: 1,
                    receptor: 2,
                    mensaje: 'Conversacion 1 a 3',
                    tipo: 'text',
                    hora: '12:30'
                },
                {
                    emisor: 2,
                    receptor: 1,
                    mensaje: 'Kakaroto!!',
                    tipo: 'text',
                    hora: '12:30'
                },
                {
                    emisor: 2,
                    receptor: 1,
                    tipo: 'sticker',
                    sticker: 2,
                    hora: '03:35'
                }
            ]
        }
    ];

    if (localStorage.getItem('chat-1-2') == null) {
        localStorage.setItem('chat-1-2',JSON.stringify(dataConversacion12));
    }else {
        console.log('ya hay una conversacion 1-2 guardada');
    }

    if (localStorage.getItem('chat-1-3') == null) {
        localStorage.setItem('chat-1-3',JSON.stringify(dataConversacion13));
    }else {
        console.log('ya hay una conversacion 1-3 guardada');
    } 
};

setDataConversaciones();


/// funcion para llenar la lista de usuarios 
const setListUsers = () => {

    let dataUsers = JSON.parse(localStorage.getItem('usuarios'));
    document.getElementById('profile-user').innerHTML += `
        <a style="color:white">seleccione un usuario</a>
    `;
    dataUsers.forEach(user => {
        document.getElementById('listUsers').innerHTML += `
            <div class="col-2">
                <img onclick="userLogueado('${user.id}')" class="img-profile mt-2" src="./src/profile-pics/${user.imagen}" alt="">
            </div>
        `;
    });
};

setListUsers();

// agregar un nuevo contacto

const nuevoContacto = () =>{
    $('#modal-nuevoContacto').modal('show');
    let dataUsuarios = JSON.parse(localStorage.getItem('usuarios'));

    dataUsuarios.forEach(element => {
        document.getElementById('select-name').innerHTML +=`
            <option>${element.nombre}</option>
        `;
        document.getElementById('select-img').innerHTML +=`
            <option>${element.imagen}</option>
        `;
    });

};


// guardar el contacto en localStorage
const guardarContacto = () => {
    let dataUsuarios = JSON.parse(localStorage.getItem('usuarios'));
    let usuarioLogueado = localStorage.getItem('usuarioLogueado');

    let usuarioSeleccionado = document.getElementById('select-name').value;

    console.log('usuario a guardar',usuarioSeleccionado);
    let id= "";
    console.log(dataUsuarios);
    dataUsuarios.forEach(element => {
        if (element.nombre == usuarioSeleccionado) {
            id = element.id;
            console.log(id,element.nombre);
        }
    });

    dataUsuarios.forEach(usuario => {
        if (usuario.id == usuarioLogueado) {
            usuario.contactos.push(id);
        }
    });

    console.log('va a LS',dataUsuarios);

    localStorage.setItem('usuarios',JSON.stringify(dataUsuarios));
    getContactosUser();
    //
    $('#modal-nuevoContacto').modal('hide');
    //////
    
};


//obtener la lista de contactos del usuario logueado
const getContactosUser = () => {
    let dataUsers = JSON.parse(localStorage.getItem('usuarios'));
    let userLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

    document.getElementById('contactosUser').innerHTML = `
        <div class="w-100 pb-2" style="text-align: center;">
            <button type="button" class="btn btn-primary btn-sm btn-new-contact" onclick="nuevoContacto(${userLogueado})"><small>Nuevo contacto</small></button>
        </div>  
    `;

    dataUsers.forEach(user => {
        if (user.id == userLogueado) {
            user.contactos.forEach(contacto => {
                dataUsers.forEach(element => {
                    if (element.id == contacto) {
                        document.getElementById('contactosUser').innerHTML += `
                            <li class="nav-item mb-3 li" onclick="setChat('chat-${userLogueado}-${element.id}','${element.nombre}')">
                                <div class="container">
                                    <div class="row mr-1">
                                        <div class="col-2 pb-2">
                                            <img class="img-preview-pf" src="./src/profile-pics/${element.imagen}" alt="">
                                        </div>
                                        <div class="col-10 bb-s pb-2">
                                            <div class="row pl-2" id="descrip-clase">
                                                <div class="col-12"><a class="navbar-brand mt-0 pt-0 pb-0 c-t"><small><strong class="c-t">${element.nombre}</strong></small></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        `;
                    }
                });
            });    
        }
        
    });
};

///funcion que se llama al seleccionar un mensaje, para ver el detalle en la view chat

const setChat = (idChat,nameDest) => {

    localStorage.setItem('idChat',idChat);
    localStorage.setItem('nameDestino',nameDest);

    location.href = '/Examen_1_Expertos/views/chat.html';
};

/// funcion para renderizar los mensajes que tiene el usuario logueado
const getMensajesUser = () => {
    
    let dataUsers = JSON.parse(localStorage.getItem('usuarios'));
    let userLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

    document.getElementById('mensajesUsuario').innerHTML ='';
    dataUsers.forEach(usuario => {
        if (usuario.id == userLogueado) {
            usuario.conversaciones.forEach(conversacion => {
                console.log(conversacion.ultimoMensaje);
                document.getElementById('mensajesUsuario').innerHTML += `
                    <li class="nav-item mb-3 li" onclick="setChat('${conversacion.id}','${conversacion.nombreDestinatario}')">
                        <div class="container">
                            <div class="row mr-1">
                                <div class="col-2 pb-2">
                                    <img class="img-preview-pf" src="./src/profile-pics/${conversacion.imagenDestinatario}" alt="">
                                </div>
                                <div class="col-7 bb-s pb-2">
                                    <div class="row pl-2" id="descrip-clase">
                                        <div class="col-12"><a class="navbar-brand mt-0 pt-0 pb-0 c-t"><small><strong class="c-t">${conversacion.nombreDestinatario}</strong></small></a></div>
                                        <div class="col-12"><p class="mb-0 c-t"><small class="c-t">${conversacion.ultimoMensaje}</small></p></div>
                                    </div>
                                </div>
                                <div class="col-3 bb-s pb-2">
                                    <a class="navbar-brand mt-0 pt-0 pb-0 c-t"><small class="c-t">9:50 PM</small></a>
                                </div>
                            </div>
                        </div>
                    </li>
                `;
            });
        }
    });

    getContactosUser();
};


// funcion para poner la imagen del usuario logueados
const userLogueado = (id) => {

    let dataUsers = JSON.parse(localStorage.getItem('usuarios'));

    document.getElementById('profile-user').innerHTML ='';

    dataUsers.forEach(user => {
        if (user.id == id) {
            document.getElementById('profile-user').innerHTML = `
                <img class="img-profile" src="./src/profile-pics/${user.imagen}" alt=""><i class="fas fa-sort-down arrow-profile"></i>
            `;
            console.log('va dar click');
            document.getElementById('profile-user').click();
        } 
    });
    localStorage.setItem('usuarioLogueado',id);

    getMensajesUser();
};


// funcion que se ejecuta al darle atras desde la vista chat.html
const retornoDelChat = () => {
    if (localStorage.getItem('usuarioLogueado') != null) {
        userLogueado(localStorage.getItem('usuarioLogueado'));
    }
}

retornoDelChat();