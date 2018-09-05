webpackJsonp([16],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, authServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        console.log('hello');
        this.getAboutContent();
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.getAboutContent = function () {
        var _this = this;
        console.log('I am here');
        var userData = 1;
        //API Document here
        this.authServiceProvider.postData(userData, "get_about_content").then(function (result) {
            //console.log(result);
            _this.responseData = result;
            _this.about = _this.responseData.data;
            //this.programName = this.program[0].p_name;
            console.log(_this.responseData.data);
        }, function (err) {
            console.log('error');
            //Connection failed or something like that
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/about/about.html"*/'  <ion-header>\n    <ion-navbar color="ds-primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Deepak The Inspiration</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n  <ion-content padding>\n    <h1>DEEPAK</h1>\n    <p>\n      <img src="../assets/imgs/profile.jpeg">\n    </p>\n    <p *ngFor="let a of about" [innerHTML]="a.about_us"></p>\n\n  </ion-content>'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__singleprogram_singleprogram__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProgramlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgramlistPage = /** @class */ (function () {
    function ProgramlistPage(navCtrl, navParams, authServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.initiativeid = this.navParams.get('pid');
        this.getprogramById();
    }
    ProgramlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramlistPage');
    };
    ProgramlistPage.prototype.getprogramById = function () {
        var _this = this;
        var userData;
        //console.log(this.userDetails);
        userData = {
            parent_id: this.initiativeid
        };
        //API Document here
        this.authServiceProvider.postData(userData, "programListById").then(function (result) {
            //console.log(result);
            _this.responseData = result;
            _this.programlist = _this.responseData.data;
        }, function (err) {
            //Connection failed or something like that
        });
    };
    ProgramlistPage.prototype.singleprogram = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__singleprogram_singleprogram__["a" /* SingleprogramPage */], { singleId: id });
    };
    ProgramlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-programlist',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/programlist/programlist.html"*/'<ion-header>\n  <ion-navbar color="ds-primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Programs</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <div class="box-red-1">\n          <img src="assets/imgs/pr01.png">\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-list margin-top>\n    <ion-item *ngFor="let p of programlist">\n      <ion-thumbnail item-start>\n        <img src="assets/logo/{{ p.p_logo }}">\n      </ion-thumbnail>\n      <h2 (click)="singleprogram(p.id)">{{ p.p_name }}</h2>\n      <button ion-button clear item-end (click)="singleprogram(p.id)">\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n      \n    </ion-item>\n    <!--\n\n      <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>CEO Of Life</h2>\n      <p>By Deepak Shinde</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>Body Mind And You</h2>\n      <p>By Deepak Shinde</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>Jashn-E-Life</h2>\n      <p>By Deepak Shinde</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>jashn-E-Fitness</h2>\n      <p>By Deepak Shinde</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>Joy Of Freedom</h2>\n      <p>By Deepak Shinde</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>Wondering Monks</h2>\n      <p>By Deepak Shinde</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>Masterstrokes</h2>\n      <p>By Deepak Shinde</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    -->\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/programlist/programlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ProgramlistPage);
    return ProgramlistPage;
}());

//# sourceMappingURL=programlist.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleprogramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleprogramPage = /** @class */ (function () {
    function SingleprogramPage(navCtrl, navParams, authServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.singleId = this.navParams.get('singleId');
        this.getsingleprogram();
    }
    SingleprogramPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SingleprogramPage');
    };
    SingleprogramPage.prototype.getsingleprogram = function () {
        var _this = this;
        var userData;
        //console.log(this.userDetails);
        userData = {
            p_id: this.singleId
        };
        //API Document here
        this.authServiceProvider.postData(userData, "programById").then(function (result) {
            //console.log(result);
            _this.responseData = result;
            _this.program = _this.responseData.data;
            _this.programName = _this.program[0].p_name;
            console.log(_this.program[0].p_name);
        }, function (err) {
            //Connection failed or something like that
        });
    };
    SingleprogramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-singleprogram',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/singleprogram/singleprogram.html"*/'<ion-header>\n    <ion-navbar color="ds-primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>{{ programName }}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n   \n  <ion-row style="background-color:white; padding:5px;">\n    <ion-col *ngFor="let p of program">\n      \n      <p [innerHTML]="p.description"></p>\n        \n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/singleprogram/singleprogram.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SingleprogramPage);
    return SingleprogramPage;
}());

