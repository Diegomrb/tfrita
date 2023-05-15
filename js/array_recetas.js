let chivito = {
    id: 0, 
    nombre: "Chivito",
    categoria: "Plato principal",
    hora: ["Almuerzo", "Cena"],
    descripcion: "Uno de los platos más característicos de nuestra cocina, sino el que más. El rey del fast food criollo. En dos...",
    descripcion_ampliada:  "Uno de los platos más característicos de nuestra cocina, sino el que más. El rey del fast food criollo. En dos panes o al plato, siempre con fritas, en esta ocasión te mostramos como hacer el chivito al pan.",
    tiempo_de_preparacion:  "1h 30m",
    imagenes: ["img/principal/chivito_principal.png"],
    ingredientes: [[1, "panes para chivito"], [1, "churrascos cuadril"], [1, "hojas lechuga"], [4, "rodajas tomate"], [4, "fetas jamón"], [4, "fetas muzarella"], [8, "fetas panceta ahumada"], [4, "huevos"], [0, "Mayonesa"], [1, "kg papas"], [0, "Sal"], [0, "agua fría"], [0, "aceite"]],
    pasos: ["1- Pelamos y dejamos en remojo las papas en agua con hielo 10 minutos antes de freír. Procedemos a secarlas bien y cortarlas en bastones.", 
    "2- Freír en abundante aceite, espolvorear con sal, dejar en papel absorbente y reservar.", 
    "3- Calentamos la plancha previamente a aceitada. Salar la carne. Y colocar sobre la plancha a fuego fuerte.",
    "4- Por otro lado tomamos de a una feta de jamón le ponemos en el interior una feta de muzarella, enrollamos y por fuera envolvemos la panceta.",
    "5- En la misma plancha verter un poco de aceite y colocarle el huevo a fuego bajo junto con el jamón envuelto con la panceta y tapamos para que se cocine de arriba.",
    "6- Vamos armando el pan, se corta a la mitad, le untamos mayonesa a gusto, se le agrega la lechuga y el tomate. Por último la carne. Por encima de la misma el jamón ya con la panceta cocida y el huevo. Tapar con la otra tapa.",
    "7- Servir con las papas ya cocidas."],
    dificultad: "Dificil", 
    raciones: 4, 
    fotos_pasos: [["img/chivito/chivito1.jpg"], ["img/chivito/chivito2.jpg"], ["img/chivito/chivito3.jpg"]]
}

