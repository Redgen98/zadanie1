require (["esri/Map", "esri/views/MapView", "esri/WebMap", "esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery", "esri/layers/GraphicsLayer", "esri/widgets/Sketch", "esri/layers/FeatureLayer"], function(Map, MapView, WebMap, BasemapToggle, BasemapGallery, GraphicsLayer, Sketch, FeatureLayer){
    let button = document.getElementById("button");
    let btnSat = document.getElementById("btnSat");
    let btnTopo = document.getElementById("btnTopo");
    let btnOSM = document.getElementById("btnOSM");
    let btnAGOL = document.getElementById("btnAGOL");
    var graphicsLayer = new GraphicsLayer();

    let licznik = 1;
    let types = ["streets", "satellite", "hybrid", "terrain", "topo", "gray", "dark-gray", "oceans", "national-geographic", "osm", "dark-gray-vector", "gray-vector", "streets-vector", "topo-vector", "streets-night-vector", "streets-relief-vector", "streets-navigation-vector"];
    let map1 = new Map({basemap:"topo-vector", layers: [graphicsLayer]}); 
    let mapContainer = new MapView({
        container: "mapview",
        map: map1,
        zoom: 6,
        centrer: 1
    });
    
    button.addEventListener('click', function(){
        map1 = new Map({basemap:types[licznik]});
        mapContainer = new MapView({
            container: "mapview",
            map: map1,
            zoom: 6,
            centrer: 1
        });
        licznik++;
    });
    btnSat.addEventListener('click', function(){
        map1 = new Map({basemap: "satellite"});
        mapContainer = new MapView({
            container: "mapview",
            map: map1,
            zoom: 6,
            centrer: 1
        });
    });
    btnTopo.addEventListener('click', function(){
        map1 = new Map({basemap: "topo"});
        mapContainer = new MapView({
            container: "mapview",
            map: map1,
            zoom: 6,
            centrer: 1
        });
    });
    
    btnOSM.addEventListener('click', function(){
        map1 = new Map({basemap: "osm"});
        mapContainer = new MapView({
            container: "mapview",
            map: map1,
            zoom: 6,
            centrer: 1
        });
    });
    
    btnAGOL.addEventListener('click',function(){
        map1 = new WebMap({portalItem:{
            id: "1061adf8ff494e86a74c30c46e4249bd"
        }});
        mapContainer = new MapView({
            container: "mapview",
            map: map1,
            zoom: 9,
            centrer: 1
        });
    });
    
    var basemapGallery = new BasemapGallery({
        view: mapContainer,
        source: {
            portal: {
                url: "https://www.arcgis.com",
                useVectorBasemaps: true
            }
        }
    });
    mapContainer.ui.add(basemapGallery, "top-right");

    var sketch = new Sketch({
        view: mapContainer,
        layer: graphicsLayer
    });
    mapContainer.ui.add(sketch, "top-right");

    var trailheadsLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
    });
    map1.add(trailheadsLayer,0);

    /*var trailsLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
    });
    map1.add(trailsLayer, 0);

    var parksLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
    });
    map1.add(parksLayer, 0);
    */
});

