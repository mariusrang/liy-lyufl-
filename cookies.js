// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
// You can also disable auto-loading of the consent notice by adding
// data-no-auto-load=true to the script tag.
// Boucle pour mettre dans un div tous les boutons de partage facebook du header et du footer
(function() {
    var btn_facebook = document.querySelectorAll('.btn-partage a[href^="https://www.facebook.com/share.php"],a[href*=".facebook.com/"]');
    if (typeof(btn_facebook) != 'undefined' && btn_facebook != null)
    {
        for (var i = btn_facebook.length - 1; i >= 0; i--) {
            //btn_facebook[i].setAttribute('data-name',"facebook");
            //btn_facebook[i].wrap('<span></span>');

            var wrapper = document.createElement('div');
            wrapper.setAttribute('data-name',"facebook");
            wrapper.setAttribute('style',"display:inline;");
            // insert wrapper before el in the DOM tree
            btn_facebook[i].parentNode.insertBefore(wrapper, btn_facebook[i]);
            wrapper.appendChild(btn_facebook[i]);
        }
    }
})();
// Boucle pour mettre dans un div tous les boutons de partage twitter du header et du footer
(function() {
    var btn_twitter = document.querySelectorAll('.btn-partage a[href^="https://twitter.com/home?status"],a[href*="twitter.com/"]');
    if (typeof(btn_twitter) != 'undefined' && btn_twitter != null)
    {
        for (var i = btn_twitter.length - 1; i >= 0; i--) {
            //btn_twitter[i].setAttribute('data-name',"twitter");
            //btn_twitter[i].wrap('<span></span>');

            var wrapper = document.createElement('div');
            wrapper.setAttribute('data-name',"twitter");
            wrapper.setAttribute('style',"display:inline;");
            // insert wrapper before el in the DOM tree
            btn_twitter[i].parentNode.insertBefore(wrapper, btn_twitter[i]);
            wrapper.appendChild(btn_twitter[i]);
        }
    }
})();
// Boucle pour mettre dans un div tous les boutons de partage instagram du header et du footer
(function() {
    var btn_instagram = document.querySelectorAll('a[href*="instagram.com"]');
    if (typeof(btn_instagram) != 'undefined' && btn_instagram != null)
    {
        for (var i = btn_instagram.length - 1; i >= 0; i--) {

            var wrapper = document.createElement('div');
            wrapper.setAttribute('data-name',"instagram");
            wrapper.setAttribute('style',"display:inline;");
            // insert wrapper before el in the DOM tree
            btn_instagram[i].parentNode.insertBefore(wrapper, btn_instagram[i]);
            wrapper.appendChild(btn_instagram[i]);
        }
    }
})();
// Boucle pour mettre dans un div tous les boutons de partage linkedin du header et du footer
(function() {
    var btn_linkedin = document.querySelectorAll('a[href*="linkedin.com/"]');
    if (typeof(btn_linkedin) != 'undefined' && btn_linkedin != null)
    {
        for (var i = btn_linkedin.length - 1; i >= 0; i--) {


            var wrapper = document.createElement('div');
            wrapper.setAttribute('data-name',"linkedin");
            wrapper.setAttribute('style',"display:inline;");
            // insert wrapper before el in the DOM tree
            btn_linkedin[i].parentNode.insertBefore(wrapper, btn_linkedin[i]);
            wrapper.appendChild(btn_linkedin[i]);
        }
    }
})();

