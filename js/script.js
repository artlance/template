//screens
var screenLanding = $('.screen-landing');
var screenSignIn = $('.screen-signin');
var screenSignUp = $('.screen-signup');
var screenLinkBank = $('.screen-link-bank');
var screenNextLinkBank = $('.screen-next-link-bank');
var screenPrivacy = $('.screen-privacy');
var screenTerms = $('.screen-terms');
var elementBreadcrumbsSignUp = $('.breadcrumbs-signup');
var screenAnalyzing = $('.screen-analyzing');
var screenAnalyzingNo = $('.screen-analyzing-no-card');
var elementBreadcrumbsSetup = $('.breadcrumbs-setup');
var elementGraphic = $('.graphic');
var screenIncomeEdit = $('.screen-income-edit');
var screenIncome = $('.screen-income');
var screenBills = $('.screen-bills');
var screenBillsList = $('.screen-bills-list');
var screenBillsEdit = $('.screen-bills-edit');
var alertBillsEdit = $('.alert-bills-edit');
var screenBillsAdd = $('.screen-bills-add');
var alertBillsAdd = $('.alert-bills-add');
var screenSaving = $('.screen-saving');
var screenSpending = $('.screen-spending');
var screenYourPlan = $('.screen-your-plan');
var screenYourMoney = $('.screen-your-money');
var elementYourMoneyHeader = $('.your-money-header');
var elementSpendingMoneyHeader = $('.spending-money-header');
var screenModalYourMenu = $('.screen-modal-your-menu');
var screenSubgroupSpending = $('.screen-subgroup-spending');
var screenDesignateTransaction = $('.screen-designate-transaction');
var screenCardCharges = $('.screen-card-charges');
var screenMonthlyBills = $('.screen-monthly-bills');

