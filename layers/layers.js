var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pargasmunicipalityborders_1 = new ol.format.GeoJSON();
var features_Pargasmunicipalityborders_1 = format_Pargasmunicipalityborders_1.readFeatures(json_Pargasmunicipalityborders_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pargasmunicipalityborders_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pargasmunicipalityborders_1.addFeatures(features_Pargasmunicipalityborders_1);
var lyr_Pargasmunicipalityborders_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pargasmunicipalityborders_1, 
                style: style_Pargasmunicipalityborders_1,
                popuplayertitle: 'Pargas municipality borders',
                interactive: false,
                title: '<img src="styles/legend/Pargasmunicipalityborders_1.png" /> Pargas municipality borders'
            });
var lyr_UneditedZonationrankmap_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Unedited Zonation rankmap<br />\
    <img src="styles/legend/UneditedZonationrankmap_2_0.png" /> 0,0000<br />\
    <img src="styles/legend/UneditedZonationrankmap_2_1.png" /> 0,9900<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/UneditedZonationrankmap_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2337715.820740, 8336960.770243, 2515843.046103, 8513485.964190]
        })
    });
var lyr_FilteredZonationrankmap_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Filtered Zonation rankmap<br />\
    <img src="styles/legend/FilteredZonationrankmap_3_0.png" /> 0,0000<br />\
    <img src="styles/legend/FilteredZonationrankmap_3_1.png" /> 1,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FilteredZonationrankmap_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2337715.820740, 8336960.770243, 2515843.046103, 8513485.964190]
        })
    });
var format_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4 = new ol.format.GeoJSON();
var features_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4 = format_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4.readFeatures(json_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4.addFeatures(features_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4);
var lyr_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4, 
                style: style_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4,
                popuplayertitle: '200m Overlapping tourism development buffers (Yes large tourism - No large tourism)',
                interactive: false,
                title: '<img src="styles/legend/200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4.png" /> 200m Overlapping tourism development buffers (Yes large tourism - No large tourism)'
            });
var format_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5 = new ol.format.GeoJSON();
var features_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5 = format_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5.readFeatures(json_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5.addFeatures(features_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5);
var lyr_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5, 
                style: style_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5,
                popuplayertitle: '200m Overlapping tourism development buffers (No large tourism - Yes large tourism)',
                interactive: false,
                title: '<img src="styles/legend/200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5.png" /> 200m Overlapping tourism development buffers (No large tourism - Yes large tourism)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Pargasmunicipalityborders_1.setVisible(true);lyr_UneditedZonationrankmap_2.setVisible(true);lyr_FilteredZonationrankmap_3.setVisible(false);lyr_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4.setVisible(false);lyr_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Pargasmunicipalityborders_1,lyr_UneditedZonationrankmap_2,lyr_FilteredZonationrankmap_3,lyr_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4,lyr_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5];
lyr_Pargasmunicipalityborders_1.set('fieldAliases', {'GML_ID': 'GML_ID', 'NATCODE': 'NATCODE', 'NAMEFIN': 'NAMEFIN', 'NAMESWE': 'NAMESWE', 'LANDAREA': 'LANDAREA', 'FRESHWAREA': 'FRESHWAREA', 'SEAWAREA': 'SEAWAREA', 'TOTALAREA': 'TOTALAREA', });
lyr_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Platform': 'Platform', 'Respondent': 'Respondent', 'Publicatio': 'Publicatio', 'Submitted': 'Submitted', 'first_acti': 'first_acti', 'Publicat_1': 'Publicat_1', 'Language': 'Language', 'Index': 'Index', 'Zoom': 'Zoom', 'geojson': 'geojson', 'geo_point': 'geo_point', });
lyr_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Platform': 'Platform', 'Respondent': 'Respondent', 'Publicatio': 'Publicatio', 'Submitted': 'Submitted', 'first_acti': 'first_acti', 'Publicat_1': 'Publicat_1', 'Language': 'Language', 'Index': 'Index', 'Zoom': 'Zoom', 'geojson': 'geojson', 'geo_point': 'geo_point', });
lyr_Pargasmunicipalityborders_1.set('fieldImages', {'GML_ID': '', 'NATCODE': '', 'NAMEFIN': '', 'NAMESWE': '', 'LANDAREA': '', 'FRESHWAREA': '', 'SEAWAREA': '', 'TOTALAREA': '', });
lyr_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4.set('fieldImages', {'fid': '', 'Type': '', 'Platform': '', 'Respondent': '', 'Publicatio': '', 'Submitted': '', 'first_acti': '', 'Publicat_1': '', 'Language': '', 'Index': '', 'Zoom': '', 'geojson': '', 'geo_point': '', });
lyr_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5.set('fieldImages', {'fid': '', 'Type': '', 'Platform': '', 'Respondent': '', 'Publicatio': '', 'Submitted': '', 'first_acti': '', 'Publicat_1': '', 'Language': '', 'Index': '', 'Zoom': '', 'geojson': '', 'geo_point': '', });
lyr_Pargasmunicipalityborders_1.set('fieldLabels', {'GML_ID': 'no label', 'NATCODE': 'no label', 'NAMEFIN': 'no label', 'NAMESWE': 'no label', 'LANDAREA': 'no label', 'FRESHWAREA': 'no label', 'SEAWAREA': 'no label', 'TOTALAREA': 'no label', });
lyr_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4.set('fieldLabels', {'fid': 'no label', 'Type': 'no label', 'Platform': 'no label', 'Respondent': 'no label', 'Publicatio': 'no label', 'Submitted': 'no label', 'first_acti': 'no label', 'Publicat_1': 'no label', 'Language': 'no label', 'Index': 'no label', 'Zoom': 'no label', 'geojson': 'no label', 'geo_point': 'no label', });
lyr_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5.set('fieldLabels', {'fid': 'no label', 'Type': 'no label', 'Platform': 'no label', 'Respondent': 'no label', 'Publicatio': 'no label', 'Submitted': 'no label', 'first_acti': 'no label', 'Publicat_1': 'no label', 'Language': 'no label', 'Index': 'no label', 'Zoom': 'no label', 'geojson': 'no label', 'geo_point': 'no label', });
lyr_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});