//# sourceMappingURL=singleprogram.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar color="ds-primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <h1></h1>\n    <p>\n      <img src="../assets/imgs/ds-contact.png">\n    </p>\n    <p class="addressBold">#22, Balaji Avenue, 2nd Floor, 5th Main Shankar Mutt Road</p>\n    <p class="addressSmall">Near Chikkanna Garden, Chamrajpet.</p>\n    <p class="addressSmall"> Bengaluru - 560004</p>\n    <p class="addressSmall">Email:info@deepaktheinspiration.com</p>\n    <p class="addressSmall">Mob: 984512900, 9845139000</p>\n\n</ion-content>\n'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = /** @class */ (function () {
    function ForgotPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = { "mobile": "" };
    }
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPage');
    };
    ForgotPage.prototype.forgot = function () {
        console.log('forgot');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/forgot/forgot.html"*/'<ion-content padding>\n  <ion-row justify-content-center>\n    <ion-col col-6>\n      <img src="assets/imgs/thumb/logo_small.png" width="320">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Mobile</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="userData.mobile"></ion-input>\n      </ion-item>\n    </ion-list>\n  </ion-row>\n  <ion-row>\n\n    <ion-col col-12>\n      <div>\n        <button ion-button full (click)="forgot(this.userData)" color="ds-primary">Resend Password</button>\n      </div>\n    </ion-col>\n  </ion-row>\n \n</ion-content>'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/forgot/forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, authServiceProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.toastCtrl = toastCtrl;
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
        this.userData = { "fullname": "", "mobile": "", "DOB": "" };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.doregister = function () {
        var _this = this;
        var userData;
        //API Document here
        if (this.userData.mobile && this.userData.fullname) {
            this.authServiceProvider.postData(this.userData, "create_user_register").then(function (result) {
                _this.responseData = result;
                console.log(_this.responseData.status);
                if (_this.responseData.status == 1) {
                    localStorage.setItem('userData', JSON.stringify(_this.responseData));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                }
                else {
                    _this.presentToast('Something is wrong');
                }
            }, function (err) {
                //Connection failed or something like that
            });
        }
        else {
            this.presentToast('Please provide all the details');
        }
    };
    RegisterPage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'top',
            cssClass: 'toast'
        });
        toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/register/register.html"*/'<ion-content padding>\n    <ion-row justify-content-center>\n    <ion-col col-6>\n      <img src="assets/imgs/thumb/logo_small.png" width="220">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-list>\n          <ion-item>\n            <ion-label fixed>Full Name</ion-label>\n            <ion-input type="text" value="" [(ngModel)]="userData.fullname"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label fixed>Mobile</ion-label>\n            <ion-input type="text" [(ngModel)]="userData.mobile"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n          <ion-label>DOB</ion-label>\n          <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <div>\n            <button ion-button full (click)="doregister(this.userData);" color="ds-primary">Register</button>\n\n          </div>\n          <div style="font-size:12px; margin-top:10px;" margin-top>\n              <a (click)="goToLogin()"> Already have an account? </a>\n          </div>\n        </ion-col>\n        </ion-row>\n  </ion-content>\n'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mfs_mfs__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusicPage = /** @class */ (function () {
    function MusicPage(navCtrl, navParams, sanitizer, authServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.authServiceProvider = authServiceProvider;
        this.pageTitle = 'Music For Soul';
        this.getMusic();
    }
    MusicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicPage');
    };
    MusicPage.prototype.getMusic = function () {
        var _this = this;
        var userData;
        //console.log(this.userDetails);
        userData = {
            status: 1,
        };
        //API Document here
        this.authServiceProvider.postData(userData, "get_music_soul_content").then(function (result) {
            //console.log(result);
            _this.responseData = result;
            _this.music_master = _this.responseData.data;
            //console.log(this.music_master);
        }, function (err) {
            //Connection failed or something like that
        });
    };
    MusicPage.prototype.goTo = function (mid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mfs_mfs__["a" /* MfsPage */], { param1: mid });
    };
    MusicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-music',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/music/music.html"*/'<ion-header>\n    <ion-navbar color="ds-primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Music for the Soul</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item *ngFor="let m of music_master" (click)="goTo(m.id)">\n          <ion-thumbnail item-start>\n            <img src="assets/imgs/{{ m.image }}">\n          </ion-thumbnail>\n          <h2>{{ m.tittle }}</h2>\n          <p>&nbsp;</p>\n          <button ion-button clear item-end (click)="goTo(m.id)">\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n        </ion-item>\n        \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/music/music.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], MusicPage);
    return MusicPage;
}());

