document.addEventListener("DOMContentLoaded", e => {
    var cH = document.querySelector("#crosshair-h");
    var cV = document.querySelector("#crosshair-v");

    function user_interacted(e) {
        cH.style.top = `${e.clientY}px`;
        cV.style.left = `${e.clientX}px`;
        // e.stopPropagation();
    }

    document.addEventListener("mousemove", user_interacted);
    document.addEventListener("touchmove", user_interacted);

    // anchor hover rffects
    document.querySelectorAll("a").forEach(function(anchor) {
        anchor.addEventListener("mouseover", function() {
            document.querySelectorAll(".hair").forEach(function(hair) {
                hair.hidden = true;
            });
        });
        anchor.addEventListener("mouseout", function() {
            document.querySelectorAll(".hair").forEach(function(hair) {
                hair.hidden = false;
            });
        });
    });
    // e.stopPropagation();

    // function resize_clients() {
    //     var summaries = document.querySelectorAll(".project-summary");
    //     console.log(summaries);
    //     summaries.forEach(summary => {
    //         summary.style.overflow = "auto"; //for Firefox, but won't ruin for other browsers
    //         var size = 12;
    //         var changes = 0;
    //         var blnSuccess = true;
    //         while (summary.scrollWidth <= summary.clientWidth) {
    //             summary.style.fontSize = size + "px";
    //             size++;
    //             changes++;
    //             if (changes > 1000) {
    //                 //failsafe..
    //                 blnSuccess = false;
    //                 break;
    //             }
    //         }
    //         if (changes > 0) {
    //             //upon failure, revert to original font size:
    //             if (blnSuccess)
    //                 size -= 2;
    //             else
    //                 size -= changes;
    //             summary.style.fontSize = size + "px";
    //         }
    //     });
    // };

    // window.onload = function () {
    //     resize_clients();
    // };

    // window.onresize = function () {
    //     resize_clients();
    // };

    // scroll into view after opening summary
    document.querySelectorAll(".project-summary").forEach(summary => {
        summary.addEventListener("click", () => {
            setTimeout(() => {
                summary.nextElementSibling.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            }, 50);
        });
    });

    document.querySelectorAll(".piece").forEach(piece => {
        piece.addEventListener("wheel", e => {
            original_target = e.target;
            while (original_target.className !== "piece") {
                original_target = original_target.parentNode;
            }
            if (e.deltaY > 0) {
                if (original_target.nextElementSibling) {
                    e.preventDefault();
                    original_target.nextElementSibling.scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
                }
            } else {
                if (original_target.previousElementSibling) {
                    e.preventDefault();
                    original_target.previousElementSibling.scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
                }
            }
        });
        piece.addEventListener("click", e => {
            original_target = e.target;
            while (original_target.className !== "piece") {
                original_target = original_target.parentNode;
            }
            if (e.clientX > window.innerWidth / 2) {
                if (original_target.nextElementSibling) {
                    e.preventDefault();
                    original_target.nextElementSibling.scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
                }
            } else {
                if (original_target.previousElementSibling) {
                    e.preventDefault();
                    original_target.previousElementSibling.scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
                }
            }
        });
        // piece.addEventListener("mouseover", e => {
        //     original_target = e.target;
        //     while (original_target.className !== "piece") {
        //         original_target = original_target.parentNode;
        //     }
        //     if (e.clientX > window.innerWidth / 2) {
        //         if (original_target.nextElementSibling) {
        //             piece.style.cursor = "ew-resize";
        //         }
        //     } else {
        //         if (original_target.previousElementSibling) {
        //             piece.style.cursor = "ns-resize";
        //         }
        //     }
        // });
    });
    // console.log(pieces.length);
    // shown_piece = Array(pieces.length);
    // for (var i = 0; i < pieces.length; i++) {
    //     // shown_piece[i] = 0;
    //     // console.log(pieces[i]);
    //     function scroll_to_next(e, pieces) {
    //         // piece_elem = e.target;
    //         // while(piece_elem.className != "piece"){
    //         //     piece_elem = e.target.parent;
    //         // }
    //         if (e.deltaY > 0) {
    //             pieces[i].nextElementSibling.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    //             // console.log(e.target);
    //             // shown_piece[i] = Math.min(shown_piece[i]++, pieces[i].childNodes.length);
    //             // pieces[i].childNodes[shown_piece].scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    //         } else {
    //             // console.log('e');
    //             // shown_piece[i] = Math.max(shown_piece[i]--, 0);
    //             // pieces[i].childNodes[shown_piece].scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    //         }
    //     }
    //     pieces[i].addEventListener("wheel", (e) => {scroll_to_next(e);});
    // }
});