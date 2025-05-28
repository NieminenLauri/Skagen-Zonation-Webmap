var style_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5 = function(feature, resolution){
    var labelText = ""; 
    var labelFont = "10px sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var placement = 'point';

    return [
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(55,126,184,1.0)',
                width: 1.748
            }),
            fill: new ol.style.Fill({
                color: 'rgba(55,126,184,0.3)' // näkyvä täyttö
            }),
            text: createTextStyle(
                feature, resolution, labelText, labelFont,
                labelFill, placement, bufferColor, bufferWidth
            )
        })
    ];
};