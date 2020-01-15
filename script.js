require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
    {
    let map1 = new Map({basemap:"topo"}); 
    let mapContainer = new MapView({
        container: "mapview",
        map: map1,
        centrer: 1,
        zoom: 8
        }); 
    });