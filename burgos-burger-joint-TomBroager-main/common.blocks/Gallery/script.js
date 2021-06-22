document.addEventListener('DOMContentLoaded', function(){

    let imageArray = [
        'images/galleri04.jpg',
        'images/galleri05.jpg',
        'images/galleri06.jpg'
    ];

    //==================================================================================================================================
    
    for (var i = 0; i < imageArray.length; i++) {
        let image = imageArray[i];
        
        let img = new Image();
        
        img.classList.add("Gallery__thumbnail-image");
        
        img.src = image;
        
        document.getElementById('thumbnail-gallery').appendChild(img);
    };

    //==================================================================================================================================

    
    function setGalleryImage(event) {
        if (event.target.className === 'Gallery__thumbnail-image') {
            
            let imageSrc = event.target.src;
            // let imageSrc = event.target.attributes.src.nodeValue;
            
            let largeImage = document.querySelector('#large-image');
            
            largeImage.setAttribute('src', imageSrc);     
        };
        console.log(event);
    };
    
    /* document.querySelector('#thumbnail-gallery').addEventListener('click', setGalleryImage, {
        
    }); */
    document.querySelector('#thumbnail-gallery').onclick = setGalleryImage;
});