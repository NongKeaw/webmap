var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: "ขอบเขตตำบลเมืองนะ",
                interactive: false,
                title: '<img src="styles/legend/_0.png" /> ขอบเขตตำบลเมืองนะ'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "ขอบเขตโครงการหลวง",
                interactive: true,
    title: 'ขอบเขตโครงการหลวง<br />\
    <img src="styles/legend/_1_0.png" /> ศูนย์พัฒนาโครงการหลวงแกน้อย<br />\
    <img src="styles/legend/_1_1.png" /> ศูนย์พัฒนาโครงการหลวงหนองเขียว<br />\
    <img src="styles/legend/_1_2.png" /> <br />'
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "การใช้ที่ดิน",
                interactive: true,
    title: 'การใช้ที่ดิน<br />\
    <img src="styles/legend/_2_0.png" /> ถนน<br />\
    <img src="styles/legend/_2_1.png" /> ที่พักอาศัย<br />\
    <img src="styles/legend/_2_2.png" /> ป่าผลัดใบ<br />\
    <img src="styles/legend/_2_3.png" /> พืชไร่<br />\
    <img src="styles/legend/_2_4.png" /> พื้นที่ของมูลนิธิโครงการหลวง<br />\
    <img src="styles/legend/_2_5.png" /> พื้นที่ลุ่ม<br />\
    <img src="styles/legend/_2_6.png" /> ไม้ผล<br />\
    <img src="styles/legend/_2_7.png" /> ไม้ยืนต้น<br />\
    <img src="styles/legend/_2_8.png" /> สถานที่ราชการ<br />\
    <img src="styles/legend/_2_9.png" /> สถานที่สำคัญทางศาสนา<br />\
    <img src="styles/legend/_2_10.png" /> สถานศึกษา<br />\
    <img src="styles/legend/_2_11.png" /> สถานีอนามัย<br />\
    <img src="styles/legend/_2_12.png" /> แหล่งน้ำ<br />\
    <img src="styles/legend/_2_13.png" /> อื่นๆ<br />\
    <img src="styles/legend/_2_14.png" /> อุตสาหกรรม<br />\
    <img src="styles/legend/_2_15.png" /> <br />'
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "เขตอุทยาน",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> เขตอุทยาน'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "เขตป่าสงวน",
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> เขตป่าสงวน'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: "ระดับความสูง",
                interactive: true,
    title: 'ระดับความสูง<br />\
    <img src="styles/legend/_5_0.png" /> 0-100 เมตร<br />\
    <img src="styles/legend/_5_1.png" /> 100-200 เมตร<br />\
    <img src="styles/legend/_5_2.png" /> 200-300 เมตร<br />\
    <img src="styles/legend/_5_3.png" /> 300-400 เมตร<br />\
    <img src="styles/legend/_5_4.png" /> 500-600 เมตร<br />\
    <img src="styles/legend/_5_5.png" /> 600-700 เมตร<br />\
    <img src="styles/legend/_5_6.png" /> 700-800 เมตร<br />\
    <img src="styles/legend/_5_7.png" /> 800-900 เมตร<br />\
    <img src="styles/legend/_5_8.png" /> 900-1000 เมตร<br />\
    <img src="styles/legend/_5_9.png" /> 1000-1100 เมตร<br />\
    <img src="styles/legend/_5_10.png" /> 1100-1200 เมตร<br />\
    <img src="styles/legend/_5_11.png" /> 1200-1300 เมตร<br />\
    <img src="styles/legend/_5_12.png" /> 1300-1400 เมตร<br />\
    <img src="styles/legend/_5_13.png" /> 1400-1500 เมคร<br />\
    <img src="styles/legend/_5_14.png" /> 1500-1600 เมตร<br />\
    <img src="styles/legend/_5_15.png" /> 1600-1700 เมตร<br />\
    <img src="styles/legend/_5_16.png" /> 1700-1800 เมตร<br />\
    <img src="styles/legend/_5_17.png" /> 1800-1900 เมตร<br />\
    <img src="styles/legend/_5_18.png" /> มากกว่า 1900 เมตร<br />\
    <img src="styles/legend/_5_19.png" /> <br />'
        });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: "ปริมาณน้ำฝน",
                interactive: true,
    title: 'ปริมาณน้ำฝน<br />\
    <img src="styles/legend/_6_0.png" /> ปริมาณฝนน้อยกว่า 1000 มม/ปี<br />\
    <img src="styles/legend/_6_1.png" /> ปริมาณฝน 1000-1300 มม/ปี<br />\
    <img src="styles/legend/_6_2.png" /> ปริมาณฝนมากกว่า 1300 มม/ปี<br />\
    <img src="styles/legend/_6_3.png" /> <br />'
        });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: "ทางน้ำ",
                interactive: false,
                title: '<img src="styles/legend/_7.png" /> ทางน้ำ'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__8, 
                style: style__8,
                popuplayertitle: "ถนน",
                interactive: false,
                title: '<img src="styles/legend/_8.png" /> ถนน'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__9, 
                style: style__9,
                popuplayertitle: "แท็งค์น้ำและบ่อน้ำ",
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> แท็งค์น้ำและบ่อน้ำ'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__10, 
                style: style__10,
                popuplayertitle: "ตำแหน่งสำคัญ",
                interactive: true,
                title: '<img src="styles/legend/_10.png" /> ตำแหน่งสำคัญ'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__11, 
                style: style__11,
                popuplayertitle: "หมู่บ้าน",
                interactive: true,
                title: '<img src="styles/legend/_11.png" /> หมู่บ้าน'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11];