let tortilla = {
    id: 1,
    nombre: "Tortilla",
    categoria: "Plato principal",
    hora: ["Almuerzo", "Cena"],
    descripcion: "La salvadora, cuando te sobre un poco de arroz de la noche anterior, solo tenes que agregarle un par de ingredientes...",
    descripcion_ampliada:  "La salvadora, cuando te sobre un poco de arroz de la noche anterior, solo tenes que agregarle un par de ingredientes y condimentos y tenes una cena o almuerzo a la manera uruguaya.",
    tiempo_de_preparacion:  "15m",
    imagenes: ["img/principal/Tortilla_principal.png"],
    ingredientes: [[1, "taza de arroz amarillo preparado"], [1, "lata arvejas"], [0, "queso rallado"], [3, "huevos"], [0, "morrón rojo"]],
    pasos: ["1- Colocamos todo en un bol y mezclamos",
    "2- Sansonamos a gusto, colocamos en un sartén con tapa y cocinamos a fuego moderado"],
    dificultad: "Media",
    raciones: 4,
    fotos_pasos: [["img/tortilla/tortilla1.jpg"], ["img/tortilla/tortilla2.jpg"], ["img/tortilla/tortilla3.jpg"]]
};
let asado = {
    id: 2,
    nombre: "Asado completo",
    categoria: "Plato principal",
    hora: ["Almuerzo", "Cena"],
    descripcion: "El principal plato uruguayo y quizás la comida uruguaya más conocida en el mundo es El Asado. Esta comida uruguaya...",
    descripcion_ampliada:  "El principal plato uruguayo y quizás la comida uruguaya más conocida en el mundo es El Asado. Esta comida uruguaya debe su magia no solo a la comida en sí misma, sino también a la forma en que los Uruguayos suelen reunirse, cocinarla y comerla juntos, muchas veces jugando al truco, un juego de cartas típico del Uruguay.",
    tiempo_de_preparacion:  "1h 20m",
    imagenes: ["img/principal/asado_principal.png"],
    ingredientes: [[5, "Chorizos"],[5, "Chotos"],[5, "Morcillas dulces o saladas según preferencia del consumidor"],[2, "Riñones grandes (se calcula medio por persona)"], [4, "kg Asado de tira"],[1, "kg Chinchulines previamente macerados en jugo de limón la noche anterior"],[0, "Sal fina y ajo gusto para condimentar la carne"]],
    pasos: ["1- Separar todo y condimentar con sal y ajo a gusto.", 
    "2- Encender la parrilla y esperar a que se hagan brasas, para así poder colocarlas debajo de la parrilla para cocinar las carnes.", 
    "3- Una vez obtenidas las brasas y colocadas debajo de la parrilla metálica, poner sobre ella desde el fuego hacia el borde, primero los chorizos y las achuras (chotos, chinchulines, riñones) ya que llevan mas cocción que lo otro, luego las tiras de asado y finalmente las morcillas.",
    "4- Cada ingrediente tiene su tiempo de cocción diferente a los demás, pero el asador deberá ir tomando las texturas y cocciones de acuerdo al gusto de cada comensal ya que no a todos les gusta en el mismo punto de cocción.",
    "5- Por último y a quienes les gusten se pueden preparar para acompañar la parrillada con alguna ensalada de lechuga, tomate, cebollas, aceite, sal y limón, o en su defecto otra guarnición bien utilizada es la famosa ensalada rusa.",
    "6- Para el que quiera saber como se hace el choto desde cero: Es el chinchulín del cordero, el mismo va enrollando la tripa gorda del cordero. Cortar la tripa gorda que mida aproximadamente unos 20 a 25 cm y de ahí enrollarle los chinchulines atando las puntas para que mantengan su forma."],
    dificultad: "Dificil",
    raciones: 4,
    fotos_pasos: [["img/asado/asado1.jpg"], ["img/asado/asado2.jpg"], ["img/asado/asado3.jpg"]]
};

let ñoquis= {
    id: 3,
    nombre: "Ñoquis del 29",
    categoria: "Plato principal",
    hora: ["Almuerzo", "Cena"],
    descripcion: "A pesar de que el ñoqui es una pasta de origen italiana, en Uruguay es una tradición innegable que los días 29...",
    descripcion_ampliada: "A pesar de que el ñoqui es una pasta de origen italiana, en Uruguay es una tradición innegable que los días 29 de cada mes esté presente en cada mesa uruguaya, siempre dejando dinero debajo del plato para llamar a la suerte y la prosperidad.",
    tiempo_de_preparacion:  "1h 50m",
    imagenes: ["img/principal/ñoquis_principal.png"],
    ingredientes: [[1, "kg de papas"],[200, "g harina de garbanzos"],[60, "g fécula de mandioca (o maizena)"],
    ["Sal"]],
    pasos: ["1- Cocinar las papas al vapor o hirviéndolas en agua.",
    "2- Pisarlas hasta dejarlas un puré. Agregar las harinas y mezclar con las manos.",
    "3- La masa puede ser un poco pegajosa, pero debería estar bien para amasar. Sin embargo, si la masa qued demasiado pegajosa, agregar más harina de garbanzos y amasar nuevamente. Depende del tipo de papa si necesitará más o menos harina de garbanzos.",
    "4- Cortar la masa en trozos del mismo tamaño y espolvorear con un poco de fécula. Con los dedos, enrollar cada parte en cilindros. Cortar la masa en trozos chicos y formar bolitas con las manos. Podés rodar cada bolita sobre la parte posterior de un tenedor si deseas las clásicas formas en los ñoquis (este paso es opcional).",
    "5- Colocar los ñoquis en una olla de agua hirviendo con sal. Una vez que los ñoquis salgan a la superficie (después de 2-4 minutos), retirar con una cuchara ranurada.",
    "6- Tener la salsa ya lista y caliente para servir todo junto."],
    dificultad:"Dificil",
    raciones: 4,
    fotos_pasos: [["img/ñoquis/ñoquis1.jpg"], ["img/ñoquis/ñoquis2.jpg"], ["img/ñoquis/ñoquis3.jpg"]]
};

