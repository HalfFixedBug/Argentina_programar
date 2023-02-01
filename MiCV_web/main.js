const datosPersonales = new Promise((resolve)=>{
  const url = 'https://randomuser.me/api/?format=json';
    $(document).ready(function(){
      $.get(url, function(data, status){
        console.log(data.results[0]);
        resolve(data.results[0]);
      })
    })
})  
      
        

datosPersonales.then(function (dato) {
  const personal = document.getElementById("datos-personales");
  const perfil= document.getElementById("container-perfil");
  const contactos = document.getElementById("contactos");

  $(perfil.firstElementChild).attr("src", dato.picture.large);

  perfil.children[0].insertAdjacentHTML('afterend','<h2 id="name">'+ dato.name.last+' '+dato.name.first+' </h2>');

  contactos.children[2].insertAdjacentHTML('afterbegin','<div id="elemento1" class="contact-item">mail: '+ dato.email+'</div>');
  contactos.children[2].insertAdjacentHTML('afterbegin','<div id="elemento2" class="contact-item"> cel: '+ dato.cell+'</div>');
  contactos.children[2].insertAdjacentHTML('afterbegin','<div id="elemento3" class="contact-item"> tel:'+ ' '+dato.phone+'</div>');
  
  personal.firstElementChild.insertAdjacentHTML('beforeend','<p class="personal-item">'+dato.dob.date.substring(0,10)+'</p>');
  personal.children[1].insertAdjacentHTML('beforeend','<p class="personal-item">'+dato.dob.age+'</p>');
  personal.children[2].insertAdjacentHTML('beforeend','<p class="personal-item">'+ dato.location.street.name+' '+dato.location.street.number+'</p>');
  personal.children[3].insertAdjacentHTML('beforeend','<p class="personal-item">'+dato.location.country+'</p>');

  }
);

