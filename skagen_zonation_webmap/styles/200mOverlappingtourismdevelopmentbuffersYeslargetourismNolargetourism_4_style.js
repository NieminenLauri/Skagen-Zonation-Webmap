var style_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4 = function(feature, resolution) {
    var labelText = ""; 
    var labelFont = "10px sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var placement = 'point';

    return [
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(228,26,28,1.0)', 
                width: 1.748,
                lineCap: 'square',
                lineJoin: 'bevel',
                lineDash: null
            }),
            fill: new ol.style.Fill({
                color: 'rgba(228,26,28,0.3)' // hieman läpinäkyvä punainen täyttö
            }),
            text: createTextStyle(
                feature, resolution, labelText, labelFont,
                labelFill, placement, bufferColor, bufferWidth
            )
        })
    ];
};