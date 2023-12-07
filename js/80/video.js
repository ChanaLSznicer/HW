(function(){

    const videoList = $('#sidebar ul');
    const theVideoElem = $('#theVid');

    async function loadVideos(){

        try{
            const response = await fetch('video.json');
            if(!response.ok){
                throw new Error (`${response.status},${response.statusText}`);
            }

            return await response.json();
           // console.log(videos);
            
        }catch(e){
            console.error(e);
        }
    }
    async function displayVideoList(){
       const theVideos = await loadVideos();
       theVideos.forEach(vid => {
        /*videoList.append(`<li>
                              <span>${vid.name}</span>
                              <img src="media/${vid.picture ||videoList.png}"/>
                          </li>`);*/
        const theLi = $(`<li>
            <span>${vid.name}</span>
            <img src="${vid.picture}"/>
           </li>`)
           .appendTo(videoList)
           .click(function(){
            theVideoElem.attr('src',vid.url);
            //theVideoElem[0].play();
          // theVideoElem.trigger('play');

            this.style = 'color: gray';
            theLi.css('border-color','red');
            //theLi.css('color','gray');
            
           });

           
        
       });
       $('#loading').hide();
       $('.loaded').show();


    }

    displayVideoList();

    

}());