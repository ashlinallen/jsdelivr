angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {"NUMBER_FORMATS":{"DECIMAL_SEP":",","GROUP_SEP":" ","PATTERNS":[{"minInt":1,"minFrac":0,"macFrac":0,"posPre":"","posSuf":"","negPre":"-","negSuf":"","gSize":3,"lgSize":3,"maxFrac":3},{"minInt":1,"minFrac":2,"macFrac":0,"posPre":"","posSuf":" \u00A4","negPre":"-","negSuf":" \u00A4","gSize":3,"lgSize":3,"maxFrac":2}],"CURRENCY_SYM":"zł"},"pluralCat":function (n) {  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  if ((n % 10) >= 2 && (n % 10) <= 4 &&      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {    return PLURAL_CATEGORY.FEW;  }  if ((n % 10) == 0 || n != 1 && (n % 10) == 1 ||      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&      n == Math.floor(n)) {    return PLURAL_CATEGORY.MANY;  }  return PLURAL_CATEGORY.OTHER;},"DATETIME_FORMATS":{"MONTH":["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"],"SHORTMONTH":["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],"DAY":["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],"SHORTDAY":["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],"AMPMS":["AM","PM"],"medium":"d MMM y HH:mm:ss","short":"dd.MM.yyyy HH:mm","fullDate":"EEEE, d MMMM y","longDate":"d MMMM y","mediumDate":"d MMM y","shortDate":"dd.MM.yyyy","mediumTime":"HH:mm:ss","shortTime":"HH:mm"},"id":"pl-pl"});
}]);