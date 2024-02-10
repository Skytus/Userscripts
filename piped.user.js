// ==UserScript==
// @name            Redirect YouTube to Piped
// @version         1.0.0
// @description     Redirect YouTube to Piped
// @author          stef312
// @namespace       stef312
// @grant           none
// @match           https://*.youtube.com/*
// @match           https://*.youtu.be/*
// @run-at          document-start
// ==/UserScript==

(function() {
    var url = new URL(window.location);

    if (url.pathname === "/watch") {
        const videoId = url.searchParams.get("v");

        if (videoId) {
            const newUrl = `https://piped.video/watch?v=${videoId}`;
            window.location = newUrl;
        }
    }
})();