//# sourceMappingURL=music.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MfsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DailymessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MfsPage = /** @class */ (function () {
    function MfsPage(navCtrl, loadingCtrl, domSanitizer, navParams, authServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.domSanitizer = domSanitizer;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.video = {
            url: 'https://www.youtube.com/embed/',
            title: 'Awesome video'
        };
        var userData;
        this.mid = navParams.get('param1');
        //console.log(this.mid);
        userData = {
            id: this.mid,
        };
        //console.log(this.mid);
        //API Document here
        this.authServiceProvider.postData(userData, "get_music_by_id").then(function (result) {
            console.log(result);
            _this.responseData = result;
            _this.music_master = _this.responseData.data;
            console.log(_this.music_master[0].music_link);
            _this.code = _this.music_master[0].music_link;
            _this.trustedVideoUrl = _this.domSanitizer.bypassSecurityTrustResourceUrl(_this.video.url + _this.code);
            _this.content = _this.music_master[0].content;
        }, function (err) {
            //Connection failed or something like that
        });
    }
    MfsPage.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url + this.code);
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    MfsPage.prototype.handleIFrameLoadEvent = function () {
        this.loading.dismiss();
    };
    MfsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mfs',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/mfs/mfs.html"*/'<ion-header>\n  <ion-navbar color="ds-primary">\n    <button ion-button menuToggle start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Music For Soul</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n        <iframe width="100%"\n            height="215"\n            [src]="trustedVideoUrl ? trustedVideoUrl : null"\n            (load)="trustedVideoUrl ? handleIFrameLoadEvent() : null"\n            frameborder="0"\n            allowfullscreen></iframe>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <div class="middleContent">\n          {{ content }}\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/mfs/mfs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], MfsPage);
    return MfsPage;
}());

