var wms_layers = [];


        var lyr_googlesatellite_0 = new ol.layer.Tile({
            'title': 'google satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Bnd__1 = new ol.format.GeoJSON();
var features_Bnd__1 = format_Bnd__1.readFeatures(json_Bnd__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bnd__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bnd__1.addFeatures(features_Bnd__1);
var lyr_Bnd__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bnd__1, 
                style: style_Bnd__1,
                popuplayertitle: "Bnd_แกน้อย",
                interactive: true,
                    title: '<img src="styles/legend/Bnd__1.png" /> Bnd_แกน้อย'
                });
var format_Stream__2 = new ol.format.GeoJSON();
var features_Stream__2 = format_Stream__2.readFeatures(json_Stream__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stream__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stream__2.addFeatures(features_Stream__2);
var lyr_Stream__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stream__2, 
                style: style_Stream__2,
                popuplayertitle: "Stream_แกน้อย",
                interactive: true,
                    title: '<img src="styles/legend/Stream__2.png" /> Stream_แกน้อย'
                });

lyr_googlesatellite_0.setVisible(true);lyr_Bnd__1.setVisible(true);lyr_Stream__2.setVisible(true);
var layersList = [lyr_googlesatellite_0,lyr_Bnd__1,lyr_Stream__2];
lyr_Bnd__1.set('fieldAliases', {'FID_1_1µÓº': 'FID_1_1µÓº', 'ID': 'ID', 'Area': 'Area', 'Area_KM': 'Area_KM', 'Rai': 'Rai', 'TAM_CODE': 'TAM_CODE', 'TAM_NAM_T': 'TAM_NAM_T', 'AMPCODE': 'AMPCODE', 'AMP_NAM_T': 'AMP_NAM_T', 'PROVCODE': 'PROVCODE', 'PROV_NAM_T': 'PROV_NAM_T', 'FID_à¢µÍØ·': 'FID_à¢µÍØ·', 'G_NAME': 'G_NAME', 'AREA_KM_1': 'AREA_KM_1', 'AREA_RAI': 'AREA_RAI', 'DESC_G': 'DESC_G', 'ORIG_FID': 'ORIG_FID', });
lyr_Stream__2.set('fieldAliases', {'S_NAME': 'S_NAME', });
lyr_Bnd__1.set('fieldImages', {'FID_1_1µÓº': 'TextEdit', 'ID': 'TextEdit', 'Area': 'TextEdit', 'Area_KM': 'TextEdit', 'Rai': 'TextEdit', 'TAM_CODE': 'TextEdit', 'TAM_NAM_T': 'TextEdit', 'AMPCODE': 'TextEdit', 'AMP_NAM_T': 'TextEdit', 'PROVCODE': 'TextEdit', 'PROV_NAM_T': 'TextEdit', 'FID_à¢µÍØ·': 'TextEdit', 'G_NAME': 'TextEdit', 'AREA_KM_1': 'TextEdit', 'AREA_RAI': 'TextEdit', 'DESC_G': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Stream__2.set('fieldImages', {'S_NAME': 'TextEdit', });
lyr_Bnd__1.set('fieldLabels', {'FID_1_1µÓº': 'no label', 'ID': 'no label', 'Area': 'no label', 'Area_KM': 'no label', 'Rai': 'no label', 'TAM_CODE': 'no label', 'TAM_NAM_T': 'inline label - always visible', 'AMPCODE': 'no label', 'AMP_NAM_T': 'inline label - always visible', 'PROVCODE': 'no label', 'PROV_NAM_T': 'inline label - always visible', 'FID_à¢µÍØ·': 'no label', 'G_NAME': 'no label', 'AREA_KM_1': 'no label', 'AREA_RAI': 'no label', 'DESC_G': 'no label', 'ORIG_FID': 'no label', });
lyr_Stream__2.set('fieldLabels', {'S_NAME': 'inline label - visible with data', });
lyr_Stream__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});