let pastafrola = {
    id: 4,
    nombre: "Pastafrola",
    categoria: "Postre",
    hora: ["Desayuno", "Merienda"],
    descripcion: "Uno de los postres más característicos de la cocina rioplatense. La famosa pastafrola con dulce de membrillo o...",
    descripcion_ampliada: "Uno de los postres más característicos de la cocina rioplatense. La famosa pastafrola con dulce de membrillo o dulce de leche. Una receta bastante conocida por nuestros padres y abuelos, nunca puede faltar en una juntada familiar a la hora de la merienda.",
    tiempo_de_preparacion:  "1h",
    imagenes: ["img/principal/pastafrola_principal.png"],
    ingredientes: [[ 2, "tazas harina"], [1/2, "taza azúcar"],[2, "huevos"], [1, "cucharadita royal u otro polvo de hornear"],[1, "cucharada agua"],[70, "gr manteca fría"],[400, "gr dulce de membrillo"],[2, "cucharadas agua"],[0, "Ralladura de medio limón"]],
    pasos: ["1- Ponemos en un bol la harina, el azúcar y el royal. Mezclamos.",
    "2- Agregamos la manteca fría en cubos y con los dedos la desintegramos hasta que quede una mezcla de aspecto granulado (lleva varios minutos).",
    "3- Batimos ligeramente los huevos y los agregamos junto con el agua.",
    "4- Amasamos un poco hasta que se unifique. Si vemos que nos quedó seca agregamos una cucharada más de agua y si quedó húmeda un poco más de harina.",
    "5- Ponemos en una olla a fuego medio el membrillo cortado en cubos chicos y el agua! Revolvemos y aplastamos hasta que quede cremoso y sin grumos. Luego de apagar el fuego agregamos la ralladura de limón.",
    "6- En una asadera redonda previamente enmantecada y enharinada ponemos 2/3 de la masa preparada. Luego agregamos el membrillo.",
    "7- Precalentar horno bajo (200 grados) y hacemos las tiras con el resto de la masa. Esto es para dar la decoración de la típica pasta frola.", 
    "9- Luego de unos 30 minutos ya esta pronta. Esperar que se enfríe y servir.",
    "Nota: es importantísimo poner la manteca fría! Si por ahorrar tiempo la ponemos caliente no va a quedar igual la masa! Es fundamental que la temperatura de la masa sea fría."],
    dificultad:"Media",
    raciones: 8,
    fotos_pasos: [["img/postafrola/pastafrola1.jpg"], ["img/pastafrola/pastafrola2.jpg"], ["img/pastafrola/pastafrola3.jpg"]]
};

let garrapiñada = {
    id: 5,
    nombre: "Garrapiñada",
    categoria: ["Snack", "Postre"],
    hora: "Merienda",
    descripcion: "La garrapiñada es una comida típica muy popular en Uruguay y Argentina. Es una especie de golosina o snack de maní...",
    descripcion_ampliada:"La garrapiñada es una comida típica muy popular en Uruguay y Argentina. Es una especie de golosina o snack de maní acaramelado. Se consume en espectáculos o en la calle, debido a que puedes comprarla en puestos callejeros alrededor de las ciudades.",
    tiempo_de_preparacion:  "30m",
    imagenes: ["img/principal/garrapiñada_principal.png"],
    ingredientes: [[1, "taza agua"], [1, "taza azúcar"], [1, "taza maní tostado"],[1, "chorrito de vainilla"], [0, "cacao amargo"]],
    pasos: ["1- En una olla o sarten ondo colocar el azúcar y el agua.", 
    "2- Hervir por unos 8 a 10 minutos.", 
    "3- Una vez que vaya quedando color caramelo agregar los manies, vainilla y cacao.", 
    "4- Revolver bien. Una vez que quede cubierto los manies retirar del fuego y colocar en bandeja para dejar enfriar."],
    dificultad:"Facil",
    raciones: 5,
    fotos_pasos: [["img/garrapiñada/garrapiñada1.jpg"], ["img/garrapiñada/garrapiñada2.jpg"], ["img/garrapiñada/garrapiñada3.jpg"]]
};

