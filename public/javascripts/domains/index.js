var array = [];
//var sync = false;
jQuery(function(){
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    
    jQuery("form").validate({
        submitHandler: function(e){
//            e.submit(false);
            pushInArray();
        },
        rules:{
            url: {
                url: true,
                required: true
            }
        }
    });
    setInterval(function(){
        jQuery.ajax({
            type: 'POST',
            url: '/domains/sync',
            data: {
                domains: array.join()
            },
            success: function(){
//                sync = true;
                array = [];
            }
        });
    }, 15000)
});

function pushInArray(){
//    var array = [];
//    console.log('inside pushArray');
    var url = jQuery('#domain_url').val();
    jQuery('#domain_url').val('');
    var host  = parseUri(url).host.replace('www.', '');
    jQuery("#listing ul").prepend("<li>"+host+"</li>").show();
    array.push(host);
}