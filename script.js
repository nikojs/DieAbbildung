'use strict';

SVGInject.setOptions({ 
   makeIdsUnique: false, 
   useCache: false,
   afterInject: function(img, svg){
      /* SVG HIGHLIGHTS */
      svg_highlight('ebk_abp','abk_ab');
      svg_highlight('ebk_pbp','pbk_ab');
      svg_highlight('sbk_sb-abk','abk_sb');
      svg_highlight('sbk_sb-pbk','pbk_sb');

      /* TOOLTIPS */ 
      svg_tooltip('ebk', "Eröffnungsbilanzkonto");
      svg_tooltip('ebk_abp', "Aktivbilanzposten");   
      svg_tooltip('ebk_pbp', "Passivbilanzposten");   
      svg_tooltip('abk', "Aktivbilanzkonto");   
      svg_tooltip('abk_ab', "Anfangsbestand");   
      svg_tooltip('abk_sb', "Schlussbestand");   
      svg_tooltip('abk_mehrung', "Mehrung");   
      svg_tooltip('abk_minderung', "Minderung");   
      svg_tooltip('pbk', "Passivbilanzkonto");   
      svg_tooltip('pbk_ek', "Anfangsbestand");   
      svg_tooltip('pbk_ab', "Anfangsbestand");   
      svg_tooltip('pbk_sb', "Schlussbestand");   
      svg_tooltip('pbk_mehrung', "Mehrung");   
      svg_tooltip('pbk_minderung', "Minderung"); 
      svg_tooltip('aufwendungen_mehrung', "Mehrung");   
      svg_tooltip('ertraege_mehrung', "Mehrung");
      svg_tooltip('sbk', "Schlussbestandkonto");
      svg_tooltip('sbk_sb-abk', "Schlussbestand Aktivbilanzkonto");
      svg_tooltip('sbk_sb-pbk', "Schlussbestand Passivbilanzkonto");
      svg_tooltip('guv', "Gewinn und Verlust");
   }
});  

function svg_highlight(id, ...targetIDs){
   document.getElementById(id).addEventListener('mouseover', function(){
      this.style.fill = "red";
      targetIDs.forEach(targetID => document.getElementById(targetID).style.fill = "red");
   });
   document.getElementById(id).addEventListener('mouseout', function(){
      this.style.fill = "black";
      targetIDs.forEach(targetID => document.getElementById(targetID).style.fill = "");
   });
}

function svg_tooltip(id, text){
   tippy('#' + id, {
      content: text,
   });
}