let tortasfritas = {
    id: 6,
    nombre: "Tortas Fritas",
    categoria: ["Snack", "Postre"],
    hora: "Merienda",
    descripcion: "La merienda por excelencia del uruguayo es el mate con tortas fritas, sobre todos los días de lluvia. Se cree...",
    descripcion_ampliada:"La merienda por excelencia del uruguayo es el mate con tortas fritas, sobre todos los días de lluvia. Se cree que el origen de éstas llego al Río de la Plata incluso antes de la epoca de la colonia.",
    tiempo_de_preparacion:  "1h 30m",
    imagenes: ["img/principal/tortasfritas_principal.png"],
    ingredientes: [[1, "kg harina"],[1, "sobre de levadura"], [3, "cucharadas sal"], [3, "cucharadas aceite"], [1, "cucharada de sal y media"], [1, "paquete grasa (puede ser aceite si gustan)"]],
    pasos: ["1- Comenzamos colocando la harina en un bowl y hacemos un ollo en el medio y le agregamos la levadura el aceite y la azúcar. Y mezclamos. Luego en una taza aparte ponemos el agua tibia (más tirando a caliente) con la sal. Y vamos incorporando de a poco y mezclando. Hasta que queda una masa lisa. Ahí volcamos en la mesada o mesa y amasamos bien por 4 minutos o 5. Y llevamos a una bolsa y dejamos reposar 15 minutos en un lugar cálido.",  
    "2- Cuando la masa ya allá doblado el volumen colocamos la grasa al fuego y mientras vamos haciendo bollitos y estirando. Del tamaño que nos guste o nos de la capacidad del recipiente donde vallamos a fritar. No ahí que dejarlas muy gruesas porque se inflan al meter al fuego.", 
    "3- Cuando este caliente la grasa ya las podemos ir colocando. Dejamos que tomen color de un lado y y luego la damos vuelta y las sacamos y las vamos colocando sobre papel de cocina para que escurra la grasa.", 
    "4- Y así tenemos unas ricas tortas fritas"],
    dificultad:"Dificil",
    raciones: 10,
    fotos_pasos: [["img/tortafrita/tortafrita1.jpg"], ["img/tortafrita/tortafrita2.jpg"], ["img/tortafrita/tortafrita3.jpg"]]
};

let alfajores = {
    id: 7,
    nombre: "Alfajores",
    categoria: ["Snack", "Postre"],
    hora: ["Merienda","Desayuno"],
    descripcion: "Un postre tradicional y delicioso que nos hará recordar momentos de niñez, ya que es uno de los snaks más...",
    descripcion_ampliada:"Un postre tradicional y delicioso que nos hará recordar momentos de niñez, ya que es uno de los snaks más servidos en cumpleaños de niños, si querés variar las opciones de la merienda y recordar buenos momentos aca te dejamos los ingredientes y pasos.",
    tiempo_de_preparacion:  "1h 30m",
    imagenes: ["img/principal/alfajores_principal.png"],
    ingredientes: [[1, "taza harina 0000."], [1, "taza de maicena y media."], [1, "cucharada polvo de hornear."], [100, "g manteca."], [75, "g azúcar."], [2, "yemas de huevo."], [1, "cucharada esencia de vainilla."], [1, "cucharada ralladura de limón."], [0, "Dulce de leche"], [0, "Coco rallado"]], 
    pasos: ["1- Mezclamos la harina (1 taza), con la maicena (1, 1/2 taza), y la cucharada de Royal, previamente tamizados.", 
    "2- En otro bol mezclamos con tenedor o mezclador a mano, la manteca (100 gr) con las yemas (2) y el azúcar (75g), cuando quede una pasta cremosa lo incorporamos a los ingredientes secos también le agregamos la cucharadas de vainilla y ralladura de limón.", 
    "3- Vamos a mezclar todo con las manos, hasta que quede todo unido, lo dejaremos en la heladera unos 10 minutos aproximadamente.",
    "4- Vamos a sacar la masa y pondremos maicena por arriba y abajo, para poder amasar y que no se nos pegue. El grosor de la masa estirada puede ser hasta 1 cm de ancho. Y luego cortamos los moldes.",
    "5- A mí me salieron 8 alfajores grandes, y 2 corazones con lo que sobró de la masa.",
    "6- Luego se lleva a horno precalentado calentado por 10 minutos a 180°. Dejaremos enfriar una vez listos, para luego rellenarlos y pasarlos por coco.",
    "7- Depende de la cantidad de tiempo en el horno te quedaran más blandos o más duritos, a mí en especial me gustan blanditos y los dejo aproximadamente 10 minutos."],
    dificultad:"Facil",
    raciones: 6,
    fotos_pasos: [["img/alfajores/alfajores1.jpg"], ["img/alfajores/alfajores2.jpg"], ["img/alfajores/alfajores3.jpg"]]
};