//# sourceMappingURL=mfs.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.logout();
    }
    LogoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogoutPage');
    };
    LogoutPage.prototype.backtoLanding = function () {
        console.log(this.app.getRootNav());
        var root = this.app.getRootNavById('6997');
        //root.popToRoot();
    };
    LogoutPage.prototype.logout = function () {
        localStorage.clear();
        this.login();
    };
    LogoutPage.prototype.login = function () {
        //alert('hello');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logout',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/logout/logout.html"*/'<!--\n  Generated template for the LogoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>logout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/logout/logout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var apiUrl = "http://www.deepaktheinspiration.com/api/DsWebServices/";
var method;
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, method) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */];
            //console.log(this.getFormData(credentials));
            var formData = _this.getFormData(credentials);
            _this.http.post(apiUrl + method, formData.toString(), {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded')
            }).subscribe(function (res) {
                resolve(res);
            }), function (err) {
                reject(err);
            };
        });
    };
    AuthServiceProvider.prototype.getFormData = function (object) {
        var formData = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        Object.keys(object).forEach(function (key) { return formData.set(key, object[key]); });
        return formData;
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		300,
		15
	],
	"../pages/categories/categories.module": [
		301,
		14
	],
	"../pages/contact/contact.module": [
		302,
		13
	],
	"../pages/dailymessages/dailymessages.module": [
		303,
		12
	],
	"../pages/forgot/forgot.module": [
		304,
		11
	],
	"../pages/login/login.module": [
		305,
		10
	],
	"../pages/logout/logout.module": [
		306,
		9
	],
	"../pages/mfs/mfs.module": [
		307,
		8
	],
	"../pages/music/music.module": [
		308,
		7
	],
	"../pages/newhome/newhome.module": [
		309,
		6
	],
	"../pages/otp/otp.module": [
		310,
		5
	],
	"../pages/programlist/programlist.module": [
		311,
		4
	],
	"../pages/register/register.module": [
		312,
		3
	],
	"../pages/singleprogram/singleprogram.module": [
		313,
		2
	],
	"../pages/upcoming/upcoming.module": [
		314,
		1
	],
	"../pages/video/video.module": [
		315,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dailymessages_dailymessages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upcoming_upcoming__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categories_categories__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__video_video__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, sanitizer) {
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.getquote();
        this.getupcoming();
    }
    HomePage.prototype.getquote = function () {
        //api call jo quote of the day layegi
    };
    HomePage.prototype.getupcoming = function () {
        //api call for upcoming program
    };
    HomePage.prototype.goTo = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dailymessages_dailymessages__["a" /* DailymessagesPage */], { param1: id });
    };
    HomePage.prototype.upcoming = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__upcoming_upcoming__["a" /* UpcomingPage */]);
    };
    HomePage.prototype.viewCategories = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__categories_categories__["a" /* CategoriesPage */]);
    };
    HomePage.prototype.goTochannel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__video_video__["a" /* VideoPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="ds-primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Deepak The Inspiration</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h6>Quote of the day</h6>\n  <ion-row class="box-white" margin-top>\n    <ion-col>\n      <h1>"Every today is the first day of the rest of your future.Start a fresh everyday."</h1>\n    </ion-col>\n  </ion-row>\n  <h6>Daily Message</h6>\n  <ion-row class="box-white" margin-top>\n    <ion-slides>\n\n\n      <ion-slide>\n        <a href="#" (click)="goTo(\'So6DU2qVzPQ\')">\n          <img src="assets/imgs/thumb/thumb01.jpg">\n        </a>\n      </ion-slide>\n\n      <ion-slide>\n          <a href="#" (click)="goTo(\'o1aelMUCkLo\')">\n              <img src="assets/imgs/thumb/thumb02.jpg">\n            </a>\n      </ion-slide>\n      <ion-slide>\n          <a href="#" (click)="goTo(\'tmSjuOsCXYc\')">\n              <img src="assets/imgs/thumb/thumb03.jpg">\n            </a>\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n  <ion-row margin-top>\n      <ion-col col-9 align-self-center>\n        <h6>\n          Upcoming Programs\n        </h6>\n      </ion-col>\n\n      <ion-col align-self-end>\n        <div class="small-text">\n          <a (click)="viewCategories()">View All</a>\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <a href="#" (click)="upcoming();">\n  <ion-row class="box-red-1" >\n    <ion-col class="small-text">\n      In Jashn-E-Life on 5th August 2018, Deepak will speak on M for motivation.Come and experience the transformation.Venue BBGL\n      Hall, Basvangudi, 7\n    </ion-col>\n  </ion-row>\n</a>\n<ion-row margin-top class="box-white">\n  <ion-col col-3 align-self-start>\n    <img src="assets/imgs/ds01.png">\n  </ion-col>\n  <ion-col col-7 align-self-end>\n      <ion-input type="text" placeholder="How Do You Feel Today?"></ion-input>\n  </ion-col>\n</ion-row>\n  <ion-row margin-top>\n      <ion-col col-9 align-self-start>\n        <h6>\n          Instant Transformation\n        </h6>\n      </ion-col>\n\n      <ion-col align-self-end>\n        <div class="small-text">\n          <a href="#" (click)="goTochannel();">View All</a>\n        </div>\n      </ion-col>\n\n    </ion-row>\n  <ion-row class="box-white">\n    <ion-slides>\n      <ion-slide>\n        <a href="#" (click)="goTo(\'mlSSPeNhMFY\')">\n          <img src="assets/imgs/thumb/thumb04.jpg">\n        </a>\n      </ion-slide>\n      <ion-slide>\n        <a href="#" (click)="goTo(\'BeNYdoDDPjk\')">\n          <img src="assets/imgs/thumb/thumb04.jpg">\n        </a>\n      </ion-slide>\n      <ion-slide>\n        <a href="#" (click)="goTo(\'Qzslv2FlNYo\')">\n          <img src="assets/imgs/thumb/thumb05.jpg">\n        </a>\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtpPage = /** @class */ (function () {
    function OtpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OtpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtpPage');
    };
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otp',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/otp/otp.html"*/'<!--\n  Generated template for the OtpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>OTP</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/otp/otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_otp_otp__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dailymessages_dailymessages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_programlist_programlist__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_logout_logout__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_upcoming_upcoming__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_categories_categories__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_singleprogram_singleprogram__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_video_video__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_mfs_mfs__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_youtube_youtube__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_newhome_newhome__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_music_music__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_contact_contact__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_social_sharing__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_forgot_forgot__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dailymessages_dailymessages__["a" /* DailymessagesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_upcoming_upcoming__["a" /* UpcomingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_programlist_programlist__["a" /* ProgramlistPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_singleprogram_singleprogram__["a" /* SingleprogramPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_youtube_youtube__["a" /* YoutubePipe */],
                __WEBPACK_IMPORTED_MODULE_13__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_newhome_newhome__["a" /* NewhomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_music_music__["a" /* MusicPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_mfs_mfs__["a" /* MfsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_forgot_forgot__["a" /* ForgotPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dailymessages/dailymessages.module#DailymessagesPageModule', name: 'DailymessagesPage', segment: 'dailymessages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mfs/mfs.module#MfsPageModule', name: 'MfsPage', segment: 'mfs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/music/music.module#MusicPageModule', name: 'MusicPage', segment: 'music', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newhome/newhome.module#NewhomePageModule', name: 'NewhomePage', segment: 'newhome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otp/otp.module#OtpPageModule', name: 'OtpPage', segment: 'otp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/programlist/programlist.module#ProgramlistPageModule', name: 'ProgramlistPage', segment: 'programlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/singleprogram/singleprogram.module#SingleprogramPageModule', name: 'SingleprogramPage', segment: 'singleprogram', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upcoming/upcoming.module#UpcomingPageModule', name: 'UpcomingPage', segment: 'upcoming', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video/video.module#VideoPageModule', name: 'VideoPage', segment: 'video', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dailymessages_dailymessages__["a" /* DailymessagesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_upcoming_upcoming__["a" /* UpcomingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_programlist_programlist__["a" /* ProgramlistPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_singleprogram_singleprogram__["a" /* SingleprogramPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_newhome_newhome__["a" /* NewhomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_music_music__["a" /* MusicPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_mfs_mfs__["a" /* MfsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_forgot_forgot__["a" /* ForgotPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_social_sharing__["a" /* SocialSharing */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_categories_categories__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_video_video__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_logout_logout__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_newhome_newhome__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, socialSharing, app, alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.socialSharing = socialSharing;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_9__pages_newhome_newhome__["a" /* NewhomePage */] },
            { title: 'Programs', component: __WEBPACK_IMPORTED_MODULE_5__pages_categories_categories__["a" /* CategoriesPage */] },
            { title: 'Simplifying Life', component: __WEBPACK_IMPORTED_MODULE_6__pages_video_video__["a" /* VideoPage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */] },
            { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_7__pages_logout_logout__["a" /* LogoutPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            //for backbutton problem
            _this.platform.registerBackButtonAction(function () {
                // Catches the active view
                var nav = _this.app.getActiveNavs()[0];
                var activeView = nav.getActive();
                // Checks if can go back before show up the alert
                if (activeView.name === 'NewhomePage') {
                    if (nav.canGoBack()) {
                        nav.pop();
                    }
                    else {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Fechar o App',
                            message: 'Você tem certeza?',
                            buttons: [{
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function () {
                                        _this.nav.setRoot('NewhomePage');
                                        console.log('** Saída do App Cancelada! **');
                                    }
                                }, {
                                    text: 'Fechar o App',
                                    handler: function () {
                                        _this.logout();
                                        _this.platform.exitApp();
                                    }
                                }]
                        });
                        alert_1.present();
                    }
                }
            });
            //code for back button ends here
            _this.currentUser = JSON.parse(localStorage.getItem('userData'));
            _this.rootPage = _this.currentUser
                ? __WEBPACK_IMPORTED_MODULE_9__pages_newhome_newhome__["a" /* NewhomePage */]
                : __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot('LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header class="ds-header-sidebar">\n      \n    <ion-toolbar>\n      <ion-title>&nbsp;</ion-title>\n    </ion-toolbar>\n    <img src="assets/imgs/thumb/logo_small.png" width="100%" height="200">\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n      <ion-toolbar class="small-text">\n          Developed by Novastreams\n      </ion-toolbar>\n    </ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var YoutubePipe = /** @class */ (function () {
    function YoutubePipe(dom) {
        this.dom = dom;
    }
    /**
     * Takes a value and makes it lowercase.
     */
    YoutubePipe.prototype.transform = function (value) {
        console.log(this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + value));
        return this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + value);
        //return value.toLowerCase();
    };
    YoutubePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'youtube',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], YoutubePipe);
    return YoutubePipe;
}());

