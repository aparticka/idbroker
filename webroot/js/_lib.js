

// css.js



function get_css(rule_name,stylesheet,delete_flag){if(!document.styleSheets)return false;rule_name=rule_name.toLowerCase();stylesheet=stylesheet||0;for(var i=stylesheet;i<document.styleSheets.length;i++){var styleSheet=document.styleSheets[i];css_rules=document.styleSheets[i].cssRules||document.styleSheets[i].rules;if(!css_rules)continue;var j=0;do{if(css_rules[j].selectorText.toLowerCase()==rule_name){if(delete_flag==true){if(document.styleSheets[i].removeRule)document.styleSheets[i].removeRule(j);if(document.styleSheets[i].deleteRule)document.styleSheets[i].deleteRule(j);return true;}

else return css_rules[j];}}

while(css_rules[++j]);}

return false;}

function add_css(rule_name,stylesheet){rule_name=rule_name.toLowerCase();stylesheet=stylesheet||0;if(!document.styleSheets||get_css(rule_name,stylesheet))return false;(document.styleSheets[stylesheet].addRule)?document.styleSheets[stylesheet].addRule(rule_name,null,0):document.styleSheets[stylesheet].insertRule(rule_name+' { }',0);return get_css(rule_name);}

function get_sheet_num(href_name){if(!document.styleSheets)return false;for(var i=0;i<document.styleSheets.length;i++){if(document.styleSheets[i].href&&document.styleSheets[i].href.toString().match(href_name))return i;}

return false;}

function remove_css(rule_name,stylesheet){return get_css(rule_name,stylesheet,true);}

function add_sheet(url,media){if(document.createStyleSheet){document.createStyleSheet(url);}

else{var newSS=document.createElement('link');newSS.rel='stylesheet';newSS.type='text/css';newSS.media=media||"all";newSS.href=url;document.getElementsByTagName("head")[0].appendChild(newSS);}}



// jquery.listen.js

