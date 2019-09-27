/**
_("This will be translated.");
I18N.gettext("Also this...");
Utilities.formatString(I18N.ngettext("I have %s apple", "I have %s apples", n), s);
*/

I18N.loadLanguage('messages',"es",               
{
  //Textos en nombres de posiciones
  "Oro": { "msgstr" : "Oro"},
  "Munición": { "msgstr" : "Munición"},
  "Ración": { "msgstr" : "Ración", "msgstr_plural" : "Raciones"},
  "Armadura": { "msgstr" : "Armadura"},
  "Puntos de Golpe": { "msgstr" : "Puntos de Golpe"},
  "Puntos de golpe máximos": { "msgstr" : "Puntos de golpe máximos"},
  "PX": { "msgstr" : "PX"},
  "Nivel": { "msgstr" : "Nivel"},
  "Clase": { "msgstr" : "Clase"},
  "Nombre": { "msgstr" : "Nombre"},
  "Daño": { "msgstr" : "Daño"},
  "Alias": { "msgstr" : "Alias"},
  "Fuerza": { "msgstr" : "Fuerza"},
  "Destreza": { "msgstr" : "Destreza"},
  "Constitución": { "msgstr" : "Constitución"},
  "Inteligencia": { "msgstr" : "Inteligencia"},
  "Sabiduría": { "msgstr" : "Sabiduría"},
  "Carisma": { "msgstr" : "Carisma"},
  "Alineamiento" :  { "msgstr" : "Alineamiento"},
  "Mod. Magia": { "msgstr" : "Mod. Magia"},
  "Pen. Magia": { "msgstr" : "Pen. Magia"},
  "Raza": { "msgstr" : "Raza"},
  "En juego": { "msgstr" : "En juego"},
  "debilitado": { "msgstr" : "debilitado"},
  "tembloroso": { "msgstr" : "tembloroso"},
  "enfermo": { "msgstr" : "enfermo"},
  "aturdido": { "msgstr" : "aturdido"},
  "confundido": { "msgstr" : "confundido"},
  "marcado": { "msgstr" : "marcado"},
  //Texto chat inactivo
  "(Fuera de juego, no se graban datos)": { "msgstr" : "(Fuera de juego, no se graban datos)"},
  //Textos de executeMov
  "Los movimientos que puedes consultar son:": { "msgstr" : "Los movimientos que puedes consultar son:"},
  //Textos de executeVida
  "Resumen de puntos de vida:": { "msgstr" : "Resumen de puntos de vida:"},
  "- %s PG:%s/%s" : { "msgstr" : "- %s PG:%s/%s"},
  "No hay ninguna ficha asignada al chat ni al usuario." : { "msgstr" : "No hay ninguna ficha asignada al chat ni al usuario."},
  //Textos de executeStatus
  "No se encuentra hoja de personaje para Alias:" : { "msgstr" : "No se encuentra hoja de personaje para Alias:"},
  "%s (%s) tiene:" : { "msgstr" : "%s (%s) tiene:"},
  " - %s PX, " : { "msgstr" : " - %s PX, "},
  " - PG: " :  { "msgstr" : " - PG: "},
  "puedes usar este comando abriéndome un canal %s" :  { "msgstr" : "puedes usar este comando abriéndome un canal %s"},
  "privado" :  { "msgstr" : "privado" },
  //Textos de executeAcampar
  " acampa:" :  { "msgstr" : " acampa:" },
  " - Le queda %s ración.": { "msgstr" : " - Le queda %s ración.", "msgstr_plural" : " - Le quedan %s raciones."},
  " - Se cura %s PG para un total de %s." :  { "msgstr" : "  - Se cura %s PG para un total de %s.:" },
  " - Recupera su conexión con la magia.": { "msgstr" : " - Recupera su conexión con la magia."},
  "¡Puede subir a nivel %s!": { "msgstr" : "¡Puede subir a nivel %s!"},
  "No tiene raciones.": { "msgstr" : "No tiene raciones."},
  //Texto de executeCharRoll
  " hace una tirada de %s": { "msgstr" : " hace una tirada de %s"},
  //Texto de executeDar
  "El primer parámetro debe ser un número natural: ": { "msgstr" : "El primer parámetro debe ser un número natural: "},
  "No encuentro el campo que mencionas: ": { "msgstr" : "No encuentro el campo que mencionas: "},
  "El campo indicado no es contable: ": { "msgstr" : "El campo indicado no es contable: "},
  "Falta el alias del personaje a modificar": { "msgstr" : "Falta el alias del personaje a modificar"},
  " obtiene ": { "msgstr" : " obtiene "},
  " pierde ": { "msgstr" : " pierde "},
  "Ahora tiene ": { "msgstr" : "Ahora tiene "},
  "Se ha cumplido el alineamiento esta aventura": { "msgstr" : "Se ha cumplido el alineamiento esta aventura."},
  //Textos executeCurar
  "La cantidad de daño a curar debe ser un número:": { "msgstr" : "La cantidad de daño a curar debe ser un número:"},
  " recupera %s PG, para un total de %s/%s.": { "msgstr" : " recupera %s PG, para un total de %s/%s."},
  //Texto de executeHerir
  "El nombre del atributo o condición a aplicar no se encuentra.": { "msgstr" : "El nombre del atributo o condición a aplicar no se encuentra."},
  "Es necesario un atributo o herida que aplicar": { "msgstr" : "Es necesario un atributo o herida que aplicar."},
  " está ahora %s": { "msgstr" : " está ahora %s"},
  //Texto de executeDanyo
  " tira danyo": { "msgstr" : " tira daño"},
  " sufre daño": { "msgstr" : " sufre daño"},
  "¡%s obtiene un PX!": { "msgstr" : "¡%s obtiene un PX!"},
  "PX totales:": { "msgstr" : "PX totales:"},
  "  TOTAL: ": { "msgstr" : "  TOTAL: "},
  "A %s le quedan %s PG.": { "msgstr" : "A %s le quedan %s PG."},
  "¡%s ha CAIDO!": { "msgstr" : "¡%s ha CAIDO!"},
  //Texto de executeRoll
  " tira los dados": { "msgstr" : " tira los dados"},
  //Textos de Callbacks
  " dispara.": { "msgstr" : " dispara."},
  " invoca un conjuro.": { "msgstr" : " invoca un conjuro."},
  " gasta 1 punto de munición.": { "msgstr" : " gasta 1 punto de munición."},
  " - Le queda %s munición.": { "msgstr" : " - Le queda %s munición.", "msgstr_plural" : " - Le quedan %s municiones."},
  " hace un daño reducido.": { "msgstr" : " hace un daño reducido."},
  "¡%s queda expuesto al peligro!": { "msgstr" : "¡%s queda expuesto al peligro!"},
  "¡%s olvida su conjuro!": { "msgstr" : "¡%s olvida su conjuro!"},
  "¡%s pierde el contacto con la magia!": { "msgstr" : "¡%s pierde el contacto con la magia!"},
  " - El modificador por magia se reduce a %s": { "msgstr" : " - El modificador por magia se reduce a %s"},
  //Texto de executeArchivo
  "No tienes ninguna Hoja de Personaje vinculada a este usuario.": { "msgstr" : "No tienes ninguna Hoja de Personaje vinculada a este usuario."},
  "El archivo por defecto para tu usuario está [aquí](%s)": { "msgstr" : "El archivo por defecto para tu usuario está [aquí](%s)"},
  "No he podido obtener una hoja de cálculo accesible desde %s": { "msgstr" : "No he podido obtener una hoja de cálculo accesible desde %s"},
  "Solo pueden declararse chats de grupo como Partidas activas.": { "msgstr" : "Solo pueden declararse chats de grupo como Partidas activas."},
  "Para la partida %s se usará el archivo enlazado [aquí](%s)": { "msgstr" : "Para la partida %s se usará el archivo enlazado [aquí](%s)"},
  "Es necesario indicar un ID o URL a un Google Spreadsheet correctamente formateado para comenzar una partida.": { "msgstr" : "Es necesario indicar un ID o URL a un Google Spreadsheet correctamente formateado para comenzar una partida."},
  "Usa /archivo (ID o la URL de la hoja de personaje en google spreadsheets) para asociar una a tu usuario, o /ayuda para aprender como crear una.": { "msgstr" : "Usa /archivo (ID o la URL de la hoja de personaje en google spreadsheets) para asociar una a tu usuario, o /ayuda para aprender como crear una."},
  //Texto de executeAyuda
  "Bienvenido a la ayuda de DWMochilaBot (/ayuda)": { "msgstr" : "Bienvenido a la ayuda de DWMochilaBot (/ayuda)"},
"Este bot permite organizar y jugar partidas del juego de rol Dungeon World a través de Telegram.": { "msgstr" : "Este bot permite organizar y jugar partidas del juego de rol Dungeon World a través de Telegram."},
"Para ello, enlaza un archivo de Google Spreadsheets con el chat de juego y sus usuarios para usar los valores del personaje en la partida.": { "msgstr" : "Para ello, enlaza un archivo de Google Spreadsheets con el chat de juego y sus usuarios para usar los valores del personaje en la partida."},
"Selecciona uno de los temas a consultar.": { "msgstr" : "Selecciona uno de los temas a consultar."},
"Crear y gestionar partidas (/ayuda partida)": { "msgstr" : "Crear y gestionar partidas (/ayuda partida)"},
"Para crear una partida de Dungeon World, sigue estos pasos.": { "msgstr" : "Para crear una partida de Dungeon World, sigue estos pasos."},
"1-Accede a la plantilla de hojas de personaje [aquí](%s)": { "msgstr" : "1-Accede a la plantilla de hojas de personaje [aquí](%s)"},
"2-Selecciona 'File'-->'Make a Copy'": { "msgstr" : "2-Selecciona 'File'-->'Make a Copy'"},
"3-En tu copia pulsa sobre el Botón 'Share'-->Advanced-->Cambia la visibilidad del archivo a 'Public on the web'": { "msgstr" : "3-En tu copia pulsa sobre el Botón 'Share'-->Advanced-->Cambia la visibilidad del archivo a 'Public on the web'"},
"4-Comparte el enlace con tus jugadores para que creen sus personajes.": { "msgstr" : "4-Comparte el enlace con tus jugadores para que creen sus personajes."},
"5-Una vez estén creados, crea un grupo de Telegram con todos los jugadores y master de la partida, y añade al DWMochilabot.": { "msgstr" : "5-Una vez estén creados, crea un grupo de Telegram con todos los jugadores y master de la partida, y añade al DWMochilabot."},
"6-Usa el comando '/partida (URL de la hoja de cálculo de fichas de personaje)'.": { "msgstr" : "6-Usa el comando '/partida (URL de la hoja de cálculo de fichas de personaje)'."},
"7-¡A jugar!": { "msgstr" : "7-¡A jugar!"},
"El bot encontrará el personaje de cada jugador recorriendo las fichas y tomando aquella cuyo alias de Telegram coincida.": { "msgstr" : "El bot encontrará el personaje de cada jugador recorriendo las fichas y tomando aquella cuyo alias de Telegram coincida."},
"Una vez se lance con éxito un comando en el chat de grupo, el jugador podrá usar comandos por [privado](https://telegram.me/DWMochilaBot).": { "msgstr" : "Una vez se lance con éxito un comando en el chat de grupo, el jugador podrá usar comandos por [privado](https://telegram.me/DWMochilaBot)."},
"Comandos de gestión de archivos": { "msgstr" : "Comandos de gestión de archivos"},
"/partida (URL o ID de google spreadsheets)- Asigna al grupo de Telegram un archivo de fichas de personaje. Todos los comandos que se usen en ese grupo, lo harán contra ese archivo": { "msgstr" : "/partida (URL o ID de google spreadsheets)- Asigna al grupo de Telegram un archivo de fichas de personaje. Todos los comandos que se usen en ese grupo, lo harán contra ese archivo"},
"/archivo (URL o ID de google spreadsheets)- Sin parámetro, te devuelve cual es tu archivo por defecto. Si pones una URL o ID de hojas de personaje, cambia tu archivo por defecto.": { "msgstr" : "/archivo (URL o ID de google spreadsheets)- Sin parámetro, te devuelve cual es tu archivo por defecto. Si pones una URL o ID de hojas de personaje, cambia tu archivo por defecto."},
"Comandos para Personajes (/ayuda personajes)": { "msgstr" : "Comandos para Personajes (/ayuda personajes)"},
"/ayuda  - Muestra la lista de comandos del bot.": { "msgstr" : "/ayuda  - Muestra la lista de comandos del bot."},
"/status - Muestra la información del personaje. Características, puntos de golpe, experiencia, oro, etc.": { "msgstr" : "/status - Muestra la información del personaje. Características, puntos de golpe, experiencia, oro, etc."},
"/tira (mod)(comentario)  - Hace una tirada de dados de DW. (mod) sería el modificador a la tirada (-2,+1, etc.) o una expresión de dados (1d10+2)": { "msgstr" : "/tira (mod)(comentario)  - Hace una tirada de dados de DW. (mod) sería el modificador a la tirada (-2,+1, etc.) o una expresión de dados (1d10+2)"},
"Los comandos de tiradas por características, si no tienen modificador, tomarán el modificador de la hoja de personaje.": { "msgstr" : "Los comandos de tiradas por características, si no tienen modificador, tomarán el modificador de la hoja de personaje."},
"/fue  (mod)(comentario)  - Hace una tirada con el atributo de Fuerza.": { "msgstr" : "/fue  (mod)(comentario)  - Hace una tirada con el atributo de Fuerza."},
"/des  (mod)(comentario)  - Hace una tirada con el atributo de Destreza.": { "msgstr" : "/des  (mod)(comentario)  - Hace una tirada con el atributo de Destreza."},
"/con  (mod)(comentario)  - Hace una tirada con el atributo de Constitución.": { "msgstr" : "/con  (mod)(comentario)  - Hace una tirada con el atributo de Constitución."},
"/sab  (mod)(comentario)  - Hace una tirada con el atributo de Sabiduría.": { "msgstr" : "/sab  (mod)(comentario)  - Hace una tirada con el atributo de Sabiduría. "},
"/int  (mod)(comentario)  - Hace una tirada con el atributo de Inteligencia.": { "msgstr" : "/int  (mod)(comentario)  - Hace una tirada con el atributo de Inteligencia."},
"/car  (mod)(comentario)  - Hace una tirada con el atributo de Carisma.": { "msgstr" : "/car  (mod)(comentario)  - Hace una tirada con el atributo de Carisma."},
"/daño (expresion)(comentario) - el personaje hace una tirada de daño, siguiendo una expresión de tirada de dados. Si no hay expresión, usa su tirada de daño de la hoja de personaje.": { "msgstr" : "/daño (expresion)(comentario) - el personaje hace una tirada de daño, siguiendo una expresión de tirada de dados. Si no hay expresión, usa su tirada de daño de la hoja de personaje."},
"/mov (movimiento) - Se muestra una descripción del movimiento consultado. Si no se incluye un movimiento, devuelve la lista de movimientos a consultar.": { "msgstr" : "/mov (movimiento) - Se muestra una descripción del movimiento consultado. Si no se incluye un movimiento, devuelve la lista de movimientos a consultar."},
"/equipo - Muestra la lista de equipo del personaje.": { "msgstr" : "/equipo - Muestra la lista de equipo del personaje."},
"/acampar  - el personaje acampa, curándose y reduciendo sus raciones.": { "msgstr" : "/acampar  - el personaje acampa, curándose y reduciendo sus raciones."},
"/disparar  - el personaje realiza el movimiento de disparar.": { "msgstr" : "/disparar  - el personaje realiza el movimiento de disparar."},
"Algunos personajes u objetos pueden tener sus propios comandos. Consulta tu hoja de personaje.": { "msgstr" : "Algunos personajes u objetos pueden tener sus propios comandos. Consulta tu hoja de personaje."},
"Comandos para Directores de juego (/ayuda dj)": { "msgstr" : "Comandos para Directores de juego (/ayuda dj)"},
"/curar (pg curados)(alias) - Recupera PG del personaje del alias proporcionado.": { "msgstr" : "/curar (pg curados)(alias) - Recupera PG del personaje del alias proporcionado."},
"/herir (herida)(alias) - causa una herida de la característica indicada al personaje del alias proporcionado.": { "msgstr" : "/herir (herida)(alias) - causa una herida de la característica indicada al personaje del alias proporcionado."},
"/dar (cantidad)(atributo)(alias)- Suma o resta una cantidad al atributo indicado para el personaje a partir de su alias.": { "msgstr" : "/dar (cantidad)(atributo)(alias)- Suma o resta una cantidad al atributo indicado para el personaje a partir de su alias."},
  //TEXTO DE CATEGORIAS DE AYUDA
  "PRINCIPAL": { "msgstr" : "PRINCIPAL"},
  "PARTIDA" : { "msgstr" : "PARTIDA"},
  "PERSONAJES": { "msgstr" : "PERSONAJES"},
  "DJ": { "msgstr" : "DJ"}
}
);