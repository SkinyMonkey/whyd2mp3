/*
** Whyd 2 mp3
** A very simple script that adds links to different website to download a song
** from the whyd website.
*/

// https://raw.github.com/SkinyMonkey/whyd2mp3/master/whyd2mp3.js

(function(){

    function mrtzcmp3(title) {
        title.replace(/\s+/g, '-').toLowerCase();
        return ('http://mrtzcmp3.net/search/' + title);
    }

    function mnogomp3(title) {
        return ('http://mnogomp3.ru/music/' + title);
    }
    
    var websites = new Array(mrtzcmp3, mnogomp3);

    function    add_links() {
        var track_title = $(this).find($("h2")).find("a").html();
        var btns = $(this).find($(".btns"));

        for (var i=0; i < websites.length; i++) {
            var website_name = websites[i].name;
            var url = websites[i](track_title);
            var link = '<a href="' + url + '">' + website_name + '</a>';

            btns.append($(link));
        };
    }

    $('.post').each(add_links);
})();
