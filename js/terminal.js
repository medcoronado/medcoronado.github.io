document.getElementById('terminal-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    let input = e.target.value.trim(); // Elimina espacios en blanco
    e.target.value = ''; // Limpia el campo de entrada

    if (input === '') {
      // Si el comando está vacío, solo agrega una línea en blanco
      let dynamicMessages = document.getElementById('dynamic-messages');
      dynamicMessages.innerHTML += '<p class="text-default"><span class="mr-2 text-topterminal">></span></p>';
    } else {
      handleCommand(input);
    }
  }
});

function handleCommand(command) {
  let dynamicMessages = document.getElementById('dynamic-messages');
  let formattedCommand = command.trim().toLowerCase();

  switch (formattedCommand) {
    case 'help':
      dynamicMessages.innerHTML += `
      <p class="text-default" style="font-size: 1rem;"><span class="mr-2 text-topterminal">></span>
      Available commands: <br>
      Name of command           |     Description <br>
      <br>
      <b>help</b> - <em>View a list of all available commands and their descriptions in English.</em>
      <br>
      <b>ayuda</b> - <em>View a list of all available commands and their descriptions in Spanish.</em>
      <br>
      <b>hola</b> - <em>A friendly introduction in spanish with links to my social profiles.</em>
      <br>
      <b>hi</b> - <em>A friendly introduction in english with links to my social profiles.</em>
      <br>
      <b>about</b> - <em>Learn about me: who I am, what I do, and the technologies I work with.</em>
      <br>
      <b>conocer</b> - <em>Learn about me: who I am, what I do, and the technologies I work with.</em>
      <br>
      <b>contact</b> - <em>Get my contact details, including email and links to my GitHub and LinkedIn profiles.</em>
      <br>
      <b>contacto</b> - <em>Get my contact details, including email and links to my GitHub and LinkedIn profiles.</em>
      <br>
      <b>skills</b> - <em>Discover the technologies and tools I am proficient in.</em>
      <br>
      <b>habilidades</b> - <em>Discover the technologies and tools I am proficient in.</em>
      <br>
      <b>interests</b> -<em>Find out about my personal interests.</em>
      <br>
      <b>intereses</b> -<em>Find out about my personal interests.</em>
      <br>
      <b>cv-en</b> - <em>Download my Curriculum Vitae in English.</em>
      <br>
      <b>cv-es</b> - <em>Download my Curriculum Vitae in Spanish.</em>
      <br>
      <b>resume</b> - <em>Download my resume.</em>
      <br>             
      <b>clear</b> - <em>Clear the terminal screen to start fresh.</em>
      <br>
      <b>cls</b> - <em>Clear the terminal screen to start fresh.</em>
      <br>
      </p>`; 
      break;
    case 'ayuda':
      dynamicMessages.innerHTML += `
      <p class="text-default" style="font-size: 1rem;"><span class="mr-2 text-topterminal">></span>
      Comandos disponibles: <br>
      Nombre del comando         |     Descripción <br>
      <br>
      <b>help</b> - <em>Vea una lista de todos los comandos disponibles y sus descripciones en inglés.</em>
      <br>
      <b>ayuda</b> - <em>Vea una lista de todos los comandos disponibles y sus descripciones en español.</em>
      <br>
      <b>hola</b> - <em>Una introducción amigable en español con enlaces a mis perfiles sociales.</em>
      <br>
      <b>hi</b> - <em>Una introducción amigable en inglés con enlaces a mis perfiles sociales.</em>
      <br>
      <b>about</b> - <em>Conozca más sobre mí: quién soy, qué hago y las tecnologías con las que trabajo.</em>
      <br>
      <b>conocer</b> - <em>Conozca más sobre mí: quién soy, qué hago y las tecnologías con las que trabajo.</em>
      <br>
      <b>contact</b> - <em>Obtenga mis datos de contacto, incluido el correo electrónico y los enlaces a mi GitHub y perfiles de LinkedIn.</em>
      <br>
      <b>contacto</b> - <em>Obtén mis datos de contacto, incluyendo correo electrónico y enlaces a mis perfiles de GitHub y LinkedIn.</em>
      <br>
      <b>skills</b> - <em>Descubre las tecnologías y herramientas en las que soy competente.</em>
      <br>
      <b>habilidades</b> - <em>Descubre las tecnologías y herramientas en las que soy competente.</em>
      <br>
      <b>interests</b> -<em>Descubre mis intereses personales.</em>
      <br>
      <b>intereses</b> -<em>Descubre mis intereses personales.</em>
      <br>
      <b>cv-en</b> - <em>Descarga mi Curriculum Vitae en inglés.</em>
      <br>
      <b>cv-es</b> - <em>Descarga mi Curriculum Vitae en español.</em>
      <br>
      <b>resume</b> - <em>Descargar mi currículum.</em>
      <br>
      <b>clear</b> - <em>Limpiar la pantalla de la terminal para empezar de nuevo.</em>
      <br>
      <b>cls</b> - <em>Limpiar la pantalla de la terminal para empezar de nuevo.</em>
      <br>
      </p>`; 
      break;      
    case 'about':
      dynamicMessages.innerHTML += `                  
      <p class="terminal-hello"><span class="mr-2 terminal-top">></span>Hello!, I'm Martin.</p>
      <p class="terminal-contact"><span class="mr-2 terminal-top">></span>Contact: <a class="terminal-contact" href="mailto:medcoronado@outlook.com">medcoronado@outlook.com</a></p>
      <p class="terminal-objetive"><span class="mr-2 terminal-top">></span>Front-end Developer | UX/UI.</p>
      <p class="terminal-skills"><span class="mr-2 terminal-top">></span>Technologies I Know: Html, Css, Javascript, Bootstrap, Tailwind, Node.js, React, MongoDB, Firebase, Sass, Figma, Git, Linux</p>
      <p class="terminal-interest"><span class="mr-2 terminal-top">></span>Interests: UI Design, Web Dev.</p>`;
      break;
    case 'conocer':
      dynamicMessages.innerHTML += `                  
      <p class="terminal-hello"><span class="mr-2 terminal-top">></span>¡Hola!, Mi nombre es Martin.</p>
      <p class="terminal-contact"><span class="mr-2 terminal-top">></span>Contacto: <a class="terminal-contact" href="mailto:medcoronado@outlook.com">medcoronado@outlook.com</a></p>
      <p class="terminal-objetive"><span class="mr-2 terminal-top">></span>Front-end Developer | UX/UI.</p>
      <p class="terminal-skills"><span class="mr-2 terminal-top">></span>Tecnologías que uso: Html, Css, Javascript, Bootstrap, Tailwind, Node.js, React, MongoDB, Firebase, Sass, Figma, Git, Linux</p>
      <p class="terminal-interest"><span class="mr-2 terminal-top">></span>Interesado en: UI Design, Web Dev.</p>`;
      break;      
    case 'hola':
      dynamicMessages.innerHTML += `
      <p class="terminal-hello"><span class="mr-2 terminal-top">></span>¡Hola! Soy Martin, conocido como MED o Medcoronado. Gracias por visitar mi portafolio. Si deseas ponerte en contacto conmigo, no te sientas comprometido; puedes escribirme simplemente para saludar, compartir ideas o planificar un proyecto juntos. Te dejo mis redes sociales justo debajo para que elijas la forma que prefieras. :)</p>
      <p class="terminal-contact"><span class="mr-2 terminal-top">></span>Contact: <a class="terminal-contact" href="mailto:medcoronado@outlook.com">medcoronado@outlook.com</a>
      <a class="terminal-contact ml-3" target="_blank" href="https://github.com/medcoronado">Github</a>
      <a class="terminal-contact ml-3" target="_blank" href="https://www.linkedin.com/in/medcoronado/">LinkedIn</a>
      </p>`;
      break;
    case 'hi':
      dynamicMessages.innerHTML += `
      <p class="terminal-hello"><span class="mr-2 terminal-top">></span>Hello! I am Martin, also known as MED or Medcoronado. Thank you for visiting my portfolio web. If you'd like to get in touch with me, feel free to do so; you can write to me just to say hi, share ideas, or plan a project together. Below, you'll find my social media links so you can choose the method you prefer. :)</p>
      <p class="terminal-contact"><span class="mr-2 terminal-top">></span>Contact: <a class="terminal-contact" href="mailto:medcoronado@outlook.com">medcoronado@outlook.com</a>
      <a class="terminal-contact ml-3" target="_blank" href="https://github.com/medcoronado">Github</a>
      <a class="terminal-contact ml-3" target="_blank" href="https://www.linkedin.com/in/medcoronado/">LinkedIn</a>
      </p>`;
      break; 
    case 'hello':
      dynamicMessages.innerHTML += `
      <p class="terminal-hello"><span class="mr-2 terminal-top">></span>Hello! I am Martin, also known as MED or Medcoronado. Thank you for visiting my portfolio web. If you'd like to get in touch with me, feel free to do so; you can write to me just to say hi, share ideas, or plan a project together. Below, you'll find my social media links so you can choose the method you prefer. :)</p>
      <p class="terminal-contact"><span class="mr-2 terminal-top">></span>Contact: <a class="terminal-contact" href="mailto:medcoronado@outlook.com">medcoronado@outlook.com</a>
      <a class="terminal-contact ml-3" target="_blank" href="https://github.com/medcoronado">Github</a>
      <a class="terminal-contact ml-3" target="_blank" href="https://www.linkedin.com/in/medcoronado/">LinkedIn</a>
      </p>`;
      break;       
    case 'contact':
      dynamicMessages.innerHTML += `<p class="terminal-contact"><span class="mr-2 terminal-top">></span>Contact: 
      <a class="terminal-contact" href="mailto:medcoronado@outlook.com">medcoronado@outlook.com</a>
      <a class="terminal-contact ml-3" target="_blank" href="https://github.com/medcoronado">Github</a>
      <a class="terminal-contact ml-3" target="_blank" href="https://www.linkedin.com/in/medcoronado/">LinkedIn</a></p>`;
      break;
    case 'contacto':
      dynamicMessages.innerHTML += `<p class="terminal-contact"><span class="mr-2 terminal-top">></span>Contacto: 
      <a class="terminal-contact" href="mailto:medcoronado@outlook.com">medcoronado@outlook.com</a>
      <a class="terminal-contact ml-3" target="_blank" href="https://github.com/medcoronado">Github</a>
      <a class="terminal-contact ml-3" target="_blank" href="https://www.linkedin.com/in/medcoronado/">LinkedIn</a></p>`;
      break;      
    case 'skills':
      dynamicMessages.innerHTML += `<p class="terminal-skills"><span class="mr-2 terminal-top">></span>Technologies I Know: Html, Css, Javascript, Bootstrap, Tailwind, Node.js, React, MongoDB, Firebase, Sass, Figma, Git, Linux</p>`;
      break;
    case 'habilidades':
      dynamicMessages.innerHTML += `<p class="terminal-skills"><span class="mr-2 terminal-top">></span>Tecnologías que uso: Html, Css, Javascript, Bootstrap, Tailwind, Node.js, React, MongoDB, Firebase, Sass, Figma, Git, Linux</p>`;
      break;      
    case 'cv-en':
      dynamicMessages.innerHTML += `<a href="https://drive.google.com/uc?export=download&id=1FAhc7M4MdpM6FkEbI7DOMmKi9pKzSdQB" class="terminal-skills"><span class="mr-2 terminal-top">></span>Download my Curriculum Vitae.</a> <br>`;
      break;     
    case 'cv-es':
      dynamicMessages.innerHTML += `<a href="https://drive.google.com/uc?export=download&id=195An7LGKHRfrp0V1kOe2yVBaaHB0r2os" class="terminal-skills"><span class="mr-2 terminal-top">></span>Descarga mi Curriculum Vitae.</a> <br>`;
      break;  
    case 'resume':
      dynamicMessages.innerHTML += `<a href="https://drive.google.com/uc?export=download&id=1FAhc7M4MdpM6FkEbI7DOMmKi9pKzSdQB" class="terminal-skills"><span class="mr-2 terminal-top">></span>Download my Resume.</a> <br>`;
      break;                 
    case 'interests':
      dynamicMessages.innerHTML += `<p class="terminal-interest"><span class="mr-2 terminal-top">></span>Interests: UI Design, Web Dev.</p>`;
      break;
    case 'intereses':
      dynamicMessages.innerHTML += `<p class="terminal-interest"><span class="mr-2 terminal-top">></span>Interesado en: UI Design, Web Dev.</p>`;
      break;      
    case 'clear':
    case 'cls':
      // Limpia solo los mensajes dinámicos
      dynamicMessages.innerHTML = '';
      break;
    default:
      dynamicMessages.innerHTML += `<p class="terminal-error"><span class="mr-2 text-topterminal">></span>${command} : Command not found. Write “help” to see all commands.</p>`;
  }

  // Asegura que el scroll siempre esté abajo
  document.getElementById('terminal-content').scrollTop = document.getElementById('terminal-content').scrollHeight;
}


//        .o.                              oooo  M C
//       .888.                             `888  E O
//      .8"888.       oooooooo oooo  oooo   888  D R
//     .8' `888.     d'""7d8P  `888  `888   888    O
//    .88ooo8888.      .d8P'    888   888   888    N
//   .8'     `888.   .d8P'  .P  888   888   888    A
//  o88o     o8888o d8888888P   `V88V"V8P' o888o   D
//                                                 O
//                                               
//                                               
