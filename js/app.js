var CIRCUITSE = function(){
    this.colours = [[[20,79,15],[59,122,53],[108,165,102],[169,214,164]],[[19,79,15],[58,122,53],[106,165,102],[168,214,164]],[[15,70,79],[53,113,122],[102,157,165],[164,207,214]],[[15,69,79],[53,112,122],[102,156,165],[164,206,214]],[[15,26,79],[53,66,122],[102,114,165],[164,173,214]],[[15,16,79],[53,54,122],[102,103,165],[164,165,214]],[[49,15,79],[90,53,122],[136,102,165],[191,164,214]],[[63,15,79],[105,53,122],[150,102,165],[201,164,214]],[[79,15,67],[122,53,109],[165,102,154],[214,164,205]],[[79,15,66],[122,53,108],[165,102,153],[214,164,204]]];
    this.setColours();
};

CIRCUITSE.prototype.setColours = function(){
    var randomColourIndex = Math.floor(Math.random()*360);
    var colours = this.colours[randomColourIndex];

    new CircuitLogo( document.getElementById('siteId'),{
        'step'    : randomColourIndex,
        'animate' : false
    });


    var setStyleOnElements = function(style, colour, elements){
        var elementsLength = elements.length;
        while(elementsLength--) {
            elements[elementsLength].style[style] = "rgb(" + colour[0] + "," + colour[1] + "," + colour[2] + ")";
        }
    };

    setStyleOnElements('backgroundColor', colours[0],  document.getElementsByClassName('js-bg-01'));
    setStyleOnElements('backgroundColor', colours[1],  document.getElementsByClassName('js-bg-02'));
    setStyleOnElements('backgroundColor', colours[2],  document.getElementsByClassName('js-bg-03'));
    setStyleOnElements('backgroundColor', colours[3],  document.getElementsByClassName('js-bg-04'));

    setStyleOnElements('color', colours[0],  document.getElementsByClassName('js-text-01'));
    setStyleOnElements('color', colours[1],  document.getElementsByClassName('js-text-02'));
    setStyleOnElements('color', colours[2],  document.getElementsByClassName('js-text-03'));
    setStyleOnElements('color', colours[3],  document.getElementsByClassName('js-text-04'));

};

new CIRCUITSE();
