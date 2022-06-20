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
var script = {"toolTipHorizontalAlign":"center","scripts":{"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaByName":TDV.Tour.Script.getMediaByName,"getComponentByName":TDV.Tour.Script.getComponentByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showWindow":TDV.Tour.Script.showWindow,"translate":TDV.Tour.Script.translate,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"quizFinish":TDV.Tour.Script.quizFinish,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"executeJS":TDV.Tour.Script.executeJS,"getKey":TDV.Tour.Script.getKey,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"showPopupImage":TDV.Tour.Script.showPopupImage,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"isPanorama":TDV.Tour.Script.isPanorama,"init":TDV.Tour.Script.init,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getOverlays":TDV.Tour.Script.getOverlays,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"downloadFile":TDV.Tour.Script.downloadFile,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"existsKey":TDV.Tour.Script.existsKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"initQuiz":TDV.Tour.Script.initQuiz,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"mixObject":TDV.Tour.Script.mixObject,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMainViewer":TDV.Tour.Script.getMainViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"playAudioList":TDV.Tour.Script.playAudioList,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setValue":TDV.Tour.Script.setValue,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPixels":TDV.Tour.Script.getPixels,"cloneCamera":TDV.Tour.Script.cloneCamera,"shareSocial":TDV.Tour.Script.shareSocial,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setLocale":TDV.Tour.Script.setLocale,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"registerKey":TDV.Tour.Script.registerKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"textToSpeech":TDV.Tour.Script.textToSpeech,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"historyGoForward":TDV.Tour.Script.historyGoForward,"resumePlayers":TDV.Tour.Script.resumePlayers,"historyGoBack":TDV.Tour.Script.historyGoBack,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizStart":TDV.Tour.Script.quizStart,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout},"borderSize":0,"data":{"defaultLocale":"fr","name":"Player1306","locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"pitch":1,"rate":1}},"defaultVRPointer":"laser","backgroundPreloadEnabled":true,"class":"Player","scrollBarColor":"#000000","scrollBarVisible":"rollOver","gap":10,"paddingLeft":0,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"scrollBarOpacity":0.5,"width":"100%","horizontalAlign":"left","paddingRight":0,"mobileMipmappingEnabled":false,"contentOpaque":false,"backgroundColorRatios":[0],"paddingBottom":0,"verticalAlign":"top","scrollBarWidth":10,"definitions": [{"vfov":180,"class":"Panorama","thumbnailUrl":"media/panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_t.jpg","hfovMin":"135%","adjacentPanoramas":[{"distance":14.16,"yaw":154.81,"select":"this.overlay_66ECE3ED_6B4A_B083_41D3_0F0871E2CD5D.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_66ECE3ED_6B4A_B083_41D3_0F0871E2CD5D"},"backwardYaw":-32.8,"class":"AdjacentPanorama","panorama":"this.panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48"}],"hfovMax":130,"pitch":0,"id":"panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E","label":trans('panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E.label'),"frames":[{"thumbnailUrl":"media/panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_t.jpg","cube":{"class":"ImageResource","levels":[{"width":15360,"url":"media/panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2560,"colCount":30,"tags":"ondemand","rowCount":5},{"width":9216,"url":"media/panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand","rowCount":3},{"width":6144,"url":"media/panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand","rowCount":2},{"width":3072,"url":"media/panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"],"rowCount":1},{"width":12288,"url":"media/panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":6,"tags":"mobilevr2gen","rowCount":1}]},"class":"CubicPanoramaFrame"}],"overlays":["this.overlay_66ECE3ED_6B4A_B083_41D3_0F0871E2CD5D"],"partial":false,"hfov":360,"data":{"label":"Mar_0061"}},{"toolTipHorizontalAlign":"center","borderSize":0,"playbackBarHeadShadowVerticalLength":0,"firstTransitionDuration":0,"playbackBarBorderSize":0,"class":"ViewerArea","progressBarBackgroundColorDirection":"vertical","toolTipDisplayTime":600,"progressOpacity":1,"progressBarBorderColor":"#000000","toolTipFontStyle":"normal","subtitlesFontWeight":"normal","width":"100%","paddingLeft":0,"playbackBarBottom":5,"id":"MainViewer","subtitlesHorizontalAlign":"center","progressBarBackgroundColorRatios":[0],"paddingRight":0,"progressBorderRadius":0,"subtitlesFontSize":"3vmin","playbackBarProgressBackgroundColorDirection":"vertical","progressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundOpacity":1,"subtitlesVerticalAlign":"bottom","toolTipShadowHorizontalLength":0,"toolTipBorderRadius":3,"subtitlesPaddingLeft":5,"toolTipFontWeight":"normal","transitionDuration":500,"playbackBarHeadBackgroundColorDirection":"vertical","surfaceReticleSelectionColor":"#FFFFFF","toolTipBorderColor":"#767676","playbackBarHeight":10,"subtitlesBorderSize":0,"displayTooltipInSurfaceSelection":true,"subtitlesTextShadowOpacity":1,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadWidth":6,"surfaceReticleSelectionOpacity":1,"toolTipOpacity":1,"toolTipTextShadowBlurRadius":3,"playbackBarProgressBorderSize":0,"height":"100%","progressBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","subtitlesBottom":50,"progressBarBackgroundColor":["#3399FF"],"toolTipBorderSize":1,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","toolTipPaddingTop":4,"subtitlesPaddingBottom":5,"playbackBarHeadShadowBlurRadius":3,"toolTipPaddingBottom":4,"playbackBarLeft":0,"toolTipFontFamily":"Arial","playbackBarRight":0,"playbackBarHeadHeight":15,"minHeight":50,"subtitlesPaddingRight":5,"progressLeft":0,"progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderRadius":0,"subtitlesFontColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","progressBarOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowBlurRadius":0,"minWidth":100,"toolTipShadowBlurRadius":3,"subtitlesTextDecoration":"none","borderRadius":0,"toolTipShadowSpread":0,"playbackBarBackgroundOpacity":1,"toolTipFontSize":"1.11vmin","subtitlesEnabled":true,"playbackBarHeadShadowColor":"#000000","progressBottom":0,"playbackBarHeadShadowOpacity":0.7,"toolTipFontColor":"#606060","doubleClickAction":"toggle_fullscreen","subtitlesFontFamily":"Arial","paddingTop":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowVerticalLength":1,"toolTipPaddingLeft":6,"surfaceReticleOpacity":0.6,"toolTipPaddingRight":6,"toolTipShadowColor":"#333138","playbackBarHeadShadowHorizontalLength":0,"toolTipTextShadowColor":"#000000","toolTipShadowVerticalLength":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"paddingBottom":0,"progressBorderSize":0,"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","toolTipTextShadowOpacity":0,"playbackBarHeadOpacity":1,"progressBarBorderSize":0,"progressHeight":10,"subtitlesTop":0,"playbackBarHeadBorderSize":0,"transitionMode":"blending","progressBarBorderRadius":0,"playbackBarOpacity":1,"subtitlesShadow":false,"translationTransitionDuration":1000,"subtitlesPaddingTop":5,"subtitlesTextShadowColor":"#000000","displayTooltipInTouchScreens":true,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderRadius":0,"subtitlesOpacity":1,"playbackBarProgressOpacity":1,"progressBackgroundColorRatios":[0],"subtitlesGap":0,"playbackBarHeadBorderColor":"#000000","shadow":false,"propagateClick":false,"vrPointerSelectionTime":2000,"toolTipShadowOpacity":1,"subtitlesBackgroundColor":"#000000","progressRight":0,"data":{"name":"Main Viewer"},"vrPointerColor":"#FFFFFF"},{"vfov":180,"class":"Panorama","thumbnailUrl":"media/panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_t.jpg","hfovMin":"135%","adjacentPanoramas":[{"distance":19.19,"yaw":-32.8,"select":"this.overlay_66FCA3F7_6B4A_B08F_41BA_83A2BB0CEB14.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_66FCA3F7_6B4A_B08F_41BA_83A2BB0CEB14"},"backwardYaw":154.81,"class":"AdjacentPanorama","panorama":"this.panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E"}],"hfovMax":130,"pitch":0,"id":"panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48","label":trans('panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48.label'),"frames":[{"thumbnailUrl":"media/panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_t.jpg","cube":{"class":"ImageResource","levels":[{"width":15360,"url":"media/panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2560,"colCount":30,"tags":"ondemand","rowCount":5},{"width":9216,"url":"media/panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand","rowCount":3},{"width":6144,"url":"media/panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand","rowCount":2},{"width":3072,"url":"media/panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"],"rowCount":1},{"width":12288,"url":"media/panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":6,"tags":"mobilevr2gen","rowCount":1}]},"class":"CubicPanoramaFrame"}],"overlays":["this.overlay_66FCA3F7_6B4A_B08F_41BA_83A2BB0CEB14"],"partial":false,"hfov":360,"data":{"label":"Mar_0110"}},{"surfaceSelectionEnabled":false,"class":"PanoramaPlayer","zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","initialSequence":"this.sequence_67F08E15_6B45_9383_41D7_82998EC6F5E0","automaticZoomSpeed":10,"id":"panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_camera"},{"hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","initialSequence":"this.sequence_60697DED_6B46_7083_41AB_AD0FDE425458","automaticZoomSpeed":10,"id":"panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_camera"},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48_camera","media":"this.panorama_605EFEA9_6B47_9083_41C1_09EC129F9E48","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E_camera","media":"this.panorama_6500A3C1_6B45_B083_41C1_8BC3A09F544E","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_65416420_6B4A_B781_41C4_B5457AA48369"],"useHandCursor":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_8CC3A43E_804B_AB74_41D4_BF117D00EF0F","distance":100,"yaw":154.81,"class":"HotspotPanoramaOverlayImage","vfov":3.97,"data":{"label":"GoToMar_0110"},"hfov":10.5,"verticalAlign":"middle","horizontalAlign":"center","pitch":-6.83,"scaleMode":"fit_inside"}],"data":{"label":"GoToMar_0110","hasPanoramaAction":true},"id":"overlay_66ECE3ED_6B4A_B083_41D3_0F0871E2CD5D"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_64E37284_6B4B_B081_41B8_D034ED6A934B"],"useHandCursor":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_8CC2343E_804B_AB74_41DF_853537453947","distance":100,"yaw":-32.8,"class":"HotspotPanoramaOverlayImage","vfov":3.97,"data":{"label":"GoToMar_0061"},"hfov":10.5,"verticalAlign":"middle","horizontalAlign":"center","pitch":-5.05,"scaleMode":"fit_inside"}],"data":{"label":"GoToMar_0061","hasPanoramaAction":true},"id":"overlay_66FCA3F7_6B4A_B08F_41BA_83A2BB0CEB14"},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_67F08E15_6B45_9383_41D7_82998EC6F5E0","restartMovementOnUserInteraction":false},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_60697DED_6B46_7083_41AB_AD0FDE425458","restartMovementOnUserInteraction":false},{"click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_65416420_6B4A_B781_41C4_B5457AA48369"},{"rowCount":6,"class":"AnimatedImageResource","levels":[{"height":420,"width":925,"url":"media/res_640962A1_6B4E_B083_41DA_0CBA7A921935_0.png","class":"ImageResourceLevel"}],"frameCount":30,"frameDuration":41,"colCount":5,"id":"AnimatedImageResource_8CC3A43E_804B_AB74_41D4_BF117D00EF0F"},{"click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_64E37284_6B4B_B081_41B8_D034ED6A934B"},{"rowCount":6,"class":"AnimatedImageResource","levels":[{"height":420,"width":925,"url":"media/res_640962A1_6B4E_B083_41DA_0CBA7A921935_0.png","class":"ImageResourceLevel"}],"frameCount":30,"frameDuration":41,"colCount":5,"id":"AnimatedImageResource_8CC2343E_804B_AB74_41DF_853537453947"}],"backgroundColorDirection":"vertical","children":["this.MainViewer"],"height":"100%","backgroundOpacity":1,"scrollBarMargin":2,"layout":"absolute","overflow":"hidden","backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"mediaActivationMode":"window","downloadEnabled":false,"desktopMipmappingEnabled":false,"vrPolyfillScale":0.75,"start":"this.init()","minHeight":0,"minWidth":0,"shadow":false,"propagateClick":false,"borderRadius":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.9.js.map
})();
//Generated with v2022.1.9, Mon Jun 20 2022