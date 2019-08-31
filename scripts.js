$(document).ready(readyNow);

let employeeList = [];

function newRow(first, last, id, title, salary) {
        let newEmployee = {
            first: $('#firstName').val(),
            last: $('#lastName').val(),
            id: $('#employeeId').val(),
            title: $('#jobTitle').val(),
            salary: $('#annualSalary').val()
        }
        employeeList.push(newEmployee);
        monthlyFees = parseInt(monthlyFees) + parseInt(newEmployee.salary)/12;
    let $el = $('#employeesTable');
    $el.append(`<tr><td data-employees="input">` + newEmployee.first + `</td><td data-employees="input">` + newEmployee.last + `</td><td data-employees="input">` + newEmployee.id + `</td><td data-employees="input">` + newEmployee.title + `</td><td data-employees="input">` + newEmployee.salary + `</td><td><button id="delete" onClick="removeEmployee(this);">Delete</button></td></tr>`);
    $el.data('firstName', newEmployee.first);
    $el.data('lastName', newEmployee.last);
    $el.data('employeeID', newEmployee.id);
    $el.data('annualSalary', newEmployee.salary);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeId').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
    totalMonthlyCalc();
}

let monthlyFees = 0;

function totalMonthlyCalc(){
    let $el = $('#totalMonthlyCosts');
    $el.empty();
    $el.append('$' + monthlyFees)
}

function removeEmployee(employee){
    $(employee).parent().parent().remove();
}

// let faveFood = $(this).parent().data('favoriteFood')

function readyNow() {
    $('#submitButton').on('click', function(){
        newRow();
    })
}