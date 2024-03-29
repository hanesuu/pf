var Tabs = {
    init: function() {
        this.bindUIfunctions();
        this.pageLoadCorrectTab();
    },

    bindUIfunctions: function() {
        // Delegation
        $(document)
            .on("click", ".transformer-tabs a[href^='#']:not('.active')", function(
                event
            ) {
                Tabs.changeTab(this.hash);
                event.preventDefault();
            })
            .on("click", ".transformer-tabs a.active", function(event) {
                Tabs.toggleMobileMenu(event, this);
                event.preventDefault();
            });
    },

    changeTab: function(hash) {
        var anchor = $("[href*=\\" + hash + "]");
        var div = $(hash);

        // activate correct anchor (visually)
        anchor
            .addClass("active")
            .parent()
            .siblings()
            .find("a")
            .removeClass("active");

        // activate correct div (visually)
        div
            .addClass("active")
            .siblings()
            .removeClass("active");

        // update URL, no history addition
        // You'd have this active in a real situation, but it causes issues in an <iframe> (like here on CodePen) in Firefox. So commenting out.
        // window.history.replaceState("", "", hash);

        // Close menu, in case mobile
        anchor.closest("ul").removeClass("open");
    },

    // If the page has a hash on load, go to that tab
    pageLoadCorrectTab: function() {
        this.changeTab(document.location.hash);
    },

    toggleMobileMenu: function(event, el) {
        $(el)
            .closest("ul")
            .toggleClass("open");
    }
};

Tabs.init();



function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}