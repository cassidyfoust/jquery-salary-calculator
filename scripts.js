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
    $el.append(`<tr><td>` + newEmployee.first + `</td><td>` + newEmployee.last + `</td><td>` + newEmployee.id + `</td><td>` + newEmployee.title + `</td><td id="empSal">` + newEmployee.salary + `</td><td><button id="delete" onClick="removeEmployee(this); removeSalary(` + newEmployee.salary + `);">Delete</button></td></tr>`);

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
    if (monthlyFees>20000){
        $('#totalMonthlyCosts').addClass('alert')
    }
    else{
    }
}

function removeSalary(value){
    let removedSalary = value;
    console.log(removedSalary);
    removedSalary = removedSalary/12;
    monthlyFees = parseInt(monthlyFees) - parseInt(removedSalary);
    totalMonthlyCalc();
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