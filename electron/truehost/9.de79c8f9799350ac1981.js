(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ejW6:function(t,n,i){"use strict";i.r(n),i.d(n,"StudentModule",function(){return z});var e=i("ofXK"),b=i("tyNb"),s=i("K6Ak"),c=i("H+bZ"),o=i("l/xc"),a=i("U+wU"),r=i("ENLO"),l=i("fXoL"),d=i("31Lz"),u=i("3Pt+"),h=i("oN+h");function f(t,n){if(1&t&&(l.Nb(0,"option",15),l.mc(1),l.Mb()),2&t){var i=n.$implicit;l.Zb("value",i.id),l.zb(1),l.nc(i.name)}}function p(t,n){if(1&t&&(l.Nb(0,"option",15),l.mc(1),l.Mb()),2&t){var i=n.$implicit;l.Zb("value",i.id),l.zb(1),l.nc(i.name)}}function g(t,n){1&t&&(l.Nb(0,"div",16),l.Kb(1,"spinner",17),l.Mb())}function m(t,n){if(1&t&&(l.Nb(0,"tr"),l.Nb(1,"td"),l.Kb(2,"img",22),l.Mb(),l.Nb(3,"td"),l.mc(4),l.Mb(),l.Nb(5,"td"),l.mc(6),l.Mb(),l.Nb(7,"td"),l.mc(8),l.Mb(),l.Nb(9,"td"),l.mc(10),l.Mb(),l.Kb(11,"td"),l.Mb()),2&t){var i=n.$implicit,e=l.Xb(3);l.zb(2),l.Zb("src",e.url+i.photo,l.gc),l.zb(2),l.oc(" ",i.first_name+" "+i.middle_name+" "+i.last_name," "),l.zb(2),l.oc(" ",i.register_no," "),l.zb(2),l.oc(" ",i.roll," "),l.zb(2),l.oc(" ",e.age(i)," ")}}function M(t,n){if(1&t&&(l.Nb(0,"div",18),l.Nb(1,"div",19),l.Nb(2,"table",20),l.Nb(3,"tr"),l.Nb(4,"th"),l.mc(5," Photo "),l.Mb(),l.Nb(6,"th"),l.mc(7," Name "),l.Mb(),l.Nb(8,"th"),l.mc(9," Register No "),l.Mb(),l.Nb(10,"th"),l.mc(11," Roll "),l.Mb(),l.Nb(12,"th"),l.mc(13," Age "),l.Mb(),l.Nb(14,"th"),l.mc(15," Gaurdian Name "),l.Mb(),l.Nb(16,"th"),l.mc(17," Fees Progress "),l.Mb(),l.Nb(18,"th"),l.mc(19," Action "),l.Mb(),l.Mb(),l.kc(20,m,12,5,"tr",21),l.Mb(),l.Mb(),l.Mb()),2&t){var i=l.Xb(2);l.zb(20),l.Yb("ngForOf",i.students)}}function N(t,n){if(1&t){var i=l.Ob();l.Nb(0,"div",1),l.Nb(1,"div",2),l.Nb(2,"div",3),l.Nb(3,"div",4),l.Nb(4,"label"),l.mc(5,"Class"),l.Mb(),l.Nb(6,"select",5),l.Ub("change",function(){return l.fc(i),l.Xb().change()})("ngModelChange",function(t){return l.fc(i),l.Xb()._class=t}),l.kc(7,f,2,2,"option",6),l.Mb(),l.Mb(),l.Nb(8,"div",4),l.Nb(9,"label"),l.mc(10,"Section"),l.Mb(),l.Nb(11,"select",7),l.Ub("ngModelChange",function(t){return l.fc(i),l.Xb()._section=t}),l.Nb(12,"option",8),l.mc(13,"All"),l.Mb(),l.kc(14,p,2,2,"option",6),l.Mb(),l.Mb(),l.Nb(15,"div",9),l.Nb(16,"button",10),l.Ub("click",function(){return l.fc(i),l.Xb().load()}),l.mc(17,"Load"),l.Mb(),l.Nb(18,"button",11),l.mc(19,"Reset"),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Nb(20,"div",12),l.kc(21,g,2,0,"div",13),l.kc(22,M,21,1,"div",14),l.Mb(),l.Mb()}if(2&t){var e=l.Xb();l.zb(6),l.Yb("ngModel",e._class),l.zb(1),l.Yb("ngForOf",e.basic.classes),l.zb(4),l.Yb("ngModel",e._section),l.zb(3),l.Yb("ngForOf",e.sections),l.zb(7),l.Yb("ngIf",1==e.state),l.zb(1),l.Yb("ngIf",2==e.state)}}var v=[{path:"",component:function(){function t(t,n,i,e,b){var s=this;this.connection=t,this.basic=n,this.auth=i,this.client=e,this.title=b,this._section="all",this.sections=[],this.datas=[],this.state=0,this.students=[],this.url=r.a.url+"uploads/images/student/",this.basic.loaded?(this._class=this.basic.classes[0].id,this.change()):this.basic.onLoaded.subscribe(function(t){s._class=s.basic.classes[0].id,s.change()}),this._date=Date.now(),this.title.title="Student List"}return t.prototype.ngOnInit=function(){},t.prototype.change=function(){var t=this;this.basic.classes.forEach(function(n){n.id==t._class&&(t.sections=n.sections)}),this._section="all",console.log(this._class,this.sections)},t.prototype.load=function(){var t=this;this.state=1,this.client.post("student/list",{class_id:this._class,section_id:this._section,branch_id:this.auth.user.branch_id}).subscribe(function(n){console.log(n,"student list"),t.students=n,t.state=2},function(n){t.state=0})},t.prototype.age=function(t){if(t.birthday){var n=new Date(t.birthday),i=Math.abs(this._date-n.getTime());return Math.floor(i/864e5/365)}},t.\u0275fac=function(n){return new(n||t)(l.Jb(d.a),l.Jb(a.a),l.Jb(o.a),l.Jb(c.a),l.Jb(s.a))},t.\u0275cmp=l.Db({type:t,selectors:[["app-studentlist"]],decls:1,vars:1,consts:[["class","x-wrapper",4,"ngIf"],[1,"x-wrapper"],[1,"x-header","p-3"],[1,"row"],[1,"col-md-4"],[1,"form-control",3,"ngModel","change","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"form-control",3,"ngModel","ngModelChange"],["value","all"],[1,"col-md-4","pt-4"],[1,"btn","btn-primary","me-2",3,"click"],[1,"btn","btn-danger"],[1,"x-body"],["class","p-3 text-center",4,"ngIf"],["class","p-3",4,"ngIf"],[3,"value"],[1,"p-3","text-center"],["color","red","size","50"],[1,"p-3"],[1,"data-table-wrapper"],[1,"table","data-table"],[4,"ngFor","ngForOf"],["alt","",3,"src"]],template:function(t,n){1&t&&l.kc(0,N,23,6,"div",0),2&t&&l.Yb("ngIf",n.basic.loaded)},directives:[e.i,u.g,u.c,u.d,e.h,u.e,u.h,h.a],styles:[""]}),t}()}],_=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({imports:[[b.d.forChild(v)],b.d]}),t}(),w=i("Tx//"),z=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({imports:[[e.b,_,u.f,u.b,w.a]]}),t}()}}]);