$(document).ready(function () {
    $(function(){
        $('.stepper').activateStepper();
    });
    $('.modal').modal();
});

function saveInstallation(){
    var form = document.getElementsByClassName("stepper")[0].parentNode;
    console.log(form);
    $.ajax({
        url: '/save',
        type: 'POST',
        data: $(form).serialize(),
        success: function(result) {
            document.getElementById('no').innerHTML = result;
            $('#modal1').modal('open');
        }
    });
}
function reloaded(){
    window.location = '/';
}
