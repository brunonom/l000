document.addEventListener("DOMContentLoaded", function(e) {
    var cH = document.querySelector("#crosshair-h");
    var cV = document.querySelector("#crosshair-v");

    function user_interacted(e) {
        cH.style.top = `${e.clientY}px`;
        cV.style.left = `${e.clientX}px`;
        // e.stopPropagation();
    }

    this.addEventListener("mousemove", user_interacted);
    this.addEventListener("touchmove", user_interacted);

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
        summary.addEventListener("click", async () => {
            await new Promise(r => setTimeout(r, 150));
            summary.nextElementSibling.scrollIntoView({behavior: "smooth"});
        });
    });

    // document.querySelectorAll(".pieces").forEach(pieces_pane => {
    //     document.addEventListener("", );
    // })
});