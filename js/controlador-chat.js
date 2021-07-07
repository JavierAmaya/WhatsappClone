const atras = ()=>{
    location.href = '/Examen_1_Expertos/'
};

//funcion para guardar los stickers en el local storage
const setStickers = () => {

    let dataStickers = [];
    for (let i = 1; i < 7; i++) {
        dataStickers[i-1] = { id: i, sticker: i+'.png'};
    }

    localStorage.setItem('stickers',JSON.stringify(dataStickers));
};

setStickers();

//funcion para llenar el div de los stickers
const getStickers = () => {

    let dataStickers = JSON.parse(localStorage.getItem('stickers'));

    dataStickers.forEach(e => {
        document.getElementById('stickers').innerHTML +=`
            <div class="col-4 borde-sticker" onclick="enviarSticker('${e.id}')">
                <img class="sticker-chat" src="../src/stickers/${e.sticker}" alt="">
            </div>
        `;
    });
};

getStickers();

/// establecer la imagen del usuario logueado
const setUserImg = () => {
    let dataUsers = JSON.parse(localStorage.getItem('usuarios'));
    let usuarioLogueado = localStorage.getItem('usuarioLogueado');

    dataUsers.forEach(element => {
        if (element.id == usuarioLogueado) {
            document.getElementById('profile-user').innerHTML += `
                <img class="img-profile" src="../src/profile-pics/${element.imagen}" alt="">
            `;
        }
    });
};

// funcion para enviar un sticker
const enviarSticker = (stick) => {

    console.log('sticker Enviado',stick);

    let dataUsuarios = JSON.parse(localStorage.getItem('usuarios'));
    let chatSeleccionado = localStorage.getItem('idChat');
    let usuarioLogueado = parseInt(localStorage.getItem('usuarioLogueado'),10);
    let date = new Date();
    let nameDestino = localStorage.getItem('nameDestino');

    let chatGuardar = JSON.parse(localStorage.getItem(chatSeleccionado));

    console.log('chat Seleccionado', chatSeleccionado);
    console.log('chat antes de guardar',chatGuardar);

    let idReceptor;
    dataUsuarios.forEach(element => {
        if (element.nombre == nameDestino) {
            idReceptor = element.id;
        }
    });

    let hora = date.getHours();
    let minutos = date.getMinutes();
    let tiempo = hora +":"+ minutos;

    let dataMsg = {
        emisor: usuarioLogueado,
        hora: tiempo,
        sticker: stick,
        receptor: idReceptor,
        tipo: "sticker"
    }

    chatGuardar[0].descripcion.push(dataMsg);
    console.log('chat a guardar',chatGuardar);
    localStorage.setItem(chatSeleccionado,JSON.stringify(chatGuardar));
    document.getElementById('mensaje-enviar').value = "";
    document.getElementById('stickers-tab').click();
    setSoloChat();
};

// enviar mensaje
const enviarMensaje = () => {

    let date = new Date();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let tiempo = hora +":"+ minutos;
    let idReceptor;

    let dataUsuarios = JSON.parse(localStorage.getItem('usuarios'));
    let chatSeleccionado = localStorage.getItem('idChat');
    let usuarioLogueado = parseInt(localStorage.getItem('usuarioLogueado'),10);

    let nameDestino = localStorage.getItem('nameDestino');

    let chatGuardar = JSON.parse(localStorage.getItem(chatSeleccionado));

    let chatVacio = {
        idConversacion : chatSeleccionado,
        descripcion: [{
            emisor: usuarioLogueado,
            hora: tiempo,
            mensaje: document.getElementById('mensaje-enviar').value,
            receptor: idReceptor,
            tipo: "text"
        }]
    };

    if (chatGuardar == null) {
        localStorage.setItem(chatSeleccionado,JSON.stringify(chatVacio));
    }
    console.log('chat Seleccionado', chatSeleccionado);
    console.log('chat antes de guardar',chatGuardar);


    dataUsuarios.forEach(element => {
        if (element.nombre == nameDestino) {
            idReceptor = element.id;
        }
    });

    let dataMsg = {
        emisor: usuarioLogueado,
        hora: tiempo,
        mensaje: document.getElementById('mensaje-enviar').value,
        receptor: idReceptor,
        tipo: "text"
    };

    if (chatGuardar == null) {
        let jsonGuardar = JSON.parse(localStorage.getItem(localStorage.getItem('idChat')));
        console.log('jsonGuardar',jsonGuardar);
        jsonGuardar.forEach(e => {
            e.descripcion.push(dataMsg);
        });
        localStorage.setItem(chatSeleccionado,JSON.stringify(jsonGuardar));
        
    }else {
        chatGuardar.forEach(element => {
            element.descripcion.push(dataMsg);
        });
        localStorage.setItem(chatSeleccionado,JSON.stringify(chatGuardar));
    }
    
    document.getElementById('mensaje-enviar').value = "";
    setSoloChat();
    
};


