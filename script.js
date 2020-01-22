require (["esri/Map", "esri/views/MapView", "esri/WebMap"], function(Map, MapView, WebMap){
    let button = document.getElementById("button");
    let btnSat = document.getElementById("btnSat");
    let btnTopo = document.getElementById("btnTopo");
    let btnOSM = document.getElementById("btnOSM");
    let btnAGOL = document.getElementById("btnAGOL");
    let licznik = 1;
    let types = ["streets", "satellite", "hybrid", "terrain", "topo", "gray", "dark-gray", "oceans", "national-geographic", "osm", "dark-gray-vector", "gray-vector", "streets-vector", "topo-vector", "streets-night-vector", "streets-relief-vector", "streets-navigation-vector"];
    let map1 = new Map({basemap:"topo"}); 
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
});