//# sourceMappingURL=youtube.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newhome_newhome__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authServiceProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.toastCtrl = toastCtrl;
        this.userData = { "mobile": "", "password": "" };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var userData;
        //API Document here
        if (this.userData.mobile && this.userData.password) {
            this.authServiceProvider.postData(this.userData, "login_users").then(function (result) {
                _this.responseData = result;
                console.log(_this.responseData.status);
                if (_this.responseData.status == 1) {
                    localStorage.setItem('userData', JSON.stringify(_this.responseData));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__newhome_newhome__["a" /* NewhomePage */]);
                }
                else {
                    _this.presentToast('Wrong username or password');
                }
            }, function (err) {
                //Connection failed or something like that
            });
        }
        else {
            this.presentToast('Give Username and Password');
        }
    };
    LoginPage.prototype.dologin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.goToForgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__forgot_forgot__["a" /* ForgotPage */]);
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top',
            cssClass: 'toast'
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/login/login.html"*/'<ion-content padding>\n  <ion-row justify-content-center>\n    <ion-col col-6>\n      <img src="assets/imgs/thumb/logo_small.png" width="320">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>Mobile</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="userData.mobile"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Password [OTP]</ion-label>\n        <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n      </ion-item>\n    </ion-list>\n  </ion-row>\n  <ion-row>\n\n    <ion-col col-12>\n      <div>\n        <button ion-button full (click)="login(this.userData)" color="ds-primary">Login</button>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row justify-content-start>\n    <ion-col col-6>\n      <div>\n        <p class="small-text">\n          <a href="#" (click)="goToRegister()">Create Account?</a>\n        </p>\n      </div>\n    </ion-col> \n    <ion-col col-6>\n      <div>\n        <p class="small-text">\n          <a href="#" (click)="goToForgot()">Forgot Password</a>\n        </p>\n      </div>\n    </ion-col>  \n\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__programlist_programlist__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl, navParams, authServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.getMasterList();
    }
    CategoriesPage.prototype.getMasterList = function () {
        var _this = this;
        var userData;
        //console.log(this.userDetails);
        userData = {
            status: 1,
        };
        //API Document here
        this.authServiceProvider.postData(userData, "select_master_program").then(function (result) {
            //console.log(result);
            _this.responseData = result;
            _this.program_master = _this.responseData.data;
            //console.log(this.responseData.data);
        }, function (err) {
            //Connection failed or something like that
        });
    };
    CategoriesPage.prototype.programlist = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__programlist_programlist__["a" /* ProgramlistPage */], { pid: id });
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/categories/categories.html"*/'<ion-header>\n  <ion-navbar color="ds-primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Programs</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <div class="box-red-1">\n        <img src="assets/imgs/banners/banner_business_alexanders_upd.jpg">\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-list margin-top>\n    <ion-item *ngFor="let p of program_master" class="custom-padding">     \n\n      <h2 (click)="programlist(p.id)">{{ p.p_name }}</h2>\n      \n      <button ion-button clear item-end (click)="programlist(p.id)">\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-item>\n    <!-- \n      <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>Business Programs</h2>\n      <p>By Deepak Shinde</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>Kids and adolescents</h2>\n      <p>By Deepak Shinde</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>Public Programs</h2>\n      <p>By Deepak Shinde</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>Education</h2>\n      <p>By Deepak Shinde</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n     -->\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/categories/categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideoPage = /** @class */ (function () {
    function VideoPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.channelId = 'UCV-C9s6G1bMZoSoymqe8Vvg';
        this.maxRes = '15';
        this.googleToken = 'AIzaSyBeK4Q2puAT5RxW8NW7tigiTwJkE51b40U';
        this.search = 'DEEPAK';
        this.posts = [];
        var url = "https://www.googleapis.com/youtube/v3/search?part=snippet%2C+id&channelId=UCV-C9s6G1bMZoSoymqe8Vvg&maxResults=5&key=" + this.googleToken;
        //console.log(url);  
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    VideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPage');
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/video/video.html"*/'<ion-header>\n    <ion-navbar color="ds-primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Simplifying Life</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let item of posts">\n    <ion-card-title style="margin-left: 20px; font-size: 16px;">\n      <!--{{ item.snippet.title }}-->\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <!--<img [src]="item.snippet.thumbnails.medium.url"/>-->\n      <iframe width="100%" height="215" [src]="item.id.videoId | youtube" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/video/video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailymessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DailymessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DailymessagesPage = /** @class */ (function () {
    function DailymessagesPage(navCtrl, loadingCtrl, domSanitizer, navParams, authServiceProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.domSanitizer = domSanitizer;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.pageTitle = 'Transformation';
        this.video = {
            url: 'https://www.youtube.com/embed/',
            title: 'Awesome video'
        };
        this.code = navParams.get('param1');
        console.log(this.code);
    }
    DailymessagesPage.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url + this.code);
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    DailymessagesPage.prototype.handleIFrameLoadEvent = function () {
        this.loading.dismiss();
    };
    DailymessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dailymessages',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/dailymessages/dailymessages.html"*/'<ion-header>\n    <ion-navbar color="ds-primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>{{ pageTitle }}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n        <iframe width="100%"\n            height="215"\n            [src]="trustedVideoUrl ? trustedVideoUrl : null"\n            (load)="trustedVideoUrl ? handleIFrameLoadEvent() : null"\n            frameborder="0"\n            allowfullscreen></iframe>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <div class="middleContent">\n          You cannot look at life in isolation. If you want to understand life you need to look at life in totality. If you look at it in isolation then there will always be a misunderstanding. In totality there is clarity.\n          Good Luck.. Bad Luck.. Who Knows!!  \n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/dailymessages/dailymessages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], DailymessagesPage);
    return DailymessagesPage;
}());