let estofado = {
    id: 8,
    nombre: "Estofado Uy",
    categoria: "Plato rincipal",
    hora: "Almuerzo",
    descripcion: "Es una receta típica de uruguay, pero no se hace tan regularmente, de igual manera es una comida exquisita...",
    descripcion_ampliada:"Es una receta típica de uruguay, no se hace tan regularmente, es similar al ensopado, pero no mucho más seco. Se acostumbra comer en los días de frío, pero de igual manera es una comida exquisita para disfrutar en cualquier momento.",
    tiempo_de_preparacion:  "2h",
    imagenes: ["img/principal/estofado_principal.png"],
    ingredientes: [[2, "Morrones"], [2, "Cebollas"], [0, "Zanahorias a gusto"], [0, "Pulpa de tomate(salsa de tomate)"], [0, "Condimentos"], [0, "Vino"], [1, "lata arvejas"], [0, "Papas"], [2, "tazas arroz"], [0, "Ajo"], [0, "Carne de tu preferencia"]], 
    pasos: ["1- Picamos toda la verdura en julianas y la ponemos en una olla con un chorrito de aceite y le añadimos medio vacío de vino para que vaya agarrando el saborcito.", 
    "2- Luego de unos minutos le agregamos la carne y condimentamos todo. Revolvemos tapamos y dejamos que se cocine unos 10 min.", 
    "3- Pasados los 10 min agregamos la pulpa de tomate y un poquito de agua hirviendo para que no se baje la temperatura de la comida.",
    "4- Cuando veamos que la zanahoria esta tiernita le agregamos las papas! (agregamos agua a medida que se vaya poniendo séquito. Siempre agua hirviendo.) una vez listas apagamos le añadimos las arvejas y dejamos reposar mientras se...",
    "5- En otra olla hervimos agua y le agregamos dos tazas de arroz una vez listo colamos y servimos. Listo espero que lo agas y a disfrutar."], 
    dificultad:"Dificil",
    raciones: 4,
    fotos_pasos: [["img/estofado/estofado1.jpg"], ["img/estofado/estofado2.jpg"], ["img/estofado/estofado3.jpg"]]
};

let plantillas = {
    id: 9,
    nombre: "Plantillas",
    categoria: ["Snack", "Postre"],
    hora: ["Desayuno", "Merienda"],
    descripcion: "Las plantillas son muy utilizadas para hacer otro tipo de postres, pero si queres saber como se hacen aca te...",
    descripcion_ampliada:"Las plantillas son muy utilizadas para hacer otro tipo de postres, también son muy ricas para comerlas con dulce de leche a modo de postre o preparadas para la merienda. Si querés saber como se hacen en TFrita te mostramos la receta.",
    tiempo_de_preparacion:  "30m",
    imagenes: ["img/principal/plantillas_principal.png"],
    ingredientes: [[60, "g harina leudante."],[60, "g azúcar."], [2, "yemas de huevo."], [2, "claras de huevo."], [2, "ml extracto de vainilla"]],
    pasos: ["1- Montar las claras e ir agregando el azúcar poco a poco. Una vez que queden bien firme agregar las yemas y el extracto de vainilla, luego seguir mezclando con la batidora.", 
    "2 -Una vez que quede consistente tamizar la harina (si es leudante mejor) y el polvo de hornear en el caso de que la harina no sea leudante. Mezclar con movimientos envolventes.", 
    "3- Colocar todo dentro de una manga (o una bolsa) y en una asadera ir colocando la masa en tiras. Puede tamizarle azúcar común por arriba para que quede una cubierta dulce.",
    "4- Dejar en el horno 13 min a 190°c.", 
    "5- Sacar del horno y disfrutar."],
    dificultad:"Facil",
    raciones: 15,
    fotos_pasos: [["img/plantillas/plantillas1.jpg"], ["img/plantillas/plantillas2.jpg"], ["img/plantillas/plantillas3.jpg"]]
};

