"use strict";

const isDate = (date, datePattern) => {
    if (!datePattern.test(date)) { return false; }

    const index = date.indexOf( "/" );
    const month = parseInt( date.substring( 0, index ) );

    if ( month < 1 || month > 12 ) { return false; }
        return true;
};

$(document).ready( () => {

    //move focus to the first box
    $("#name").focus();

    //the handler event for the click event of the submit button
    $("#checkout_form").submit( event => {
        let isValid = true;

        //get values entered by user
        const name_1 = $("#name").val().trim();
        const email = $("#email").val().trim();
        const address = $("#address").val().trim();
        const city = $("#city").val().trim();
        const state = $("#state").val().trim();
        const zip_code = $("#zip").val().trim();
        const cardName = $("#card_name").val().trim();
        const cardNum = $("#card_num").val().trim();
        const ccDate = $("#expDate").val().trim();
        const cvv = $("#cvv").val().trim();

        //regular expressions for validility testing 
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const zipPattern = /^\d{5}?$/;
        const cardNumPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
        const ccDatePattern = /^[01]?\d\/\d{4}$/;

        //validates the name input
        if (name_1 == "") {
            $("#full_name").next().text("Required");
            isValid = false;
        }
        else {
            $("#full_name").next().text("");
        }

        //validates the email
        if (email === "" || !emailPattern.test(email) ) {
            $("#email2").next().text("Required");
            isValid = false;
        }
    
        else {
            $("#email2").next().text("");
        }

        //validates the address input
        if (address === "") {
            $("#address2").next().text("Required");
            isValid = false;
        }
        else {
            $("#address2").next().text("");
        }

        //validates city input
        if (city === "") {
            $("#city2").next().text("Required");
            isValid = false;
        }
        else {
            $("#city2").next().text("");
        }

        //validate state input
        if (state === "") {
            $("#state2").next().text("Required");
            isValid = false;
        }
        else {
            $("#state2").next().text("");
        }

        //validate zipcode input
        if (zip_code === "" || !zipPattern.test(zip_code) || isNaN(zip_code) ) {
            $("#zc").next().text("Required");
            isValid = false;
        }
        else {
            $("#zc").next().text("");
        }

        //validates name on card
        if (cardName === "") {
            $("#cardName2").next().text("Required");
            isValid = false;
        }
        else {
            $("#cardName2").next().text("");
        }

        //validate credit card number
        if (cardNum === "" || !cardNumPattern.test(cardNum) ) {
            $("#ccNum").next().text("Required");
            isValid = false;
        }
        else {
            $("#ccNum").next().text("");
        }

        //validate exp date
        if (ccDate === "" || !isDate(ccDate, ccDatePattern)) {
            $("#cc_Date").next().text("Enter Valid Date");
            isValid = false;
        }
        else {
            $("#cc_Date").next().text("");
        }
        
        //validate cvv number
        if (cvv === "") {
            $("#cvv2").next().text("Required");
            isValid = false;
        }
        else {
            $("#cvv2").next().text("");
        }

        

        if(isValid == false) {
            event.preventDefault();
        }

    });
});