//# sourceMappingURL=dailymessages.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpcomingPage = /** @class */ (function () {
    function UpcomingPage(navCtrl, navParams, authServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.getUpcomingList();
    }
    UpcomingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpcomingPage');
    };
    UpcomingPage.prototype.getUpcomingList = function () {
        var _this = this;
        var userData;
        //console.log(this.userDetails);
        userData = {
            status: 1,
        };
        //API Document here
        this.authServiceProvider.postData(userData, "select_program_Api").then(function (result) {
            //console.log(result);
            _this.responseData = result;
            _this.program_master = _this.responseData.data;
            //console.log(this.responseData.data);    
        }, function (err) {
            //Connection failed or something like that
        });
    };
    UpcomingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upcoming',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/upcoming/upcoming.html"*/'<ion-header>\n  <ion-navbar color="ds-primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Upcoming Programs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-row margin-bottom>\n        <ion-col>\n          <div class="box-red-1">\n            <img src="assets/imgs/pr01.png">\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-list margin-top>\n        <ion-item *ngFor="let p of program_master">\n    \n          <h2>{{ p.p_name }}</h2>\n          <p>{{ p.p_date }}</p>\n          <p>{{ p.from_time }} - {{ p.to_time }}</p>\n          <p>{{ p.p_venue }}</p>\n          \n        </ion-item>\n        \n      </ion-list>\n\n</ion-content>\n<ion-footer>\n   <div col-12>\n      <div col-10 align-self-center style="color:darkslategrey;">\n          #22, Balaji Avenue, 2nd Floor, 5th Main Shankar Mutt Road, \n          Bengaluru-560004, \n          Email:info@deepaktheinspiration.com\n      </div>\n   </div>\n</ion-footer>'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/upcoming/upcoming.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], UpcomingPage);
    return UpcomingPage;
}());

