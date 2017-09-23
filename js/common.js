function getURLVar(key) {
    var value = [];

    var query = String(document.location).split('?');

    if (query[1]) {
        var part = query[1].split('&');

        for (i = 0; i < part.length; i++) {
            var data = part[i].split('=');

            if (data[0] && data[1]) {
                value[data[0]] = data[1];
            }
        }

        if (value[key]) {
            return value[key];
        } else {
            return '';
        }
    }
}

$(document).ready(function () {
    $('#datepicker1').datepicker();
    $('#datepicker2').datepicker();
    $('#datepicker3').datepicker();
    $('#datepicker4').datepicker();
    //Form Submit for IE Browser
    $('button[type=\'submit\']').on('click', function () {
        $("form[id*='form-']").submit();
    });

    // Highlight any found errors
    $('.text-danger').each(function () {
        var element = $(this).parent().parent();

        if (element.hasClass('form-group')) {
            element.addClass('has-error');
        }
    });

    /*
     
     // Set last page opened on the menu
     $('#menu a[href]').on('click', function() {
     sessionStorage.setItem('menu', $(this).attr('href'));
     });
     
     if (!sessionStorage.getItem('menu')) {
     $('#menu #dashboard').addClass('active');
     } else {
     // Sets active and open to selected page in the left column menu.
     $('#menu a[href=\'' + sessionStorage.getItem('menu') + '\']').parents('li').addClass('active open');
     }
     
     if (localStorage.getItem('column-left') == 'active') {
     $('#button-menu i').replaceWith('<i class="fa fa-dedent fa-lg"></i>');
     
     $('#column-left').addClass('active');
     
     // Slide Down Menu
     $('#menu li.active').has('ul').children('ul').addClass('collapse in');
     $('#menu li').not('.active').has('ul').children('ul').addClass('collapse');
     } else {
     $('#button-menu i').replaceWith('<i class="fa fa-indent fa-lg"></i>');
     
     $('#menu li li.active').has('ul').children('ul').addClass('collapse in');
     $('#menu li li').not('.active').has('ul').children('ul').addClass('collapse');
     }**/

    // Menu button
    $('#button-menu').on('click', function () {
        // Checks if the left column is active or not.
        if ($('#column-left').hasClass('active')) {
            localStorage.setItem('column-left', '');

            $('#button-menu i').replaceWith('<i class="fa fa-indent fa-lg"></i>');

            $('#column-left').removeClass('active');

            $('#menu > li > ul').removeClass('in collapse');
            $('#menu > li > ul').removeAttr('style');
        } else {
            localStorage.setItem('column-left', 'active');

            $('#button-menu i').replaceWith('<i class="fa fa-dedent fa-lg"></i>');

            $('#column-left').addClass('active');

            // Add the slide down to open menu items
            $('#menu li.open').has('ul').children('ul').addClass('collapse in');
            $('#menu li').not('.open').has('ul').children('ul').addClass('collapse');
        }
    });

    // Menu
    $('#menu').find('li').has('ul').children('a').on('click', function () {
        if ($('#column-left').hasClass('active')) {
            $(this).parent('li').toggleClass('open').children('ul').collapse('toggle');
            $(this).parent('li').siblings().removeClass('open').children('ul.in').collapse('hide');
        } else if (!$(this).parent().parent().is('#menu')) {
            $(this).parent('li').toggleClass('open').children('ul').collapse('toggle');
            $(this).parent('li').siblings().removeClass('open').children('ul.in').collapse('hide');
        }
    });


    // Tooltip remove fixed
    $(document).on('click', '[data-toggle=\'tooltip\']', function (e) {
        $('body > .tooltip').remove();
    });

    // Image Manager
    $(document).on('click', 'a[data-toggle=\'image\']', function (e) {
        var $element = $(this);
        var $popover = $element.data('bs.popover'); // element has bs popover?

        e.preventDefault();

        // destroy all image popovers
        $('a[data-toggle="image"]').popover('destroy');

        // remove flickering (do not re-add popover when clicking for removal)
        if ($popover) {
            return;
        }

        $element.popover({
            html: true,
            placement: 'right',
            trigger: 'manual',
            content: function () {
                return '<button type="button" id="button-image" class="btn btn-primary"><i class="fa fa-pencil"></i></button> <button type="button" id="button-clear" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>';
            }
        });

        $element.popover('show');

        $('#button-image').on('click', function () {
            var $button = $(this);
            var $icon = $button.find('> i');

            $('#modal-image').remove();

            $.ajax({
                url: 'index.php?route=common/filemanager&token=' + getURLVar('token') + '&target=' + $element.parent().find('input').attr('id') + '&thumb=' + $element.attr('id'),
                dataType: 'html',
                beforeSend: function () {
                    $button.prop('disabled', true);
                    if ($icon.length) {
                        $icon.attr('class', 'fa fa-circle-o-notch fa-spin');
                    }
                },
                complete: function () {
                    $button.prop('disabled', false);
                    if ($icon.length) {
                        $icon.attr('class', 'fa fa-pencil');
                    }
                },
                success: function (html) {
                    $('body').append('<div id="modal-image" class="modal">' + html + '</div>');

                    $('#modal-image').modal('show');
                }
            });

            $element.popover('destroy');
        });

        $('#button-clear').on('click', function () {
            $element.find('img').attr('src', $element.find('img').attr('data-placeholder'));

            $element.parent().find('input').val('');

            $element.popover('destroy');
        });
    });

    // tooltips on hover
    $('[data-toggle=\'tooltip\']').tooltip({container: 'body', html: true});

    // Makes tooltips work on ajax generated content
    $(document).ajaxStop(function () {
        $('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
    });

    // https://github.com/opencart/opencart/issues/2595
    $.event.special.remove = {
        remove: function (o) {
            if (o.handler) {
                o.handler.apply(this, arguments);
            }
        }
    }

    $('[data-toggle=\'tooltip\']').on('remove', function () {
        $(this).tooltip('destroy');
    });

    //ajax variable
    var isRunning = false;

    // message function
    $('.message-function').on('click', function () {
        var $id = $(this).find(".id").val();
        var $phone = $(this).find(".phone").val();
        var $name = $(this).find(".name").val();
        var $additionalInfo = $(this).find(".additional_info").val();
        $(".message-content").find(".id").val($id);
        $(".message-content").find(".phone").val($phone);
        $(".message-content").find(".customer-name").html($name);
        $(".message-content").find(".name").val($name);
        $(".message-content").find(".additional_info").val($additionalInfo);
        var checked_radio = $(".message-content").find(".msg-option-radio:checked");
        var checked_msg = checked_radio.val();
        var check_services = checked_radio.hasClass('services');
        setCustomMessage(checked_msg,check_services)
        if (isRunning === false) {
            $('.message-content').show();
            $('.message-loading').hide();
            $('.message-sender').hide();
            $('.send-message').show();
        }
    });

    $('.send-message').on('click', function () {
        var $type = $(".message-content").find(".type").val();
        var $id = $(".message-content").find(".id").val();
        var $phone = $(".message-content").find(".phone").val();
        var $name = $(".message-content").find(".name").val();
        var $message = $(".message-content").find(".message").val();
        $.ajax({
            url: "send-message.php",
            type: 'POST',
            data: {
                type: $type,
                id: $id,
                phone: $phone,
                name: $name,
                message: $message,
            },
            beforeSend: function () {
                isRunning = true;
                $('#myModal').find('.message-content').hide();
                $('#myModal').find('.message-loading').show();
                $('#myModal').find('.send-message').hide();
            },
            success: function (result) {
                $('#myModal').find(".message-sender").find('.content-msg').html(result);
                $('#myModal').find('.message-loading').hide();
                $('#myModal').find('.message-sender').show();
                isRunning = false;
            }
        });
    });

    // get message details
    $('.message-function-details').on('click', function () {
        var $id = $(this).find(".id").val();
        var $type = $(this).find(".type").val();
        $('#deliveryDetails').find('.message-content').hide();
        $.ajax({
            url: "message-details.php",
            type: 'POST',
            data: {
                type: $type,
                id: $id,
            },
            beforeSend: function () {
                $('#deliveryDetails').find('.message-content').hide();
                $('#deliveryDetails').find('.message-loading').show();
            },
            success: function (result) {
                $('#deliveryDetails').find(".message-content").html(result);
                $('#deliveryDetails').find('.message-loading').hide();
                $('#deliveryDetails').find('.message-content').show();
            }
        });
    });

    //msg option
    $('.msg-option-radio').on('click', function () {
        var checked_msg = $(this).val();
        var check_services = $(this).hasClass('services');
        setCustomMessage(checked_msg,check_services);
    });
});

function setCustomMessage(checked_msg,check_services){
    var obj = $.parseJSON($('.message-content .additional_info').val());
        var send_msg = '';
        //alert(check_services);
        if(checked_msg == 1){
            send_msg = 'Thanks for your Vist our pitstop for your wheels. \n DP Wheel Care Point, kpm';
            if(check_services){
                send_msg = 'Thank you for your visit to our pitstop for your wheels,,,,\nplease ensure your wheel alignment for every 5000 KM for comfortable and safe drive,\nRgds,\nDP wheel care point.';
            }
        }
        if(checked_msg == 2){
            send_msg = 'ngjkfg';
            if(check_services){
                var purchase_date = obj.date_added;
//                custom_date = purchase_date.setMonth(purchase_date.getMonth() + 1);
                var cus = new Date((+new Date(purchase_date)) + 2678400000);
//                var custom_date = cus.getDate() +' - ' + cus.getMonth() + ' - ' + cus.getFullYear();
                var custom_date = $.datepicker.formatDate('dd-M-yy', cus);
                send_msg = 'Hi('+ obj.customer_name +') this is friendly reminder from DP wheel care point kpm,\nthat your vehicle ('+ obj.city +')  free wheel alignment  Will end tomorrow ('+ custom_date +').\nplease check it  for comfortable and safe drive.\nRgds,\nDP wheel care point.';
            }
        }
        if(checked_msg == 3){
            send_msg = 'jkjkgjkgh';
        }
        //alert(send_msg);
        $('.message-content .form-control.message').val(send_msg);
}

// Autocomplete */
(function ($) {
    $.fn.autocomplete = function (option) {
        return this.each(function () {
            var $this = $(this);
            var $dropdown = $('<ul class="dropdown-menu" />');

            this.timer = null;
            this.items = [];

            $.extend(this, option);

            $this.attr('autocomplete', 'off');

            // Focus
            $this.on('focus', function () {
                this.request();
            });

            // Blur
            $this.on('blur', function () {
                setTimeout(function (object) {
                    object.hide();
                }, 200, this);
            });

            // Keydown
            $this.on('keydown', function (event) {
                switch (event.keyCode) {
                    case 27: // escape
                        this.hide();
                        break;
                    default:
                        this.request();
                        break;
                }
            });

            // Click
            this.click = function (event) {
                event.preventDefault();

                var value = $(event.target).parent().attr('data-value');

                if (value && this.items[value]) {
                    this.select(this.items[value]);
                }
            }

            // Show
            this.show = function () {
                var pos = $this.position();

                $dropdown.css({
                    top: pos.top + $this.outerHeight(),
                    left: pos.left
                });

                $dropdown.show();
            }

            // Hide
            this.hide = function () {
                $dropdown.hide();
            }

            // Request
            this.request = function () {
                clearTimeout(this.timer);

                this.timer = setTimeout(function (object) {
                    object.source($(object).val(), $.proxy(object.response, object));
                }, 200, this);
            }

            // Response
            this.response = function (json) {
                var html = '';
                var category = {};
                var name;
                var i = 0, j = 0;

                if (json.length) {
                    for (i = 0; i < json.length; i++) {
                        // update element items
                        this.items[json[i]['value']] = json[i];

                        if (!json[i]['category']) {
                            // ungrouped items
                            html += '<li data-value="' + json[i]['value'] + '"><a href="#">' + json[i]['label'] + '</a></li>';
                        } else {
                            // grouped items
                            name = json[i]['category'];
                            if (!category[name]) {
                                category[name] = [];
                            }

                            category[name].push(json[i]);
                        }
                    }

                    for (name in category) {
                        html += '<li class="dropdown-header">' + name + '</li>';

                        for (j = 0; j < category[name].length; j++) {
                            html += '<li data-value="' + category[name][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[name][j]['label'] + '</a></li>';
                        }
                    }
                }

                if (html) {
                    this.show();
                } else {
                    this.hide();
                }

                $dropdown.html(html);
            }

            $dropdown.on('click', '> li > a', $.proxy(this.click, this));
            $this.after($dropdown);
        });
    }
})(window.jQuery);
