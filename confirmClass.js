"use strict";

window.addEventListener("load", function () {
    var orderData = location.search.slice(1);
    orderData = orderData.replace(/\+/g, " ");
    orderData = decodeURIComponent(orderData);
    var orderFields = orderData.split(/[&=}]/g);

    document.forms.order.elements.subject.value = orderFields[5];
    document.forms.order.elements.courseNumber.value = orderFields[9];

    document.forms.order.elements.subject2.value = orderFields[17];
    document.forms.order.elements.courseNumber2.value = orderFields[21];

    document.forms.order.elements.subject3.value = orderFields[29];
    document.forms.order.elements.courseNumber3.value = orderFields[33];

    document.forms.order.elements.subject4.value = orderFields[41];
    document.forms.order.elements.courseNumber4.value = orderFields[45];

    document.forms.order.elements.subject5.value = orderFields[53];
    document.forms.order.elements.courseNumber5.value = orderFields[57];

    document.forms.order.elements.subject6.value = orderFields[65];
    document.forms.order.elements.courseNumber6.value = orderFields[69];

});