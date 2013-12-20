/*
** Whyd 2 mp3
** A very simple script that adds links to different website to download a song
** from the whyd website.
*/

// https://raw.github.com/SkinyMonkey/whyd2mp3/master/whyd2mp3.js

if(!window.jQuery)
{
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

(function(){

    function mrtzcmp3(title) {
        title.replace(/\s+/g, '-').toLowerCase();
        return ('http://mrtzcmp3.net/search/' + title);
    }

    function mnogomp3(title) {
        return ('http://mnogomp3.ru/music/' + title);
    }
    
    var websites = new Array(mrtzcmp3, mnogomp3);

    function    add_links(post) {
        var track_title = $(".post").find(§$("h2")).find("a").html();
        var btns = post.find($(".btns"));

        for (var i=0; i < websites.length; i++) {
            var website_name = websites[i].name;
            var url = websites[i](track_title);
            var link = '<a href="' + url + '">' + website_name + '</a>';

            btns.append($(link));
        };
    }

    $('.post').each(add_links);
})();
