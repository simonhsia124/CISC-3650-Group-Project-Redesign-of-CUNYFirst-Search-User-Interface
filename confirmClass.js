"use strict";

window.addEventListener("load", function () {
    var orderData = location.search.slice(1);
    orderData = orderData.replace(/\+/g, " ");
    orderData = decodeURIComponent(orderData);
    var orderFields = orderData.split(/[&=}]/g);

    document.forms.order.elements.subject.value = orderFields[5];
    document.forms.order.elements.courseNumber.value = orderFields[9];
    document.forms.order.elements.course_prof.value = orderFields[13];
    document.forms.order.elements.courseTime.value = orderFields[17];

    document.forms.order.elements.subject2.value = orderFields[25];
    document.forms.order.elements.courseNumber2.value = orderFields[29];
    document.forms.order.elements.course_prof2.value = orderFields[33];
    document.forms.order.elements.courseTime2.value = orderFields[37];


    document.forms.order.elements.subject3.value = orderFields[45];
    document.forms.order.elements.courseNumber3.value = orderFields[49];
    document.forms.order.elements.course_prof3.value = orderFields[53];
    document.forms.order.elements.courseTime3.value = orderFields[57];

    document.forms.order.elements.subject4.value = orderFields[65];
    document.forms.order.elements.courseNumber4.value = orderFields[69];
    document.forms.order.elements.course_prof4.value = orderFields[73];
    document.forms.order.elements.courseTime4.value = orderFields[77];

    document.forms.order.elements.subject5.value = orderFields[85];
    document.forms.order.elements.courseNumber5.value = orderFields[89];
    document.forms.order.elements.course_prof5.value = orderFields[93];
    document.forms.order.elements.courseTime5.value = orderFields[97];

    document.forms.order.elements.subject6.value = orderFields[105];
    document.forms.order.elements.courseNumber6.value = orderFields[109];
    document.forms.order.elements.course_prof6.value = orderFields[113];
    document.forms.order.elements.courseTime6.value = orderFields[117];

});