// Boucle pour rajouter un attribut sur tous les formulaires comprenant un captcha
(function() {
    var forms = document.querySelectorAll('form[id^="contact"]');
    if (typeof(forms) != 'undefined' && forms != null)
    {
        for (var i = forms.length - 1; i >= 0; i--) {
            //Using document.body.contains.
            if(forms[i].contains(document.querySelector('.g-recaptcha'))){
                var wrapper = document.createElement('div');
                wrapper.setAttribute('data-name',"recaptcha");
                
                forms[i].parentNode.insertBefore(wrapper, forms[i]);
                wrapper.appendChild(forms[i]);
            }

               
            
        }
    }
})();
(function() {
    var $mentionsLien= document.querySelector("footer ul li a[href*='/mentions-legales'],.menu_footer li a[href*='/mentions-legales'],.menu_footer li a[href*='/legal-notice']").closest('li');
	
    if (typeof($mentionsLien) != 'undefined' && $mentionsLien != null)
    {
		 
		
        var $button = $mentionsLien.cloneNode(true);
        var $buttonLien = $button.querySelector('a');
		$button.classList.remove("active");
        $buttonLien.setAttribute( "title","Gérer mes cookies" );
        $buttonLien.setAttribute( "href","javascript:void(0)" );
        $buttonLien.setAttribute( "onclick","klaro.show()" );
        $buttonLien.innerText = "Gérer mes cookies" ;
		if($mentionsLien.textContent.indexOf('Legal') !== -1) {
			$buttonLien.setAttribute( "title","Manage cookies" );
			$buttonLien.innerText = "Manage cookies" ;
		}
		
        $buttonLien.setAttribute( "id","cookiebutton" );
        $mentionsLien.parentNode.insertBefore($button, $mentionsLien.nextSibling);
		
    }
})();


(function() {
    var addthis_toolbox = document.querySelectorAll('.addthis_toolbox');
     if (typeof(addthis_toolbox) != 'undefined' && addthis_toolbox != null)
    {
        for (var i = addthis_toolbox.length - 1; i >= 0; i--) {


            var wrapper = document.createElement('div');
            wrapper.setAttribute('data-name',"addthis");
            wrapper.setAttribute('style',"display:inline;");
            // insert wrapper before el in the DOM tree
            addthis_toolbox[i].parentNode.insertBefore(wrapper, addthis_toolbox[i]);
            wrapper.appendChild(addthis_toolbox[i]);
        }
    }
})();

(function() {
    var youtube_embed_video = document.querySelectorAll('iframe[src*="//www.youtube.com"]');
  
     if (typeof(youtube_embed_video) != 'undefined' && youtube_embed_video != null)
    {
        for (var i = youtube_embed_video.length - 1; i >= 0; i--) {
            youtube_embed_video[i].setAttribute('data-name',"youtube");
            youtube_embed_video[i].setAttribute('data-src',youtube_embed_video[i].getAttribute('src'));
            youtube_embed_video[i].setAttribute('src','');

        }
    }
    
})();
(function() {
    var facebook_embed_video = document.querySelectorAll('iframe[src*="//www.facebook.com"]');
  
     if (typeof(facebook_embed_video) != 'undefined' && facebook_embed_video != null)
    {
        for (var i = facebook_embed_video.length - 1; i >= 0; i--) {
            facebook_embed_video[i].setAttribute('data-name',"facebook");
            facebook_embed_video[i].setAttribute('data-src',facebook_embed_video[i].getAttribute('src'));
            facebook_embed_video[i].setAttribute('src','');

        }
    }
    
})();
(function() {
    var vimeo_embed_video = document.querySelectorAll('iframe[src^="https://player.vimeo.com/"]');
  
     if (typeof(vimeo_embed_video) != 'undefined' && vimeo_embed_video != null)
    {
        for (var i = vimeo_embed_video.length - 1; i >= 0; i--) {
            vimeo_embed_video[i].setAttribute('data-name',"vimeo");
            vimeo_embed_video[i].setAttribute('data-src',vimeo_embed_video[i].getAttribute('src'));
            vimeo_embed_video[i].setAttribute('src','');

        }
    }
    
})();