let ensopado = {
    id: 10,
    nombre: "Ensopado",
    categoria: "Plato principal",
    hora: ["Almuerzo","Cena"],
    descripcion: "El ensopado, tambien conocido como guiso de campaña es una tipica comida uruguaya, que se acostumbra comer...",
    descripcion_ampliada:"El ensopado, tambien conocido como guiso de campaña es una tipica comida uruguaya, que se acostumbra comer los días de frío, ya que se debe comer caliente, además contiene un gran contenido calórico.",
    tiempo_de_preparacion:  "1h",
    imagenes: ["img/principal/ensopado_principal.png"],
    ingredientes: [[1, "Costilla de paleta"], [1, "Chorizo"], [200, "ml Salsa de tomate"],[6, "Papas"], [2, "Boniatos"], [2, "Choclos"], [3, "Zanahorias"],[1/2, "Zapallo Cabutia"], [2, "Cebollas"], [1, "Morrón"]], 
    pasos: ["1-Pelar, lavar las verduras y cortarlas en trozos grandes.", 
    "2- Saltar las cebollas, el morrón y agregar la carne y el chorizo en trozos. Una vez sellado le agregar los choclos, condimentar a gusto y dejar a fuego suave 10 minutos.", 
    "3- Agregar la salsa de tomate y cubrir con agua y dejar hervir 15 minutos.",
    "4- Agregar la verdura y cubrir con agua y dejar hervir a fuego moderado 30 minutos hasta que la verdura queda bien tierna.", 
    "5- Mientras hierve la verdura se puede preparar los fideos aparte.",
    "6- Una vez listos los fideos los colar y agregar al ensopado ya listo. Mezclar y dejar reposar 5 minutos",
    "5- Listo para comer! Tambien se puede agregar con un toque de queso rallado.",],
    dificultad:"Media",
    raciones: 4,
    fotos_pasos: [["img/ensopado/ensopado1.jpg"], ["img/ensopado/ensopado2.jpg"], ["img/ensopado/ensopado3.jpg"]]
}

let medialunas = {
    id: 11,
    nombre: "Medialunas",
    categoria: ["Snack", "Postre"],
    hora: ["Desayuno", "Merienda"],
    descripcion: "En Argentina, Chile, Paraguay y Uruguay, un panificado dulce elaborado para comer en el desayuno o la merienda...",
    descripcion_ampliada:"En Argentina, Chile, Paraguay y Uruguay, un panificado dulce elaborado para comer en el desayuno o la merienda, también llamado croissant, lo podes encontrar salada o dulce, incluso con rellenos.",
    tiempo_de_preparacion:  "30m",
    imagenes: ["img/principal/medialunas_principal.png"],
    ingredientes: [[500, "g de harina"], [150, "g de manteca"], [2, "huevos"],[1/2, "vaso de leche"], [1/2, "vaso de agua"], [0, "Sal a gusto"], [15, "g levadura en polvo"],[1, "cdita de azúcar"]],
    pasos: ["1- Primero comenzamos con la esponja: en un bowl colocamos la levadura, la cdita de azúcar, la de harina y le agregamos medio vaso de agua tibia. Dejamos leudar.", 
    "2- Vamos con la masa: en un bowl agregamos los 500 gr de harina, la manteca, un huevo, la leche y la esponja que hicimos antes.", 
    "3- Amasamos bien y agregamos agua si es necesario. Dejamos leudar 45 minutos.",
    "4- Pasado los 45 minutos estiramos y cortamos en triángulos, luego de eso le damos la forma y le pasamos huevo por arriba. Hornear hasta que doren.", 
    "5- Pueden agregar fiambre si lo desean.",],
    dificultad:"Media",
    raciones: 12,
    fotos_pasos: [["img/medialunas/medialunas1.jpg"], ["img/medialunas/medialunas2.jpg"], ["img/medialunas/medialunas3.jpg"]]
}

let sliderindex = ["slider1.jpg", "slider2.jpg", "slider3.jpg", "slider4.jpg", "slider5.jpg", "slider6.jpg", "slider7.jpg"]

let recetas = [chivito, tortilla, asado, ñoquis, pastafrola, garrapiñada, tortasfritas, alfajores, estofado, plantillas, ensopado, medialunas];