//# sourceMappingURL=upcoming.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewhomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dailymessages_dailymessages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__video_video__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categories_categories__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__music_music__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__upcoming_upcoming__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the NewhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewhomePage = /** @class */ (function () {
    function NewhomePage(navCtrl, navParams, sanitizer, socialSharing, authServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.socialSharing = socialSharing;
        this.authServiceProvider = authServiceProvider;
        this.message = "Deepak The Inspiration";
        this.link = "http://www.deepaktheinspiration.com";
        this.subject = null;
        this.file = null;
        this.imageUrl = "http://deepaktheinspiration.com/api/uploads/daily_quotes/";
        this.pageTitle = 'Transformation';
        this.getquote();
    }
    NewhomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewhomePage');
    };
    NewhomePage.prototype.getquote = function () {
        var _this = this;
        var userData;
        //console.log(this.userDetails);
        userData = {
            status: 1,
        };
        //API Document here
        this.authServiceProvider.postData(userData, "selectapi").then(function (result) {
            //console.log(result);
            _this.responseData = result;
            _this.quotemaster = _this.responseData.data;
            console.log(_this.quotemaster);
        }, function (err) {
            //Connection failed or something like that
        });
    };
    NewhomePage.prototype.goTo = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dailymessages_dailymessages__["a" /* DailymessagesPage */], { param1: id, param2: this.pageTitle });
    };
    NewhomePage.prototype.goTochannel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__video_video__["a" /* VideoPage */]);
    };
    NewhomePage.prototype.viewCategories = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__categories_categories__["a" /* CategoriesPage */]);
    };
    NewhomePage.prototype.goToMusic = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__music_music__["a" /* MusicPage */]);
    };
    NewhomePage.prototype.goToupcoming = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__upcoming_upcoming__["a" /* UpcomingPage */]);
    };
    NewhomePage.prototype.share = function () {
        this.socialSharing.share(this.message, this.subject, this.link, this.file).then(function () {
        }).catch(function () {
        });
    };
    NewhomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newhome',template:/*ion-inline-start:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/newhome/newhome.html"*/'<ion-header>\n  <ion-navbar color="ds-primary">\n    <button ion-button menuToggle start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Deepak The Inspiration</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="share()">\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-content class="card-background-page">\n\n    <ion-card style="height: 200px !important;">\n      <ion-slides>\n        <ion-slide *ngFor="let q of quotemaster">\n            <img src="{{imageUrl}}{{q.image}}"/>\n            <div class="card-icon">\n              <ion-icon name="arrow-forward" style="color: black !important;"></ion-icon>\n            </div>\n          </ion-slide>    \n      </ion-slides>\n      \n    </ion-card>\n\n    <ion-card (click)="goToupcoming()">\n      <img src="assets/imgs/homeimages/p02.jpg"/>\n      \n      <div class="card-title">Upcoming Programs</div>\n      <div class="card-icon">\n        <ion-icon name="arrow-forward"></ion-icon>\n      </div>\n    </ion-card>\n  \n    <ion-card (click)="goTo(\'So6DU2qVzPQ\')">\n      <img src="assets/imgs/homeimages/ds-2.jpg"/>\n      <div class="card-title">Transformation</div>\n      <div class="card-icon">\n        <ion-icon name="arrow-forward"></ion-icon>\n      </div>\n    </ion-card>\n  \n    <ion-card (click)="goTochannel();">\n      <img src="assets/imgs/homeimages/videoforsimplifyinglife.jpg"/>\n      <div class="card-title">Simplifying Life</div>\n      <div class="card-icon">\n        <ion-icon name="arrow-forward"></ion-icon>\n      </div>\n    </ion-card>\n\n    <ion-card (click)="goToMusic();">\n      <img src="assets/imgs/homeimages/musicforthesole.jpg"/>\n      <div class="card-title">Music for the Soul</div>\n      <div class="card-icon">\n        <ion-icon name="arrow-forward"></ion-icon>\n      </div>\n    </ion-card>\n  \n    <ion-card (click)="viewCategories()">\n      <img src="assets/imgs/homeimages/p03.jpg"/>\n      <div class="card-title">Programs</div>\n      <div class="card-icon">\n        <ion-icon name="arrow-forward"></ion-icon>\n      </div>\n    </ion-card>\n  \n  </ion-content>\n</ion-content>\n'/*ion-inline-end:"/home/codefreak/Documents/projects/gitrepo/ds/src/pages/newhome/newhome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], NewhomePage);
    return NewhomePage;
}());

//# sourceMappingURL=newhome.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map