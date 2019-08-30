$(function() {
  var nombreColores = ['White', 'LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
    'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
    'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
    'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
    'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
    'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
    'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
    'LightGreen', 'PaleGreen', 'PaleTurquoise',
    'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
    'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
    'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
    'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
    'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
    'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
    'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
    'BlueViolet', 'DarkViolet', 'DarkOrchid',
    'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
  ];

  // Variable para guardar el elemento 'color-personalizado'
  // Es decir, el que se elige con la rueda de color.
  var colorPersonalizado = document.getElementById('color-personalizado');
  var paleta = $('#paleta');
  var grillaPixeles = $('#grilla-pixeles');
  var indicadorColor = $('#indicador-de-color');

  // Cambia el color del indicador de color
  function cambiarColorIndicador(color) {
    indicadorColor.css('background-color', color);
  }

  colorPersonalizado.addEventListener('change', 
    (function() {
      // Se guarda el color de la rueda en colorActual
      colorActual = colorPersonalizado.value;
      // Completar para que cambie el indicador-de-color al colorActual
      cambiarColorIndicador(colorActual);
    })
  );

  // Generar la paleta de colores
  function generarPaleta() {
    nombreColores.forEach(color => {
      $(`<div></div>`, {
        class:'color-paleta',
        style:`background-color:${color}`
      }).appendTo(paleta);
    });
  };
  generarPaleta();


  // Generar la grilla
  function generarLienzo() {
    for (let i=0; i<1750; i++) {
      $(`<div style="background-color:white;"></div>`).appendTo(grillaPixeles);
    }
  };
  generarLienzo();

  var colorPaleta = $('.color-paleta');

  // Al hacer clic en el color de la paleta se cambia en el indicador de color
  colorPaleta.click(function(){
    let colorSeleccionado = $(this).css('background-color');
    cambiarColorIndicador(colorSeleccionado);
  });

  // Pintar un pixel segun el color de indicador-de-color
  function pintarPixel(pixel) {
    let backgroundColor = indicadorColor.attr('style');
    if(backgroundColor !== undefined){
      let colorSeleccionado = indicadorColor.css('background-color');
      pixel.css('background-color', colorSeleccionado);
    }
  }

  let pixeles = $('#grilla-pixeles div');

  // Pintar al hacer clic
  pixeles.click(function(){
    pintarPixel($(this))
  });

  // Saber si el mouse esta presionado o no
  var mousePresionado;
  pixeles.mousedown(function (){
    mousePresionado = true;
  });
  pixeles.mouseup(function (){
    mousePresionado = false;
  });

  // Pintar en movimiento si el mouse está presionado
  pixeles.mousemove(function (){
    if(mousePresionado){
      pintarPixel($(this));
    }
  });

  const btnBorrarTodo = $('#borrar');

  // Se colocan todos los pixeles de color blanco al darle al botón borrar todo
  btnBorrarTodo.click(function() {
    pixeles.each((i, pixel) => {
      $(pixel).animate({
        'background-color':'white'
      },3000);
      
    });
    indicadorColor.css('background-color','white');
  });

});