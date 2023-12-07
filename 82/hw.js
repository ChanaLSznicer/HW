(async function(){

    const montreal = { lat: 45.5016889, lng: -73.56725599999999 };

    const { Map, DrawingManager} = await google.maps.importLibrary("maps");
    const map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: montreal,
        mapId: "DEMO_MAP_ID",
      });
      const {DrawingManager} = await google.maps.importLibrary('drawing');
      const drawingManager = new DrawingManager();
      drawingManager.setMap(map);

      const marker = [];
      const oldMarkers = localStorage.getItem('markers');


      drawingManager.addListener('overlaycomplete',e=>{
        switch(e.type){
            case 'marker':
                markers.push({lat: e.overlay.position.lat(),lng:e.overlay.position.lng()})
                break;
        }
      })




}());