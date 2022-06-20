(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"start":"this.init()","borderSize":0,"data":{"textToSpeechConfig":{"rate":1,"volume":1,"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false},"name":"Player1306","locales":{"fr":"locale/fr.txt"},"defaultLocale":"fr"},"backgroundPreloadEnabled":true,"desktopMipmappingEnabled":false,"definitions": [{"hoverFactor":0,"automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_60697DED_6B46_7083_41AB_AD0FDE425458","class":"PanoramaCamera","id":"panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_camera"},{"hfovMin":"135%","adjacentPanoramas":[{"distance":19.19,"yaw":-32.8,"select":"this.overlay_66FCA3F7_6B4A_B08F_41BA_83A2BB0CEB14.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_66FCA3F7_6B4A_B08F_41BA_83A2BB0CEB14"},"backwardYaw":154.81,"class":"AdjacentPanorama","panorama":"this.panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E"}],"id":"panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48","hfovMax":130,"pitch":0,"label":trans('panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48.label'),"class":"Panorama","thumbnailUrl":"media/panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_t.jpg","partial":false,"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":15360,"url":"media/panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_0/{face}/0/{row}_{column}.jpg","colCount":30,"height":2560,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":5},{"width":9216,"url":"media/panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_0/{face}/1/{row}_{column}.jpg","colCount":18,"height":1536,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":3},{"width":6144,"url":"media/panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_0/{face}/2/{row}_{column}.jpg","colCount":12,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":3072,"url":"media/panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_0/{face}/3/{row}_{column}.jpg","colCount":6,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1},{"width":12288,"url":"media/panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_0/{face}/vr2gen/0.jpg","colCount":6,"height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","rowCount":1}]},"thumbnailUrl":"media/panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_t.jpg"}],"overlays":["this.overlay_66FCA3F7_6B4A_B08F_41BA_83A2BB0CEB14"],"hfov":360,"vfov":180,"data":{"label":"Mar_0110"}},{"hfovMin":"135%","adjacentPanoramas":[{"distance":14.16,"yaw":154.81,"select":"this.overlay_66ECE3ED_6B4A_B083_41D3_0F0871E2CD5D.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_66ECE3ED_6B4A_B083_41D3_0F0871E2CD5D"},"backwardYaw":-32.8,"class":"AdjacentPanorama","panorama":"this.panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48"}],"id":"panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E","hfovMax":130,"pitch":0,"label":trans('panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E.label'),"class":"Panorama","thumbnailUrl":"media/panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_t.jpg","partial":false,"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":15360,"url":"media/panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_0/{face}/0/{row}_{column}.jpg","colCount":30,"height":2560,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":5},{"width":9216,"url":"media/panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_0/{face}/1/{row}_{column}.jpg","colCount":18,"height":1536,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":3},{"width":6144,"url":"media/panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_0/{face}/2/{row}_{column}.jpg","colCount":12,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":3072,"url":"media/panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_0/{face}/3/{row}_{column}.jpg","colCount":6,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1},{"width":12288,"url":"media/panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_0/{face}/vr2gen/0.jpg","colCount":6,"height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","rowCount":1}]},"thumbnailUrl":"media/panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_t.jpg"}],"overlays":["this.overlay_66ECE3ED_6B4A_B083_41D3_0F0871E2CD5D"],"hfov":360,"vfov":180,"data":{"label":"Mar_0061"}},{"hoverFactor":0,"automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_67F08E15_6B45_9383_41D7_82998EC6F5E0","class":"PanoramaCamera","id":"panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_camera"},{"touchControlMode":"drag_rotation","class":"PanoramaPlayer","surfaceSelectionEnabled":false,"zoomEnabled":true,"viewerArea":"this.MainViewer","displayPlaybackBar":true,"arrowKeysAction":"translate","aaEnabled":true,"mouseControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"id":"MainViewerPanoramaPlayer"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_camera","media":"this.panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_camera","media":"this.panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"toolTipShadowOpacity":1,"borderSize":0,"subtitlesTop":0,"progressBorderColor":"#000000","playbackBarHeight":10,"playbackBarHeadBackgroundColorDirection":"vertical","width":"100%","paddingLeft":0,"playbackBarHeadWidth":6,"toolTipFontSize":"1.11vmin","id":"MainViewer","progressBarBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","playbackBarProgressBorderSize":0,"playbackBarHeadShadowBlurRadius":3,"paddingRight":0,"playbackBarBackgroundColorDirection":"vertical","displayTooltipInSurfaceSelection":true,"progressBackgroundColor":["#FFFFFF"],"subtitlesFontWeight":"normal","toolTipBackgroundColor":"#F6F6F6","playbackBarRight":0,"toolTipTextShadowBlurRadius":3,"playbackBarProgressBorderRadius":0,"progressBarOpacity":1,"playbackBarBackgroundOpacity":1,"transitionDuration":500,"toolTipOpacity":1,"playbackBarLeft":0,"playbackBarProgressBackgroundColor":["#3399FF"],"height":"100%","progressBottom":0,"playbackBarHeadHeight":15,"toolTipShadowColor":"#333138","subtitlesTextShadowColor":"#000000","progressHeight":10,"doubleClickAction":"toggle_fullscreen","playbackBarHeadShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","progressBorderSize":0,"toolTipPaddingTop":4,"progressBarBorderRadius":0,"playbackBarHeadShadowOpacity":0.7,"subtitlesPaddingTop":5,"subtitlesShadow":false,"toolTipShadowBlurRadius":3,"toolTipBorderSize":1,"progressBarBorderSize":0,"toolTipTextShadowColor":"#000000","minHeight":50,"propagateClick":false,"playbackBarHeadBackgroundColorRatios":[0,1],"minWidth":100,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBorderSize":0,"subtitlesPaddingLeft":5,"class":"ViewerArea","borderRadius":0,"playbackBarHeadShadow":true,"playbackBarBorderColor":"#FFFFFF","subtitlesOpacity":1,"playbackBarHeadOpacity":1,"playbackBarBorderRadius":0,"toolTipFontStyle":"normal","toolTipPaddingLeft":6,"playbackBarProgressBorderColor":"#000000","subtitlesBackgroundColor":"#000000","toolTipBorderRadius":3,"subtitlesGap":0,"subtitlesVerticalAlign":"bottom","playbackBarHeadShadowVerticalLength":0,"progressBackgroundColorRatios":[0],"subtitlesBottom":50,"progressOpacity":1,"subtitlesHorizontalAlign":"center","progressRight":0,"paddingTop":0,"subtitlesFontSize":"3vmin","toolTipShadowVerticalLength":0,"playbackBarOpacity":1,"paddingBottom":0,"translationTransitionDuration":1000,"toolTipShadowHorizontalLength":0,"toolTipFontColor":"#606060","progressBorderRadius":0,"subtitlesPaddingBottom":5,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarProgressOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"subtitlesBorderSize":0,"subtitlesTextShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"toolTipPaddingBottom":4,"toolTipTextShadowOpacity":0,"surfaceReticleOpacity":0.6,"surfaceReticleSelectionOpacity":1,"vrPointerSelectionTime":2000,"progressBarBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","subtitlesBorderColor":"#FFFFFF","playbackBarBottom":5,"progressBarBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"firstTransitionDuration":0,"toolTipShadowSpread":0,"playbackBarBorderSize":0,"subtitlesTextShadowVerticalLength":1,"subtitlesEnabled":true,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesTextDecoration":"none","toolTipFontWeight":"normal","progressBarBackgroundColorRatios":[0],"transitionMode":"blending","displayTooltipInTouchScreens":true,"progressBackgroundColorDirection":"vertical","toolTipDisplayTime":600,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","progressLeft":0,"subtitlesFontFamily":"Arial","vrPointerColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontColor":"#FFFFFF","subtitlesPaddingRight":5,"shadow":false,"progressBackgroundOpacity":1,"toolTipFontFamily":"Arial","toolTipPaddingRight":6,"data":{"name":"Main Viewer"}},{"restartMovementOnUserInteraction":false,"id":"sequence_60697DED_6B46_7083_41AB_AD0FDE425458","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}]},{"areas":["this.HotspotPanoramaOverlayArea_64E37284_6B4B_B081_41B8_D034ED6A934B"],"enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToMar_0061"},"useHandCursor":true,"maps":[],"class":"HotspotPanoramaOverlay","items":[{"distance":100,"yaw":-32.8,"class":"HotspotPanoramaOverlayImage","hfov":10.5,"vfov":3.97,"data":{"label":"GoToMar_0061"},"verticalAlign":"middle","image":"this.AnimatedImageResource_64D94E2E_6B4D_9380_416D_345F2AC88DEB","horizontalAlign":"center","pitch":-5.05,"scaleMode":"fit_inside"}],"id":"overlay_66FCA3F7_6B4A_B08F_41BA_83A2BB0CEB14"},{"areas":["this.HotspotPanoramaOverlayArea_65416420_6B4A_B781_41C4_B5457AA48369"],"enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToMar_0110"},"useHandCursor":true,"maps":[],"class":"HotspotPanoramaOverlay","items":[{"distance":100,"yaw":154.81,"class":"HotspotPanoramaOverlayImage","hfov":10.5,"vfov":3.97,"data":{"label":"GoToMar_0110"},"verticalAlign":"middle","image":"this.AnimatedImageResource_64D88E36_6B4D_9381_41AE_C23F11511D14","horizontalAlign":"center","pitch":-6.83,"scaleMode":"fit_inside"}],"id":"overlay_66ECE3ED_6B4A_B083_41D3_0F0871E2CD5D"},{"restartMovementOnUserInteraction":false,"id":"sequence_67F08E15_6B45_9383_41D7_82998EC6F5E0","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}]},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_64E37284_6B4B_B081_41B8_D034ED6A934B"},{"levels":[{"height":420,"width":925,"class":"ImageResourceLevel","url":"media/res_640962A1_6B4E_B083_41DA_0CBA7A921935_0.png"}],"frameDuration":41,"colCount":5,"frameCount":30,"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_64D94E2E_6B4D_9380_416D_345F2AC88DEB"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_65416420_6B4A_B781_41C4_B5457AA48369"},{"levels":[{"height":420,"width":925,"class":"ImageResourceLevel","url":"media/res_640962A1_6B4E_B083_41DA_0CBA7A921935_0.png"}],"frameDuration":41,"colCount":5,"frameCount":30,"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_64D88E36_6B4D_9381_41AE_C23F11511D14"}],"downloadEnabled":false,"gap":10,"defaultMenu":["fullscreen","mute","rotation"],"width":"100%","backgroundColorRatios":[0],"scrollBarOpacity":0.5,"overflow":"hidden","paddingLeft":0,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"left","scrollBarWidth":10,"backgroundOpacity":1,"mediaActivationMode":"window","defaultVRPointer":"laser","scrollBarColor":"#000000","children":["this.MainViewer"],"height":"100%","verticalAlign":"top","backgroundColor":["#FFFFFF"],"mobileMipmappingEnabled":false,"contentOpaque":false,"vrPolyfillScale":0.75,"layout":"absolute","scripts":{"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"translate":TDV.Tour.Script.translate,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"textToSpeech":TDV.Tour.Script.textToSpeech,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"getKey":TDV.Tour.Script.getKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"initAnalytics":TDV.Tour.Script.initAnalytics,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"openLink":TDV.Tour.Script.openLink,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"clone":TDV.Tour.Script.clone,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getComponentByName":TDV.Tour.Script.getComponentByName,"init":TDV.Tour.Script.init,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"mixObject":TDV.Tour.Script.mixObject,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"downloadFile":TDV.Tour.Script.downloadFile,"cloneCamera":TDV.Tour.Script.cloneCamera,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setMapLocation":TDV.Tour.Script.setMapLocation,"historyGoBack":TDV.Tour.Script.historyGoBack,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getOverlays":TDV.Tour.Script.getOverlays,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizStart":TDV.Tour.Script.quizStart,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"showWindow":TDV.Tour.Script.showWindow,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPixels":TDV.Tour.Script.getPixels,"setValue":TDV.Tour.Script.setValue,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"executeJS":TDV.Tour.Script.executeJS,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setLocale":TDV.Tour.Script.setLocale,"playAudioList":TDV.Tour.Script.playAudioList,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizFinish":TDV.Tour.Script.quizFinish,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"registerKey":TDV.Tour.Script.registerKey,"isPanorama":TDV.Tour.Script.isPanorama,"initQuiz":TDV.Tour.Script.initQuiz,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"existsKey":TDV.Tour.Script.existsKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay},"toolTipHorizontalAlign":"center","scrollBarVisible":"rollOver","scrollBarMargin":2,"minHeight":0,"class":"Player","propagateClick":false,"borderRadius":0,"minWidth":0,"shadow":false,"backgroundColorDirection":"vertical"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.9.js.map
})();
//Generated with v2022.1.9, Thu Jun 16 2022