$(document).ready(function(){

    //nojs
    $('body').removeClass('no-js');

    //------------------------------------------------------------------------//

    //full screen
    $('.full-screen').fullScreen();

    //------------------------------------------------------------------------//

    //fakelink
    $('a[href="#"]').on('click', function(event) {
        event.preventDefault();
    });

    //------------------------------------------------------------------------//

    //slider
    $('.landing-slider').slick({
        dots: true,
        arrows: false,
        draggable: true,
        infinite: false,
        centerMode: false,
        centerPadding: '0px',
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.landing-slide',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.landing-description-slider',
        prevArrow: '<button type="button" class="slick-prev"><span class="svg"><img src="upload/left-white.svg" alt=""></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="svg"><img src="upload/left-white.svg" alt=""></span></button>',
        //fade: true
    });

    $('.landing-description-slider').slick({
        dots: false,
        arrows: false,
        draggable: false,
        infinite: false,
        centerMode: false,
        centerPadding: '0px',
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.landing-description-slide',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.landing-slider',
        fade: true
    });

    //------------------------------------------------------------------------//

    $(document).on('mobileinit', function () {
        $.mobile.ignoreContentEnabled = true;
    });

    //------------------------------------------------------------------------//

    //drop down menu
    //$('.menu li').has('ul').addClass('dropdown');
    //$('.menu li').hover(function(){$('ul',this).slideDown(0);},function(){$('ul',this).slideUp(0);});
    //doubleTapToGo
    //$('.menu > li:has(ul)').doubleTapToGo();


    //------------------------------------------------------------------------//

    //mask
    $('.mask-pin').mask("9999", {placeholder:"4 digit PIN"});
    $('.mask-pin-again').mask("9999", {placeholder:"4 digit PIN again"});
    $('.mask-tel').mask("999-999-9999", {placeholder:"phone"});
    $('.mask-tel-again').mask("999-999-9999", {placeholder:"phone again"});

    //------------------------------------------------------------------------//

    //select-wrapper
    $('.select-wrapper').each(function(){
      var $element = $(this);
      var $select = $element.find('select');
      var $value = $element.find('.select-value');
      $select.on({
        'change keyup': function () {
          $value.text($select.find('option:selected').text());
        },
        'focus': function () {
          $element.addClass('focus');
        },
        'blur': function () {
          $element.removeClass('focus');
        }
      });
      $select.trigger('change');
    });

    //------------------------------------------------------------------------//

    $('.landing-go-signup').click(function(){
         screenLanding
         .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
         screenSignUp
         .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
         elementBreadcrumbsSignUp
         .show("slide", {
             direction: "up",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.landing-go-login').click(function(){
         screenLanding
         .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
         screenSignIn
         .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.go-signup').click(function(){
         screenSignIn
         .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
         screenSignUp
         .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
         elementBreadcrumbsSignUp
         .show("slide", {
             direction: "up",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.go-signin').click(function(){
         screenSignIn
         .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
         screenSignUp
         .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
         elementBreadcrumbsSignUp
         .hide("slide", {
             direction: "up",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.go-terms').click(function(){
         screenTerms
         .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.hide-terms').click(function(){
         screenTerms
         .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.go-privacy').click(function(){
         screenPrivacy
         .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.hide-privacy').click(function(){
         screenPrivacy
         .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });

    $('.go-next-link-bank').on('click', function(event) {
        event.preventDefault();
        screenLinkBank
        .hide("slide", {
            direction: "left",
            easing: "easeInOutCirc"
        }, 300);
        screenNextLinkBank
        .show("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        elementBreadcrumbsSignUp
        .find('li:eq(1)').removeClass('active-last')
        .next('li').addClass('active');
    });

    $('.go-analyzing-no-card').click(function(){
        screenAnalyzingNo
        .show("fade", {
        easing: "easeInOutCirc"
        }, 300, function(){
            setTimeout(function(){
                $.dialog({
                    buttonText : {
                        ok : 'Restart the analysis'
                    },
                    titleText : 'Oops, something went wrong…',
                    contentHtml : '<p>Please restart the transaction<br> analysis below.</p>'
                });
            }, 2000);
        });
    });
    $('.go-analyzing').click(function(){
        screenAnalyzing
        .show("fade", {
        easing: "easeInOutCirc"
        }, 300, function(){
            setTimeout(function(){
                $('.timer-text-process').fadeOut(0);
                $('.timer-text-ready').fadeIn(250);
                $('.screen-analyzing').addClass('screen-analyzing-ready');
            }, 2000);
        });
    });
    $('.hide-analyzing').click(function(){
        $('.screen-analyzing').removeClass('screen-analyzing-ready');
        screenAnalyzingNo
        .hide("fade", {
        easing: "easeInOutCirc"
        }, 300, function(){
            //reset loader
        });
    });
    $('.button-analyzing-ready-back').click(function(){
        $('.screen-analyzing').removeClass('screen-analyzing-ready');
        screenAnalyzing
        .hide("fade", {
        easing: "easeInOutCirc"
        }, 300, function(){
            //reset loader
        });
    });
    $('.go-income').on('click', function(event) {
        screenNextLinkBank
        .hide("slide", {
            direction: "left",
            easing: "easeInOutCirc"
        }, 300);
        screenAnalyzing
        .hide("fade", {
            easing: "easeInOutCirc"
        }, 300);
        screenIncome
        .show("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        elementGraphic
        .show("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        elementBreadcrumbsSetup
        .show("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        elementBreadcrumbsSignUp
         .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.income-form span.input-text').click(function(){
         screenIncomeEdit
         .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.go-back-analyzing').click(function(){
        screenAnalyzing
        .show("fade", {
            easing: "easeInOutCirc"
        }, 300);
        screenIncome
        .hide("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        elementGraphic
        .hide("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        elementBreadcrumbsSetup
        .hide("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        screenNextLinkBank
        .show("slide", {
            direction: "left",
            easing: "easeInOutCirc"
        }, 300);
        elementBreadcrumbsSignUp
         .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
         elementBreadcrumbsSignUp
        .find('li').removeClass('active-last').addClass('active');
        $('.timer-text-process').fadeOut(0);
        $('.timer-text-ready').fadeIn(250);
        $('.screen-analyzing').addClass('screen-analyzing-ready');
    });
    $('.hide-income-edit').click(function(){
         screenIncomeEdit
         .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });

    $('.hide-income-save').click(function() {
        var incomeAmountVal = $('#income-edit-amount').val();
        incomeAmountVal = incomeAmountVal.replace('$', '');
        //console.log(incomeAmountVal);
        $('#income-amount-val').text('$'+incomeAmountVal);
        var incomeFrequencyVal = $('.income-edit-frequency').val();
        $('#income-frequency-val').text(incomeFrequencyVal);
        if ( incomeFrequencyVal == 'every week' ) {
            var incomeWeekVal = $('.income-edit-week select').val();
            $('.income-twice-a-month, .income-month, .income-2week').hide();
            $('.income-week').show();
            $('#income-week-val').text(incomeWeekVal);
        } else if ( incomeFrequencyVal == 'every other week' ) {
            var income2WeekVal = $('.income-edit-2week:eq(0) select').val();
            var income2Week2Val = $('.income-edit-2week:eq(1) select').val();
            $('.income-twice-a-month, .income-month, .income-week').hide();
            $('.income-2week').show();
            $('#income-2week-val').text(income2WeekVal);
            $('#income-2week2-val').text(income2Week2Val);
            $('.income-note').addClass('income-note-hide');
        } else if ( incomeFrequencyVal == 'twice a month' ) {
            $('.income-month, .income-week, .income-2week').hide();
            $('.income-twice-a-month').show();
            var incomeTwiceVal1 = $('.income-edit-twice-a-month select:eq(0)').val();
            var incomeTwiceVal2 = $('.income-edit-twice-a-month select:eq(1)').val();
            $('.income-twice-a-month span.input-text:eq(0)').text(incomeTwiceVal1);
            $('.income-twice-a-month span.input-text:eq(1)').text(incomeTwiceVal2);
        } else if ( incomeFrequencyVal == 'once a month' ) {
            var incomeMonthVal = $('.income-edit-month select').val();
            $('.income-twice-a-month, .income-week, .income-2week').hide();
            $('.income-month').show();
            $('#income-month-val').text(incomeMonthVal);
        }
        screenIncomeEdit
         .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });

    $('.income-edit-frequency').bind('change', function(event) {

        var thisValue = $(this).val();

        if ( thisValue == 'every week' ) {
            $('.income-edit-week').show();
            $('.income-edit-twice-a-month, .income-edit-month, .income-edit-2week').hide();
        } else if ( thisValue == 'every other week' ) {
            $('.income-edit-2week').show();
            $('.income-edit-twice-a-month, .income-edit-month, .income-edit-week').hide();
            var val2aMonth = $('.income-edit-select-2week').val();
            $('.income-edit-select-2week2')
                .html('')
                .append('<option value="'+ val2aMonth +', 9/29">'+ val2aMonth +', 9/29</option>')
                .append('<option value="'+ val2aMonth +', 10/6">'+ val2aMonth +', 10/6</option>');
            var incomePrevLabel = $('.income-edit-select-2week2').prev('.select-value');
            incomePrevLabel.text( $('.income-edit-select-2week2').find('option:selected').text() );
        } else if ( thisValue == 'twice a month' ) {
            $('.income-edit-twice-a-month').show();
            $('.income-edit-week, .income-edit-month, .income-edit-2week').hide();
        } else if ( thisValue == 'once a month' ) {
            $('.income-edit-month').show();
            $('.income-edit-twice-a-month, .income-edit-week, .income-edit-2week').hide();
        }

    });

    $('#income-e-2w').bind('change', function(event) {
        var val2aMonth = $('.income-edit-select-2week').val();
        $('.income-edit-select-2week2')
            .html('')
            .append('<option value="'+ val2aMonth +', 9/29">'+ val2aMonth +', 9/29</option>')
            .append('<option value="'+ val2aMonth +', 10/6">'+ val2aMonth +', 10/6</option>');
        var incomePrevLabel = $('.income-edit-select-2week2').prev('.select-value');
        incomePrevLabel.text( $('.income-edit-select-2week2').find('option:selected').text() );
    });

    $('.income-edit-select-2week').bind('change', function(event) {
        var val2aMonth = $(this).val();
        $('.income-edit-select-2week2')
            .html('')
            .append('<option value="'+ val2aMonth +', 9/29">'+ val2aMonth +', 9/29</option>')
            .append('<option value="'+ val2aMonth +', 10/6">'+ val2aMonth +', 10/6</option>');
    });

    $("#income-edit-amount, #bills-edit-amount").maskMoney({
        prefix:'$',
        allowNegative: false,
        thousands:',',
        decimal:'.',
        //affixesStay: false,
        precision: 0
    });

    $("#income-edit-amount").bind('change', function(event) {
        console.log($(this).val());
    });

    $('.go-bills').click(function(){
         screenIncome
         .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
         screenBills
         .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
         $('<div class="graphic-separator graphic-separator-red"></div>').insertAfter(elementGraphic.find('.graphic-item:eq(24)'));
         $('.graphic-separator-red').slideDown(300);
         elementGraphic
            .find('.graphic-item')
                .each(function(index, el) {
                    if (index > 24 && index < 42) {
                        $(this).find('svg .item-fill').attr('fill','#EC293F');
                    }
                });
        elementBreadcrumbsSetup
        .find('li:eq(0)').removeClass('active-last').addClass('active-next-red')
        .next('li').addClass('active active-last active-red');
    });

    $('.go-back-income').click(function(){
        screenIncome
        .show("slide", {
            direction: "left",
            easing: "easeInOutCirc"
        }, 300);
        screenBills
        .hide("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        $('.graphic-separator-red').slideUp(300, function(){
            elementGraphic.find('.graphic-separator-red').remove();
        });
        elementGraphic
           .find('.graphic-item')
               .each(function(index, el) {
                   if (index > 24 && index < 42) {
                       $(this).find('svg .item-fill').attr('fill','#FFFFFF');
                   }
               });
        elementBreadcrumbsSetup
        .find('li:eq(0)').addClass('active-last').removeClass('active-next-red')
        .next('li').removeClass('active active-last active-red');
    });

    $('.go-bills-list').click(function(){
        screenBillsList
        .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });

    $('.go-back-bills').click(function(){
        screenBillsList
        .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });

    $(document).on('click', function(event) {
        if ( $('body').hasClass('current-bills-edit') ) {
            if (!$(event.target).is("#bills-edit-info, #bills-edit-amount, #bills-edit-date, #bills-add-date, .screen-bills-edit .alert-button-delete, .bills-edit-delete, .screen-bills-edit .alert-button-cancel, .screen-bills-add .alert-button-delete, .screen-bills-add .alert-button-cancel")) {
                screenBillsList
                .show("slide", {
                     direction: "left",
                     easing: "easeInOutCirc"
                 }, 300);
                screenBillsEdit
                .hide("slide", {
                     direction: "right",
                     easing: "easeInOutCirc"
                }, 300, function() {
                    $('body').removeClass('current-bills-edit');
                });
                screenBillsAdd
                .hide("slide", {
                     direction: "right",
                     easing: "easeInOutCirc"
                }, 300, function() {
                    $('body').removeClass('current-bills-edit');
                });
                $('.bills-link-focus:not(".bills-link-removed")').removeClass('bills-link-focus');
                alertBillsEdit
                .hide("slide", {
                     direction: "down",
                     easing: "easeInOutCirc"
                }, 300);
                screenBillsEdit
                .find('.bills-edit-delete').removeClass('bills-edit-delete-confirm');
                alertBillsAdd
                .hide("slide", {
                     direction: "down",
                     easing: "easeInOutCirc"
                }, 300);
                screenBillsAdd
                .find('.bills-edit-delete').removeClass('bills-edit-delete-confirm');
            }
        }
    });

    $('.bills-link').click(function() {
        $(this).addClass('bills-link-focus').siblings('.bills-link');
        screenBillsList
        .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
        screenBillsEdit
        .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300, function() {
            $('body').addClass('current-bills-edit');
         });
    });
    $('.screen-bills-edit .bills-edit-delete:not(".bills-edit-delete-confirm")').click(function() {
        $(this).addClass('bills-edit-delete-confirm');
        // alertBillsEdit
        // .show("slide", {
        //      direction: "down",
        //      easing: "easeInOutCirc"
        // }, 300, function() {
        //     $('.screen-bills-edit .alert-button-cancel').focus();
        // });
    });

    $('.alert-bills-edit .alert-button-cancel').click(function() {
        // alertBillsEdit
        // .hide("slide", {
        //      direction: "down",
        //      easing: "easeInOutCirc"
        // }, 300);
        screenBillsEdit
        .find('.bills-edit-delete').removeClass('bills-edit-delete-confirm');
    });

    $('.screen-bills-edit .alert-button-delete').click(function() {
        // alertBillsEdit
        // .hide("slide", {
        //      direction: "down",
        //      easing: "easeInOutCirc"
        // }, 300);
        $('.bills-link-focus').addClass('bills-link-removed').slideUp(150);
        screenBillsList
        .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
        screenBillsEdit
        .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300, function() {
            $('body').removeClass('current-bills-edit');
            screenBillsEdit
            .find('.bills-edit-delete').removeClass('bills-edit-delete-confirm');
         });
    });

    $('.bills-add-button').click(function() {
        screenBillsList
        .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        screenBillsAdd
        .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300, function(){
            $('body').addClass('current-bills-edit');
         });
    });

    $('.screen-bills-add .bills-edit-delete:not(".bills-edit-delete-confirm")').click(function() {
        $(this).addClass('bills-edit-delete-confirm');
        // alertBillsAdd
        // .show("slide", {
        //      direction: "down",
        //      easing: "easeInOutCirc"
        // }, 300, function() {
        //     $('.screen-bills-add .alert-button-cancel').focus();
        // });
    });

    $('.alert-bills-add .alert-button-cancel').click(function() {
        // alertBillsAdd
        // .hide("slide", {
        //      direction: "down",
        //      easing: "easeInOutCirc"
        // }, 300);
        screenBillsAdd
        .find('.bills-edit-delete').removeClass('bills-edit-delete-confirm');
    });

    $('.screen-bills-add .alert-button-delete').click(function() {
        // alertBillsAdd
        // .hide("slide", {
        //      direction: "down",
        //      easing: "easeInOutCirc"
        // }, 300);
        $('.bills-link-focus').addClass('bills-link-removed').slideUp(150);
        screenBillsList
        .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
        screenBillsAdd
        .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300, function() {
            $('body').removeClass('current-bills-edit');
            screenBillsAdd
            .find('.bills-edit-delete').removeClass('bills-edit-delete-confirm');
         });
    });

    $('.go-savings').click(function() {
        screenBillsList
        .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        screenBills
        .hide("slide", {
            direction: "left",
            easing: "easeInOutCirc"
        }, 300);
        screenSaving
        .show("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        $('<div class="graphic-separator graphic-separator-blue"></div>').insertAfter(elementGraphic.find('.graphic-item:eq(21)'));
        $('.graphic-separator-blue').slideDown(300);
        elementGraphic
           .find('.graphic-item')
               .each(function(index, el) {
                   if (index > 21 && index < 25) {
                       $(this).find('svg .item-fill').attr('fill','#0091ff');
                   }
               });
        elementBreadcrumbsSetup
        .find('li:eq(1)').removeClass('active-last').addClass('active-next-blue')
        .next('li').addClass('active active-last active-blue');
    });
    $('.go-back-bills-list').click(function() {
        screenBillsList
        .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        screenBills
        .show("slide", {
            direction: "left",
            easing: "easeInOutCirc"
        }, 300);
        screenSaving
        .hide("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        $('.graphic-separator-blue').slideUp(300, function(){
            elementGraphic.find('.graphic-separator-blue').remove();
        });
        elementGraphic
           .find('.graphic-item')
               .each(function(index, el) {
                   if (index > 21 && index < 25) {
                       $(this).find('svg .item-fill').attr('fill','#FFFFFF');
                   }
               });
        elementBreadcrumbsSetup
        .find('li:eq(1)').addClass('active-last').removeClass('active-next-blue')
        .next('li').removeClass('active active-last active-blue');
    });

    $('.go-spending').click(function() {
        screenSaving
        .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        screenSpending
        .show("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        elementGraphic
           .find('.graphic-item')
               .each(function(index, el) {
                   if (index > -1 && index < 22) {
                       $(this).find('svg .item-fill').attr('fill','#00BC3E');
                   }
               });
        elementBreadcrumbsSetup
        .find('li:eq(2)').removeClass('active-last').addClass('active-next-green')
        .next('li').addClass('active active-last active-green');
    });

    $('.go-back-saving').click(function() {
        screenSaving
        .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        screenSpending
        .hide("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        elementGraphic
           .find('.graphic-item')
               .each(function(index, el) {
                   if (index > -1 && index < 22) {
                       $(this).find('svg .item-fill').attr('fill','#FFFFFF');
                   }
               });
        elementBreadcrumbsSetup
        .find('li:eq(2)').addClass('active-last').removeClass('active-next-green')
        .next('li').removeClass('active active-last active-green');
    });

    $('.go-your-plan').click(function() {
        screenSpending
        .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        elementBreadcrumbsSetup
        .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        screenYourPlan
        .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
        }, 300);
        elementGraphic
        .addClass('graphic-your-plan');
    });

    $('.go-back-spending').click(function() {
        screenSpending
        .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        elementGraphic
        .removeClass('graphic-your-plan');
        elementBreadcrumbsSetup
        .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        screenYourPlan
        .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
        }, 300);
    });

    $('.go-finish').click(function() {
        //$('body').addClass('current-screen-your-money');
        screenYourPlan
        .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        elementGraphic
        .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        elementBreadcrumbsSetup
        .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        elementYourMoneyHeader
        .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
        }, 300);
        screenYourMoney
        .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
        }, 300, function() {
            yourMoneyInfoblock = $('.your-money-infoblock').innerHeight();
        });
    });

    var graphicGroupHeight = function(element) {
        $('.screen-inside-drag').swipe("disable");
        var graphicDescriptionWidth = $('body').innerWidth() - element.innerWidth() - 25;
        if ( graphicDescriptionWidth > 250 ) {
            graphicDescriptionWidth = 250;
        }
        element.find('.graphic-item-description').each(function(index, el) {
            $(this).css({
                width: graphicDescriptionWidth
            });
        });
        var graphicGroupLength = element.find('.your-money-graphic-group').length;
        if ( graphicGroupLength >= 2 ) {
            graphicGroupSpace = ($('body').innerHeight() - $('.your-money-header').innerHeight())/2;
            var graphicGroup2 = element.find('.your-money-graphic-group').eq(0);
            graphicGroup2.css({
                'margin-bottom': -graphicGroup2.innerHeight()
            });
        } else if ( graphicGroupLength == 1 ) {
            graphicGroupSpace = ($('body').innerHeight() - $('.your-money-header').innerHeight());
            var graphicGroup2 = element.find('.your-money-graphic-group').eq(0);
            graphicGroup2.css({
                'margin-bottom': graphicGroup2.innerHeight()/2
            });
        }
        element.find('.your-money-graphic-group').each(function(index, el) {
            var thisElementHeight = $(this).innerHeight();
            if (thisElementHeight >= graphicGroupSpace) {
                $(this).find('.graphic-item-description-cell').css({
                    height: graphicGroupSpace
                });
            } else {
                $(this).find('.graphic-item-description-cell').css({
                    height: thisElementHeight
                });
            }
        });
    }

    var yourMoneyGraphicElementsOffset = 5;

    var buildGraphic = function() {
        $('.your-money-graphic').each(function(index, el) {
            $(this).find('.your-money-graphic-group').each(function(index, el) {
                if (index >= 1) {
                    var prevTotalElements = $(this).prev('.your-money-graphic-group').find('.graphic-item').length;
                    var prevHiddenElements = $(this).prev('.your-money-graphic-group').find('.graphic-item-hidden').length;
                    var prevVisibleElements = prevTotalElements - prevHiddenElements -1;
                    $(this).css({
                        //left: 10,
                        bottom: $(this).prev('.your-money-graphic-group').innerHeight() - 51 + 47 - prevVisibleElements*yourMoneyGraphicElementsOffset
                    });

                } else if (index == 0) {
                    $(this).css({
                        bottom: 47
                    });
                }
                var thisLength = $(this).find('.graphic-item').length - $(this).find('.graphic-item-hidden').length - 1;
                $(this).css({
                   height: thisLength*yourMoneyGraphicElementsOffset + 51
                });
                $(this).find('.graphic-item').each(function(index, el) {
                    $(this).css({
                        bottom: yourMoneyGraphicElementsOffset*index
                    });
                });
            });

            //green
            var subgroupLength = $(this).find('.graphic-item-green-subgroup').length;
            var subgroupTotalElements = 0;
            var hiddenElementsOffset = 0;
            $(this).find('.graphic-item-green-subgroup').each(function(index, el) {
                var thisLength = $(this).find('.graphic-item').length;
                hiddenElementsOffset += $(this).find('.graphic-item-hidden').length*yourMoneyGraphicElementsOffset;
                $(this).css({
                   bottom: subgroupTotalElements -20,
                   'margin-bottom': -hiddenElementsOffset
                });
                subgroupTotalElements += $(this).find('.graphic-item').length*yourMoneyGraphicElementsOffset;
                var thisLength = $(this).find('.graphic-item').length - 1;
                $(this).find('.graphic-item').each(function(index, el) {
                    $(this).css({
                        bottom: yourMoneyGraphicElementsOffset*index
                    });
                });
                //
                $(this).css({
                    height: thisLength*yourMoneyGraphicElementsOffset + 51 + 37
                });
                $(this).addClass('subgroup-active');
                $(this).find('.graphic-item-subgroup-description-cell').css({
                    height: thisLength*yourMoneyGraphicElementsOffset + 51 + 37
                });
            });

            //others begin
            var otherGroupLength = $(this).find('.graphic-item-group').length;
            //console.log("otherGroupLength: "+otherGroupLength);
            var otherGroupTotalElements = 0;
            //console.log("otherGroupTotalElements: "+otherGroupTotalElements);
            var otherHiddenElementsOffset = 0;
            //console.log("otherHiddenElementsOffset: "+otherHiddenElementsOffset);
            $(this).find('.graphic-item-group').each(function(index, el) {
                var thisLength = $(this).find('.graphic-item').length;
                otherHiddenElementsOffset += $(this).find('.graphic-item-hidden').length*yourMoneyGraphicElementsOffset;
                //console.log('otherHiddenElementsOffset:'+ otherHiddenElementsOffset);
                $(this).css({
                   bottom: otherGroupTotalElements,
                   'margin-bottom': -otherHiddenElementsOffset
                });
                otherGroupTotalElements += $(this).find('.graphic-item').length*yourMoneyGraphicElementsOffset;
                var thisLength = $(this).find('.graphic-item').length - 1;
                $(this).find('.graphic-item').each(function(index, el) {
                    $(this).css({
                        bottom: yourMoneyGraphicElementsOffset*index
                    });
                });
                //
                $(this).css({
                    height: thisLength*yourMoneyGraphicElementsOffset + 51 + 37
                });
                //$(this).addClass('subgroup-active');
                $(this).find('.graphic-item-subgroup-description-cell').css({
                    height: thisLength*yourMoneyGraphicElementsOffset + 51 + 37
                });
            });
            //others end

        });
    }

    var greenActive = false;
    var splitGreenAction = function() {
        $('.your-money-graphic-green').addClass('active');
        $('.spending-money-back').addClass('active');

        $('.your-money-infoblock')
        .hide("slide", {
             direction: "down",
             easing: "easeInOutCirc"
        }, 300);
        screenYourMoney.css({
            top: 0
        });
        //$('.screen-your-money').removeClass('screen-overflow-hidden');

        //$('.screen-inside-drag').swipe("disable");

        $('.your-money-menu').addClass('your-money-menu-hide');
        elementYourMoneyHeader
        .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        elementSpendingMoneyHeader
        .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
        }, 300);
        var graphicOffset =  $('body').innerWidth()+10;
        $('.your-money-graphic-red, .t3-graphic-red').css({
            'transform': 'translateX('+graphicOffset+'px)'
        });
        $('.your-money-graphic-blue, .t3-graphic-blue').css({
            'transform': 'translateX('+graphicOffset+'px)'
        });
    }
    var splitGreen = function(thisFuncElement) {
        var graphicDescriptionWidth = $('body').innerWidth() - 30;
        if ( graphicDescriptionWidth > 335 ) {
            graphicDescriptionWidth = 335;
        }
        thisFuncElement.find('.graphic-item-subgroup-description').each(function(index, el) {
            $(this).addClass('visible');
            $(this).css({
                width: graphicDescriptionWidth,
                visibility: 'visible'
            });
        });

        var subgroupToday = $('.graphic-item-green-subgroup-today').index();
        thisFuncElement.find('.graphic-item-hidden').addClass('graphic-item-shown');
        var subgroups = thisFuncElement.find('.graphic-item-green-subgroup');
        var subgroupsLength = subgroups.length;
        var pullTotalTop = 0;
        var spendingMoneyHeaderHeight = elementSpendingMoneyHeader.innerHeight();
        var elementPrevHeight = 0;
        var elementTodayOffset = 0;

        subgroups.slice(subgroupToday+1, subgroupsLength).each(function(index, el) {
            pullTotalTop += parseInt($(this).css('height'));
        });

        for (var i = subgroups.length - 1; i > -1; i--) {
            var thisElement = $(subgroups[i]);
            var thisElementOffsetTop = thisElement.offset().top;
            var thisElementHeight = parseInt(thisElement.css('height'));
            var thisElementTranslateX = -thisElementOffsetTop + spendingMoneyHeaderHeight + elementPrevHeight - pullTotalTop;
            thisElement.css({
                'transform': 'translateY('+thisElementTranslateX+'px)'
            });
            elementPrevHeight += thisElementHeight;
        }

        $('.your-money-graphic-green-pull').css({
            display: 'block'
        });
    }

    var splitGreenPull = function() {
        var subgroups = $('.graphic-item-green-subgroup');
        var subgroupToday = $('.graphic-item-green-subgroup-today').index();
        var subgroupsLength = subgroups.length;
        var pullTotalTop = 0;
        var elementPrevHeight = 0;
        for (var i = subgroups.length - 1; i > -1; i--) {
            var thisElement = $(subgroups[i]);
            var thisElementHeight = parseInt(thisElement.css('height'));
            elementPrevHeight += thisElementHeight;
        }
        subgroups.slice(subgroupToday+1, subgroupsLength).each(function(index, el) {
            pullTotalTop += parseInt($(this).css('height'));
        });
        $('.your-money-graphic-green-push').css({
            height: elementPrevHeight - pullTotalTop + elementSpendingMoneyHeader.innerHeight(),
            'top': pullTotalTop
        });
        $('.your-money-graphic-green-pull').scrollTop(pullTotalTop-20);
    }

    var resizeGraphics = function() {
        var bodyInnerWidth = $('body').innerWidth();
        if ( bodyInnerWidth < 375 ) {
            yourMoneyGraphicElementsOffset = 4;
        } else {
            yourMoneyGraphicElementsOffset = 5;
        }
        buildGraphic();
        if (greenActive) {
            splitGreenPull();
        }
    }

    //init
    resizeGraphics();

    $(window).resize(function() {
        graphicGroupHeight($('.your-money-graphic:not(".your-money-graphic-green").active'));
        var graphicResizeOffset =  $('body').innerWidth()+40;
        if ( $('.your-money-graphic-red').hasClass('active') ) {
            $('.your-money-graphic-green, .your-money-column-green').css({
                'left': -graphicResizeOffset
            });
            $('.your-money-graphic-blue, .your-money-column-blue').css({
                'left': graphicResizeOffset
            });
        }
        if ( $('.your-money-graphic-green').hasClass('active') ) {
            $('.your-money-graphic-red').css({
                'transform': 'translateX('+graphicResizeOffset+'px)'
            });
            $('.your-money-graphic-blue').css({
                'transform': 'translateX('+graphicResizeOffset+'px)'
            });
        }
        if ( $('.your-money-graphic-blue').hasClass('active') ) {
            $('.your-money-graphic-green, .your-money-column-green').css({
                'left': -graphicResizeOffset
            });
            $('.your-money-graphic-red, .your-money-column-red').css({
                'left': -graphicResizeOffset
            });
        }

        resizeGraphics();

    });

    $('.your-money-graphic-blue-group-index-0, .your-money-graphic-blue-group-index-1, .your-money-graphic-blue-group-index-2').on('click', function(event) {
        event.preventDefault();
        screenYourMoney.addClass('has-active-graphic');
        $('.your-money-menu').addClass('your-money-menu-hide');
        $('.your-money-back').addClass('active');
        screenYourMoney.css({
            top: 0
        });
        var grParent = $(this).parents('.your-money-graphic');
        grParent.find('.your-money-graphic-group').each(function(index, el) {
            $(this).addClass('your-money-graphic-group-animated');
        });
        graphicGroupHeight(grParent);
        var graphicOffset =  $('body').innerWidth()+10;
        var graphicWidth =  $('.your-money-graphic').innerWidth()+10;
        $('.your-money-graphic-green, .your-money-column-green').css({
            'left': -graphicOffset,
            'margin-left': 0
        });
        $('.your-money-graphic-red, .your-money-column-red').css({
            'left': -graphicOffset,
            'margin-left': 0
        });
        $('.your-money-graphic-blue, .your-money-column-blue').addClass('active');
        $('.your-money-graphic-blue .graphic-item-description').addClass('visible');
    });

    var subgroupItemCellHeight = function(thisParent) {
        $(thisParent).find('.subgroup-spending-item').each(function(index, el) {
            thisElement = $(this);
            var thisElementHeight = thisElement.find('.subgroup-spending-graphic').innerHeight();
            thisElement.find('.spending-item-subgroup-description-cell').css({
                height: thisElementHeight
            });
            //console.log(thisElementHeight);
        });
    }

    $('.your-money-graphic-red-group-index-0, .your-money-graphic-red-group-index-1, .your-money-graphic-red-group-index-2').on('click', function(event) {
        event.preventDefault();
        if (screenYourMoney.hasClass('has-active-graphic')) {
            var thisGraphicTarget = $(this).data('target');
            if (thisGraphicTarget) {
                var thisGraphicTargetHeader = "." + thisGraphicTarget + "-header";
                var thisGraphicTargetScreen = ".screen-" + thisGraphicTarget;
                $(thisGraphicTargetScreen).addClass('is-active-graphic');
                $(thisGraphicTargetHeader)
                .show("slide", {
                     direction: "right",
                     easing: "easeInOutCirc"
                }, 300);
                $(thisGraphicTargetScreen)
                .show("slide", {
                     direction: "right",
                     easing: "easeInOutCirc"
                }, 300);
                screenYourMoney
                .hide("slide", {
                     direction: "left",
                     easing: "easeInOutCirc"
                }, 300);
                elementYourMoneyHeader
                .hide("slide", {
                     direction: "left",
                     easing: "easeInOutCirc"
                }, 300);
                subgroupItemCellHeight(thisGraphicTargetScreen);
                var offsetCardCharges = $(thisGraphicTargetScreen).find('.subgroup-spending-separate').eq(0).offset().top - 112;
                //console.log(offsetCardCharges);
                $(thisGraphicTargetScreen).scrollTop(offsetCardCharges);
            }
        }
        screenYourMoney.addClass('has-active-graphic');
        $('.your-money-menu').addClass('your-money-menu-hide');
        $('.your-money-back').addClass('active');
        screenYourMoney.css({
            top: 0
        });
        var grParent = $(this).parents('.your-money-graphic');
        grParent.find('.your-money-graphic-group').each(function(index, el) {
            $(this).addClass('your-money-graphic-group-animated');
        });
        graphicGroupHeight(grParent);
        var graphicOffset =  $('body').innerWidth()+10;
        var graphicWidth =  $('.your-money-graphic').innerWidth()+10;
        $('.your-money-graphic-green, .your-money-column-green').css({
            'left': -graphicOffset,
            'margin-left': 0
        });
        $('.your-money-graphic-blue, .your-money-column-blue').css({
            'left': graphicOffset,
            'margin-left': 0
        });
        $('.your-money-graphic-red, .your-money-column-red').addClass('active');
        $('.your-money-graphic-red .graphic-item-description').addClass('visible');
    });

    $('.credit-card-fund-back').on('click', function(event) {
        event.preventDefault();

        $('.t3-graphic-scroll').hide(1, function() {
            $('.t3-graphic-pull').css('height', 0);
            $('.t3-graphic-scroll').scrollTop(0);
            $('.t3-graphic').css({
                'transform': 'translateY(0px)'
            });
        });

        $('.card-charges-header')
        .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
        }, 300);
        var dataPrevState = $('.t3-graphic-click-area.splited').parents('.t3-graphic-wrap-group').data('t3_move_state');
        $('.t3-graphic-click-area.splited').parents('.t3-graphic-wrap-group').css({
            'transform': 'translateY('+dataPrevState+'px)'
        });
        $('.t3-graphic-click-area').removeClass('splited');
        // screenCardCharges.removeClass('is-active-graphic');
        // screenCardCharges
        // .hide("slide", {
        //      direction: "right",
        //      easing: "easeInOutCirc"
        // }, 300);
        // screenYourMoney
        // .show("slide", {
        //      direction: "left",
        //      easing: "easeInOutCirc"
        // }, 300);
        elementYourMoneyHeader
        .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300, function() {
            $('.t3-graphic-wrap-group').removeClass('t3-graphic-wrap-group-splited');
            $('.t3-graphic-wrap-group').removeClass('t3-graphic-wrap-group-splited-fake');
            $('.t3-graphic').removeClass('.fake-active');
        });
        $('.t3-graphic-wrap-group').fadeIn(300);
        $('.t3-graphic-wrap-group').removeClass('t3-graphic-wrap-group-splited');
        $('.t3-graphic-group').css({
            'transform': 'translateY('+0+'px)'
        });
    });

    $('.monthly-bills-back').on('click', function(event) {
        event.preventDefault();

        //

        $('.t3-graphic-scroll').hide(1, function() {
            $('.t3-graphic-pull').css('height', 0);
            $('.t3-graphic-scroll').scrollTop(0);
            $('.t3-graphic').css({
                'transform': 'translateY(0px)'
            });

        });


        $('.monthly-bills-header')
        .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
        }, 300);
        var dataPrevState = $('.t3-graphic-click-area.splited').parents('.t3-graphic-wrap-group').data('t3_move_state');
        $('.t3-graphic-click-area.splited').parents('.t3-graphic-wrap-group').css({
            'transform': 'translateY('+dataPrevState+'px)'
        });
        $('.t3-graphic-click-area').removeClass('splited');
        // screenMonthlyBills.removeClass('is-active-graphic');
        // screenMonthlyBills
        // .hide("slide", {
        //      direction: "right",
        //      easing: "easeInOutCirc"
        // }, 300);
        // screenYourMoney
        // .show("slide", {
        //      direction: "left",
        //      easing: "easeInOutCirc"
        // }, 300);
        $('.t3-graphic-wrap-group').addClass('t3-graphic-wrap-group-splited-fake');
        elementYourMoneyHeader
        .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300, function() {
            $('.t3-graphic-wrap-group').removeClass('t3-graphic-wrap-group-splited');
            $('.t3-graphic-wrap-group').removeClass('t3-graphic-wrap-group-splited-fake');
            $('.t3-graphic').removeClass('.fake-active');
        });
        $('.t3-graphic-wrap-group').fadeIn(300);
        $('.t3-graphic-group').css({
            'transform': 'translateY('+0+'px)'
        });

    });

    $(window).resize(function() {
        if ($('.is-active-graphic').length) {
            var isActive = '.is-active-graphic';
            subgroupItemCellHeight(isActive);
        }
    });

    //------------------------------------------------------------------------//

    $('.your-money-back').on('click', function(event) {
        event.preventDefault();
        screenYourMoney.removeClass('has-active-graphic');
        //$('.screen-inside-drag').swipe("enable");
        $('.your-money-menu').removeClass('your-money-menu-hide');
        $('.your-money-back').removeClass('active');
        $('.your-money-graphic-green, .your-money-column-green').removeAttr('style');
        $('.your-money-graphic-red, .your-money-column-red').removeAttr('style');
        $('.your-money-graphic-blue, .your-money-column-blue').removeAttr('style');
        $('body').removeClass('t3-graphic-has-splited');

        $('.t3-graphic-blue, .t3-graphic-red').css({
            'left': '',
            'margin-left': ''
        });

        $('.t3-graphic-wrap-group').data('t3_move_state', 0);

        $('.t3-graphic-click-area').addClass('fake-active');

        $('.your-money-infoblock')
        .show("slide", {
             direction: "down",
             easing: "easeInOutCirc"
        }, 300, function() {
            $('.t3-graphic-click-area').removeClass('active');
            $('.t3-graphic-click-area').removeClass('fake-active');
        });

        $('.your-money-graphic-blue, .your-money-column-blue, .t3-graphic-blue').removeClass('active');
        $('.your-money-graphic-blue .graphic-item-description').removeClass('visible');

        $('.your-money-graphic-red, .your-money-column-red, .t3-graphic-red').removeClass('active');
        $('.your-money-graphic-red .graphic-item-description').removeClass('visible');

        $('.your-money-graphic-green, .your-money-column-green').removeClass('active');
        $('.your-money-graphic-green .graphic-item-description').removeClass('visible');


        $('.t3-graphic-wrap-group').css({
            'transform': 'translateY('+0+'px)'
        });

        $('.your-money-graphic-group').each(function(index, el) {
            $(this).css({
                'margin-bottom': 0
            });
        });
    });

    $('.graphic-item-green-subgroup').each(function(index, el) {
        $(this).addClass('graphic-item-green-subgroup-animated');
    });

    $('.your-money-menu').on('click', function(event) {
        if ( $(this).hasClass('active') ) {
            $(this).removeClass('active');
            screenModalYourMenu
            .hide("slide", {
                 direction: "left",
                 easing: "easeInOutCirc"
            }, 300);
        } else {
            $(this).addClass('active');
            screenModalYourMenu
            .show("slide", {
                 direction: "left",
                 easing: "easeInOutCirc"
            }, 300);
        }
    });

    $('.your-money-graphic-green').on('click', function(event) {
        event.preventDefault();
        if (!greenActive) {
            screenYourMoney.addClass('has-active-graphic');
            splitGreenAction();
            splitGreen($('.your-money-graphic-green'));
            splitGreenPull();
        }
        greenActive = true;
    });

    $('.your-money-graphic-green-pull').on('scroll', function(event) {
        var scrollPosition = $('.your-money-graphic-green-push').offset().top;
        $('.your-money-graphic-green').css({
            'transform': 'translateY('+scrollPosition+'px)'
        });
    });

    $('.graphic-item-subgroup-description').on('click', function(event) {
        event.preventDefault();
        var thisDataScreen = $(this).data('screen');
        if ( thisDataScreen != undefined ) {
            elementSpendingMoneyHeader
            .hide("slide", {
                 direction: "left",
                 easing: "easeInOutCirc"
            }, 300);
            screenYourMoney
            .hide("slide", {
                 direction: "left",
                 easing: "easeInOutCirc"
            }, 300);
            $(thisDataScreen)
            .addClass('subgroup-spending-active')
            .show("slide", {
                 direction: "right",
                 easing: "easeInOutCirc"
            }, 300);
            $(thisDataScreen).find('.subgroup-spending-item').each(function(index, el) {
                thisElement = $(this);
                var thisElementHeight = thisElement.find('.subgroup-spending-graphic').innerHeight();
                thisElement.find('.spending-item-subgroup-description-cell').css({
                    height: thisElementHeight
                });
            });
        }
    });

    $(window).resize(function() {
        if ( $('.subgroup-spending-active').length ) {
            var activeScreen = $('.subgroup-spending-active');
            $(activeScreen).find('.subgroup-spending-item').each(function(index, el) {
                thisElement = $(this);
                var thisElementHeight = thisElement.find('.subgroup-spending-graphic').innerHeight();
                thisElement.find('.spending-item-subgroup-description-cell').css({
                    height: thisElementHeight
                });
            });
        }
    });

    $('.subgroup-spending-back').on('click', function(event) {
        event.preventDefault();
        elementSpendingMoneyHeader
        .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        screenYourMoney
        .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);
        $(this).parents('.screen')
        .removeClass('subgroup-spending-active')
        .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
        }, 300);
    });

    $('.your-money-graphic-green-pull').on('click', function(event) {
        $('.your-money-graphic-green-pull').hide();
        $(document.elementFromPoint(event.clientX, event.clientY)).trigger("click");
        $('.your-money-graphic-green-pull').show();
    });

    $('.spending-money-back').on('click', function(event) {
        event.preventDefault();
        screenYourMoney.removeClass('has-active-graphic');
        $('.your-money-graphic-green-pull').hide();
        $('.your-money-graphic-green').css({
            'transform': 'translateY(0px)'
        });
        $('.your-money-graphic-green').removeClass('active');
        $('.spending-money-back').removeClass('active');
        //$('.screen-inside-drag').swipe("enable");
        $('.your-money-menu').removeClass('your-money-menu-hide');

        $('.your-money-infoblock')
        .show("slide", {
             direction: "down",
             easing: "easeInOutCirc"
        }, 300);
        elementYourMoneyHeader
        .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300, function() {
            greenActive = false;
            backSubgroups.find('.graphic-item-subgroup-description').css({
                visibility: 'hidden'
            });
        });
        elementSpendingMoneyHeader
        .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
        }, 300);

        var backSubgroups = $('.graphic-item-green-subgroup');
        backSubgroups.css({
            'transform': 'translateY(0px)'
        });
        backSubgroups.find('.graphic-item-hidden').removeClass('graphic-item-shown');
        $('.your-money-graphic-red, .t3-graphic-red').css({
            'transform': 'translateX(0px)'
        });
        $('.your-money-graphic-blue, .t3-graphic-blue').css({
            'transform': 'translateX(0px)'
        });
        backSubgroups.find('.graphic-item-subgroup-description').removeClass('visible');
    });

    // $('').on('click', function(event) {
    //     screenDesignateTransaction
    //     .show("slide", {
    //          direction: "right",
    //          easing: "easeInOutCirc"
    //     }, 300);
    // });
    $('.hide-designate-transaction').on('click', function(event) {
        screenDesignateTransaction
        .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
        }, 300);
    });

    //------------------------------------------------------------------------//

    $('.drop-info').on('click', function(event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            var thisTargetDrop = $(this).data('info-target');
            $('[data-info-content="' + thisTargetDrop +'"]')
            .hide("fade", {
                easing: "easeInOutCirc"
            }, 300);
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            var thisTarget = $(this).data('info-target');
            $('[data-info-content="' + thisTarget +'"]')
            .show("fade", {
                easing: "easeInOutCirc"
            }, 300);
        }
    });

    $('.drop-info-block-mask').on('click', function(event) {
        event.preventDefault();
        var thisTarget = $(this).data('info-content');
        $('[data-info-content="' + thisTarget +'"]')
        .hide("fade", {
            easing: "easeInOutCirc"
        }, 300);
        $('[data-info-target="' + thisTarget +'"]').removeClass('active');
    });
    $('.drop-info-navigation a.button').on('click', function(event) {
        event.preventDefault();
        var thisTarget = $(this).parents('.drop-info-block').data('info-content');
        $('[data-info-content="' + thisTarget +'"]')
        .hide("fade", {
            easing: "easeInOutCirc"
        }, 300);
        $('[data-info-target="' + thisTarget +'"]').removeClass('active');
    });

    $('.drop-info-content').fullScreen({
        'minus': 87,
        'max': true
    });

    //------------------------------------------------------------------------//

    // $(document).on('swipeleft', function(event) {
    // });

    //------------------------------------------------------------------------//

    //validate
    $("#signin").validate({
        rules: {
            signinPhone: {
                required: true,
                rangelength: [12, 12]
            },
            signinPin: {
                required: true,
                number: true,
                rangelength: [4, 4]
            }
        },
        submitHandler: function(form) {
            //submit
        }
    });

    //------------------------------------------------------------------------//

    //validate
    $("#signup").validate({
        rules: {
            signupPhone: {
                required: true,
                rangelength: [12, 12]
            },
            signupPhoneAgain: {
                required: true,
                rangelength: [12, 12],
                equalTo: "#signupPhone"
            },
            signupPin: {
                required: true,
                number: true,
                rangelength: [4, 4]
            },
            signupPinAgain: {
                required: true,
                number: true,
                rangelength: [4, 4],
                equalTo: "#signupPin"
            }
        },
        submitHandler: function(form) {
            //submit
            screenSignUp
            .hide("slide", {
                direction: "left",
                easing: "easeInOutCirc"
            }, 300);
            screenLinkBank
            .show("slide", {
                direction: "right",
                easing: "easeInOutCirc"
            }, 300);
            elementBreadcrumbsSignUp
            .find('li:eq(0)').removeClass('active-last')
            .next('li').addClass('active active-last');
        }
    });


    //------------------------------------------------------------------------//

    $('.button-show-modal').on('click', function(event) {
        event.preventDefault();
        $.dialog({
            type : 'confirm',
            buttonText : {
                ok : 'Reduce Savings',
                cancel : 'Return on payday'
            },
            titleText : 'Oh no, you’re short $287!',
            contentHtml : '<p>You need an additional $287 to cover upcoming Bills and Spending Money.</p><p>Try reducing your Savings percentage, or come back when you get paid on Friday, June 6.</p>'
        });
    });

    // $('.go-finish').on('click', function(event) {
    //     event.preventDefault();
    //     $.dialog({
    //         type : 'alert',
    //         buttonText : {
    //             ok : 'Ok, let’s do this!'
    //         },
    //         titleText : 'Oh no, you’re short $287!',
    //         contentHtml : '<p>According to our ideal plan for you, you’re short $287 to fully cover upcoming Bills and Spending Money.</p><p>But don’t worry! Things may be a little tight until your next paycheck or two, but you’ll catch up.</p>',
    //         onClosed : function(){
    //             $.dialog({
    //                 type : 'alert',
    //                 buttonText : {
    //                     ok : 'Got it'
    //                 },
    //                 titleText : 'You’re one step ahead of us!',
    //                 contentHtml : '<p>You have more than enough to cover your Bills and Spending, good job!</p><p>We’ve started your Rainy Day Fund and Emergency Fund with the extra money.</p>'
    //             });
    //         }
    //     });
    // });



    //------------------------------------------------------------------------//

    // $('body').on('click', function(event) {
    //     event.preventDefault();
    //     $.dialog({
    //         type : 'alert',
    //         buttonText : {
    //             ok : 'Spend it',
    //             cancel : 'Save it',
    //             delete : 'Delete'
    //         },
    //         titleText : 'You just got $30 from Venmo',
    //         contentHtml : '<p>Would you like to spend it or save it?</p>'
    //     });
    // });

});//document ready

