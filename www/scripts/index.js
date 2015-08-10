// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        $.ajax({
            url: 'https://migmasupplier.azurewebsites.net/Employer/GetEmployersAndUrls',
            async: false,
            type: "GET",
            dataType: "json",
            beforeSend: function () { $.mobile.loading('show'); },
            success: function (users) {
                $.each(users, function (val, item) {
                    $('#EmployerSelect').append(
                        $('<option></option>').val(item.EmployerSite).html(item.EmployerName)
                    );
                });
            },
            error: function () {
                alert("Not Working");
            },
            complete: function () { $.mobile.loading('hide'); },
        })
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();