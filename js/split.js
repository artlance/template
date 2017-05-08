$(document).ready(function() {

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

});//document ready