$(window).load(function() {

    //load
    var timerSize = function() {
        var timerWidth = $('body').innerWidth();
        var timerHeight = $('body').innerHeight();

        if ( timerHeight < timerWidth ) {
            $('.timer-wrapper').css({ width: timerHeight });
            $('.timer-text-cell, .loader-wrapper').css({ height: timerHeight-60 });
            $('.loader-wrapper').css({ width: timerHeight-60 });
        } else {
            $('.timer-wrapper').css({ width: timerWidth });
            $('.timer-text-cell, .loader-wrapper').css({ height: timerWidth-60 });
            $('.loader-wrapper').css({ width: timerWidth-60 });
        }
    }
    timerSize();

    $(window).resize(function() {
        timerSize();
    });

    //------------------------------------------------------------------------//

    //graphic variables
    var t3ItemOffset = 5;
    var t3ItemBase = 51 - t3ItemOffset;

    if ( $('body').innerWidth() < 375 ) {
        t3ItemOffset = 4;
        t3ItemBase = 44 - t3ItemOffset;
    }

    //------------------------------------------------------------------------//

    function buildT3Graphic(thisGraphic) {

        //set graphic size
        thisGraphic.css({
            'height': thisGraphic.data('t3_total_visible') * t3ItemOffset + t3ItemBase
        });

        var clickAreaOffset = 0;
        thisGraphic.find('.t3-graphic-wrap-group').each(function(index, el) {

            var thisT3GraphicGroup = $(this);
            thisT3GraphicGroup.css({
                'z-index': thisT3GraphicGroup.length - index
            });

            var clickAreaHeight = t3ItemBase;
            thisT3GraphicGroup.find('.t3-graphic-group').each(function(index, el) {
                clickAreaHeight += $(this).data('t3_item_visible') * t3ItemOffset;
            });
            thisT3GraphicGroup.find('.t3-graphic-click-area').css({
                'top': clickAreaOffset,
                'height': clickAreaHeight
            });
            var clickAreaDescription = clickAreaHeight;
            var clickAreaMaxheight = ( $('body').innerHeight() - $('.your-money-header').innerHeight() ) / 2;

            if ( clickAreaDescription > clickAreaMaxheight ) {
                clickAreaDescription = clickAreaMaxheight;
            }

            thisT3GraphicGroup.find('.t3-graphic-group-description-cell').css({
                'top': clickAreaOffset,
                'height': clickAreaDescription
            });
            clickAreaOffset += clickAreaHeight - t3ItemBase;
        });

        //begin graphic groups
        var thisGraphicGroups = thisGraphic.find('.t3-graphic-group');
        var thisGraphicGroupsTop = 0;

        thisGraphicGroups.each(function(index, el) {

            var thisGraphicGroup = $(this);
            thisGraphicGroup.css({
                'top': thisGraphicGroupsTop,
                'z-index': thisGraphicGroups.length - index
            });
            thisGraphicGroupsTop += thisGraphicGroup.data('t3_item_visible') * t3ItemOffset;

            //begin order graphic-item
            var thisT3GraphicItem = $(this).find('.t3-graphic-item');
            var thisT3GraphicItemLength = thisT3GraphicItem.length;
            thisT3GraphicItem.each(function(index, el) {
                $(this).css({
                    'top': index * t3ItemOffset,
                    'z-index': thisT3GraphicItemLength - index
                });
            });
            //end order graphic-item

        });
        //end graphic groups

    }

    $('.t3-graphic').each(function() {
        buildT3Graphic($(this));
    });

    //------------------------------------------------------------------------//

    //move
    function moveT3Graphic(thisClickArea) {

        $('.your-money-menu').addClass('your-money-menu-hide');

        //move blocks
        var graphicOffset =  $('body').innerWidth()+10;
        var graphicWidth =  $('.your-money-graphic').innerWidth()+10;

        $('.your-money-graphic-green, .your-money-column-green').css({
            'left': -graphicOffset,
            'margin-left': 0
        });
        $('.your-money-infoblock')
        .hide("slide", {
             direction: "down",
             easing: "easeInOutCirc"
        }, 300);
        $('.your-money-back').addClass('active');

        if ( thisClickArea.parents('.t3-graphic').hasClass('t3-graphic-blue') ) {

            $('.t3-graphic-red, .your-money-column-red').css({
                'left': -graphicOffset,
                'margin-left': 0
            });
            $('.your-money-column-blue, .t3-graphic-blue').addClass('active');

        } else if ( thisClickArea.parents('.t3-graphic').hasClass('t3-graphic-red') ) {

            $('.t3-graphic-blue, .your-money-column-blue').css({
                'left': graphicOffset,
                'margin-left': 0
            });
            $('.your-money-column-red, .t3-graphic-red').addClass('active');

        }

        //move set
        var moveThisGraphic = thisClickArea.parents('.t3-graphic');
        moveThisGraphic.find('.t3-graphic-click-area').addClass('active');
        var moveThisGroups = moveThisGraphic.find('.t3-graphic-wrap-group');
        var moveGraphicsLenght = moveThisGroups.length;

        //move dimensions
        var moveDocHeight = $('body').innerHeight();
        var moveDocHeader = $('.your-money-header').innerHeight();
        var moveDocOffset = parseInt($(moveThisGraphic).css('bottom'));

        var moveScreenCenter = Math.round((moveDocHeight - moveDocHeader) / 2);

        if ( moveGraphicsLenght > 1 ) {
            //move 2
            moveThisGroups.each(function(index, el) {

                var thisTranslateOffset = $(this).find('.t3-graphic-click-area').offset();
                var thisTranslateHeight = $(this).find('.t3-graphic-click-area').innerHeight();
                thisTranslateOffset = thisTranslateOffset.top;

                var thisFakeLineOffset = $('.t3-graphic-fake-center').offset();
                thisFakeLineOffset = thisFakeLineOffset.top;

                //console.log(thisTranslateOffset +' / '+ thisFakeLineOffset);

                var thisTranslateY = 0;
                if ( index == 0 ) {
                    thisTranslateY = thisFakeLineOffset - thisTranslateOffset - thisTranslateHeight;
                } else if ( index == 1 ) {
                    thisTranslateY = thisFakeLineOffset - thisTranslateOffset;
                }
                $(this).css({
                    'transform': 'translateY('+thisTranslateY+'px)'
                });
                $(this).data('t3_move_state', thisTranslateY);
            });
        } else {
            //move 1
            var thisTranslateOffset = moveThisGroups.offset();
            thisTranslateOffset = thisTranslateOffset.top;
            var thisTranslateHeight = parseInt(moveThisGroups.find('.t3-graphic-click-area').css('height'));
            var thisTranslateY = -moveScreenCenter + thisTranslateHeight/2 + moveDocOffset;
            moveThisGroups.css({
                'transform': 'translateY('+thisTranslateY+'px)'
            });
            moveThisGroups.data('t3_move_state', thisTranslateY);
        }

    }

    $('body').on('click', '.t3-graphic-click-area:not(.active)', function(event) {
        event.preventDefault();
        moveT3Graphic($(this));
        $('body').addClass('t3-graphic-has-splited');
    });

    //------------------------------------------------------------------------//

    //split
    function splitT3Graphic(thisSplitTarget) {
        thisSplitTarget.addClass('splited');
        var thisSplitGroup = thisSplitTarget.parents('.t3-graphic-wrap-group');
        thisSplitGroup.siblings('.t3-graphic-wrap-group').fadeOut(200);
        thisSplitGroup.addClass('t3-graphic-wrap-group-splited');
        thisSplitGraphic = thisSplitTarget.parents('.t3-graphic');
        thisSplitGraphic.addClass('t3-stop-translate');

        var thisSplitTargetHeader = thisSplitTarget.data('t3_sub_header');
        thisSplitTargetHeader = '.'+thisSplitTargetHeader;

        $(thisSplitTargetHeader).show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
        }, 300);
        $('.your-money-header').hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
        }, 300);

        var thisSplitGroupSub = thisSplitGroup.find('.t3-graphic-group');
        var thisSplitGroupSubLength = thisSplitGroupSub.length;
        var thisSplitCurrent = thisSplitGroup.find('.t3-graphic-group-current');
        var thisSplitCurrentIndex = thisSplitCurrent.index();

        //description
        thisSplitGroupSub.each(function(index, el) {
            var thisGraphicGoupDescription = $(this).data('t3_item_visible')*t3ItemOffset + $(this).data('t3_item_hidden')*t3ItemOffset + t3ItemBase;
            $(this).find('.t3-graphic-item-description-cell, .t3-graphic-item-description-area').css('height', thisGraphicGoupDescription);
        });

        //split before current
        var splitUpCount = 0;
        var splitUpGroup = thisSplitGroupSub.slice(0, thisSplitCurrentIndex);

        var maxOffset = -112+17;

        for (var i = splitUpGroup.length - 1; i > -1; i--) {
            var thisElement = $(splitUpGroup[i]);
            var splitHiddenEl = thisElement.data('t3_item_hidden');
            splitUpCount = splitUpCount - splitHiddenEl*t3ItemOffset - t3ItemBase;
            var splitPrevHasTitle = thisElement.next('.t3-graphic-group').find('.t3-graphic-separator').length;
            if ( splitPrevHasTitle ) {
                splitPrevHasTitle = 71;
            } else {
                splitPrevHasTitle = 0;
            }
            splitUpCount -= splitPrevHasTitle;
            thisElement.css({
                'transform': 'translateY('+splitUpCount+'px)'
            });

            //
            maxOffset = maxOffset + thisElement.data('t3_item_hidden')*t3ItemOffset + thisElement.data('t3_item_visible')*t3ItemOffset + splitPrevHasTitle + t3ItemBase;

            //console.log('maxOffset:'+maxOffset);

        }

        //split after current
        var splitDownCount = 0;
        thisSplitGroupSub.slice(thisSplitCurrentIndex+1, thisSplitGroupSubLength).each(function(index, el) {
            var splitHiddenEl = $(this).prev('.t3-graphic-group').data('t3_item_hidden');
            splitDownCount = splitDownCount + splitHiddenEl*t3ItemOffset + t3ItemBase;
            $(this).css({
                'transform': 'translateY('+splitDownCount+'px)'
            });
            var splitPrevHasTitle = $(this).next('.t3-graphic-group').find('.t3-graphic-separator').length;
            if ( splitPrevHasTitle ) {
                splitPrevHasTitle = 71;
            } else {
                splitPrevHasTitle = 0;
            }
            splitDownCount += splitPrevHasTitle;
        });

        //offset
        var thisSplitCurrentOffsetTop = thisSplitCurrent.offset();
        thisSplitCurrentOffsetTop = thisSplitCurrentOffsetTop.top;
        var thisSplitMoveState = thisSplitGroup.data('t3_move_state');
        var thisSplitOffsetHeader = 112;
        //console.log(thisSplitCurrentOffsetTop+'/'+thisSplitMoveState);
        thisSplitOffsetDiff = 112 + 88 - (thisSplitCurrentOffsetTop) + thisSplitMoveState;
        thisSplitGroup.css({
            'transform': 'translateY('+thisSplitOffsetDiff+'px)'
        });

        //split create scroll

        var calculateTotalHeight = 0;
        thisSplitGroupSub.each(function(index, el) {
            var preCalc = $(this).data('t3_item_visible')*t3ItemOffset + $(this).data('t3_item_hidden')*t3ItemOffset + t3ItemBase;
            calculateTotalHeight += preCalc;
        });

        var calculateSeparatorsHeight = thisSplitGroup.find('.t3-graphic-separator').length * 71 + 60 + 112;


        calculateTotalHeight += calculateSeparatorsHeight;
        //console.log('Total Height: '+calculateTotalHeight);

        maxOffset += 30;

        //maxOffset = 245;
        //console.log('maxOffset'+maxOffset);

        if ( calculateTotalHeight <= $('body').innerHeight() || calculateTotalHeight - maxOffset <= $('body').innerHeight() ) {
            calculateTotalHeight = maxOffset + $('body').innerHeight();
        }

        $('.t3-graphic-pull').css('height', calculateTotalHeight);


        $('.t3-graphic-scroll').show(0);
        $('.t3-graphic-scroll').scrollTop(maxOffset);

        var scrollValue = 0;
        $('.t3-graphic-scroll').on('scroll', function(e){
            scrollValue = -$(this).scrollTop() +maxOffset;
            $('.t3-graphic.active').css({
                'transform': 'translateY('+scrollValue+'px)'
            });
            //console.log('scrollValue'+scrollValue);
        });


        //end split create scroll

    }



    $('body').on('click', '.t3-graphic-click-area.active:not(.splited)', function(event) {
        event.preventDefault();
        splitT3Graphic($(this));
    });

    //------------------------------------------------------------------------//

    // var yourMoneyInfoblock = $('.your-money-infoblock').innerHeight();

    // $(window).resize(function() {
    //     yourMoneyInfoblock = $('.your-money-infoblock').innerHeight();
    //     screenYourMoney.css({
    //         top: 0
    //     });
    // });

    var resultDistanceDiff = 0;
    var maxSwipeFunction = function() {
        var maxSwipeHeight = 0;

        $('.your-money-graphic').each(function(index, el) {
            var newHeight = 0;
            $(this).find('.your-money-graphic-group').each(function(index, el) {
                newHeight += parseInt($(this).css('height'));
            });
            if ( maxSwipeHeight <= newHeight ) {
                maxSwipeHeight = newHeight;
            }
        });

        var t3MaxHeight = 0;
        $('.t3-graphic').each(function(index, el) {
            var t3ThisHeight = parseInt($(this).css('height'));
            if ( t3ThisHeight > t3MaxHeight ) {
                t3MaxHeight = t3ThisHeight;
            }
        });

        if ( maxSwipeHeight < t3MaxHeight ) {
            maxSwipeHeight = t3MaxHeight;
        }

        maxSwipeHeight = maxSwipeHeight + $('.your-money-header').innerHeight() + 47;

        $('.your-money-content-full-graph').css({height: maxSwipeHeight});

        var maxSwipeHeightDiff = maxSwipeHeight - $('body').innerHeight();
        if (maxSwipeHeightDiff < 0) {
            resultDistanceDiff = 0;
        } else {
            resultDistanceDiff = maxSwipeHeightDiff;
        }
    }

    maxSwipeFunction();

    $(window).resize(function() {
        maxSwipeFunction();
    });

    //var currentDistance = 0;

    $('.your-money-content').swipe( {
        swipeStatus:function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {

            if ( !$('body').hasClass('t3-graphic-has-splited') ) {

                var directionResult = false;
                if (direction == 'down') {
                    $('.your-money-content').css({
                        'transform': 'translateY('+resultDistanceDiff+'px)'
                    });
                } else if (direction == 'up') {
                    $('.your-money-content').css({
                        'transform': 'translateY(0px)'
                    });
                }

            }

        },
        threshold: 5
    });


});//window load