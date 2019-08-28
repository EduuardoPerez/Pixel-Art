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
      $(`<div></div>`).appendTo(grillaPixeles);
    }
  };
  generarLienzo();

  var colorPaleta = $('.color-paleta');

  // Al hacer clic en el color de la paleta se cambia en el indicador de color
  colorPaleta.click(function(){
    let colorSeleccionado = $(this).css('background-color');
    cambiarColorIndicador(colorSeleccionado);
  });

  // Cambia el color del indicador de color
  function cambiarColorIndicador(color) {
    indicadorColor.css('background-color', color);
  }

  // Pintar pixel del lienzo
  let pixeles = $('div');
  pixeles.click(function(){
    let backgroundColor = indicadorColor.attr('style');
    if(backgroundColor !== undefined){
      let colorSeleccionado = indicadorColor.css('background-color');
      $(this).css('background-color', colorSeleccionado);
    }
  });
});