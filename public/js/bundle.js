var loadButton = document.getElementById('insta-btn');
var feed = new Instafeed({
        get: 'user',
        userId: '2952085850',
        accessToken: '2952085850.1677ed0.f8f9a9502a73462286e96148fb03df71',
        sortBy: 'most-recent',
        links: 'true',
        resolution: 'standard_resolution',
        template: '<div class="insta-item">'+'<a class="lazyload" href="{{link}}">'+'<img src= "{{image}}" style="width:480px; height:480px;">'+'</a>' + '</div>',
        filter: function(image) {
            return image.type === 'image';
        },
        //every time we load more, run this function
        after: function() {
            loader.style.display = 'none';
            if (!this.hasNext()) {
                loadButton.setAttribute('disabled', 'disabled');
            }
        }
    })
    //bind the load more button,
loadButton.addEventListener('click', function() {
    feed.next();
});
//run the feed
feed.run();