lyr__0.set('fieldAliases', {'Id': 'Id', 'Area': 'Area', 'Rai': 'Rai', 'TAM_NAM_T': 'TAM_NAM_T', 'AMPCODE': 'AMPCODE', 'PROV_NAM_T': 'PROV_NAM_T', });
lyr__1.set('fieldAliases', {'Area': 'Area', 'RAI': 'RAI', 'Name_1': 'Name_1', });
lyr__2.set('fieldAliases', {'Area': 'Area', 'FID_landus': 'FID_landus', 'Id': 'Id', 'Landuse': 'Landuse', 'Rai': 'Rai', });
lyr__3.set('fieldAliases', {'FID_Forest': 'FID_Forest', 'FID_Fore_1': 'FID_Fore_1', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'Type_e': 'Type_e', 'Type_th': 'Type_th', 'Name_TH': 'Name_TH', 'Name': 'Name', 'UTMZone': 'UTMZone', 'PARO': 'PARO', 'PARO_NAME': 'PARO_NAME', });
lyr__4.set('fieldAliases', {'FID_final_': 'FID_final_', 'NRF_CODE': 'NRF_CODE', 'FR_NAME': 'FR_NAME', 'Province': 'Province', 'สจป': 'สจป', 'ภาค': 'ภาค', 'Typ': 'Typ', 'Area': 'Area', });
lyr__5.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Desct': 'Desct', });
lyr__6.set('fieldAliases', {'FID_onemap': 'FID_onemap', 'Id': 'Id', 'Gridcode01': 'Gridcode01', 'Gridcode03': 'Gridcode03', 'Gridcode04': 'Gridcode04', 'Gridcode05': 'Gridcode05', 'Gridcode06': 'Gridcode06', 'Gridcode07': 'Gridcode07', 'Gridcode08': 'Gridcode08', 'Gridcode09': 'Gridcode09', 'Gridcode10': 'Gridcode10', 'Gridcode11': 'Gridcode11', 'Gridcode12': 'Gridcode12', 'Gridcode02': 'Gridcode02', 'GridcodeAL': 'GridcodeAL', 'Code': 'Code', 'Descript': 'Descript', });
lyr__7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STR_ID': 'STR_ID', 'LOCAL_NAM': 'LOCAL_NAM', 'Shape_Leng': 'Shape_Leng', 'STR_type': 'STR_type', 'STR_Name_T': 'STR_Name_T', 'STR_Name_E': 'STR_Name_E', });
lyr__8.set('fieldAliases', {'name': 'name', 'NO_LANE': 'NO_LANE', 'WIDTH': 'WIDTH', 'ROAD_TYPE': 'ROAD_TYPE', 'DESC_R': 'DESC_R', 'Id': 'Id', 'Length': 'Length', 'Type': 'Type', 'TRANS_ID': 'TRANS_ID', 'TRNS_TYP': 'TRNS_TYP', 'TRNS_NM_T': 'TRNS_NM_T', 'TRNS_NM_E': 'TRNS_NM_E', 'TRNS_GR': 'TRNS_GR', 'TRNS_GR_T': 'TRNS_GR_T', 'TRNS_GR_E': 'TRNS_GR_E', });
lyr__9.set('fieldAliases', {'Name': 'Name', 'Number': 'Number', 'Localname': 'Localname', 'Status': 'Status', 'Capacity': 'Capacity', 'Utiliser': 'Utiliser', 'Owner': 'Owner', 'Objective': 'Objective', 'ETC': 'ETC', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'Day': 'Day', 'NewUtilize': 'NewUtilize', 'Lev_well': 'Lev_well', 'ID': 'ID', 'Describe': 'Describe', 'Length': 'Length', 'Width': 'Width', 'High': 'High', 'Radius': 'Radius', 'UNIT': 'UNIT', 'Benefit': 'Benefit', 'Note': 'Note', 'OID_': 'OID_', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr__10.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', });
lyr__11.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr__0.set('fieldImages', {'Id': 'Range', 'Area': 'TextEdit', 'Rai': 'TextEdit', 'TAM_NAM_T': 'TextEdit', 'AMPCODE': 'TextEdit', 'PROV_NAM_T': 'TextEdit', });
lyr__1.set('fieldImages', {'Area': 'TextEdit', 'RAI': 'TextEdit', 'Name_1': 'TextEdit', });
lyr__2.set('fieldImages', {'Area': 'TextEdit', 'FID_landus': 'TextEdit', 'Id': 'Range', 'Landuse': 'TextEdit', 'Rai': 'TextEdit', });
lyr__3.set('fieldImages', {'FID_Forest': 'TextEdit', 'FID_Fore_1': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'Type_e': 'TextEdit', 'Type_th': 'TextEdit', 'Name_TH': 'TextEdit', 'Name': 'TextEdit', 'UTMZone': 'TextEdit', 'PARO': 'TextEdit', 'PARO_NAME': 'TextEdit', });
lyr__4.set('fieldImages', {'FID_final_': 'TextEdit', 'NRF_CODE': 'TextEdit', 'FR_NAME': 'TextEdit', 'Province': 'TextEdit', 'สจป': 'TextEdit', 'ภาค': 'Range', 'Typ': 'TextEdit', 'Area': 'TextEdit', });
lyr__5.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Desct': 'TextEdit', });
lyr__6.set('fieldImages', {'FID_onemap': 'TextEdit', 'Id': 'TextEdit', 'Gridcode01': 'Range', 'Gridcode03': 'Range', 'Gridcode04': 'TextEdit', 'Gridcode05': 'TextEdit', 'Gridcode06': 'TextEdit', 'Gridcode07': 'TextEdit', 'Gridcode08': 'TextEdit', 'Gridcode09': 'TextEdit', 'Gridcode10': 'TextEdit', 'Gridcode11': 'TextEdit', 'Gridcode12': 'TextEdit', 'Gridcode02': 'Range', 'GridcodeAL': 'TextEdit', 'Code': 'Range', 'Descript': 'TextEdit', });
lyr__7.set('fieldImages', {'OBJECTID': 'TextEdit', 'STR_ID': 'TextEdit', 'LOCAL_NAM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'STR_type': 'TextEdit', 'STR_Name_T': 'TextEdit', 'STR_Name_E': 'TextEdit', });
lyr__8.set('fieldImages', {'name': 'TextEdit', 'NO_LANE': 'TextEdit', 'WIDTH': 'TextEdit', 'ROAD_TYPE': 'TextEdit', 'DESC_R': 'TextEdit', 'Id': 'Range', 'Length': 'TextEdit', 'Type': 'Range', 'TRANS_ID': 'Range', 'TRNS_TYP': 'Range', 'TRNS_NM_T': 'TextEdit', 'TRNS_NM_E': 'TextEdit', 'TRNS_GR': 'Range', 'TRNS_GR_T': 'TextEdit', 'TRNS_GR_E': 'TextEdit', });
lyr__9.set('fieldImages', {'Name': 'TextEdit', 'Number': 'Range', 'Localname': 'TextEdit', 'Status': 'TextEdit', 'Capacity': 'Range', 'Utiliser': 'TextEdit', 'Owner': 'TextEdit', 'Objective': 'TextEdit', 'ETC': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'Day': 'TextEdit', 'NewUtilize': 'TextEdit', 'Lev_well': 'TextEdit', 'ID': 'Range', 'Describe': 'TextEdit', 'Length': 'TextEdit', 'Width': 'TextEdit', 'High': 'TextEdit', 'Radius': 'TextEdit', 'UNIT': 'TextEdit', 'Benefit': 'TextEdit', 'Note': 'TextEdit', 'OID_': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr__10.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', });
lyr__11.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', });
lyr__0.set('fieldLabels', {'Id': 'no label', 'Area': 'no label', 'Rai': 'no label', 'TAM_NAM_T': 'no label', 'AMPCODE': 'no label', 'PROV_NAM_T': 'no label', });
lyr__1.set('fieldLabels', {'Area': 'no label', 'RAI': 'no label', 'Name_1': 'inline label - visible with data', });
lyr__2.set('fieldLabels', {'Area': 'no label', 'FID_landus': 'no label', 'Id': 'no label', 'Landuse': 'inline label - visible with data', 'Rai': 'no label', });
lyr__3.set('fieldLabels', {'FID_Forest': 'no label', 'FID_Fore_1': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'Type_e': 'no label', 'Type_th': 'no label', 'Name_TH': 'inline label - visible with data', 'Name': 'no label', 'UTMZone': 'no label', 'PARO': 'no label', 'PARO_NAME': 'no label', });
lyr__4.set('fieldLabels', {'FID_final_': 'no label', 'NRF_CODE': 'no label', 'FR_NAME': 'inline label - visible with data', 'Province': 'no label', 'สจป': 'no label', 'ภาค': 'no label', 'Typ': 'no label', 'Area': 'no label', });
lyr__5.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Desct': 'inline label - visible with data', });
lyr__6.set('fieldLabels', {'FID_onemap': 'no label', 'Id': 'no label', 'Gridcode01': 'no label', 'Gridcode03': 'no label', 'Gridcode04': 'no label', 'Gridcode05': 'no label', 'Gridcode06': 'no label', 'Gridcode07': 'no label', 'Gridcode08': 'no label', 'Gridcode09': 'no label', 'Gridcode10': 'no label', 'Gridcode11': 'no label', 'Gridcode12': 'no label', 'Gridcode02': 'no label', 'GridcodeAL': 'no label', 'Code': 'no label', 'Descript': 'inline label - visible with data', });
lyr__7.set('fieldLabels', {'OBJECTID': 'no label', 'STR_ID': 'no label', 'LOCAL_NAM': 'no label', 'Shape_Leng': 'no label', 'STR_type': 'no label', 'STR_Name_T': 'no label', 'STR_Name_E': 'no label', });
lyr__8.set('fieldLabels', {'name': 'no label', 'NO_LANE': 'no label', 'WIDTH': 'no label', 'ROAD_TYPE': 'no label', 'DESC_R': 'no label', 'Id': 'no label', 'Length': 'no label', 'Type': 'no label', 'TRANS_ID': 'no label', 'TRNS_TYP': 'no label', 'TRNS_NM_T': 'no label', 'TRNS_NM_E': 'no label', 'TRNS_GR': 'no label', 'TRNS_GR_T': 'no label', 'TRNS_GR_E': 'no label', });
lyr__9.set('fieldLabels', {'Name': 'inline label - visible with data', 'Number': 'no label', 'Localname': 'no label', 'Status': 'no label', 'Capacity': 'no label', 'Utiliser': 'no label', 'Owner': 'no label', 'Objective': 'no label', 'ETC': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'Day': 'no label', 'NewUtilize': 'no label', 'Lev_well': 'no label', 'ID': 'no label', 'Describe': 'no label', 'Length': 'no label', 'Width': 'no label', 'High': 'no label', 'Radius': 'no label', 'UNIT': 'no label', 'Benefit': 'no label', 'Note': 'no label', 'OID_': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr__10.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - visible with data', });
lyr__11.set('fieldLabels', {'Id': 'no label', 'Name': 'header label - visible with data', });
lyr__11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});