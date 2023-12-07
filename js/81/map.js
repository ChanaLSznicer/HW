(async function(){

    const { Map, StreetViewPanorama } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const montreal = { lat: 45.5016889, lng: -73.56725599999999 };

    const map = new Map(
        document.getElementById("map"), {
        zoom: 12,
        center: montreal,
        mapId: "DEMO_MAP_ID",
      });
      /*const panorama = new google.maps.StreetViewPanorama(
        document.getElementById("pano"),
        {
            position:montreal,
            pov:{
        
                heading:180,
                pitch:10
            }
        }
      );
      
      map.setStreetView(panorama);
      map.addListener('center_changed',()=>{

        panorama.setPosition(map.getCenter());

      }); */

      const searchInput = document.querySelector('#search');

      async function handleSearchSubmit (e){
     
        e.preventDefault();

        try{
            const response = await fetch(`http://api.geonames.org/wikipediaSearch?q=${search.value}&maxRows=10&username=chana&type=json`);
            if(!response.ok){
                throw new Error(`${response.status}${response.statusText}`);
            }
            const places = await response.json();
            placeResultsOnMap(places);
            
            }catch(e){
                console.error(e);
        }
        

    }
    const infowindow = new google.maps.InfoWindow();

    function placeResultsOnMap(places){
        const bounds = new google.maps.LatLngBounds();

        places.geonames.forEach(place => {
            console.log(place);

            const placeLoc = {lat:place.lat, lng:place.lng};
            const img = document.createElement('img');
            img.src = place.thumbnailImg;

            const marker = new AdvancedMarkerElement({
                map: map,
                position: placeLoc,
                title: place.title,
                content:img
              });
              bounds.extend(placeLoc);

              marker.addListener("click", () => {
                infowindow.setContent(`
                    <h4>${place.title}</h4
                    <div>${place.summary}</div>
                    <a href="https://${place.wikipediaUrl}target=_blank">more deatails</a>
                `);
                infowindow.open(map,marker);
              });
            
        });

        map.fitBounds(bounds);

        

    }

      document.querySelector('form').addEventListener('submit', handleSearchSubmit)
}());