(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~d59318c7"],{b707:function(e,t,n){"use strict";n.d(t,"r",(function(){return d})),n.d(t,"A",(function(){return l})),n.d(t,"F",(function(){return m})),n.d(t,"E",(function(){return g})),n.d(t,"y",(function(){return r})),n.d(t,"h",(function(){return o})),n.d(t,"G",(function(){return p})),n.d(t,"z",(function(){return u})),n.d(t,"n",(function(){return y})),n.d(t,"D",(function(){return b})),n.d(t,"u",(function(){return v})),n.d(t,"v",(function(){return h})),n.d(t,"d",(function(){return k})),n.d(t,"x",(function(){return C})),n.d(t,"p",(function(){return F})),n.d(t,"m",(function(){return j})),n.d(t,"i",(function(){return I})),n.d(t,"f",(function(){return R})),n.d(t,"e",(function(){return S})),n.d(t,"q",(function(){return x})),n.d(t,"C",(function(){return T})),n.d(t,"b",(function(){return M})),n.d(t,"a",(function(){return O})),n.d(t,"g",(function(){return B})),n.d(t,"j",(function(){return U})),n.d(t,"t",(function(){return J})),n.d(t,"s",(function(){return N})),n.d(t,"c",(function(){return W})),n.d(t,"w",(function(){return q})),n.d(t,"o",(function(){return z})),n.d(t,"l",(function(){return A})),n.d(t,"k",(function(){return D})),n.d(t,"B",(function(){return E}));var r,o,u,i=n("ef8e"),a=n("6d8e"),c=n("6a89"),s=n("6a5d"),f=n("72b4"),d=function(){function e(e,t){this.language=e,this.id=t}return e}(),l=function(){function e(){}return e.getLanguageId=function(e){return(255&e)>>>0},e.getTokenType=function(e){return(1792&e)>>>8},e.getFontStyle=function(e){return(14336&e)>>>11},e.getForeground=function(e){return(8372224&e)>>>14},e.getBackground=function(e){return(4286578688&e)>>>23},e.getClassNameFromMetadata=function(e){var t=this.getForeground(e),n="mtk"+t,r=this.getFontStyle(e);return 1&r&&(n+=" mtki"),2&r&&(n+=" mtkb"),4&r&&(n+=" mtku"),n},e.getInlineStyleFromMetadata=function(e,t){var n=this.getForeground(e),r=this.getFontStyle(e),o="color: "+t[n]+";";return 1&r&&(o+="font-style: italic;"),2&r&&(o+="font-weight: bold;"),4&r&&(o+="text-decoration: underline;"),o},e}(),m=function(){var e=Object.create(null);return e[0]="method",e[1]="function",e[2]="constructor",e[3]="field",e[4]="variable",e[5]="class",e[6]="struct",e[7]="interface",e[8]="module",e[9]="property",e[10]="event",e[11]="operator",e[12]="unit",e[13]="value",e[14]="constant",e[15]="enum",e[16]="enum-member",e[17]="keyword",e[25]="snippet",e[18]="text",e[19]="color",e[20]="file",e[21]="reference",e[22]="customcolor",e[23]="folder",e[24]="type-parameter",function(t){return e[t]||"property"}}(),g=function(){var e=Object.create(null);return e["method"]=0,e["function"]=1,e["constructor"]=2,e["field"]=3,e["variable"]=4,e["class"]=5,e["struct"]=6,e["interface"]=7,e["module"]=8,e["property"]=9,e["event"]=10,e["operator"]=11,e["unit"]=12,e["value"]=13,e["constant"]=14,e["enum"]=15,e["enum-member"]=16,e["enumMember"]=16,e["keyword"]=17,e["snippet"]=25,e["text"]=18,e["color"]=19,e["file"]=20,e["reference"]=21,e["customcolor"]=22,e["folder"]=23,e["type-parameter"]=24,e["typeParameter"]=24,function(t,n){var r=e[t];return"undefined"!==typeof r||n||(r=9),r}}();function p(e){return e&&a["a"].isUri(e.uri)&&c["a"].isIRange(e.range)&&(c["a"].isIRange(e.originSelectionRange)||c["a"].isIRange(e.targetSelectionRange))}(function(e){e[e["Invoke"]=1]="Invoke",e[e["TriggerCharacter"]=2]="TriggerCharacter",e[e["ContentChange"]=3]="ContentChange"})(r||(r={})),function(e){e[e["Text"]=0]="Text",e[e["Read"]=1]="Read",e[e["Write"]=2]="Write"}(o||(o={})),function(e){var t=new Map;t.set("file",0),t.set("module",1),t.set("namespace",2),t.set("package",3),t.set("class",4),t.set("method",5),t.set("property",6),t.set("field",7),t.set("constructor",8),t.set("enum",9),t.set("interface",10),t.set("function",11),t.set("variable",12),t.set("constant",13),t.set("string",14),t.set("number",15),t.set("boolean",16),t.set("array",17),t.set("object",18),t.set("key",19),t.set("null",20),t.set("enum-member",21),t.set("struct",22),t.set("event",23),t.set("operator",24),t.set("type-parameter",25);var n=new Map;function r(e){return t.get(e)}function o(e){return n.get(e)}function u(e,t){return"codicon "+(t?"inline":"block")+" codicon-symbol-"+(n.get(e)||"property")}n.set(0,"file"),n.set(1,"module"),n.set(2,"namespace"),n.set(3,"package"),n.set(4,"class"),n.set(5,"method"),n.set(6,"property"),n.set(7,"field"),n.set(8,"constructor"),n.set(9,"enum"),n.set(10,"interface"),n.set(11,"function"),n.set(12,"variable"),n.set(13,"constant"),n.set(14,"string"),n.set(15,"number"),n.set(16,"boolean"),n.set(17,"array"),n.set(18,"object"),n.set(19,"key"),n.set(20,"null"),n.set(21,"enum-member"),n.set(22,"struct"),n.set(23,"event"),n.set(24,"operator"),n.set(25,"type-parameter"),e.fromString=r,e.toString=o,e.toCssClassName=u}(u||(u={}));var w,b,y=function(){function e(e){this.value=e}return e.Comment=new e("comment"),e.Imports=new e("imports"),e.Region=new e("region"),e}();(function(e){function t(e){return Object(i["i"])(e)&&(Boolean(e.newUri)||Boolean(e.oldUri))}e.is=t})(w||(w={})),function(e){function t(e){return Object(i["i"])(e)&&a["a"].isUri(e.resource)&&Object(i["i"])(e.edit)}e.is=t}(b||(b={}));var v=new s["a"],h=new s["a"],k=new s["a"],C=new s["a"],F=new s["a"],j=new s["a"],I=new s["a"],R=new s["a"],S=new s["a"],x=new s["a"],T=new s["a"],M=new s["a"],O=new s["a"],B=new s["a"],U=new s["a"],J=new s["a"],N=new s["a"],W=new s["a"],q=new s["a"],z=new s["a"],A=new s["a"],D=new s["a"],E=new f["a"]}}]);
//# sourceMappingURL=chunk-vendors~d59318c7.4dfe6ac7.js.map