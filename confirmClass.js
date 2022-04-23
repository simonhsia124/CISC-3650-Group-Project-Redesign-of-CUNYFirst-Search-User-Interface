"use strict";

window.addEventListener("load", function () {
    var orderData = location.search.slice(1);
    orderData = orderData.replace(/\+/g, " ");
    orderData = decodeURIComponent(orderData);
    var orderFields = orderData.split(/[&=}]/g);

    document.forms.order.elements.subject.value = orderFields[5];
    document.forms.order.elements.courseNumber.value = orderFields[9];

});