;(function($){var a='indexer',h=$.event,j=h.special,k=$.listen=function(c,d,e,f){if(typeof d!='object'){f=e;e=d;d=document}o(c.split(/\s+/),function(a){a=k.fixes[a]||a;var b=m(d,a)||m(d,a,new n(a,d));b.append(e,f);b.start()})},m=function(b,c,d){return $.data(b,c+'.'+a,d)};$.fn[a]=function(a){return this[0]&&m(this[0],a)||null};$[a]=function(a){return m(document,a)};$.extend(k,{regex:/^((?:\w*?|\*))(?:([#.])([\w-]+))?$/,fixes:{focus:'focusin',blur:'focusout'},cache:function(a){this.caching=a}});$.each(k.fixes,function(a,b){j[b]={setup:function(){if($.browser.msie)return!1;this.addEventListener(a,j[b].handler,!0)},teardown:function(){if($.browser.msie)return!1;this.removeEventListener(a,j[b].handler,!0)},handler:function(e){arguments[0]=e=h.fix(e);e.type=b;return h.handle.apply(this,arguments)}}});$.fn.listen=function(a,b,c){return this.each(function(){k(a,this,b,c)})};function n(a,b){$.extend(this,{ids:{},tags:{},listener:b,event:a});this.id=n.instances.push(this)};n.instances=[];n.prototype={constructor:n,handle:function(e){var a=e.stopPropagation;e.stopPropagation=function(){e.stopped=1;a.apply(this,arguments)};m(this,e.type).parse(e);e.stopPropagation=a;a=e.data=null},on:0,bubbles:0,start:function(){var a=this;if(!a.on){h.add(a.listener,a.event,a.handle);a.on=1}},stop:function(){var a=this;if(a.on){h.remove(a.listener,a.event,a.handle);a.on=0}},cache:function(a,b){return $.data(a,'listenCache_'+this.id,b)},parse:function(e){var z=this,c=e.data||e.target,d=arguments,f;if(!k.caching||!(f=z.cache(c))){f=[];if(c.id&&z.ids[c.id])p(f,z.ids[c.id]);o([c.nodeName,'*'],function(a){var b=z.tags[a];if(b)o((c.className+' *').split(' '),function(a){if(a&&b[a])p(f,b[a])})});if(k.caching)z.cache(c,f)}if(f[0]){o(f,function(a){if(a.apply(c,d)===!1){e.preventDefault();e.stopPropagation()}})}if(!e.stopped&&(c=c.parentNode)&&(c.nodeName=='A'||z.bubbles&&c!=z.listener)){e.data=c;z.parse(e)}f=d=c=null},append:function(f,g){var z=this;o(f.split(/\s*,\s*/),function(a){var b=k.regex.exec(a);if(!b)throw'$.listen > "'+a+'" is not a supported selector.';var c=b[2]=='#'&&b[3],d=b[1].toUpperCase()||'*',e=b[3]||'*';if(c)(z.ids[c]||(z.ids[c]=[])).push(g);else if(d){d=z.tags[d]=z.tags[d]||{};(d[e]||(d[e]=[])).push(g)}})}};function o(a,b,c){for(var i=0,l=a.length;i<l;i++)b.call(c,a[i],i)};function p(a,b){a.push.apply(a,b);return a};$(window).unload(function(){if(typeof n=='function')o(n.instances,function(b){b.stop();$.removeData(b.listener,b.event+'.'+a);b.ids=b.names=b.listener=null})})})(jQuery);



// sarissa.js



function Sarissa(){}

Sarissa.VERSION="0.9.9.4";Sarissa.PARSED_OK="Document contains no parsing errors";Sarissa.PARSED_EMPTY="Document is empty";Sarissa.PARSED_UNKNOWN_ERROR="Not well-formed or other error";Sarissa.IS_ENABLED_TRANSFORM_NODE=false;Sarissa.REMOTE_CALL_FLAG="gr.abiss.sarissa.REMOTE_CALL_FLAG";Sarissa._lastUniqueSuffix=0;Sarissa._getUniqueSuffix=function(){return Sarissa._lastUniqueSuffix++;};Sarissa._SARISSA_IEPREFIX4XSLPARAM="";Sarissa._SARISSA_HAS_DOM_IMPLEMENTATION=document.implementation&&true;Sarissa._SARISSA_HAS_DOM_CREATE_DOCUMENT=Sarissa._SARISSA_HAS_DOM_IMPLEMENTATION&&document.implementation.createDocument;Sarissa._SARISSA_HAS_DOM_FEATURE=Sarissa._SARISSA_HAS_DOM_IMPLEMENTATION&&document.implementation.hasFeature;Sarissa._SARISSA_IS_MOZ=Sarissa._SARISSA_HAS_DOM_CREATE_DOCUMENT&&Sarissa._SARISSA_HAS_DOM_FEATURE;Sarissa._SARISSA_IS_SAFARI=navigator.userAgent.toLowerCase().indexOf("safari")!=-1||navigator.userAgent.toLowerCase().indexOf("konqueror")!=-1;Sarissa._SARISSA_IS_SAFARI_OLD=Sarissa._SARISSA_IS_SAFARI&&(parseInt((navigator.userAgent.match(/AppleWebKit\/(\d+)/)||{})[1],10)<420);Sarissa._SARISSA_IS_IE=document.all&&window.ActiveXObject&&navigator.userAgent.toLowerCase().indexOf("msie")>-1&&navigator.userAgent.toLowerCase().indexOf("opera")==-1;Sarissa._SARISSA_IS_OPERA=navigator.userAgent.toLowerCase().indexOf("opera")!=-1;if(!window.Node||!Node.ELEMENT_NODE){Node={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12};}

if(Sarissa._SARISSA_IS_SAFARI_OLD){HTMLHtmlElement=document.createElement("html").constructor;Node=HTMLElement={};HTMLElement.prototype=HTMLHtmlElement.__proto__.__proto__;HTMLDocument=Document=document.constructor;var x=new DOMParser();XMLDocument=x.constructor;Element=x.parseFromString("<Single />","text/xml").documentElement.constructor;x=null;}

if(typeof XMLDocument=="undefined"&&typeof Document!="undefined"){XMLDocument=Document;}

if(Sarissa._SARISSA_IS_IE){Sarissa._SARISSA_IEPREFIX4XSLPARAM="xsl:";var _SARISSA_DOM_PROGID="";var _SARISSA_XMLHTTP_PROGID="";var _SARISSA_DOM_XMLWRITER="";Sarissa.pickRecentProgID=function(idList){var bFound=false,e;var o2Store;for(var i=0;i<idList.length&&!bFound;i++){try{var oDoc=new ActiveXObject(idList[i]);o2Store=idList[i];bFound=true;}catch(objException){e=objException;}}

if(!bFound){throw"Could not retrieve a valid progID of Class: "+idList[idList.length-1]+". (original exception: "+e+")";}

idList=null;return o2Store;};_SARISSA_DOM_PROGID=null;_SARISSA_THREADEDDOM_PROGID=null;_SARISSA_XSLTEMPLATE_PROGID=null;_SARISSA_XMLHTTP_PROGID=null;XMLHttpRequest=function(){if(!_SARISSA_XMLHTTP_PROGID){_SARISSA_XMLHTTP_PROGID=Sarissa.pickRecentProgID(["Msxml2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"]);}

return new ActiveXObject(_SARISSA_XMLHTTP_PROGID);};Sarissa.getDomDocument=function(sUri,sName){if(!_SARISSA_DOM_PROGID){_SARISSA_DOM_PROGID=Sarissa.pickRecentProgID(["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.3.0","MSXML2.DOMDocument","MSXML.DOMDocument","Microsoft.XMLDOM"]);}

var oDoc=new ActiveXObject(_SARISSA_DOM_PROGID);if(sName){var prefix="";if(sUri){if(sName.indexOf(":")>1){prefix=sName.substring(0,sName.indexOf(":"));sName=sName.substring(sName.indexOf(":")+1);}else{prefix="a"+Sarissa._getUniqueSuffix();}}

if(sUri){oDoc.loadXML('<'+prefix+':'+sName+" xmlns:"+prefix+"=\""+sUri+"\""+" />");}else{oDoc.loadXML('<'+sName+" />");}}

return oDoc;};Sarissa.getParseErrorText=function(oDoc){var parseErrorText=Sarissa.PARSED_OK;if(oDoc&&oDoc.parseError&&oDoc.parseError.errorCode&&oDoc.parseError.errorCode!=0){parseErrorText="XML Parsing Error: "+oDoc.parseError.reason+"\nLocation: "+oDoc.parseError.url+"\nLine Number "+oDoc.parseError.line+", Column "+

oDoc.parseError.linepos+":\n"+oDoc.parseError.srcText+"\n";for(var i=0;i<oDoc.parseError.linepos;i++){parseErrorText+="-";}

parseErrorText+="^\n";}

else if(oDoc.documentElement===null){parseErrorText=Sarissa.PARSED_EMPTY;}

return parseErrorText;};Sarissa.setXpathNamespaces=function(oDoc,sNsSet){oDoc.setProperty("SelectionLanguage","XPath");oDoc.setProperty("SelectionNamespaces",sNsSet);};XSLTProcessor=function(){if(!_SARISSA_XSLTEMPLATE_PROGID){_SARISSA_XSLTEMPLATE_PROGID=Sarissa.pickRecentProgID(["Msxml2.XSLTemplate.6.0","MSXML2.XSLTemplate.3.0"]);}

this.template=new ActiveXObject(_SARISSA_XSLTEMPLATE_PROGID);this.processor=null;};XSLTProcessor.prototype.importStylesheet=function(xslDoc){if(!_SARISSA_THREADEDDOM_PROGID){_SARISSA_THREADEDDOM_PROGID=Sarissa.pickRecentProgID(["MSXML2.FreeThreadedDOMDocument.6.0","MSXML2.FreeThreadedDOMDocument.3.0"]);}

xslDoc.setProperty("SelectionLanguage","XPath");xslDoc.setProperty("SelectionNamespaces","xmlns:xsl='http://www.w3.org/1999/XSL/Transform'");var converted=new ActiveXObject(_SARISSA_THREADEDDOM_PROGID);try{converted.resolveExternals=true;converted.setProperty("AllowDocumentFunction",true);}

catch(e){}

if(xslDoc.url&&xslDoc.selectSingleNode("//xsl:*[local-name() = 'import' or local-name() = 'include']")!=null){converted.async=false;converted.load(xslDoc.url);}

else{converted.loadXML(xslDoc.xml);}

converted.setProperty("SelectionNamespaces","xmlns:xsl='http://www.w3.org/1999/XSL/Transform'");var output=converted.selectSingleNode("//xsl:output");if(output){this.outputMethod=output.getAttribute("method");}

else{delete this.outputMethod;}

this.template.stylesheet=converted;this.processor=this.template.createProcessor();this.paramsSet=[];};XSLTProcessor.prototype.transformToDocument=function(sourceDoc){var outDoc;if(_SARISSA_THREADEDDOM_PROGID){this.processor.input=sourceDoc;outDoc=new ActiveXObject(_SARISSA_DOM_PROGID);this.processor.output=outDoc;this.processor.transform();return outDoc;}

else{if(!_SARISSA_DOM_XMLWRITER){_SARISSA_DOM_XMLWRITER=Sarissa.pickRecentProgID(["Msxml2.MXXMLWriter.6.0","Msxml2.MXXMLWriter.3.0","MSXML2.MXXMLWriter","MSXML.MXXMLWriter","Microsoft.XMLDOM"]);}

this.processor.input=sourceDoc;outDoc=new ActiveXObject(_SARISSA_DOM_XMLWRITER);this.processor.output=outDoc;this.processor.transform();var oDoc=new ActiveXObject(_SARISSA_DOM_PROGID);oDoc.loadXML(outDoc.output+"");return oDoc;}};XSLTProcessor.prototype.transformToFragment=function(sourceDoc,ownerDoc){this.processor.input=sourceDoc;this.processor.transform();var s=this.processor.output;var f=ownerDoc.createDocumentFragment();var container;if(this.outputMethod=='text'){f.appendChild(ownerDoc.createTextNode(s));}else if(ownerDoc.body&&ownerDoc.body.innerHTML){container=ownerDoc.createElement('div');container.innerHTML=s;while(container.hasChildNodes()){f.appendChild(container.firstChild);}}

else{var oDoc=new ActiveXObject(_SARISSA_DOM_PROGID);if(s.substring(0,5)=='<?xml'){s=s.substring(s.indexOf('?>')+2);}

var xml=''.concat('<my>',s,'</my>');oDoc.loadXML(xml);container=oDoc.documentElement;while(container.hasChildNodes()){f.appendChild(container.firstChild);}}

return f;};XSLTProcessor.prototype.setParameter=function(nsURI,name,value){value=value?value:"";if(nsURI){this.processor.addParameter(name,value,nsURI);}else{this.processor.addParameter(name,value);}

nsURI=""+(nsURI||"");if(!this.paramsSet[nsURI]){this.paramsSet[nsURI]=[];}

this.paramsSet[nsURI][name]=value;};XSLTProcessor.prototype.getParameter=function(nsURI,name){nsURI=""+(nsURI||"");if(this.paramsSet[nsURI]&&this.paramsSet[nsURI][name]){return this.paramsSet[nsURI][name];}else{return null;}};XSLTProcessor.prototype.clearParameters=function(){for(var nsURI in this.paramsSet){for(var name in this.paramsSet[nsURI]){if(nsURI!=""){this.processor.addParameter(name,"",nsURI);}else{this.processor.addParameter(name,"");}}}

this.paramsSet=[];};}else{if(Sarissa._SARISSA_HAS_DOM_CREATE_DOCUMENT){Sarissa.__handleLoad__=function(oDoc){Sarissa.__setReadyState__(oDoc,4);};_sarissa_XMLDocument_onload=function(){Sarissa.__handleLoad__(this);};Sarissa.__setReadyState__=function(oDoc,iReadyState){oDoc.readyState=iReadyState;oDoc.readystate=iReadyState;if(oDoc.onreadystatechange!=null&&typeof oDoc.onreadystatechange=="function"){oDoc.onreadystatechange();}};Sarissa.getDomDocument=function(sUri,sName){var oDoc=document.implementation.createDocument(sUri?sUri:null,sName?sName:null,null);if(!oDoc.onreadystatechange){oDoc.onreadystatechange=null;}

if(!oDoc.readyState){oDoc.readyState=0;}

oDoc.addEventListener("load",_sarissa_XMLDocument_onload,false);return oDoc;};if(window.XMLDocument){}

else if(Sarissa._SARISSA_HAS_DOM_FEATURE&&window.Document&&!Document.prototype.load&&document.implementation.hasFeature('LS','3.0')){Sarissa.getDomDocument=function(sUri,sName){var oDoc=document.implementation.createDocument(sUri?sUri:null,sName?sName:null,null);return oDoc;};}

else{Sarissa.getDomDocument=function(sUri,sName){var oDoc=document.implementation.createDocument(sUri?sUri:null,sName?sName:null,null);if(oDoc&&(sUri||sName)&&!oDoc.documentElement){oDoc.appendChild(oDoc.createElementNS(sUri,sName));}

return oDoc;};}}}

if(!window.DOMParser){if(Sarissa._SARISSA_IS_SAFARI){DOMParser=function(){};DOMParser.prototype.parseFromString=function(sXml,contentType){var xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","data:text/xml;charset=utf-8,"+encodeURIComponent(sXml),false);xmlhttp.send(null);return xmlhttp.responseXML;};}else if(Sarissa.getDomDocument&&Sarissa.getDomDocument()&&Sarissa.getDomDocument(null,"bar").xml){DOMParser=function(){};DOMParser.prototype.parseFromString=function(sXml,contentType){var doc=Sarissa.getDomDocument();doc.loadXML(sXml);return doc;};}}

if((typeof(document.importNode)=="undefined")&&Sarissa._SARISSA_IS_IE){try{document.importNode=function(oNode,bChildren){var tmp;if(oNode.nodeName=='#text'){return document.createTextNode(oNode.data);}

else{if(oNode.nodeName=="tbody"||oNode.nodeName=="tr"){tmp=document.createElement("table");}

else if(oNode.nodeName=="td"){tmp=document.createElement("tr");}

else if(oNode.nodeName=="option"){tmp=document.createElement("select");}

else{tmp=document.createElement("div");}

if(bChildren){tmp.innerHTML=oNode.xml?oNode.xml:oNode.outerHTML;}else{tmp.innerHTML=oNode.xml?oNode.cloneNode(false).xml:oNode.cloneNode(false).outerHTML;}

return tmp.getElementsByTagName("*")[0];}};}catch(e){}}

if(!Sarissa.getParseErrorText){Sarissa.getParseErrorText=function(oDoc){var parseErrorText=Sarissa.PARSED_OK;if((!oDoc)||(!oDoc.documentElement)){parseErrorText=Sarissa.PARSED_EMPTY;}else if(oDoc.documentElement.tagName=="parsererror"){parseErrorText=oDoc.documentElement.firstChild.data;parseErrorText+="\n"+oDoc.documentElement.firstChild.nextSibling.firstChild.data;}else if(oDoc.getElementsByTagName("parsererror").length>0){var parsererror=oDoc.getElementsByTagName("parsererror")[0];parseErrorText=Sarissa.getText(parsererror,true)+"\n";}else if(oDoc.parseError&&oDoc.parseError.errorCode!=0){parseErrorText=Sarissa.PARSED_UNKNOWN_ERROR;}

return parseErrorText;};}

Sarissa.getText=function(oNode,deep){var s="";var nodes=oNode.childNodes;for(var i=0;i<nodes.length;i++){var node=nodes[i];var nodeType=node.nodeType;if(nodeType==Node.TEXT_NODE||nodeType==Node.CDATA_SECTION_NODE){s+=node.data;}else if(deep===true&&(nodeType==Node.ELEMENT_NODE||nodeType==Node.DOCUMENT_NODE||nodeType==Node.DOCUMENT_FRAGMENT_NODE)){s+=Sarissa.getText(node,true);}}

return s;};if(!window.XMLSerializer&&Sarissa.getDomDocument&&Sarissa.getDomDocument("","foo",null).xml){XMLSerializer=function(){};XMLSerializer.prototype.serializeToString=function(oNode){return oNode.xml;};}

Sarissa.stripTags=function(s){return s?s.replace(/<[^>]+>/g,""):s;};Sarissa.clearChildNodes=function(oNode){while(oNode.firstChild){oNode.removeChild(oNode.firstChild);}};Sarissa.copyChildNodes=function(nodeFrom,nodeTo,bPreserveExisting){if(Sarissa._SARISSA_IS_SAFARI&&nodeTo.nodeType==Node.DOCUMENT_NODE){nodeTo=nodeTo.documentElement;}

if((!nodeFrom)||(!nodeTo)){throw"Both source and destination nodes must be provided";}

if(!bPreserveExisting){Sarissa.clearChildNodes(nodeTo);}

var ownerDoc=nodeTo.nodeType==Node.DOCUMENT_NODE?nodeTo:nodeTo.ownerDocument;var nodes=nodeFrom.childNodes;var i;if(typeof(ownerDoc.importNode)!="undefined"){for(i=0;i<nodes.length;i++){nodeTo.appendChild(ownerDoc.importNode(nodes[i],true));}}else{for(i=0;i<nodes.length;i++){nodeTo.appendChild(nodes[i].cloneNode(true));}}};Sarissa.moveChildNodes=function(nodeFrom,nodeTo,bPreserveExisting){if((!nodeFrom)||(!nodeTo)){throw"Both source and destination nodes must be provided";}

if(!bPreserveExisting){Sarissa.clearChildNodes(nodeTo);}

var nodes=nodeFrom.childNodes;if(nodeFrom.ownerDocument==nodeTo.ownerDocument){while(nodeFrom.firstChild){nodeTo.appendChild(nodeFrom.firstChild);}}else{var ownerDoc=nodeTo.nodeType==Node.DOCUMENT_NODE?nodeTo:nodeTo.ownerDocument;var i;if(typeof(ownerDoc.importNode)!="undefined"){for(i=0;i<nodes.length;i++){nodeTo.appendChild(ownerDoc.importNode(nodes[i],true));}}else{for(i=0;i<nodes.length;i++){nodeTo.appendChild(nodes[i].cloneNode(true));}}

Sarissa.clearChildNodes(nodeFrom);}};Sarissa.xmlize=function(anyObject,objectName,indentSpace){indentSpace=indentSpace?indentSpace:'';var s=indentSpace+'<'+objectName+'>';var isLeaf=false;if(!(anyObject instanceof Object)||anyObject instanceof Number||anyObject instanceof String||anyObject instanceof Boolean||anyObject instanceof Date){s+=Sarissa.escape(""+anyObject);isLeaf=true;}else{s+="\n";var isArrayItem=anyObject instanceof Array;for(var name in anyObject){s+=Sarissa.xmlize(anyObject[name],(isArrayItem?"array-item key=\""+name+"\"":name),indentSpace+"   ");}

s+=indentSpace;}

return(s+=(objectName.indexOf(' ')!=-1?"</array-item>\n":"</"+objectName+">\n"));};Sarissa.escape=function(sXml){return sXml.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");};Sarissa.unescape=function(sXml){return sXml.replace(/&apos;/g,"'").replace(/&quot;/g,"\"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&");};Sarissa.updateCursor=function(oTargetElement,sValue){if(oTargetElement&&oTargetElement.style&&oTargetElement.style.cursor!=undefined){oTargetElement.style.cursor=sValue;}};Sarissa.updateContentFromURI=function(sFromUrl,oTargetElement,xsltproc,callback,skipCache){try{Sarissa.updateCursor(oTargetElement,"wait");var xmlhttp=new XMLHttpRequest();xmlhttp.open("GET",sFromUrl,true);xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){try{var oDomDoc=xmlhttp.responseXML;if(oDomDoc&&Sarissa.getParseErrorText(oDomDoc)==Sarissa.PARSED_OK){Sarissa.updateContentFromNode(xmlhttp.responseXML,oTargetElement,xsltproc);if(callback){callback(sFromUrl,oTargetElement);}}

else{throw Sarissa.getParseErrorText(oDomDoc);}}

catch(e){if(callback){callback(sFromUrl,oTargetElement,e);}

else{throw e;}}}};if(skipCache){var oldage="Sat, 1 Jan 2000 00:00:00 GMT";xmlhttp.setRequestHeader("If-Modified-Since",oldage);}

xmlhttp.send("");}

catch(e){Sarissa.updateCursor(oTargetElement,"auto");if(callback){callback(sFromUrl,oTargetElement,e);}

else{throw e;}}};Sarissa.updateContentFromNode=function(oNode,oTargetElement,xsltproc){try{Sarissa.updateCursor(oTargetElement,"wait");Sarissa.clearChildNodes(oTargetElement);var ownerDoc=oNode.nodeType==Node.DOCUMENT_NODE?oNode:oNode.ownerDocument;if(ownerDoc.parseError&&ownerDoc.parseError.errorCode!=0){var pre=document.createElement("pre");pre.appendChild(document.createTextNode(Sarissa.getParseErrorText(ownerDoc)));oTargetElement.appendChild(pre);}

else{if(xsltproc){oNode=xsltproc.transformToDocument(oNode);}

if(oTargetElement.tagName.toLowerCase()=="textarea"||oTargetElement.tagName.toLowerCase()=="input"){oTargetElement.value=new XMLSerializer().serializeToString(oNode);}

else{try{oTargetElement.appendChild(oTargetElement.ownerDocument.importNode(oNode,true));}

catch(e){oTargetElement.innerHTML=new XMLSerializer().serializeToString(oNode);}}}}

catch(e){throw e;}

finally{Sarissa.updateCursor(oTargetElement,"auto");}};Sarissa.formToQueryString=function(oForm){var qs="";for(var i=0;i<oForm.elements.length;i++){var oField=oForm.elements[i];var sFieldName=oField.getAttribute("name")?oField.getAttribute("name"):oField.getAttribute("id");if(sFieldName&&((!oField.disabled)||oField.type=="hidden")){switch(oField.type){case"hidden":case"text":case"textarea":case"password":qs+=sFieldName+"="+encodeURIComponent(oField.value)+"&";break;case"select-one":qs+=sFieldName+"="+encodeURIComponent(oField.options[oField.selectedIndex].value)+"&";break;case"select-multiple":for(var j=0;j<oField.length;j++){var optElem=oField.options[j];if(optElem.selected===true){qs+=sFieldName+"[]"+"="+encodeURIComponent(optElem.value)+"&";}}

break;case"checkbox":case"radio":if(oField.checked){qs+=sFieldName+"="+encodeURIComponent(oField.value)+"&";}

break;}}}

return qs.substr(0,qs.length-1);};Sarissa.updateContentFromForm=function(oForm,oTargetElement,xsltproc,callback){try{Sarissa.updateCursor(oTargetElement,"wait");var params=Sarissa.formToQueryString(oForm)+"&"+Sarissa.REMOTE_CALL_FLAG+"=true";var xmlhttp=new XMLHttpRequest();var bUseGet=oForm.getAttribute("method")&&oForm.getAttribute("method").toLowerCase()=="get";if(bUseGet){xmlhttp.open("GET",oForm.getAttribute("action")+"?"+params,true);}

else{xmlhttp.open('POST',oForm.getAttribute("action"),true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.setRequestHeader("Content-length",params.length);xmlhttp.setRequestHeader("Connection","close");}

xmlhttp.onreadystatechange=function(){try{if(xmlhttp.readyState==4){var oDomDoc=xmlhttp.responseXML;if(oDomDoc&&Sarissa.getParseErrorText(oDomDoc)==Sarissa.PARSED_OK){Sarissa.updateContentFromNode(xmlhttp.responseXML,oTargetElement,xsltproc);if(callback){callback(oForm,oTargetElement);}}

else{throw Sarissa.getParseErrorText(oDomDoc);}}}

catch(e){if(callback){callback(oForm,oTargetElement,e);}

else{throw e;}}};xmlhttp.send(bUseGet?"":params);}

catch(e){Sarissa.updateCursor(oTargetElement,"auto");if(callback){callback(oForm,oTargetElement,e);}

else{throw e;}}

return false;};Sarissa.FUNCTION_NAME_REGEXP=new RegExp("");Sarissa.getFunctionName=function(oFunc,bForce){var name;if(!name){if(bForce){name="SarissaAnonymous"+Sarissa._getUniqueSuffix();window[name]=oFunc;}

else{name=null;}}

if(name){window[name]=oFunc;}

return name;};Sarissa.setRemoteJsonCallback=function(url,callback,callbackParam){if(!callbackParam){callbackParam="callback";}

var callbackFunctionName=Sarissa.getFunctionName(callback,true);var id="sarissa_json_script_id_"+Sarissa._getUniqueSuffix();var oHead=document.getElementsByTagName("head")[0];var scriptTag=document.createElement('script');scriptTag.type='text/javascript';scriptTag.id=id;scriptTag.onload=function(){};if(url.indexOf("?")!=-1){url+=("&"+callbackParam+"="+callbackFunctionName);}

else{url+=("?"+callbackParam+"="+callbackFunctionName);}

scriptTag.src=url;oHead.appendChild(scriptTag);return id;};



// sarissa_ieemu_xpath.js



if(Sarissa._SARISSA_HAS_DOM_FEATURE&&document.implementation.hasFeature("XPath","3.0")){SarissaNodeList=function(i){this.length=i;};SarissaNodeList.prototype=[];SarissaNodeList.prototype.constructor=Array;SarissaNodeList.prototype.item=function(i){return(i<0||i>=this.length)?null:this[i];};SarissaNodeList.prototype.expr="";if(window.XMLDocument&&(!XMLDocument.prototype.setProperty)){XMLDocument.prototype.setProperty=function(x,y){};}

Sarissa.setXpathNamespaces=function(oDoc,sNsSet){oDoc._sarissa_useCustomResolver=true;var namespaces=sNsSet.indexOf(" ")>-1?sNsSet.split(" "):[sNsSet];oDoc._sarissa_xpathNamespaces=[];for(var i=0;i<namespaces.length;i++){var ns=namespaces[i];var colonPos=ns.indexOf(":");var assignPos=ns.indexOf("=");if(colonPos>0&&assignPos>colonPos+1){var prefix=ns.substring(colonPos+1,assignPos);var uri=ns.substring(assignPos+2,ns.length-1);oDoc._sarissa_xpathNamespaces[prefix]=uri;}else{throw"Bad format on namespace declaration(s) given";}}};XMLDocument.prototype._sarissa_useCustomResolver=false;XMLDocument.prototype._sarissa_xpathNamespaces=[];XMLDocument.prototype.selectNodes=function(sExpr,contextNode,returnSingle){var nsDoc=this;var nsresolver;if(this._sarissa_useCustomResolver){nsresolver=function(prefix){var s=nsDoc._sarissa_xpathNamespaces[prefix];if(s){return s;}

else{throw"No namespace URI found for prefix: '"+prefix+"'";}};}

else{nsresolver=this.createNSResolver(this.documentElement);}

var result=null;if(!returnSingle){var oResult=this.evaluate(sExpr,(contextNode?contextNode:this),nsresolver,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);var nodeList=new SarissaNodeList(oResult.snapshotLength);nodeList.expr=sExpr;for(var i=0;i<nodeList.length;i++){nodeList[i]=oResult.snapshotItem(i);}

result=nodeList;}

else{result=this.evaluate(sExpr,(contextNode?contextNode:this),nsresolver,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;}

return result;};Element.prototype.selectNodes=function(sExpr){var doc=this.ownerDocument;if(doc.selectNodes){return doc.selectNodes(sExpr,this);}

else{throw"Method selectNodes is only supported by XML Elements";}};XMLDocument.prototype.selectSingleNode=function(sExpr,contextNode){var ctx=contextNode?contextNode:null;return this.selectNodes(sExpr,ctx,true);};Element.prototype.selectSingleNode=function(sExpr){var doc=this.ownerDocument;if(doc.selectSingleNode){return doc.selectSingleNode(sExpr,this);}

else{throw"Method selectNodes is only supported by XML Elements";}};Sarissa.IS_ENABLED_SELECT_NODES=true;}



// jquery.xslt.js



var xslTransform={version:20071203,debug:false,init:function(){try{parseFloat(jQuery.fn.jquery)>=1;}catch(e){alert('xslTransform requires jQuery 1.0.4 or greater ... please load it prior to xslTransform');}

try{Sarissa;}catch(e){alert('Missing Sarissa ... please load it prior to xslTransform');}

if(!jQuery.log){jQuery.log=function(){};jQuery.fn.debug=function(){};}

if(this.debug)jQuery.log('xslTransform:init(): version '+xslTransform.version);},XMLSerializer:new XMLSerializer(),serialize:function(data){if(this.debug)jQuery.log('serialize(): received '+typeof(data));if(typeof(data)=='string'){return data;}

return this.XMLSerializer.serializeToString(data);},load:function(xml,meth){if(this.debug)jQuery.log('load(): received '+typeof(xml));var r;if(typeof(xml)=='object'){return xml;}

if(xml.substring(0,1)=='<'){r=this.loadString(xml);}else{r=this.loadFile(xml,meth);}

if(r){r.setProperty('SelectionNamespaces','xmlns:xsl="http://www.w3.org/1999/XSL/Transform"');r.setProperty('SelectionLanguage','XPath');return r;}else{if(this.debug)$.log('Unable to load '+xml);return false;}},loadString:function(str){if(this.debug)jQuery.log('loadString(): '+str+'::'+typeof(str));var p=new DOMParser();var xml=p.parseFromString(str,'text/xml');if(!xml){if(this.debug)jQuery.log('loadString(): parseFromString() failed');return false;}

return xml;},loadFile:function(url,meth){if(this.debug)jQuery.log('loadFile(): '+url+'::'+typeof(url));if(!url){if(this.debug)jQuery.log('ERROR: loadFile() missing url');return false;}

var doc;this.xhrsuccess=function(data,str){if(this.debug)jQuery.log('loadFile() completed successfully ('+str+')');doc=data;return true;};this.xhrerror=function(xhr,err){window.DEBUG=true;if(this.debug)jQuery.log('loadFile() failed to load the requested file: ('+err+') - xml: '+xhr.responseXML+' - text: '+xhr.responseText);doc=null;return false;};if(!meth)meth="GET";$.ajax({type:meth,url:url,async:false,success:this.xhrsuccess,error:this.xhrerror});if(!doc){if(this.debug)jQuery.log('ERROR: document '+url+' not found (404), or unable to load');return false;}

if(doc.length==0){if(this.debug)jQuery.log('ERROR: document '+url+' loaded in loadFile() has no data');return false;}

return doc;},transform:function(xsl,xml,options){var log={'xsl':xsl,'xml':xml,'options':options};if(this.debug)jQuery.log('transform(): '+xsl+'::'+xml+'::'+options.toString());options=options||{};var xml={'request':xml,'doc':this.load(xml,options.meth)};if(options.xpath&&xml.doc&&!jQuery.browser.msie){xml.doc=xml.doc.selectSingleNode(options.xpath.toString());if(this.debug)$.log('transform(): xpath has been run...resulting doc: '+(this.serialize(xml.doc)));}

var result={'xsl':this.load(xsl,options.meth)};result.json=false;if(options.json&&xml.doc){result.json=xml.doc.selectSingleNode(options.json.toString());}

var processor=new XSLTProcessor();processor.importStylesheet(result.xsl);if(options.params&&processor){if(this.debug)jQuery.log('transform(): received xsl params: '+options.params.toString());for(key in options.params){processor.setParameter(null,key.toString(),options.params[key].toString());}}

result.doc=processor.transformToDocument(xml.doc);var errorTxt=Sarissa.getParseErrorText(result.doc);if(this.debug)jQuery.log('transform(): Sarissa parse text: '+errorTxt);if(errorTxt!=Sarissa.PARSED_OK){result.string=Sarissa.getParseErrorText(result.doc)+' :: using '+xsl+' => '+xml.request;if(this.debug)jQuery.log('transform(): error in transformation: '+Sarissa.getParseErrorText(result.doc));return result;}

result.string=this.serialize(result.doc);result.scripts=jQuery('script',result.doc).text();return result;}};xslTransform.init();jQuery.fn.getTransform=function(xsl,xml,options){var settings={append:false,params:{},xpath:'',eval:true,callback:'',json:false,meth:"GET"};jQuery.extend(settings,options);if(xslTransform.debug)jQuery.log('getTransform: '+xsl+'::'+xml+'::'+settings.toString());if(!xsl||!xml){if(xslTransform.debug)jQuery.log('getTransform: missing xsl or xml');return;}

return this.each(function(){var trans=xslTransform.transform(xsl,xml,settings);var re=trans.string.match(/<\?xml.*?\?>/);if(re){trans.string=trans.string.replace(re,'');if(xslTransform.debug)jQuery.log('getTransform(): found an xml declaration and removed it');}

try{if(settings.append)$(this).append(trans.string);else if(settings.repl)$(this).replaceWith(trans.string);else $(this).html(trans.string);}catch(e){if(xslTransform.debug)$.log('getTransform: error placing results of transform into element, falling back to innerHTML: '+e.toString());$(this)[0].innerHTML=trans.string;}

if(settings.eval&&trans.scripts){if(trans.scripts.length>0){if(xslTransform.debug)jQuery.log('Found text/javascript in transformed result');eval.call(window,trans.scripts);}}

if(settings.callback&&jQuery.isFunction(settings.callback)){var json=false;if(settings.json&&trans.json)eval("json = "+trans.json.firstChild.data);settings.callback.apply(window,[trans.string,json]);}});};



// jquery.metadata.js



(function($){$.extend({metadata:{defaults:{type:'class',name:'metadata',cre:/({.*})/,single:'metadata'},setType:function(type,name){this.defaults.type=type;this.defaults.name=name;},get:function(elem,opts){var settings=$.extend({},this.defaults,opts);if(!settings.single.length)settings.single='metadata';var data=$.data(elem,settings.single);if(data)return data;data="{}";if(settings.type=="class"){var m=settings.cre.exec(elem.className);if(m)

data=m[1];}else if(settings.type=="elem"){if(!elem.getElementsByTagName)

return undefined;var e=elem.getElementsByTagName(settings.name);if(e.length)

data=$.trim(e[0].innerHTML);}else if(elem.getAttribute!=undefined){var attr=elem.getAttribute(settings.name);if(attr)

data=attr;}

if(data.indexOf('{')<0)

data="{"+data+"}";data=eval("("+data+")");$.data(elem,settings.single,data);return data;}}});$.fn.metadata=function(opts){return $.metadata.get(this[0],opts);};})(jQuery);



// jquery.cookie.js



jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}

var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}

expires='; expires='+date.toUTCString();}

var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}

return cookieValue;}};
