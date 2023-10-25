/**
 * Name: Kyle
 * Date: 10/24/2023
 *
 * Adds some minor functionality to the associated webpage.
 * Anything and everything found in this file or any other that was not covered in class came from https://developer.mozilla.org/en-US/
 * Source: https://developer.mozilla.org/en-US/
 */
"use strict";

(function () {

    /**
     * Adds a function that will be called when the window is loaded.
     */
    window.addEventListener("load", init);

    /*
    * mdn documentation says this isn't explicitly depreciated, but is out of favor (describing a more
    * modern alternative, without actually providing one).
    *
    * Attempts to use other constant variables has been unimaginably inconsistent, working fine, when it does,
    * until some unknown event results in the value throwing a null error. I must assume these are similarly capable
    * of spontaneous combustion. Good job javascript.
    */
    const fileBoxes = document.getElementsByClassName("filebox")

    const itemList = document.getElementsByClassName("checkitem")

    /**
     * Adds event listeners.
     */
    function init() {
        document.getElementById("item0").addEventListener("click", parentCheck);

        document.getElementById("resetbtn").addEventListener("click", ctrlz);

        for (const box of fileBoxes) {
            box.addEventListener("click", setCheck);
        }

        for (const item of itemList) {
            item.addEventListener("click", assignmentComplete);
        }
    }

    /**
     * Resets all the boxes, intended for testing.
     * Does not remove added nodes.
     */
    function ctrlz() {
        for (const box of itemList) {
            box.checked = false;
        }
        for (const box of fileBoxes) {
            box.checked = false;
        }
        document.getElementById("item0").indeterminate = false;
    }

    /**
     * Disables the default click toggle. Was going to be much more reactive, but javascript is amazingly terrible.
     * @param event (Click)Event to ignore.
     */
    function parentCheck(event) {
        event.preventDefault();
    }

    /**
     * If all the required files are toggled in a particular way, sets the overall box to that state. Otherwise,
     * sets it to indeterminate.
     */
    function setCheck() {
        let state = this.checked;
        const parentBox = document.getElementById("item0");
        for (const box of fileBoxes) {
            if (box.checked !== state) {
                parentBox.checked = false;
                parentBox.indeterminate = true;
                return;
            }
        }
        parentBox.checked = state;
        parentBox.indeterminate = false;
    }

    /**
     * On click, checks if all checkboxes are true. If so, inserts a node. Does not work on item0.
     * Not reset with the reset button.
     */
    function assignmentComplete() {
        for (const item of itemList) {
            if (item.checked === false) {
                return;
            }
        }
        const newNode = document.getElementById("primary").appendChild(document.createElement("section"));
        newNode.appendChild(document.createTextNode("Nifty"));
    }

})();