window.onload = function ()
                    {
    var btn_facebook = document.querySelectorAll('div.fb_iframe_widget');
    
    for (var i = btn_facebook.length - 1; i >= 0; i--) {
        btn_facebook[i].setAttribute('data-name',"facebook");
    }




    
    /*
    var klaro_placeholder = document.querySelectorAll('.cm-as-context-notice');
    for (var i = klaro_placeholder.length - 1; i >= 0; i--) {
        klaro_placeholder[i].setAttribute("style","display:none;");
    }
    */
};



    var klaroConfig = {
    // With the 0.7.0 release we introduce a 'version' paramter that will make
    // if easier for us to keep configuration files backwards-compatible in the future.
    version: 1,

    testing:false,
    // You can customize the ID of the DIV element that Klaro will create
    // when starting up. If undefined, Klaro will use 'klaro'.
    elementID: 'klaro',

    // Setting this to true will render the descriptions of the consent
    // modal and consent notice are HTML. Use with care.
    htmlTexts: true,

    // Setting 'embedded' to true will render the Klaro modal and notice without
    // the modal background, allowing you to e.g. embed them into a specific element
    // of your website, such as your privacy notice.
    embedded: false,

    // You can group services by their purpose in the modal. This is advisable
    // if you have a large number of services. Users can then enable or disable
    // entire groups of services instead of having to enable or disable every service.
    groupByPurpose: true,

    // How Klaro should store the user's preferences. It can be either 'cookie'
    // (the default) or 'localStorage'.
    storageMethod: 'cookie',

    // You can customize the name of the cookie that Klaro uses for storing
    // user consent decisions. If undefined, Klaro will use 'klaro'.
    cookieName: 'klaro',

    // You can also set a custom expiration time for the Klaro cookie.
    // By default, it will expire after 120 days.
    cookieExpiresAfterDays: 365,

    // You can change to cookie domain for the consent manager itself.
    // Use this if you want to get consent once for multiple matching domains.
    // If undefined, Klaro will use the current domain.
    //cookieDomain: '.github.com',

    // Defines the default state for services (true=enabled by default).
    //default: true,

    // If "mustConsent" is set to true, Klaro will directly display the consent
    // manager modal and not allow the user to close it before having actively
    // consented or declines the use of third-party services.
    mustConsent: false,

    // Show "accept all" to accept all services instead of "ok" that only accepts
    // required and "default: true" services
    acceptAll: true,

    // replace "decline" with cookie manager modal
    hideDeclineAll: false,

    // hide "learnMore" link
    hideLearnMore: false,

    // show cookie notice as modal
    noticeAsModal: false,

    // You can also remove the 'Realized with Klaro!' text in the consent modal.
    // Please don't do this! We provide Klaro as a free open source tool.
    // Placing a link to our website helps us spread the word about it,
    // which ultimately enables us to make Klaro! better for everyone.
    // So please be fair and keep the link enabled. Thanks :)
    //disablePoweredBy: true,

    // you can specify an additional class (or classes) that will be added to the Klaro `div`
    //additionalClass: 'my-klaro',

    // You can define the UI language directly here. If undefined, Klaro will
    // use the value given in the global "lang" variable. If that does
    // not exist, it will use the value given in the "lang" attribute of your
    // HTML tag. If that also doesn't exist, it will use 'en'.
    lang: 'fr',

    // You can overwrite existing translations and add translations for your
    // service descriptions and purposes. See `src/translations/` for a full
    // list of translations that can be overwritten:
    // https://github.com/KIProtect/klaro/tree/master/src/translations

    // Example config that shows how to overwrite translations:
    // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
    translations: {
        // translationsed defined under the 'zz' language code act as default
        // translations.
        zz: {
            decline: "Non merci",
            /*acceptSelected: "Enregistrer mes choix",*/
            acceptSelected: "Enregistrer mes choix",
            acceptAll: "Ok pour moi",
            ok: "OK pour moi",
            learnMore: "Je choisis",
            privacyPolicyUrl: '/#privacy',
            consentModal: {
                description:
                    'Choisissez-vous-même les cookies que vous souhaitez autoriser ou refuser :',
            }
        

        },
        
        fr: {
            decline: "Non merci",
            acceptSelected: "Enregistrer mes choix",
            acceptAll: "Ok pour moi",
            ok: "OK pour moi",
            learnMore: "Je choisis",
            
            privacyPolicy:{

                name:"politique de confidentialité",
                /*text:"Laissez-vous nos cookies vous accompagner ? Pour en savoir plus, veuillez lire notre {privacyPolicy}."*/
                text:" "
            },
            privacyPolicyUrl: '/mentions-legales.html#cookies',
            consentModal: {
                /*text:"grand popup*/
                title: 'Un petit cookie pour la route ?', 
               description:
                    'Choisissez-vous même les cookies que vous souhaitez autoriser ou refuser :',
            },
            consentNotice:{
                /*text:"petit popup
                 title: 'Un petit cookie pour la route ?',*/
                learnMore: "Je choisis",
                description: "<h2>Un petit cookie pour la route ?</h2>Ce site enregistre des cookies pour vous offrir la meilleure expérience de navigation possible.<br><br>Si vous ne souhaitez pas autoriser certains d'entre eux à faire partie du voyage, vous pouvez faire votre choix.<br><br> Laissez-vous nos cookies vous accompagner ?",
            },

            inlineTracker: {
                description: 'Example of an inline tracking script',
            },
            externalTracker: {
                description: 'Example of an external tracking script',
            },
            adsense: {
                description: 'Displaying of advertisements (just an example)',
                title: 'Google Adsense Advertisement',
            },
           /* matomo: {
                description: 'Collecting of visitor statistics',
            },*/
            camera: {
                description:
                    'A surveillance camera (just an example for an IMG tag)',
            },
            cloudflare: {
                description: 'Protection against DDoS attacks',
            },
            awstats: {
                description: 'Récupération des statistiques utilisateurs',
            },
            intercom: {
                description:
                    'Chat widget & collecting of visitor statistics (just an example)',
            },
            mouseflow: {
                description: 'Real-Time user analytics (just an example)',
            },
            googleFonts: {
                description: 'Web fonts hosted by Google',
            },
            // Liste descriptions
            applimobile: {
                description: 'Sur smartphone, permet de suggérer le téléchargement de l’application mobile.',
            },
            catalogue: {
                description: 'Enregistrement d’une wishlist afin de pouvoir retrouver facilement ses produits préférés lors de sa prochaine visite sur le site',
            },
            langue: {
                description: 'Possibilité de choisir la langue dans laquelle consulter le site.',
            },
            purechat: {
                description: 'Outil de chat pour la discussion instantanée avec nos services.',
            },
            recaptcha: {
                description: 'Ce contrôleur permet de sécuriser notre formulaire de contact contre les robots spammeurs.',
            },
            awstat: {
                description: 'Statistiques de visites et de provenance',
            },
            ganalytics: {
                description: 'Analyse du parcours utilisateur sur le site et métriques de visite',
            },
            gadwords: {
                description: 'Suivi des campagnes Google ADS',
            },
            youfindme: {
                description: 'Bandeau renvoyant vers la fiche annuaire Youfindme',
            },
            facebook: {
                description: 'Permet l’affichage du bouton de partage et les intégrations de Facebook',
            },
            twitter: {
                description: 'Permet l’affichage du bouton de partage et les intégrations de Twitter',
            },
            linkedin: {
                description: 'Permet l’affichage du bouton de partage et les intégrations de Linkedin',
            },
            instagram: {
                description: 'Permet l’affichage du bouton de partage et les intégrations d\'Instagram ',
            },
            addthis: {
                description: 'Agrégateur de partage sur les réseaux sociaux.',
            },
            youtube: {
                description: 'Intégration de vidéo Youtube sur le site',
            },
            vimeo: {
                description: 'Intégration de vidéo Viméo sur le site',
            },
            daylimotion: {
                description: 'Intégration de vidéo DailyMotion sur le site',
            },
			panier: {
                description: 'Identifiant du panier',
            },
			vurecemment: {
                description: 'Enregistrement des derniers articles consultés',
            },
			hdmedia: {
                description: 'Visite virtuelle 360° HD Media',
            },
			akamaihd: {
                description: 'Intégration de vidéo externe sur le site',
            },
			plusquepro: {
                description: 'Affichage des avis clients',
            },
			
            purposes: {
                experiences: 'Expérience utilisateur',
                statistiques : 'Statistiques & Audience',
                reseaux: 'Réseaux sociaux & Partenaires',
                
            },
            contextualConsent: {
                acceptAlways: "Toujours afficher",
                acceptOnce: "Afficher seulement maintenant",
                description: 
                 "Cet élément utilise des cookies et requiert votre consentement pour être affiché."
            },
            callback: function (consent, app) {
                console.log("User consent for app " + app.name + ": consent=" + consent);
                location.reload();
            },
        },
    },

    // This is a list of third-party services that Klaro will manage for you.
    services: [
    
        
        
        
        /*{
            name: 'purechat',
            default: true,
            title: 'PureChat',
            purposes: ['experiences'],
            cookies: ['OptanonConsent','_PCCID','_PCCSID_26281','thirdPartyCookiesEnabled'],
            
        },*/
        

        //-----------------------------------------
        
        
        
        /*{
            name: 'bing',
            default: true,
            title: 'Bing',
            purposes: ['analyse_performance'],
            cookies: ['MUID', 'MUIDB'],
            optOut: false,
        },*/

        //-----------------------------------------

        
        /*{
            // V
            name: 'catalogue',
            default: true,
            required: true,
            title: 'Catalogue',
            purposes: ['experiences'],
            cookies: ['catalogue_wishlist'],
            
        },*/
        /*{
            name: 'gtagmanager',
            default: true,
            title: 'Google Analytics',
            purposes: ['analyse_performance'],
            cookies: ['_utma','_utmb','_utmc','_utmt_global','_utmt_local','_utmt_regional','_utmz','_ga','_gid','_gat','_gat_gtag_UA_*_1','_gac_UA-*','_uetvid_exp','_uetvid','_pin_unauth','_uetsid','_uetsid_exp','gtm4wp_orderid_cookie_expir','gtm4wp_last_weatherstatus','gtm4wp_orderid_tracked','uslk_inital_url','uslk_referrer','uslk_operator_binding','uslk_drag','uslk_page_impressions','uslk_in_service_time','uslk_s','uslk_e','uslk_um_*app_key','CookiePreferences-*','calltrk_session_id','calltrk-calltrk_landing','calltrk-_ga','calltrk-calltrk_session_id','calltrk-calltrk_referrer','calltrk-*-assigns-*','cto_bundle','cto_lwid','_gcl_au','_gat_UA-*','google_adsense_settings','ads/ga-audiences','google_pub_config','google_ama_config','google_ama_settings','__gads','google_pem_mod','google_experiment_mod*','___gads','goog_pem_mod','session_depth','_gac_*','id','CONSENT','SNID','APISID','SSID','HSID','SID','OGPC','__ut','SAPISID','SSIDAPISID','_drt_','NID' ],
            optOut: false,
        },*/
        
        
        
       
        
        /*
        {
            name: 'paypal',
            default: true,
            title: 'Paypal',
            purposes: ['autres'],
            cookies: ['paypalplus_session_v2','__paypal_storage__','paypal', 'shopifyPaypalAcceleration', 'ts_c', 'ts'],
            optOut: false,
        },*/
        
        
        /*,
        {
            name: 'googlefonts',
            default: true,
            title: 'Google Fonts',
            purposes: ['autres'],
            cookies: ['inline-tracker'],
            optOut: false,
        }
        */

     
    ]
};
    