/// renderizar un chat en especifico al darle click
const setSoloChat = () =>{

    let idChat = localStorage.getItem('idChat');
    let usuarioLogueado = localStorage.getItem('usuarioLogueado');
    let conversacion = [];

    document.getElementById('tab-conversacion').innerHTML = '';
    if (idChat != null) {

        conversacion = JSON.parse(localStorage.getItem(idChat));

        conversacion.forEach(conversacion => {
            conversacion.descripcion.forEach(msg => {
                if (msg.emisor == usuarioLogueado) { //mensaje enviado
                    if (msg.tipo == 'text') {
                        console.log('mensaje de texto');
                        document.getElementById('tab-conversacion').innerHTML += `
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-6 msg-env" id="msg-enviado">
                                        <p class="mb-1 pt-1">${msg.mensaje}</p>
                                        <div class="w-100 hora-msg pb-1"><p class="mb-0"><small>${msg.hora}</small></p></div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }else if (msg.tipo == 'sticker') {
                        console.log('es un sticker');
                        document.getElementById('tab-conversacion').innerHTML += `
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-6 msg-env" id="">
                                        <p class="mb-1 pt-1"><img class="sticker-chat" src="../src/stickers/${msg.sticker}.png" alt=""></p>
                                        <div class="w-100 hora-msg pb-1"><p class="mb-0"><small>${msg.hora}</small></p></div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                    
                    
                }else if (msg.emisor != usuarioLogueado) { // si el emisor es distinto del usuario logueado entonces
                    
                    if (msg.tipo == 'text') {
                        console.log('mensaje de texto');

                        document.getElementById('tab-conversacion').innerHTML += `
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-8 msg-rec" id="">
                                        <p class="mb-1 pt-1">${msg.mensaje}</p>
                                        <div class="w-100 hora-msg pb-1"><p class="mb-0"><small>${msg.hora}</small></p></div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }else if (msg.tipo == 'sticker') {
                        console.log('es un sticker',msg);
                        document.getElementById('tab-conversacion').innerHTML += `
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-8 msg-rec" id="">
                                    <p class="mb-1 pt-1"><img class="sticker-chat" src="../src/stickers/${msg.sticker}.png" alt=""></p>
                                        <div class="w-100 hora-msg pb-1"><p class="mb-0"><small>${msg.hora}</small></p></div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                    
                }
            });
        });
    }  
}

//establecer todo lo visual del chat seleccionado
const setChat = () => {

    let idChat = localStorage.getItem('idChat');
    let nameDest = localStorage.getItem('nameDestino');
    let dataUsers = JSON.parse(localStorage.getItem('usuarios'));
    let usuarioLogueado = localStorage.getItem('usuarioLogueado');

    //imagen del usuario logueado
    setUserImg();
    ///imagen que aparece en el chat
    dataUsers.forEach(element => {
        if (element.nombre == nameDest) {
            document.getElementById('img-chat-selec').innerHTML += `
                <img class="img-profile-chat" src="../src/profile-pics/${element.imagen}" alt="">
            `;
            document.getElementById('name-chat').innerHTML = `${element.nombre}`;
            
        }
    });

    // mostrar los mensajes
    let conversacion = [];
    if (idChat != null) {

        conversacion = JSON.parse(localStorage.getItem(idChat));

        if (conversacion != null) {
            conversacion.forEach(conversacion => {
                conversacion.descripcion.forEach(msg => {
                    if (msg.emisor == usuarioLogueado) { //mensaje enviado
                        if (msg.tipo == 'text') {
                            console.log('mensaje de texto');
                            document.getElementById('tab-conversacion').innerHTML += `
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-6 msg-env" id="msg-enviado">
                                            <p class="mb-1 pt-1">${msg.mensaje}</p>
                                            <div class="w-100 hora-msg pb-1"><p class="mb-0"><small>${msg.hora}</small></p></div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }else if (msg.tipo == 'sticker') {
                            console.log('es un sticker');
                            document.getElementById('tab-conversacion').innerHTML += `
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-6 msg-env" id="">
                                            <p class="mb-1 pt-1"><img class="sticker-chat" src="../src/stickers/${msg.sticker}.png" alt=""></p>
                                            <div class="w-100 hora-msg pb-1"><p class="mb-0"><small>${msg.hora}</small></p></div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }
                        
                        
                    }else if (msg.emisor != usuarioLogueado) { // si el emisor es distinto del usuario logueado entonces
                        
                        if (msg.tipo == 'text') {
                            console.log('mensaje de texto');
    
                            document.getElementById('tab-conversacion').innerHTML += `
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-8 msg-rec" id="">
                                            <p class="mb-1 pt-1">${msg.mensaje}</p>
                                            <div class="w-100 hora-msg pb-1"><p class="mb-0"><small>${msg.hora}</small></p></div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }else if (msg.tipo == 'sticker') {
                            console.log('es un sticker',msg);
                            document.getElementById('tab-conversacion').innerHTML += `
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-8 msg-rec" id="">
                                        <p class="mb-1 pt-1"><img class="sticker-chat" src="../src/stickers/${msg.sticker}.png" alt=""></p>
                                            <div class="w-100 hora-msg pb-1"><p class="mb-0"><small>${msg.hora}</small></p></div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }
                        
                    }
                });
            });
        }

        
    }   
};

setChat();