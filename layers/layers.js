ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9141").setExtent([7512882.256754, 4722937.486405, 7513412.594164, 4723221.241701]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_KufiriikomunssPrishtins_1 = new ol.format.GeoJSON();
var features_KufiriikomunssPrishtins_1 = format_KufiriikomunssPrishtins_1.readFeatures(json_KufiriikomunssPrishtins_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_KufiriikomunssPrishtins_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KufiriikomunssPrishtins_1.addFeatures(features_KufiriikomunssPrishtins_1);
var lyr_KufiriikomunssPrishtins_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KufiriikomunssPrishtins_1, 
                style: style_KufiriikomunssPrishtins_1,
                popuplayertitle: "Kufiri i komunës së Prishtinës",
                interactive: false,
                title: '<img src="styles/legend/KufiriikomunssPrishtins_1.png" /> Kufiri i komunës së Prishtinës'
            });
var format_Zonatkadastrale_2 = new ol.format.GeoJSON();
var features_Zonatkadastrale_2 = format_Zonatkadastrale_2.readFeatures(json_Zonatkadastrale_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_Zonatkadastrale_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonatkadastrale_2.addFeatures(features_Zonatkadastrale_2);
var lyr_Zonatkadastrale_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonatkadastrale_2, minResolution:8.401339845678589,

                style: style_Zonatkadastrale_2,
                popuplayertitle: "Zonat kadastrale",
                interactive: true,
                title: '<img src="styles/legend/Zonatkadastrale_2.png" /> Zonat kadastrale'
            });
var format_Stacionetetrafikuturban_3 = new ol.format.GeoJSON();
var features_Stacionetetrafikuturban_3 = format_Stacionetetrafikuturban_3.readFeatures(json_Stacionetetrafikuturban_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_Stacionetetrafikuturban_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stacionetetrafikuturban_3.addFeatures(features_Stacionetetrafikuturban_3);
var lyr_Stacionetetrafikuturban_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stacionetetrafikuturban_3,
maxResolution:1.2602009768517881,
 
                style: style_Stacionetetrafikuturban_3,
                popuplayertitle: "Stacionet e trafikut urban",
                interactive: true,
                title: '<img src="styles/legend/Stacionetetrafikuturban_3.png" /> Stacionet e trafikut urban'
            });
var format_PikatTuristiketPrishtins_4 = new ol.format.GeoJSON();
var features_PikatTuristiketPrishtins_4 = format_PikatTuristiketPrishtins_4.readFeatures(json_PikatTuristiketPrishtins_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_PikatTuristiketPrishtins_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PikatTuristiketPrishtins_4.addFeatures(features_PikatTuristiketPrishtins_4);
var lyr_PikatTuristiketPrishtins_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PikatTuristiketPrishtins_4, 
                style: style_PikatTuristiketPrishtins_4,
                popuplayertitle: "Pikat Turistike të Prishtinës",
                interactive: true,
    title: 'Pikat Turistike të Prishtinës<br />\
    <img src="styles/legend/PikatTuristiketPrishtins_4_0.png" /> Atraksion natyror<br />\
    <img src="styles/legend/PikatTuristiketPrishtins_4_1.png" /> Objekt fetar<br />\
    <img src="styles/legend/PikatTuristiketPrishtins_4_2.png" /> Objekt kulturor<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_KufiriikomunssPrishtins_1.setVisible(true);lyr_Zonatkadastrale_2.setVisible(true);lyr_Stacionetetrafikuturban_3.setVisible(true);lyr_PikatTuristiketPrishtins_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KufiriikomunssPrishtins_1,lyr_Zonatkadastrale_2,lyr_Stacionetetrafikuturban_3,lyr_PikatTuristiketPrishtins_4];
lyr_KufiriikomunssPrishtins_1.set('fieldAliases', {'Municipali': 'Municipali', 'Municipal0': 'Municipal0', 'Municipal1': 'Municipal1', 'Municipal2': 'Municipal2', 'Municipal3': 'Municipal3', 'StateId': 'StateId', 'Komuna': 'Komuna', });
lyr_Zonatkadastrale_2.set('fieldAliases', {'CadastreZo': 'CadastreZo', 'Emri': 'Emri', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_Stacionetetrafikuturban_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'Linja': 'Linja', 'Stacioni': 'Stacioni', });
lyr_PikatTuristiketPrishtins_4.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'longitude': 'longitude', 'latitude': 'latitude', 'Emri': 'Emri', 'Kategoria': 'Kategoria', 'ZonaKad.': 'ZonaKad.', 'Lloji': 'Lloji', 'Nr.i Pikës': 'Nr.i Pikës', });
lyr_KufiriikomunssPrishtins_1.set('fieldImages', {'Municipali': 'TextEdit', 'Municipal0': 'TextEdit', 'Municipal1': 'TextEdit', 'Municipal2': 'TextEdit', 'Municipal3': 'TextEdit', 'StateId': 'TextEdit', 'Komuna': 'TextEdit', });
lyr_Zonatkadastrale_2.set('fieldImages', {'CadastreZo': 'TextEdit', 'Emri': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_Stacionetetrafikuturban_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'Linja': 'TextEdit', 'Stacioni': 'TextEdit', });
lyr_PikatTuristiketPrishtins_4.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'Emri': 'TextEdit', 'Kategoria': 'TextEdit', 'ZonaKad.': 'TextEdit', 'Lloji': 'TextEdit', 'Nr.i Pikës': 'Range', });
lyr_KufiriikomunssPrishtins_1.set('fieldLabels', {'Municipali': 'hidden field', 'Municipal0': 'hidden field', 'Municipal1': 'hidden field', 'Municipal2': 'hidden field', 'Municipal3': 'hidden field', 'StateId': 'hidden field', 'Komuna': 'inline label - visible with data', });
lyr_Zonatkadastrale_2.set('fieldLabels', {'CadastreZo': 'hidden field', 'Emri': 'inline label - visible with data', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_Stacionetetrafikuturban_3.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'Linja': 'inline label - visible with data', 'Stacioni': 'inline label - visible with data', });
lyr_PikatTuristiketPrishtins_4.set('fieldLabels', {'photo': 'header label - always visible', 'filename': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'Emri': 'header label - visible with data', 'Kategoria': 'inline label - visible with data', 'ZonaKad.': 'inline label - visible with data', 'Lloji': 'inline label - visible with data', 'Nr.i Pikës': 'inline label - visible with data', });
lyr_PikatTuristiketPrishtins_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});