if(typeof applimobile_enable!= "undefined" && applimobile_enable==1){
    klaroConfig.services.push({
        // V
        name: 'applimobile',
        default: true,
        required: true,
        title: 'Application Mobile',
        purposes: ['experiences'],
        cookies: ['smartbanner-installed', 'smartbanner-closed'],
       
    });
}

if(typeof catalogue_enable!= "undefined" && catalogue_enable==1){
    klaroConfig.services.push({
        // V
        name: 'catalogue',
        default: true,
        required: true,
        title: 'Catalogue',
        purposes: ['experiences'],
        cookies: ['catalogue_wishlist'],
        
    });

}

if(typeof panier_enable!= "undefined" && panier_enable==1){
    klaroConfig.services.push({
        name: 'panier',
        default: true,
        required:true,
        title: 'Panier',
        purposes: ['experiences'],
        cookies: ['Panier'],
        
    });
}
if(typeof vurecemment_enable!= "undefined" && vurecemment_enable==1){
    klaroConfig.services.push({
        name: 'vurecemment',
        default: true,
        required:true,
        title: 'Derniers articles consultés',
        purposes: ['experiences'],
        cookies: ['VuRecemment'],
        
    });
}
if(typeof hdmedia_enable!= "undefined" && hdmedia_enable==1){
    klaroConfig.services.push({
        name: 'hdmedia',
        default: true,
        required:false,
        title: 'Visite virtuelle',
        purposes: ['experiences'],
        cookies: ['_gcl_au'],
        
    });
}
//TODO
if(typeof langue_enable!= "undefined" && langue_enable==1){
    klaroConfig.services.push({
        // V
        name: 'langue',
        default: true,
        required: true,
        title: 'Langue',
        purposes: ['experiences'],
        cookies: ['language'],
        
    });
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var current_cookie = getCookie('klaro');
if(typeof purechat_enable!= "undefined" && purechat_enable==1){
    klaroConfig.services.push({
        name: 'purechat',
        default: true,
        required: true,
        title: 'PureChat',
        purposes: ['experiences'],
        
    });
}

if(typeof recaptcha_enable!= "undefined" && recaptcha_enable==1){

    klaroConfig.services.push({
            name: 'recaptcha',
            default: true,
            required: true,
            title: 'Recaptcha',
            purposes: ['experiences'],
            cookies: ['itsec-recaptcha-opt-in-*','rc::c','rc::b','rc::a'],
            
    });
}


klaroConfig.services.push({
        name: 'addthis',
        default: false,
        title: 'AddThis',
        purposes: ['reseaux'],
        cookies: ['addthis*','_at.hist.*','UID','at-lojson-cache-ra-*','ouid','na_tc','na_id','mus','loc','cw_id','uvc','uit','uid','psc','at-rand','at-lojson-cache-wp-*','_at.cww','__atssc','na_id','cw_id','__atuvc','__atuvs'],
        
});


klaroConfig.services.push({
        // V
        name: 'facebook',
        default: false,
        purposes: ['reseaux'],
        cookies: ['page_*_hash_facebook-like','SHR_CACHE_facebook_*','_js_datr','actppresence','_fbc','fbm*','xs','wd','fr','act','_fbp','datr','c_user','csm','sb','presence','*_fbm_'],
        contextualConsentOnly: false,
		

});
klaroConfig.services.push({
        // V
        name: 'linkedin',
        default: false,
        title: 'Linkedin',
        cookies: ['bcookie','li-oatml','li_sugr','UserMatchHistory','lidc','bscookie','X-LI-IDC','BizographicsOptOut','linkedin_oauth_*'],
        purposes: ['reseaux'],
        
});
klaroConfig.services.push({
        // V
        name: 'twitter',
        default: false,
        title: 'Twitter',
        cookies: ['page_*_hash_twitter-tweet','SHR_CACHE_twitter_*','local_storage_support_test','metrics_token'],
        purposes: ['reseaux'],
        
});
klaroConfig.services.push({
        // V
        name: 'instagram',
        default: false,
        title: 'Instagram',
        cookies: ['eapps-instagram-feed-popup-scroll-indicator-already-shown','eapps-instagram-feed-red-like-time','gt3pg_instagram_user_*','actppresence'],
        purposes: ['reseaux'],
        
});
klaroConfig.services.push({
        // A RELIER AVER SCRIPT AUTO
        name: 'vimeo',
        default: false,
        title: 'Vimeo',
        purposes: ['reseaux'],
        cookies: ['Vuid','__utmt_player','',''],
        
});
klaroConfig.services.push({
        // A RELIER AVER SCRIPT AUTO
        name: 'youtube',
        default: false,
        title: 'Youtube',
        purposes: ['reseaux'],
        cookies: ['GPS','VISITOR_INFO1_LIVE','YSC','PREF'],
        
});
if(typeof akamaihd_enable!= "undefined" && akamaihd_enable==1){
	klaroConfig.services.push({
			// A RELIER AVER SCRIPT AUTO
			name: 'akamaihd',
			default: false,
			title: 'CDN vidéo',
			purposes: ['reseaux'],
			cookies: ['e'],
			
	});
}
if(typeof plusquepro_enable!= "undefined" && plusquepro_enable==1){
    klaroConfig.services.push({
        // V
        name: 'plusquepro',
        default: false,
        title: 'Plus que PRO',
        purposes: ['reseaux'],
		cookies: ['_gat', '_ga', '_gid', 'tarteaucitron', 'cookieMessage', 'PHP_SESSID_KLYTHO'],
		callback: function(consent, app) {
            // This is an example callback function.
            if(current_cookie!=""){
                var json_cookie = jQuery.parseJSON(current_cookie);
                if(json_cookie[app.name] != consent){
                    location.reload();
                }
            }
            if(current_cookie=="" && consent){// init
                location.reload();
            }
            //console.log('User consent for app ' + app.name + ': consent=' + consent);
            //location.reload();
        }
    });
}

if(typeof awstats_enable!= "undefined" && awstats_enable==1){
    klaroConfig.services.push({
        // V
        name: 'awstat',
        default: true,
        required:true,
        title: 'Awstats',
        purposes: ['statistiques'],
        cookies: ['AWSUSER_ID','AWSSESSION_ID'],
        
    });
}
if(typeof gadwords_enable!= "undefined" && gadwords_enable==1){
    klaroConfig.services.push({
        name: 'gadwords',
        default: false,
        title: 'Google AdWords',
        purposes: ['statistiques'],
        cookies: ['google_adsense_settings','ads/ga-audiences','google_pub_config','google_ama_config','google_ama_settings','__gads','google_pem_mod','google_experiment_mod*','___gads','goog_pem_mod','session_depth','_gac_*','id','CONSENT','SNID','APISID','SSID','HSID','SID','OGPC','__ut','SAPISID','SSIDAPISID','_drt_','NID','1P_JAR'],
       
    });
}

if(typeof ganalytics_enable!= "undefined" && ganalytics_enable==1){
    klaroConfig.services.push({
        name: 'ganalytics',
        default: false,
        title: 'Google Analytics',
        purposes: ['statistiques'],
        cookies: ['_utma','_utmb','_utmc','_utmt_global','_utmt_local','_utmt_regional','_utmz','_ga','_gid','_gat', 'DV','_ga','_gid','_gat','_gat_gtag_UA_*_1','_gac_UA-*'],
        
    });
}
if(typeof consent_cookie!= "undefined" && consent_cookie==1){
    klaroConfig.services.push({
        // V
        name: 'youfindme',
        default: false,
        title: 'Youfindme',
        cookies: ['youfindme_site'],
        purposes: ['reseaux'],
        contextualConsentOnly: false,
    });
}
