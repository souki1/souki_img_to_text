import './polyfills.server.mjs';
import{A as h,B as D,C as N,D as S,G as k,K as T,N as U,a as d,b as a,c as C,d as s,e as v,f as F,g as f,h as I,i as y,j as u,k as p,l,m as n,n as x,o as w,p as m,q as b,y as j,z as M}from"./chunk-JEUSYLX3.mjs";var q=[],E=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a({type:t}),t.\u0275inj=s({imports:[U.forRoot(q),U]});let i=t;return i})();var H=(()=>{let t=class t{constructor(o){this.http=o,this.apiUrl="http://127.0.0.1:5000/api/data",this.uploadUrl="http://127.0.0.1:5000/upload"}getData(){return this.http.get(this.apiUrl)}uploadFile(o){let e=new FormData;return console.log(o),e.append("image",o),this.http.post(this.uploadUrl,e)}};t.\u0275fac=function(e){return new(e||t)(v(h))},t.\u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function J(i,t){if(i&1&&n(0,"img",5),i&2){let O=w();u("src",O.imageUrl,F)}}function K(i,t){i&1&&n(0,"pre")}var L=(()=>{let t=class t{constructor(o,e){this.http=o,this.data=e,this.imageUrl=null,this.selectedFile=null,this.message="",this.multilineString=`Line 1
Line 2
Line 3`}onFileSelected(o){let e=o.target.files[0];if(e){this.selectedFile=e;let r=new FileReader;r.onload=()=>{this.imageUrl=r.result},r.readAsDataURL(e)}}uploadImage(){if(this.selectedFile){let o=new FormData;o.append("image",this.selectedFile),console.log(this.selectedFile),this.http.post("http://127.0.0.1:5000/upload",o).subscribe(e=>{console.log("Image uploaded successfully!",e),this.message=e.text},e=>{console.error("Error uploading image:",e)})}}ngOnInit(){this.data.getData().subscribe(o=>{this.message=o.message,console.log(this.message)})}};t.\u0275fac=function(e){return new(e||t)(I(h),I(H))},t.\u0275cmp=d({type:t,selectors:[["app-upload"]],decls:9,vars:3,consts:[["type","file","accept","Image/*",3,"change"],[3,"click"],["width","550px","height","350px","alt","Uploaded Image",3,"src",4,"ngIf"],[4,"ngIf"],["name","","id","","cols","30","rows","10"],["width","550px","height","350px","alt","Uploaded Image",3,"src"]],template:function(e,r){e&1&&(p(0,"input",0),x("change",function(B){return r.onFileSelected(B)}),l(),p(1,"button",1),x("click",function(){return r.uploadImage()}),m(2,"Upload Image"),l(),n(3,"br"),y(4,J,1,1,"img",2),n(5,"br"),y(6,K,1,0,"pre",3),p(7,"textarea",4),m(8),l()),e&2&&(f(4),u("ngIf",r.imageUrl),f(2),u("ngIf",r.finaloutput),f(2),b("    ",r.message,`
`))},dependencies:[j]});let i=t;return i})();var g=(()=>{let t=class t{constructor(){this.title="soukiproject1"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-root"]],decls:4,vars:0,template:function(e,r){e&1&&(p(0,"h2"),m(1,"souki"),l(),n(2,"router-outlet")(3,"app-upload"))},dependencies:[T,L]});let i=t;return i})();var R=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a({type:t,bootstrap:[g]}),t.\u0275inj=s({providers:[S()],imports:[N,E,D,M]});let i=t;return i})();var Q=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a({type:t,bootstrap:[g]}),t.\u0275inj=s({imports:[R,k]});let i=t;return i})();export{Q as a};
