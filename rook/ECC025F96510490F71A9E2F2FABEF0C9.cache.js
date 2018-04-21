var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.rook;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.1";
var $strongName = 'ECC025F96510490F71A9E2F2FABEF0C9';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {3:1, 5:1}, $intern_2 = {87:1}, $intern_3 = {3:1, 17:1, 38:1, 55:1}, $intern_4 = {3:1, 13:1, 10:1}, $intern_5 = {3:1, 13:1, 8:1, 10:1}, $intern_6 = {25:1, 47:1, 3:1, 7:1, 6:1}, $intern_7 = {25:1, 48:1, 3:1, 7:1, 6:1}, $intern_8 = {21:1, 3:1, 7:1, 6:1}, $intern_9 = {25:1, 80:1, 3:1, 7:1, 6:1}, $intern_10 = {25:1, 36:1, 3:1, 7:1, 6:1}, $intern_11 = 4194303, $intern_12 = 1048575, $intern_13 = 524288, $intern_14 = {133:1}, $intern_15 = {53:1}, $intern_16 = {17:1, 75:1}, $intern_17 = -2147483648, $intern_18 = {97:1}, $intern_19 = {11:1}, $intern_20 = 65535, $intern_21 = {17:1, 38:1}, $intern_22 = {54:1, 3:1}, $intern_23 = 16777619, $intern_24 = {505:1, 3:1}, $intern_25 = 15525485, $intern_26 = 5.9604644775390625E-8, $intern_27 = 16777216, $intern_28 = 16777215, $intern_29 = {11:1, 12:1}, $intern_30 = {34:1, 32:1}, $intern_31 = {16:1, 24:1}, $intern_32 = {34:1, 32:1, 46:1, 72:1, 45:1}, $intern_33 = 34962, $intern_34 = 34963, $intern_35 = {3:1, 164:1}, $intern_36 = {165:1, 3:1}, $intern_37 = {90:1}, $intern_38 = {11:1, 20:1, 12:1}, $intern_39 = {3:1, 7:1, 6:1, 15:1}, $intern_40 = -3.4028234663852886E38, $intern_41 = 3.4028234663852886E38, $intern_42 = {117:1}, $intern_43 = {16:1}, $intern_44 = {78:1}, $intern_45 = {116:1}, $intern_46 = {90:1, 16:1, 24:1}, $intern_47 = -16777216, $intern_48 = {3:1, 7:1, 6:1, 23:1}, $intern_49 = 1.401298464324817E-45, $intern_50 = {44:1}, $intern_51 = -5592406, $intern_52 = -1118482, $intern_53 = {105:1, 51:1}, $intern_54 = {3:1, 7:1, 6:1, 65:1}, $intern_55 = {3:1, 7:1, 6:1, 134:1, 37:1}, $intern_56 = {3:1, 7:1, 6:1, 66:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_9(object){
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (hashCode__I__devirtual$(object) >>> 0).toString(16);
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

bootstrap();
function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_0(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && (typeof src_0 === 'object' || typeof src_0 === 'function') && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_0), -2147483648) | 0;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function $getSimpleName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.simpleName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId, superclass){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.superclass = superclass;
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.superclass = superclass;
  return clazz;
}

function createForInterface(){
  var clazz;
  clazz = createClassObject('react', 'Closeable');
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(168, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  clazz.superclass = Ljava_lang_Object_2_classLit;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  return $getSimpleName(this);
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_12(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1, null);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 168, Ljava_lang_Object_2_classLit);
function $clinit_SoundController(){
  $clinit_SoundController = emptyMethod;
  $wnd.$GWT_VOICES_VERSION = '3.3.2';
}

function $setPreferredSoundTypes(this$static, soundTypes){
  var s$index, s$max;
  for (s$index = 0 , s$max = soundTypes.length; s$index < s$max; ++s$index)
  ;
  this$static.preferredSoundTypes = soundTypes;
}

function SoundController(){
  var s, i, gwtVoices, style;
  $clinit_SoundController();
  this.soundContainer = ($clinit_DOM() , $doc.createElement('div'));
  $clinit_Impl();
  s = $doc.location.href;
  i = s.indexOf('#');
  i != -1 && (s = s.substring(0, i));
  i = s.indexOf('?');
  i != -1 && (s = s.substring(0, i));
  i = s.lastIndexOf('/');
  i != -1 && (s = s.substring(0, i));
  gwtVoices = getParameter('gwt-voices');
  $equals_0(($clinit_SoundType() , FLASH).queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 40, 0, [FLASH])):$equals_0(HTML5.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 40, 0, [HTML5])):$equals_0(WEB_AUDIO.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 40, 0, [WEB_AUDIO])):$equals_0(NATIVE.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 40, 0, [NATIVE])):$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 40, 0, [WEB_AUDIO, FLASH, HTML5]));
  $appendChild(($clinit_RootPanel() , $doc.body), this.soundContainer);
  style = this.soundContainer.style;
  style['position'] = ($clinit_Style$Position() , 'absolute');
  style['overflow'] = ($clinit_Style$Overflow() , 'hidden');
  style['left'] = ($clinit_Style$Unit() , '-500.0px');
  style['top'] = '-500.0px';
  style['width'] = '0.0px';
  style['height'] = '0.0px';
}

defineClass(376, 1, {}, SoundController);
var Lcom_allen_1sauer_gwt_voices_client_SoundController_2_classLit = createForClass('com.allen_sauer.gwt.voices.client', 'SoundController', 376, Ljava_lang_Object_2_classLit);
function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(6, 1, {3:1, 7:1, 6:1});
_.compareTo = function compareTo(other){
  return this.ordinal - other.ordinal;
}
;
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_1(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 6, Ljava_lang_Object_2_classLit);
function $clinit_SoundType(){
  $clinit_SoundType = emptyMethod;
  FLASH = new SoundType('FLASH', 0, 'flash');
  HTML5 = new SoundType('HTML5', 1, 'html5');
  NATIVE = new SoundType('NATIVE', 2, 'native');
  WEB_AUDIO = new SoundType('WEB_AUDIO', 3, 'webaudio');
}

function SoundType(enum$name, enum$ordinal, queryParameterValue){
  Enum.call(this, enum$name, enum$ordinal);
  this.queryParameterValue = queryParameterValue;
}

function values_0(){
  $clinit_SoundType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 40, 0, [FLASH, HTML5, NATIVE, WEB_AUDIO]);
}

defineClass(40, 6, {40:1, 3:1, 7:1, 6:1}, SoundType);
var FLASH, HTML5, NATIVE, WEB_AUDIO;
var Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit = createForEnum('com.allen_sauer.gwt.voices.client', 'SoundType', 40, Ljava_lang_Enum_2_classLit, values_0);
function $addHolder(this$static, name_0, value_0){
  var valueHolder, valueHolder_0;
  valueHolder = (valueHolder_0 = new MoreObjects$ToStringHelper$ValueHolder , this$static.holderTail = this$static.holderTail.next_0 = valueHolder_0 , valueHolder_0);
  valueHolder.value_0 = value_0;
  valueHolder.name_0 = checkNotNull(name_0);
  return this$static;
}

function $toString(this$static){
  var arrayString, builder, nextSeparator, objectArray, value_0, valueHolder;
  nextSeparator = '';
  builder = $append_1($append_8(new StringBuilder_0, this$static.className), 123);
  for (valueHolder = this$static.holderHead.next_0; valueHolder; valueHolder = valueHolder.next_0) {
    value_0 = valueHolder.value_0;
    builder.string += nextSeparator;
    nextSeparator = ', ';
    valueHolder.name_0 != null && $append_1($append_8(builder, valueHolder.name_0), 61);
    if (value_0 != null && (getClass__Ljava_lang_Class___devirtual$(value_0).modifiers & 4) != 0) {
      objectArray = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [value_0]);
      arrayString = deepToString(objectArray, new HashSet);
      $append_6(builder, arrayString, 1, arrayString.length - 1);
    }
     else {
      builder.string += '' + value_0;
    }
  }
  return (builder.string += '}' , builder).string;
}

function MoreObjects$ToStringHelper(className){
  this.holderHead = new MoreObjects$ToStringHelper$ValueHolder;
  this.holderTail = this.holderHead;
  this.className = checkNotNull(className);
}

defineClass(124, 1, {}, MoreObjects$ToStringHelper);
_.toString_0 = function toString_2(){
  return $toString(this);
}
;
var Lcom_google_common_base_MoreObjects$ToStringHelper_2_classLit = createForClass('com.google.common.base', 'MoreObjects/ToStringHelper', 124, Ljava_lang_Object_2_classLit);
function MoreObjects$ToStringHelper$ValueHolder(){
}

defineClass(192, 1, {}, MoreObjects$ToStringHelper$ValueHolder);
var Lcom_google_common_base_MoreObjects$ToStringHelper$ValueHolder_2_classLit = createForClass('com.google.common.base', 'MoreObjects/ToStringHelper/ValueHolder', 192, Ljava_lang_Object_2_classLit);
function equal(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function badPositionIndex(size_0){
  if (size_0 < 0) {
    throw toJs(new IllegalArgumentException_0('negative size: ' + size_0));
  }
   else {
    return format_0('%s (%s) must not be greater than size (%s)', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, ['index', valueOf(0), valueOf(size_0)]));
  }
}

function checkArgument(expression){
  if (!expression) {
    throw toJs(new IllegalArgumentException);
  }
}

function checkArgument_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

function checkNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkPositionIndex(size_0){
  if (0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0(badPositionIndex(size_0)));
  }
  return 0;
}

function checkState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function format_0(template, args){
  var builder, i, placeholderStart, templateStart;
  template = template;
  args = args == null?stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, ['(Object[])null']):args;
  builder = new StringBuilder_0;
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    builder.string += '' + template.substr(templateStart, placeholderStart - templateStart);
    $append_7(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  $append_6(builder, template, templateStart, template.length);
  if (i < args.length) {
    builder.string += ' [';
    $append_7(builder, args[i++]);
    while (i < args.length) {
      builder.string += ', ';
      $append_7(builder, args[i++]);
    }
    builder.string += ']';
  }
  return builder.string;
}

function $forEachRemaining(this$static, consumer){
  checkCriticalNotNull(consumer);
  while ($hasNext(this$static.val$iiter2)) {
    consumer.accept_0($next_1(this$static.val$iiter2));
  }
}

defineClass(87, 1, $intern_2);
var Lcom_google_common_collect_UnmodifiableIterator_2_classLit = createForClass('com.google.common.collect', 'UnmodifiableIterator', 87, Ljava_lang_Object_2_classLit);
defineClass(549, 87, $intern_2);
var Lcom_google_common_collect_UnmodifiableListIterator_2_classLit = createForClass('com.google.common.collect', 'UnmodifiableListIterator', 549, Lcom_google_common_collect_UnmodifiableIterator_2_classLit);
defineClass(478, 549, $intern_2);
_.hasNext_0 = function hasNext(){
  return this.position_0 < this.size_0;
}
;
_.next_1 = function next_0(){
  if (this.position_0 >= this.size_0) {
    throw toJs(new NoSuchElementException);
  }
  return $get_0(this, this.position_0++);
}
;
_.position_0 = 0;
_.size_0 = 0;
var Lcom_google_common_collect_AbstractIndexedListIterator_2_classLit = createForClass('com.google.common.collect', 'AbstractIndexedListIterator', 478, Lcom_google_common_collect_UnmodifiableListIterator_2_classLit);
function $forEach(this$static, action){
  var t, t$iterator;
  checkCriticalNotNull(action);
  for (t$iterator = this$static.iterator(); t$iterator.hasNext_0();) {
    t = t$iterator.next_1();
    action.accept_0(t);
  }
}

function $addAll(this$static, c){
  var changed, e, e$iterator, entry, old, outerIter;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(c.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); e$iterator.val$outerIter2.hasNext;) {
    e = (entry = $next_0(e$iterator.val$outerIter2) , entry.getKey());
    changed = changed | (old = $put_3(this$static.map_0, e, this$static) , old == null);
  }
  return changed;
}

function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

function $toArray(this$static){
  return this$static.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, this$static.size_1(), 5, 1));
}

function $toArray_0(this$static, a){
  var i, it, result, size_0;
  size_0 = this$static.size_1();
  a.length < size_0 && (a = (result = new Array(size_0) , stampJavaTypeInfo_0(result, a)));
  it = this$static.iterator();
  for (i = 0; i < size_0; ++i) {
    a[i] = it.next_1();
  }
  a.length > size_0 && (a[size_0] = null);
  return a;
}

function $toString_0(this$static){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this$static.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_3(joiner, e === this$static?'(this Collection)':e == null?'null':toString_9(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

defineClass(533, 1, {17:1});
_.add_0 = function add_0(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toArray = function toArray(){
  return $toArray(this);
}
;
_.toArray_0 = function toArray_0(a){
  return $toArray_0(this, a);
}
;
_.toString_0 = function toString_3(){
  return $toString_0(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 533, Ljava_lang_Object_2_classLit);
function $clinit_ImmutableCollection(){
  $clinit_ImmutableCollection = emptyMethod;
  new ForwardingImmutableCollection(($clinit_Collections() , $clinit_Collections() , EMPTY_LIST));
}

defineClass(552, 533, {3:1, 17:1});
_.iterator = function iterator_0(){
  return this.iterator_0();
}
;
_.add_0 = function add_1(e){
  throw toJs(new UnsupportedOperationException);
}
;
_.contains = function contains_0(object){
  return object != null && $advanceToFind(this, object);
}
;
var Lcom_google_common_collect_ImmutableCollection_2_classLit = createForClass('com.google.common.collect', 'ImmutableCollection', 552, Ljava_util_AbstractCollection_2_classLit);
function ForwardingImmutableCollection(delegate){
  this.delegate = delegate;
}

defineClass(487, 552, {3:1, 17:1}, ForwardingImmutableCollection);
_.iterator = function iterator_2(){
  return unmodifiableIterator(($clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0));
}
;
_.contains = function contains_1(object){
  return false;
}
;
_.iterator_0 = function iterator_1(){
  return unmodifiableIterator(($clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0));
}
;
_.size_1 = function size_1(){
  return 0;
}
;
_.toArray = function toArray_1(){
  return $toArray(this.delegate);
}
;
_.toArray_0 = function toArray_2(other){
  return $toArray_0(this.delegate, other);
}
;
_.toString_0 = function toString_4(){
  return $toString_0(this.delegate);
}
;
var Lcom_google_common_collect_ForwardingImmutableCollection_2_classLit = createForClass('com.google.common.collect', 'ForwardingImmutableCollection', 487, Lcom_google_common_collect_ImmutableCollection_2_classLit);
function $clinit_ImmutableList(){
  $clinit_ImmutableList = emptyMethod;
  $clinit_ImmutableCollection();
  EMPTY = new RegularImmutableList(($clinit_Collections() , $clinit_Collections() , EMPTY_LIST));
}

function copyFromCollection(collection){
  $clinit_ImmutableList();
  var elements;
  elements = clone(collection.array, collection.array.length);
  switch (elements.length) {
    case 0:
      return EMPTY;
    case 1:
      return new SingletonImmutableList(checkNotNull(elements[0]));
    default:return new RegularImmutableList(nullCheckedList(elements));
  }
}

function nullCheckedList(array){
  var i, len;
  for (i = 0 , len = array.length; i < len; i++) {
    if (array[i] == null) {
      throw toJs(new NullPointerException_0('at index ' + i));
    }
  }
  return new Arrays$ArrayList(array);
}

defineClass(553, 552, $intern_3);
_.iterator = function iterator_4(){
  return this.iterator_0();
}
;
_.equals_0 = function equals_1(obj){
  return equalsImpl(this, obj);
}
;
_.hashCode_0 = function hashCode_2(){
  return hashCodeImpl(this);
}
;
_.iterator_0 = function iterator_3(){
  return new ImmutableList$1(this, this.size_1());
}
;
var EMPTY;
var Lcom_google_common_collect_ImmutableList_2_classLit = createForClass('com.google.common.collect', 'ImmutableList', 553, Lcom_google_common_collect_ImmutableCollection_2_classLit);
function $get(this$static, index_0){
  return this$static.delegateList().get_0(index_0);
}

defineClass(554, 553, $intern_3);
_.iterator = function iterator_6(){
  return unmodifiableIterator(this.delegateList().iterator());
}
;
_.contains = function contains_2(object){
  return object != null && this.delegateList().contains(object);
}
;
_.equals_0 = function equals_2(obj){
  return equals_Ljava_lang_Object__Z__devirtual$(this.delegateList(), obj);
}
;
_.get_0 = function get_0(index_0){
  return $get(this, index_0);
}
;
_.hashCode_0 = function hashCode_3(){
  return hashCode__I__devirtual$(this.delegateList());
}
;
_.iterator_0 = function iterator_5(){
  return unmodifiableIterator(this.delegateList().iterator());
}
;
_.size_1 = function size_2(){
  return this.delegateList().size_1();
}
;
_.toArray = function toArray_3(){
  return this.delegateList().toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, this.delegateList().size_1(), 5, 1));
}
;
_.toArray_0 = function toArray_4(other){
  return this.delegateList().toArray_0(other);
}
;
_.toString_0 = function toString_5(){
  return toString_9(this.delegateList());
}
;
var Lcom_google_common_collect_ForwardingImmutableList_2_classLit = createForClass('com.google.common.collect', 'ForwardingImmutableList', 554, Lcom_google_common_collect_ImmutableList_2_classLit);
defineClass(548, 1, {});
var Lcom_google_common_collect_ImmutableCollection$Builder_2_classLit = createForClass('com.google.common.collect', 'ImmutableCollection/Builder', 548, Ljava_lang_Object_2_classLit);
function $get_0(this$static, index_0){
  return this$static.this$01.get_0(index_0);
}

function ImmutableList$1(this$0, $anonymous0){
  this.this$01 = this$0;
  checkPositionIndex($anonymous0);
  this.size_0 = $anonymous0;
  this.position_0 = 0;
}

defineClass(479, 478, $intern_2, ImmutableList$1);
var Lcom_google_common_collect_ImmutableList$1_2_classLit = createForClass('com.google.common.collect', 'ImmutableList/1', 479, Lcom_google_common_collect_AbstractIndexedListIterator_2_classLit);
function $add(this$static, element){
  $add_1(this$static.contents, checkNotNull(element));
  return this$static;
}

function $build(this$static){
  return $clinit_ImmutableList() , copyFromCollection(this$static.contents);
}

function ImmutableList$Builder(){
  this.contents = new ArrayList;
}

defineClass(220, 548, {}, ImmutableList$Builder);
var Lcom_google_common_collect_ImmutableList$Builder_2_classLit = createForClass('com.google.common.collect', 'ImmutableList/Builder', 220, Lcom_google_common_collect_ImmutableCollection$Builder_2_classLit);
function indexOf(iterable, predicate){
  var iiter;
  return indexOf_0((iiter = new AbstractList$ListIteratorImpl(iterable._impl) , new RList$5(iiter)), predicate);
}

function elementsEqual(iterator1, iterator2){
  var o1, o2;
  while (iterator1.hasNext_0()) {
    if (!iterator2.hasNext_0()) {
      return false;
    }
    o1 = iterator1.next_1();
    o2 = iterator2.next_1();
    if (!(maskUndefined(o1) === maskUndefined(o2) || o1 != null && equals_Ljava_lang_Object__Z__devirtual$(o1, o2))) {
      return false;
    }
  }
  return !iterator2.hasNext_0();
}

function indexOf_0(iterator, predicate){
  var current, i;
  for (i = 0; $hasNext(iterator.val$iiter2); i++) {
    current = $next_1(iterator.val$iiter2);
    if (predicate.apply_0(current)) {
      return i;
    }
  }
  return -1;
}

function unmodifiableIterator(iterator){
  var result;
  checkNotNull(iterator);
  if (instanceOf(iterator, 87)) {
    result = iterator;
    return result;
  }
  return new Iterators$1(iterator);
}

function Iterators$1(val$iterator){
  this.val$iterator1 = val$iterator;
}

defineClass(492, 87, $intern_2, Iterators$1);
_.hasNext_0 = function hasNext_0(){
  return this.val$iterator1.hasNext_0();
}
;
_.next_1 = function next_1(){
  return this.val$iterator1.next_1();
}
;
var Lcom_google_common_collect_Iterators$1_2_classLit = createForClass('com.google.common.collect', 'Iterators/1', 492, Lcom_google_common_collect_UnmodifiableIterator_2_classLit);
function equalsImpl(thisList, other){
  var i, otherList, size_0;
  if (maskUndefined(other) === maskUndefined(checkNotNull(thisList))) {
    return true;
  }
  if (!instanceOf(other, 38)) {
    return false;
  }
  otherList = other;
  size_0 = thisList.size_1();
  if (size_0 != otherList.size_1()) {
    return false;
  }
  if (instanceOf(otherList, 55)) {
    for (i = 0; i < size_0; i++) {
      if (!equal(thisList.get_0(i), otherList.get_0(i))) {
        return false;
      }
    }
    return true;
  }
   else {
    return elementsEqual(thisList.iterator(), otherList.iterator());
  }
}

function hashCodeImpl(list){
  var hashCode, o, o$iterator;
  hashCode = 1;
  for (o$iterator = list.iterator(); o$iterator.hasNext_0();) {
    o = o$iterator.next_1();
    hashCode = 31 * hashCode + (o == null?0:hashCode__I__devirtual$(o));
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function RegularImmutableList(delegate){
  this.delegate = ($clinit_Collections() , instanceOf(delegate, 55)?new Collections$UnmodifiableRandomAccessList(delegate):new Collections$UnmodifiableList(delegate));
}

defineClass(221, 554, $intern_3, RegularImmutableList);
_.delegateList = function delegateList(){
  return this.delegate;
}
;
var Lcom_google_common_collect_RegularImmutableList_2_classLit = createForClass('com.google.common.collect', 'RegularImmutableList', 221, Lcom_google_common_collect_ForwardingImmutableList_2_classLit);
function SingletonImmutableList(element){
  this.delegate = ($clinit_Collections() , new Collections$SingletonList(checkNotNull(element)));
}

defineClass(493, 554, $intern_3, SingletonImmutableList);
_.delegateList = function delegateList_0(){
  return this.delegate;
}
;
var Lcom_google_common_collect_SingletonImmutableList_2_classLit = createForClass('com.google.common.collect', 'SingletonImmutableList', 493, Lcom_google_common_collect_ForwardingImmutableList_2_classLit);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0, Ljava_lang_Object_2_classLit);
function $arcTo(this$static, x1, y1, x2, y2, radius){
  this$static.arcTo(x1, y1, x2, y2, radius);
}

function $drawImage(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(image, dx, dy, dw, dh);
}

function $fillRect(this$static, x_0, y_0, w, h){
  this$static.fillRect(x_0, y_0, w, h);
}

function $moveTo(this$static, x_0, y_0){
  this$static.moveTo(x_0, y_0);
}

function $scale(this$static, x_0, y_0){
  this$static.scale(x_0, y_0);
}

function $setFillStyleWeb(this$static, fillStyle){
  this$static.fillStyle = fillStyle;
}

function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 57, 0, 0, 1);
}

function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception, 'Cannot suppress a null exception.');
  checkCriticalArgument_0(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_1, 10, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $initCause(this$static, cause){
  checkCriticalState(!this$static.cause);
  checkCriticalArgument_0(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $printStackTraceImpl(this$static, out, ident){
  var t, t$array, t$index, t$max, theCause;
  $printStackTraceItems(this$static);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_1, 10, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, '\t' + ident);
  }
  theCause = this$static.cause;
  !!theCause && $printStackTraceImpl(theCause, out, ident);
}

function $printStackTraceItems(this$static){
  var element$array, element$index, element$max, stackTrace;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector_0.getStackTrace(this$static) , dropInternalFrames(stackTrace))) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index)
  ;
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString_1(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(10, 1, {3:1, 10:1});
_.createError = function createError(msg){
  return new $wnd.Error(msg);
}
;
_.fillInStackTrace = function fillInStackTrace(){
  if (this.writetableStackTrace) {
    this.backingJsObject !== '__noinit__' && this.initializeBackingError();
    this.stackTrace = null;
  }
  return this;
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.printStackTrace = function printStackTrace(out){
  $printStackTraceImpl(this, out, '');
}
;
_.toString_0 = function toString_6(){
  return $toString_1(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 10, Ljava_lang_Object_2_classLit);
function Exception(cause){
  $$init(this);
  this.detailMessage = !cause?null:$toString_1(cause, cause.getMessage());
  this.cause = cause;
  this.fillInStackTrace();
  this.initializeBackingError();
}

defineClass(13, 10, $intern_4);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 13, Ljava_lang_Throwable_2_classLit);
function RuntimeException(){
  $$init(this);
  this.fillInStackTrace();
  this.initializeBackingError();
}

function RuntimeException_0(message){
  $$init(this);
  this.detailMessage = message;
  this.fillInStackTrace();
  this.initializeBackingError();
}

function RuntimeException_1(cause){
  Exception.call(this, cause);
}

defineClass(8, 13, $intern_5, RuntimeException, RuntimeException_0, RuntimeException_1);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 8, Ljava_lang_Exception_2_classLit);
defineClass(135, 8, $intern_5);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 135, Ljava_lang_RuntimeException_2_classLit);
defineClass(233, 135, $intern_5);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 233, Ljava_lang_JsException_2_classLit);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?exception == null?null:exception.name:instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?exception == null?null:exception.message:exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $$init(this);
  this.fillInStackTrace();
  this.backingJsObject = e;
  e != null && setPropertySafe(e, '__java$exception', this);
  this.detailMessage = e == null?'null':toString_9(e);
  this.description = '';
  this.e = e;
  this.description = '';
}

defineClass(91, 233, {91:1, 3:1, 13:1, 8:1, 10:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 91, Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(506, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 506, Ljava_lang_Object_2_classLit);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector_0);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 10)) {
          t = $e0;
          reportUncaughtException(t);
          return undefined;
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e){
  $clinit_Impl();
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $reportError(handler.this$01, 'Uncaught Exception: ', e);
    return;
  }
  reportToBrowser(instanceOf(e, 91)?e.getThrown():e);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function push_1(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].$_nullMethod() && (rescheduled = push_1(rescheduled, t)):t[0].$_nullMethod();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

defineClass(391, 506, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 391, Lcom_google_gwt_core_client_Scheduler_2_classLit);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector_0 = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector_0.collect(error);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = min_0(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals_0(stackTrace[i].methodName, dropFrameUntilFnName) || $equals_0(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && (stackTrace.splice(0, i + 1) , undefined);
      break;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector_0;
defineClass(516, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 516, Ljava_lang_Object_2_classLit);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(234, 516, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 57, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 234, Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (stString.length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals_0(toReturn.substr(0, 3), 'at ') && (toReturn = toReturn.substr(3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(toReturn.substr(index_0 + 1));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = toReturn.substr(index_0 + 1));
  (toReturn.length == 0 || $equals_0(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(location_0.substr(lastColonIndex + 1));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(517, 516, {});
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.backingJsObject , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 57, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals_0(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 517, Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(235, 517, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 235, Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $setHeight(this$static, height){
  this$static.height = height;
}

function $setWidth(this$static, width_0){
  this$static.width = width_0;
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function $getAbsoluteLeft(elem){
  var left, rect;
  rect = elem.getBoundingClientRect && elem.getBoundingClientRect();
  left = rect?rect.left + $getScrollLeft_0(elem.ownerDocument.body):getAbsoluteLeftUsingOffsets(elem);
  return left | 0;
}

function $getAbsoluteTop(elem){
  var rect, top_0, top_1;
  rect = elem.getBoundingClientRect && elem.getBoundingClientRect();
  top_0 = rect?rect.top + ((elem.ownerDocument.body.scrollTop || 0) | 0):getAbsoluteTopUsingOffsets(elem);
  return top_0 | 0;
}

function $getScrollLeft(doc){
  return doc.documentElement.scrollLeft || doc.body.scrollLeft;
}

function $getScrollLeft_0(elem){
  if (!$equalsIgnoreCase(elem.tagName) && elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl') {
    return ((elem.scrollLeft || 0) | 0) - (((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  }
  return (elem.scrollLeft || 0) | 0;
}

function $getScrollTop(doc){
  return doc.documentElement.scrollTop || doc.body.scrollTop;
}

function getAbsoluteLeftUsingOffsets(elem){
  if (elem.offsetLeft == null) {
    return 0;
  }
  var left = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      left -= curr.scrollLeft;
      doc.defaultView.getComputedStyle(curr, '').getPropertyValue('direction') == 'rtl' && (left += curr.scrollWidth - curr.clientWidth);
      curr = curr.parentNode;
    }
  }
  while (elem) {
    left += elem.offsetLeft;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      left += doc.body.scrollLeft;
      return left;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (left += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-left-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return left;
}

function getAbsoluteTopUsingOffsets(elem){
  if (elem.offsetTop == null) {
    return 0;
  }
  var top_0 = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      top_0 -= curr.scrollTop;
      curr = curr.parentNode;
    }
  }
  while (elem) {
    top_0 += elem.offsetTop;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      top_0 += doc.body.scrollTop;
      return top_0;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (top_0 += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-top-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return top_0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Style$Overflow();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_1, 47, 0, [VISIBLE, HIDDEN, SCROLL, AUTO]);
}

defineClass(47, 6, $intern_6);
var AUTO, HIDDEN, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 47, Ljava_lang_Enum_2_classLit, values_1);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(361, 47, $intern_6, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 361, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(362, 47, $intern_6, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 362, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(363, 47, $intern_6, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 363, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(364, 47, $intern_6, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 364, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$Position();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_1, 48, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(48, 6, $intern_7);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 48, Ljava_lang_Enum_2_classLit, values_2);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(365, 48, $intern_7, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 365, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(366, 48, $intern_7, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 366, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(367, 48, $intern_7, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 367, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(368, 48, $intern_7, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 368, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_1, 21, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(21, 6, $intern_8);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 21, Ljava_lang_Enum_2_classLit, values_3);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(352, 21, $intern_8, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 352, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(353, 21, $intern_8, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 353, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(354, 21, $intern_8, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 354, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(355, 21, $intern_8, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 355, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(356, 21, $intern_8, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 356, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(357, 21, $intern_8, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 357, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(358, 21, $intern_8, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 358, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(359, 21, $intern_8, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 359, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(360, 21, $intern_8, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 360, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_0 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Visibility();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_1, 80, 0, [VISIBLE_0, HIDDEN_0]);
}

defineClass(80, 6, $intern_9);
var HIDDEN_0, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility', 80, Ljava_lang_Enum_2_classLit, values_4);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(369, 80, $intern_9, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/1', 369, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(370, 80, $intern_9, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/2', 370, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null);
function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = emptyMethod;
  NORMAL = new Style$WhiteSpace$1;
  NOWRAP = new Style$WhiteSpace$2;
  PRE = new Style$WhiteSpace$3;
  PRE_LINE = new Style$WhiteSpace$4;
  PRE_WRAP = new Style$WhiteSpace$5;
}

function Style$WhiteSpace(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$WhiteSpace();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, 1), $intern_1, 36, 0, [NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

defineClass(36, 6, $intern_10);
var NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
var Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace', 36, Ljava_lang_Enum_2_classLit, values_5);
function Style$WhiteSpace$1(){
  Style$WhiteSpace.call(this, 'NORMAL', 0);
}

defineClass(371, 36, $intern_10, Style$WhiteSpace$1);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/1', 371, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$2(){
  Style$WhiteSpace.call(this, 'NOWRAP', 1);
}

defineClass(372, 36, $intern_10, Style$WhiteSpace$2);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/2', 372, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$3(){
  Style$WhiteSpace.call(this, 'PRE', 2);
}

defineClass(373, 36, $intern_10, Style$WhiteSpace$3);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/3', 373, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$4(){
  Style$WhiteSpace.call(this, 'PRE_LINE', 3);
}

defineClass(374, 36, $intern_10, Style$WhiteSpace$4);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/4', 374, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$5(){
  Style$WhiteSpace.call(this, 'PRE_WRAP', 4);
}

defineClass(375, 36, $intern_10, Style$WhiteSpace$5);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/5', 375, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function $getRelativeX(this$static, target){
  return ((this$static.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument);
}

function $getRelativeY(this$static, target){
  return ((this$static.clientY || 0) | 0) - $getAbsoluteTop(target) + ((target.scrollTop || 0) | 0) + $getScrollTop(target.ownerDocument);
}

function throwIfNull(value_0){
  if (null == value_0) {
    throw toJs(new NullPointerException_0('encodedURLComponent cannot be null'));
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_11;
  a1 = value_0 >> 22 & $intern_11;
  a2 = value_0 < 0?$intern_12:0;
  return create0(a0, a1, a2);
}

function create_0(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException);
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_13 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_13 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare(a, b) < 0) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_13 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_BigLongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_11;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_11;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_12;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_11;
  a.m = sum1 & $intern_11;
  a.h = sum2 & $intern_12;
  return true;
}

var remainder;
function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_11;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_11;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_12;
  return create0(neg0, neg1, neg2);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & $intern_11, res1 & $intern_11, res2 & $intern_12);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_13) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_12:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_12:0;
    res1 = negative?$intern_11:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_11, res1 & $intern_11, res2 & $intern_12);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_11, sum1 & $intern_11, sum2 & $intern_12);
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_7(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_13 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_7(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = create(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_11, $intern_11, 524287);
  create0(0, 0, $intern_13);
  ONE = create(1);
  create(2);
  create(0);
}

var MAX_VALUE, ONE;
function toJava(e){
  var javaException;
  if (instanceOf(e, 10)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += 17592186044416;
    a3 = $intern_12;
  }
  a1 = round_int(value_0 / 4194304);
  a0 = round_int(value_0 - a1 * 4194304);
  return create0(a0, a1, a3);
}

function toString_8(a){
  if (isSmallLong0(a)) {
    return '' + a;
  }
  return toString_7(a);
}

function init(){
  var config, plat;
  $onModuleLoad();
  config = new HtmlPlatform$Config;
  plat = new HtmlPlatform(config);
  plat.assets.pathPrefix = 'rook/';
  new MainGame(plat);
  $listenForVisibilityChange(plat);
  $requestAnimationFrame(new HtmlPlatform$3(plat));
}

function $exec(this$static, input_0){
  return this$static.exec(input_0);
}

function $getItem(this$static, key){
  return $getItem_0(this$static.storage, key);
}

function $key(this$static, index_0){
  return $key_0(this$static.storage, index_0);
}

function $setItem(this$static, key, data_0){
  $setItem_0(this$static.storage, key, data_0);
}

function Storage_0(){
  this.storage = 'localStorage';
}

defineClass(377, 1, {}, Storage_0);
var localStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass('com.google.gwt.storage.client', 'Storage', 377, Ljava_lang_Object_2_classLit);
function $clinit_Storage$StorageSupportDetector(){
  $clinit_Storage$StorageSupportDetector = emptyMethod;
  localStorageSupported = checkStorageSupport('localStorage');
  checkStorageSupport('sessionStorage');
}

function checkStorageSupport(storage){
  var c = '_gwt_dummy_';
  try {
    $wnd[storage].setItem(c, c);
    $wnd[storage].removeItem(c);
    return true;
  }
   catch (e) {
    return false;
  }
}

var localStorageSupported = false;
function $getItem_0(storage, key){
  return $wnd[storage].getItem(key);
}

function $getLength(storage){
  return $wnd[storage].length;
}

function $key_0(storage, index_0){
  return index_0 >= 0 && index_0 < $wnd[storage].length?$wnd[storage].key(index_0):null;
}

function $setItem_0(storage, key, data_0){
  $wnd[storage].getItem(key);
  $wnd[storage].setItem(key, data_0);
}

function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_1(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator(); iter.hasNext_0();) {
    entry = iter.next_1();
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_2(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_9(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(532, 1, $intern_14);
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals_0 = function equals_3(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 133)) {
    return false;
  }
  otherMap = obj;
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_1 = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode_0 = function hashCode_4(){
  return hashCode_18(this.entrySet_0());
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.size_1 = function size_3(){
  return this.entrySet_0().size_1();
}
;
_.toString_0 = function toString_10(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = this.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    $add_3(joiner, $toString_2(this, entry.getKey()) + '=' + $toString_2(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 532, Ljava_lang_Object_2_classLit);
function $get_1(this$static, key){
  if (key == null) {
    throw toJs(new NullPointerException);
  }
  return $getItem(this$static.storage, toString_9(key));
}

function $put(this$static, key, value_0){
  var old;
  if (key == null || value_0 == null) {
    throw toJs(new NullPointerException);
  }
  old = $getItem(this$static.storage, key);
  $setItem(this$static.storage, key, value_0);
  return old;
}

function StorageMap(storage){
  this.storage = storage;
}

defineClass(378, 532, $intern_14, StorageMap);
_.get_1 = function get_2(key){
  return $get_1(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.containsKey = function containsKey_0(key){
  return $get_1(this, key) != null;
}
;
_.entrySet_0 = function entrySet(){
  return new StorageMap$StorageEntrySet(this);
}
;
_.size_1 = function size_4(){
  return $getLength(this.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap_2_classLit = createForClass('com.google.gwt.storage.client', 'StorageMap', 378, Ljava_util_AbstractMap_2_classLit);
function $eq(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && $equals_0(a, b);
}

function $hashCode(o){
  return o != null?getHashCode_0(o):0;
}

function StorageMap$StorageEntry(this$0, key){
  this.this$01 = this$0;
  this.key_0 = key;
}

defineClass(379, 1, $intern_15, StorageMap$StorageEntry);
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue = function getValue(){
  return $get_1(this.this$01, this.key_0);
}
;
_.setValue = function setValue(value_0){
  return $put(this.this$01, this.key_0, value_0);
}
;
_.equals_0 = function equals_4(obj){
  var e;
  if (!instanceOf(obj, 53)) {
    return false;
  }
  e = obj;
  return $eq(this.key_0, e.getKey()) && $eq($get_1(this.this$01, this.key_0), e.getValue());
}
;
_.hashCode_0 = function hashCode_5(){
  return $hashCode(this.key_0) ^ $hashCode($get_1(this.this$01, this.key_0));
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntry_2_classLit = createForClass('com.google.gwt.storage.client', 'StorageMap/StorageEntry', 379, Ljava_lang_Object_2_classLit);
function $next(this$static){
  if (this$static.index_0 >= $getLength(this$static.this$01.storage.storage) - 1) {
    throw toJs(new NoSuchElementException);
  }
  ++this$static.index_0;
  this$static.lastKey = $key(this$static.this$01.storage, this$static.index_0);
  return new StorageMap$StorageEntry(this$static.this$01, this$static.lastKey);
}

function StorageMap$StorageEntryIterator(this$0){
  this.this$01 = this$0;
}

defineClass(380, 1, {}, StorageMap$StorageEntryIterator);
_.next_1 = function next_2(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.index_0 < $getLength(this.this$01.storage.storage) - 1;
}
;
_.index_0 = -1;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntryIterator_2_classLit = createForClass('com.google.gwt.storage.client', 'StorageMap/StorageEntryIterator', 380, Ljava_lang_Object_2_classLit);
function $equals(this$static, o){
  var other;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 75)) {
    return false;
  }
  other = o;
  if (other.size_1() != this$static.size_1()) {
    return false;
  }
  return $containsAll(this$static, other);
}

defineClass(534, 533, $intern_16);
_.equals_0 = function equals_5(o){
  return $equals(this, o);
}
;
_.hashCode_0 = function hashCode_6(){
  return hashCode_18(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 534, Ljava_util_AbstractCollection_2_classLit);
function $contains(this$static, o){
  var e, key, value_0;
  if (!instanceOf(o, 53)) {
    return false;
  }
  e = o;
  key = e.getKey();
  value_0 = e.getValue();
  return key != null && value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, $get_1(this$static.this$01, key));
}

function StorageMap$StorageEntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(381, 534, $intern_16, StorageMap$StorageEntrySet);
_.contains = function contains_3(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_7(){
  return new StorageMap$StorageEntryIterator(this.this$01);
}
;
_.size_1 = function size_5(){
  return $getLength(this.this$01.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntrySet_2_classLit = createForClass('com.google.gwt.storage.client', 'StorageMap/StorageEntrySet', 381, Ljava_util_AbstractSet_2_classLit);
function create_1(buffer, byteOffset, length_0){
  return new Float32Array(buffer, byteOffset, length_0);
}

function create_2(buffer, byteOffset, length_0){
  return new Int16Array(buffer, byteOffset, length_0);
}

function create_3(buffer, byteOffset, length_0){
  return new Int32Array(buffer, byteOffset, length_0);
}

function create_4(buffer, byteOffset, length_0){
  return new Int8Array(buffer, byteOffset, length_0);
}

function create_5(buffer, byteOffset, length_0){
  return new Uint16Array(buffer, byteOffset, length_0);
}

function create_6(buffer, byteOffset, length_0){
  return new Uint8Array(buffer, byteOffset, length_0);
}

function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_0(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_0('CSS1Compat', allowedModes[0]) && $equals_0('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function alert_0(msg){
  $wnd.alert(msg);
}

function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = queryString.substr(1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (key.length == 0) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull(val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (!instanceOf($e0, 91))
          throw toJs($e0);
      }
      values = out.get_1(key);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_0(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    entry.setValue(unmodifiableList(entry.getValue()));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = $wnd.location.search;
  if (!listParamMap || !$equals_0(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

function getParameter(name_0){
  var paramsForName;
  ensureListParameterMap();
  paramsForName = listParamMap.get_1(name_0);
  return !paramsForName?null:paramsForName.get_0(paramsForName.size_1() - 1);
}

var cachedQueryString = '', listParamMap;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
}

function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  new HashMap;
  new HashSet;
}

function $setAntialias(this$static, antialias){
  this$static.antialias = antialias;
}

function $attachShader(this$static, program, shader){
  this$static.attachShader(program, shader);
}

function $bindBuffer(this$static, target, buffer){
  this$static.bindBuffer(target, buffer);
}

function $bindFramebuffer(this$static, target, framebuffer){
  this$static.bindFramebuffer(target, framebuffer);
}

function $bindTexture(this$static, target, texture){
  this$static.bindTexture(target, texture);
}

function $bufferData(this$static, target, data_0, usage){
  this$static.bufferData(target, data_0, usage);
}

function $clearColor(this$static, red, green, blue, alpha_0){
  this$static.clearColor(red, green, blue, alpha_0);
}

function $compileShader(this$static, shader){
  this$static.compileShader(shader);
}

function $createShader(this$static, type_0){
  return this$static.createShader(type_0);
}

function $deleteBuffer(this$static, buffer){
  this$static.deleteBuffer(buffer);
}

function $deleteFramebuffer(this$static, framebuffer){
  this$static.deleteFramebuffer(framebuffer);
}

function $deleteProgram(this$static, program){
  this$static.deleteProgram(program);
}

function $deleteShader(this$static, shader){
  this$static.deleteShader(shader);
}

function $deleteTexture(this$static, texture){
  this$static.deleteTexture(texture);
}

function $disableVertexAttribArray(this$static, index_0){
  this$static.disableVertexAttribArray(index_0);
}

function $drawElements(this$static, mode, count, type_0, offset){
  this$static.drawElements(mode, count, type_0, offset);
}

function $enableVertexAttribArray(this$static, index_0){
  this$static.enableVertexAttribArray(index_0);
}

function $getAttribLocation(this$static, program, name_0){
  return this$static.getAttribLocation(program, name_0);
}

function $getProgramInfoLog(this$static, program){
  return this$static.getProgramInfoLog(program);
}

function $getProgramParameterb(this$static, program, pname){
  return this$static.getProgramParameter(program, pname);
}

function $getShaderInfoLog(this$static, shader){
  return this$static.getShaderInfoLog(shader);
}

function $getShaderParameterb(this$static, shader, pname){
  return this$static.getShaderParameter(shader, pname);
}

function $getUniformLocation(this$static, program, name_0){
  return this$static.getUniformLocation(program, name_0);
}

function $linkProgram(this$static, program){
  this$static.linkProgram(program);
}

function $scissor(this$static, x_0, y_0, width_0, height){
  this$static.scissor(x_0, y_0, width_0, height);
}

function $shaderSource(this$static, shader, source){
  this$static.shaderSource(shader, source);
}

function $texImage2D(this$static, target, level, internalformat, format, type_0, image){
  this$static.texImage2D(target, level, internalformat, format, type_0, image);
}

function $texParameteri(this$static, target, pname, param){
  this$static.texParameteri(target, pname, param);
}

function $uniform1f(this$static, location_0, x_0){
  this$static.uniform1f(location_0, x_0);
}

function $uniform1i(this$static, location_0, x_0){
  this$static.uniform1i(location_0, x_0);
}

function $uniform2f(this$static, location_0, x_0, y_0){
  this$static.uniform2f(location_0, x_0, y_0);
}

function $uniform4fv(this$static, location_0, v){
  this$static.uniform4fv(location_0, v);
}

function $useProgram(this$static, program){
  this$static.useProgram(program);
}

function $vertexAttribPointer(this$static, indx, size_0, type_0, normalized, stride, offset){
  this$static.vertexAttribPointer(indx, size_0, type_0, normalized, stride, offset);
}

function $viewport(this$static, x_0, y_0, width_0, height){
  this$static.viewport(x_0, y_0, width_0, height);
}

function getContext(canvas, attributes){
  var names = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-webgl', 'webkit-3d'];
  for (var i = 0; i < names.length; i++) {
    try {
      var ctx = canvas.getContext(names[i], attributes);
      if (ctx != null) {
        if ($wnd.WebGLDebugUtils) {
          $wnd.console && $wnd.console.log && console.log('WebGL debugging enabled');
          return $wnd.WebGLDebugUtils.makeDebugContext(ctx);
        }
        return ctx;
      }
    }
     catch (e) {
    }
  }
  return null;
}

function DialogKeeper(){
  new ArrayList;
}

defineClass(394, 1, {}, DialogKeeper);
var Lde_cdietze_playn_1util_DialogKeeper_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper', 394, Ljava_lang_Object_2_classLit);
function borderingNeighbors(dim, index_0, result){
  var x_0, y_0;
  x_0 = index_0 % dim.width_0;
  y_0 = index_0 / dim.width_0 | 0;
  x_0 - 1 >= 0 && x_0 - 1 < dim.width_0 && y_0 - 1 >= 0 && y_0 - 1 < dim.height_0 && $set_1(result, x_0 - 1 + (y_0 - 1) * dim.width_0);
  x_0 >= 0 && x_0 < dim.width_0 && y_0 - 1 >= 0 && y_0 - 1 < dim.height_0 && $set_1(result, x_0 + (y_0 - 1) * dim.width_0);
  x_0 + 1 >= 0 && x_0 + 1 < dim.width_0 && y_0 - 1 >= 0 && y_0 - 1 < dim.height_0 && $set_1(result, x_0 + 1 + (y_0 - 1) * dim.width_0);
  x_0 + 1 >= 0 && x_0 + 1 < dim.width_0 && y_0 >= 0 && y_0 < dim.height_0 && $set_1(result, x_0 + 1 + y_0 * dim.width_0);
  x_0 + 1 >= 0 && x_0 + 1 < dim.width_0 && y_0 + 1 >= 0 && y_0 + 1 < dim.height_0 && $set_1(result, x_0 + 1 + (y_0 + 1) * dim.width_0);
  x_0 >= 0 && x_0 < dim.width_0 && y_0 + 1 >= 0 && y_0 + 1 < dim.height_0 && $set_1(result, x_0 + (y_0 + 1) * dim.width_0);
  x_0 - 1 >= 0 && x_0 - 1 < dim.width_0 && y_0 + 1 >= 0 && y_0 + 1 < dim.height_0 && $set_1(result, x_0 - 1 + (y_0 + 1) * dim.width_0);
  x_0 - 1 >= 0 && x_0 - 1 < dim.width_0 && y_0 >= 0 && y_0 < dim.height_0 && $set_1(result, x_0 - 1 + y_0 * dim.width_0);
  return result;
}

function contains_4(dim, index_0){
  return contains_5(dim, index_0 % dim.width_0, index_0 / dim.width_0 | 0);
}

function contains_5(dim, x_0, y_0){
  return x_0 >= 0 && x_0 < dim.width_0 && y_0 >= 0 && y_0 < dim.height_0;
}

function toIndex_0(dim, x_0, y_0){
  return x_0 + y_0 * dim.width_0;
}

function toX(dim, index_0){
  return index_0 % dim.width_0;
}

function toY(dim, index_0){
  return index_0 / dim.width_0 | 0;
}

function $addStyles(this$static, styles){
  this$static._styles = $merge(this$static._styles, styles);
  this$static._ldata = null;
  $invalidate(this$static);
  return this$static;
}

function $addStyles_0(this$static, styles){
  return $addStyles(this$static, ($clinit_Styles() , $add_13((null , _noneSingleton), 0, styles)));
}

function $computeSize(this$static, hintX, hintY){
  var insets, ldata, size_0;
  if (this$static._constraint) {
    hintX = hintX;
    hintY = hintY;
  }
  ldata = this$static._ldata = this$static.createLayoutData(hintX, hintY);
  insets = ldata.bg.insets;
  size_0 = this$static.computeSize(ldata, hintX - (insets._left + insets._right), hintY - (insets._top + insets._bottom));
  size_0.width_0 += insets._left + insets._right;
  size_0.height_0 += insets._top + insets._bottom;
  size_0.width_0 = iceil(size_0.width_0);
  size_0.height_0 = iceil(size_0.height_0);
  return size_0;
}

function $contains_0(this$static, x_0, y_0){
  return !(x_0 < 0 || x_0 > this$static._size.width_0 || y_0 < 0 || y_0 > this$static._size.height_0);
}

function $invalidate(this$static){
  this$static._preferredSize = null;
  if ($isSet(this$static, ($clinit_Element$Flag() , VALID))) {
    $set(this$static, VALID, false);
    !!this$static._parent && $invalidate(this$static._parent);
  }
}

function $isSet(this$static, flag){
  return (flag.mask & this$static._flags) != 0;
}

function $layout(this$static){
  var bginst, bgok, height, insets, ldata, width_0;
  if (!$isSet(this$static, ($clinit_Element$Flag() , VISIBLE_2)))
    return;
  width_0 = this$static._size.width_0;
  height = this$static._size.height_0;
  ldata = this$static._ldata?this$static._ldata:this$static.createLayoutData(width_0, height);
  bginst = this$static._bginst._target;
  bgok = !!bginst && bginst.this$01 == ldata.bg && $equals_3(bginst.size_0, this$static._size);
  bgok || $clear_3(this$static._bginst);
  if (width_0 > 0 && height > 0 && !bgok) {
    bginst = $set_8(this$static._bginst, ldata.bg.instantiate(this$static._size));
    bginst.addTo(this$static.layer, 0, 0, 0);
  }
  insets = ldata.bg.insets;
  this$static.layout(ldata, insets._left, insets._top, width_0 - (insets._left + insets._right), height - (insets._top + insets._bottom));
  this$static._ldata = null;
}

function $set(this$static, flag, on){
  on?(this$static._flags |= flag.mask):(this$static._flags &= ~flag.mask);
}

function $setConstraint(this$static, constraint){
  this$static._constraint = constraint;
  $invalidate(this$static);
  return this$static;
}

function $validate(this$static){
  if (!$isSet(this$static, ($clinit_Element$Flag() , VALID))) {
    $layout(this$static);
    $set(this$static, VALID, true);
    this$static.wasValidated();
  }
}

function $wasAdded(this$static){
  var b;
  $invalidate(this$static);
  $set(this$static, ($clinit_Element$Flag() , IS_ADDING), false);
  for (b = this$static._bindings; b != ($clinit_Element$Binding() , NONE); b = b.next_0)
    $clinit_Closeable$Util();
}

function $wasRemoved(this$static){
  var b;
  $clear_3(this$static._bginst);
  $set(this$static, ($clinit_Element$Flag() , IS_REMOVING), false);
  for (b = this$static._bindings; b != ($clinit_Element$Binding() , NONE); b = b.next_0)
    $clinit_Closeable$Util();
}

function $willAdd(this$static){
  return $isSet(this$static, ($clinit_Element$Flag() , IS_ADDING)) || !!this$static._parent && $willAdd(this$static._parent);
}

function $willRemove(this$static){
  return $isSet(this$static, ($clinit_Element$Flag() , IS_REMOVING)) || !!this$static._parent && $willRemove(this$static._parent);
}

function Element_0(){
  var ref;
  this.layer = new Element$7(this);
  this._flags = ($clinit_Element$Flag() , VISIBLE_2).mask | ENABLED.mask;
  this._size = new Dimension;
  this._styles = ($clinit_Styles() , $clinit_Styles() , _noneSingleton);
  this._bindings = ($clinit_Element$Binding() , NONE);
  this._bginst = (ref = new Ref$1 , $clear_3(ref) , ref._target = null , ref);
  $setHitTester(this.layer, new Element$1(this));
  $set(this, HIT_DESCEND, true);
}

defineClass(51, 1, {51:1});
_.computeSize = function computeSize(ldata, hintX, hintY){
  return new Dimension_0(0, 0);
}
;
_.createLayoutData = function createLayoutData(hintX, hintY){
  return new Element$LayoutData(this);
}
;
_.layout = function layout_0(ldata, left, top_0, width_0, height){
  ldata.layout_0(left, top_0, width_0, height);
}
;
_.preferredSize = function preferredSize(hintX, hintY){
  return !this._preferredSize && (this._preferredSize = $computeSize(this, hintX, hintY)) , this._preferredSize;
}
;
_.setLocation = function setLocation(x_0, y_0){
  var iv0, iv;
  $setTranslation(this.layer, (iv0 = round_int(x_0) , x_0 >= 0 || iv0 == x_0 || iv0 == $intern_17?iv0:iv0 - 1), (iv = round_int(y_0) , y_0 >= 0 || iv == y_0 || iv == $intern_17?iv:iv - 1));
}
;
_.setSize = function setSize(width_0, height){
  var changed;
  changed = this._size.width_0 != width_0 || this._size.height_0 != height;
  $setSize_2(this._size, width_0, height);
  !!this._preferredSize && !$equals_3(this._size, this._preferredSize) && (this._ldata = null);
  changed && $invalidate(this);
  return this;
}
;
_.validate = function validate(){
  $validate(this);
}
;
_.wasAdded = function wasAdded(){
  $wasAdded(this);
}
;
_.wasRemoved = function wasRemoved(){
  $wasRemoved(this);
}
;
_.wasValidated = function wasValidated(){
}
;
_._flags = 0;
var Ltripleplay_ui_Element_2_classLit = createForClass('tripleplay.ui', 'Element', 51, Ljava_lang_Object_2_classLit);
function ScaledElement(layer){
  Element_0.call(this);
  this.worldLayer = layer;
  checkArgument_0(layer.width_0 > 0 && layer.height_0 > 0, 'The layer must have a size.');
  $add_5(this.layer, layer);
}

defineClass(447, 51, {51:1}, ScaledElement);
_.createLayoutData = function createLayoutData_0(hintX, hintY){
  return new ScaledElement$1(this, this);
}
;
_.getStyleClass = function getStyleClass(){
  return Lde_cdietze_playn_1util_ScaledElement_2_classLit;
}
;
var Lde_cdietze_playn_1util_ScaledElement_2_classLit = createForClass('de.cdietze.playn_util', 'ScaledElement', 447, Ltripleplay_ui_Element_2_classLit);
function Element$LayoutData(this$0){
  this.this$01_0 = this$0;
  this.bg = resolveStyle(this.this$01_0, ($clinit_Style() , BACKGROUND));
}

defineClass(213, 1, {}, Element$LayoutData);
_.layout_0 = function layout_1(left, top_0, width_0, height){
}
;
var Ltripleplay_ui_Element$LayoutData_2_classLit = createForClass('tripleplay.ui', 'Element/LayoutData', 213, Ljava_lang_Object_2_classLit);
function ScaledElement$1(this$0, this$0_1){
  this.this$01 = this$0;
  Element$LayoutData.call(this, this$0_1);
}

defineClass(448, 213, {}, ScaledElement$1);
_.layout_0 = function layout_2(left, top_0, width_0, height){
  var ratio, scale, maxWidthIfHeightRestricted, maxWidth;
  ratio = this.this$01.worldLayer.width_0 / this.this$01.worldLayer.height_0;
  scale = (checkArgument(ratio > 0) , checkArgument_0(width_0 > 0 && height > 0, 'view width and height must be greater than 0, are you using a stretching layout?') , maxWidthIfHeightRestricted = height * ratio , maxWidth = $wnd.Math.min(width_0, maxWidthIfHeightRestricted) , maxWidth / width_0);
  $setTranslation(this.this$01.worldLayer, left + width_0 * 0.5, top_0 + height * 0.5);
  $setScale(this.this$01.worldLayer, scale * width_0 / this.this$01.worldLayer.width_0);
}
;
var Lde_cdietze_playn_1util_ScaledElement$1_2_classLit = createForClass('de.cdietze.playn_util', 'ScaledElement/1', 448, Ltripleplay_ui_Element$LayoutData_2_classLit);
function $closeOnHide(this$static, ac){
  $add_6(this$static._closeOnHide, ac);
}

defineClass(97, 1, $intern_18);
var Ltripleplay_game_ScreenStack$Screen_2_classLit = createForClass('tripleplay.game', 'ScreenStack/Screen', 97, Ljava_lang_Object_2_classLit);
defineClass(342, 97, $intern_18);
var Ltripleplay_game_ScreenStack$UIScreen_2_classLit = createForClass('tripleplay.game', 'ScreenStack/UIScreen', 342, Ltripleplay_game_ScreenStack$Screen_2_classLit);
defineClass(343, 342, $intern_18);
var Lde_cdietze_playn_1util_Screen_2_classLit = createForClass('de.cdietze.playn_util', 'Screen', 343, Ltripleplay_game_ScreenStack$UIScreen_2_classLit);
defineClass(518, 1, $intern_19);
_.close_0 = function close_0(){
}
;
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 518, Ljava_lang_Object_2_classLit);
defineClass(519, 518, $intern_19);
_.close_0 = function close_1(){
  var e, thrown;
  thrown = null;
  try {
    this.flush();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      thrown = e;
    }
     else 
      throw toJs($e0);
  }
  try {
    null.$_nullMethod();
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 10)) {
      e = $e1;
      !thrown && (thrown = e);
    }
     else 
      throw toJs($e1);
  }
  if (thrown) {
    throw toJs(new IOException(thrown));
  }
}
;
_.flush = function flush(){
  null.$_nullMethod();
}
;
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 519, Ljava_io_OutputStream_2_classLit);
function IOException(throwable){
  Exception.call(this, throwable);
}

defineClass(232, 13, $intern_4, IOException);
var Ljava_io_IOException_2_classLit = createForClass('java.io', 'IOException', 232, Ljava_lang_Exception_2_classLit);
function PrintStream(){
}

defineClass(237, 519, $intern_19, PrintStream);
_.flush = function flush_0(){
}
;
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 237, Ljava_io_FilterOutputStream_2_classLit);
function $charAt(this$static, index_0){
  return $charAt_0(this$static.string, index_0);
}

function $setLength(this$static, newLength){
  var oldLength;
  oldLength = this$static.string.length;
  newLength < oldLength?(this$static.string = $substring_0(this$static.string, 0, newLength)):newLength > oldLength && (this$static.string += valueOf_1(initUnidimensionalArray(C_classLit, {557:1, 3:1}, 22, newLength - oldLength, 15, 1)));
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(112, 1, {166:1});
_.toString_0 = function toString_11(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 112, Ljava_lang_Object_2_classLit);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(262, 8, $intern_5, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 262, Ljava_lang_RuntimeException_2_classLit);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  $clinit_Boolean();
}

function compare_1(x_0, y_0){
  $clinit_Boolean();
  return x_0 == y_0?0:x_0?1:-1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  $clinit_Boolean();
  return instanceOfString(this$static)?compare_4((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(other) , other)):instanceOfDouble(this$static)?compare_2((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(other) , other)):instanceOfBoolean(this$static)?compare_1((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(other) , other)):this$static.compareTo(other);
}

booleanCastMap = {3:1, 230:1, 7:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 230, Ljava_lang_Object_2_classLit);
defineClass(111, 1, {3:1, 111:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 111, Ljava_lang_Object_2_classLit);
function compare_2(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

doubleCastMap = {3:1, 7:1, 231:1, 111:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 231, Ljava_lang_Number_2_classLit);
function Float(value_0){
  this.value_0 = value_0;
}

defineClass(76, 111, {3:1, 7:1, 76:1, 111:1}, Float);
_.compareTo = function compareTo_0(b){
  return compare_2(this.value_0, b.value_0);
}
;
_.equals_0 = function equals_6(o){
  return instanceOf(o, 76) && o.value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_7(){
  return round_int(this.value_0);
}
;
_.toString_0 = function toString_13(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 76, Ljava_lang_Number_2_classLit);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(26, 8, $intern_5, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 26, Ljava_lang_RuntimeException_2_classLit);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(29, 8, $intern_5, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 29, Ljava_lang_RuntimeException_2_classLit);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(58, 8, $intern_5, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 58, Ljava_lang_RuntimeException_2_classLit);
function Integer(value_0){
  this.value_0 = value_0;
}

function bitCount(x_0){
  x_0 -= x_0 >> 1 & 1431655765;
  x_0 = (x_0 >> 2 & 858993459) + (x_0 & 858993459);
  x_0 = (x_0 >> 4) + x_0 & 252645135;
  x_0 += x_0 >> 8;
  x_0 += x_0 >> 16;
  return x_0 & 63;
}

function compare_3(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(92, 111, {3:1, 7:1, 92:1, 111:1}, Integer);
_.compareTo = function compareTo_1(b){
  return compare_3(this.value_0, b.value_0);
}
;
_.equals_0 = function equals_7(o){
  return instanceOf(o, 92) && o.value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_8(){
  return this.value_0;
}
;
_.toString_0 = function toString_14(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 92, Ljava_lang_Number_2_classLit);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_1, 92, 256, 0, 1);
}

var boxedValues;
function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_0(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function NegativeArraySizeException(message){
  RuntimeException_0.call(this, message);
}

defineClass(503, 8, $intern_5, NegativeArraySizeException);
var Ljava_lang_NegativeArraySizeException_2_classLit = createForClass('java.lang', 'NegativeArraySizeException', 503, Ljava_lang_RuntimeException_2_classLit);
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(68, 135, $intern_5, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new $wnd.TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 68, Ljava_lang_JsException_2_classLit);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(57, 1, {3:1, 57:1}, StackTraceElement);
_.equals_0 = function equals_8(other){
  var st;
  if (instanceOf(other, 57)) {
    st = other;
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className == st.className && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_9(){
  return hashCode_16(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [valueOf(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_15(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 57, Ljava_lang_Object_2_classLit);
function $charAt_0(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals_0(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

function $equalsIgnoreCase(other){
  checkCriticalNotNull('body');
  if (other == null) {
    return false;
  }
  if ($equals_0('body', other)) {
    return true;
  }
  return 'body'.length == other.length && $equals_0('body'.toLowerCase(), other.toLowerCase());
}

function $indexOf(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replace(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $split(this$static, regex, maxMatch){
  var compiled, count, lastNonEmpty, lastTrail, matchObj, out, trail;
  compiled = new RegExp(regex, 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_1, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = $substring_0(trail, 0, matchObj.index);
      trail = $substring_0(trail, matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty , undefined);
  }
  return out;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && this$static.charCodeAt(start_0) <= 32) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && this$static.charCodeAt(end - 1) <= 32) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & $intern_20;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & $intern_20;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_20);
  }
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring(replaceStr, ++pos)));
  }
  return replaceStr;
}

function valueOf_0(x_0){
  return x_0 == null?'null':toString_9(x_0);
}

function valueOf_1(x_0){
  return valueOf_2(x_0, x_0.length);
}

function valueOf_2(x_0, count){
  var batchEnd, batchStart, s;
  checkCriticalStringBounds(count, x_0.length);
  s = '';
  for (batchStart = 0; batchStart < count;) {
    batchEnd = batchStart + 10000 < count?batchStart + 10000:count;
    s += fromCharCode(x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

stringCastMap = {3:1, 166:1, 7:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2, Ljava_lang_Object_2_classLit);
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function StringBuffer(){
  AbstractStringBuilder.call(this, '');
}

defineClass(113, 112, {166:1}, StringBuffer);
var Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang', 'StringBuffer', 113, Ljava_lang_AbstractStringBuilder_2_classLit);
function $append_1(this$static, x_0){
  this$static.string += String.fromCharCode(x_0);
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_4(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_5(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_6(this$static, x_0, start_0, end){
  this$static.string += '' + (x_0 == null?'null':x_0).substr(start_0, end - start_0);
  return this$static;
}

function $append_7(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_8(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_9(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(18, 112, {166:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 18, Ljava_lang_AbstractStringBuilder_2_classLit);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(236, 58, $intern_5, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 236, Ljava_lang_IndexOutOfBoundsException_2_classLit);
function $clinit_System(){
  $clinit_System = emptyMethod;
  out_0 = new PrintStream;
}

function arraycopy(src_0, dest, destOfs, len){
  $clinit_System();
  var destlen, srclen;
  checkCriticalNotNull_0(src_0, 'src');
  checkCriticalNotNull_0(dest, 'dest');
  getClass__Ljava_lang_Class___devirtual$(src_0);
  getClass__Ljava_lang_Class___devirtual$(dest);
  srclen = src_0.length;
  destlen = dest.length;
  if (destOfs < 0 || len < 0 || len > srclen || destOfs + len > destlen) {
    throw toJs(new IndexOutOfBoundsException);
  }
  len > 0 && copy_0(src_0, 0, dest, destOfs, len, true);
}

defineClass(593, 1, {});
var out_0;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(59, 8, $intern_5, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 59, Ljava_lang_RuntimeException_2_classLit);
function $clear(this$static){
  this$static.position_0 = 0;
  this$static.mark = -1;
  this$static.limit = this$static.capacity;
  return this$static;
}

function $limit(this$static, newLimit){
  if (newLimit < 0 || newLimit > this$static.capacity) {
    throw toJs(new IllegalArgumentException);
  }
  this$static.limit = newLimit;
  this$static.position_0 > newLimit && (this$static.position_0 = newLimit);
  this$static.mark != -1 && this$static.mark > newLimit && (this$static.mark = -1);
  return this$static;
}

function $position(this$static){
  if (0 > this$static.limit) {
    throw toJs(new IllegalArgumentException);
  }
  this$static.position_0 = 0;
  this$static.mark != -1 && this$static.mark > this$static.position_0 && (this$static.mark = -1);
  return this$static;
}

function $rewind(this$static){
  this$static.position_0 = 0;
  this$static.mark = -1;
  return this$static;
}

function Buffer(capacity){
  if (capacity < 0) {
    throw toJs(new IllegalArgumentException);
  }
  this.capacity = this.limit = capacity;
}

defineClass(102, 1, {});
_.capacity = 0;
_.limit = 0;
_.mark = -1;
_.position_0 = 0;
var Ljava_nio_Buffer_2_classLit = createForClass('java.nio', 'Buffer', 102, Ljava_lang_Object_2_classLit);
function BufferOverflowException(){
  RuntimeException.call(this);
}

defineClass(219, 8, $intern_5, BufferOverflowException);
var Ljava_nio_BufferOverflowException_2_classLit = createForClass('java.nio', 'BufferOverflowException', 219, Ljava_lang_RuntimeException_2_classLit);
function $$init_0(this$static){
  this$static.order = ($clinit_ByteOrder() , BIG_ENDIAN);
}

function $asIntBuffer(this$static){
  if (this$static.order != ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER)) {
    throw toJs(new RuntimeException_0('Native order supported only.'));
  }
  return new IntBuffer($slice(this$static));
}

function $asShortBuffer(this$static){
  if (this$static.order != ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER)) {
    throw toJs(new RuntimeException_0('Native order supported only.'));
  }
  return new ShortBuffer($slice(this$static));
}

function $compareTo(this$static, otherBuffer){
  var compareRemaining, otherByte, otherPos, thisByte, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisByte = this$static.byteArray[thisPos];
    otherByte = otherBuffer.byteArray[otherPos];
    if (thisByte != otherByte) {
      return thisByte < otherByte?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_2(this$static, index_0){
  return this$static.byteArray[index_0];
}

function $order(this$static, byteOrder){
  this$static.order = byteOrder;
  return this$static;
}

function $slice(this$static){
  var slice_0;
  slice_0 = new ByteBuffer_1(this$static.byteArray.buffer, this$static.limit - this$static.position_0, this$static.byteArray.byteOffset + this$static.position_0);
  slice_0.order = this$static.order;
  return slice_0;
}

function ByteBuffer(capacity){
  ByteBuffer_0.call(this, new ArrayBuffer(capacity));
}

function ByteBuffer_0(buf){
  Buffer.call(this, buf.byteLength);
  $$init_0(this);
  this.byteArray = new Int8Array(buf);
}

function ByteBuffer_1(buffer, capacity, offset){
  Buffer.call(this, capacity);
  $$init_0(this);
  this.byteArray = new Int8Array(buffer, offset, capacity);
}

function allocateDirect(capacity){
  if (capacity < 0) {
    throw toJs(new IllegalArgumentException);
  }
  return new ByteBuffer(capacity);
}

defineClass(104, 102, {7:1, 104:1, 163:1}, ByteBuffer, ByteBuffer_1);
_.compareTo = function compareTo_2(otherBuffer){
  return $compareTo(this, otherBuffer);
}
;
_.equals_0 = function equals_9(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 104)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_2(this, myPosition++) == $get_2(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize(){
  return 1;
}
;
_.getElementType = function getElementType(){
  return 5120;
}
;
_.getTypedArray = function getTypedArray(){
  return this.byteArray;
}
;
_.hashCode_0 = function hashCode_10(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_2(this, myPosition++);
  }
  return hash;
}
;
_.toString_0 = function toString_16(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_ByteBuffer_2_classLit) , Ljava_nio_ByteBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_ByteBuffer_2_classLit = createForClass('java.nio', 'ByteBuffer', 104, Ljava_nio_Buffer_2_classLit);
function $clinit_ByteOrder(){
  $clinit_ByteOrder = emptyMethod;
  BIG_ENDIAN = new ByteOrder('BIG_ENDIAN');
  LITTLE_ENDIAN = new ByteOrder('LITTLE_ENDIAN');
  NATIVE_ORDER = LITTLE_ENDIAN;
}

function ByteOrder(name_0){
  this.name_0 = name_0;
}

defineClass(218, 1, {}, ByteOrder);
_.toString_0 = function toString_17(){
  return this.name_0;
}
;
var BIG_ENDIAN, LITTLE_ENDIAN, NATIVE_ORDER;
var Ljava_nio_ByteOrder_2_classLit = createForClass('java.nio', 'ByteOrder', 218, Ljava_lang_Object_2_classLit);
function $compareTo_0(this$static, otherBuffer){
  var compareRemaining, otherFloat, otherPos, thisFloat, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisFloat = this$static.floatArray[thisPos];
    otherFloat = otherBuffer.floatArray[otherPos];
    if (thisFloat != otherFloat && (thisFloat == thisFloat || otherFloat == otherFloat)) {
      return thisFloat < otherFloat?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_3(this$static, index_0){
  return this$static.floatArray[index_0];
}

function $put_0(this$static, src_0, len){
  var i, length_0;
  length_0 = src_0.length;
  if (len < 0 || compare_0(len, length_0) > 0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (len > this$static.limit - this$static.position_0) {
    throw toJs(new BufferOverflowException);
  }
  for (i = 0; i < len; i++) {
    this$static.floatArray[this$static.position_0++] = src_0[i];
  }
  return this$static;
}

function FloatBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear(this.byteBuffer);
  this.floatArray = create_1(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(128, 102, {7:1, 128:1, 163:1}, FloatBuffer);
_.compareTo = function compareTo_3(otherBuffer){
  return $compareTo_0(this, otherBuffer);
}
;
_.equals_0 = function equals_10(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 128)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_3(this, myPosition++) == $get_3(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_0(){
  return 4;
}
;
_.getElementType = function getElementType_0(){
  return 5126;
}
;
_.getTypedArray = function getTypedArray_0(){
  return this.floatArray;
}
;
_.toString_0 = function toString_18(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_FloatBuffer_2_classLit) , Ljava_nio_FloatBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_FloatBuffer_2_classLit = createForClass('java.nio', 'FloatBuffer', 128, Ljava_nio_Buffer_2_classLit);
function $compareTo_1(this$static, otherBuffer){
  var compareRemaining, otherInt, otherPos, thisInt, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisInt = this$static.intArray[thisPos];
    otherInt = otherBuffer.intArray[otherPos];
    if (thisInt != otherInt) {
      return thisInt < otherInt?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_4(this$static, index_0){
  return this$static.intArray[index_0];
}

function $put_1(this$static, c){
  this$static.intArray[this$static.position_0++] = c;
  return this$static;
}

function IntBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear(this.byteBuffer);
  this.intArray = create_3(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(151, 102, {7:1, 151:1, 163:1}, IntBuffer);
_.compareTo = function compareTo_4(otherBuffer){
  return $compareTo_1(this, otherBuffer);
}
;
_.equals_0 = function equals_11(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 151)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_4(this, myPosition++) == $get_4(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_1(){
  return 4;
}
;
_.getElementType = function getElementType_1(){
  return 5124;
}
;
_.getTypedArray = function getTypedArray_1(){
  return this.intArray;
}
;
_.hashCode_0 = function hashCode_11(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_4(this, myPosition++);
  }
  return hash;
}
;
_.toString_0 = function toString_19(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_IntBuffer_2_classLit) , Ljava_nio_IntBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_IntBuffer_2_classLit = createForClass('java.nio', 'IntBuffer', 151, Ljava_nio_Buffer_2_classLit);
function $compareTo_2(this$static, otherBuffer){
  var compareRemaining, otherByte, otherPos, thisByte, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisByte = this$static.shortArray[thisPos];
    otherByte = otherBuffer.shortArray[otherPos];
    if (thisByte != otherByte) {
      return thisByte < otherByte?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_5(this$static, index_0){
  return this$static.shortArray[index_0];
}

function $put_2(this$static, src_0, len){
  var i, length_0;
  length_0 = src_0.length;
  if (len < 0 || compare_0(len, length_0) > 0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (len > this$static.limit - this$static.position_0) {
    throw toJs(new BufferOverflowException);
  }
  for (i = 0; i < len; i++) {
    this$static.shortArray[this$static.position_0++] = src_0[i];
  }
  return this$static;
}

function ShortBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 1);
  this.byteBuffer = byteBuffer;
  $clear(this.byteBuffer);
  this.shortArray = create_2(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(150, 102, {7:1, 150:1, 163:1}, ShortBuffer);
_.compareTo = function compareTo_5(otherBuffer){
  return $compareTo_2(this, otherBuffer);
}
;
_.equals_0 = function equals_12(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 150)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_5(this, myPosition++) == $get_5(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_2(){
  return 2;
}
;
_.getElementType = function getElementType_2(){
  return 5122;
}
;
_.getTypedArray = function getTypedArray_2(){
  return this.shortArray;
}
;
_.hashCode_0 = function hashCode_12(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_5(this, myPosition++);
  }
  return hash;
}
;
_.toString_0 = function toString_20(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_ShortBuffer_2_classLit) , Ljava_nio_ShortBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_ShortBuffer_2_classLit = createForClass('java.nio', 'ShortBuffer', 150, Ljava_nio_Buffer_2_classLit);
function $containsKey(this$static, key){
  return instanceOfString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_3(this$static.stringMap, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $get_6(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_9(this$static.stringMap, key);
}

function $put_3(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_4(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_4(this$static.hashCodeMap, null, value_0):$put_5(this$static.stringMap, key, value_0);
}

function $remove(this$static, key){
  return instanceOfString(key)?key == null?$remove_3(this$static.hashCodeMap, null):$remove_4(this$static.stringMap, key):$remove_3(this$static.hashCodeMap, key);
}

function $reset(this$static){
  var modCount;
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  modCount = this$static['_gwt_modCount'] | 0;
  this$static['_gwt_modCount'] = modCount + 1;
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(143, 532, $intern_14);
_.containsKey = function containsKey_1(key){
  return $containsKey(this, key);
}
;
_.entrySet_0 = function entrySet_0(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_1 = function get_3(key){
  return $get_6(this, key);
}
;
_.put = function put_1(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.size_1 = function size_6(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 143, Ljava_util_AbstractMap_2_classLit);
function $contains_1(this$static, o){
  if (instanceOf(o, 53)) {
    return $containsEntry(this$static.this$01, o);
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(61, 534, $intern_16, AbstractHashMap$EntrySet);
_.contains = function contains_6(o){
  return $contains_1(this, o);
}
;
_.iterator = function iterator_8(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_7(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 61, Ljava_util_AbstractSet_2_classLit);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next_0(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  rv = this$static.current.next_1();
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function AbstractHashMap$EntrySetIterator(this$0){
  var modCount;
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  modCount = this$0['_gwt_modCount'];
  this['_gwt_modCount'] = modCount;
}

defineClass(62, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_1 = function next_3(){
  return $next_0(this);
}
;
_.hasNext_0 = function hasNext_2(){
  return this.hasNext;
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 62, Ljava_lang_Object_2_classLit);
function $equals_1(this$static, o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 38)) {
    return false;
  }
  other = o;
  if (this$static.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this$static.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function $indexOf_0(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (equals_22(toFind, this$static.get_0(i))) {
      return i;
    }
  }
  return -1;
}

defineClass(541, 533, $intern_21);
_.add_1 = function add_2(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_3(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_13(o){
  return $equals_1(this, o);
}
;
_.hashCode_0 = function hashCode_13(){
  return hashCode_19(this);
}
;
_.iterator = function iterator_9(){
  return new AbstractList$IteratorImpl(this);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 541, Ljava_util_AbstractCollection_2_classLit);
function $hasNext(this$static){
  return this$static.i < this$static.this$01.size_1();
}

function $next_1(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.size_1());
  return this$static.this$01.get_0(this$static.i++);
}

function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

defineClass(200, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_3(){
  return $hasNext(this);
}
;
_.next_1 = function next_4(){
  return $next_1(this);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 200, Ljava_lang_Object_2_classLit);
function AbstractList$ListIteratorImpl(this$0){
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(0, this$0.array.length);
  this.i = 0;
}

defineClass(148, 200, {}, AbstractList$ListIteratorImpl);
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 148, Ljava_util_AbstractList$IteratorImpl_2_classLit);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(98, 534, $intern_16, AbstractMap$1);
_.contains = function contains_7(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_10(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_8(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 98, Ljava_util_AbstractSet_2_classLit);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(81, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_4(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_5(){
  var entry;
  return entry = $next_0(this.val$outerIter2) , entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 81, Ljava_lang_Object_2_classLit);
defineClass(382, 1, $intern_15);
_.equals_0 = function equals_14(other){
  var entry;
  if (!instanceOf(other, 53)) {
    return false;
  }
  entry = other;
  return equals_22(this.key_0, entry.getKey()) && equals_22(this.value_0, entry.getValue());
}
;
_.getKey = function getKey_0(){
  return this.key_0;
}
;
_.getValue = function getValue_0(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_14(){
  return hashCode_24(this.key_0) ^ hashCode_24(this.value_0);
}
;
_.setValue = function setValue_0(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_21(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 382, Ljava_lang_Object_2_classLit);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(383, 382, $intern_15, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 383, Ljava_util_AbstractMap$AbstractEntry_2_classLit);
defineClass(542, 1, $intern_15);
_.equals_0 = function equals_15(other){
  var entry;
  if (!instanceOf(other, 53)) {
    return false;
  }
  entry = other;
  return equals_22(this.val$entry2.value[0], entry.getKey()) && equals_22($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_15(){
  return hashCode_24(this.val$entry2.value[0]) ^ hashCode_24($getValue(this));
}
;
_.toString_0 = function toString_22(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 542, Ljava_lang_Object_2_classLit);
function $add_0(this$static, index_0, o){
  checkCriticalPositionIndex(index_0, this$static.array.length);
  insertTo(this$static.array, index_0, o);
}

function $add_1(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $addAll_0(this$static, c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this$static.array, this$static.array.length, cArray);
  return true;
}

function $forEach_0(this$static, consumer){
  var e, e$array, e$index, e$max;
  checkCriticalNotNull(consumer);
  for (e$array = this$static.array , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    lambda$0(consumer.throwables_0, e);
  }
}

function $get_7(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_22(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_0(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0, 1);
  return previous;
}

function $remove_1(this$static, o){
  var i;
  i = $indexOf_1(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this$static.array.length);
  removeFrom(this$static.array, i, 1);
  return true;
}

function $set_0(this$static, index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

function $toArray_1(this$static, out){
  var i, result, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = new Array(size_0) , stampJavaTypeInfo_0(result, out)));
  for (i = 0; i < size_0; ++i) {
    out[i] = this$static.array[i];
  }
  out.length > size_0 && (out[size_0] = null);
  return out;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
}

defineClass(14, 541, $intern_3, ArrayList);
_.add_1 = function add_4(index_0, o){
  $add_0(this, index_0, o);
}
;
_.add_0 = function add_5(o){
  return $add_1(this, o);
}
;
_.contains = function contains_8(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get_0 = function get_4(index_0){
  return $get_7(this, index_0);
}
;
_.iterator = function iterator_11(){
  return new ArrayList$1(this);
}
;
_.size_1 = function size_9(){
  return this.array.length;
}
;
_.toArray = function toArray_5(){
  return clone(this.array, this.array.length);
}
;
_.toArray_0 = function toArray_6(out){
  return $toArray_1(this, out);
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 14, Ljava_util_AbstractList_2_classLit);
function $next_2(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(126, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_5(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_6(){
  return $next_2(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 126, Ljava_lang_Object_2_classLit);
function binarySearch(sortedArray, key){
  return binarySearch0(sortedArray, sortedArray.length, key);
}

function binarySearch0(sortedArray, toIndex, key){
  var compareResult, high, low, mid, midVal;
  $clinit_Comparators();
  low = 0;
  high = toIndex - 1;
  while (low <= high) {
    mid = low + (high - low >> 1);
    midVal = sortedArray[mid];
    compareResult = (checkCriticalNotNull(midVal) , $compareTo_3(midVal, (checkCriticalNotNull(key) , key)));
    if (compareResult < 0) {
      low = mid + 1;
    }
     else if (compareResult > 0) {
      high = mid - 1;
    }
     else {
      return mid;
    }
  }
  return -low - 1;
}

function copyOf(original, newLength){
  checkCriticalArraySize(newLength);
  return copyPrimitiveArray(original, initUnidimensionalArray(I_classLit, $intern_22, 22, newLength, 15, 1), newLength);
}

function copyPrimitiveArray(original, copy, to){
  var copyLen, len;
  len = original.length;
  copyLen = to < len?to:len;
  copy_0(original, 0, copy, 0, copyLen, true);
  return copy;
}

function deepToString(a, arraysIveSeen){
  var joiner, obj, obj$index, obj$max, objArray, old, tempSet, elementTypeCategory, elementTypeCategory_0;
  if (a == null) {
    return 'null';
  }
  old = $put_3(arraysIveSeen.map_0, a, arraysIveSeen);
  if (old != null) {
    return '[...]';
  }
  joiner = new StringJoiner('[', ']');
  for (obj$index = 0 , obj$max = a.length; obj$index < obj$max; ++obj$index) {
    obj = a[obj$index];
    if (obj != null && (getClass__Ljava_lang_Class___devirtual$(obj).modifiers & 4) != 0) {
      if (Array.isArray(obj) && (elementTypeCategory = getElementTypeCategory(obj) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16))) {
        if ($containsKey(arraysIveSeen.map_0, obj)) {
          !joiner.builder?(joiner.builder = new StringBuilder_1(joiner.prefix)):$append_8(joiner.builder, joiner.delimiter);
          $append_5(joiner.builder, '[...]');
        }
         else {
          objArray = (obj == null || Array.isArray(obj) && (elementTypeCategory_0 = getElementTypeCategory(obj) , !(elementTypeCategory_0 >= 14 && elementTypeCategory_0 <= 16)) , obj);
          tempSet = new HashSet_0(arraysIveSeen);
          $add_3(joiner, deepToString(objArray, tempSet));
        }
      }
       else 
        instanceOf(obj, 562)?$add_3(joiner, toString_30(obj)):instanceOf(obj, 563)?$add_3(joiner, toString_23(obj)):instanceOf(obj, 557)?$add_3(joiner, toString_24(obj)):instanceOf(obj, 164)?$add_3(joiner, toString_29(obj)):instanceOf(obj, 54)?$add_3(joiner, toString_27(obj)):instanceOf(obj, 504)?$add_3(joiner, toString_28(obj)):instanceOf(obj, 165)?$add_3(joiner, toString_26(obj)):instanceOf(obj, 505) && $add_3(joiner, toString_25(obj));
    }
     else {
      $add_3(joiner, obj == null?'null':toString_9(obj));
    }
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

function hashCode_16(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function insertionSort(array, low, high){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && $compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      array[j] = array[j - 1];
      array[j - 1] = t;
    }
  }
}

function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && $compare(src_0[srcLow], src_0[topIdx]) <= 0?(dest[destLow++] = src_0[srcLow++]):(dest[destLow++] = src_0[topIdx++]);
  }
}

function mergeSort(x_0, fromIndex, toIndex){
  var temp;
  $clinit_Comparators();
  temp = x_0.slice(fromIndex, toIndex);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex);
}

function mergeSort_0(temp, array, low, high, ofs){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs);
  if ($compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      array[low++] = temp[tempLow++];
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high);
}

function toString_23(a){
  var element, element$index, element$max, joiner;
  if (a == null) {
    return 'null';
  }
  joiner = new StringJoiner('[', ']');
  for (element$index = 0 , element$max = a.length; element$index < element$max; ++element$index) {
    element = a[element$index];
    !joiner.builder?(joiner.builder = new StringBuilder_1(joiner.prefix)):$append_8(joiner.builder, joiner.delimiter);
    $append_5(joiner.builder, '' + element);
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

function toString_24(a){
  var element, element$index, element$max, joiner;
  if (a == null) {
    return 'null';
  }
  joiner = new StringJoiner('[', ']');
  for (element$index = 0 , element$max = a.length; element$index < element$max; ++element$index) {
    element = a[element$index];
    $add_3(joiner, String.fromCharCode(element));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

function toString_25(a){
  var element, element$index, element$max, joiner;
  if (a == null) {
    return 'null';
  }
  joiner = new StringJoiner('[', ']');
  for (element$index = 0 , element$max = a.length; element$index < element$max; ++element$index) {
    element = a[element$index];
    !joiner.builder?(joiner.builder = new StringBuilder_1(joiner.prefix)):$append_8(joiner.builder, joiner.delimiter);
    $append_5(joiner.builder, '' + element);
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

function toString_26(a){
  var element, element$index, element$max, joiner;
  if (a == null) {
    return 'null';
  }
  joiner = new StringJoiner('[', ']');
  for (element$index = 0 , element$max = a.length; element$index < element$max; ++element$index) {
    element = a[element$index];
    !joiner.builder?(joiner.builder = new StringBuilder_1(joiner.prefix)):$append_8(joiner.builder, joiner.delimiter);
    $append_5(joiner.builder, '' + element);
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

function toString_27(a){
  var element, element$index, element$max, joiner;
  if (a == null) {
    return 'null';
  }
  joiner = new StringJoiner('[', ']');
  for (element$index = 0 , element$max = a.length; element$index < element$max; ++element$index) {
    element = a[element$index];
    !joiner.builder?(joiner.builder = new StringBuilder_1(joiner.prefix)):$append_8(joiner.builder, joiner.delimiter);
    $append_5(joiner.builder, '' + element);
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

function toString_28(a){
  var element, element$index, element$max, joiner;
  if (a == null) {
    return 'null';
  }
  joiner = new StringJoiner('[', ']');
  for (element$index = 0 , element$max = a.length; element$index < element$max; ++element$index) {
    element = a[element$index];
    !joiner.builder?(joiner.builder = new StringBuilder_1(joiner.prefix)):$append_8(joiner.builder, joiner.delimiter);
    $append_5(joiner.builder, '' + toString_8(element));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

function toString_29(a){
  var element, element$index, element$max, joiner;
  if (a == null) {
    return 'null';
  }
  joiner = new StringJoiner('[', ']');
  for (element$index = 0 , element$max = a.length; element$index < element$max; ++element$index) {
    element = a[element$index];
    !joiner.builder?(joiner.builder = new StringBuilder_1(joiner.prefix)):$append_8(joiner.builder, joiner.delimiter);
    $append_5(joiner.builder, '' + element);
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

function toString_30(a){
  var element, element$index, element$max, joiner;
  if (a == null) {
    return 'null';
  }
  joiner = new StringJoiner('[', ']');
  for (element$index = 0 , element$max = a.length; element$index < element$max; ++element$index) {
    element = a[element$index];
    !joiner.builder?(joiner.builder = new StringBuilder_1(joiner.prefix)):$append_8(joiner.builder, joiner.delimiter);
    $append_5(joiner.builder, '' + element);
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

function $toArray_2(this$static, out){
  var i, result, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = new Array(size_0) , stampJavaTypeInfo_0(result, out)));
  for (i = 0; i < size_0; ++i) {
    out[i] = this$static.array[i];
  }
  out.length > size_0 && (out[size_0] = null);
  return out;
}

function Arrays$ArrayList(array){
  checkCriticalNotNull(array);
  this.array = array;
}

defineClass(206, 541, $intern_3, Arrays$ArrayList);
_.contains = function contains_9(o){
  return $indexOf_0(this, o) != -1;
}
;
_.get_0 = function get_5(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.size_1 = function size_10(){
  return this.array.length;
}
;
_.toArray = function toArray_7(){
  return $toArray_2(this, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, this.array.length, 5, 1));
}
;
_.toArray_0 = function toArray_8(out){
  return $toArray_2(this, out);
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 206, Ljava_util_AbstractList_2_classLit);
function $andNot(this$static, set_0){
  var index_0, limit, otherWord, word;
  if (this$static == set_0) {
    this$static.array.length = 0;
    return;
  }
  limit = min_0(this$static.array.length, set_0.array.length);
  for (index_0 = 0; index_0 < limit; index_0++) {
    otherWord = set_0.array[index_0] | 0;
    if (otherWord != 0) {
      word = this$static.array[index_0] | 0;
      word != 0 && (this$static.array[index_0] = word & ~otherWord & $intern_0);
    }
  }
}

function $cardinality(this$static){
  var count, i;
  count = 0;
  for (i = 0; i < this$static.array.length; i++) {
    count += bitCount(this$static.array[i] | 0);
  }
  return count;
}

function $get_8(this$static, bitIndex){
  var index_0;
  checkIndex(bitIndex);
  index_0 = bitIndex / 31 | 0;
  return index_0 < this$static.array.length && ((this$static.array[index_0] | 0) >>> bitIndex % 31 & 1) == 1;
}

function $length(this$static){
  var lastIndex, word;
  lastIndex = lastSetWordIndex(this$static.array);
  if (lastIndex == -1) {
    return 0;
  }
  word = this$static.array[lastIndex] | 0;
  return lastIndex * 31 + (32 - numberOfLeadingZeros_0(word));
}

function $nextSetBit(this$static, fromIndex){
  var index_0, length_0, word;
  checkIndex(fromIndex);
  index_0 = fromIndex / 31 | 0;
  length_0 = this$static.array.length;
  if (index_0 >= length_0) {
    return -1;
  }
  word = (this$static.array[index_0] | 0) & $intern_0 << fromIndex % 31;
  while (word == 0) {
    if (++index_0 >= length_0) {
      return -1;
    }
    word = this$static.array[index_0] | 0;
  }
  return index_0 * 31 + numberOfTrailingZeros(word);
}

function $or(this$static, set_0){
  var index_0, word;
  if (this$static == set_0) {
    return;
  }
  maybeGrowArrayToIndex(this$static.array, set_0.array.length - 1);
  for (index_0 = 0; index_0 < set_0.array.length; index_0++) {
    word = set_0.array[index_0] | 0;
    word != 0 && (this$static.array[index_0] = this$static.array[index_0] | 0 | word);
  }
}

function $set_1(this$static, bitIndex){
  var index_0;
  checkIndex(bitIndex);
  index_0 = bitIndex / 31 | 0;
  maybeGrowArrayToIndex(this$static.array, index_0);
  this$static.array[index_0] = this$static.array[index_0] | 0 | 1 << bitIndex % 31;
}

function BitSet(){
  this.array = initUnidimensionalArray(I_classLit, $intern_22, 22, 0, 15, 1);
}

function BitSet_0(array){
  this.array = array;
}

function checkIndex(bitIndex){
  if (bitIndex < 0) {
    throw toJs(new IndexOutOfBoundsException_0('bitIndex < 0: ' + bitIndex));
  }
}

function lastSetWordIndex(array){
  var i;
  i = array.length - 1;
  for (; i >= 0 && (array[i] | 0) == 0; --i)
  ;
  return i;
}

function maybeGrowArrayToIndex(array, newMaxIndex){
  var newLength;
  newLength = newMaxIndex + 1;
  newLength > array.length && (array.length = newLength , undefined);
}

defineClass(19, 1, {19:1}, BitSet, BitSet_0);
_.equals_0 = function equals_16(obj){
  var index_0, lastIndex, other;
  if (this === obj) {
    return true;
  }
  if (!instanceOf(obj, 19)) {
    return false;
  }
  other = obj;
  lastIndex = lastSetWordIndex(this.array);
  if (lastIndex != lastSetWordIndex(other.array)) {
    return false;
  }
  for (index_0 = 0; index_0 <= lastIndex; index_0++) {
    if ((this.array[index_0] | 0) != (other.array[index_0] | 0)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_17(){
  var hash, i, lastIndex, value_0;
  lastIndex = lastSetWordIndex(this.array);
  hash = -2128831035 ^ lastIndex;
  for (i = 0; i <= lastIndex; i++) {
    value_0 = this.array[i] | 0;
    hash = hash * $intern_23 & -1 ^ value_0 & 255;
    hash = hash * $intern_23 & -1 ^ value_0 >>> 8 & 255;
    hash = hash * $intern_23 & -1 ^ value_0 >>> 16 & 255;
    hash = hash * $intern_23 & -1 ^ value_0 >>> 24;
  }
  return hash;
}
;
_.toString_0 = function toString_31(){
  var next, sb;
  if ($length(this) == 0) {
    return '{}';
  }
  sb = new StringBuilder_1('{');
  next = $nextSetBit(this, 0);
  sb.string += next;
  while ((next = $nextSetBit(this, next + 1)) != -1) {
    sb.string += ', ';
    sb.string += next;
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_BitSet_2_classLit = createForClass('java.util', 'BitSet', 19, Ljava_lang_Object_2_classLit);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_18(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_19(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 55)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(397, 541, $intern_3, Collections$EmptyList);
_.contains = function contains_10(object){
  return false;
}
;
_.get_0 = function get_6(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_12(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_11(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 397, Ljava_util_AbstractList_2_classLit);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(398, 1, {}, Collections$EmptyListIterator);
_.hasNext_0 = function hasNext_6(){
  return false;
}
;
_.next_1 = function next_7(){
  throw toJs(new NoSuchElementException);
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 398, Ljava_lang_Object_2_classLit);
function Collections$SingletonList(element){
  this.element = element;
}

defineClass(399, 541, {3:1, 17:1, 38:1}, Collections$SingletonList);
_.contains = function contains_11(item_0){
  return equals_22(this.element, item_0);
}
;
_.get_0 = function get_7(index_0){
  checkCriticalElementIndex(index_0, 1);
  return this.element;
}
;
_.size_1 = function size_12(){
  return 1;
}
;
var Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 399, Ljava_util_AbstractList_2_classLit);
defineClass(197, 1, {17:1});
_.add_0 = function add_6(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.contains = function contains_12(o){
  return this.coll.contains(o);
}
;
_.iterator = function iterator_13(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.size_1 = function size_13(){
  return this.coll.size_1();
}
;
_.toArray_0 = function toArray_9(a){
  return this.coll.toArray_0(a);
}
;
_.toString_0 = function toString_32(){
  return toString_9(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 197, Ljava_lang_Object_2_classLit);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(147, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext_0 = function hasNext_7(){
  return this.it.hasNext_0();
}
;
_.next_1 = function next_8(){
  return this.it.next_1();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 147, Ljava_lang_Object_2_classLit);
function Collections$UnmodifiableList(list){
  this.coll = list;
  this.list = list;
}

defineClass(146, 197, $intern_21, Collections$UnmodifiableList);
_.equals_0 = function equals_17(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.list, o);
}
;
_.get_0 = function get_8(index_0){
  return this.list.get_0(index_0);
}
;
_.hashCode_0 = function hashCode_20(){
  return hashCode__I__devirtual$(this.list);
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 146, Ljava_util_Collections$UnmodifiableCollection_2_classLit);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(400, 1, $intern_14, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_1(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals_0 = function equals_18(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.map_0, o);
}
;
_.get_1 = function get_9(key){
  return this.map_0.get_1(key);
}
;
_.hashCode_0 = function hashCode_21(){
  return hashCode__I__devirtual$(this.map_0);
}
;
_.put = function put_2(key, value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_14(){
  return this.map_0.size_1();
}
;
_.toString_0 = function toString_33(){
  return toString_9(this.map_0);
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 400, Ljava_lang_Object_2_classLit);
defineClass(401, 197, $intern_16);
_.equals_0 = function equals_19(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.coll, o);
}
;
_.hashCode_0 = function hashCode_22(){
  return hashCode__I__devirtual$(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 401, Ljava_util_Collections$UnmodifiableCollection_2_classLit);
function $wrap(array, size_0){
  var i;
  for (i = 0; i < size_0; ++i) {
    array[i] = new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(array[i]);
  }
}

function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  this.coll = s;
}

defineClass(402, 401, $intern_16, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.contains = function contains_13(o){
  return this.coll.contains(o);
}
;
_.iterator = function iterator_14(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
_.toArray_0 = function toArray_10(a){
  var result;
  result = this.coll.toArray_0(a);
  $wrap(result, this.coll.size_1());
  return result;
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 402, Ljava_util_Collections$UnmodifiableSet_2_classLit);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(403, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.next_1 = function next_9(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(this.val$it2.next_1());
}
;
_.hasNext_0 = function hasNext_8(){
  return this.val$it2.hasNext_0();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 403, Ljava_lang_Object_2_classLit);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(198, 1, $intern_15, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals_0 = function equals_20(o){
  return this.entry.equals_0(o);
}
;
_.getKey = function getKey_1(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_1(){
  return this.entry.getValue();
}
;
_.hashCode_0 = function hashCode_23(){
  return this.entry.hashCode_0();
}
;
_.setValue = function setValue_1(value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.toString_0 = function toString_34(){
  return toString_9(this.entry);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 198, Ljava_lang_Object_2_classLit);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(199, 146, {17:1, 38:1, 55:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 199, Ljava_util_Collections$UnmodifiableList_2_classLit);
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  new Comparators$NaturalOrderComparator;
}

function $compare(a, b){
  return checkCriticalNotNull(a) , compareTo_Ljava_lang_Object__I__devirtual$(a, (checkCriticalNotNull(b) , b));
}

function Comparators$NaturalOrderComparator(){
}

defineClass(502, 1, {3:1}, Comparators$NaturalOrderComparator);
_.equals_0 = function equals_21(other){
  return this === other;
}
;
var Ljava_util_Comparators$NaturalOrderComparator_2_classLit = createForClass('java.util', 'Comparators/NaturalOrderComparator', 502, Ljava_lang_Object_2_classLit);
function checkStructuralChange(host, iterator){
  if (iterator['_gwt_modCount'] != host['_gwt_modCount']) {
    throw toJs(new ConcurrentModificationException);
  }
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0['_gwt_modCount'] | 0;
  map_0['_gwt_modCount'] = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(489, 8, $intern_5, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 489, Ljava_lang_RuntimeException_2_classLit);
function $equals_2(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function HashMap(){
  $reset(this);
}

function HashMap_0(ignored){
  checkCriticalArgument_0(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument_0(true, 'Non-positive load factor');
  $reset(this);
}

defineClass(41, 143, {3:1, 133:1}, HashMap, HashMap_0);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 41, Ljava_util_AbstractHashMap_2_classLit);
function $add_2(this$static, o){
  var old;
  old = $put_3(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_2(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_2(this$static, o){
  return $remove(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(c){
  this.map_0 = new HashMap_0($size(c.map_0));
  $addAll(this, c);
}

defineClass(101, 534, {3:1, 17:1, 75:1}, HashSet, HashSet_0);
_.add_0 = function add_7(o){
  return $add_2(this, o);
}
;
_.contains = function contains_14(o){
  return $contains_2(this, o);
}
;
_.iterator = function iterator_15(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_15(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 101, Ljava_util_AbstractSet_2_classLit);
function $findEntryInChain(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_2(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?[]:chain;
}

function $getEntry(this$static, key){
  var hashCode;
  return $findEntryInChain(key, $getChainOrEmpty(this$static, key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0)));
}

function $put_4(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?[]:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode0, chain0);
  }
   else {
    entry = $findEntryInChain(key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  chain0[chain0.length] = new AbstractMap$SimpleEntry(key, value_0);
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_3(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?[]:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if ($equals_2(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        this$static.backingMap['delete'](hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(404, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_16(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 404, Ljava_lang_Object_2_classLit);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = [];
}

defineClass(201, 1, {}, InternalHashCodeMap$1);
_.next_1 = function next_10(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_9(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 201, Ljava_lang_Object_2_classLit);
function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_3(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_9(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_5(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_4(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    this$static.backingMap['delete'](key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(405, 1, {}, InternalStringMap);
_.iterator = function iterator_17(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 405, Ljava_lang_Object_2_classLit);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(202, 1, {}, InternalStringMap$1);
_.next_1 = function next_11(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_10(){
  return !this.current.done;
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 202, Ljava_lang_Object_2_classLit);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_9(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(406, 542, $intern_15, InternalStringMap$2);
_.getKey = function getKey_2(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_2(){
  return $getValue(this);
}
;
_.setValue = function setValue_2(object){
  return $put_5(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 406, Ljava_util_AbstractMapEntry_2_classLit);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(132, 8, $intern_5, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 132, Ljava_lang_RuntimeException_2_classLit);
function equals_22(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_24(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $clinit_Optional(){
  $clinit_Optional = emptyMethod;
  EMPTY_0 = new Optional(null);
}

function $get_10(this$static){
  checkCriticalElement(this$static.ref != null);
  return this$static.ref;
}

function $ifPresent(this$static, consumer){
  this$static.ref != null && consumer.accept_0(this$static.ref);
}

function Optional(ref){
  $clinit_Optional();
  this.ref = ref;
}

function ofNullable(value_0){
  $clinit_Optional();
  return value_0 == null?EMPTY_0:new Optional(checkCriticalNotNull(value_0));
}

defineClass(89, 1, {89:1}, Optional);
_.equals_0 = function equals_23(obj){
  var other;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 89)) {
    return false;
  }
  other = obj;
  return equals_22(this.ref, other.ref);
}
;
_.hashCode_0 = function hashCode_25(){
  return hashCode_24(this.ref);
}
;
_.toString_0 = function toString_35(){
  return this.ref != null?'Optional.of(' + valueOf_0(this.ref) + ')':'Optional.empty()';
}
;
var EMPTY_0;
var Ljava_util_Optional_2_classLit = createForClass('java.util', 'Optional', 89, Ljava_lang_Object_2_classLit);
function $clinit_OptionalInt(){
  $clinit_OptionalInt = emptyMethod;
  EMPTY_1 = new OptionalInt;
}

function OptionalInt(){
  this.ref = 0;
  this.present = false;
}

function OptionalInt_0(value_0){
  $clinit_OptionalInt();
  this.ref = value_0;
  this.present = true;
}

defineClass(110, 1, {110:1}, OptionalInt, OptionalInt_0);
_.equals_0 = function equals_24(obj){
  var other;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 110)) {
    return false;
  }
  other = obj;
  return this.present == other.present && compare_3(this.ref, other.ref) == 0;
}
;
_.hashCode_0 = function hashCode_26(){
  return this.present?this.ref:0;
}
;
_.toString_0 = function toString_36(){
  return this.present?'OptionalInt.of(' + ('' + this.ref) + ')':'OptionalInt.empty()';
}
;
_.present = false;
_.ref = 0;
var EMPTY_1;
var Ljava_util_OptionalInt_2_classLit = createForClass('java.util', 'OptionalInt', 110, Ljava_lang_Object_2_classLit);
function $clinit_Random(){
  $clinit_Random = emptyMethod;
  var i, i0, twoToTheXMinus24Tmp, twoToTheXMinus48Tmp;
  twoToTheXMinus24 = initUnidimensionalArray(D_classLit, $intern_24, 22, 25, 15, 1);
  twoToTheXMinus48 = initUnidimensionalArray(D_classLit, $intern_24, 22, 33, 15, 1);
  twoToTheXMinus48Tmp = 1.52587890625E-5;
  for (i0 = 32; i0 >= 0; i0--) {
    twoToTheXMinus48[i0] = twoToTheXMinus48Tmp;
    twoToTheXMinus48Tmp *= 0.5;
  }
  twoToTheXMinus24Tmp = 1;
  for (i = 24; i >= 0; i--) {
    twoToTheXMinus24[i] = twoToTheXMinus24Tmp;
    twoToTheXMinus24Tmp *= 0.5;
  }
}

function $nextInt(this$static, n){
  var bits, val;
  checkCriticalArgument(n > 0);
  if ((n & -n) == n) {
    return round_int(n * $nextInternal(this$static) * 4.6566128730773926E-10);
  }
  do {
    bits = $nextInternal(this$static);
    val = bits % n;
  }
   while (bits - val + (n - 1) < 0);
  return round_int(val);
}

function $nextInternal(this$static){
  var carry, dval, h, hi, l, lo;
  hi = this$static.seedhi * $intern_25 + this$static.seedlo * 1502;
  lo = this$static.seedlo * $intern_25 + 11;
  carry = $wnd.Math.floor(lo * $intern_26);
  hi += carry;
  lo -= carry * $intern_27;
  hi %= $intern_27;
  this$static.seedhi = hi;
  this$static.seedlo = lo;
  h = this$static.seedhi * 128;
  l = $wnd.Math.floor(this$static.seedlo * twoToTheXMinus48[31]);
  dval = h + l;
  dval >= 2147483648 && (dval -= 4294967296);
  return dval;
}

function Random(){
  $clinit_Random();
  var hi, lo, seed;
  seed = uniqueSeed++ + now_2();
  hi = round_int($wnd.Math.floor(seed * $intern_26)) & $intern_28;
  lo = round_int(seed - hi * $intern_27);
  this.seedhi = hi ^ 1502;
  this.seedlo = lo ^ $intern_25;
}

defineClass(179, 1, {}, Random);
_.seedhi = 0;
_.seedlo = 0;
var twoToTheXMinus24, twoToTheXMinus48, uniqueSeed = 0;
var Ljava_util_Random_2_classLit = createForClass('java.util', 'Random', 179, Ljava_lang_Object_2_classLit);
function $forEachRemaining_0(this$static, consumer){
  while (this$static.tryAdvance(consumer))
  ;
}

function $forEachRemaining_1(this$static, consumer){
  while ($tryAdvance(this$static, consumer))
  ;
}

function Spliterator$OfInt$2methodref$accept$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(180, 1, {}, Spliterator$OfInt$2methodref$accept$Type);
_.accept = function accept(arg0){
  this.$$outer_0.accept_0(valueOf(arg0));
}
;
var Ljava_util_Spliterator$OfInt$2methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfInt/2methodref$accept$Type', 180, Ljava_lang_Object_2_classLit);
function Spliterator$OfInt$3methodref$accept$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(181, 1, {}, Spliterator$OfInt$3methodref$accept$Type);
_.accept = function accept_0(arg0){
  this.$$outer_0.accept_0(valueOf(arg0));
}
;
var Ljava_util_Spliterator$OfInt$3methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfInt/3methodref$accept$Type', 181, Ljava_lang_Object_2_classLit);
function Spliterators$BaseSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

defineClass(182, 1, {});
_.forEachRemaining = function forEachRemaining(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.characteristics_0 = function characteristics_0(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize(){
  return this.sizeEstimate;
}
;
_.characteristics = 0;
_.sizeEstimate = 0;
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 182, Ljava_lang_Object_2_classLit);
defineClass(386, 182, {});
_.forEachRemaining = function forEachRemaining_0(consumer){
  instanceOf(consumer, 167)?$forEachRemaining_1(this, consumer):$forEachRemaining_1(this, new Spliterator$OfInt$3methodref$accept$Type(consumer));
}
;
_.tryAdvance = function tryAdvance(consumer){
  return instanceOf(consumer, 167)?$tryAdvance(this, consumer):$tryAdvance(this, new Spliterator$OfInt$2methodref$accept$Type(consumer));
}
;
var Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractIntSpliterator', 386, Ljava_util_Spliterators$BaseSpliterator_2_classLit);
function Spliterators$AbstractSpliterator(size_0, characteristics){
  Spliterators$BaseSpliterator.call(this, size_0, characteristics);
}

defineClass(205, 182, {});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 205, Ljava_util_Spliterators$BaseSpliterator_2_classLit);
function $initIterator(this$static){
  var iiter;
  if (!this$static.it) {
    this$static.it = (iiter = new AbstractList$ListIteratorImpl(this$static.collection._impl) , new RList$5(iiter));
    this$static.estimateSize = this$static.collection._impl.array.length;
  }
}

function Spliterators$IteratorSpliterator(collection){
  this.collection = (checkCriticalNotNull(collection) , collection);
  this.characteristics = 16464;
}

defineClass(82, 1, {}, Spliterators$IteratorSpliterator);
_.characteristics_0 = function characteristics_1(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize_0(){
  $initIterator(this);
  return this.estimateSize;
}
;
_.forEachRemaining = function forEachRemaining_1(consumer){
  $initIterator(this);
  $forEachRemaining(this.it, consumer);
}
;
_.tryAdvance = function tryAdvance_0(consumer){
  checkCriticalNotNull(consumer);
  $initIterator(this);
  if ($hasNext(this.it.val$iiter2)) {
    consumer.accept_0($next_1(this.it.val$iiter2));
    return true;
  }
  return false;
}
;
_.characteristics = 0;
_.estimateSize = 0;
var Ljava_util_Spliterators$IteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/IteratorSpliterator', 82, Ljava_lang_Object_2_classLit);
function $add_3(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_1(this$static.prefix)):$append_8(this$static.builder, this$static.delimiter);
  $append_5(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(39, 1, {}, StringJoiner);
_.toString_0 = function toString_37(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 39, Ljava_lang_Object_2_classLit);
function of(supplier, accumulator, combiner, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl;
}

function $clinit_Collector$Characteristics(){
  $clinit_Collector$Characteristics = emptyMethod;
  CONCURRENT = new Collector$Characteristics('CONCURRENT', 0);
  IDENTITY_FINISH = new Collector$Characteristics('IDENTITY_FINISH', 1);
  UNORDERED = new Collector$Characteristics('UNORDERED', 2);
}

function Collector$Characteristics(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_1, 83, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

defineClass(83, 6, {3:1, 7:1, 6:1, 83:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 83, Ljava_lang_Enum_2_classLit, values_6);
function CollectorImpl(){
  $clinit_Collections();
}

defineClass(420, 1, {}, CollectorImpl);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 420, Ljava_lang_Object_2_classLit);
function Collectors$20methodref$add$Type(){
}

defineClass(388, 1, {}, Collectors$20methodref$add$Type);
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 388, Ljava_lang_Object_2_classLit);
function Collectors$21methodref$ctor$Type(){
}

defineClass(390, 1, {}, Collectors$21methodref$ctor$Type);
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 390, Ljava_lang_Object_2_classLit);
function Collectors$lambda$21$Type(){
}

defineClass(389, 1, {}, Collectors$lambda$21$Type);
var Ljava_util_stream_Collectors$lambda$21$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$21$Type', 389, Ljava_lang_Object_2_classLit);
function range_0(endExclusive){
  if (0 >= endExclusive) {
    return new IntStreamImpl$Empty;
  }
  return rangeClosed(endExclusive - 1);
}

function rangeClosed(endInclusive){
  var count, spliterator;
  if (0 > endInclusive) {
    return new IntStreamImpl$Empty;
  }
  count = endInclusive + 1;
  spliterator = new IntStream$5(count, endInclusive);
  return new IntStreamImpl(spliterator);
}

function $tryAdvance(this$static, action){
  if (this$static.next_0 <= this$static.val$endInclusive5) {
    action.accept(this$static.next_0++);
    return true;
  }
  return false;
}

function IntStream$5($anonymous0, val$endInclusive){
  this.val$startInclusive4 = 0;
  this.val$endInclusive5 = val$endInclusive;
  Spliterators$BaseSpliterator.call(this, $anonymous0, 17493);
  this.next_0 = this.val$startInclusive4;
}

defineClass(387, 386, {}, IntStream$5);
_.next_0 = 0;
_.val$endInclusive5 = 0;
_.val$startInclusive4 = 0;
var Ljava_util_stream_IntStream$5_2_classLit = createForClass('java.util.stream', 'IntStream/5', 387, Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
function $close(this$static){
  if (!this$static.root) {
    this$static.terminated = true;
    $runClosers(this$static);
  }
   else {
    this$static.root.close_0();
  }
}

function $runClosers(this$static){
  var e, i, size_0, suppressed, throwables;
  throwables = new ArrayList;
  $forEach_0(this$static.onClose, new TerminatableStream$lambda$0$Type(throwables));
  this$static.onClose.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
  if (throwables.array.length != 0) {
    e = (checkCriticalElementIndex(0, throwables.array.length) , throwables.array[0]);
    for (i = 1 , size_0 = throwables.array.length; i < size_0; ++i) {
      suppressed = (checkCriticalElementIndex(i, throwables.array.length) , throwables.array[i]);
      suppressed != e && $addSuppressed(e, suppressed);
    }
    if (instanceOf(e, 8)) {
      throw toJs(e);
    }
    if (instanceOf(e, 56)) {
      throw toJs(e);
    }
  }
}

function $terminate(this$static){
  if (!this$static.root) {
    $throwIfTerminated(this$static);
    this$static.terminated = true;
  }
   else {
    $terminate(this$static.root);
  }
}

function $throwIfTerminated(this$static){
  if (this$static.root) {
    $throwIfTerminated(this$static.root);
  }
   else if (this$static.terminated) {
    throw toJs(new IllegalStateException_0("Stream already terminated, can't be modified or used"));
  }
}

function TerminatableStream(previous){
  if (!previous) {
    this.root = null;
    this.onClose = new ArrayList;
  }
   else {
    this.root = previous;
    this.onClose = null;
  }
}

function lambda$0(throwables_0, runnable_1){
  var e;
  try {
    runnable_1.run();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      throwables_0.array[throwables_0.array.length] = e;
    }
     else 
      throw toJs($e0);
  }
}

defineClass(127, 1, {});
_.close_0 = function close_2(){
  $close(this);
}
;
_.terminated = false;
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 127, Ljava_lang_Object_2_classLit);
function $mapToObj(this$static, mapper){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new IntStreamImpl$MapToObjSpliterator(mapper, this$static.spliterator));
}

function IntStreamImpl(spliterator){
  TerminatableStream.call(this, null);
  this.spliterator = spliterator;
}

defineClass(410, 127, $intern_19, IntStreamImpl);
_.close_0 = function close_3(){
  $close(this);
}
;
_.boxed = function boxed(){
  return $mapToObj(this, new IntStreamImpl$3methodref$valueOf$Type);
}
;
var Ljava_util_stream_IntStreamImpl_2_classLit = createForClass('java.util.stream', 'IntStreamImpl', 410, Ljava_util_stream_TerminatableStream_2_classLit);
function IntStreamImpl$3methodref$valueOf$Type(){
}

defineClass(413, 1, {}, IntStreamImpl$3methodref$valueOf$Type);
var Ljava_util_stream_IntStreamImpl$3methodref$valueOf$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/3methodref$valueOf$Type', 413, Ljava_lang_Object_2_classLit);
function IntStreamImpl$Empty(){
  TerminatableStream.call(this, null);
}

defineClass(204, 127, $intern_19, IntStreamImpl$Empty);
_.close_0 = function close_4(){
  $close(this);
}
;
_.boxed = function boxed_0(){
  $throwIfTerminated(this);
  return new StreamImpl$Empty(this);
}
;
var Ljava_util_stream_IntStreamImpl$Empty_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/Empty', 204, Ljava_util_stream_TerminatableStream_2_classLit);
function IntStreamImpl$MapToObjSpliterator(map_0, original){
  Spliterators$AbstractSpliterator.call(this, original.sizeEstimate, original.characteristics & -6);
  checkCriticalNotNull(map_0);
  this.original = original;
}

defineClass(411, 205, {}, IntStreamImpl$MapToObjSpliterator);
_.tryAdvance = function tryAdvance_1(action){
  return $tryAdvance(this.original, new IntStreamImpl$MapToObjSpliterator$lambda$0$Type(action));
}
;
var Ljava_util_stream_IntStreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/MapToObjSpliterator', 411, Ljava_util_Spliterators$AbstractSpliterator_2_classLit);
function IntStreamImpl$MapToObjSpliterator$lambda$0$Type(action_1){
  this.action_1 = action_1;
}

defineClass(412, 1, {}, IntStreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept = function accept_1(arg0){
  this.action_1.accept_0(valueOf(arg0));
}
;
var Ljava_util_stream_IntStreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/MapToObjSpliterator/lambda$0$Type', 412, Ljava_lang_Object_2_classLit);
function $filter(this$static, predicate){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$FilterSpliterator(predicate, this$static.spliterator));
}

function $findFirst(this$static){
  var holder;
  $terminate(this$static);
  holder = new StreamImpl$ValueConsumer;
  if (this$static.spliterator.tryAdvance(holder)) {
    return $clinit_Optional() , new Optional(checkCriticalNotNull(holder.value_0));
  }
  return $clinit_Optional() , $clinit_Optional() , EMPTY_0;
}

function $forEach_1(this$static, action){
  $terminate(this$static);
  this$static.spliterator.forEachRemaining(action);
}

function $reduce(this$static, identity){
  var consumer;
  $terminate(this$static);
  consumer = new StreamImpl$ValueConsumer;
  consumer.value_0 = identity;
  this$static.spliterator.forEachRemaining(new StreamImpl$lambda$5$Type(consumer));
  return consumer.value_0;
}

function StreamImpl(prev, spliterator){
  TerminatableStream.call(this, prev);
  this.spliterator = spliterator;
}

function lambda$4(a_1, t_2){
  a_1.add_0(t_2);
  return a_1;
}

function lambda$5(consumer_0, item_2){
  $accept(consumer_0, lambda$4(consumer_0.value_0, item_2));
}

defineClass(64, 127, $intern_19, StreamImpl);
_.close_0 = function close_5(){
  $close(this);
}
;
_.collect_0 = function collect_1(collector){
  var lastArg;
  return $reduce(this, (lastArg = new ArrayList , lastArg));
}
;
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 64, Ljava_util_stream_TerminatableStream_2_classLit);
function StreamImpl$Empty(previous){
  TerminatableStream.call(this, previous);
}

defineClass(425, 127, $intern_19, StreamImpl$Empty);
_.close_0 = function close_6(){
  $close(this);
}
;
_.collect_0 = function collect_2(collector){
  $terminate(this);
  return new ArrayList;
}
;
var Ljava_util_stream_StreamImpl$Empty_2_classLit = createForClass('java.util.stream', 'StreamImpl/Empty', 425, Ljava_util_stream_TerminatableStream_2_classLit);
function $lambda$0(this$static, action_1, item_1){
  if (this$static.filter.test_0(item_1)) {
    this$static.found = true;
    action_1.accept_0(item_1);
  }
}

function StreamImpl$FilterSpliterator(filter, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & -65);
  checkCriticalNotNull(filter);
  this.filter = filter;
  this.original = original;
}

defineClass(426, 205, {}, StreamImpl$FilterSpliterator);
_.tryAdvance = function tryAdvance_2(action){
  this.found = false;
  while (!this.found && this.original.tryAdvance(new StreamImpl$FilterSpliterator$lambda$0$Type(this, action)))
  ;
  return this.found;
}
;
_.found = false;
var Ljava_util_stream_StreamImpl$FilterSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator', 426, Ljava_util_Spliterators$AbstractSpliterator_2_classLit);
function StreamImpl$FilterSpliterator$lambda$0$Type($$outer_0, action_1){
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}

defineClass(427, 1, {}, StreamImpl$FilterSpliterator$lambda$0$Type);
_.accept_0 = function accept_2(arg0){
  $lambda$0(this.$$outer_0, this.action_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator/lambda$0$Type', 427, Ljava_lang_Object_2_classLit);
function $accept(this$static, value_0){
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer(){
}

defineClass(212, 1, {}, StreamImpl$ValueConsumer);
_.accept_0 = function accept_3(value_0){
  $accept(this, value_0);
}
;
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 212, Ljava_lang_Object_2_classLit);
function StreamImpl$lambda$5$Type(consumer_0){
  this.consumer_0 = consumer_0;
}

defineClass(428, 1, {}, StreamImpl$lambda$5$Type);
_.accept_0 = function accept_4(arg0){
  lambda$5(this.consumer_0, arg0);
}
;
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 428, Ljava_lang_Object_2_classLit);
function TerminatableStream$lambda$0$Type(throwables_0){
  this.throwables_0 = throwables_0;
}

defineClass(414, 1, {}, TerminatableStream$lambda$0$Type);
_.accept_0 = function accept_5(arg0){
  lambda$0(this.throwables_0, arg0);
}
;
var Ljava_util_stream_TerminatableStream$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'TerminatableStream/lambda$0$Type', 414, Ljava_lang_Object_2_classLit);
function applySplice(array, index_0, deleteCount, arrayToAdd){
  Array.prototype.splice.apply(array, [index_0, deleteCount].concat(arrayToAdd));
}

function clone(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  return stampJavaTypeInfo_0(result, array);
}

function copy_0(src_0, srcOfs, dest, destOfs, len, overwrite){
  var batchEnd, batchStart, end;
  if (maskUndefined(src_0) === maskUndefined(dest)) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = batchStart + 10000 < end?batchStart + 10000:end;
    len = batchEnd - batchStart;
    applySplice(dest, destOfs, overwrite?len:0, src_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy_0(values, 0, array, index_0, values.length, false);
}

function removeFrom(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function now_2(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function checkCriticalArgument(expression){
  if (!expression) {
    throw toJs(new IllegalArgumentException);
  }
}

function checkCriticalArgument_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

function checkCriticalArraySize(size_0){
  if (size_0 < 0) {
    throw toJs(new NegativeArraySizeException('Negative array size: ' + size_0));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw toJs(new NullPointerException_0(errorMessage));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException_0("Can't overwrite cause"));
  }
}

function checkCriticalStringBounds(end, length_0){
  if (end > length_0 || end < 0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

function checkNotNull_0(reference){
  checkCriticalNotNull(reference);
  return reference;
}

function compare_4(a, b){
  return a == b?0:a < b?-1:1;
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt_0(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (!(result === undefined)) {
    return result;
  }
  result = back_0[key];
  hashCode = result === undefined?compute(str):result;
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
defineClass(526, 1, {});
var Lplayn_core_Assets_2_classLit = createForClass('playn.core', 'Assets', 526, Ljava_lang_Object_2_classLit);
defineClass(528, 1, {});
var Lplayn_core_Audio_2_classLit = createForClass('playn.core', 'Audio', 528, Ljava_lang_Object_2_classLit);
var Lreact_Closeable_2_classLit = createForInterface();
function $toTexture(this$static, config){
  return $createTexture_0(this$static.image, config);
}

function Canvas_0(image){
  this.image = image;
  this.width_0 = $invScaled(image.scale_0, image.pixelWidth);
  this.height_0 = $invScaled(image.scale_0, image.pixelHeight);
  if (this.width_0 <= 0 || this.height_0 <= 0)
    throw toJs(new IllegalArgumentException_0('Canvas must be > 0 in width and height: ' + this.width_0 + 'x' + this.height_0));
}

defineClass(423, 1, $intern_29);
_.close_0 = function close_7(){
}
;
_.height_0 = 0;
_.width_0 = 0;
var Lplayn_core_Canvas_2_classLit = createForClass('playn.core', 'Canvas', 423, Ljava_lang_Object_2_classLit);
function $clinit_Canvas$LineCap(){
  $clinit_Canvas$LineCap = emptyMethod;
  BUTT = new Canvas$LineCap('BUTT', 0);
  ROUND = new Canvas$LineCap('ROUND', 1);
  SQUARE = new Canvas$LineCap('SQUARE', 2);
}

function Canvas$LineCap(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_Canvas$LineCap();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Canvas$LineCap_2_classLit, 1), $intern_1, 99, 0, [BUTT, ROUND, SQUARE]);
}

defineClass(99, 6, {3:1, 7:1, 6:1, 99:1}, Canvas$LineCap);
var BUTT, ROUND, SQUARE;
var Lplayn_core_Canvas$LineCap_2_classLit = createForEnum('playn.core', 'Canvas/LineCap', 99, Ljava_lang_Enum_2_classLit, values_7);
function $clinit_Canvas$LineJoin(){
  $clinit_Canvas$LineJoin = emptyMethod;
  BEVEL = new Canvas$LineJoin('BEVEL', 0);
  MITER = new Canvas$LineJoin('MITER', 1);
  ROUND_0 = new Canvas$LineJoin('ROUND', 2);
}

function Canvas$LineJoin(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_Canvas$LineJoin();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Canvas$LineJoin_2_classLit, 1), $intern_1, 100, 0, [BEVEL, MITER, ROUND_0]);
}

defineClass(100, 6, {3:1, 7:1, 6:1, 100:1}, Canvas$LineJoin);
var BEVEL, MITER, ROUND_0;
var Lplayn_core_Canvas$LineJoin_2_classLit = createForEnum('playn.core', 'Canvas/LineJoin', 100, Ljava_lang_Enum_2_classLit, values_8);
function Clock(){
}

defineClass(149, 1, {149:1}, Clock);
_.dt = 0;
_.tick = 0;
var Lplayn_core_Clock_2_classLit = createForClass('playn.core', 'Clock', 149, Ljava_lang_Object_2_classLit);
defineClass(34, 1, {34:1});
var Lplayn_core_Event_2_classLit = createForClass('playn.core', 'Event', 34, Ljava_lang_Object_2_classLit);
function $setFlag(this$static, flag){
  this$static.flags |= flag;
}

function Event$Input(flags, time){
  this.flags = flags;
  this.time = time;
}

function modifierFlags(altP, ctrlP, metaP, shiftP){
  var flags;
  flags = 0;
  altP && (flags |= 2);
  ctrlP && (flags |= 4);
  metaP && (flags |= 16);
  shiftP && (flags |= 8);
  return flags;
}

defineClass(32, 34, $intern_30);
_.addFields = function addFields(builder){
  $append_4($append_8($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
}
;
_.name_1 = function name_2(){
  return 'Input';
}
;
_.toString_0 = function toString_38(){
  var builder;
  builder = $append_1(new StringBuilder_1(this.name_1()), 91);
  this.addFields(builder);
  return (builder.string += ']' , builder).string;
}
;
_.flags = 0;
_.time = 0;
var Lplayn_core_Event$Input_2_classLit = createForClass('playn.core', 'Event/Input', 32, Lplayn_core_Event_2_classLit);
function Event$XY(flags, time, x_0, y_0){
  Event$Input.call(this, flags, time);
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(46, 32, {34:1, 32:1, 46:1, 45:1});
_.addFields = function addFields_0(builder){
  $append_4($append_8($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_8($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
}
;
_.name_1 = function name_3(){
  return 'XY';
}
;
_.x_1 = function x_2(){
  return this.x_0;
}
;
_.y_1 = function y_2(){
  return this.y_0;
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lplayn_core_Event$XY_2_classLit = createForClass('playn.core', 'Event/XY', 46, Lplayn_core_Event$Input_2_classLit);
defineClass(520, 1, {});
var Lplayn_core_Exec_2_classLit = createForClass('playn.core', 'Exec', 520, Ljava_lang_Object_2_classLit);
function $dispatch(this$static){
  var action, e, ii, ll;
  $addAll_0(this$static.running, this$static.pending);
  this$static.pending.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
  for (ii = 0 , ll = this$static.running.array.length; ii < ll; ii++) {
    action = $get_7(this$static.running, ii);
    try {
      action.run();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        $reportError(this$static.plat, 'invokeLater Runnable failed: ' + action, e);
      }
       else 
        throw toJs($e0);
    }
  }
  this$static.running.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
}

defineClass(238, 520, {});
var Lplayn_core_Exec$Default_2_classLit = createForClass('playn.core', 'Exec/Default', 238, Lplayn_core_Exec_2_classLit);
defineClass(521, 1, $intern_31);
_.onChange = function onChange(value_0, oldValue){
  this.onEmit(value_0);
}
;
var Lreact_Slot_2_classLit = createForClass('react', 'Slot', 521, Ljava_lang_Object_2_classLit);
function Exec$Default$1(this$1){
  this.this$11 = this$1;
}

defineClass(242, 521, $intern_31, Exec$Default$1);
_.onEmit = function onEmit(unused){
  $dispatch(this.this$11);
}
;
var Lplayn_core_Exec$Default$1_2_classLit = createForClass('playn.core', 'Exec/Default/1', 242, Lreact_Slot_2_classLit);
function Font(size_0){
  Font_0.call(this, ($clinit_Font$Style() , PLAIN), size_0);
}

function Font_0(style, size_0){
  this.name_0 = 'Helvetica';
  this.style_0 = style;
  this.size_0 = size_0;
}

defineClass(107, 1, {107:1}, Font);
_.equals_0 = function equals_25(other){
  var ofont;
  if (!instanceOf(other, 107))
    return false;
  ofont = other;
  return $equals_0(this.name_0, ofont.name_0) && this.style_0 == ofont.style_0 && this.size_0 == ofont.size_0;
}
;
_.hashCode_0 = function hashCode_27(){
  return getHashCode_0(this.name_0) ^ getHashCode(this.style_0) ^ round_int(this.size_0);
}
;
_.toString_0 = function toString_39(){
  return this.name_0 + ' ' + this.style_0 + ' ' + this.size_0 + 'pt';
}
;
_.size_0 = 0;
var Lplayn_core_Font_2_classLit = createForClass('playn.core', 'Font', 107, Ljava_lang_Object_2_classLit);
function $clinit_Font$Style(){
  $clinit_Font$Style = emptyMethod;
  PLAIN = new Font$Style('PLAIN', 0);
  BOLD = new Font$Style('BOLD', 1);
  ITALIC = new Font$Style('ITALIC', 2);
  BOLD_ITALIC = new Font$Style('BOLD_ITALIC', 3);
}

function Font$Style(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_Font$Style();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Font$Style_2_classLit, 1), $intern_1, 88, 0, [PLAIN, BOLD, ITALIC, BOLD_ITALIC]);
}

defineClass(88, 6, {3:1, 7:1, 6:1, 88:1}, Font$Style);
var BOLD, BOLD_ITALIC, ITALIC, PLAIN;
var Lplayn_core_Font$Style_2_classLit = createForEnum('playn.core', 'Font/Style', 88, Ljava_lang_Enum_2_classLit, values_9);
function $checkError(this$static){
  var reported;
  reported = 0;
  if (this$static.checkErrors) {
    while (this$static.gl.getError() != 0) {
      reported += 1;
      $clinit_System();
    }
  }
  return reported > 0;
}

function $glDeleteFramebuffer(this$static){
  $setIntBuffer(this$static.bufs, 0);
  $glDeleteFramebuffers(this$static, this$static.bufs.intBuffer);
}

function $glDeleteTexture(this$static, id_0){
  $setIntBuffer(this$static.bufs, id_0);
  $glDeleteTextures(this$static, this$static.bufs.intBuffer);
}

function $glGenTexture(this$static){
  $resizeIntBuffer(this$static.bufs);
  $glGenTextures(this$static, this$static.bufs.intBuffer);
  return this$static.bufs.intBuffer.intArray[0];
}

function $glUniform4fv(this$static, location_0, count, v){
  $setFloatBuffer(this$static.bufs, v, 4 * count);
  $glUniform4fv_0(this$static, location_0, count, this$static.bufs.floatBuffer);
}

function GL20(buffers, checkErrors){
  this.bufs = buffers;
  this.checkErrors = checkErrors;
}

defineClass(348, 1, {});
_.checkErrors = false;
var Lplayn_core_GL20_2_classLit = createForClass('playn.core', 'GL20', 348, Ljava_lang_Object_2_classLit);
function $newCap(cap, length_0){
  var newLength;
  newLength = cap << 1;
  while (newLength < length_0) {
    newLength <<= 1;
  }
  return newLength;
}

function $resizeIntBuffer(this$static){
  var cap;
  cap = this$static.intBuffer.capacity;
  cap < 1?(this$static.intBuffer = $asIntBuffer($createByteBuffer($newCap(cap, 1) * 4))):$position(this$static.intBuffer);
  $limit(this$static.intBuffer, 1);
}

function $setFloatBuffer(this$static, source, length_0){
  var cap;
  cap = this$static.floatBuffer.capacity;
  cap < length_0?(this$static.floatBuffer = new FloatBuffer($slice($createByteBuffer($newCap(cap, length_0) * 4)))):$position(this$static.floatBuffer);
  $limit(this$static.floatBuffer, length_0);
  $put_0(this$static.floatBuffer, source, length_0);
  $rewind(this$static.floatBuffer);
}

function $setIntBuffer(this$static, n){
  $position(this$static.intBuffer);
  $put_1(this$static.intBuffer, n);
  $rewind(this$static.intBuffer);
}

function $setShortBuffer(this$static, source, length_0){
  var cap;
  cap = this$static.shortBuffer.capacity;
  cap < length_0?(this$static.shortBuffer = $asShortBuffer($createByteBuffer($newCap(cap, length_0) * 2))):$position(this$static.shortBuffer);
  $limit(this$static.shortBuffer, length_0);
  $put_2(this$static.shortBuffer, source, length_0);
  $rewind(this$static.shortBuffer);
}

defineClass(350, 1, {});
var Lplayn_core_GL20$Buffers_2_classLit = createForClass('playn.core', 'GL20/Buffers', 350, Ljava_lang_Object_2_classLit);
function $begin(this$static){
  if (this$static.begun)
    throw toJs(new IllegalStateException_0($getSimpleName(this$static.___clazz) + ' mismatched begin()'));
  this$static.begun = true;
}

function $close_0(this$static){
  if (this$static.begun)
    throw toJs(new IllegalStateException_0($getSimpleName(this$static.___clazz) + ' close() without end()'));
}

function $end(this$static){
  if (!this$static.begun)
    throw toJs(new IllegalStateException_0($getSimpleName(this$static.___clazz) + ' mismatched end()'));
  try {
    this$static.flush();
  }
   finally {
    this$static.begun = false;
  }
}

function $flush(this$static){
  if (!this$static.begun)
    throw toJs(new IllegalStateException_0($getSimpleName(this$static.___clazz) + ' flush() without begin()'));
}

defineClass(535, 1, $intern_29);
_.begin = function begin(fbufWidth, fbufHeight, flip){
  $begin(this);
}
;
_.close_0 = function close_8(){
  $close_0(this);
}
;
_.flush = function flush_1(){
  $flush(this);
}
;
_.begun = false;
var Lplayn_core_GLBatch_2_classLit = createForClass('playn.core', 'GLBatch', 535, Ljava_lang_Object_2_classLit);
function $activate(this$static){
  $glUseProgram(this$static.gl, this$static.id_0);
}

function $close_1(this$static){
  $glDeleteShader(this$static.gl, this$static.vertexShader);
  $glDeleteShader(this$static.gl, this$static.fragmentShader);
  $glDeleteProgram(this$static.gl, this$static.id_0);
}

function $compileShader_0(this$static, type_0, shaderSource){
  var compiled, log_0, shader;
  shader = $glCreateShader(this$static.gl, type_0);
  if (shader == 0)
    throw toJs(new RuntimeException_0('Failed to create shader (' + type_0 + '): ' + this$static.gl.gl.getError()));
  $glShaderSource(this$static.gl, shader, shaderSource);
  $glCompileShader(this$static.gl, shader);
  compiled = initUnidimensionalArray(I_classLit, $intern_22, 22, 1, 15, 1);
  $glGetShaderiv(this$static.gl, shader, compiled);
  if (compiled[0] == 0) {
    log_0 = $glGetShaderInfoLog(this$static.gl, shader);
    $glDeleteShader(this$static.gl, shader);
    throw toJs(new RuntimeException_0('Failed to compile shader (' + type_0 + '): ' + log_0));
  }
  return shader;
}

function $getAttribLocation_0(this$static, name_0){
  var loc;
  loc = $glGetAttribLocation(this$static.gl, this$static.id_0, name_0);
  return loc;
}

function $getUniformLocation_0(this$static, name_0){
  var loc;
  loc = $glGetUniformLocation(this$static.gl, this$static.id_0, name_0);
  return loc;
}

function GLProgram(gl, vertexSource, fragmentSource){
  var fragmentShader, id_0, linkStatus, log_0, prog, program, sh, sh0, vertexShader;
  this.gl = gl;
  id_0 = 0;
  vertexShader = 0;
  fragmentShader = 0;
  try {
    id_0 = (program = gl.gl.createProgram() , $add_4(gl.programs, program));
    if (id_0 == 0)
      throw toJs(new RuntimeException_0('Failed to create program: ' + gl.gl.getError()));
    $checkError(gl);
    vertexShader = $compileShader_0(this, 35633, vertexSource);
    $glAttachShader(gl, id_0, vertexShader);
    $checkError(gl);
    fragmentShader = $compileShader_0(this, 35632, fragmentSource);
    $glAttachShader(gl, id_0, fragmentShader);
    $checkError(gl);
    $linkProgram(gl.gl, gl.programs[id_0]);
    linkStatus = initUnidimensionalArray(I_classLit, $intern_22, 22, 1, 15, 1);
    linkStatus[0] = $getProgramParameterb(gl.gl, gl.programs[id_0], 35714)?1:0;
    if (linkStatus[0] == 0) {
      log_0 = $getProgramInfoLog(gl.gl, gl.programs[id_0]);
      prog = $remove_5(gl.programs, id_0);
      $deleteProgram(gl.gl, prog);
      throw toJs(new RuntimeException_0('Failed to link program: ' + log_0));
    }
    this.id_0 = id_0;
    this.vertexShader = vertexShader;
    this.fragmentShader = fragmentShader;
    id_0 = vertexShader = fragmentShader = 0;
  }
   finally {
    id_0 != 0 && (prog = $remove_5(gl.programs, id_0) , $deleteProgram(gl.gl, prog));
    vertexShader != 0 && (sh0 = $remove_5(gl.shaders, vertexShader) , $deleteShader(gl.gl, sh0));
    fragmentShader != 0 && (sh = $remove_5(gl.shaders, fragmentShader) , $deleteShader(gl.gl, sh));
  }
}

defineClass(207, 1, $intern_29, GLProgram);
_.close_0 = function close_9(){
  $close_1(this);
}
;
_.fragmentShader = 0;
_.id_0 = 0;
_.vertexShader = 0;
var Lplayn_core_GLProgram_2_classLit = createForClass('playn.core', 'GLProgram', 207, Ljava_lang_Object_2_classLit);
function $onFrame(this$static){
  var nextUpdate, paintTick, updateDt, updateRate, updateTick, updates;
  nextUpdate = this$static.nextUpdate;
  updateTick = $tick(this$static.plat);
  if (updateTick >= nextUpdate) {
    updateRate = this$static.updateRate;
    updates = 0;
    while (updateTick >= nextUpdate) {
      nextUpdate += updateRate;
      ++updates;
    }
    this$static.nextUpdate = nextUpdate;
    updateDt = updates * updateRate;
    this$static.updateClock.tick += updateDt;
    this$static.updateClock.dt = updateDt;
    $update(this$static, this$static.updateClock);
  }
  paintTick = $tick(this$static.plat);
  this$static.paintClock.dt = paintTick - this$static.paintClock.tick;
  this$static.paintClock.tick = paintTick;
  $emit(this$static.paint, this$static.paintClock);
}

function $update(this$static, clock){
  $emit(this$static.update, clock);
}

defineClass(251, 1, {});
_.nextUpdate = 0;
_.updateRate = 0;
var Lplayn_core_Game_2_classLit = createForClass('playn.core', 'Game', 251, Ljava_lang_Object_2_classLit);
function Game$1(this$0){
  this.this$01 = this$0;
}

defineClass(256, 521, $intern_31, Game$1);
_.onEmit = function onEmit_0(plat){
  var lastArg;
  $onFrame((lastArg = this , plat , lastArg).this$01);
}
;
var Lplayn_core_Game$1_2_classLit = createForClass('playn.core', 'Game/1', 256, Lreact_Slot_2_classLit);
function $colorTex(this$static){
  var canvas;
  if (!this$static.colorTex) {
    canvas = $createCanvasImpl(this$static, this$static.scale_0, $scaledCeil(this$static.scale_0, 1), $scaledCeil(this$static.scale_0, 1));
    $fillRect_1(($setFillStyleWeb(canvas.ctx, cssColorString(-1)) , canvas), canvas.width_0, canvas.height_0);
    this$static.colorTex = $toTexture(canvas, ($clinit_Texture$Config() , UNMANAGED));
  }
  return this$static.colorTex;
}

function $createCanvas(this$static, width_0, height){
  return $createCanvasImpl(this$static, this$static.scale_0, $scaledCeil(this$static.scale_0, width_0), $scaledCeil(this$static.scale_0, height));
}

function $createCanvas_0(this$static, size_0){
  return $createCanvas(this$static, size_0.width_0, size_0.height_0);
}

function $createTexture(this$static, config){
  var id_0, minFilter;
  id_0 = $glGenTexture(this$static.gl);
  $glBindTexture(this$static.gl, id_0);
  $glTexParameteri(this$static.gl, 10240, config.magFilter);
  minFilter = mipmapify(config.minFilter, config.mipmaps);
  $glTexParameteri(this$static.gl, 10241, minFilter);
  $glTexParameteri(this$static.gl, 10242, config.repeatX?10497:33071);
  $glTexParameteri(this$static.gl, 10243, config.repeatY?10497:33071);
  return id_0;
}

function $viewportChanged(this$static, pixelWidth, pixelHeight){
  this$static.viewPixelWidth = pixelWidth;
  this$static.viewPixelHeight = pixelHeight;
  this$static.viewSizeM.width_0 = $invScaled(this$static.scale_0, pixelWidth);
  this$static.viewSizeM.height_0 = $invScaled(this$static.scale_0, pixelHeight);
  $info_0(this$static.plat.log_0, 'viewPortChanged ' + pixelWidth + 'x' + pixelHeight + ' / ' + this$static.scale_0.factor + ' -> ' + this$static.viewSize);
}

function Graphics(plat, gl, scale){
  this.viewSizeM = new Dimension;
  this.orientDetailM = ($clinit_AbstractValue() , new Value(($clinit_Graphics$OrientationDetail() , UNKNOWN)));
  this.viewSize = this.viewSizeM;
  this.deviceOrient = $map(this.orientDetailM, new Graphics$1);
  this.defaultRenderTarget = new Graphics$2(this, this);
  this.plat = plat;
  this.gl = gl;
  this.scale_0 = scale;
}

function mipmapify(filter, mipmaps){
  if (!mipmaps)
    return filter;
  switch (filter) {
    case 9728:
      return 9984;
    case 9729:
      return 9985;
    default:return filter;
  }
}

defineClass(263, 1, {});
_.viewPixelHeight = 0;
_.viewPixelWidth = 0;
var Lplayn_core_Graphics_2_classLit = createForClass('playn.core', 'Graphics', 263, Ljava_lang_Object_2_classLit);
function $apply(detail){
  switch (detail.ordinal) {
    case 4:
    case 3:
      return $clinit_Graphics$Orientation() , LANDSCAPE;
    default:return $clinit_Graphics$Orientation() , PORTRAIT;
  }
}

function Graphics$1(){
}

defineClass(265, 1, {}, Graphics$1);
var Lplayn_core_Graphics$1_2_classLit = createForClass('playn.core', 'Graphics/1', 265, Ljava_lang_Object_2_classLit);
function $bind(this$static){
  $glBindFramebuffer(this$static.gfx.gl);
  $glViewport(this$static.gfx.gl, this$static.this$01.viewPixelWidth, this$static.this$01.viewPixelHeight);
}

defineClass(266, 1, $intern_29);
_.close_0 = function close_10(){
  if (!this.disposed) {
    this.disposed = true;
    $glDeleteFramebuffer(this.gfx.gl);
  }
}
;
_.toString_0 = function toString_40(){
  return '[id=0, size=' + this.this$01.viewPixelWidth + 'x' + this.this$01.viewPixelHeight + ' @ ' + this.this$01.scale_0.factor + 'x' + this.this$01.scale_0.factor + ', flip=' + true + ']';
}
;
_.disposed = false;
var Lplayn_core_RenderTarget_2_classLit = createForClass('playn.core', 'RenderTarget', 266, Ljava_lang_Object_2_classLit);
function Graphics$2(this$0, $anonymous0){
  this.this$01 = this$0;
  this.gfx = $anonymous0;
}

defineClass(267, 266, $intern_29, Graphics$2);
_.close_0 = function close_11(){
}
;
var Lplayn_core_Graphics$2_2_classLit = createForClass('playn.core', 'Graphics/2', 267, Lplayn_core_RenderTarget_2_classLit);
function $clinit_Graphics$Orientation(){
  $clinit_Graphics$Orientation = emptyMethod;
  PORTRAIT = new Graphics$Orientation('PORTRAIT', 0);
  LANDSCAPE = new Graphics$Orientation('LANDSCAPE', 1);
}

function Graphics$Orientation(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_10(){
  $clinit_Graphics$Orientation();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Graphics$Orientation_2_classLit, 1), $intern_1, 114, 0, [PORTRAIT, LANDSCAPE]);
}

defineClass(114, 6, {3:1, 7:1, 6:1, 114:1}, Graphics$Orientation);
var LANDSCAPE, PORTRAIT;
var Lplayn_core_Graphics$Orientation_2_classLit = createForEnum('playn.core', 'Graphics/Orientation', 114, Ljava_lang_Enum_2_classLit, values_10);
function $clinit_Graphics$OrientationDetail(){
  $clinit_Graphics$OrientationDetail = emptyMethod;
  UNKNOWN = new Graphics$OrientationDetail('UNKNOWN', 0);
  PORTRAIT_0 = new Graphics$OrientationDetail('PORTRAIT', 1);
  PORTRAIT_UPSIDE_DOWN = new Graphics$OrientationDetail('PORTRAIT_UPSIDE_DOWN', 2);
  LANDSCAPE_LEFT = new Graphics$OrientationDetail('LANDSCAPE_LEFT', 3);
  LANDSCAPE_RIGHT = new Graphics$OrientationDetail('LANDSCAPE_RIGHT', 4);
  FACE_UP = new Graphics$OrientationDetail('FACE_UP', 5);
  FACE_DOWN = new Graphics$OrientationDetail('FACE_DOWN', 6);
}

function Graphics$OrientationDetail(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_Graphics$OrientationDetail();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Graphics$OrientationDetail_2_classLit, 1), $intern_1, 50, 0, [UNKNOWN, PORTRAIT_0, PORTRAIT_UPSIDE_DOWN, LANDSCAPE_LEFT, LANDSCAPE_RIGHT, FACE_UP, FACE_DOWN]);
}

defineClass(50, 6, {3:1, 7:1, 6:1, 50:1}, Graphics$OrientationDetail);
var FACE_DOWN, FACE_UP, LANDSCAPE_LEFT, LANDSCAPE_RIGHT, PORTRAIT_0, PORTRAIT_UPSIDE_DOWN, UNKNOWN;
var Lplayn_core_Graphics$OrientationDetail_2_classLit = createForEnum('playn.core', 'Graphics/OrientationDetail', 50, Ljava_lang_Enum_2_classLit, values_11);
defineClass(537, 1, {});
var Lplayn_core_TileSource_2_classLit = createForClass('playn.core', 'TileSource', 537, Ljava_lang_Object_2_classLit);
function $$init_1(this$static){
  this$static.texconf = ($clinit_Texture$Config() , DEFAULT);
}

function $createTexture_0(this$static, config){
  var cur, tex, texHeight, texWidth;
  cur = this$static.state.result();
  if (!(!!cur && cur.isSuccess()))
    throw toJs(new IllegalStateException_0('Cannot create texture from unready image: ' + this$static));
  texWidth = $toTexWidth(config, this$static.pixelWidth);
  texHeight = $toTexHeight(config, this$static.pixelHeight);
  if (texWidth <= 0 || texHeight <= 0)
    throw toJs(new IllegalArgumentException_0('Invalid texture size: ' + texWidth + 'x' + texHeight + ' from: ' + this$static));
  tex = new Texture(this$static.gfx, $createTexture(this$static.gfx, config), config, texWidth, texHeight, this$static.scale_0, $invScaled(this$static.scale_0, this$static.pixelWidth), $invScaled(this$static.scale_0, this$static.pixelHeight));
  $update_0(tex, this$static);
  return tex;
}

function $texture(this$static){
  (!this$static.texture || this$static.texture.disposed) && (this$static.texture = $createTexture_0(this$static, this$static.texconf));
  return this$static.texture;
}

defineClass(103, 537, {103:1});
var Lplayn_core_Image_2_classLit = createForClass('playn.core', 'Image', 103, Lplayn_core_TileSource_2_classLit);
function $apply_0(this$static, image){
  return $texture(this$static.this$01);
}

function Image$3(this$0){
  this.this$01 = this$0;
}

defineClass(409, 1, {}, Image$3);
var Lplayn_core_Image$3_2_classLit = createForClass('playn.core', 'Image/3', 409, Ljava_lang_Object_2_classLit);
function $fail(this$static, error){
  this$static.pixelWidth == 0 && (this$static.pixelWidth = 50);
  this$static.pixelHeight == 0 && (this$static.pixelHeight = 50);
  $setBitmap(this$static, $createErrorBitmap(this$static.pixelWidth, this$static.pixelHeight));
  $complete(this$static.state, new Try$Failure(error));
}

function $succeed(this$static, data_0){
  this$static.scale_0 = data_0.scale_0;
  this$static.pixelWidth = data_0.pixelWidth;
  this$static.pixelHeight = data_0.pixelHeight;
  $setBitmap(this$static, data_0.bitmap);
  $complete(this$static.state, new Try$Success(this$static));
}

function ImageImpl(gfx, scale, pixelWidth, pixelHeight, bitmap){
  $$init_1(this);
  this.gfx = gfx;
  this.state = ($clinit_Reactor() , new RFuture$1(new Try$Success(this)));
  if (pixelWidth == 0 || pixelHeight == 0)
    throw toJs(new IllegalArgumentException_0('Invalid size for ready image: ' + pixelWidth + 'x' + pixelHeight + ' bitmap: ' + bitmap));
  this.source = '<canvas>';
  this.scale_0 = scale;
  this.pixelWidth = pixelWidth;
  this.pixelHeight = pixelHeight;
  this.img = bitmap;
}

function ImageImpl_0(gfx, state, preScale, preWidth, preHeight, source){
  $$init_1(this);
  this.gfx = gfx;
  this.state = state;
  this.source = source;
  this.scale_0 = preScale;
  this.pixelWidth = preWidth;
  this.pixelHeight = preHeight;
}

defineClass(208, 103, {103:1});
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_ImageImpl_2_classLit = createForClass('playn.core', 'ImageImpl', 208, Lplayn_core_Image_2_classLit);
function ImageImpl$Data(scale, bitmap, pixelWidth, pixelHeight){
  this.bitmap = bitmap;
  this.scale_0 = scale;
  this.pixelWidth = pixelWidth;
  this.pixelHeight = pixelHeight;
}

defineClass(419, 1, {}, ImageImpl$Data);
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_ImageImpl$Data_2_classLit = createForClass('playn.core', 'ImageImpl/Data', 419, Ljava_lang_Object_2_classLit);
defineClass(271, 1, {});
_.keyboardEnabled = true;
_.mouseEnabled = true;
_.touchEnabled = true;
var Lplayn_core_Input_2_classLit = createForClass('playn.core', 'Input', 271, Ljava_lang_Object_2_classLit);
function $clinit_Key(){
  $clinit_Key = emptyMethod;
  A = new Key('A', 0);
  B = new Key('B', 1);
  C = new Key('C', 2);
  D = new Key('D', 3);
  E_0 = new Key('E', 4);
  F_0 = new Key('F', 5);
  G = new Key('G', 6);
  H = new Key('H', 7);
  I = new Key('I', 8);
  J = new Key('J', 9);
  K = new Key('K', 10);
  L = new Key('L', 11);
  M = new Key('M', 12);
  N = new Key('N', 13);
  O = new Key('O', 14);
  P = new Key('P', 15);
  Q = new Key('Q', 16);
  R = new Key('R', 17);
  S = new Key('S', 18);
  T = new Key('T', 19);
  U = new Key('U', 20);
  V = new Key('V', 21);
  W = new Key('W', 22);
  X = new Key('X', 23);
  Y = new Key('Y', 24);
  Z = new Key('Z', 25);
  K0 = new Key('K0', 26);
  K1 = new Key('K1', 27);
  K2 = new Key('K2', 28);
  K3 = new Key('K3', 29);
  K4 = new Key('K4', 30);
  K5 = new Key('K5', 31);
  K6 = new Key('K6', 32);
  K7 = new Key('K7', 33);
  K8 = new Key('K8', 34);
  K9 = new Key('K9', 35);
  NP0 = new Key('NP0', 36);
  NP1 = new Key('NP1', 37);
  NP2 = new Key('NP2', 38);
  NP3 = new Key('NP3', 39);
  NP4 = new Key('NP4', 40);
  NP5 = new Key('NP5', 41);
  NP6 = new Key('NP6', 42);
  NP7 = new Key('NP7', 43);
  NP8 = new Key('NP8', 44);
  NP9 = new Key('NP9', 45);
  NP_ADD = new Key('NP_ADD', 46);
  NP_DECIMAL = new Key('NP_DECIMAL', 47);
  NP_DELETE = new Key('NP_DELETE', 48);
  NP_DIVIDE = new Key('NP_DIVIDE', 49);
  NP_MULTIPLY = new Key('NP_MULTIPLY', 50);
  NP_NUM_LOCK = new Key('NP_NUM_LOCK', 51);
  NP_SUBTRACT = new Key('NP_SUBTRACT', 52);
  NP_DOWN = new Key('NP_DOWN', 53);
  NP_LEFT = new Key('NP_LEFT', 54);
  NP_RIGHT = new Key('NP_RIGHT', 55);
  NP_UP = new Key('NP_UP', 56);
  F1 = new Key('F1', 57);
  F2 = new Key('F2', 58);
  F3 = new Key('F3', 59);
  F4 = new Key('F4', 60);
  F5 = new Key('F5', 61);
  F6 = new Key('F6', 62);
  F7 = new Key('F7', 63);
  F8 = new Key('F8', 64);
  F9 = new Key('F9', 65);
  F10 = new Key('F10', 66);
  F11 = new Key('F11', 67);
  F12 = new Key('F12', 68);
  AMPERSAND = new Key('AMPERSAND', 69);
  ASTERISK = new Key('ASTERISK', 70);
  AT = new Key('AT', 71);
  BACKQUOTE = new Key('BACKQUOTE', 72);
  BACKSLASH = new Key('BACKSLASH', 73);
  BANG = new Key('BANG', 74);
  CIRCUMFLEX = new Key('CIRCUMFLEX', 75);
  COLON = new Key('COLON', 76);
  COMMA = new Key('COMMA', 77);
  DOLLAR = new Key('DOLLAR', 78);
  DOUBLE_QUOTE = new Key('DOUBLE_QUOTE', 79);
  EQUALS = new Key('EQUALS', 80);
  GREATER = new Key('GREATER', 81);
  HASH = new Key('HASH', 82);
  LEFT_BRACE = new Key('LEFT_BRACE', 83);
  LEFT_BRACKET = new Key('LEFT_BRACKET', 84);
  LEFT_PAREN = new Key('LEFT_PAREN', 85);
  LESS = new Key('LESS', 86);
  MINUS = new Key('MINUS', 87);
  MULTIPLY = new Key('MULTIPLY', 88);
  PERCENT = new Key('PERCENT', 89);
  PERIOD = new Key('PERIOD', 90);
  PLUS = new Key('PLUS', 91);
  QUOTE = new Key('QUOTE', 92);
  RIGHT_BRACE = new Key('RIGHT_BRACE', 93);
  RIGHT_BRACKET = new Key('RIGHT_BRACKET', 94);
  RIGHT_PAREN = new Key('RIGHT_PAREN', 95);
  SEMICOLON = new Key('SEMICOLON', 96);
  SLASH = new Key('SLASH', 97);
  SPACE = new Key('SPACE', 98);
  TILDE = new Key('TILDE', 99);
  QUESTION_MARK = new Key('QUESTION_MARK', 100);
  UNDERSCORE = new Key('UNDERSCORE', 101);
  VERTICAL_BAR = new Key('VERTICAL_BAR', 102);
  ALT = new Key('ALT', 103);
  CONTROL = new Key('CONTROL', 104);
  CAPS_LOCK = new Key('CAPS_LOCK', 105);
  SHIFT = new Key('SHIFT', 106);
  META = new Key('META', 107);
  DOWN = new Key('DOWN', 108);
  END = new Key('END', 109);
  HOME = new Key('HOME', 110);
  LEFT = new Key('LEFT', 111);
  PAGE_UP = new Key('PAGE_UP', 112);
  PAGE_DOWN = new Key('PAGE_DOWN', 113);
  RIGHT = new Key('RIGHT', 114);
  UP = new Key('UP', 115);
  BACKSPACE = new Key('BACKSPACE', 116);
  DELETE = new Key('DELETE', 117);
  ENTER = new Key('ENTER', 118);
  INSERT = new Key('INSERT', 119);
  TAB = new Key('TAB', 120);
  ESCAPE = new Key('ESCAPE', 121);
  PAUSE = new Key('PAUSE', 122);
  PRINT_SCREEN = new Key('PRINT_SCREEN', 123);
  SCROLL_LOCK = new Key('SCROLL_LOCK', 124);
  WINDOWS = new Key('WINDOWS', 125);
  MEDIA_CLOSE = new Key('MEDIA_CLOSE', 126);
  MEDIA_EJECT = new Key('MEDIA_EJECT', 127);
  MEDIA_FAST_FORWARD = new Key('MEDIA_FAST_FORWARD', 128);
  MEDIA_NEXT = new Key('MEDIA_NEXT', 129);
  MEDIA_PAUSE = new Key('MEDIA_PAUSE', 130);
  MEDIA_PLAY = new Key('MEDIA_PLAY', 131);
  MEDIA_PLAY_PAUSE = new Key('MEDIA_PLAY_PAUSE', 132);
  MEDIA_PREVIOUS = new Key('MEDIA_PREVIOUS', 133);
  MEDIA_RECORD = new Key('MEDIA_RECORD', 134);
  MEDIA_REWIND = new Key('MEDIA_REWIND', 135);
  MEDIA_STOP = new Key('MEDIA_STOP', 136);
  BLUE = new Key('BLUE', 137);
  GREEN = new Key('GREEN', 138);
  RED = new Key('RED', 139);
  YELLOW = new Key('YELLOW', 140);
  APP_SWITCH = new Key('APP_SWITCH', 141);
  AVR_INPUT = new Key('AVR_INPUT', 142);
  AVR_POWER = new Key('AVR_POWER', 143);
  BACK = new Key('BACK', 144);
  BOOKMARK = new Key('BOOKMARK', 145);
  BREAK = new Key('BREAK', 146);
  BUTTON_1 = new Key('BUTTON_1', 147);
  BUTTON_2 = new Key('BUTTON_2', 148);
  BUTTON_3 = new Key('BUTTON_3', 149);
  BUTTON_4 = new Key('BUTTON_4', 150);
  BUTTON_5 = new Key('BUTTON_5', 151);
  BUTTON_6 = new Key('BUTTON_6', 152);
  BUTTON_7 = new Key('BUTTON_7', 153);
  BUTTON_8 = new Key('BUTTON_8', 154);
  BUTTON_9 = new Key('BUTTON_9', 155);
  BUTTON_10 = new Key('BUTTON_10', 156);
  BUTTON_11 = new Key('BUTTON_11', 157);
  BUTTON_12 = new Key('BUTTON_12', 158);
  BUTTON_13 = new Key('BUTTON_13', 159);
  BUTTON_14 = new Key('BUTTON_14', 160);
  BUTTON_15 = new Key('BUTTON_15', 161);
  BUTTON_16 = new Key('BUTTON_16', 162);
  BUTTON_A = new Key('BUTTON_A', 163);
  BUTTON_B = new Key('BUTTON_B', 164);
  BUTTON_C = new Key('BUTTON_C', 165);
  BUTTON_L1 = new Key('BUTTON_L1', 166);
  BUTTON_L2 = new Key('BUTTON_L2', 167);
  BUTTON_MODE = new Key('BUTTON_MODE', 168);
  BUTTON_R1 = new Key('BUTTON_R1', 169);
  BUTTON_R2 = new Key('BUTTON_R2', 170);
  BUTTON_SELECT = new Key('BUTTON_SELECT', 171);
  BUTTON_START = new Key('BUTTON_START', 172);
  BUTTON_THUMBL = new Key('BUTTON_THUMBL', 173);
  BUTTON_THUMBR = new Key('BUTTON_THUMBR', 174);
  BUTTON_X = new Key('BUTTON_X', 175);
  BUTTON_Y = new Key('BUTTON_Y', 176);
  BUTTON_Z = new Key('BUTTON_Z', 177);
  CALL = new Key('CALL', 178);
  CAMERA = new Key('CAMERA', 179);
  CAPTIONS = new Key('CAPTIONS', 180);
  CHANNEL_DOWN = new Key('CHANNEL_DOWN', 181);
  CHANNEL_UP = new Key('CHANNEL_UP', 182);
  CLEAR = new Key('CLEAR', 183);
  DPAD_CENTER = new Key('DPAD_CENTER', 184);
  DPAD_DOWN = new Key('DPAD_DOWN', 185);
  DPAD_LEFT = new Key('DPAD_LEFT', 186);
  DPAD_RIGHT = new Key('DPAD_RIGHT', 187);
  DPAD_UP = new Key('DPAD_UP', 188);
  DVR = new Key('DVR', 189);
  ENDCALL = new Key('ENDCALL', 190);
  ENVELOPE = new Key('ENVELOPE', 191);
  EXPLORER = new Key('EXPLORER', 192);
  FOCUS = new Key('FOCUS', 193);
  FORWARD = new Key('FORWARD', 194);
  FORWARD_DEL = new Key('FORWARD_DEL', 195);
  FUNCTION = new Key('FUNCTION', 196);
  GUIDE = new Key('GUIDE', 197);
  HEADSETHOOK = new Key('HEADSETHOOK', 198);
  INFO = new Key('INFO', 199);
  MENU = new Key('MENU', 200);
  MUTE = new Key('MUTE', 201);
  NOTIFICATION = new Key('NOTIFICATION', 202);
  NUM = new Key('NUM', 203);
  PICTSYMBOLS = new Key('PICTSYMBOLS', 204);
  POWER = new Key('POWER', 205);
  SEARCH = new Key('SEARCH', 206);
  SETTINGS = new Key('SETTINGS', 207);
  SOFT_LEFT = new Key('SOFT_LEFT', 208);
  SOFT_RIGHT = new Key('SOFT_RIGHT', 209);
  STAR = new Key('STAR', 210);
  STB_INPUT = new Key('STB_INPUT', 211);
  STB_POWER = new Key('STB_POWER', 212);
  SWITCH_CHARSET = new Key('SWITCH_CHARSET', 213);
  SYM = new Key('SYM', 214);
  SYSRQ = new Key('SYSRQ', 215);
  TV = new Key('TV', 216);
  TV_INPUT = new Key('TV_INPUT', 217);
  TV_POWER = new Key('TV_POWER', 218);
  VOLUME_DOWN = new Key('VOLUME_DOWN', 219);
  VOLUME_MUTE = new Key('VOLUME_MUTE', 220);
  VOLUME_UP = new Key('VOLUME_UP', 221);
  WINDOW = new Key('WINDOW', 222);
  ZOOM_IN = new Key('ZOOM_IN', 223);
  ZOOM_OUT = new Key('ZOOM_OUT', 224);
  UNKNOWN_0 = new Key('UNKNOWN', 225);
}

function Key(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_Key();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Key_2_classLit, 1), $intern_1, 4, 0, [A, B, C, D, E_0, F_0, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_MULTIPLY, NP_NUM_LOCK, NP_SUBTRACT, NP_DOWN, NP_LEFT, NP_RIGHT, NP_UP, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, AMPERSAND, ASTERISK, AT, BACKQUOTE, BACKSLASH, BANG, CIRCUMFLEX, COLON, COMMA, DOLLAR, DOUBLE_QUOTE, EQUALS, GREATER, HASH, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, MINUS, MULTIPLY, PERCENT, PERIOD, PLUS, QUOTE, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, SEMICOLON, SLASH, SPACE, TILDE, QUESTION_MARK, UNDERSCORE, VERTICAL_BAR, ALT, CONTROL, CAPS_LOCK, SHIFT, META, DOWN, END, HOME, LEFT, PAGE_UP, PAGE_DOWN, RIGHT, UP, BACKSPACE, DELETE, ENTER, INSERT, TAB, ESCAPE, PAUSE, PRINT_SCREEN, SCROLL_LOCK, WINDOWS, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, BLUE, GREEN, RED, YELLOW, APP_SWITCH, AVR_INPUT, AVR_POWER, BACK, BOOKMARK, BREAK, BUTTON_1, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, CALL, CAMERA, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CLEAR, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, ENDCALL, ENVELOPE, EXPLORER, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, GUIDE, HEADSETHOOK, INFO, MENU, MUTE, NOTIFICATION, NUM, PICTSYMBOLS, POWER, SEARCH, SETTINGS, SOFT_LEFT, SOFT_RIGHT, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, TV, TV_INPUT, TV_POWER, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, WINDOW, ZOOM_IN, ZOOM_OUT, UNKNOWN_0]);
}

defineClass(4, 6, {3:1, 7:1, 6:1, 4:1}, Key);
var A, ALT, AMPERSAND, APP_SWITCH, ASTERISK, AT, AVR_INPUT, AVR_POWER, B, BACK, BACKQUOTE, BACKSLASH, BACKSPACE, BANG, BLUE, BOOKMARK, BREAK, BUTTON_1, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, C, CALL, CAMERA, CAPS_LOCK, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CIRCUMFLEX, CLEAR, COLON, COMMA, CONTROL, D, DELETE, DOLLAR, DOUBLE_QUOTE, DOWN, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, E_0, END, ENDCALL, ENTER, ENVELOPE, EQUALS, ESCAPE, EXPLORER, F_0, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, G, GREATER, GREEN, GUIDE, H, HASH, HEADSETHOOK, HOME, I, INFO, INSERT, J, K, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, L, LEFT, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, M, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, MENU, META, MINUS, MULTIPLY, MUTE, N, NOTIFICATION, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_DOWN, NP_LEFT, NP_MULTIPLY, NP_NUM_LOCK, NP_RIGHT, NP_SUBTRACT, NP_UP, NUM, O, P, PAGE_DOWN, PAGE_UP, PAUSE, PERCENT, PERIOD, PICTSYMBOLS, PLUS, POWER, PRINT_SCREEN, Q, QUESTION_MARK, QUOTE, R, RED, RIGHT, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, S, SCROLL_LOCK, SEARCH, SEMICOLON, SETTINGS, SHIFT, SLASH, SOFT_LEFT, SOFT_RIGHT, SPACE, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, T, TAB, TILDE, TV, TV_INPUT, TV_POWER, U, UNDERSCORE, UNKNOWN_0, UP, V, VERTICAL_BAR, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, W, WINDOW, WINDOWS, X, Y, YELLOW, Z, ZOOM_IN, ZOOM_OUT;
var Lplayn_core_Key_2_classLit = createForEnum('playn.core', 'Key', 4, Ljava_lang_Enum_2_classLit, values_12);
function Keyboard$Event(time){
  Event$Input.call(this, 0, time);
}

defineClass(210, 32, $intern_30);
var Lplayn_core_Keyboard$Event_2_classLit = createForClass('playn.core', 'Keyboard/Event', 210, Lplayn_core_Event$Input_2_classLit);
function Keyboard$KeyEvent(time, key, down){
  Keyboard$Event.call(this, time);
  this.key_0 = key;
  this.down = down;
}

defineClass(211, 210, $intern_30, Keyboard$KeyEvent);
_.addFields = function addFields_1(builder){
  $append_4($append_8($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_9($append_8($append_7((builder.string += ', key=' , builder), this.key_0), ', down='), this.down);
}
;
_.name_1 = function name_4(){
  return 'Key';
}
;
_.down = false;
var Lplayn_core_Keyboard$KeyEvent_2_classLit = createForClass('playn.core', 'Keyboard/KeyEvent', 211, Lplayn_core_Keyboard$Event_2_classLit);
function Keyboard$TypedEvent(time, typedChar){
  Keyboard$Event.call(this, time);
  this.typedChar = typedChar;
}

defineClass(421, 210, $intern_30, Keyboard$TypedEvent);
_.addFields = function addFields_2(builder){
  $append_4($append_8($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_1((builder.string += ', typedChar=' , builder), this.typedChar);
}
;
_.name_1 = function name_5(){
  return 'Typed';
}
;
_.typedChar = 0;
var Lplayn_core_Keyboard$TypedEvent_2_classLit = createForClass('playn.core', 'Keyboard/TypedEvent', 421, Lplayn_core_Keyboard$Event_2_classLit);
function $debug(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , DEBUG), msg, null);
}

function $debug_0(this$static, msg, e){
  $log(this$static, ($clinit_Log$Level() , DEBUG), msg, e);
}

function $debug_1(this$static, msg, args){
  var acount;
  $debug_0(this$static, $append_8(format_1($append_8($append_8(new StringBuilder, msg), ' ['), args), ']').string, (acount = args.length , acount % 2 == 1 && instanceOf(args[acount - 1], 10)?args[acount - 1]:null));
}

function $error(this$static, e){
  $log(this$static, ($clinit_Log$Level() , ERROR), 'init()', e);
}

function $info(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , INFO_0), msg, null);
}

function $info_0(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , INFO_0), msg, null);
}

function $log(this$static, level, msg, e){
  var lmsg;
  level.ordinal >= this$static.minLevel.ordinal && (lmsg = level + ': ' + msg , !!e && (lmsg += ': ' + e.getMessage()) , $clinit_System() , !!e && e.printStackTrace(out_0) , $wnd.console && $wnd.console.info && (e != null?$wnd.console.info(lmsg, e):$wnd.console.info(lmsg)) , undefined , undefined);
}

function $warn(this$static, msg, e){
  $log(this$static, ($clinit_Log$Level() , WARN), msg, e);
}

function $warn_0(this$static, args){
  var acount;
  $warn(this$static, $append_8(format_1($append_8($append_8(new StringBuilder, 'Platform has neither mouse nor touch events?'), ' ['), args), ']').string, (acount = args.length , acount % 2 == 1 && instanceOf(args[acount - 1], 10)?args[acount - 1]:null));
}

function format_1(into, args){
  var ii, ll;
  for (ii = 0 , ll = args.length / 2 | 0; ii < ll; ii++) {
    ii > 0 && (into.string += ', ' , into);
    $append_7($append_8((into.string += '' + args[2 * ii] , into), '='), args[2 * ii + 1]);
  }
  return into;
}

defineClass(345, 1, {});
var Lplayn_core_Log_2_classLit = createForClass('playn.core', 'Log', 345, Ljava_lang_Object_2_classLit);
function $clinit_Log$Level(){
  $clinit_Log$Level = emptyMethod;
  DEBUG = new Log$Level('DEBUG', 0);
  INFO_0 = new Log$Level('INFO', 1);
  WARN = new Log$Level('WARN', 2);
  ERROR = new Log$Level('ERROR', 3);
}

function Log$Level(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_13(){
  $clinit_Log$Level();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Log$Level_2_classLit, 1), $intern_1, 77, 0, [DEBUG, INFO_0, WARN, ERROR]);
}

defineClass(77, 6, {3:1, 7:1, 6:1, 77:1}, Log$Level);
var DEBUG, ERROR, INFO_0, WARN;
var Lplayn_core_Log$Level_2_classLit = createForEnum('playn.core', 'Log/Level', 77, Ljava_lang_Enum_2_classLit, values_13);
function Mouse$Event(time, x_0, y_0){
  Event$XY.call(this, 0, time, x_0, y_0);
}

defineClass(72, 46, $intern_32);
var Lplayn_core_Mouse$Event_2_classLit = createForClass('playn.core', 'Mouse/Event', 72, Lplayn_core_Event$XY_2_classLit);
function Mouse$ButtonEvent(time, x_0, y_0, button, down){
  Mouse$Event.call(this, time, x_0, y_0);
  this.button_0 = button;
  this.down = down;
}

defineClass(129, 72, {34:1, 32:1, 46:1, 129:1, 72:1, 45:1}, Mouse$ButtonEvent);
_.addFields = function addFields_3(builder){
  $append_4($append_8($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_8($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_9($append_8($append_7((builder.string += ', id=' , builder), this.button_0), ', down='), this.down);
}
;
_.name_1 = function name_6(){
  return 'Button';
}
;
_.down = false;
var Lplayn_core_Mouse$ButtonEvent_2_classLit = createForClass('playn.core', 'Mouse/ButtonEvent', 129, Lplayn_core_Mouse$Event_2_classLit);
function $clinit_Mouse$ButtonEvent$Id(){
  $clinit_Mouse$ButtonEvent$Id = emptyMethod;
  LEFT_0 = new Mouse$ButtonEvent$Id('LEFT', 0);
  RIGHT_0 = new Mouse$ButtonEvent$Id('RIGHT', 1);
  MIDDLE = new Mouse$ButtonEvent$Id('MIDDLE', 2);
  X1 = new Mouse$ButtonEvent$Id('X1', 3);
  X2 = new Mouse$ButtonEvent$Id('X2', 4);
}

function Mouse$ButtonEvent$Id(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_14(){
  $clinit_Mouse$ButtonEvent$Id();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Mouse$ButtonEvent$Id_2_classLit, 1), $intern_1, 73, 0, [LEFT_0, RIGHT_0, MIDDLE, X1, X2]);
}

defineClass(73, 6, {3:1, 7:1, 6:1, 73:1}, Mouse$ButtonEvent$Id);
var LEFT_0, MIDDLE, RIGHT_0, X1, X2;
var Lplayn_core_Mouse$ButtonEvent$Id_2_classLit = createForEnum('playn.core', 'Mouse/ButtonEvent/Id', 73, Ljava_lang_Enum_2_classLit, values_14);
function Mouse$MotionEvent(time, x_0, y_0, dx, dy){
  Mouse$Event.call(this, time, x_0, y_0);
  this.dx = dx;
  this.dy = dy;
}

defineClass(152, 72, {34:1, 32:1, 46:1, 72:1, 152:1, 45:1}, Mouse$MotionEvent);
_.addFields = function addFields_4(builder){
  $append_4($append_8($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_8($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3($append_8($append_3((builder.string += ', dx=' , builder), this.dx), ', dy='), this.dy);
}
;
_.name_1 = function name_7(){
  return 'MotionEvent';
}
;
_.dx = 0;
_.dy = 0;
var Lplayn_core_Mouse$MotionEvent_2_classLit = createForClass('playn.core', 'Mouse/MotionEvent', 152, Lplayn_core_Mouse$Event_2_classLit);
function Mouse$WheelEvent(time, x_0, y_0, velocity){
  Mouse$Event.call(this, time, x_0, y_0);
  this.velocity = velocity;
}

defineClass(422, 72, $intern_32, Mouse$WheelEvent);
_.addFields = function addFields_5(builder){
  $append_4($append_8($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_8($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3((builder.string += ', velocity=' , builder), this.velocity);
}
;
_.name_1 = function name_8(){
  return 'Wheel';
}
;
_.velocity = 0;
var Lplayn_core_Mouse$WheelEvent_2_classLit = createForClass('playn.core', 'Mouse/WheelEvent', 422, Lplayn_core_Mouse$Event_2_classLit);
function $dispatchEvent(this$static, signal, event_0){
  var cause;
  try {
    $notify(signal, ($clinit_AbstractSignal() , EMIT), event_0, null, null);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      cause = $e0;
      $emit(this$static.errors, new Platform$Error);
      $warn(this$static.log_0, 'Event dispatch failure', cause);
    }
     else 
      throw toJs($e0);
  }
}

function $emitFrame(this$static){
  var e;
  try {
    $emit(this$static.frame_0, this$static);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      $emit(this$static.errors, new Platform$Error);
      $warn(this$static.log_0, 'Frame tick exception', e);
    }
     else 
      throw toJs($e0);
  }
}

function $reportError(this$static, message, cause){
  $emit(this$static.errors, new Platform$Error);
  $warn(this$static.log_0, message, cause);
}

defineClass(136, 1, {136:1});
var Lplayn_core_Platform_2_classLit = createForClass('playn.core', 'Platform', 136, Ljava_lang_Object_2_classLit);
function Platform$Error(){
}

defineClass(137, 1, {}, Platform$Error);
var Lplayn_core_Platform$Error_2_classLit = createForClass('playn.core', 'Platform/Error', 137, Ljava_lang_Object_2_classLit);
function $clinit_Platform$Lifecycle(){
  $clinit_Platform$Lifecycle = emptyMethod;
  PAUSE_0 = new Platform$Lifecycle('PAUSE', 0);
  RESUME = new Platform$Lifecycle('RESUME', 1);
  EXIT = new Platform$Lifecycle('EXIT', 2);
}

function Platform$Lifecycle(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_15(){
  $clinit_Platform$Lifecycle();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Platform$Lifecycle_2_classLit, 1), $intern_1, 93, 0, [PAUSE_0, RESUME, EXIT]);
}

defineClass(93, 6, {3:1, 7:1, 6:1, 93:1}, Platform$Lifecycle);
var EXIT, PAUSE_0, RESUME;
var Lplayn_core_Platform$Lifecycle_2_classLit = createForEnum('playn.core', 'Platform/Lifecycle', 93, Ljava_lang_Enum_2_classLit, values_15);
function $clinit_Platform$Type(){
  $clinit_Platform$Type = emptyMethod;
  JAVA = new Platform$Type('JAVA', 0);
  HTML = new Platform$Type('HTML', 1);
  ANDROID = new Platform$Type('ANDROID', 2);
  IOS = new Platform$Type('IOS', 3);
  STUB = new Platform$Type('STUB', 4);
}

function Platform$Type(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_16(){
  $clinit_Platform$Type();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Platform$Type_2_classLit, 1), $intern_1, 69, 0, [JAVA, HTML, ANDROID, IOS, STUB]);
}

defineClass(69, 6, {3:1, 7:1, 6:1, 69:1}, Platform$Type);
var ANDROID, HTML, IOS, JAVA, STUB;
var Lplayn_core_Platform$Type_2_classLit = createForEnum('playn.core', 'Platform/Type', 69, Ljava_lang_Enum_2_classLit, values_16);
function $forward(this$static, kind, isTouch, source){
  var event_0;
  if (this$static.enabled && !!this$static.events._listeners) {
    event_0 = new Pointer$Event(source.flags, source.time, source.x_0, source.y_0, kind, isTouch);
    $dispatchEvent(this$static.plat, this$static.events, event_0);
  }
}

defineClass(323, 1, {});
_.enabled = true;
var Lplayn_core_Pointer_2_classLit = createForClass('playn.core', 'Pointer', 323, Ljava_lang_Object_2_classLit);
function $onEmit(this$static, events){
  var event_0, event$index, event$max;
  for (event$index = 0 , event$max = events.length; event$index < event$max; ++event$index) {
    event_0 = events[event$index];
    this$static.active == -1 && event_0.kind.isStart && (this$static.active = event_0.id_0);
    if (event_0.id_0 == this$static.active) {
      $forward(this$static.this$01, ($clinit_Pointer$Event$Kind() , stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Pointer$Event$Kind_2_classLit, 1), $intern_1, 70, 0, [START, DRAG, END_0, CANCEL]))[event_0.kind.ordinal], true, event_0);
      event_0.kind.isEnd && (this$static.active = -1);
    }
  }
}

function Pointer$1(this$0){
  this.this$01 = this$0;
}

defineClass(327, 521, $intern_31, Pointer$1);
_.onEmit = function onEmit_1(events){
  $onEmit(this, events);
}
;
_.active = -1;
var Lplayn_core_Pointer$1_2_classLit = createForClass('playn.core', 'Pointer/1', 327, Lreact_Slot_2_classLit);
function $onEmit_0(this$static, event_0){
  var bevent;
  if (instanceOf(event_0, 152)) {
    this$static.dragging && $forward(this$static.this$01, ($clinit_Pointer$Event$Kind() , DRAG), false, event_0);
  }
   else if (instanceOf(event_0, 129)) {
    bevent = event_0;
    if (bevent.button_0 == ($clinit_Mouse$ButtonEvent$Id() , LEFT_0)) {
      this$static.dragging = bevent.down;
      $forward(this$static.this$01, bevent.down?($clinit_Pointer$Event$Kind() , START):($clinit_Pointer$Event$Kind() , END_0), false, bevent);
    }
  }
}

function Pointer$2(this$0){
  this.this$01 = this$0;
}

defineClass(328, 521, $intern_31, Pointer$2);
_.onEmit = function onEmit_2(event_0){
  $onEmit_0(this, event_0);
}
;
_.dragging = false;
var Lplayn_core_Pointer$2_2_classLit = createForClass('playn.core', 'Pointer/2', 328, Lreact_Slot_2_classLit);
function Pointer$Event(flags, time, x_0, y_0, kind, isTouch){
  Event$XY.call(this, flags, time, x_0, y_0);
  this.kind = kind;
  this.isTouch = isTouch;
}

defineClass(176, 46, {34:1, 32:1, 46:1, 176:1, 45:1}, Pointer$Event);
_.addFields = function addFields_6(builder){
  $append_4($append_8($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_8($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_7((builder.string += ', kind=' , builder), this.kind);
  $append_9((builder.string += ', touch=' , builder), this.isTouch);
}
;
_.name_1 = function name_9(){
  return 'Pointer';
}
;
_.isTouch = false;
var Lplayn_core_Pointer$Event_2_classLit = createForClass('playn.core', 'Pointer/Event', 176, Lplayn_core_Event$XY_2_classLit);
function $clinit_Pointer$Event$Kind(){
  $clinit_Pointer$Event$Kind = emptyMethod;
  START = new Pointer$Event$Kind('START', 0, true, false);
  DRAG = new Pointer$Event$Kind('DRAG', 1, false, false);
  END_0 = new Pointer$Event$Kind('END', 2, false, true);
  CANCEL = new Pointer$Event$Kind('CANCEL', 3, false, true);
}

function Pointer$Event$Kind(enum$name, enum$ordinal, isStart, isEnd){
  Enum.call(this, enum$name, enum$ordinal);
  this.isStart = isStart;
  this.isEnd = isEnd;
}

function values_17(){
  $clinit_Pointer$Event$Kind();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Pointer$Event$Kind_2_classLit, 1), $intern_1, 70, 0, [START, DRAG, END_0, CANCEL]);
}

defineClass(70, 6, {3:1, 7:1, 6:1, 70:1}, Pointer$Event$Kind);
_.isEnd = false;
_.isStart = false;
var CANCEL, DRAG, END_0, START;
var Lplayn_core_Pointer$Event$Kind_2_classLit = createForEnum('playn.core', 'Pointer/Event/Kind', 70, Ljava_lang_Enum_2_classLit, values_17);
defineClass(384, 535, $intern_29);
_.end = function end_0(){
  $end(this);
  this.curTexId = 0;
}
;
_.curTexId = 0;
var Lplayn_core_TexturedBatch_2_classLit = createForClass('playn.core', 'TexturedBatch', 384, Lplayn_core_GLBatch_2_classLit);
function $addQuad(this$static, tint, m00, m01, m10, m11, tx, ty, left, top_0, right, bottom, sr, sb){
  this$static.addQuad(tint, m00, m01, m10, m11, tx, ty, left, top_0, 0, 0, right, top_0, sr, 0, left, bottom, 0, sb, right, bottom, sr, sb);
}

function $addQuad_0(this$static, tex, tint, xf, x_0, y_0, w, h){
  var sb, sr;
  this$static.curTexId != 0 && this$static.curTexId != tex.id_0 && this$static.flush();
  this$static.curTexId = tex.id_0;
  sr = tex.config.repeatX?w / tex.displayWidth:1;
  sb = tex.config.repeatY?h / tex.displayHeight:1;
  $addQuad(this$static, tint, xf.m00, xf.m01, xf.m10, xf.m11, xf.tx, xf.ty, x_0, y_0, x_0 + w, y_0 + h, sr, sb);
}

defineClass(185, 384, $intern_29);
var Lplayn_core_QuadBatch_2_classLit = createForClass('playn.core', 'QuadBatch', 185, Lplayn_core_TexturedBatch_2_classLit);
function $clinit_Scale(){
  $clinit_Scale = emptyMethod;
  ONE_0 = new Scale(1);
}

function $computePath(path, scale){
  var didx, scaleFactor;
  if (scale <= 1)
    return path;
  scaleFactor = round_int(scale * 10);
  scaleFactor % 10 == 0 && (scaleFactor = scaleFactor / 10 | 0);
  didx = path.lastIndexOf('.');
  return didx == -1?path:path.substr(0, didx) + '@' + scaleFactor + 'x' + path.substr(didx);
}

function $getScaledResources(this$static, path){
  var rscale, rsrcs;
  rsrcs = new ArrayList;
  $add_1(rsrcs, new Scale$ScaledResource(this$static, $computePath(path, this$static.factor)));
  for (rscale = ifloor(this$static.factor); rscale > 1; rscale -= 1) {
    rscale != this$static.factor && $add_1(rsrcs, new Scale$ScaledResource(new Scale(rscale), $computePath(path, rscale)));
  }
  $add_1(rsrcs, new Scale$ScaledResource(ONE_0, path));
  return rsrcs;
}

function $invScaled(this$static, length_0){
  return length_0 / this$static.factor;
}

function $scaledCeil(this$static, length_0){
  return iceil(this$static.factor * length_0);
}

function Scale(factor){
  $clinit_Scale();
  this.factor = factor;
}

defineClass(121, 1, {}, Scale);
_.toString_0 = function toString_41(){
  return 'x' + this.factor;
}
;
_.factor = 0;
var ONE_0;
var Lplayn_core_Scale_2_classLit = createForClass('playn.core', 'Scale', 121, Ljava_lang_Object_2_classLit);
function Scale$ScaledResource(scale, path){
  this.scale_0 = scale;
  this.path = path;
}

defineClass(122, 1, {122:1}, Scale$ScaledResource);
_.toString_0 = function toString_42(){
  return this.scale_0 + ': ' + this.path;
}
;
var Lplayn_core_Scale$ScaledResource_2_classLit = createForClass('playn.core', 'Scale/ScaledResource', 122, Ljava_lang_Object_2_classLit);
function $begin_0(this$static){
  $bind(this$static.target);
  $beginBatch(this$static, this$static.batch);
  return this$static;
}

function $beginBatch(this$static, batch){
  batch.begin(this$static.target.this$01.viewPixelWidth, this$static.target.this$01.viewPixelHeight, true);
  return batch;
}

function $clear_0(this$static, red, green, blue, alpha_0){
  $glClearColor(this$static.batch.gl, red, green, blue, alpha_0);
  this$static.batch.gl.gl.clear(16384);
  return this$static;
}

function $combineTint(this$static, tint){
  var otint;
  otint = this$static.tint;
  tint != -1 && (this$static.tint = combine(tint, otint));
  return otint;
}

function $concatenate(this$static, xf, originX, originY){
  var txf;
  txf = this$static.lastTrans;
  multiply_0(txf, xf.m00, xf.m01, xf.m10, xf.m11, xf.tx, xf.ty, txf);
  (originX != 0 || originY != 0) && $translate(txf, -originX, -originY);
  return this$static;
}

function $draw(this$static, tile, w, h){
  (!this$static.checkIntersection || $intersects(this$static, w, h)) && $addToBatch(tile, this$static.batch, this$static.tint, this$static.lastTrans, w, h);
  return this$static;
}

function $drawLine(this$static, x0, y0, x1, y1, width_0){
  var dx, dy, length_0, temp, wx, wy, xf;
  if (x1 < x0) {
    temp = x0;
    x0 = x1;
    x1 = temp;
    temp = y0;
    y0 = y1;
    y1 = temp;
  }
  dx = x1 - x0;
  dy = y1 - y0;
  length_0 = $wnd.Math.sqrt(dx * dx + dy * dy);
  wx = dx * (width_0 / 2) / length_0;
  wy = dy * (width_0 / 2) / length_0;
  xf = new AffineTransform;
  $setRotation(xf, $wnd.Math.atan2(dy, dx));
  xf.tx = x0 + wy;
  xf.ty = y0 - wx;
  multiply_1(this$static.lastTrans, xf, xf);
  $addQuad_0(this$static.batch, this$static.colorTex, combine(this$static.fillColor, this$static.tint), xf, 0, 0, length_0, width_0);
  return this$static;
}

function $end_0(this$static){
  this$static.batch.end();
  return this$static;
}

function $fillRect_0(this$static, x_0, y_0, width_0, height){
  $addQuad_0(this$static.batch, this$static.colorTex, combine(this$static.fillColor, this$static.tint), this$static.lastTrans, x_0, y_0, width_0, height);
  return this$static;
}

function $intersects(this$static, w, h){
  var ih, iw, ix, iy, scissor, th, tw;
  $transform_0(this$static.lastTrans, $set_3(this$static.intersectionTestPoint, 0, 0), this$static.intersectionTestPoint);
  $transform_1(this$static.lastTrans, $set_4(this$static.intersectionTestSize, w, h), this$static.intersectionTestSize);
  ix = this$static.intersectionTestPoint.x_0;
  iy = this$static.intersectionTestPoint.y_0;
  iw = this$static.intersectionTestSize.x_0;
  ih = this$static.intersectionTestSize.y_0;
  if (this$static.scissorDepth > 0) {
    scissor = $get_7(this$static.scissors, this$static.scissorDepth - 1);
    return $intersects_0(scissor, round_int(ix), round_int(iy), round_int(iw), round_int(ih));
  }
  tw = this$static.target.this$01.viewPixelWidth;
  th = this$static.target.this$01.viewPixelHeight;
  return ix + iw > 0 && ix < tw && iy + ih > 0 && iy < th;
}

function $pushScissorState(this$static, x_0, y_0, width_0, height){
  var pr, r;
  this$static.scissorDepth == this$static.scissors.array.length && $add_1(this$static.scissors, new Rectangle_0);
  r = $get_7(this$static.scissors, this$static.scissorDepth);
  if (this$static.scissorDepth == 0)
    $setBounds(r, x_0, y_0, width_0, height);
  else {
    pr = $get_7(this$static.scissors, this$static.scissorDepth - 1);
    $setLocation(r, max_0(pr.x_0, x_0), max_0(pr.y_0, y_0));
    $setSize_3(r, max_0(min_0(pr.x_0 + pr.width_0 - 1, x_0 + width_0 - 1) - r.x_0, 0), max_0(min_0(pr.y_0 + pr.height_0 - 1, y_0 + height - 1) - r.y_0, 0));
  }
  ++this$static.scissorDepth;
  return r;
}

function $restoreTx(this$static){
  var tsSize;
  tsSize = this$static.transformStack.array.length;
  $remove_0(this$static.transformStack, --tsSize);
  this$static.lastTrans = this$static.transformStack.array.length == 0?null:$get_7(this$static.transformStack, tsSize - 1);
  return this$static;
}

function $saveTx(this$static){
  $add_1(this$static.transformStack, this$static.lastTrans = $copy(this$static.lastTrans));
  return this$static;
}

function $scale_0(this$static, sx, sy){
  $scale_1(this$static.lastTrans, sx, sy);
  return this$static;
}

function $setFillColor(this$static, color_0){
  this$static.fillColor = color_0;
  return this$static;
}

function $startClipped(this$static, x_0, y_0, width_0, height){
  var r;
  this$static.batch.flush();
  r = $pushScissorState(this$static, x_0, this$static.target.this$01.viewPixelHeight - y_0 - height, width_0, height);
  $glScissor(this$static.batch.gl, r.x_0, r.y_0, r.width_0, r.height_0);
  this$static.scissorDepth == 1 && (this$static.batch.gl.gl.enable(3089) , undefined);
  $checkError(this$static.batch.gl);
  return !(r.width_0 <= 0 || r.height_0 <= 0);
}

function Surface(gfx, target, defaultBatch){
  this.transformStack = new ArrayList;
  this.scissors = new ArrayList;
  this.intersectionTestPoint = new Point;
  this.intersectionTestSize = new Vector;
  this.target = target;
  this.batch = defaultBatch;
  $add_1(this.transformStack, this.lastTrans = new AffineTransform);
  this.colorTex = $colorTex(gfx);
  $scale_0(this, target.this$01.scale_0.factor, target.this$01.scale_0.factor);
}

defineClass(385, 1, $intern_29, Surface);
_.close_0 = function close_12(){
}
;
_.checkIntersection = false;
_.fillColor = 0;
_.scissorDepth = 0;
_.tint = -1;
var Lplayn_core_Surface_2_classLit = createForClass('playn.core', 'Surface', 385, Ljava_lang_Object_2_classLit);
defineClass(188, 537, {188:1});
_.toString_0 = function toString_43(){
  return 'Tile[' + this.displayWidth + 'x' + this.displayHeight + '/' + ($clinit_Points() , toString_58(0, TO_STRING_DECIMAL_PLACES) + ('' + toString_58(0, TO_STRING_DECIMAL_PLACES))) + '/' + (toString_58(1, TO_STRING_DECIMAL_PLACES) + ('' + toString_58(1, TO_STRING_DECIMAL_PLACES))) + '] <- ' + this;
}
;
var Lplayn_core_Tile_2_classLit = createForClass('playn.core', 'Tile', 188, Lplayn_core_TileSource_2_classLit);
function $addToBatch(this$static, batch, tint, tx, width_0, height){
  $addQuad_0(batch, this$static, tint, tx, 0, 0, width_0, height);
}

function $close_2(this$static){
  if (!this$static.disposed) {
    this$static.disposed = true;
    $glDeleteTexture(this$static.gfx.gl, this$static.id_0);
  }
}

function $release(this$static){
  this$static.config.managed && --this$static.refs == 0 && $close_2(this$static);
}

function $update_0(this$static, image){
  var pixHeight, pixWidth, potHeight, potWidth, scaled;
  if (this$static.config.repeatX || this$static.config.repeatY || this$static.config.mipmaps) {
    pixWidth = image.pixelWidth;
    pixHeight = image.pixelHeight;
    potWidth = $toTexWidth(this$static.config, pixWidth);
    potHeight = $toTexWidth(this$static.config, pixHeight);
    if (potWidth != pixWidth || potHeight != pixHeight) {
      scaled = $createCanvasImpl(this$static.gfx, ($clinit_Scale() , ONE_0), potWidth, potHeight);
      $draw_0(image, scaled.ctx, potWidth, potHeight);
      $upload(scaled.image, this$static.gfx, this$static);
    }
     else 
      $upload(image, this$static.gfx, this$static);
  }
   else 
    $upload(image, this$static.gfx, this$static);
  this$static.config.mipmaps && (this$static.gfx.gl.gl.generateMipmap(3553) , undefined);
}

function Texture(gfx, id_0, config, pixWidth, pixHeight, scale, dispWidth, dispHeight){
  this.gfx = gfx;
  this.id_0 = id_0;
  this.config = config;
  this.pixelWidth = pixWidth;
  this.pixelHeight = pixHeight;
  this.scale_0 = scale;
  this.displayWidth = dispWidth;
  this.displayHeight = dispHeight;
}

function nextPOT(value_0){
  var bit, count, highest, ii;
  bit = 32768;
  highest = -1;
  count = 0;
  for (ii = 15; ii >= 0; --ii , bit >>= 1) {
    if ((value_0 & bit) == 0)
      continue;
    ++count;
    highest == -1 && (highest = ii);
  }
  return count > 1?1 << highest + 1:value_0;
}

defineClass(392, 188, {11:1, 188:1, 12:1}, Texture);
_.close_0 = function close_13(){
  $close_2(this);
}
;
_.toString_0 = function toString_44(){
  return 'Texture[id=' + this.id_0 + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', dsize=' + this.displayWidth + 'x' + this.displayHeight + ' @ ' + this.scale_0 + ', config=' + this.config + ']';
}
;
_.displayHeight = 0;
_.displayWidth = 0;
_.disposed = false;
_.id_0 = 0;
_.pixelHeight = 0;
_.pixelWidth = 0;
_.refs = 0;
var Lplayn_core_Texture_2_classLit = createForClass('playn.core', 'Texture', 392, Lplayn_core_Tile_2_classLit);
function $clinit_Texture$Config(){
  $clinit_Texture$Config = emptyMethod;
  DEFAULT = new Texture$Config(true);
  UNMANAGED = new Texture$Config(false);
}

function $toTexHeight(this$static, sourceHeight){
  return this$static.repeatY || this$static.mipmaps?nextPOT(sourceHeight):sourceHeight;
}

function $toTexWidth(this$static, sourceWidth){
  return this$static.repeatX || this$static.mipmaps?nextPOT(sourceWidth):sourceWidth;
}

function Texture$Config(managed){
  this.managed = managed;
  this.repeatX = false;
  this.repeatY = false;
  this.minFilter = 9729;
  this.magFilter = 9729;
  this.mipmaps = false;
}

defineClass(189, 1, {}, Texture$Config);
_.toString_0 = function toString_45(){
  var repstr;
  repstr = (this.repeatX?'x':'') + (this.repeatY?'y':'');
  return '[managed=' + this.managed + ', repeat=' + repstr + ', filter=' + this.minFilter + '/' + this.magFilter + ', mipmaps=' + this.mipmaps + ']';
}
;
_.magFilter = 0;
_.managed = false;
_.minFilter = 0;
_.mipmaps = false;
_.repeatX = false;
_.repeatY = false;
var DEFAULT, UNMANAGED;
var Lplayn_core_Texture$Config_2_classLit = createForClass('playn.core', 'Texture/Config', 189, Ljava_lang_Object_2_classLit);
function $fragment(){
  var str;
  str = new StringBuilder_1('#ifdef GL_ES\nprecision lowp float;\n#else\n#define lowp\n#define mediump\n#define highp\n#endif\n');
  str.string += 'uniform lowp sampler2D u_Texture;\n';
  str.string += 'varying mediump vec2 v_TexCoord;\nvarying lowp vec4 v_Color;\n';
  str.string += 'void main(void) {\n';
  str.string += '  vec4 textureColor = texture2D(u_Texture, v_TexCoord);\n';
  str.string += '  textureColor.rgb *= v_Color.rgb;\n';
  str.string += '  textureColor *= v_Color.a;\n';
  str.string += '  gl_FragColor = textureColor;\n}';
  return str.string;
}

function combine(curTint, tint){
  var newA, newB, newG, newR;
  newA = ((curTint >> 24 & 255) * ((tint >> 24 & 255) + 1) & 65280) << 16;
  if ((tint & $intern_28) == $intern_28) {
    return newA | curTint & $intern_28;
  }
  newR = ((curTint >> 16 & 255) * ((tint >> 16 & 255) + 1) & 65280) << 8;
  newG = (curTint >> 8 & 255) * ((tint >> 8 & 255) + 1) & 65280;
  newB = (curTint & 255) * ((tint & 255) + 1) >> 8 & 255;
  return newA | newR | newG | newB;
}

function Touch$Event(time, x_0, y_0, kind, id_0){
  Event$XY.call(this, 0, time, x_0, y_0);
  this.kind = kind;
  this.id_0 = id_0;
  this.pressure = -1;
  this.size_0 = -1;
}

defineClass(115, 46, {34:1, 32:1, 46:1, 115:1, 45:1}, Touch$Event);
_.addFields = function addFields_7(builder){
  $append_4($append_8($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_8($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3($append_8($append_3($append_8($append_4($append_8($append_7((builder.string += ', kind=' , builder), this.kind), ', id='), this.id_0), ', pressure='), this.pressure), ', size='), this.size_0);
}
;
_.name_1 = function name_10(){
  return 'Touch';
}
;
_.id_0 = 0;
_.pressure = 0;
_.size_0 = 0;
var Lplayn_core_Touch$Event_2_classLit = createForClass('playn.core', 'Touch/Event', 115, Lplayn_core_Event$XY_2_classLit);
function $clinit_Touch$Event$Kind(){
  $clinit_Touch$Event$Kind = emptyMethod;
  START_0 = new Touch$Event$Kind('START', 0, true, false);
  MOVE = new Touch$Event$Kind('MOVE', 1, false, false);
  END_1 = new Touch$Event$Kind('END', 2, false, true);
  CANCEL_0 = new Touch$Event$Kind('CANCEL', 3, false, true);
}

function Touch$Event$Kind(enum$name, enum$ordinal, isStart, isEnd){
  Enum.call(this, enum$name, enum$ordinal);
  this.isStart = isStart;
  this.isEnd = isEnd;
}

function values_18(){
  $clinit_Touch$Event$Kind();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Touch$Event$Kind_2_classLit, 1), $intern_1, 85, 0, [START_0, MOVE, END_1, CANCEL_0]);
}

defineClass(85, 6, {3:1, 7:1, 6:1, 85:1}, Touch$Event$Kind);
_.isEnd = false;
_.isStart = false;
var CANCEL_0, END_1, MOVE, START_0;
var Lplayn_core_Touch$Event$Kind_2_classLit = createForEnum('playn.core', 'Touch/Event/Kind', 85, Ljava_lang_Enum_2_classLit, values_18);
function $clinit_TriangleBatch(){
  $clinit_TriangleBatch = emptyMethod;
  QUAD_INDICES = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_22, 22, 15, [0, 1, 2, 1, 3, 2]);
}

function $addElems(this$static, vertIdx, indices, indicesLen){
  var data_0, ii, ll, offset;
  data_0 = this$static.elements;
  offset = this$static.elemPos;
  for (ii = 0 , ll = indicesLen; ii < ll; ii++) {
    data_0[offset++] = vertIdx + indices[ii] << 16 >> 16;
  }
  this$static.elemPos = offset;
}

function $beginPrimitive(this$static){
  var availElems, availVerts, elems, vertIdx, verts;
  vertIdx = this$static.vertPos / 12 | 0;
  verts = vertIdx + 4;
  elems = this$static.elemPos + 6;
  availVerts = this$static.vertices.length / 12 | 0;
  availElems = this$static.elements.length;
  if (verts <= availVerts && elems <= availElems)
    return vertIdx;
  $flush_0(this$static);
  verts > availVerts && $expandVerts(this$static, verts);
  elems > availElems && $expandElems(this$static, elems);
  return 0;
}

function $bindAttribsBufs(this$static){
  $glBindBuffer(this$static.gl, $intern_33, this$static.verticesId);
  $glBindVertAttrib(this$static, this$static.aMatrix, 4, 0);
  $glBindVertAttrib(this$static, this$static.aTranslation, 2, 16);
  $glBindVertAttrib(this$static, this$static.aColor, 2, 24);
  $glBindVertAttrib(this$static, this$static.aPosition, 2, 32);
  $glBindVertAttrib(this$static, this$static.aTexCoord, 2, 40);
  $glBindBuffer(this$static.gl, $intern_34, this$static.elementsId);
  this$static.gl.gl.activeTexture(33984);
  $glUniform1i(this$static.gl, this$static.uTexture);
}

function $expandElems(this$static, elemCount){
  var newElems;
  newElems = this$static.elements.length;
  while (newElems < elemCount)
    newElems += 96;
  this$static.elements = initUnidimensionalArray(S_classLit, $intern_35, 22, newElems, 15, 1);
}

function $expandVerts(this$static, vertCount){
  var newVerts;
  newVerts = this$static.vertices.length / 12 | 0;
  while (newVerts < vertCount)
    newVerts += 64;
  this$static.vertices = initUnidimensionalArray(F_classLit, $intern_36, 22, newVerts * 12, 15, 1);
}

function $flush_0(this$static){
  $flush(this$static);
  if (this$static.vertPos > 0) {
    $glBindTexture(this$static.gl, this$static.curTexId);
    $checkError(this$static.gl);
    if (this$static.delayedBinding) {
      $bindAttribsBufs(this$static);
      $checkError(this$static.gl);
    }
    $setFloatBuffer(this$static.gl.bufs, this$static.vertices, this$static.vertPos);
    $glBufferData(this$static.gl, $intern_33, this$static.vertPos * 4, this$static.gl.bufs.floatBuffer, 35040);
    $setShortBuffer(this$static.gl.bufs, this$static.elements, this$static.elemPos);
    $glBufferData(this$static.gl, $intern_34, this$static.elemPos * 2, this$static.gl.bufs.shortBuffer, 35040);
    $checkError(this$static.gl);
    $glDrawElements(this$static.gl, this$static.elemPos);
    $checkError(this$static.gl);
    this$static.vertPos = 0;
    this$static.elemPos = 0;
  }
}

function $glBindVertAttrib(this$static, loc, size_0, offset){
  $glEnableVertexAttribArray(this$static.gl, loc);
  $glVertexAttribPointer(this$static.gl, loc, size_0, 5126, 48, offset);
}

function TriangleBatch(gl){
  var ids;
  $clinit_TriangleBatch();
  this.gl = gl;
  this.delayedBinding = $equals_0('Intel', gl.gl.getParameter(7936));
  this.program = new GLProgram(gl, 'uniform vec2 u_HScreenSize;\nuniform float u_Flip;\nattribute vec4 a_Matrix;\nattribute vec2 a_Translation;\nattribute vec2 a_Color;\nattribute vec2 a_Position;\nattribute vec2 a_TexCoord;\nvarying vec2 v_TexCoord;\nvarying vec4 v_Color;\nvoid main(void) {\nmat3 transform = mat3(\n  a_Matrix[0],      a_Matrix[1],      0,\n  a_Matrix[2],      a_Matrix[3],      0,\n  a_Translation[0], a_Translation[1], 1);\ngl_Position = vec4(transform * vec3(a_Position, 1.0), 1);\ngl_Position.xy /= u_HScreenSize.xy;\ngl_Position.xy -= 1.0;\ngl_Position.y *= u_Flip;\nv_TexCoord = a_TexCoord;\nfloat red = mod(a_Color.x, 256.0);\nfloat alpha = (a_Color.x - red) / 256.0;\nfloat blue = mod(a_Color.y, 256.0);\nfloat green = (a_Color.y - blue) / 256.0;\nv_Color = vec4(red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0);\n}', $fragment());
  this.uTexture = $getUniformLocation_0(this.program, 'u_Texture');
  this.uHScreenSize = $getUniformLocation_0(this.program, 'u_HScreenSize');
  this.uFlip = $getUniformLocation_0(this.program, 'u_Flip');
  this.aMatrix = $getAttribLocation_0(this.program, 'a_Matrix');
  this.aTranslation = $getAttribLocation_0(this.program, 'a_Translation');
  this.aColor = $getAttribLocation_0(this.program, 'a_Color');
  this.aPosition = $getAttribLocation_0(this.program, 'a_Position');
  this.aTexCoord = $getAttribLocation_0(this.program, 'a_TexCoord');
  this.stableAttrs = initUnidimensionalArray(F_classLit, $intern_36, 22, 8, 15, 1);
  this.vertices = initUnidimensionalArray(F_classLit, $intern_36, 22, 768, 15, 1);
  this.elements = initUnidimensionalArray(S_classLit, $intern_35, 22, 96, 15, 1);
  ids = initUnidimensionalArray(I_classLit, $intern_22, 22, 2, 15, 1);
  $glGenBuffers(gl, ids);
  this.verticesId = ids[0];
  this.elementsId = ids[1];
  $checkError(gl);
}

function add_8(into, offset, x_0, y_0, sx, sy){
  into[offset++] = x_0;
  into[offset++] = y_0;
  into[offset++] = sx;
  into[offset++] = sy;
  return offset;
}

defineClass(187, 185, $intern_29, TriangleBatch);
_.addQuad = function addQuad(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var offset, stables, vertIdx, verts, stables_0;
  stables_0 = this.stableAttrs;
  stables_0[0] = m00;
  stables_0[1] = m01;
  stables_0[2] = m10;
  stables_0[3] = m11;
  stables_0[4] = tx;
  stables_0[5] = ty;
  stables_0[6] = tint >> 16 & $intern_20;
  stables_0[7] = tint & $intern_20;
  vertIdx = $beginPrimitive(this);
  offset = this.vertPos;
  verts = this.vertices;
  stables = this.stableAttrs;
  offset = add_8(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x1, y1, sx1, sy1);
  offset = add_8(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x2, y2, sx2, sy2);
  offset = add_8(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x3, y3, sx3, sy3);
  offset = add_8(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x4, y4, sx4, sy4);
  this.vertPos = offset;
  $addElems(this, vertIdx, QUAD_INDICES, QUAD_INDICES.length);
}
;
_.begin = function begin_0(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  this.delayedBinding || $bindAttribsBufs(this);
  $checkError(this.gl);
}
;
_.close_0 = function close_14(){
  $close_0(this);
  $close_1(this.program);
  $glDeleteBuffers(this.gl, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_22, 22, 15, [this.verticesId, this.elementsId]));
  $checkError(this.gl);
}
;
_.end = function end_1(){
  $end(this);
  this.curTexId = 0;
  $glDisableVertexAttribArray(this.gl, this.aMatrix);
  $glDisableVertexAttribArray(this.gl, this.aTranslation);
  $glDisableVertexAttribArray(this.gl, this.aColor);
  $glDisableVertexAttribArray(this.gl, this.aPosition);
  $glDisableVertexAttribArray(this.gl, this.aTexCoord);
  $checkError(this.gl);
}
;
_.flush = function flush_2(){
  $flush_0(this);
}
;
_.toString_0 = function toString_46(){
  return 'tris/' + (this.elements.length / QUAD_INDICES.length | 0);
}
;
_.aColor = 0;
_.aMatrix = 0;
_.aPosition = 0;
_.aTexCoord = 0;
_.aTranslation = 0;
_.delayedBinding = false;
_.elemPos = 0;
_.elementsId = 0;
_.uFlip = 0;
_.uHScreenSize = 0;
_.uTexture = 0;
_.vertPos = 0;
_.verticesId = 0;
var QUAD_INDICES;
var Lplayn_core_TriangleBatch_2_classLit = createForClass('playn.core', 'TriangleBatch', 187, Lplayn_core_QuadBatch_2_classLit);
function $flush_1(this$static){
  $flush(this$static);
  if (this$static.quadCounter > 0) {
    $glBindTexture(this$static.gl, this$static.curTexId);
    $checkError(this$static.gl);
    $glUniform4fv(this$static.gl, this$static.uData, this$static.quadCounter * 3, this$static.data_0);
    $glDrawElements(this$static.gl, this$static.quadCounter * 6);
    $checkError(this$static.gl);
    this$static.quadCounter = 0;
  }
}

function UniformQuadBatch(gl){
  UniformQuadBatch_0.call(this, gl);
}

function UniformQuadBatch_0(gl){
  var base, base0, base1, base2, base3, ee, elems, ids, ii, maxVecs, verts, vv;
  this.gl = gl;
  maxVecs = usableMaxUniformVectors(gl);
  if (maxVecs < 3)
    throw toJs(new RuntimeException_0('GL_MAX_VERTEX_UNIFORM_VECTORS too low: have ' + maxVecs + ', need at least ' + 3));
  this.maxQuads = maxVecs / 3 | 0;
  this.program = new GLProgram(gl, $replace($replace('uniform vec2 u_HScreenSize;\nuniform float u_Flip;\nuniform vec4 u_Data[_VEC4S_PER_QUAD_*_MAX_QUADS_];\nattribute vec3 a_Vertex;\nvarying vec2 v_TexCoord;\nvarying vec4 v_Color;\nvoid main(void) {\nint index = _VEC4S_PER_QUAD_*int(a_Vertex.z);\nvec4 mat = u_Data[index+0];\nvec4 txc = u_Data[index+1];\nvec4 tcs = u_Data[index+2];\nmat3 transform = mat3(\n  mat.x, mat.y, 0,\n  mat.z, mat.w, 0,\n  txc.x, txc.y, 1);\ngl_Position = vec4(transform * vec3(a_Vertex.xy, 1.0), 1.0);\ngl_Position.xy /= u_HScreenSize.xy;\ngl_Position.xy -= 1.0;\ngl_Position.y *= u_Flip;\nv_TexCoord = a_Vertex.xy * tcs.xy + txc.zw;\nfloat red = mod(tcs.z, 256.0);\nfloat alpha = (tcs.z - red) / 256.0;\nfloat blue = mod(tcs.w, 256.0);\nfloat green = (tcs.w - blue) / 256.0;\nv_Color = vec4(red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0);\n}', '_MAX_QUADS_', '' + this.maxQuads), '_VEC4S_PER_QUAD_', '3'), $fragment());
  this.uTexture = $getUniformLocation_0(this.program, 'u_Texture');
  this.uHScreenSize = $getUniformLocation_0(this.program, 'u_HScreenSize');
  this.uFlip = $getUniformLocation_0(this.program, 'u_Flip');
  this.uData = $getUniformLocation_0(this.program, 'u_Data');
  this.aVertex = $getAttribLocation_0(this.program, 'a_Vertex');
  verts = initUnidimensionalArray(S_classLit, $intern_35, 22, this.maxQuads * 4 * 3, 15, 1);
  elems = initUnidimensionalArray(S_classLit, $intern_35, 22, this.maxQuads * 6, 15, 1);
  vv = 0;
  ee = 0;
  for (ii = 0; ii < this.maxQuads; ii++) {
    verts[vv++] = 0;
    verts[vv++] = 0;
    verts[vv++] = ii;
    verts[vv++] = 1;
    verts[vv++] = 0;
    verts[vv++] = ii;
    verts[vv++] = 0;
    verts[vv++] = 1;
    verts[vv++] = ii;
    verts[vv++] = 1;
    verts[vv++] = 1;
    verts[vv++] = ii;
    base = ii * 4 << 16 >> 16;
    base0 = base;
    base1 = ++base;
    base2 = ++base;
    base3 = ++base;
    elems[ee++] = base0;
    elems[ee++] = base1;
    elems[ee++] = base2;
    elems[ee++] = base1;
    elems[ee++] = base3;
    elems[ee++] = base2;
  }
  this.data_0 = initUnidimensionalArray(F_classLit, $intern_36, 22, this.maxQuads * 3 * 4, 15, 1);
  ids = initUnidimensionalArray(I_classLit, $intern_22, 22, 2, 15, 1);
  $glGenBuffers(gl, ids);
  this.verticesId = ids[0];
  this.elementsId = ids[1];
  $glBindBuffer(gl, $intern_33, this.verticesId);
  $setShortBuffer(gl.bufs, verts, verts.length);
  $glBufferData(gl, $intern_33, verts.length * 2, gl.bufs.shortBuffer, 35044);
  $glBindBuffer(gl, $intern_34, this.elementsId);
  $setShortBuffer(gl.bufs, elems, elems.length);
  $glBufferData(gl, $intern_34, elems.length * 2, gl.bufs.shortBuffer, 35044);
  $checkError(gl);
}

function usableMaxUniformVectors(gl){
  var glErr, maxVecs;
  maxVecs = gl.gl.getParameter(36347) - 3;
  glErr = gl.gl.getError();
  if (glErr != 0)
    throw toJs(new RuntimeException_0('Unable to query GL_MAX_VERTEX_UNIFORM_VECTORS,  error ' + glErr));
  return maxVecs;
}

defineClass(186, 185, $intern_29, UniformQuadBatch);
_.addQuad = function addQuad_0(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var dh, dw, pos;
  pos = this.quadCounter * 3 * 4;
  dw = x2 - x1;
  dh = y3 - y1;
  this.data_0[pos++] = m00 * dw;
  this.data_0[pos++] = m01 * dw;
  this.data_0[pos++] = m10 * dh;
  this.data_0[pos++] = m11 * dh;
  this.data_0[pos++] = tx + m00 * x1 + m10 * y1;
  this.data_0[pos++] = ty + m01 * x1 + m11 * y1;
  this.data_0[pos++] = sx1;
  this.data_0[pos++] = sy1;
  this.data_0[pos++] = sx2 - sx1;
  this.data_0[pos++] = sy3 - sy1;
  this.data_0[pos++] = tint >> 16 & $intern_20;
  this.data_0[pos++] = tint & $intern_20;
  ++this.quadCounter;
  this.quadCounter >= this.maxQuads && $flush_1(this);
}
;
_.begin = function begin_1(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  $glBindBuffer(this.gl, $intern_33, this.verticesId);
  $glEnableVertexAttribArray(this.gl, this.aVertex);
  $glVertexAttribPointer(this.gl, this.aVertex, 3, 5122, 0, 0);
  $glBindBuffer(this.gl, $intern_34, this.elementsId);
  this.gl.gl.activeTexture(33984);
  $glUniform1i(this.gl, this.uTexture);
  $checkError(this.gl);
}
;
_.close_0 = function close_15(){
  $close_0(this);
  $close_1(this.program);
  $glDeleteBuffers(this.gl, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_22, 22, 15, [this.verticesId, this.elementsId]));
  $checkError(this.gl);
}
;
_.end = function end_2(){
  $end(this);
  this.curTexId = 0;
  $glDisableVertexAttribArray(this.gl, this.aVertex);
  $checkError(this.gl);
}
;
_.flush = function flush_3(){
  $flush_1(this);
}
;
_.toString_0 = function toString_47(){
  return 'uquad/' + this.maxQuads;
}
;
_.aVertex = 0;
_.elementsId = 0;
_.maxQuads = 0;
_.quadCounter = 0;
_.uData = 0;
_.uFlip = 0;
_.uHScreenSize = 0;
_.uTexture = 0;
_.verticesId = 0;
var Lplayn_core_UniformQuadBatch_2_classLit = createForClass('playn.core', 'UniformQuadBatch', 186, Lplayn_core_QuadBatch_2_classLit);
function $getBundle(this$static, collection){
  var clientBundle, entry, entry$iterator, regExp;
  clientBundle = null;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.clientBundles)).this$01); entry$iterator.hasNext;) {
    entry = $next_0(entry$iterator);
    regExp = entry.getKey();
    !!$exec(new RegExp(regExp), collection) && (clientBundle = entry.getValue());
  }
  return clientBundle;
}

function $getImage(this$static, path){
  var assetScale, rsrcs;
  assetScale = ($clinit_Scale() , ONE_0);
  rsrcs = $getScaledResources(assetScale, path);
  return $getImage_0(this$static, (checkCriticalElementIndex(0, rsrcs.array.length) , rsrcs.array[0]).path, (checkCriticalElementIndex(0, rsrcs.array.length) , rsrcs.array[0]).scale_0);
}

function $getImage_0(this$static, path, scale){
  var url_0, img;
  url_0 = this$static.pathPrefix + ('' + path);
  $getBundle(this$static, path);
  return img = $doc.createElement('img') , 'crossOrigin' in img && img.setAttribute('crossOrigin', 'anonymous') , img.src = url_0 , new HtmlImage_0(this$static.plat.graphics, scale, img, url_0);
}

function HtmlAssets(plat){
  this.clientBundles = new HashMap;
  this.pathPrefix = ($clinit_Impl() , $moduleBase);
  this.plat = plat;
}

defineClass(250, 526, {}, HtmlAssets);
var Lplayn_html_HtmlAssets_2_classLit = createForClass('playn.html', 'HtmlAssets', 250, Lplayn_core_Assets_2_classLit);
function HtmlAudio(plat){
  var types;
  this.soundController = new SoundController;
  types = this.soundController.preferredSoundTypes;
  $debug(plat.log_0, 'Preferred sound type(s): ' + types);
  maybeCreateAudioContext();
}

function maybeCreateAudioContext(){
  try {
    return new AudioContext;
  }
   catch (ignore) {
  }
  try {
    return new webkitAudioContext;
  }
   catch (ignore) {
  }
  return null;
}

defineClass(285, 528, {}, HtmlAudio);
var Lplayn_html_HtmlAudio_2_classLit = createForClass('playn.html', 'HtmlAudio', 285, Lplayn_core_Audio_2_classLit);
function $fillRect_1(this$static, w, h){
  $fillRect(this$static.ctx, 0, 0, w, h);
  return this$static;
}

function $fillRoundRect(this$static, x_0, y_0, w, h, radius){
  var midx, midy, maxx, maxy;
  midx = x_0 + w / 2;
  midy = y_0 + h / 2;
  maxx = x_0 + w;
  maxy = y_0 + h;
  this$static.ctx.beginPath();
  $moveTo(this$static.ctx, x_0, midy);
  $arcTo(this$static.ctx, x_0, y_0, midx, y_0, radius);
  $arcTo(this$static.ctx, maxx, y_0, maxx, midy, radius);
  $arcTo(this$static.ctx, maxx, maxy, midx, maxy, radius);
  $arcTo(this$static.ctx, x_0, maxy, x_0, midy, radius);
  this$static.ctx.closePath();
  this$static.ctx.fill();
  return this$static;
}

function $setFillColor_0(this$static, color_0){
  $setFillStyleWeb(this$static.ctx, cssColorString(color_0));
  return this$static;
}

function HtmlCanvas(image){
  var scale;
  Canvas_0.call(this, image);
  this.ctx = image.canvas.getContext('2d');
  scale = image.scale_0.factor;
  $scale(this.ctx, scale, scale);
}

defineClass(424, 423, $intern_29, HtmlCanvas);
var Lplayn_html_HtmlCanvas_2_classLit = createForClass('playn.html', 'HtmlCanvas', 424, Lplayn_core_Canvas_2_classLit);
function $getTypedArray(buffer, type_0, byteSize){
  var arrayHolder, bufferElementSize, byteOffset, webGLArray;
  if (!instanceOf(buffer, 163)) {
    throw toJs(new RuntimeException_0('Native buffer required ' + buffer));
  }
  arrayHolder = buffer;
  bufferElementSize = arrayHolder.getElementSize();
  webGLArray = arrayHolder.getTypedArray();
  byteSize == -1 && (byteSize = (buffer.limit - buffer.position_0) * bufferElementSize);
  if (byteSize == buffer.capacity * bufferElementSize && type_0 == arrayHolder.getElementType()) {
    return webGLArray;
  }
  byteOffset = webGLArray.byteOffset + buffer.position_0 * bufferElementSize;
  switch (type_0) {
    case 5126:
      return create_1(webGLArray.buffer, byteOffset, byteSize / 4 | 0);
    case 5121:
      return create_6(webGLArray.buffer, byteOffset, byteSize);
    case 5123:
      return create_5(webGLArray.buffer, byteOffset, byteSize / 2 | 0);
    case 5124:
      return create_3(webGLArray.buffer, byteOffset, byteSize / 4 | 0);
    case 5122:
      return create_2(webGLArray.buffer, byteOffset, byteSize / 2 | 0);
    case 5120:
      return create_4(webGLArray.buffer, byteOffset, byteSize);
    default:throw toJs(new IllegalArgumentException_0('Type: ' + type_0));
  }
}

function $glAttachShader(this$static, program, shader){
  var glProgram, glShader;
  glProgram = this$static.programs[program];
  glShader = this$static.shaders[shader];
  $attachShader(this$static.gl, glProgram, glShader);
}

function $glBindBuffer(this$static, target, buffer){
  var webGlBuf;
  webGlBuf = this$static.buffers[buffer];
  target == $intern_33?(this$static.requestedArrayBuffer = webGlBuf):target == $intern_34?(this$static.requestedElementArrayBuffer = webGlBuf):$bindBuffer(this$static.gl, target, webGlBuf);
}

function $glBindFramebuffer(this$static){
  $bindFramebuffer(this$static.gl, 36160, this$static.frameBuffers[0]);
}

function $glBindTexture(this$static, texture){
  $bindTexture(this$static.gl, 3553, this$static.textures[texture]);
}

function $glBufferData(this$static, target, byteSize, data_0, usage){
  if (target == $intern_33) {
    if (this$static.requestedArrayBuffer != this$static.boundArrayBuffer) {
      $bindBuffer(this$static.gl, $intern_33, this$static.requestedArrayBuffer);
      this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
    }
  }
   else if (target == $intern_34) {
    if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
      $bindBuffer(this$static.gl, $intern_34, this$static.requestedElementArrayBuffer);
      this$static.boundElementArrayBuffer = this$static.requestedElementArrayBuffer;
    }
  }
  $bufferData(this$static.gl, target, $getTypedArray(data_0, 5120, byteSize), usage);
}

function $glClearColor(this$static, red, green, blue, alpha_0){
  $clearColor(this$static.gl, red, green, blue, alpha_0);
}

function $glCompileShader(this$static, shader){
  var glShader;
  glShader = this$static.shaders[shader];
  $compileShader(this$static.gl, glShader);
}

function $glCreateShader(this$static, type_0){
  var shader;
  shader = $createShader(this$static.gl, type_0);
  return $add_4(this$static.shaders, shader);
}

function $glDeleteBuffers(this$static, buffers){
  var buffer, i, id_0;
  for (i = 0; i < 2; i++) {
    id_0 = buffers[i];
    buffer = $remove_5(this$static.buffers, id_0);
    $deleteBuffer(this$static.gl, buffer);
  }
}

function $glDeleteFramebuffers(this$static, framebuffers){
  var fb, i, id_0, pos;
  pos = framebuffers.position_0;
  for (i = 0; i < 1; i++) {
    id_0 = framebuffers.intArray[pos + i];
    fb = $remove_5(this$static.frameBuffers, id_0);
    $deleteFramebuffer(this$static.gl, fb);
  }
}

function $glDeleteProgram(this$static, program){
  var prog;
  prog = $remove_5(this$static.programs, program);
  $deleteProgram(this$static.gl, prog);
}

function $glDeleteShader(this$static, shader){
  var sh;
  sh = $remove_5(this$static.shaders, shader);
  $deleteShader(this$static.gl, sh);
}

function $glDeleteTextures(this$static, textures){
  var i, id_0, pos, texture;
  pos = textures.position_0;
  for (i = 0; i < 1; i++) {
    id_0 = textures.intArray[pos + i];
    texture = $remove_5(this$static.textures, id_0);
    $deleteTexture(this$static.gl, texture);
  }
}

function $glDisableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays &= ~(1 << index_0);
}

function $glDrawElements(this$static, count){
  $prepareDraw(this$static);
  if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
    $bindBuffer(this$static.gl, $intern_34, this$static.requestedElementArrayBuffer);
    this$static.boundElementArrayBuffer = this$static.requestedElementArrayBuffer;
  }
  $drawElements(this$static.gl, 4, count, 5123, 0);
}

function $glEnableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays |= 1 << index_0;
}

function $glGenBuffers(this$static, buffers){
  var buffer, i, id_0;
  for (i = 0; i < 2; i++) {
    buffer = this$static.gl.createBuffer();
    id_0 = $add_4(this$static.buffers, buffer);
    buffers[i] = id_0;
  }
}

function $glGenTextures(this$static, textures){
  var i, id_0, pos, texture;
  pos = textures.position_0;
  for (i = 0; i < 1; i++) {
    texture = this$static.gl.createTexture();
    id_0 = $add_4(this$static.textures, texture);
    textures.intArray[pos + i] = id_0;
  }
}

function $glGetAttribLocation(this$static, program, name_0){
  var prog;
  prog = this$static.programs[program];
  return $getAttribLocation(this$static.gl, prog, name_0);
}

function $glGetShaderInfoLog(this$static, shader){
  return $getShaderInfoLog(this$static.gl, this$static.shaders[shader]);
}

function $glGetShaderiv(this$static, shader, params){
  params[0] = $getShaderParameterb(this$static.gl, this$static.shaders[shader], 35713)?1:0;
}

function $glGetUniformLocation(this$static, program, name_0){
  var id_0, location_0, progUniforms;
  location_0 = $getUniformLocation(this$static.gl, this$static.programs[program], name_0);
  progUniforms = this$static.uniforms[program];
  if (!progUniforms) {
    progUniforms = [undefined];
    this$static.uniforms[program] = progUniforms;
  }
  id_0 = $add_4(progUniforms, location_0);
  return id_0;
}

function $glScissor(this$static, x_0, y_0, width_0, height){
  $scissor(this$static.gl, x_0, y_0, width_0, height);
}

function $glShaderSource(this$static, shader, string){
  $shaderSource(this$static.gl, this$static.shaders[shader], string);
}

function $glTexImage2D(this$static, image){
  $texImage2D(this$static.gl, 3553, 0, 6408, 6408, 5121, image);
  $checkError(this$static);
}

function $glTexParameteri(this$static, glTextureMinFilter, glFilterMin){
  $texParameteri(this$static.gl, 3553, glTextureMinFilter, glFilterMin);
}

function $glUniform1f(this$static, location_0, x_0){
  $uniform1f(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], x_0);
}

function $glUniform1i(this$static, location_0){
  $uniform1i(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], 0);
}

function $glUniform2f(this$static, location_0, x_0, y_0){
  $uniform2f(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], x_0, y_0);
}

function $glUniform4fv_0(this$static, location_0, count, v){
  $uniform4fv(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], $getTypedArray(v, 5126, 16 * count));
}

function $glUseProgram(this$static, program){
  this$static.currProgram = program;
  $useProgram(this$static.gl, this$static.programs[program]);
}

function $glVertexAttribPointer(this$static, indx, size_0, type_0, stride, ptr){
  this$static.useNioBuffer &= ~(1 << indx);
  if (this$static.boundArrayBuffer != this$static.requestedArrayBuffer) {
    $bindBuffer(this$static.gl, $intern_33, this$static.requestedArrayBuffer);
    this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
  }
  $vertexAttribPointer(this$static.gl, indx, size_0, type_0, false, stride, ptr);
}

function $glViewport(this$static, w, h){
  $viewport(this$static.gl, 0, 0, w, h);
}

function $init(this$static, gl){
  var data_0, ii;
  gl.pixelStorei(37441, 1);
  this$static.gl = gl;
  gl.createBuffer();
  for (ii = 0; ii < 5; ii++) {
    data_0 = new HtmlGL20$VertexAttribArrayState;
    data_0.webGlBuffer = gl.createBuffer();
    this$static.vertexAttribArrayState[ii] = data_0;
  }
}

function $prepareDraw(this$static){
  var data_0, elementSize, enabled, i, mask, previousElementSize, previousNio;
  previousNio = null;
  previousElementSize = 0;
  if (this$static.useNioBuffer == 0 && this$static.enabledArrays == this$static.previouslyEnabledArrays) {
    return;
  }
  for (i = 0; i < 5; i++) {
    mask = 1 << i;
    enabled = this$static.enabledArrays & mask;
    enabled != (this$static.previouslyEnabledArrays & mask) && (enabled != 0?$enableVertexAttribArray(this$static.gl, i):$disableVertexAttribArray(this$static.gl, i));
    if (enabled != 0 && (this$static.useNioBuffer & mask) != 0) {
      data_0 = this$static.vertexAttribArrayState[i];
      if (!!previousNio && previousNio.nioBufferLimit >= data_0.nioBufferLimit) {
        if (this$static.boundArrayBuffer != previousNio.webGlBuffer) {
          $bindBuffer(this$static.gl, $intern_33, previousNio.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        $vertexAttribPointer(this$static.gl, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * previousElementSize);
      }
       else {
        if (this$static.boundArrayBuffer != data_0.webGlBuffer) {
          $bindBuffer(this$static.gl, $intern_33, data_0.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        elementSize = getElementSize_3();
        null.$_nullMethod();
        if (data_0.nioBufferPosition * elementSize < data_0.stride) {
          null.$_nullMethod();
          $bufferData(this$static.gl, $intern_33, $getTypedArray(data_0.nioBuffer, data_0.type_0, data_0.nioBufferLimit * elementSize), 35040);
          $vertexAttribPointer(this$static.gl, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * elementSize);
          previousNio = data_0;
          previousElementSize = elementSize;
        }
         else {
          null.$_nullMethod();
          $bufferData(this$static.gl, $intern_33, $getTypedArray(data_0.nioBuffer, data_0.type_0, (data_0.nioBufferLimit - data_0.nioBufferPosition) * elementSize), 35040);
          $vertexAttribPointer(this$static.gl, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, 0);
        }
        null.$_nullMethod();
      }
    }
  }
  this$static.previouslyEnabledArrays = this$static.enabledArrays;
}

function HtmlGL20(){
  GL20.call(this, new HtmlGL20$1, ($clinit_HtmlUrlParameters() , checkGLErrors));
  this.programs = [undefined];
  this.shaders = [undefined];
  this.buffers = [undefined];
  this.frameBuffers = [undefined];
  this.textures = [undefined];
  this.uniforms = [undefined];
  this.vertexAttribArrayState = initUnidimensionalArray(Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit, $intern_1, 142, 5, 0, 1);
}

function getElementSize_3(){
  throw toJs(new RuntimeException_0('Unrecognized buffer type: ' + null.$_nullMethod()));
}

defineClass(349, 348, {}, HtmlGL20);
_.currProgram = 0;
_.enabledArrays = 0;
_.previouslyEnabledArrays = 0;
_.useNioBuffer = 0;
var Lplayn_html_HtmlGL20_2_classLit = createForClass('playn.html', 'HtmlGL20', 349, Lplayn_core_GL20_2_classLit);
function $createByteBuffer(size_0){
  var buffer;
  buffer = allocateDirect(size_0);
  $order(buffer, ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER));
  return buffer;
}

function HtmlGL20$1(){
  this.intBuffer = $asIntBuffer($createByteBuffer(128));
  this.floatBuffer = new FloatBuffer($slice($createByteBuffer(128)));
  this.shortBuffer = $asShortBuffer($createByteBuffer(64));
  $createByteBuffer(256);
}

defineClass(351, 350, {}, HtmlGL20$1);
var Lplayn_html_HtmlGL20$1_2_classLit = createForClass('playn.html', 'HtmlGL20/1', 351, Lplayn_core_GL20$Buffers_2_classLit);
function $add_4(this$static, value_0){
  this$static.push(value_0);
  return this$static.length - 1;
}

function $remove_5(this$static, key){
  var value_0 = this$static[key];
  delete this$static[key];
  return value_0;
}

function HtmlGL20$VertexAttribArrayState(){
}

defineClass(142, 1, {142:1}, HtmlGL20$VertexAttribArrayState);
_.nioBufferLimit = 0;
_.nioBufferPosition = 0;
_.normalize = false;
_.size_0 = 0;
_.stride = 0;
_.type_0 = 0;
var Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit = createForClass('playn.html', 'HtmlGL20/VertexAttribArrayState', 142, Ljava_lang_Object_2_classLit);
function $createCanvasImpl(this$static, scale, pixelWidth, pixelHeight){
  var elem;
  elem = $doc.createElement('canvas');
  elem.width = pixelWidth;
  elem.height = pixelHeight;
  return new HtmlCanvas(new HtmlImage(this$static, scale, elem));
}

function $setSize(this$static, width_0, height){
  var fbScale;
  this$static.rootElement.style['width'] = width_0 + ($clinit_Style$Unit() , 'px');
  this$static.rootElement.style['height'] = height + 'px';
  fbScale = new Scale(this$static.frameBufferPixelRatio);
  $setWidth(this$static.canvas, iceil(fbScale.factor * width_0));
  $setHeight(this$static.canvas, iceil(fbScale.factor * height));
  this$static.canvas.style['width'] = width_0 + 'px';
  this$static.canvas.style['height'] = height + 'px';
  $viewportChanged(this$static, this$static.canvas.width, this$static.canvas.height);
}

function $transformMouse(this$static, x_0, y_0){
  return $set_3(this$static.mousePoint, x_0 / this$static.mouseScale, y_0 / this$static.mouseScale);
}

function $updateTexture(this$static, tex, img){
  $glBindTexture(this$static.gl, tex);
  $glTexImage2D(this$static.gl, img);
}

function HtmlGraphics(plat, config){
  var attrs, doc, glc, root;
  Graphics.call(this, plat, new HtmlGL20, new Scale(config.scaleFactor));
  new HashMap;
  this.mousePoint = new Point;
  new Dimension;
  this.frameBufferPixelRatio = config.frameBufferPixelRatio;
  this.mouseScale = config.scaleFactor / this.frameBufferPixelRatio;
  doc = $doc;
  this.dummyCanvas = doc.createElement('canvas');
  this.dummyCanvas.getContext('2d');
  root = $getElementById(doc, config.rootId);
  if (!root) {
    root = doc.createElement('div');
    root.setAttribute('style', 'width: 640px; height: 480px');
    $appendChild(doc.body, root);
  }
   else {
    root.innerHTML = '';
  }
  this.rootElement = root;
  this.measureElement = doc.createElement('div');
  this.measureElement.style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
  this.measureElement.style['position'] = ($clinit_Style$Position() , 'absolute');
  this.measureElement.style['top'] = ($clinit_Style$Unit() , '-500.0px');
  this.measureElement.style['overflow'] = ($clinit_Style$Overflow() , 'visible');
  this.measureElement.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'nowrap');
  $appendChild(root, this.measureElement);
  this.canvas = $doc.createElement('canvas');
  $appendChild(root, this.canvas);
  $setSize(this, (root.offsetWidth || 0) | 0, (root.offsetHeight || 0) | 0);
  attrs = {premultipliedAlpha:false};
  attrs.alpha = false;
  $setAntialias(attrs, config.antiAliasing);
  glc = getContext(this.canvas, attrs);
  if (!glc)
    throw toJs(new RuntimeException_0('Unable to create GL context'));
  $init(this.gl, glc);
}

function cssColorString(color_0){
  var a, b, g, r;
  a = (color_0 >> 24 & 255) / 255;
  r = color_0 >> 16 & 255;
  g = color_0 >> 8 & 255;
  b = color_0 & 255;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

defineClass(264, 263, {}, HtmlGraphics);
_.frameBufferPixelRatio = 0;
_.mouseScale = 0;
var experimentalScale = 1;
var Lplayn_html_HtmlGraphics_2_classLit = createForClass('playn.html', 'HtmlGraphics', 264, Lplayn_core_Graphics_2_classLit);
function $createErrorBitmap(pixelWidth, pixelHeight){
  var img;
  img = $doc.createElement('img');
  img.width = pixelWidth;
  img.height = pixelHeight;
  return img;
}

function $draw_0(this$static, ctx, width_0, height){
  $drawImage(ctx, this$static.img, 0, 0, width_0, height);
}

function $setBitmap(this$static, bitmap){
  this$static.img = bitmap;
}

function $upload(this$static, gfx, tex){
  $updateTexture(gfx, tex.id_0, this$static.img);
}

function HtmlImage(gfx, scale, elem){
  ImageImpl.call(this, gfx, scale, elem.width, elem.height, elem);
  this.canvas = elem;
}

function HtmlImage_0(gfx, scale, elem, source){
  var pstate;
  ImageImpl_0.call(this, gfx, ($clinit_RPromise() , new RPromise), scale, elem.width, elem.height, source);
  this.img = elem;
  pstate = this.state;
  if (this.img.complete)
    $complete(pstate, new Try$Success(this));
  else {
    new HtmlInput$EventCloseHandler(this.img, 'load', new HtmlImage$1(this, scale), false);
    new HtmlInput$EventCloseHandler(this.img, 'error', new HtmlImage$2(this), false);
  }
}

defineClass(209, 208, {103:1}, HtmlImage, HtmlImage_0);
_.toString_0 = function toString_48(){
  return 'Image[src=' + this.source + ', scale=' + this.scale_0 + ', size=' + $invScaled(this.scale_0, this.pixelWidth) + 'x' + $invScaled(this.scale_0, this.pixelHeight) + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', img=' + this.img + ', canvas=' + this.canvas + ']';
}
;
var Lplayn_html_HtmlImage_2_classLit = createForClass('playn.html', 'HtmlImage', 209, Lplayn_core_ImageImpl_2_classLit);
function HtmlImage$1(this$0, val$fscale){
  this.this$01 = this$0;
  this.val$fscale2 = val$fscale;
}

defineClass(417, 1, {}, HtmlImage$1);
_.handleEvent = function handleEvent(evt){
  $succeed(this.this$01, new ImageImpl$Data(this.val$fscale2, this.this$01.img, this.this$01.img.width, this.this$01.img.height));
}
;
var Lplayn_html_HtmlImage$1_2_classLit = createForClass('playn.html', 'HtmlImage/1', 417, Ljava_lang_Object_2_classLit);
function HtmlImage$2(this$0){
  this.this$01 = this$0;
}

defineClass(418, 1, {}, HtmlImage$2);
_.handleEvent = function handleEvent_0(evt){
  $fail(this.this$01, new RuntimeException_0('Error loading image ' + this.this$01.img.src));
}
;
var Lplayn_html_HtmlImage$2_2_classLit = createForClass('playn.html', 'HtmlImage/2', 418, Ljava_lang_Object_2_classLit);
function $dispatch_0(this$static, event_0, nevent){
  if (this$static.keyboardEnabled) {
    try {
      $setFlag(event_0, modifierFlags(!!nevent.altKey, !!nevent.ctrlKey, !!nevent.metaKey, !!nevent.shiftKey));
      $dispatchEvent(this$static.plat, this$static.keyboardEvents, event_0);
    }
     finally {
      (event_0.flags & 1) != 0 && (nevent.preventDefault() , undefined);
    }
  }
}

function $dispatch_1(this$static, event_0, nevent){
  if (this$static.mouseEnabled) {
    try {
      $setFlag(event_0, modifierFlags(!!nevent.altKey, !!nevent.ctrlKey, !!nevent.metaKey, !!nevent.shiftKey));
      $dispatchEvent(this$static.plat, this$static.mouseEvents, event_0);
    }
     finally {
      (event_0.flags & 1) != 0 && (nevent.preventDefault() , undefined);
    }
  }
}

function $dispatch_2(this$static, events, nevent){
  var event_0, event$index, event$max;
  if (this$static.touchEnabled) {
    try {
      $dispatchEvent(this$static.plat, this$static.touchEvents, events);
    }
     finally {
      for (event$index = 0 , event$max = events.length; event$index < event$max; ++event$index) {
        event_0 = events[event$index];
        (event_0.flags & 1) != 0 && (nevent.preventDefault() , undefined);
      }
    }
  }
}

function $handleRequestsInUserEventContext(this$static){
  this$static.isRequestingMouseLock && !$isMouseLocked() && $requestMouseLockImpl(this$static.rootElement);
}

function $isMouseLocked(){
  return !!($doc.pointerLockElement || $doc.webkitPointerLockElement || $doc.mozPointerLockElement);
}

function $requestMouseLockImpl(element){
  element.requestPointerLock = element.requestPointerLock || element.webkitRequestPointerLock || element.mozRequestPointerLock;
  element.requestPointerLock && element.requestPointerLock();
}

function $toTouchEvents(this$static, kind, nevent){
  var id_0, nativeTouches, nativeTouchesLen, t, time, touch, touches, x_0, xy, y_0;
  nativeTouches = nevent.changedTouches;
  nativeTouchesLen = nativeTouches.length;
  touches = initUnidimensionalArray(Lplayn_core_Touch$Event_2_classLit, {3:1, 5:1, 560:1}, 115, nativeTouchesLen, 0, 1);
  time = now_3();
  for (t = 0; t < nativeTouchesLen; t++) {
    touch = nativeTouches[t];
    x_0 = $getRelativeX(touch, this$static.rootElement);
    y_0 = $getRelativeY(touch, this$static.rootElement);
    xy = $transformMouse(this$static.plat.graphics, x_0, y_0);
    id_0 = nevent.changedTouches[t].identifier || 0;
    touches[t] = new Touch$Event(time, xy.x_0, xy.y_0, kind, id_0);
  }
  return touches;
}

function HtmlInput(hplat, root){
  this.mouseEvents = ($clinit_AbstractSignal() , new Signal);
  this.touchEvents = new Signal;
  this.keyboardEvents = new Signal;
  this.lastMousePt = new Point;
  this.plat = hplat;
  this.rootElement = root;
  capturePageEvent('keydown', new HtmlInput$1(this));
  capturePageEvent('keypress', new HtmlInput$2(this));
  capturePageEvent('keyup', new HtmlInput$3(this));
  new HtmlInput$EventCloseHandler($doc, 'contextmenu', new HtmlInput$4, false);
  new HtmlInput$EventCloseHandler(this.rootElement, 'mousedown', new HtmlInput$5(this, this), true);
  capturePageEvent('mouseup', new HtmlInput$6(this, this));
  capturePageEvent('mousemove', new HtmlInput$7(this));
  new HtmlInput$EventCloseHandler(this.rootElement, 'mousemove', new HtmlInput$8(this), true);
  new HtmlInput$EventCloseHandler(this.rootElement, getMouseWheelEvent(), new HtmlInput$9(this), true);
  new HtmlInput$EventCloseHandler(this.rootElement, 'touchstart', new HtmlInput$10(this), true);
  capturePageEvent('touchmove', new HtmlInput$11(this));
  capturePageEvent('touchend', new HtmlInput$12(this));
}

function capturePageEvent(name_0, handler){
  return new HtmlInput$EventCloseHandler($doc, name_0, handler, true);
}

function getMouseButton(evt){
  switch ($eventGetButton(evt)) {
    case 1:
      return $clinit_Mouse$ButtonEvent$Id() , LEFT_0;
    case 4:
      return $clinit_Mouse$ButtonEvent$Id() , MIDDLE;
    case 2:
      return $clinit_Mouse$ButtonEvent$Id() , RIGHT_0;
    default:return null;
  }
}

function getMouseWheelEvent(){
  if (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
    return 'DOMMouseScroll';
  }
   else {
    return 'mousewheel';
  }
}

function getMouseWheelVelocity(evt){
  var delta = 0;
  var agentInfo = ($clinit_HtmlPlatform() , agentInfo_0);
  if (agentInfo.isFirefox) {
    agentInfo.isMacOS?(delta = 1 * evt.detail):(delta = 1 * evt.detail / 3);
  }
   else if (agentInfo.isOpera) {
    agentInfo.isLinux?(delta = -1 * evt.wheelDelta / 80):(delta = -1 * evt.wheelDelta / 40);
  }
   else if (agentInfo.isChrome || agentInfo.isSafari || agentInfo.isIE) {
    delta = -1 * evt.wheelDelta / 120;
    Math.abs(delta) < 1 && (agentInfo.isWindows?(delta = -1 * evt.wheelDelta):agentInfo.isMacOS && (delta = -1 * evt.wheelDelta / 3));
  }
  return delta;
}

function getRelativeX(e, target){
  return (((e.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument)) / experimentalScale;
}

function getRelativeY(e, target){
  return (((e.clientY || 0) | 0) - $getAbsoluteTop(target) + ((target.scrollTop || 0) | 0) + $getScrollTop(target.ownerDocument)) / experimentalScale;
}

function keyForCode(keyCode){
  switch (keyCode) {
    case 18:
      return $clinit_Key() , ALT;
    case 8:
      return $clinit_Key() , BACKSPACE;
    case 17:
      return $clinit_Key() , CONTROL;
    case 46:
      return $clinit_Key() , DELETE;
    case 40:
      return $clinit_Key() , DOWN;
    case 35:
      return $clinit_Key() , END;
    case 13:
      return $clinit_Key() , ENTER;
    case 27:
      return $clinit_Key() , ESCAPE;
    case 36:
      return $clinit_Key() , HOME;
    case 37:
      return $clinit_Key() , LEFT;
    case 34:
      return $clinit_Key() , PAGE_DOWN;
    case 33:
      return $clinit_Key() , PAGE_UP;
    case 39:
      return $clinit_Key() , RIGHT;
    case 16:
      return $clinit_Key() , SHIFT;
    case 9:
      return $clinit_Key() , TAB;
    case 38:
      return $clinit_Key() , UP;
    case 19:
      return $clinit_Key() , PAUSE;
    case 20:
      return $clinit_Key() , CAPS_LOCK;
    case 32:
      return $clinit_Key() , SPACE;
    case 45:
      return $clinit_Key() , INSERT;
    case 48:
      return $clinit_Key() , K0;
    case 49:
      return $clinit_Key() , K1;
    case 50:
      return $clinit_Key() , K2;
    case 51:
      return $clinit_Key() , K3;
    case 52:
      return $clinit_Key() , K4;
    case 53:
      return $clinit_Key() , K5;
    case 54:
      return $clinit_Key() , K6;
    case 55:
      return $clinit_Key() , K7;
    case 56:
      return $clinit_Key() , K8;
    case 57:
      return $clinit_Key() , K9;
    case 65:
      return $clinit_Key() , A;
    case 66:
      return $clinit_Key() , B;
    case 67:
      return $clinit_Key() , C;
    case 68:
      return $clinit_Key() , D;
    case 69:
      return $clinit_Key() , E_0;
    case 70:
      return $clinit_Key() , F_0;
    case 71:
      return $clinit_Key() , G;
    case 72:
      return $clinit_Key() , H;
    case 73:
      return $clinit_Key() , I;
    case 74:
      return $clinit_Key() , J;
    case 75:
      return $clinit_Key() , K;
    case 76:
      return $clinit_Key() , L;
    case 77:
      return $clinit_Key() , M;
    case 78:
      return $clinit_Key() , N;
    case 79:
      return $clinit_Key() , O;
    case 80:
      return $clinit_Key() , P;
    case 81:
      return $clinit_Key() , Q;
    case 82:
      return $clinit_Key() , R;
    case 83:
      return $clinit_Key() , S;
    case 84:
      return $clinit_Key() , T;
    case 85:
      return $clinit_Key() , U;
    case 86:
      return $clinit_Key() , V;
    case 87:
      return $clinit_Key() , W;
    case 88:
      return $clinit_Key() , X;
    case 89:
      return $clinit_Key() , Y;
    case 90:
      return $clinit_Key() , Z;
    case 92:
    case 91:
      return $clinit_Key() , WINDOWS;
    case 96:
      return $clinit_Key() , NP0;
    case 97:
      return $clinit_Key() , NP1;
    case 98:
      return $clinit_Key() , NP2;
    case 99:
      return $clinit_Key() , NP3;
    case 100:
      return $clinit_Key() , NP4;
    case 101:
      return $clinit_Key() , NP5;
    case 102:
      return $clinit_Key() , NP6;
    case 103:
      return $clinit_Key() , NP7;
    case 104:
      return $clinit_Key() , NP8;
    case 105:
      return $clinit_Key() , NP9;
    case 106:
      return $clinit_Key() , NP_MULTIPLY;
    case 107:
      return $clinit_Key() , NP_ADD;
    case 109:
      return $clinit_Key() , NP_SUBTRACT;
    case 110:
      return $clinit_Key() , NP_DECIMAL;
    case 111:
      return $clinit_Key() , NP_DIVIDE;
    case 112:
      return $clinit_Key() , F1;
    case 113:
      return $clinit_Key() , F2;
    case 114:
      return $clinit_Key() , F3;
    case 115:
      return $clinit_Key() , F4;
    case 116:
      return $clinit_Key() , F5;
    case 117:
      return $clinit_Key() , F6;
    case 118:
      return $clinit_Key() , F7;
    case 119:
      return $clinit_Key() , F8;
    case 120:
      return $clinit_Key() , F9;
    case 121:
      return $clinit_Key() , F10;
    case 122:
      return $clinit_Key() , F11;
    case 123:
      return $clinit_Key() , F12;
    case 144:
      return $clinit_Key() , NP_NUM_LOCK;
    case 145:
      return $clinit_Key() , SCROLL_LOCK;
    case 186:
      return $clinit_Key() , SEMICOLON;
    case 187:
      return $clinit_Key() , EQUALS;
    case 188:
      return $clinit_Key() , COMMA;
    case 189:
      return $clinit_Key() , MINUS;
    case 190:
      return $clinit_Key() , PERIOD;
    case 191:
      return $clinit_Key() , SLASH;
    case 192:
      return $clinit_Key() , BACKQUOTE;
    case 219:
      return $clinit_Key() , LEFT_BRACKET;
    case 220:
      return $clinit_Key() , BACKSLASH;
    case 221:
      return $clinit_Key() , RIGHT_BRACKET;
    case 222:
      return $clinit_Key() , QUOTE;
    default:return $clinit_Key() , UNKNOWN_0;
  }
}

defineClass(272, 271, {}, HtmlInput);
_.inDragSequence = false;
_.inTouchSequence = false;
_.isRequestingMouseLock = false;
var Lplayn_html_HtmlInput_2_classLit = createForClass('playn.html', 'HtmlInput', 272, Lplayn_core_Input_2_classLit);
function HtmlInput$1(this$0){
  this.this$01 = this$0;
}

defineClass(273, 1, {}, HtmlInput$1);
_.handleEvent = function handleEvent_1(nevent){
  var key;
  key = keyForCode(nevent.keyCode | 0);
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_3(), key, true), nevent);
}
;
var Lplayn_html_HtmlInput$1_2_classLit = createForClass('playn.html', 'HtmlInput/1', 273, Ljava_lang_Object_2_classLit);
function HtmlInput$10(this$0){
  this.this$01 = this$0;
}

defineClass(282, 1, {}, HtmlInput$10);
_.handleEvent = function handleEvent_2(nevent){
  this.this$01.inTouchSequence = true;
  $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , START_0), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$10_2_classLit = createForClass('playn.html', 'HtmlInput/10', 282, Ljava_lang_Object_2_classLit);
function HtmlInput$11(this$0){
  this.this$01 = this$0;
}

defineClass(283, 1, {}, HtmlInput$11);
_.handleEvent = function handleEvent_3(nevent){
  this.this$01.inTouchSequence && $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , MOVE), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$11_2_classLit = createForClass('playn.html', 'HtmlInput/11', 283, Ljava_lang_Object_2_classLit);
function HtmlInput$12(this$0){
  this.this$01 = this$0;
}

defineClass(284, 1, {}, HtmlInput$12);
_.handleEvent = function handleEvent_4(nevent){
  if (this.this$01.inTouchSequence) {
    $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , END_1), nevent), nevent);
    nevent.touches.length == 0 && (this.this$01.inTouchSequence = false);
  }
}
;
var Lplayn_html_HtmlInput$12_2_classLit = createForClass('playn.html', 'HtmlInput/12', 284, Ljava_lang_Object_2_classLit);
function HtmlInput$1XYEventHandler(this$0){
  this.this$01_0 = this$0;
}

defineClass(139, 1, {});
_.handleEvent = function handleEvent_5(ev){
  var xy;
  xy = $transformMouse(this.this$01_0.plat.graphics, getRelativeX(ev, this.this$01_0.rootElement), getRelativeY(ev, this.this$01_0.rootElement));
  this.handleEvent_0(ev, xy.x_0, xy.y_0);
}
;
var Lplayn_html_HtmlInput$1XYEventHandler_2_classLit = createForClass('playn.html', 'HtmlInput/1XYEventHandler', 139, Ljava_lang_Object_2_classLit);
function HtmlInput$1MoveEventHandler(this$0){
  this.this$01 = this$0;
  this.this$01_0 = this$0;
}

defineClass(169, 139, {});
_.handleEvent_0 = function handleEvent_6(ev, x_0, y_0){
  var dx, dy;
  if (this.lastX == -1) {
    this.lastX = x_0;
    this.lastY = y_0;
  }
  if (this.this$01.inDragSequence == this.wantDragSequence()) {
    if ($isMouseLocked()) {
      dx = ev.webkitMovementX;
      dy = ev.webkitMovementY;
    }
     else {
      dx = x_0 - this.lastX;
      dy = y_0 - this.lastY;
    }
    $dispatch_1(this.this$01, new Mouse$MotionEvent(now_3(), x_0, y_0, dx, dy), ev);
  }
  this.lastX = x_0;
  this.lastY = y_0;
  $set_3(this.this$01.lastMousePt, x_0, y_0);
}
;
_.lastX = -1;
_.lastY = -1;
var Lplayn_html_HtmlInput$1MoveEventHandler_2_classLit = createForClass('playn.html', 'HtmlInput/1MoveEventHandler', 169, Lplayn_html_HtmlInput$1XYEventHandler_2_classLit);
function HtmlInput$2(this$0){
  this.this$01 = this$0;
}

defineClass(274, 1, {}, HtmlInput$2);
_.handleEvent = function handleEvent_7(nevent){
  $dispatch_0(this.this$01, new Keyboard$TypedEvent(now_3(), (nevent.charCode || 0) & $intern_20), nevent);
}
;
var Lplayn_html_HtmlInput$2_2_classLit = createForClass('playn.html', 'HtmlInput/2', 274, Ljava_lang_Object_2_classLit);
function HtmlInput$3(this$0){
  this.this$01 = this$0;
}

defineClass(275, 1, {}, HtmlInput$3);
_.handleEvent = function handleEvent_8(nevent){
  var key;
  key = keyForCode(nevent.keyCode | 0);
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_3(), key, false), nevent);
}
;
var Lplayn_html_HtmlInput$3_2_classLit = createForClass('playn.html', 'HtmlInput/3', 275, Ljava_lang_Object_2_classLit);
function HtmlInput$4(){
}

defineClass(276, 1, {}, HtmlInput$4);
_.handleEvent = function handleEvent_9(evt){
  evt.preventDefault();
  evt.stopPropagation();
}
;
var Lplayn_html_HtmlInput$4_2_classLit = createForClass('playn.html', 'HtmlInput/4', 276, Ljava_lang_Object_2_classLit);
function HtmlInput$5(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(277, 139, {}, HtmlInput$5);
_.handleEvent_0 = function handleEvent_10(ev, x_0, y_0){
  var btn;
  this.this$02.inDragSequence = true;
  btn = getMouseButton(ev);
  !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_3(), x_0, y_0, btn, true), ev);
}
;
var Lplayn_html_HtmlInput$5_2_classLit = createForClass('playn.html', 'HtmlInput/5', 277, Lplayn_html_HtmlInput$1XYEventHandler_2_classLit);
function HtmlInput$6(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(278, 139, {}, HtmlInput$6);
_.handleEvent_0 = function handleEvent_11(ev, x_0, y_0){
  var btn;
  if (this.this$02.inDragSequence) {
    this.this$02.inDragSequence = false;
    btn = getMouseButton(ev);
    !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_3(), x_0, y_0, btn, false), ev);
  }
  $handleRequestsInUserEventContext(this.this$02);
}
;
var Lplayn_html_HtmlInput$6_2_classLit = createForClass('playn.html', 'HtmlInput/6', 278, Lplayn_html_HtmlInput$1XYEventHandler_2_classLit);
function HtmlInput$7(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(279, 169, {}, HtmlInput$7);
_.wantDragSequence = function wantDragSequence(){
  return true;
}
;
var Lplayn_html_HtmlInput$7_2_classLit = createForClass('playn.html', 'HtmlInput/7', 279, Lplayn_html_HtmlInput$1MoveEventHandler_2_classLit);
function HtmlInput$8(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(280, 169, {}, HtmlInput$8);
_.wantDragSequence = function wantDragSequence_0(){
  return false;
}
;
var Lplayn_html_HtmlInput$8_2_classLit = createForClass('playn.html', 'HtmlInput/8', 280, Lplayn_html_HtmlInput$1MoveEventHandler_2_classLit);
function HtmlInput$9(this$0){
  this.this$01 = this$0;
}

defineClass(281, 1, {}, HtmlInput$9);
_.handleEvent = function handleEvent_12(ev){
  var vel;
  vel = getMouseWheelVelocity(ev);
  $dispatch_1(this.this$01, new Mouse$WheelEvent(now_3(), this.this$01.lastMousePt.x_0, this.this$01.lastMousePt.y_0, vel), ev);
}
;
var Lplayn_html_HtmlInput$9_2_classLit = createForClass('playn.html', 'HtmlInput/9', 281, Ljava_lang_Object_2_classLit);
function $addEventListener(closeHandler, target, name_0, handler, capture){
  var listener = function(e){
    handler.handleEvent(e);
  }
  ;
  target.addEventListener(name_0, listener, capture);
  closeHandler.setListener(listener);
}

function HtmlInput$EventCloseHandler(target, name_0, eventHandler, capture){
  $addEventListener(this, target, name_0, eventHandler, capture);
}

defineClass(60, 1, {}, HtmlInput$EventCloseHandler);
_.setListener = function setListener(listener){
}
;
var Lplayn_html_HtmlInput$EventCloseHandler_2_classLit = createForClass('playn.html', 'HtmlInput/EventCloseHandler', 60, Ljava_lang_Object_2_classLit);
defineClass(346, 345, {});
var Lplayn_html_HtmlLog_2_classLit = createForClass('playn.html', 'HtmlLog', 346, Lplayn_core_Log_2_classLit);
function HtmlLogSimple(){
  this.minLevel = ($clinit_Log$Level() , DEBUG);
}

defineClass(347, 346, {}, HtmlLogSimple);
var Lplayn_html_HtmlLogSimple_2_classLit = createForClass('playn.html', 'HtmlLogSimple', 347, Lplayn_html_HtmlLog_2_classLit);
function $clinit_HtmlPlatform(){
  var userAgent;
  $clinit_HtmlPlatform = emptyMethod;
  agentInfo_0 = (userAgent = navigator.userAgent.toLowerCase() , {isFirefox:userAgent.indexOf('firefox') != -1, isChrome:userAgent.indexOf('chrome') != -1, isSafari:userAgent.indexOf('safari') != -1, isOpera:userAgent.indexOf('opera') != -1, isIE:userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1, isMacOS:userAgent.indexOf('mac') != -1, isLinux:userAgent.indexOf('linux') != -1, isWindows:userAgent.indexOf('win') != -1});
}

function $listenForVisibilityChange(plat){
  $doc.addEventListener('visibilitychange', function(){
    plat.visibilityChanged();
  }
  , false);
}

function $requestAnimationFrame(callback){
  var fn = function(){
    callback.run();
  }
  ;
  $wnd.requestAnimationFrame?$wnd.requestAnimationFrame(fn):$wnd.mozRequestAnimationFrame?$wnd.mozRequestAnimationFrame(fn):$wnd.webkitRequestAnimationFrame?$wnd.webkitRequestAnimationFrame(fn):$wnd.setTimeout(fn, 20);
}

function $scheduleBackgroundFrame(millis, callback){
  $wnd.setTimeout(function(){
    callback.run();
  }
  , millis);
}

function $tick(this$static){
  return round_int(now_3() - this$static.start_0);
}

function HtmlPlatform(config){
  $clinit_HtmlPlatform();
  var e;
  this.lifecycle = ($clinit_AbstractSignal() , new Signal);
  this.frame_0 = new Signal;
  this.errors = new Signal;
  this.start_0 = initNow();
  this.log_0 = new HtmlLogSimple;
  new HtmlPlatform$1(this);
  setUncaughtExceptionHandler(new HtmlPlatform$2(this));
  $info(this.log_0, 'DPR ' + devicePixelRatio_0() + ' BSPR ' + ($wnd.webkitBackingStorePixelRatio || 1));
  try {
    this.backgroundFrameMillis = 0;
    this.graphics = new HtmlGraphics(this, config);
    this.input_0 = new HtmlInput(this, this.graphics.rootElement);
    new HtmlAudio(this);
    this.assets = new HtmlAssets(this);
    new HtmlStorage;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      $error(this.log_0, e);
      alert_0('failed to init(): ' + e.getMessage());
      throw toJs(new RuntimeException_1(e));
    }
     else 
      throw toJs($e0);
  }
}

function devicePixelRatio_0(){
  $clinit_HtmlPlatform();
  return $wnd.devicePixelRatio || 1;
}

function initNow(){
  function now_0(){
    return +new Date;
  }

  !Date.now && (Date.now = now_0);
  return Date.now();
}

function now_3(){
  $clinit_HtmlPlatform();
  return Date.now();
}

defineClass(227, 136, {136:1}, HtmlPlatform);
_.visibilityChanged = function visibilityChanged(){
  var isHidden;
  isHidden = $doc.hidden;
  $dispatchEvent(this, this.lifecycle, isHidden?($clinit_Platform$Lifecycle() , PAUSE_0):($clinit_Platform$Lifecycle() , RESUME));
  isHidden && this.backgroundFrameMillis > 0 && $scheduleBackgroundFrame(this.backgroundFrameMillis, new HtmlPlatform$4(this));
}
;
_.backgroundFrameMillis = 0;
_.start_0 = 0;
var agentInfo_0;
var Lplayn_html_HtmlPlatform_2_classLit = createForClass('playn.html', 'HtmlPlatform', 227, Lplayn_core_Platform_2_classLit);
function HtmlPlatform$1($anonymous0){
  this.pending = new ArrayList;
  this.running = new ArrayList;
  this.plat = $anonymous0;
  $atPrio($addConnection($anonymous0.frame_0, new Exec$Default$1(this)), 32767);
}

defineClass(239, 238, {}, HtmlPlatform$1);
var Lplayn_html_HtmlPlatform$1_2_classLit = createForClass('playn.html', 'HtmlPlatform/1', 239, Lplayn_core_Exec$Default_2_classLit);
function HtmlPlatform$2(this$0){
  this.this$01 = this$0;
}

defineClass(240, 1, {}, HtmlPlatform$2);
var Lplayn_html_HtmlPlatform$2_2_classLit = createForClass('playn.html', 'HtmlPlatform/2', 240, Ljava_lang_Object_2_classLit);
function HtmlPlatform$3(this$0){
  this.this$01 = this$0;
}

defineClass(229, 1, $intern_37, HtmlPlatform$3);
_.run = function run_1(){
  $requestAnimationFrame(this);
  $emitFrame(this.this$01);
}
;
var Lplayn_html_HtmlPlatform$3_2_classLit = createForClass('playn.html', 'HtmlPlatform/3', 229, Ljava_lang_Object_2_classLit);
function HtmlPlatform$4(this$0){
  this.this$01 = this$0;
}

defineClass(241, 1, $intern_37, HtmlPlatform$4);
_.run = function run_2(){
  if ($doc.hidden) {
    $scheduleBackgroundFrame(this.this$01.backgroundFrameMillis, this);
    $emitFrame(this.this$01);
  }
}
;
var Lplayn_html_HtmlPlatform$4_2_classLit = createForClass('playn.html', 'HtmlPlatform/4', 241, Ljava_lang_Object_2_classLit);
function HtmlPlatform$Config(){
  requestedMode();
  this.scaleFactor = devicePixelRatio_0();
  this.frameBufferPixelRatio = devicePixelRatio_0();
}

defineClass(226, 1, {}, HtmlPlatform$Config);
_.antiAliasing = true;
_.frameBufferPixelRatio = 0;
_.rootId = 'playn-root';
_.scaleFactor = 0;
var Lplayn_html_HtmlPlatform$Config_2_classLit = createForClass('playn.html', 'HtmlPlatform/Config', 226, Ljava_lang_Object_2_classLit);
function HtmlStorage(){
  var storage;
  storage = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  storage?new StorageMap(storage):new HashMap;
}

defineClass(286, 1, {}, HtmlStorage);
var Lplayn_html_HtmlStorage_2_classLit = createForClass('playn.html', 'HtmlStorage', 286, Ljava_lang_Object_2_classLit);
function $clinit_HtmlUrlParameters(){
  $clinit_HtmlUrlParameters = emptyMethod;
  checkGLErrors = $equals_0('check', getParameter('glerrors'));
  $equals_0('quad', getParameter('glshader'));
}

var checkGLErrors = false;
function requestedMode(){
  var renderer;
  renderer = getParameter('renderer');
  if ($equals_0('canvas', renderer)) {
    return 1;
  }
   else if ($equals_0('gl', renderer)) {
    return 0;
  }
  return 2;
}

function $events(this$static){
  !this$static.events && (this$static.events = new Layer$1(this$static));
  return this$static.events;
}

function $isSet_0(this$static, flag){
  return (this$static.flags & flag.bitmask) != 0;
}

function $onAdd(this$static){
  if (maskUndefined(this$static.state._value) === maskUndefined(($clinit_Layer$State() , DISPOSED)))
    throw toJs(new IllegalStateException_0('Illegal to use disposed layer: ' + this$static));
  $setState(this$static, ADDED);
}

function $originX(this$static){
  var width_0;
  if ($isSet_0(this$static, ($clinit_Layer$Flag() , ODIRTY))) {
    width_0 = this$static.width_1();
    if (width_0 > 0) {
      this$static.originX = this$static.origin.ox(width_0);
      this$static.originY = this$static.origin.oy(this$static.height_1());
      $setFlag_0(this$static, ODIRTY, false);
    }
  }
  return this$static.originX;
}

function $originY(this$static){
  var height;
  if ($isSet_0(this$static, ($clinit_Layer$Flag() , ODIRTY))) {
    height = this$static.height_1();
    if (height > 0) {
      this$static.originX = this$static.origin.ox(this$static.width_1());
      this$static.originY = this$static.origin.oy(height);
      $setFlag_0(this$static, ODIRTY, false);
    }
  }
  return this$static.originY;
}

function $paint(this$static, surf){
  var otint;
  if (!$isSet_0(this$static, ($clinit_Layer$Flag() , VISIBLE_1)))
    return;
  otint = $combineTint(surf, this$static.tint);
  $concatenate(surf, $transform(this$static), $originX(this$static), $originY(this$static));
  try {
    this$static.paintImpl(surf);
  }
   finally {
    surf.tint = otint;
  }
}

function $setAlpha(this$static, alpha_0){
  var ialpha;
  this$static.alpha_0 = alpha_0;
  ialpha = round_int(255 * (alpha_0 < 0?0:alpha_0 > 1?1:alpha_0));
  this$static.tint = ialpha << 24 | this$static.tint & $intern_28;
  return this$static;
}

function $setDepth(this$static, depth){
  var oldDepth;
  oldDepth = this$static.depth;
  if (depth != oldDepth) {
    this$static.depth = depth;
    !!this$static.parent_0 && $depthChanged(this$static.parent_0, this$static, oldDepth);
  }
  return this$static;
}

function $setFlag_0(this$static, flag, active){
  active?(this$static.flags |= flag.bitmask):(this$static.flags &= ~flag.bitmask);
}

function $setHitTester(this$static, tester){
  this$static.hitTester = tester;
  return this$static;
}

function $setInteractive(this$static, interactive){
  if ($isSet_0(this$static, ($clinit_Layer$Flag() , INTERACTIVE)) != interactive) {
    interactive && !!this$static.parent_0 && $setInteractive(this$static.parent_0, true);
    $setFlag_0(this$static, INTERACTIVE, interactive);
  }
  return this$static;
}

function $setName(this$static, name_0){
  this$static.name_0 = name_0;
  return this$static;
}

function $setOrigin(this$static, origin){
  this$static.origin = origin;
  $setFlag_0(this$static, ($clinit_Layer$Flag() , ODIRTY), true);
  return this$static;
}

function $setScale(this$static, scale){
  return $setScale_0(this$static, scale, scale);
}

function $setScale_0(this$static, sx, sy){
  if (sx != this$static.scaleX || sy != this$static.scaleY) {
    this$static.scaleX = sx;
    this$static.scaleY = sy;
    $setFlag_0(this$static, ($clinit_Layer$Flag() , XFDIRTY), true);
  }
  return this$static;
}

function $setState(this$static, state){
  $updateAndNotify(this$static.state, state, false);
}

function $setTint(this$static, tint){
  this$static.tint = tint;
  this$static.alpha_0 = (tint >> 24 & 255) / 255;
  return this$static;
}

function $setTranslation(this$static, x_0, y_0){
  $setTranslation_0(this$static.transform, x_0, y_0);
  return this$static;
}

function $transform(this$static){
  var cosa, m00, m01, m10, m11, sina, tx, ty;
  if ($isSet_0(this$static, ($clinit_Layer$Flag() , XFDIRTY))) {
    sina = $wnd.Math.sin(this$static.rotation);
    cosa = $wnd.Math.cos(this$static.rotation);
    m00 = cosa * this$static.scaleX;
    m01 = sina * this$static.scaleX;
    m10 = -sina * this$static.scaleY;
    m11 = cosa * this$static.scaleY;
    tx = this$static.transform.tx;
    ty = this$static.transform.ty;
    $setTransform(this$static.transform, m00, m01, m10, m11, tx, ty);
    $setFlag_0(this$static, XFDIRTY, false);
  }
  return this$static.transform;
}

function Layer(){
  this.state = ($clinit_AbstractValue() , new Value(($clinit_Layer$State() , REMOVED)));
  this.transform = new AffineTransform;
  this.origin = ($clinit_Layer$Origin() , FIXED_0);
  $setFlag_0(this, ($clinit_Layer$Flag() , VISIBLE_1), true);
}

defineClass(20, 1, $intern_38);
_.close_0 = function close_16(){
  !!this.parent_0 && $remove_7(this.parent_0, this);
  $setState(this, ($clinit_Layer$State() , DISPOSED));
}
;
_.deactivateOnNoListeners = function deactivateOnNoListeners(){
  return true;
}
;
_.height_1 = function height_0(){
  return 0;
}
;
_.hitTestDefault = function hitTestDefault(p){
  return p.x_0 >= 0 && p.y_0 >= 0 && p.x_0 < this.width_1() && p.y_0 < this.height_1()?this:null;
}
;
_.name_1 = function name_11(){
  if (this.name_0 == null) {
    this.name_0 = $getName(this.___clazz);
    this.name_0 = checkNotNull_0($substring(this.name_0, this.name_0.lastIndexOf('.') + 1));
  }
  return this.name_0;
}
;
_.onAdd = function onAdd(){
  $onAdd(this);
}
;
_.onRemove = function onRemove(){
  $setState(this, ($clinit_Layer$State() , REMOVED));
}
;
_.toString_0 = function toString_49(){
  var buf;
  buf = new StringBuilder_1(this.name_1());
  $append_8($append_4((buf.string += ' @ ' , buf), hashCode__I__devirtual$(this)), ' [');
  this.toString_1(buf);
  return (buf.string += ']' , buf).string;
}
;
_.toString_1 = function toString_50(buf){
  $append_7((buf.string += 'tx=' , buf), $transform(this));
  !!this.hitTester && $append_7((buf.string += ', hitTester=' , buf), this.hitTester);
}
;
_.width_1 = function width_1(){
  return 0;
}
;
_.alpha_0 = 1;
_.depth = 0;
_.flags = 0;
_.originX = 0;
_.originY = 0;
_.rotation = 0;
_.scaleX = 1;
_.scaleY = 1;
_.tint = -1;
var paintNestLevel = 0;
var Lplayn_scene_Layer_2_classLit = createForClass('playn.scene', 'Layer', 20, Ljava_lang_Object_2_classLit);
function $setSize_0(this$static, width_0, height){
  this$static.width_0 = width_0;
  this$static.height_0 = height;
  this$static.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag_0(this$static, ($clinit_Layer$Flag() , ODIRTY), true);
  return this$static;
}

defineClass(329, 20, $intern_38);
_.disableClip_0 = function disableClip(){
  return false;
}
;
_.height_1 = function height_1(){
  return this.height_0;
}
;
_.paintImpl = function paintImpl(surf){
  var nonEmpty, originX, originY, tx, r;
  if (this.disableClip_0())
    this.paintClipped(surf);
  else {
    tx = surf.lastTrans;
    originX = $originX(this);
    originY = $originY(this);
    tx.tx += tx.m00 * originX + tx.m10 * originY;
    tx.ty += tx.m11 * originY + tx.m01 * originX;
    $transform_0(tx, $set_3(this.pos, -originX, -originY), this.pos);
    $transform_1(tx, $set_4(this.size_0, this.width_0, this.height_0), this.size_0);
    tx.tx += tx.m00 * -originX + tx.m10 * -originY;
    tx.ty += tx.m11 * -originY + tx.m01 * -originX;
    nonEmpty = $startClipped(surf, round_int(this.pos.x_0), round_int(this.pos.y_0), round_int($wnd.Math.round($wnd.Math.abs(this.size_0.x_0))), round_int($wnd.Math.round($wnd.Math.abs(this.size_0.y_0))));
    try {
      nonEmpty && this.paintClipped(surf);
    }
     finally {
      surf.batch.flush();
      r = (--surf.scissorDepth , surf.scissorDepth == 0?null:$get_7(surf.scissors, surf.scissorDepth - 1));
      !r?(surf.batch.gl.gl.disable(3089) , undefined):$glScissor(surf.batch.gl, r.x_0, r.y_0, r.width_0, r.height_0);
      $checkError(surf.batch.gl);
    }
  }
}
;
_.width_1 = function width_2(){
  return this.width_0;
}
;
_.height_0 = 0;
_.width_0 = 0;
var Lplayn_scene_ClippedLayer_2_classLit = createForClass('playn.scene', 'ClippedLayer', 329, Lplayn_scene_Layer_2_classLit);
function $add_5(this$static, child){
  var count, index_0, parent_0;
  parent_0 = child.parent_0;
  if (parent_0 == this$static)
    return;
  count = this$static.children.array.length;
  count == 0 || $get_7(this$static.children, count - 1).depth <= child.depth?(index_0 = count):(index_0 = $findInsertion(this$static, child.depth));
  !!parent_0 && $remove_7(parent_0, child);
  $add_0(this$static.children, index_0, child);
  child.parent_0 = this$static;
  maskUndefined(this$static.state._value) === maskUndefined(($clinit_Layer$State() , ADDED)) && child.onAdd();
  $isSet_0(child, ($clinit_Layer$Flag() , INTERACTIVE)) && $setInteractive(this$static, true);
}

function $addAt(this$static, child, tx, ty){
  $add_5(this$static, ($setTranslation_0(child.transform, tx, ty) , child));
}

function $close_3(this$static){
  !!this$static.parent_0 && $remove_7(this$static.parent_0, this$static);
  $setState(this$static, ($clinit_Layer$State() , DISPOSED));
  $disposeAll(this$static);
}

function $depthChanged(this$static, child, oldDepth){
  var leftCorrect, newDepth, newIndex, oldIndex, rightCorrect;
  oldIndex = $findChild(this$static, child, oldDepth);
  newDepth = child.depth;
  leftCorrect = oldIndex == 0 || $get_7(this$static.children, oldIndex - 1).depth <= newDepth;
  rightCorrect = oldIndex == this$static.children.array.length - 1 || $get_7(this$static.children, oldIndex + 1).depth >= newDepth;
  if (leftCorrect && rightCorrect) {
    return oldIndex;
  }
  $remove_0(this$static.children, oldIndex);
  newIndex = $findInsertion(this$static, newDepth);
  $add_0(this$static.children, newIndex, child);
  return newIndex;
}

function $disposeAll(this$static){
  var child, child$index, child$max, toDispose;
  toDispose = $toArray_1(this$static.children, initUnidimensionalArray(Lplayn_scene_Layer_2_classLit, {3:1, 5:1, 561:1}, 20, this$static.children.array.length, 0, 1));
  $removeAll(this$static);
  for (child$index = 0 , child$max = toDispose.length; child$index < child$max; ++child$index) {
    child = toDispose[child$index];
    child.close_0();
  }
}

function $findChild(this$static, child, depth){
  var c, ii, ii0, ll, startIdx;
  startIdx = $findInsertion(this$static, depth);
  for (ii0 = startIdx - 1; ii0 >= 0; ii0--) {
    c = $get_7(this$static.children, ii0);
    if (c == child) {
      return ii0;
    }
    if (c.depth != depth) {
      break;
    }
  }
  for (ii = startIdx , ll = this$static.children.array.length; ii < ll; ii++) {
    c = $get_7(this$static.children, ii);
    if (c == child) {
      return ii;
    }
    if (c.depth != depth) {
      break;
    }
  }
  return -1;
}

function $findInsertion(this$static, depth){
  var high, low, mid, midDepth;
  low = 0;
  high = this$static.children.array.length - 1;
  while (low <= high) {
    mid = low + high >>> 1;
    midDepth = $get_7(this$static.children, mid).depth;
    if (depth > midDepth) {
      low = mid + 1;
    }
     else if (depth < midDepth) {
      high = mid - 1;
    }
     else {
      return mid;
    }
  }
  return low;
}

function $hitTestDefault(this$static, point){
  var child, ii, l, sawInteractiveChild, x_0, y_0;
  x_0 = point.x_0;
  y_0 = point.y_0;
  sawInteractiveChild = false;
  for (ii = this$static.children.array.length - 1; ii >= 0; ii--) {
    child = $get_7(this$static.children, ii);
    if (!$isSet_0(child, ($clinit_Layer$Flag() , INTERACTIVE)))
      continue;
    sawInteractiveChild = true;
    if (!$isSet_0(child, VISIBLE_1))
      continue;
    try {
      $inverseTransform($transform(child), (point.x_0 = x_0 , point.y_0 = y_0 , point), point);
      point.x_0 += $originX(child);
      point.y_0 += $originY(child);
      l = !child.hitTester?child.hitTestDefault(point):$hitTest(child.hitTester, child, point);
      if (l)
        return l;
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 161)) {
        continue;
      }
       else 
        throw toJs($e0);
    }
  }
  !sawInteractiveChild && !(!!this$static.events && !!this$static.events._listeners) && $setInteractive(this$static, false);
  return point.x_0 >= 0 && point.y_0 >= 0 && point.x_0 < this$static.width_0 && point.y_0 < this$static.height_0?this$static:null;
}

function $remove_6(this$static, index_0){
  var child;
  child = $remove_0(this$static.children, index_0);
  child.onRemove();
  child.parent_0 = null;
}

function $remove_7(this$static, child){
  var index_0;
  index_0 = $findChild(this$static, child, child.depth);
  if (index_0 < 0) {
    throw toJs(new UnsupportedOperationException_0('Could not remove Layer because it is not a child of the GroupLayer [group=' + this$static + ', layer=' + child + ']'));
  }
  $remove_6(this$static, index_0);
}

function $removeAll(this$static){
  while (this$static.children.array.length != 0)
    $remove_6(this$static, this$static.children.array.length - 1);
}

function GroupLayer(){
  Layer.call(this);
  this.pos = new Point;
  this.size_0 = new Vector;
  this.width_0 = 0;
  this.height_0 = 0;
  this.children = new ArrayList;
  this.paintTx = new AffineTransform;
  this.disableClip = true;
}

defineClass(119, 329, $intern_38, GroupLayer);
_.close_0 = function close_17(){
  $close_3(this);
}
;
_.deactivateOnNoListeners = function deactivateOnNoListeners_0(){
  return false;
}
;
_.disableClip_0 = function disableClip_0(){
  return this.disableClip;
}
;
_.hitTestDefault = function hitTestDefault_0(point){
  return $hitTestDefault(this, point);
}
;
_.iterator = function iterator_18(){
  return new ArrayList$1(this.children);
}
;
_.onAdd = function onAdd_0(){
  var ii, ll;
  $onAdd(this);
  for (ii = 0 , ll = this.children.array.length; ii < ll; ii++)
    $get_7(this.children, ii).onAdd();
}
;
_.onRemove = function onRemove_0(){
  var ii, ll;
  $setState(this, ($clinit_Layer$State() , REMOVED));
  for (ii = 0 , ll = this.children.array.length; ii < ll; ii++)
    $get_7(this.children, ii).onRemove();
}
;
_.paintClipped = function paintClipped(surf){
  var children, ii, ll;
  $set_2(this.paintTx, surf.lastTrans);
  children = this.children;
  paintNestLevel += 1;
  for (ii = 0 , ll = children.array.length; ii < ll; ii++) {
    $set_2(surf.lastTrans, this.paintTx);
    $paint((checkCriticalElementIndex(ii, children.array.length) , children.array[ii]), surf);
  }
  paintNestLevel -= 1;
}
;
_.toString_1 = function toString_51(buf){
  $append_7((buf.string += 'tx=' , buf), $transform(this));
  !!this.hitTester && $append_7((buf.string += ', hitTester=' , buf), this.hitTester);
  $append_4((buf.string += ', children=' , buf), this.children.array.length);
}
;
_.disableClip = false;
var Lplayn_scene_GroupLayer_2_classLit = createForClass('playn.scene', 'GroupLayer', 119, Lplayn_scene_ClippedLayer_2_classLit);
function $$init_2(this$static){
  this$static.forceWidth = -1;
  this$static.forceHeight = -1;
}

function $height(this$static){
  if (this$static.forceHeight >= 0)
    return this$static.forceHeight;
  return !this$static.tile?0:this$static.tile.displayHeight;
}

function $setSize_1(this$static){
  this$static.forceWidth = 1;
  this$static.forceHeight = 1;
  this$static.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag_0(this$static, ($clinit_Layer$Flag() , ODIRTY), true);
  return this$static;
}

function $setTile(this$static, tile){
  if (this$static.tile != tile) {
    !!this$static.tile && $release(this$static.tile);
    this$static.tile = tile;
    this$static.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag_0(this$static, ($clinit_Layer$Flag() , ODIRTY), true);
    !!tile && tile.config.managed && ++tile.refs;
  }
  return this$static;
}

function $width(this$static){
  if (this$static.forceWidth >= 0)
    return this$static.forceWidth;
  return !this$static.tile?0:this$static.tile.displayWidth;
}

function ImageLayer(tile){
  Layer.call(this);
  $$init_2(this);
  $setTile(this, tile);
}

function ImageLayer_0(source){
  var cur;
  Layer.call(this);
  $$init_2(this);
  cur = source.state.result();
  !!cur && cur.isSuccess()?$setTile(this, ((!source.texture || source.texture.disposed) && (source.texture = $createTexture_0(source, source.texconf)) , source.texture)):$onComplete($map_0(source.state, new Image$3(source)), new RFuture$6(new ImageLayer$1(this)));
}

defineClass(223, 20, $intern_38, ImageLayer, ImageLayer_0);
_.close_0 = function close_18(){
  !!this.parent_0 && $remove_7(this.parent_0, this);
  $setState(this, ($clinit_Layer$State() , DISPOSED));
  $setTile(this, null);
}
;
_.height_1 = function height_2(){
  return $height(this);
}
;
_.paintImpl = function paintImpl_0(surf){
  var dheight, dwidth;
  if (this.tile) {
    dwidth = $width(this);
    dheight = $height(this);
    $draw(surf, this.tile, dwidth, dheight);
  }
}
;
_.width_1 = function width_3(){
  return $width(this);
}
;
_.forceHeight = 0;
_.forceWidth = 0;
var Lplayn_scene_ImageLayer_2_classLit = createForClass('playn.scene', 'ImageLayer', 223, Lplayn_scene_Layer_2_classLit);
function $onEmit_1(this$static, tile){
  $setTile(this$static.this$01, tile);
}

function ImageLayer$1(this$0){
  this.this$01 = this$0;
}

defineClass(491, 521, $intern_31, ImageLayer$1);
_.onEmit = function onEmit_3(tile){
  $setTile(this.this$01, tile);
}
;
var Lplayn_scene_ImageLayer$1_2_classLit = createForClass('playn.scene', 'ImageLayer/1', 491, Lreact_Slot_2_classLit);
function $dispatch_3(this$static, event_0){
  var depth, target;
  if (this$static.canceled)
    return;
  screenToLayer(this$static.hitLayer, $set_3(this$static.local, event_0.x_0, event_0.y_0), this$static.local);
  this$static.event_0 = event_0;
  try {
    if (this$static.bubble) {
      depth = ($clinit_Interaction$Depth() , BELOW);
      for (target = this$static.hitLayer; target; target = target.parent_0) {
        target == this$static.capturingLayer?(depth = AT_0):depth == AT_0 && (depth = ABOVE);
        $dispatch_4(this$static, target);
        target == this$static.capturingLayer && (depth = AT_0);
      }
    }
     else {
      $dispatch_4(this$static, this$static.hitLayer);
    }
  }
   finally {
    this$static.event_0 = null;
  }
  $set_3(this$static.local, 0, 0);
}

function $dispatch_4(this$static, layer){
  var odispatchLayer;
  if (!(!!layer.events && !!layer.events._listeners))
    return;
  odispatchLayer = this$static.dispatchLayer;
  this$static.dispatchLayer = layer;
  try {
    $emit((!layer.events && (layer.events = new Layer$1(layer)) , layer.events), this$static);
  }
   finally {
    this$static.dispatchLayer = odispatchLayer;
  }
}

defineClass(325, 1, {45:1});
_.toString_0 = function toString_52(){
  return 'Interaction[bubble=' + this.bubble + ', canceled=' + this.canceled + ', capmode=' + this.captureMode + ']' + '\n event=' + this.event_0 + '\n hit=' + this.hitLayer;
}
;
_.x_1 = function x_3(){
  return this.event_0.x_0;
}
;
_.y_1 = function y_3(){
  return this.event_0.y_0;
}
;
_.bubble = false;
_.canceled = false;
var Lplayn_scene_Interaction_2_classLit = createForClass('playn.scene', 'Interaction', 325, Ljava_lang_Object_2_classLit);
function $clinit_Interaction$Depth(){
  $clinit_Interaction$Depth = emptyMethod;
  BELOW = new Interaction$Depth('BELOW', 0);
  AT_0 = new Interaction$Depth('AT', 1);
  ABOVE = new Interaction$Depth('ABOVE', 2);
}

function Interaction$Depth(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_19(){
  $clinit_Interaction$Depth();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Interaction$Depth_2_classLit, 1), $intern_1, 94, 0, [BELOW, AT_0, ABOVE]);
}

defineClass(94, 6, {3:1, 7:1, 6:1, 94:1}, Interaction$Depth);
var ABOVE, AT_0, BELOW;
var Lplayn_scene_Interaction$Depth_2_classLit = createForEnum('playn.scene', 'Interaction/Depth', 94, Ljava_lang_Enum_2_classLit, values_19);
function $clinit_Reactor(){
  $clinit_Reactor = emptyMethod;
  DISPATCHING = new Cons(null, null);
}

function $addConnection(this$static, listener){
  return $addCons(this$static, new Cons(this$static, listener));
}

function $addCons(this$static, cons){
  if (this$static._listeners == DISPATCHING) {
    this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$1(this$static, cons));
  }
   else {
    this$static._listeners = insert(this$static._listeners, cons);
    this$static.connectionAdded();
  }
  return cons;
}

function $clearConnections(this$static){
  if (this$static._listeners == DISPATCHING)
    throw toJs(new IllegalStateException_0('Cannot clear connections while dispatching.'));
  this$static._listeners = null;
}

function $disconnect(this$static, cons){
  if (this$static._listeners == DISPATCHING) {
    this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$2(this$static, cons));
  }
   else {
    this$static._listeners = remove(this$static._listeners, cons);
    this$static.connectionRemoved();
  }
}

function $notify(this$static, notifier, a1, a2, a3){
  var cons, ex, exn, lners, run, sentinel, run_0;
  if (this$static._listeners == DISPATCHING) {
    this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$4(this$static, notifier, a1, a2, a3));
    return;
  }
  lners = this$static._listeners;
  sentinel = DISPATCHING;
  this$static._listeners = sentinel;
  exn = null;
  try {
    for (cons = lners; cons; cons = cons.next_0) {
      try {
        notifier.notify_0(cons._ref._lner, a1, a2, a3);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 8)) {
          ex = $e0;
          exn?$addSuppressed(exn, ex):(exn = ex);
        }
         else 
          throw toJs($e0);
      }
      cons._oneShot && $close_6(cons);
    }
  }
   finally {
    this$static._listeners = lners;
    while (run = (run_0 = this$static._pendingRuns , !!run_0 && (this$static._pendingRuns = run_0.next_0) , run_0)) {
      try {
        run.run();
      }
       catch ($e1) {
        $e1 = toJava($e1);
        if (instanceOf($e1, 8)) {
          ex = $e1;
          exn?$addSuppressed(exn, ex):(exn = ex);
        }
         else 
          throw toJs($e1);
      }
    }
  }
  if (exn)
    throw toJs(exn);
}

function append(head, action){
  if (!head)
    return action;
  head.next_0 = append(head.next_0, action);
  return head;
}

defineClass(523, 1, {});
_.connectionAdded = function connectionAdded(){
}
;
_.connectionRemoved = function connectionRemoved(){
}
;
_.notify = function notify(notifier, a1, a2, a3){
  $notify(this, notifier, a1, a2, a3);
}
;
var DISPATCHING;
var Lreact_Reactor_2_classLit = createForClass('react', 'Reactor', 523, Ljava_lang_Object_2_classLit);
function $clinit_AbstractSignal(){
  $clinit_AbstractSignal = emptyMethod;
  $clinit_Reactor();
  EMIT = new AbstractSignal$1;
}

defineClass(531, 523, {});
_.placeholderListener = function placeholderListener(){
  var p;
  return p = ($clinit_Slots() , NOOP_2) , p;
}
;
var EMIT;
var Lreact_AbstractSignal_2_classLit = createForClass('react', 'AbstractSignal', 531, Lreact_Reactor_2_classLit);
function $emit(this$static, event_0){
  $notify(this$static, EMIT, event_0, null, null);
}

function Signal(){
  $clinit_AbstractSignal();
}

defineClass(27, 531, {}, Signal);
var Lreact_Signal_2_classLit = createForClass('react', 'Signal', 27, Lreact_AbstractSignal_2_classLit);
function Layer$1(this$0){
  $clinit_AbstractSignal();
  this.this$01 = this$0;
}

defineClass(177, 27, {}, Layer$1);
_.connectionAdded = function connectionAdded_0(){
  $setInteractive(this.this$01, true);
}
;
_.connectionRemoved = function connectionRemoved_0(){
  !this._listeners && this.this$01.deactivateOnNoListeners() && $setInteractive(this.this$01, false);
}
;
var Lplayn_scene_Layer$1_2_classLit = createForClass('playn.scene', 'Layer/1', 177, Lreact_Signal_2_classLit);
function $clinit_Layer$Flag(){
  $clinit_Layer$Flag = emptyMethod;
  VISIBLE_1 = new Layer$Flag('VISIBLE', 0, 1);
  INTERACTIVE = new Layer$Flag('INTERACTIVE', 1, 2);
  XFDIRTY = new Layer$Flag('XFDIRTY', 2, 4);
  ODIRTY = new Layer$Flag('ODIRTY', 3, 8);
}

function Layer$Flag(enum$name, enum$ordinal, bitmask){
  Enum.call(this, enum$name, enum$ordinal);
  this.bitmask = bitmask;
}

function values_20(){
  $clinit_Layer$Flag();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$Flag_2_classLit, 1), $intern_1, 79, 0, [VISIBLE_1, INTERACTIVE, XFDIRTY, ODIRTY]);
}

defineClass(79, 6, {3:1, 7:1, 6:1, 79:1}, Layer$Flag);
_.bitmask = 0;
var INTERACTIVE, ODIRTY, VISIBLE_1, XFDIRTY;
var Lplayn_scene_Layer$Flag_2_classLit = createForEnum('playn.scene', 'Layer/Flag', 79, Ljava_lang_Enum_2_classLit, values_20);
function $clinit_Layer$Origin(){
  $clinit_Layer$Origin = emptyMethod;
  FIXED_0 = new Layer$Origin$1;
  CENTER = new Layer$Origin$2;
  UL = new Layer$Origin$3;
  UR = new Layer$Origin$4;
  LL = new Layer$Origin$5;
  LR = new Layer$Origin$6;
  TC = new Layer$Origin$7;
  BC = new Layer$Origin$8;
  LC = new Layer$Origin$9;
  RC = new Layer$Origin$10;
}

function Layer$Origin(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_21(){
  $clinit_Layer$Origin();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$Origin_2_classLit, 1), $intern_1, 15, 0, [FIXED_0, CENTER, UL, UR, LL, LR, TC, BC, LC, RC]);
}

defineClass(15, 6, $intern_39);
var BC, CENTER, FIXED_0, LC, LL, LR, RC, TC, UL, UR;
var Lplayn_scene_Layer$Origin_2_classLit = createForEnum('playn.scene', 'Layer/Origin', 15, Ljava_lang_Enum_2_classLit, values_21);
function Layer$Origin$1(){
  Layer$Origin.call(this, 'FIXED', 0);
}

defineClass(331, 15, $intern_39, Layer$Origin$1);
_.ox = function ox_0(width_0){
  return 0;
}
;
_.oy = function oy_0(height){
  return 0;
}
;
var Lplayn_scene_Layer$Origin$1_2_classLit = createForEnum('playn.scene', 'Layer/Origin/1', 331, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$10(){
  Layer$Origin.call(this, 'RC', 9);
}

defineClass(340, 15, $intern_39, Layer$Origin$10);
_.ox = function ox_1(width_0){
  return width_0;
}
;
_.oy = function oy_1(height){
  return height / 2;
}
;
var Lplayn_scene_Layer$Origin$10_2_classLit = createForEnum('playn.scene', 'Layer/Origin/10', 340, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$2(){
  Layer$Origin.call(this, 'CENTER', 1);
}

defineClass(332, 15, $intern_39, Layer$Origin$2);
_.ox = function ox_2(width_0){
  return width_0 / 2;
}
;
_.oy = function oy_2(height){
  return height / 2;
}
;
var Lplayn_scene_Layer$Origin$2_2_classLit = createForEnum('playn.scene', 'Layer/Origin/2', 332, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$3(){
  Layer$Origin.call(this, 'UL', 2);
}

defineClass(333, 15, $intern_39, Layer$Origin$3);
_.ox = function ox_3(width_0){
  return 0;
}
;
_.oy = function oy_3(height){
  return 0;
}
;
var Lplayn_scene_Layer$Origin$3_2_classLit = createForEnum('playn.scene', 'Layer/Origin/3', 333, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$4(){
  Layer$Origin.call(this, 'UR', 3);
}

defineClass(334, 15, $intern_39, Layer$Origin$4);
_.ox = function ox_4(width_0){
  return width_0;
}
;
_.oy = function oy_4(height){
  return 0;
}
;
var Lplayn_scene_Layer$Origin$4_2_classLit = createForEnum('playn.scene', 'Layer/Origin/4', 334, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$5(){
  Layer$Origin.call(this, 'LL', 4);
}

defineClass(335, 15, $intern_39, Layer$Origin$5);
_.ox = function ox_5(width_0){
  return 0;
}
;
_.oy = function oy_5(height){
  return height;
}
;
var Lplayn_scene_Layer$Origin$5_2_classLit = createForEnum('playn.scene', 'Layer/Origin/5', 335, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$6(){
  Layer$Origin.call(this, 'LR', 5);
}

defineClass(336, 15, $intern_39, Layer$Origin$6);
_.ox = function ox_6(width_0){
  return width_0;
}
;
_.oy = function oy_6(height){
  return height;
}
;
var Lplayn_scene_Layer$Origin$6_2_classLit = createForEnum('playn.scene', 'Layer/Origin/6', 336, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$7(){
  Layer$Origin.call(this, 'TC', 6);
}

defineClass(337, 15, $intern_39, Layer$Origin$7);
_.ox = function ox_7(width_0){
  return width_0 / 2;
}
;
_.oy = function oy_7(height){
  return 0;
}
;
var Lplayn_scene_Layer$Origin$7_2_classLit = createForEnum('playn.scene', 'Layer/Origin/7', 337, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$8(){
  Layer$Origin.call(this, 'BC', 7);
}

defineClass(338, 15, $intern_39, Layer$Origin$8);
_.ox = function ox_8(width_0){
  return width_0 / 2;
}
;
_.oy = function oy_8(height){
  return height;
}
;
var Lplayn_scene_Layer$Origin$8_2_classLit = createForEnum('playn.scene', 'Layer/Origin/8', 338, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$9(){
  Layer$Origin.call(this, 'LC', 8);
}

defineClass(339, 15, $intern_39, Layer$Origin$9);
_.ox = function ox_9(width_0){
  return 0;
}
;
_.oy = function oy_9(height){
  return height / 2;
}
;
var Lplayn_scene_Layer$Origin$9_2_classLit = createForEnum('playn.scene', 'Layer/Origin/9', 339, Lplayn_scene_Layer$Origin_2_classLit, null);
function $clinit_Layer$State(){
  $clinit_Layer$State = emptyMethod;
  REMOVED = new Layer$State('REMOVED', 0);
  ADDED = new Layer$State('ADDED', 1);
  DISPOSED = new Layer$State('DISPOSED', 2);
}

function Layer$State(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_22(){
  $clinit_Layer$State();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$State_2_classLit, 1), $intern_1, 95, 0, [REMOVED, ADDED, DISPOSED]);
}

defineClass(95, 6, {3:1, 7:1, 6:1, 95:1}, Layer$State);
var ADDED, DISPOSED, REMOVED;
var Lplayn_scene_Layer$State_2_classLit = createForEnum('playn.scene', 'Layer/State', 95, Ljava_lang_Enum_2_classLit, values_22);
function getHitLayer(root, p){
  $inverseTransform($transform(root), p, p);
  p.x_0 += $originX(root);
  p.y_0 += $originY(root);
  return !root.hitTester?$hitTestDefault(root, p):$hitTest(root.hitTester, root, p);
}

function screenToLayer(layer, point, into){
  var cur, parent_0;
  parent_0 = layer.parent_0;
  cur = !parent_0?point:screenToLayer(parent_0, point, into);
  return $inverseTransform($transform(layer), $set_3(into, cur.x_1(), cur.y_1()), into) , into.x_0 += $originX(layer) , into.y_0 += $originY(layer) , into;
}

function Pointer(plat, root){
  this.events = ($clinit_AbstractSignal() , new Signal);
  this.plat = plat;
  'ontouchstart' in $doc.documentElement || $wnd.navigator.userAgent.match(/ipad|iphone|android/i) != null?$addConnection(plat.input_0.touchEvents, new Pointer$1(this)):'onmousedown' in $doc.documentElement && $wnd.navigator.userAgent.match(/ipad|iphone|android/i) == null?$addConnection(plat.input_0.mouseEvents, new Pointer$2(this)):$warn_0(plat.log_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, ['type', ($clinit_Platform$Type() , HTML)]));
  $addConnection(this.events, new Pointer$Dispatcher(root));
}

defineClass(324, 323, {}, Pointer);
var Lplayn_scene_Pointer_2_classLit = createForClass('playn.scene', 'Pointer', 324, Lplayn_core_Pointer_2_classLit);
function $onEmit_2(this$static, event_0){
  var hitLayer;
  if (!this$static.currentIact && event_0.kind.isStart) {
    hitLayer = getHitLayer(this$static.root, $set_3(this$static.scratch, event_0.x_0, event_0.y_0));
    !!hitLayer && (this$static.currentIact = new Pointer$Interaction(hitLayer, this$static.bubble));
  }
  !!this$static.currentIact && $dispatch_3(this$static.currentIact, event_0);
  event_0.kind.isEnd && (this$static.currentIact = null);
}

function Pointer$Dispatcher(root){
  this.scratch = new Point;
  this.root = root;
  this.bubble = true;
}

defineClass(326, 521, $intern_31, Pointer$Dispatcher);
_.onEmit = function onEmit_4(event_0){
  $onEmit_2(this, event_0);
}
;
_.bubble = false;
var Lplayn_scene_Pointer$Dispatcher_2_classLit = createForClass('playn.scene', 'Pointer/Dispatcher', 326, Lreact_Slot_2_classLit);
function Pointer$Interaction(hitLayer, bubble){
  this.local = new Point;
  this.hitLayer = hitLayer;
  this.bubble = bubble;
}

defineClass(141, 325, {141:1, 45:1}, Pointer$Interaction);
var Lplayn_scene_Pointer$Interaction_2_classLit = createForClass('playn.scene', 'Pointer/Interaction', 141, Lplayn_scene_Interaction_2_classLit);
defineClass(544, 521, $intern_31);
_.onEmit = function onEmit_5(event_0){
  var iact;
  if (instanceOf(event_0, 141)) {
    iact = event_0;
    iact.event_0.kind.ordinal == 0 && $onStart(this, iact);
  }
}
;
var Lplayn_scene_Pointer$Listener_2_classLit = createForClass('playn.scene', 'Pointer/Listener', 544, Lreact_Slot_2_classLit);
function RootLayer(){
  GroupLayer.call(this);
  $setState(this, ($clinit_Layer$State() , ADDED));
}

defineClass(330, 119, $intern_38, RootLayer);
var Lplayn_scene_RootLayer_2_classLit = createForClass('playn.scene', 'RootLayer', 330, Lplayn_scene_GroupLayer_2_classLit);
function $createDefaultBatch(gl){
  var maxVecs;
  try {
    maxVecs = usableMaxUniformVectors(gl);
    if (maxVecs >= 48)
      return new UniformQuadBatch(gl);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 13))
      throw toJs($e0);
  }
  return new TriangleBatch(gl);
}

function $paintScene(this$static){
  $saveTx(this$static.viewSurf);
  $begin_0(this$static.viewSurf);
  $clear_0(this$static.viewSurf, this$static.cred, this$static.cgreen, this$static.cblue, this$static.calpha);
  try {
    $paint(this$static.rootLayer, this$static.viewSurf);
  }
   finally {
    $end_0(this$static.viewSurf);
    $restoreTx(this$static.viewSurf);
  }
}

defineClass(252, 251, {});
_.calpha = 0;
_.cblue = 0;
_.cgreen = 0;
_.cred = 0;
var Lplayn_scene_SceneGame_2_classLit = createForClass('playn.scene', 'SceneGame', 252, Lplayn_core_Game_2_classLit);
function SceneGame$1(this$0){
  this.this$01 = this$0;
}

defineClass(255, 521, $intern_31, SceneGame$1);
_.onEmit = function onEmit_6(clock){
  var lastArg;
  $paintScene((lastArg = this , clock , lastArg).this$01);
}
;
var Lplayn_scene_SceneGame$1_2_classLit = createForClass('playn.scene', 'SceneGame/1', 255, Lreact_Slot_2_classLit);
function $equals_3(this$static, obj){
  var d;
  if (obj === this$static) {
    return true;
  }
  if (instanceOf(obj, 30)) {
    d = obj;
    return d.width_0 == this$static.width_0 && d.height_0 == this$static.height_0;
  }
  return false;
}

defineClass(184, 1, {184:1});
_.equals_0 = function equals_26(obj){
  return $equals_3(this, obj);
}
;
_.hashCode_0 = function hashCode_28(){
  return round_int(this.width_0) ^ round_int(this.height_0);
}
;
_.toString_0 = function toString_53(){
  return $clinit_Dimensions() , this.width_0 + 'x' + this.height_0;
}
;
var Lpythagoras_f_AbstractDimension_2_classLit = createForClass('pythagoras.f', 'AbstractDimension', 184, Ljava_lang_Object_2_classLit);
defineClass(183, 1, {183:1, 45:1});
_.equals_0 = function equals_27(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 49)) {
    p = obj;
    return this.x_0 == p.x_0 && this.y_0 == p.y_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_29(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString_0 = function toString_54(){
  return pointToString(this.x_0, this.y_0);
}
;
var Lpythagoras_f_AbstractPoint_2_classLit = createForClass('pythagoras.f', 'AbstractPoint', 183, Ljava_lang_Object_2_classLit);
defineClass(556, 1, {});
var Lpythagoras_f_RectangularShape_2_classLit = createForClass('pythagoras.f', 'RectangularShape', 556, Ljava_lang_Object_2_classLit);
defineClass(224, 556, {224:1});
_.equals_0 = function equals_28(obj){
  var r;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 162)) {
    r = obj;
    return r.x_0 == this.x_0 && r.y_0 == this.y_0 && r.width_0 == this.width_0 && r.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_30(){
  return round_int(this.x_0) ^ round_int(this.y_0) ^ round_int(this.width_0) ^ round_int(this.height_0);
}
;
_.toString_0 = function toString_55(){
  return $clinit_Dimensions() , this.width_0 + 'x' + this.height_0 + pointToString(this.x_0, this.y_0);
}
;
var Lpythagoras_f_AbstractRectangle_2_classLit = createForClass('pythagoras.f', 'AbstractRectangle', 224, Lpythagoras_f_RectangularShape_2_classLit);
defineClass(536, 1, {});
var Lpythagoras_f_AbstractTransform_2_classLit = createForClass('pythagoras.f', 'AbstractTransform', 536, Ljava_lang_Object_2_classLit);
defineClass(203, 1, {203:1, 45:1});
_.equals_0 = function equals_29(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 33)) {
    p = obj;
    return this.x_0 == p.x_0 && this.y_0 == p.y_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_31(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString_0 = function toString_56(){
  return vectorToString(this.x_0, this.y_0);
}
;
var Lpythagoras_f_AbstractVector_2_classLit = createForClass('pythagoras.f', 'AbstractVector', 203, Ljava_lang_Object_2_classLit);
function $copy(this$static){
  return new AffineTransform_0(this$static.m00, this$static.m01, this$static.m10, this$static.m11, this$static.tx, this$static.ty);
}

function $inverseTransform(this$static, p, into){
  var det, rdet, x_0, y_0;
  x_0 = p.x_0 - this$static.tx;
  y_0 = p.y_0 - this$static.ty;
  det = this$static.m00 * this$static.m11 - this$static.m01 * this$static.m10;
  if ($wnd.Math.abs(det) == 0) {
    throw toJs(new NoninvertibleTransformException(this$static.m00 != 1 || this$static.m01 != 0 || this$static.m10 != 0 || this$static.m11 != 1?'affine [' + toString_58(this$static.m00, TO_STRING_DECIMAL_PLACES) + ' ' + toString_58(this$static.m01, TO_STRING_DECIMAL_PLACES) + ' ' + toString_58(this$static.m10, TO_STRING_DECIMAL_PLACES) + ' ' + toString_58(this$static.m11, TO_STRING_DECIMAL_PLACES) + ' ' + new Vector_0(this$static.tx, this$static.ty) + ']':this$static.tx != 0 || this$static.ty != 0?'trans ' + new Vector_0(this$static.tx, this$static.ty):'ident'));
  }
  rdet = 1 / det;
  return $set_3(into, (x_0 * this$static.m11 - y_0 * this$static.m10) * rdet, (y_0 * this$static.m00 - x_0 * this$static.m01) * rdet);
}

function $scale_1(this$static, scaleX, scaleY){
  this$static.m00 *= scaleX;
  this$static.m01 *= scaleX;
  this$static.m10 *= scaleY;
  this$static.m11 *= scaleY;
  return this$static;
}

function $set_2(this$static, other){
  return $setTransform(this$static, other.m00, other.m01, other.m10, other.m11, other.tx, other.ty);
}

function $setRotation(this$static, angle){
  var cosa, sina, sx, sy;
  sx = $wnd.Math.sqrt(this$static.m00 * this$static.m00 + this$static.m01 * this$static.m01);
  sy = $wnd.Math.sqrt(this$static.m10 * this$static.m10 + this$static.m11 * this$static.m11);
  sina = $wnd.Math.sin(angle);
  cosa = $wnd.Math.cos(angle);
  this$static.m00 = cosa * sx;
  this$static.m01 = sina * sx;
  this$static.m10 = -sina * sy;
  this$static.m11 = cosa * sy;
  return this$static;
}

function $setTransform(this$static, m00, m01, m10, m11, tx, ty){
  this$static.m00 = m00;
  this$static.m01 = m01;
  this$static.m10 = m10;
  this$static.m11 = m11;
  this$static.tx = tx;
  this$static.ty = ty;
  return this$static;
}

function $setTranslation_0(this$static, tx, ty){
  this$static.tx = tx;
  this$static.ty = ty;
  return this$static;
}

function $transform_0(this$static, p, into){
  var x_0, y_0;
  x_0 = p.x_0;
  y_0 = p.y_0;
  return $set_3(into, this$static.m00 * x_0 + this$static.m10 * y_0 + this$static.tx, this$static.m01 * x_0 + this$static.m11 * y_0 + this$static.ty);
}

function $transform_1(this$static, v, into){
  var x_0, y_0;
  x_0 = v.x_0;
  y_0 = v.y_0;
  return $set_4(into, this$static.m00 * x_0 + this$static.m10 * y_0, this$static.m01 * x_0 + this$static.m11 * y_0);
}

function $translate(this$static, tx, ty){
  this$static.tx += this$static.m00 * tx + this$static.m10 * ty;
  this$static.ty += this$static.m11 * ty + this$static.m01 * tx;
  return this$static;
}

function AffineTransform(){
  AffineTransform_0.call(this, 1, 0, 0, 1, 0, 0);
}

function AffineTransform_0(m00, m01, m10, m11, tx, ty){
  this.m00 = m00;
  this.m01 = m01;
  this.m10 = m10;
  this.m11 = m11;
  this.tx = tx;
  this.ty = ty;
}

defineClass(71, 536, {71:1}, AffineTransform, AffineTransform_0);
_.toString_0 = function toString_57(){
  return this.m00 != 1 || this.m01 != 0 || this.m10 != 0 || this.m11 != 1?'affine [' + toString_58(this.m00, TO_STRING_DECIMAL_PLACES) + ' ' + toString_58(this.m01, TO_STRING_DECIMAL_PLACES) + ' ' + toString_58(this.m10, TO_STRING_DECIMAL_PLACES) + ' ' + toString_58(this.m11, TO_STRING_DECIMAL_PLACES) + ' ' + new Vector_0(this.tx, this.ty) + ']':this.tx != 0 || this.ty != 0?'trans ' + new Vector_0(this.tx, this.ty):'ident';
}
;
_.m00 = 0;
_.m01 = 0;
_.m10 = 0;
_.m11 = 0;
_.tx = 0;
_.ty = 0;
var Lpythagoras_f_AffineTransform_2_classLit = createForClass('pythagoras.f', 'AffineTransform', 71, Lpythagoras_f_AbstractTransform_2_classLit);
function $setSize_2(this$static, width_0, height){
  this$static.width_0 = width_0;
  this$static.height_0 = height;
}

function Dimension(){
  Dimension_0.call(this, 0, 0);
}

function Dimension_0(width_0, height){
  this.width_0 = width_0;
  this.height_0 = height;
}

function Dimension_1(d){
  Dimension_0.call(this, d.width_0, d.height_0);
}

defineClass(30, 184, {3:1, 184:1, 30:1}, Dimension, Dimension_0, Dimension_1);
_.height_0 = 0;
_.width_0 = 0;
var Lpythagoras_f_Dimension_2_classLit = createForClass('pythagoras.f', 'Dimension', 30, Lpythagoras_f_AbstractDimension_2_classLit);
function $clinit_Dimensions(){
  $clinit_Dimensions = emptyMethod;
  new Dimension_0(0, 0);
}

function iceil(v){
  var iv;
  iv = round_int(v);
  return v <= 0 || iv == v || iv == $intern_0?iv:iv + 1;
}

function ifloor(v){
  var iv;
  iv = round_int(v);
  return v >= 0 || iv == v || iv == $intern_17?iv:iv - 1;
}

function toString_58(value_0, decimalPlaces){
  var buf, ii, ii0, ivalue;
  if (isNaN(value_0))
    return 'NaN';
  buf = new StringBuilder;
  if (value_0 >= 0)
    buf.string += '+';
  else {
    buf.string += '-';
    value_0 = -value_0;
  }
  ivalue = round_int(value_0);
  buf.string += ivalue;
  if (decimalPlaces > 0) {
    buf.string += '.';
    for (ii0 = 0; ii0 < decimalPlaces; ii0++) {
      value_0 = (value_0 - ivalue) * 10;
      ivalue = round_int(value_0);
      buf.string += ivalue;
    }
    for (ii = 0; ii < decimalPlaces - 1; ii++) {
      $charAt(buf, buf.string.length - 1) == 48 && $setLength(buf, buf.string.length - 1);
    }
  }
  return buf.string;
}

var TO_STRING_DECIMAL_PLACES = 3;
function $set_3(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  return this$static;
}

function Point(){
}

function Point_0(){
  this.x_0 = 0;
  this.y_0 = 0;
}

function Point_1(p){
  $set_3(this, p.event_0.x_0, p.event_0.y_0);
}

defineClass(49, 183, {3:1, 183:1, 49:1, 45:1}, Point, Point_0, Point_1);
_.x_1 = function x_4(){
  return this.x_0;
}
;
_.y_1 = function y_4(){
  return this.y_0;
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Point_2_classLit = createForClass('pythagoras.f', 'Point', 49, Lpythagoras_f_AbstractPoint_2_classLit);
function $clinit_Points(){
  $clinit_Points = emptyMethod;
  new Point_0;
}

function pointToString(x_0, y_0){
  $clinit_Points();
  return toString_58(x_0, TO_STRING_DECIMAL_PLACES) + ('' + toString_58(y_0, TO_STRING_DECIMAL_PLACES));
}

function Rectangle(x_0, y_0, width_0, height){
  this.x_0 = x_0;
  this.y_0 = y_0;
  this.height_0 = height;
  this.width_0 = width_0;
}

defineClass(162, 224, {3:1, 224:1, 162:1}, Rectangle);
_.height_0 = 0;
_.width_0 = 0;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Rectangle_2_classLit = createForClass('pythagoras.f', 'Rectangle', 162, Lpythagoras_f_AbstractRectangle_2_classLit);
function multiply(am00, am01, am10, am11, atx, aty, bm00, bm01, bm10, bm11, btx, bty, into){
  $setTransform(into, am00 * bm00 + am10 * bm01, am01 * bm00 + am11 * bm01, am00 * bm10 + am10 * bm11, am01 * bm10 + am11 * bm11, am00 * btx + am10 * bty + atx, am01 * btx + am11 * bty + aty);
  return into;
}

function multiply_0(a, m00, m01, m10, m11, tx, ty, into){
  return multiply(a.m00, a.m01, a.m10, a.m11, a.tx, a.ty, m00, m01, m10, m11, tx, ty, into);
}

function multiply_1(a, b, into){
  return multiply(a.m00, a.m01, a.m10, a.m11, a.tx, a.ty, b.m00, b.m01, b.m10, b.m11, b.tx, b.ty, into);
}

function $set_4(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  return this$static;
}

function Vector(){
}

function Vector_0(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(33, 203, {203:1, 33:1, 45:1}, Vector, Vector_0);
_.x_1 = function x_5(){
  return this.x_0;
}
;
_.y_1 = function y_5(){
  return this.y_0;
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Vector_2_classLit = createForClass('pythagoras.f', 'Vector', 33, Lpythagoras_f_AbstractVector_2_classLit);
function $clinit_Vectors(){
  $clinit_Vectors = emptyMethod;
  new Vector_0(1, 0);
  new Vector_0(0, 1);
  new Vector_0(0, 0);
  new Vector_0($intern_40, $intern_40);
  new Vector_0($intern_41, $intern_41);
}

function vectorToString(x_0, y_0){
  $clinit_Vectors();
  return toString_58(x_0, TO_STRING_DECIMAL_PLACES) + ('' + toString_58(y_0, TO_STRING_DECIMAL_PLACES));
}

defineClass(190, 1, {190:1});
_.equals_0 = function equals_30(obj){
  var d;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 144)) {
    d = obj;
    return d.width_0 == this.width_0 && d.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_32(){
  return this.width_0 ^ this.height_0;
}
;
_.toString_0 = function toString_59(){
  return this.width_0 + 'x' + this.height_0;
}
;
var Lpythagoras_i_AbstractDimension_2_classLit = createForClass('pythagoras.i', 'AbstractDimension', 190, Ljava_lang_Object_2_classLit);
function $contains_4(this$static, px, py){
  var x_0, y_0;
  if (this$static.width_0 <= 0 || this$static.height_0 <= 0)
    return false;
  x_0 = this$static.x_0;
  y_0 = this$static.y_0;
  if (px < x_0 || py < y_0)
    return false;
  px -= x_0;
  py -= y_0;
  return px < this$static.width_0 && py < this$static.height_0;
}

function $intersects_0(this$static, rx, ry, rw, rh){
  var x1, x2, y1, y2;
  if (this$static.width_0 <= 0 || this$static.height_0 <= 0)
    return false;
  x1 = this$static.x_0;
  y1 = this$static.y_0;
  x2 = x1 + this$static.width_0;
  y2 = y1 + this$static.height_0;
  return rx + rw > x1 && rx < x2 && ry + rh > y1 && ry < y2;
}

defineClass(191, 1, {191:1});
_.equals_0 = function equals_31(obj){
  var r;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 123)) {
    r = obj;
    return r.x_0 == this.x_0 && r.y_0 == this.y_0 && r.width_0 == this.width_0 && r.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_33(){
  return this.x_0 ^ this.y_0 ^ this.width_0 ^ this.height_0;
}
;
_.toString_0 = function toString_60(){
  return this.width_0 + 'x' + this.height_0 + pointToString_0(this.x_0, this.y_0);
}
;
var Lpythagoras_i_AbstractRectangle_2_classLit = createForClass('pythagoras.i', 'AbstractRectangle', 191, Ljava_lang_Object_2_classLit);
function Dimension_2(){
  this.width_0 = 8;
  this.height_0 = 8;
}

defineClass(144, 190, {3:1, 190:1, 144:1}, Dimension_2);
_.height_0 = 0;
_.width_0 = 0;
var Lpythagoras_i_Dimension_2_classLit = createForClass('pythagoras.i', 'Dimension', 144, Lpythagoras_i_AbstractDimension_2_classLit);
function pointToString_0(x_0, y_0){
  var buf;
  buf = new StringBuilder;
  x_0 >= 0 && (buf.string += '+' , buf);
  buf.string += x_0;
  y_0 >= 0 && (buf.string += '+' , buf);
  buf.string += y_0;
  return buf.string;
}

function $setBounds(this$static, x_0, y_0, width_0, height){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  this$static.height_0 = height;
  this$static.width_0 = width_0;
}

function $setLocation(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
}

function $setSize_3(this$static, width_0, height){
  this$static.width_0 = width_0;
  this$static.height_0 = height;
}

function Rectangle_0(){
}

function Rectangle_1(d){
  $setBounds(this, 0, 0, d.width_0, d.height_0);
}

defineClass(123, 191, {3:1, 191:1, 123:1}, Rectangle_0, Rectangle_1);
_.height_0 = 0;
_.width_0 = 0;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_i_Rectangle_2_classLit = createForClass('pythagoras.i', 'Rectangle', 123, Lpythagoras_i_AbstractRectangle_2_classLit);
function NoninvertibleTransformException(s){
  RuntimeException_0.call(this, s);
}

defineClass(161, 8, {3:1, 13:1, 8:1, 10:1, 161:1}, NoninvertibleTransformException);
var Lpythagoras_util_NoninvertibleTransformException_2_classLit = createForClass('pythagoras.util', 'NoninvertibleTransformException', 161, Ljava_lang_RuntimeException_2_classLit);
defineClass(525, 1, {});
var Lreact_Reactor$Notifier_2_classLit = createForClass('react', 'Reactor/Notifier', 525, Ljava_lang_Object_2_classLit);
function AbstractSignal$1(){
}

defineClass(316, 525, {}, AbstractSignal$1);
_.notify_0 = function notify_0(slot, event_0, _1, _2){
  slot.onEmit(event_0);
}
;
var Lreact_AbstractSignal$1_2_classLit = createForClass('react', 'AbstractSignal/1', 316, Lreact_Reactor$Notifier_2_classLit);
function $clinit_AbstractValue(){
  $clinit_AbstractValue = emptyMethod;
  $clinit_Reactor();
  CHANGE = new AbstractValue$1;
}

function $connectNotify(this$static, listener){
  var conn, e, re;
  conn = $addCons(this$static, new Cons(this$static, listener));
  try {
    listener.onChange(this$static.get_2(), null);
    return conn;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 8)) {
      re = $e0;
      $close_6(conn);
      throw toJs(re);
    }
     else if (instanceOf($e0, 56)) {
      e = $e0;
      $close_6(conn);
      throw toJs(e);
    }
     else 
      throw toJs($e0);
  }
}

function $map(this$static, func){
  return new AbstractValue$2(func, this$static);
}

function $notifyChange(this$static, value_0, oldValue){
  $notify(this$static, CHANGE, value_0, oldValue, null);
}

function $updateAndNotify(this$static, value_0, force){
  var ovalue, oldValue;
  ovalue = (oldValue = this$static._value , this$static._value = value_0 , oldValue);
  (force || ($clinit_Reactor() , !(maskUndefined(value_0) === maskUndefined(ovalue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ovalue)))) && $notify(this$static, CHANGE, value_0, ovalue, null);
  return ovalue;
}

defineClass(117, 523, $intern_42);
_.placeholderListener = function placeholderListener_0(){
  var p;
  return p = ($clinit_Slots() , NOOP_2) , p;
}
;
_.equals_0 = function equals_32(other){
  var ovalue, value_0;
  if (other == null)
    return false;
  if (getClass__Ljava_lang_Class___devirtual$(other) != this.___clazz)
    return false;
  value_0 = this.get_2();
  ovalue = other.get_2();
  return $clinit_Reactor() , maskUndefined(value_0) === maskUndefined(ovalue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ovalue);
}
;
_.hashCode_0 = function hashCode_34(){
  var value_0;
  value_0 = this.get_2();
  return value_0 == null?0:hashCode__I__devirtual$(value_0);
}
;
_.toString_0 = function toString_61(){
  var cname;
  cname = $getName(this.___clazz);
  return $substring(cname, cname.lastIndexOf('.') + 1) + '(' + this.get_2() + ')';
}
;
var CHANGE;
var Lreact_AbstractValue_2_classLit = createForClass('react', 'AbstractValue', 117, Lreact_Reactor_2_classLit);
function AbstractValue$1(){
}

defineClass(313, 525, {}, AbstractValue$1);
_.notify_0 = function notify_1(lner, value_0, oldValue, ignored){
  lner.onChange(value_0, oldValue);
}
;
var Lreact_AbstractValue$1_2_classLit = createForClass('react', 'AbstractValue/1', 313, Lreact_Reactor$Notifier_2_classLit);
function $disconnect_0(this$static){
  if (this$static._conn) {
    $close_6(this$static._conn);
    this$static._conn = null;
  }
}

defineClass(530, 117, $intern_42);
_.connectionAdded = function connectionAdded_1(){
  !this._conn && (this._conn = $addConnection(this.val$outer3, new AbstractValue$2$1(this)));
}
;
_.connectionRemoved = function connectionRemoved_1(){
  !!this._listeners || $disconnect_0(this);
}
;
var Lreact_MappedValue_2_classLit = createForClass('react', 'MappedValue', 530, Lreact_AbstractValue_2_classLit);
function AbstractValue$2(val$func, val$outer){
  this.val$func2 = val$func;
  this.val$outer3 = val$outer;
}

defineClass(314, 530, $intern_42, AbstractValue$2);
_.get_2 = function get_10(){
  return $apply(this.val$outer3._value);
}
;
_.toString_0 = function toString_62(){
  return this.val$outer3 + '.map(' + this.val$func2 + ')';
}
;
var Lreact_AbstractValue$2_2_classLit = createForClass('react', 'AbstractValue/2', 314, Lreact_MappedValue_2_classLit);
function AbstractValue$2$1(this$1){
  this.this$11 = this$1;
}

defineClass(315, 1, {24:1}, AbstractValue$2$1);
_.onChange = function onChange_0(value_0, ovalue){
  $notifyChange(this.this$11, $apply(value_0), $apply(ovalue));
}
;
var Lreact_AbstractValue$2$1_2_classLit = createForClass('react', 'AbstractValue/2/1', 315, Ljava_lang_Object_2_classLit);
function AbstractValue$5(val$listener){
  this.val$listener1 = val$listener;
}

defineClass(118, 1, {24:1}, AbstractValue$5);
_.onChange = function onChange_1(newValue, oldValue){
  this.val$listener1.onEmit(newValue);
}
;
var Lreact_AbstractValue$5_2_classLit = createForClass('react', 'AbstractValue/5', 118, Ljava_lang_Object_2_classLit);
function $add_6(this$static, c){
  !this$static._set && (this$static._set = new HashSet);
  $add_2(this$static._set, c);
  return c;
}

function $close_4(this$static){
  var c, c$iterator, e, entry, error, outerIter;
  if (this$static._set) {
    error = null;
    for (c$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this$static._set.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); c$iterator.val$outerIter2.hasNext;) {
      c = (entry = $next_0(c$iterator.val$outerIter2) , entry.getKey());
      try {
        c.close_0();
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 13)) {
          e = $e0;
          !error && (error = new MultiFailureException);
          $addSuppressed(error, e);
        }
         else 
          throw toJs($e0);
      }
    }
    $reset(this$static._set.map_0);
    if (error)
      throw toJs(error);
  }
}

function Closeable$Set(){
}

defineClass(268, 1, $intern_29, Closeable$Set);
_.close_0 = function close_19(){
  $close_4(this);
}
;
var Lreact_Closeable$Set_2_classLit = createForClass('react', 'Closeable/Set', 268, Ljava_lang_Object_2_classLit);
function $clinit_Closeable$Util(){
  $clinit_Closeable$Util = emptyMethod;
  NOOP = new Closeable$Util$1;
}

var NOOP;
function Closeable$Util$1(){
}

defineClass(269, 1, $intern_29, Closeable$Util$1);
_.close_0 = function close_20(){
}
;
var Lreact_Closeable$Util$1_2_classLit = createForClass('react', 'Closeable/Util/1', 269, Ljava_lang_Object_2_classLit);
function $close_5(this$static){
  var ii;
  for (ii = 0; ii < this$static.val$cons1.length; ii++) {
    if (!this$static.val$cons1[ii])
      continue;
    this$static.val$cons1[ii].close_0();
    this$static.val$cons1[ii] = null;
  }
}

function Closeable$Util$2(val$cons){
  this.val$cons1 = val$cons;
}

defineClass(270, 1, $intern_29, Closeable$Util$2);
_.close_0 = function close_21(){
  $close_5(this);
}
;
var Lreact_Closeable$Util$2_2_classLit = createForClass('react', 'Closeable/Util/2', 270, Ljava_lang_Object_2_classLit);
defineClass(538, 1, $intern_29);
var Lreact_Connection_2_classLit = createForClass('react', 'Connection', 538, Ljava_lang_Object_2_classLit);
function $atPrio(this$static, priority){
  if (!this$static._owner)
    throw toJs(new IllegalStateException_0('Cannot change priority of disconnected connection.'));
  $disconnect(this$static._owner, this$static);
  this$static.next_0 = null;
  this$static._priority = priority;
  $addCons(this$static._owner, this$static);
  return this$static;
}

function $close_6(this$static){
  if (this$static._owner) {
    $defang(this$static._ref, this$static._owner.placeholderListener());
    $disconnect(this$static._owner, this$static);
    this$static._owner = null;
  }
}

function Cons(owner, listener){
  this._owner = owner;
  this._ref = new Cons$StrongRef(listener);
}

function insert(head, cons){
  if (!head) {
    return cons;
  }
   else if (cons._priority > head._priority) {
    cons.next_0 = head;
    return cons;
  }
   else {
    head.next_0 = insert(head.next_0, cons);
    return head;
  }
}

function remove(head, cons){
  if (!head)
    return null;
  if (head == cons)
    return head.next_0;
  head.next_0 = remove(head.next_0, cons);
  return head;
}

defineClass(84, 538, $intern_29, Cons);
_.close_0 = function close_22(){
  $close_6(this);
}
;
_.toString_0 = function toString_63(){
  return '[owner=' + this._owner + ', pri=' + this._priority + ', lner=' + this._ref._lner + ', hasNext=' + !!this.next_0 + ', oneShot=' + this._oneShot + ']';
}
;
_._oneShot = false;
_._priority = 0;
var Lreact_Cons_2_classLit = createForClass('react', 'Cons', 84, Lreact_Connection_2_classLit);
defineClass(539, 1, {});
var Lreact_Cons$ListenerRef_2_classLit = createForClass('react', 'Cons/ListenerRef', 539, Ljava_lang_Object_2_classLit);
function $defang(this$static, noop){
  this$static._lner = noop;
}

function Cons$StrongRef(lner){
  this._lner = lner;
}

defineClass(393, 539, {}, Cons$StrongRef);
var Lreact_Cons$StrongRef_2_classLit = createForClass('react', 'Cons/StrongRef', 393, Lreact_Cons$ListenerRef_2_classLit);
function MultiFailureException(){
  RuntimeException.call(this);
  this._failures = new ArrayList;
}

defineClass(482, 8, $intern_5, MultiFailureException);
_.fillInStackTrace = function fillInStackTrace_0(){
  return this;
}
;
_.getMessage = function getMessage_1(){
  var buf, failure, failure$iterator;
  buf = new StringBuilder;
  for (failure$iterator = new ArrayList$1(this._failures); failure$iterator.i < failure$iterator.this$01.array.length;) {
    failure = $next_2(failure$iterator);
    buf.string.length > 0 && (buf.string += ', ' , buf);
    $append_8($append_8($append_8(buf, $getName(failure.___clazz)), ': '), failure.getMessage());
  }
  return this._failures.array.length + ' failures: ' + buf;
}
;
_.printStackTrace = function printStackTrace_0(s){
  var failure, failure$iterator;
  for (failure$iterator = new ArrayList$1(this._failures); failure$iterator.i < failure$iterator.this$01.array.length;) {
    failure = $next_2(failure$iterator);
    failure.printStackTrace(s);
  }
}
;
var Lreact_MultiFailureException_2_classLit = createForClass('react', 'MultiFailureException', 482, Ljava_lang_RuntimeException_2_classLit);
defineClass(529, 523, {});
_.notify = function notify_2(notifier, a1, a2, a3){
  $notify(this, notifier, a1, a2, a3);
}
;
var Lreact_RCollection_2_classLit = createForClass('react', 'RCollection', 529, Lreact_Reactor_2_classLit);
function $map_0(this$static, func){
  var sigh, xf;
  sigh = new Try$1(func);
  return xf = ($clinit_RPromise() , new RPromise) , $onComplete(this$static, new RFuture$9(sigh, xf)) , xf;
}

function $onComplete(this$static, slot){
  var result;
  result = this$static.result();
  result?slot.onEmit(result):$addCons(this$static, new Cons(this$static, slot));
  return this$static;
}

defineClass(524, 523, {});
_.placeholderListener = function placeholderListener_1(){
  var p;
  p = ($clinit_Slots() , NOOP_2);
  return p;
}
;
var Lreact_RFuture_2_classLit = createForClass('react', 'RFuture', 524, Lreact_Reactor_2_classLit);
function RFuture$1(val$result){
  $clinit_Reactor();
  this.val$result1 = val$result;
}

defineClass(247, 524, {}, RFuture$1);
_.result = function result_2(){
  return this.val$result1;
}
;
var Lreact_RFuture$1_2_classLit = createForClass('react', 'RFuture/1', 247, Lreact_RFuture_2_classLit);
function RFuture$6(val$slot){
  this.val$slot2 = val$slot;
}

defineClass(248, 1, $intern_43, RFuture$6);
_.onEmit = function onEmit_7(result){
  result.isSuccess() && $onEmit_1(this.val$slot2, result.get_2());
}
;
var Lreact_RFuture$6_2_classLit = createForClass('react', 'RFuture/6', 248, Ljava_lang_Object_2_classLit);
function $onEmit_3(this$static, result){
  var t, xfResult;
  try {
    xfResult = $apply_1(this$static.val$func2, result);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      t = $e0;
      $complete(this$static.val$xf3, new Try$Failure(t));
      return;
    }
     else 
      throw toJs($e0);
  }
  $complete(this$static.val$xf3, xfResult);
}

function RFuture$9(val$func, val$xf){
  this.val$func2 = val$func;
  this.val$xf3 = val$xf;
}

defineClass(249, 1, $intern_43, RFuture$9);
_.onEmit = function onEmit_8(result){
  $onEmit_3(this, result);
}
;
var Lreact_RFuture$9_2_classLit = createForClass('react', 'RFuture/9', 249, Ljava_lang_Object_2_classLit);
function $clinit_RList(){
  $clinit_RList = emptyMethod;
  $clinit_Reactor();
  NOOP_0 = new RList$1;
  ADD = new RList$2;
  SET = new RList$3;
  REMOVE = new RList$4;
}

function $add_7(this$static, index_0, element){
  $add_0(this$static._impl, index_0, element);
  $notify(this$static, ADD, valueOf(index_0), element, null);
}

function $add_8(this$static, element){
  $add_7(this$static, this$static._impl.array.length, element);
  return true;
}

function $clear_1(this$static){
  var removed;
  while (this$static._impl.array.length != 0) {
    removed = $remove_0(this$static._impl, 0);
    $notify(this$static, REMOVE, valueOf(0), removed, null);
  }
}

function $connectNotify_0(this$static, listener){
  var ii, ll;
  for (ii = 0 , ll = this$static._impl.array.length; ii < ll; ii++)
    listener.onAdd_0($get_7(this$static._impl, ii));
  return $addCons(this$static, new Cons(this$static, listener));
}

function $get_11(this$static, index_0){
  return $get_7(this$static._impl, index_0);
}

function $indexOf_2(this$static, element){
  return $indexOf_1(this$static._impl, element, 0);
}

function $remove_8(this$static, index_0){
  var removed;
  removed = $remove_0(this$static._impl, index_0);
  $notify(this$static, REMOVE, valueOf(index_0), removed, null);
  return removed;
}

function $set_5(this$static, index_0, element){
  var removed;
  removed = $set_0(this$static._impl, index_0, element);
  $notify(this$static, SET, valueOf(index_0), element, removed);
  return removed;
}

function RList(impl){
  $clinit_RList();
  this._impl = impl;
}

defineClass(175, 529, $intern_21, RList);
_.placeholderListener = function placeholderListener_2(){
  var p;
  return p = NOOP_0 , p;
}
;
_.add_0 = function add_9(element){
  return $add_8(this, element);
}
;
_.contains = function contains_15(object){
  return $indexOf_1(this._impl, object, 0) != -1;
}
;
_.equals_0 = function equals_33(other){
  return other === this || $equals_1(this._impl, other);
}
;
_.get_0 = function get_11(index_0){
  return $get_11(this, index_0);
}
;
_.hashCode_0 = function hashCode_35(){
  return hashCode_19(this._impl);
}
;
_.iterator = function iterator_19(){
  var iiter;
  return iiter = new AbstractList$ListIteratorImpl(this._impl) , new RList$5(iiter);
}
;
_.size_1 = function size_16(){
  return this._impl.array.length;
}
;
_.toArray_0 = function toArray_11(array){
  return $toArray_1(this._impl, array);
}
;
_.toString_0 = function toString_64(){
  return 'RList(' + this._impl + ')';
}
;
var ADD, NOOP_0, REMOVE, SET;
var Lreact_RList_2_classLit = createForClass('react', 'RList', 175, Lreact_RCollection_2_classLit);
defineClass(78, 1, $intern_44);
_.onAdd_0 = function onAdd_1(elem){
}
;
_.onRemove_0 = function onRemove_1(index_0, elem){
  this.onRemove_1(elem);
}
;
_.onRemove_1 = function onRemove_2(elem){
}
;
_.onSet = function onSet(index_0, newElem){
}
;
var Lreact_RList$Listener_2_classLit = createForClass('react', 'RList/Listener', 78, Ljava_lang_Object_2_classLit);
function RList$1(){
}

defineClass(317, 78, $intern_44, RList$1);
var Lreact_RList$1_2_classLit = createForClass('react', 'RList/1', 317, Lreact_RList$Listener_2_classLit);
function RList$2(){
}

defineClass(318, 525, {}, RList$2);
_.notify_0 = function notify_3(lner, index_0, elem, ignored){
  lner.onAdd_0(elem);
}
;
var Lreact_RList$2_2_classLit = createForClass('react', 'RList/2', 318, Lreact_Reactor$Notifier_2_classLit);
function RList$3(){
}

defineClass(319, 525, {}, RList$3);
_.notify_0 = function notify_4(lner, index_0, newElem, oldElem){
  lner.onSet(index_0.value_0, newElem);
}
;
var Lreact_RList$3_2_classLit = createForClass('react', 'RList/3', 319, Lreact_Reactor$Notifier_2_classLit);
function RList$4(){
}

defineClass(320, 525, {}, RList$4);
_.notify_0 = function notify_5(lner, index_0, elem, ignored){
  lner.onRemove_0(index_0.value_0, elem);
}
;
var Lreact_RList$4_2_classLit = createForClass('react', 'RList/4', 320, Lreact_Reactor$Notifier_2_classLit);
function RList$5(val$iiter){
  this.val$iiter2 = val$iiter;
}

defineClass(140, 1, {}, RList$5);
_.hasNext_0 = function hasNext_11(){
  return $hasNext(this.val$iiter2);
}
;
_.next_1 = function next_12(){
  return $next_1(this.val$iiter2);
}
;
var Lreact_RList$5_2_classLit = createForClass('react', 'RList/5', 140, Ljava_lang_Object_2_classLit);
function $clinit_RPromise(){
  $clinit_RPromise = emptyMethod;
  $clinit_Reactor();
  COMPLETE = new RPromise$1;
}

function $complete(this$static, result){
  if (this$static._result)
    throw toJs(new IllegalStateException_0('Already completed'));
  this$static._result = result;
  try {
    $notify(this$static, COMPLETE, result, null, null);
  }
   finally {
    $clearConnections(this$static);
  }
}

function RPromise(){
  $clinit_RPromise();
}

defineClass(138, 524, {138:1}, RPromise);
_.result = function result_3(){
  return this._result;
}
;
var COMPLETE;
var Lreact_RPromise_2_classLit = createForClass('react', 'RPromise', 138, Lreact_RFuture_2_classLit);
function RPromise$1(){
}

defineClass(246, 525, {}, RPromise$1);
_.notify_0 = function notify_6(lner, value_0, i0, i1){
  lner.onEmit(value_0);
}
;
var Lreact_RPromise$1_2_classLit = createForClass('react', 'RPromise/1', 246, Lreact_Reactor$Notifier_2_classLit);
function $clinit_RSet(){
  $clinit_RSet = emptyMethod;
  $clinit_Reactor();
  NOOP_1 = new RSet$1;
  ADD_0 = new RSet$2;
  REMOVE_0 = new RSet$3;
}

function $add_9(this$static, elem){
  if (!$add_2(this$static._impl, elem))
    return false;
  $notify(this$static, ADD_0, elem, null, null);
  return true;
}

function $addAll_1(this$static, coll){
  var elem, elem$iterator, modified;
  modified = false;
  for (elem$iterator = coll.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    modified = modified | $add_9(this$static, elem);
  }
  return modified;
}

function $connectNotify_1(this$static, listener){
  var elem, elem$iterator, entry, iiter, outerIter;
  for (elem$iterator = (iiter = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this$static._impl.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)) , new RSet$5(iiter)); elem$iterator.val$iiter2.val$outerIter2.hasNext;) {
    elem = (entry = $next_0(elem$iterator.val$iiter2.val$outerIter2) , entry.getKey());
    $onAdd_0(listener, elem);
  }
  return $addCons(this$static, new Cons(this$static, listener));
}

function $remove_9(this$static, rawElem){
  if (!$remove_2(this$static._impl, rawElem))
    return false;
  $notify(this$static, REMOVE_0, rawElem, null, null);
  return true;
}

function RSet(impl){
  $clinit_RSet();
  this._impl = impl;
}

defineClass(309, 529, $intern_16, RSet);
_.placeholderListener = function placeholderListener_3(){
  var p;
  return p = NOOP_1 , p;
}
;
_.add_0 = function add_10(elem){
  return $add_9(this, elem);
}
;
_.contains = function contains_16(key){
  return $contains_2(this._impl, key);
}
;
_.equals_0 = function equals_34(other){
  return other === this || $equals(this._impl, other);
}
;
_.hashCode_0 = function hashCode_36(){
  return hashCode_18(this._impl);
}
;
_.iterator = function iterator_20(){
  var iiter, outerIter;
  return iiter = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this._impl.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)) , new RSet$5(iiter);
}
;
_.size_1 = function size_17(){
  return $size(this._impl.map_0);
}
;
_.toArray_0 = function toArray_12(array){
  return $toArray_0(this._impl, array);
}
;
_.toString_0 = function toString_65(){
  return 'RSet' + this._impl;
}
;
var ADD_0, NOOP_1, REMOVE_0;
var Lreact_RSet_2_classLit = createForClass('react', 'RSet', 309, Lreact_RCollection_2_classLit);
defineClass(116, 1, $intern_45);
_.onAdd_0 = function onAdd_2(elem){
}
;
_.onRemove_1 = function onRemove_3(elem){
}
;
var Lreact_RSet$Listener_2_classLit = createForClass('react', 'RSet/Listener', 116, Ljava_lang_Object_2_classLit);
function RSet$1(){
}

defineClass(310, 116, $intern_45, RSet$1);
var Lreact_RSet$1_2_classLit = createForClass('react', 'RSet/1', 310, Lreact_RSet$Listener_2_classLit);
function RSet$2(){
}

defineClass(311, 525, {}, RSet$2);
_.notify_0 = function notify_7(lner, elem, _1, _2){
  lner.onAdd_0(elem);
}
;
var Lreact_RSet$2_2_classLit = createForClass('react', 'RSet/2', 311, Lreact_Reactor$Notifier_2_classLit);
function RSet$3(){
}

defineClass(312, 525, {}, RSet$3);
_.notify_0 = function notify_8(lner, elem, _1, _2){
  lner.onRemove_1(elem);
}
;
var Lreact_RSet$3_2_classLit = createForClass('react', 'RSet/3', 312, Lreact_Reactor$Notifier_2_classLit);
function RSet$5(val$iiter){
  this.val$iiter2 = val$iiter;
}

defineClass(174, 1, {}, RSet$5);
_.hasNext_0 = function hasNext_12(){
  return this.val$iiter2.val$outerIter2.hasNext;
}
;
_.next_1 = function next_13(){
  var entry;
  return entry = $next_0(this.val$iiter2.val$outerIter2) , entry.getKey();
}
;
var Lreact_RSet$5_2_classLit = createForClass('react', 'RSet/5', 174, Ljava_lang_Object_2_classLit);
defineClass(522, 1, $intern_37);
var Lreact_Reactor$Runs_2_classLit = createForClass('react', 'Reactor/Runs', 522, Ljava_lang_Object_2_classLit);
function Reactor$1(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(243, 522, $intern_37, Reactor$1);
_.run = function run_3(){
  this.this$01._listeners = insert(this.this$01._listeners, this.val$cons2);
  this.this$01.connectionAdded();
}
;
var Lreact_Reactor$1_2_classLit = createForClass('react', 'Reactor/1', 243, Lreact_Reactor$Runs_2_classLit);
function Reactor$2(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(244, 522, $intern_37, Reactor$2);
_.run = function run_4(){
  this.this$01._listeners = remove(this.this$01._listeners, this.val$cons2);
  this.this$01.connectionRemoved();
}
;
var Lreact_Reactor$2_2_classLit = createForClass('react', 'Reactor/2', 244, Lreact_Reactor$Runs_2_classLit);
function Reactor$4(this$0, val$notifier, val$a1, val$a2, val$a3){
  this.this$01 = this$0;
  this.val$notifier2 = val$notifier;
  this.val$a13 = val$a1;
  this.val$a24 = val$a2;
  this.val$a35 = val$a3;
}

defineClass(245, 522, $intern_37, Reactor$4);
_.run = function run_5(){
  this.this$01.notify(this.val$notifier2, this.val$a13, this.val$a24, this.val$a35);
}
;
var Lreact_Reactor$4_2_classLit = createForClass('react', 'Reactor/4', 245, Lreact_Reactor$Runs_2_classLit);
function Signal$1(this$0){
  this.this$01 = this$0;
}

defineClass(178, 521, $intern_31, Signal$1);
_.onEmit = function onEmit_9(value_0){
  $emit(this.this$01, value_0);
}
;
var Lreact_Signal$1_2_classLit = createForClass('react', 'Signal/1', 178, Lreact_Slot_2_classLit);
function $clinit_Slots(){
  $clinit_Slots = emptyMethod;
  NOOP_2 = new Slots$1;
}

var NOOP_2;
defineClass(551, 521, $intern_46);
_.onEmit = function onEmit_10(event_0){
}
;
_.run = function run_6(){
}
;
var Lreact_UnitSlot_2_classLit = createForClass('react', 'UnitSlot', 551, Lreact_Slot_2_classLit);
function Slots$1(){
}

defineClass(481, 551, $intern_46, Slots$1);
var Lreact_Slots$1_2_classLit = createForClass('react', 'Slots/1', 481, Lreact_UnitSlot_2_classLit);
defineClass(156, 1, {156:1});
var Lreact_Try_2_classLit = createForClass('react', 'Try', 156, Ljava_lang_Object_2_classLit);
function $apply_1(this$static, result){
  return result.map_1(this$static.val$func1);
}

function Try$1(val$func){
  this.val$func1 = val$func;
}

defineClass(475, 1, {}, Try$1);
var Lreact_Try$1_2_classLit = createForClass('react', 'Try/1', 475, Ljava_lang_Object_2_classLit);
function Try$Failure(cause){
  this.cause = cause;
}

defineClass(157, 156, {156:1}, Try$Failure);
_.get_2 = function get_12(){
  if (instanceOf(this.cause, 8)) {
    throw toJs(this.cause);
  }
   else if (instanceOf(this.cause, 56)) {
    throw toJs(this.cause);
  }
   else {
    throw toJs($initCause(new RuntimeException, this.cause));
  }
}
;
_.isSuccess = function isSuccess(){
  return false;
}
;
_.map_1 = function map_1(func){
  return this;
}
;
_.toString_0 = function toString_66(){
  return 'Failure(' + this.cause + ')';
}
;
var Lreact_Try$Failure_2_classLit = createForClass('react', 'Try/Failure', 157, Lreact_Try_2_classLit);
function Try$Success(value_0){
  this.value_0 = value_0;
}

defineClass(131, 156, {156:1}, Try$Success);
_.get_2 = function get_13(){
  return this.value_0;
}
;
_.isSuccess = function isSuccess_0(){
  return true;
}
;
_.map_1 = function map_2(func){
  var t;
  try {
    return new Try$Success($apply_0(func, this.value_0));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      t = $e0;
      return new Try$Failure(t);
    }
     else 
      throw toJs($e0);
  }
}
;
_.toString_0 = function toString_67(){
  return 'Success(' + this.value_0 + ')';
}
;
var Lreact_Try$Success_2_classLit = createForClass('react', 'Try/Success', 131, Lreact_Try_2_classLit);
function Value(value_0){
  $clinit_AbstractValue();
  this._value = value_0;
}

defineClass(63, 117, $intern_42, Value);
_.get_2 = function get_14(){
  return this._value;
}
;
var Lreact_Value_2_classLit = createForClass('react', 'Value', 63, Lreact_AbstractValue_2_classLit);
function findFirst(bitSet, p){
  var i;
  for (i = $nextSetBit(bitSet, 0); i >= 0; i = $nextSetBit(bitSet, i + 1)) {
    if ($test(p, valueOf(i)))
      return $clinit_OptionalInt() , new OptionalInt_0(i);
  }
  return $clinit_OptionalInt() , $clinit_OptionalInt() , EMPTY_1;
}

function forEach(bitSet, f){
  var i;
  for (i = $nextSetBit(bitSet, 0); i >= 0; i = $nextSetBit(bitSet, i + 1)) {
    $accept_0(f, valueOf(i));
  }
}

function randomElement(random, bitSet){
  var cardinality, i, n;
  cardinality = $cardinality(bitSet);
  if (cardinality == 0)
    return $clinit_OptionalInt() , $clinit_OptionalInt() , EMPTY_1;
  n = $nextInt(random, cardinality);
  i = $nextSetBit(bitSet, 0);
  while (n-- > 0) {
    i = $nextSetBit(bitSet, i + 1);
  }
  return $clinit_OptionalInt() , new OptionalInt_0(i);
}

function $clickOnSquare(this$static, pos){
  var clickedPieceIndex, piece;
  clickedPieceIndex = $pieceIndexByPos(this$static.state, pos);
  if (this$static.selectedPieceId._value.value_0 >= 0) {
    piece = $pieceById(this$static.state, this$static.selectedPieceId._value.value_0);
    piece.pos == pos?$updateAndNotify(this$static.selectedPieceId, valueOf(-1), false):$tryMoveSelectedPiece(this$static.state, piece, pos) && $updateAndNotify(this$static.selectedPieceId, valueOf(-1), false);
  }
   else {
    clickedPieceIndex >= 0 && $updateAndNotify(this$static.selectedPieceId, valueOf($get_11(this$static.state.pieces, clickedPieceIndex).id_0), false);
  }
}

function $createSquareLayers(this$static){
  var color_0, squareLayer, squareLayersBuilder, x_0, y_0;
  squareLayersBuilder = ($clinit_ImmutableList() , new ImmutableList$Builder);
  for (y_0 = 0; y_0 < this$static.state.dim.height_0; ++y_0) {
    for (x_0 = 0; x_0 < this$static.state.dim.width_0; ++x_0) {
      color_0 = (x_0 + y_0) % 2 == 0?-12566464:-8355712;
      squareLayer = $setDepth($setOrigin($setName(new Layers$2(1, 1, color_0), 'square_' + x_0 + '_' + y_0), ($clinit_Layer$Origin() , CENTER)), 0);
      $addAt(this$static.rootLayer, squareLayer, x_0 + 0.5, y_0 + 0.5);
      $add_1(squareLayersBuilder.contents, checkNotNull(squareLayer));
    }
  }
  return copyFromCollection(squareLayersBuilder.contents);
}

function $lambda$0_0(this$static, e_0){
  var x_0, y_0;
  $debug_1(this$static.plat.log_0, 'Handling PieceMovedEvent', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, ['event', e_0]));
  $ifPresent(e_0.capture, new Board$lambda$2$Type(this$static));
  $forEach(e_0.pushedEvents, new Board$lambda$3$Type(this$static));
  x_0 = toX(this$static.state.dim, e_0.piece.pos);
  y_0 = toY(this$static.state.dim, e_0.piece.pos);
  $using($in($to_0($add_11(this$static.screen_0.iface.anim, new Animation$Two(new AnimBuilder$21($get_6(this$static.pieceLayers, valueOf(e_0.piece.id_0))))), x_0 + 0.5, y_0 + 0.5), 200), ($clinit_Interpolator() , EASE_INOUT));
}

function $lambda$1(this$static, pieceId_0, oldPieceId_1){
  !!oldPieceId_1 && oldPieceId_1.value_0 >= 0 && $ifPresent(ofNullable($get_6(this$static.pieceLayers, oldPieceId_1)), new Board$lambda$4$Type);
  pieceId_0.value_0 >= 0 && $ifPresent(ofNullable($get_6(this$static.pieceLayers, pieceId_0)), new Board$lambda$5$Type);
}

function $lambda$2(this$static, piece_0){
  $remove(this$static.pieceLayers, valueOf(piece_0.id_0)).close_0();
}

function $lambda$3(this$static, push_0){
  var x_0, y_0;
  if (contains_4(this$static.state.dim, push_0.piece.pos)) {
    x_0 = toX(this$static.state.dim, push_0.piece.pos);
    y_0 = toY(this$static.state.dim, push_0.piece.pos);
    $using($in($to_0($add_11(this$static.screen_0.iface.anim, new Animation$Two(new AnimBuilder$21($get_6(this$static.pieceLayers, valueOf(push_0.piece.id_0))))), x_0 + 0.5, y_0 + 0.5), 200), ($clinit_Interpolator() , EASE_INOUT));
  }
   else {
    $remove(this$static.pieceLayers, valueOf(push_0.piece.id_0)).close_0();
  }
}

function Board(screen_0){
  var fogLayers, intentionLayers;
  this.rootLayer = new GroupLayer;
  this.pieceLayers = new HashMap;
  this.selectedPieceId = ($clinit_AbstractValue() , new Value(valueOf(-1)));
  this.screen_0 = screen_0;
  this.plat = screen_0.plat;
  this.state = screen_0.state;
  $setName(this.rootLayer, 'board');
  $setSize_0(this.rootLayer, this.state.dim.width_0, this.state.dim.height_0);
  $setOrigin(this.rootLayer, ($clinit_Layer$Origin() , CENTER));
  $addAt(this.rootLayer, $setDepth($setOrigin(new Layers$2(this.state.dim.width_0, this.state.dim.height_0, -14540254), CENTER), -10), this.rootLayer.width_0 / 2, this.rootLayer.height_0 / 2);
  this.squareLayers = $createSquareLayers(this);
  $connectNotify_0(this.state.pieces, new Board$1(this));
  $addConnection(this.state.pieceMoved, new Board$lambda$0$Type(this));
  intentionLayers = new ArrayList;
  $connectNotify_0(this.state.moveIntentions, new Board$2(this, intentionLayers));
  $connectNotify(this.selectedPieceId, new Board$lambda$1$Type(this));
  fogLayers = new ArrayList;
  $connectNotify_1(this.state.fogSquares, new Board$3(this, fogLayers));
  $addConnection($events(this.rootLayer), new Board$4(this));
}

defineClass(435, 1, {}, Board);
var Lrook_core_Board_2_classLit = createForClass('rook.core', 'Board', 435, Ljava_lang_Object_2_classLit);
function Board$1(this$0){
  this.this$01 = this$0;
}

defineClass(436, 78, $intern_44, Board$1);
_.onAdd_0 = function onAdd_3(piece){
  var x_0, y_0, pieceLayer;
  x_0 = toX(this.this$01.state.dim, piece.pos);
  y_0 = toY(this.this$01.state.dim, piece.pos);
  pieceLayer = $setTranslation($setDepth($setOrigin($setSize_1(new ImageLayer_0($pieceImage(this.this$01.screen_0.game.images, piece.side, piece.type_0))), ($clinit_Layer$Origin() , CENTER)), 1), x_0 + 0.5, y_0 + 0.5);
  $put_3(this.this$01.pieceLayers, valueOf(piece.id_0), pieceLayer);
  $add_5(this.this$01.rootLayer, pieceLayer);
}
;
var Lrook_core_Board$1_2_classLit = createForClass('rook.core', 'Board/1', 436, Lreact_RList$Listener_2_classLit);
function Board$2(this$0, val$intentionLayers){
  this.this$01 = this$0;
  this.val$intentionLayers2 = val$intentionLayers;
  this.width_0 = this.this$01.state.dim.width_0;
  this.height_0 = this.this$01.state.dim.height_0;
}

defineClass(440, 78, $intern_44, Board$2);
_.onAdd_0 = function onAdd_4(intention){
  var piece, posX, posY, dest, destX, destY, intentionLayer;
  piece = $pieceById(this.this$01.state, intention.pieceId);
  posX = toX(this.this$01.state.dim, piece.pos);
  posY = toY(this.this$01.state.dim, piece.pos);
  dest = $get_10($calcDest(intention, this.this$01.state)).value_0;
  destX = toX(this.this$01.state.dim, dest);
  destY = toY(this.this$01.state.dim, dest);
  intentionLayer = $setDepth(new Board$2$1(this, posX, posY, destX, destY), 2);
  $add_1(this.val$intentionLayers2, intentionLayer);
  $add_5(this.this$01.rootLayer, intentionLayer);
}
;
_.onRemove_0 = function onRemove_4(index_0, intention){
  $remove_0(this.val$intentionLayers2, index_0).close_0();
}
;
_.height_0 = 0;
_.width_0 = 0;
var Lrook_core_Board$2_2_classLit = createForClass('rook.core', 'Board/2', 440, Lreact_RList$Listener_2_classLit);
function Board$2$1(this$1, val$posX, val$posY, val$destX, val$destY){
  this.this$11 = this$1;
  this.val$posX2 = val$posX;
  this.val$posY3 = val$posY;
  this.val$destX4 = val$destX;
  this.val$destY5 = val$destY;
  Layer.call(this);
}

defineClass(441, 20, $intern_38, Board$2$1);
_.height_1 = function height_3(){
  return this.this$11.height_0;
}
;
_.paintImpl = function paintImpl_1(surf){
  $drawLine((surf.fillColor = -5111808 , surf), this.val$posX2 + 0.5, this.val$posY3 + 0.5, this.val$destX4 + 0.5, this.val$destY5 + 0.5, 0.10000000149011612);
}
;
_.width_1 = function width_4(){
  return this.this$11.width_0;
}
;
_.val$destX4 = 0;
_.val$destY5 = 0;
_.val$posX2 = 0;
_.val$posY3 = 0;
var Lrook_core_Board$2$1_2_classLit = createForClass('rook.core', 'Board/2/1', 441, Lplayn_scene_Layer_2_classLit);
function $onAdd_0(this$static, pos){
  var layer, x_0, y_0;
  x_0 = toX(this$static.this$01.state.dim, pos.value_0);
  y_0 = toY(this$static.this$01.state.dim, pos.value_0);
  layer = $setDepth($setOrigin($setName(new Layers$2(1, 1, $intern_47), 'fog_' + x_0 + '_' + y_0), ($clinit_Layer$Origin() , CENTER)), 3);
  $addAt(this$static.this$01.rootLayer, layer, x_0 + 0.5, y_0 + 0.5);
  while (this$static.val$fogLayers2.array.length <= pos.value_0) {
    $add_1(this$static.val$fogLayers2, null);
  }
  $set_0(this$static.val$fogLayers2, pos.value_0, layer);
}

function Board$3(this$0, val$fogLayers){
  this.this$01 = this$0;
  this.val$fogLayers2 = val$fogLayers;
}

defineClass(445, 116, $intern_45, Board$3);
_.onAdd_0 = function onAdd_5(pos){
  $onAdd_0(this, pos);
}
;
_.onRemove_1 = function onRemove_5(pos){
  $get_7(this.val$fogLayers2, pos.value_0).close_0();
  $set_0(this.val$fogLayers2, pos.value_0, null);
}
;
var Lrook_core_Board$3_2_classLit = createForClass('rook.core', 'Board/3', 445, Lreact_RSet$Listener_2_classLit);
function $onStart(this$static, iact){
  var pos, squareLayer, x_0, y_0;
  checkState(iact.hitLayer == this$static.this$01.rootLayer);
  pos = (x_0 = round_int(iact.local.x_0) , y_0 = round_int(iact.local.y_0) , $contains_4(this$static.this$01.state.rect, x_0, y_0)?toIndex_0(this$static.this$01.state.dim, x_0, y_0):-1);
  $debug_1(this$static.this$01.plat.log_0, 'onStart', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, ['iact', iact, 'screen', new Point_1(iact), 'local', iact.local, 'pos', valueOf(pos)]));
  if (pos < 0)
    return;
  squareLayer = $get(this$static.this$01.squareLayers, pos);
  $in($to($from($add_11(this$static.this$01.screen_0.iface.anim, new Animation$One(new AnimBuilder$3(squareLayer))))), 500);
  $clickOnSquare(this$static.this$01, pos);
}

function Board$4(this$0){
  this.this$01 = this$0;
}

defineClass(446, 544, $intern_31, Board$4);
var Lrook_core_Board$4_2_classLit = createForClass('rook.core', 'Board/4', 446, Lplayn_scene_Pointer$Listener_2_classLit);
function Board$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(439, 1, $intern_43, Board$lambda$0$Type);
_.onEmit = function onEmit_11(arg0){
  $lambda$0_0(this.$$outer_0, arg0);
}
;
var Lrook_core_Board$lambda$0$Type_2_classLit = createForClass('rook.core', 'Board/lambda$0$Type', 439, Ljava_lang_Object_2_classLit);
function Board$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(444, 1, {24:1}, Board$lambda$1$Type);
_.onChange = function onChange_2(arg0, arg1){
  $lambda$1(this.$$outer_0, arg0, arg1);
}
;
var Lrook_core_Board$lambda$1$Type_2_classLit = createForClass('rook.core', 'Board/lambda$1$Type', 444, Ljava_lang_Object_2_classLit);
function Board$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(437, 1, {}, Board$lambda$2$Type);
_.accept_0 = function accept_6(arg0){
  $lambda$2(this.$$outer_0, arg0);
}
;
var Lrook_core_Board$lambda$2$Type_2_classLit = createForClass('rook.core', 'Board/lambda$2$Type', 437, Ljava_lang_Object_2_classLit);
function Board$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(438, 1, {}, Board$lambda$3$Type);
_.accept_0 = function accept_7(arg0){
  $lambda$3(this.$$outer_0, arg0);
}
;
var Lrook_core_Board$lambda$3$Type_2_classLit = createForClass('rook.core', 'Board/lambda$3$Type', 438, Ljava_lang_Object_2_classLit);
function Board$lambda$4$Type(){
}

defineClass(442, 1, {}, Board$lambda$4$Type);
_.accept_0 = function accept_8(arg0){
  $setTint(arg0, -1);
}
;
var Lrook_core_Board$lambda$4$Type_2_classLit = createForClass('rook.core', 'Board/lambda$4$Type', 442, Ljava_lang_Object_2_classLit);
function Board$lambda$5$Type(){
}

defineClass(443, 1, {}, Board$lambda$5$Type);
_.accept_0 = function accept_9(arg0){
  $setTint(arg0, -256);
}
;
var Lrook_core_Board$lambda$5$Type_2_classLit = createForClass('rook.core', 'Board/lambda$5$Type', 443, Ljava_lang_Object_2_classLit);
function BoardScreen(game, state){
  this.layer = new GroupLayer;
  this.update = ($clinit_AbstractSignal() , new Signal);
  this.paint = new Signal;
  this._closeOnHide = new Closeable$Set;
  this._game = game;
  this._sizeValue = ($clinit_AbstractValue() , new Value(this._game.plat.graphics.viewSize));
  this.iface = new Interface(this.paint);
  this.updateAnim = new Animator;
  this.plat = game.plat;
  new DialogKeeper;
  $addConnection(this.update, this.updateAnim.onPaint);
  this.game = game;
  this.state = state;
}

defineClass(344, 343, $intern_18, BoardScreen);
var Lrook_core_BoardScreen_2_classLit = createForClass('rook.core', 'BoardScreen', 344, Lde_cdietze_playn_1util_Screen_2_classLit);
function $clinit_Direction(){
  $clinit_Direction = emptyMethod;
  UP_0 = new Direction$1;
  UP_RIGHT = new Direction$2;
  RIGHT_1 = new Direction$3;
  DOWN_RIGHT = new Direction$4;
  DOWN_0 = new Direction$5;
  DOWN_LEFT = new Direction$6;
  LEFT_1 = new Direction$7;
  UP_LEFT = new Direction$8;
}

function Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function fromVector(offX, offY){
  $clinit_Direction();
  if (offY < 0) {
    if (offX > 0)
      return UP_RIGHT;
    if (offX < 0)
      return UP_LEFT;
    return UP_0;
  }
   else if (offY > 0) {
    if (offX > 0)
      return DOWN_RIGHT;
    if (offX < 0)
      return DOWN_LEFT;
    return DOWN_0;
  }
   else {
    if (offX > 0)
      return RIGHT_1;
    if (offX < 0)
      return LEFT_1;
    throw toJs(new IllegalArgumentException_0('Cannot convert to Direction: offX:' + offX + ', offY:' + offY));
  }
}

function values_23(){
  $clinit_Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lrook_core_Direction_2_classLit, 1), $intern_1, 23, 0, [UP_0, UP_RIGHT, RIGHT_1, DOWN_RIGHT, DOWN_0, DOWN_LEFT, LEFT_1, UP_LEFT]);
}

defineClass(23, 6, $intern_48);
var DOWN_0, DOWN_LEFT, DOWN_RIGHT, LEFT_1, RIGHT_1, UP_0, UP_LEFT, UP_RIGHT;
var Lrook_core_Direction_2_classLit = createForEnum('rook.core', 'Direction', 23, Ljava_lang_Enum_2_classLit, values_23);
function Direction$1(){
  Direction.call(this, 'UP', 0);
}

defineClass(494, 23, $intern_48, Direction$1);
_.x_2 = function x_6(){
  return 0;
}
;
_.y_2 = function y_6(){
  return -1;
}
;
var Lrook_core_Direction$1_2_classLit = createForEnum('rook.core', 'Direction/1', 494, Lrook_core_Direction_2_classLit, null);
function Direction$2(){
  Direction.call(this, 'UP_RIGHT', 1);
}

defineClass(495, 23, $intern_48, Direction$2);
_.x_2 = function x_7(){
  return 1;
}
;
_.y_2 = function y_7(){
  return -1;
}
;
var Lrook_core_Direction$2_2_classLit = createForEnum('rook.core', 'Direction/2', 495, Lrook_core_Direction_2_classLit, null);
function Direction$3(){
  Direction.call(this, 'RIGHT', 2);
}

defineClass(496, 23, $intern_48, Direction$3);
_.x_2 = function x_8(){
  return 1;
}
;
_.y_2 = function y_8(){
  return 0;
}
;
var Lrook_core_Direction$3_2_classLit = createForEnum('rook.core', 'Direction/3', 496, Lrook_core_Direction_2_classLit, null);
function Direction$4(){
  Direction.call(this, 'DOWN_RIGHT', 3);
}

defineClass(497, 23, $intern_48, Direction$4);
_.x_2 = function x_9(){
  return 1;
}
;
_.y_2 = function y_9(){
  return 1;
}
;
var Lrook_core_Direction$4_2_classLit = createForEnum('rook.core', 'Direction/4', 497, Lrook_core_Direction_2_classLit, null);
function Direction$5(){
  Direction.call(this, 'DOWN', 4);
}

defineClass(498, 23, $intern_48, Direction$5);
_.x_2 = function x_10(){
  return 0;
}
;
_.y_2 = function y_10(){
  return 1;
}
;
var Lrook_core_Direction$5_2_classLit = createForEnum('rook.core', 'Direction/5', 498, Lrook_core_Direction_2_classLit, null);
function Direction$6(){
  Direction.call(this, 'DOWN_LEFT', 5);
}

defineClass(499, 23, $intern_48, Direction$6);
_.x_2 = function x_11(){
  return -1;
}
;
_.y_2 = function y_11(){
  return 1;
}
;
var Lrook_core_Direction$6_2_classLit = createForEnum('rook.core', 'Direction/6', 499, Lrook_core_Direction_2_classLit, null);
function Direction$7(){
  Direction.call(this, 'LEFT', 6);
}

defineClass(500, 23, $intern_48, Direction$7);
_.x_2 = function x_12(){
  return -1;
}
;
_.y_2 = function y_12(){
  return 0;
}
;
var Lrook_core_Direction$7_2_classLit = createForEnum('rook.core', 'Direction/7', 500, Lrook_core_Direction_2_classLit, null);
function Direction$8(){
  Direction.call(this, 'UP_LEFT', 7);
}

defineClass(501, 23, $intern_48, Direction$8);
_.x_2 = function x_13(){
  return -1;
}
;
_.y_2 = function y_13(){
  return -1;
}
;
var Lrook_core_Direction$8_2_classLit = createForEnum('rook.core', 'Direction/8', 501, Lrook_core_Direction_2_classLit, null);
function $applyPieceMovedEvent(this$static, movedEvent){
  $ifPresent(movedEvent.capture, new GameState$lambda$13$Type(this$static));
  $forEach(movedEvent.pushedEvents, new GameState$lambda$14$Type(this$static));
  $set_5(this$static.pieces, $pieceIndexById(this$static, movedEvent.piece.id_0), movedEvent.piece);
}

function $calcEnemyPieceSquares(this$static, result){
  $forEach_1($filter(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.pieces)), new GameState$lambda$2$Type), new GameState$lambda$3$Type(result));
  return result;
}

function $calcOccupiedSquaresForEnemy(this$static, result){
  $or(result, this$static.playerPieceSquares._value);
  $or(result, this$static.enemyPieceSquares._value);
  return result;
}

function $calcOccupiedSquaresForPlayer(this$static, result){
  $forEach(this$static.fogSquares, new GameState$0methodref$set$Type(result));
  $or(result, this$static.playerPieceSquares._value);
  $or(result, this$static.enemyPieceSquares._value);
  return result;
}

function $calcPlayerPieceSquares(this$static, result){
  $forEach_1($filter(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.pieces)), new GameState$lambda$0$Type), new GameState$lambda$1$Type(result));
  return result;
}

function $calcPushList(this$static, pushedX, pushedY, dir_0, result){
  var destX, destY, piece, pushedPiece, pushedPos;
  if (!contains_5(this$static.dim, pushedX, pushedY))
    return result;
  pushedPos = toIndex_0(this$static.dim, pushedX, pushedY);
  piece = $findFirst($filter(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.pieces)), new GameState$lambda$6$Type(pushedPos)));
  if (piece.ref == null)
    return result;
  destX = pushedX + dir_0.x_2();
  destY = pushedY + dir_0.y_2();
  pushedPiece = new Piece_0($pos(newBuilder((checkCriticalElement(piece.ref != null) , piece.ref)), toIndex_0(this$static.dim, destX, destY)));
  $add(result, new PiecePushedEvent(pushedPiece, pushedPos));
  $calcPushList(this$static, destX, destY, dir_0, result);
  return result;
}

function $lambda$10(this$static, result_1){
  return $updateAndNotify(result_1, $calcOccupiedSquaresForEnemy(this$static, new BitSet), false);
}

function $lambda$13(this$static, piece_0){
  return $remove_8(this$static.pieces, $pieceIndexById(this$static, piece_0.id_0));
}

function $lambda$14(this$static, e_0){
  contains_4(this$static.dim, e_0.piece.pos)?$set_5(this$static.pieces, $pieceIndexById(this$static, e_0.piece.id_0), e_0.piece):$remove_8(this$static.pieces, $pieceIndexById(this$static, e_0.piece.id_0));
}

function $lambda$15(this$static, intention_0){
  var capture, dest, movedEvent, newPiece, piece, pieceAtDestIndex, pieceIndex;
  pieceIndex = $pieceIndexById(this$static, intention_0.pieceId);
  if (pieceIndex < 0)
    return;
  piece = $get_11(this$static.pieces, pieceIndex);
  dest = $get_10($calcDest(intention_0, this$static)).value_0;
  if (piece.pos != dest) {
    pieceAtDestIndex = indexOf(this$static.pieces, new GameState$lambda$12$Type(dest));
    capture = pieceAtDestIndex >= 0?($clinit_Optional() , new Optional(checkCriticalNotNull($get_11(this$static.pieces, pieceAtDestIndex)))):($clinit_Optional() , $clinit_Optional() , EMPTY_0);
    newPiece = new Piece_0($pos(newBuilder(piece), dest));
    movedEvent = new PieceMovedEvent(newPiece, piece.pos, ($clinit_ImmutableList() , $clinit_ImmutableList() , EMPTY), capture);
    $applyPieceMovedEvent(this$static, movedEvent);
    $emit(this$static.pieceMoved, movedEvent);
  }
}

function $lambda$16(this$static, piece_0){
  var destX, destY, dir_0, moveDest, moveLength, vecX, vecY, x_0, y_0;
  moveDest = $pickEnemyMove(this$static, piece_0);
  if (moveDest.present) {
    x_0 = toX(this$static.dim, piece_0.pos);
    y_0 = toY(this$static.dim, piece_0.pos);
    destX = toX(this$static.dim, (checkCriticalElement(moveDest.present) , moveDest.ref));
    destY = toY(this$static.dim, (checkCriticalElement(moveDest.present) , moveDest.ref));
    vecX = destX - x_0;
    vecY = destY - y_0;
    moveLength = (vecX < 0?-vecX:vecX) > (vecY < 0?-vecY:vecY)?vecX < 0?-vecX:vecX:vecY < 0?-vecY:vecY;
    dir_0 = fromVector(destX - x_0, destY - y_0);
    $add_8(this$static.moveIntentions, new MoveIntention(piece_0.id_0, dir_0, moveLength));
  }
}

function $lambda$17(this$static, i_0){
  var t;
  t = $pieceAtPos(this$static, i_0.value_0);
  return t.ref != null && (checkCriticalElement(t.ref != null) , t.ref).side == ($clinit_Piece$Side() , PLAYER) && (checkCriticalElement(t.ref != null) , t.ref).type_0 == ($clinit_Piece$Type() , KING);
}

function $lambda$7(this$static, result_1){
  return $updateAndNotify(result_1, $calcOccupiedSquaresForPlayer(this$static, new BitSet), false);
}

function $lambda$8(this$static, result_1){
  return $updateAndNotify(result_1, $calcOccupiedSquaresForPlayer(this$static, new BitSet), false);
}

function $lambda$9(this$static, result_1){
  return $updateAndNotify(result_1, $calcOccupiedSquaresForEnemy(this$static, new BitSet), false);
}

function $pickEnemyMove(this$static, piece){
  var moves, playerKing;
  moves = moves_0(this$static.dim, piece.type_0, piece.pos, this$static.occupiedSquaresForEnemy._value, this$static.playerPieceSquares._value, new BitSet);
  playerKing = findFirst(moves, new GameState$lambda$17$Type(this$static));
  if (playerKing.present)
    return playerKing;
  return randomElement(this$static.random, moves);
}

function $pieceAtPos(this$static, pos){
  return $findFirst($filter(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.pieces)), new GameState$lambda$6$Type(pos)));
}

function $pieceById(this$static, pieceId){
  return $get_11(this$static.pieces, indexOf(this$static.pieces, new GameState$lambda$11$Type(pieceId)));
}

function $pieceIndexById(this$static, pieceId){
  return indexOf(this$static.pieces, new GameState$lambda$11$Type(pieceId));
}

function $pieceIndexByPos(this$static, pos){
  return indexOf(this$static.pieces, new GameState$lambda$12$Type(pos));
}

function $revealBorderingSquares(this$static, pos){
  var set_0;
  $remove_9(this$static.fogSquares, valueOf(pos));
  set_0 = borderingNeighbors(this$static.dim, pos, new BitSet);
  forEach(set_0, new GameState$1methodref$remove$Type(this$static.fogSquares));
}

function $tryMoveSelectedPiece(this$static, piece, dest){
  var destX, destY, dir_0, movedEvent, moves, newPiece, pieceIndex, posX, posY, pushedEvents;
  moves = moves_0(this$static.dim, piece.type_0, piece.pos, this$static.occupiedSquaresForPlayer._value, this$static.pieceSquares._value, new BitSet);
  if ($get_8(moves, dest)) {
    pieceIndex = $indexOf_2(this$static.pieces, piece);
    checkState(pieceIndex >= 0);
    posX = toX(this$static.dim, piece.pos);
    posY = toY(this$static.dim, piece.pos);
    destX = toX(this$static.dim, dest);
    destY = toY(this$static.dim, dest);
    dir_0 = fromVector(destX - posX, destY - posY);
    pushedEvents = $build($calcPushList(this$static, destX, destY, dir_0, ($clinit_ImmutableList() , new ImmutableList$Builder)));
    newPiece = new Piece_0($pos(newBuilder(piece), dest));
    movedEvent = new PieceMovedEvent(newPiece, piece.pos, pushedEvents, ($clinit_Optional() , $clinit_Optional() , EMPTY_0));
    $applyPieceMovedEvent(this$static, movedEvent);
    $emit(this$static.pieceMoved, movedEvent);
    $forEach(this$static.moveIntentions, new GameState$lambda$15$Type(this$static));
    $clear_1(this$static.moveIntentions);
    $forEach_1($filter(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.pieces)), new GameState$lambda$5$Type), new GameState$lambda$16$Type(this$static));
    $debug(this$static.log_0, 'Made intentions for next move: ' + this$static.moveIntentions);
    return true;
  }
   else {
    return false;
  }
}

function $updatePiecesBitSets(this$static){
  $updateAndNotify(this$static.playerPieceSquares, $calcPlayerPieceSquares(this$static, new BitSet), false);
  $updateAndNotify(this$static.enemyPieceSquares, $calcEnemyPieceSquares(this$static, new BitSet), false);
}

function GameState(random, log_0){
  var result;
  this.dim = new Dimension_2;
  this.rect = new Rectangle_1(this.dim);
  this.pieces = ($clinit_RList() , $clinit_RList() , new RList(new ArrayList));
  this.fogSquares = ($clinit_RSet() , $clinit_RSet() , new RSet(new HashSet));
  this.pieceMoved = ($clinit_AbstractSignal() , new Signal);
  this.playerPieceSquares = ($clinit_AbstractValue() , new Value($calcPlayerPieceSquares(this, new BitSet)));
  this.enemyPieceSquares = new Value($calcEnemyPieceSquares(this, new BitSet));
  this.moveIntentions = (null , new RList(new ArrayList));
  result = new Value(new BitSet);
  $addConnection(this.fogSquares, new GameState$1(this, result));
  $addConnection(this.playerPieceSquares, new AbstractValue$5(new GameState$lambda$7$Type(this, result)));
  $addConnection(this.enemyPieceSquares, new AbstractValue$5(new GameState$lambda$8$Type(this, result)));
  $updateAndNotify(result, $calcOccupiedSquaresForPlayer(this, new BitSet), false);
  this.occupiedSquaresForPlayer = result;
  result = new Value(new BitSet);
  $addConnection(this.playerPieceSquares, new AbstractValue$5(new GameState$lambda$9$Type(this, result)));
  $addConnection(this.enemyPieceSquares, new AbstractValue$5(new GameState$lambda$10$Type(this, result)));
  $updateAndNotify(result, $calcOccupiedSquaresForEnemy(this, new BitSet), false);
  this.pieceSquares = result;
  this.occupiedSquaresForEnemy = this.pieceSquares;
  this.random = random;
  this.log_0 = log_0;
  $addAll_1(this.fogSquares, range_0(this.dim.width_0 * this.dim.height_0).boxed().collect_0(of(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$21$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_1, 83, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))));
  $connectNotify_0(this.pieces, new GameState$2(this));
  $connectNotify_0(this.pieces, new GameState$3(this));
}

function lambda$11(pieceId_0, piece_1){
  return piece_1.id_0 == pieceId_0;
}

function lambda$12(pos_0, piece_1){
  return piece_1.pos == pos_0;
}

function lambda$6(pos_0, p_1){
  return p_1.pos == pos_0;
}

defineClass(287, 1, {}, GameState);
var Lrook_core_GameState_2_classLit = createForClass('rook.core', 'GameState', 287, Ljava_lang_Object_2_classLit);
function GameState$0methodref$set$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(302, 1, {}, GameState$0methodref$set$Type);
_.accept_0 = function accept_10(arg0){
  $set_1(this.$$outer_0, arg0.value_0);
}
;
var Lrook_core_GameState$0methodref$set$Type_2_classLit = createForClass('rook.core', 'GameState/0methodref$set$Type', 302, Ljava_lang_Object_2_classLit);
function $onAdd_1(this$static){
  $updateAndNotify(this$static.val$result2, $calcOccupiedSquaresForPlayer(this$static.this$01, new BitSet), false);
}

function $onRemove(this$static){
  $updateAndNotify(this$static.val$result2, $calcOccupiedSquaresForPlayer(this$static.this$01, new BitSet), false);
}

function GameState$1(this$0, val$result){
  this.this$01 = this$0;
  this.val$result2 = val$result;
}

defineClass(289, 116, $intern_45, GameState$1);
_.onAdd_0 = function onAdd_6(elem){
  var lastArg;
  $onAdd_1((lastArg = this , elem , lastArg));
}
;
_.onRemove_1 = function onRemove_6(elem){
  var lastArg;
  $onRemove((lastArg = this , elem , lastArg));
}
;
var Lrook_core_GameState$1_2_classLit = createForClass('rook.core', 'GameState/1', 289, Lreact_RSet$Listener_2_classLit);
function $accept_0(this$static, arg0){
  $remove_9(this$static.$$outer_0, arg0);
}

function GameState$1methodref$remove$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(308, 1, {}, GameState$1methodref$remove$Type);
_.accept_0 = function accept_11(arg0){
  $accept_0(this, arg0);
}
;
var Lrook_core_GameState$1methodref$remove$Type_2_classLit = createForClass('rook.core', 'GameState/1methodref$remove$Type', 308, Ljava_lang_Object_2_classLit);
function GameState$2(this$0){
  this.this$01 = this$0;
}

defineClass(300, 78, $intern_44, GameState$2);
_.onAdd_0 = function onAdd_7(piece){
  piece.side == ($clinit_Piece$Side() , PLAYER) && $revealBorderingSquares(this.this$01, piece.pos);
}
;
_.onSet = function onSet_0(index_0, piece){
  piece.side == ($clinit_Piece$Side() , PLAYER) && $revealBorderingSquares(this.this$01, piece.pos);
}
;
var Lrook_core_GameState$2_2_classLit = createForClass('rook.core', 'GameState/2', 300, Lreact_RList$Listener_2_classLit);
function GameState$3(this$0){
  this.this$01 = this$0;
}

defineClass(301, 78, $intern_44, GameState$3);
_.onAdd_0 = function onAdd_8(piece){
  var lastArg;
  $updatePiecesBitSets((lastArg = this , piece , lastArg).this$01);
}
;
_.onRemove_1 = function onRemove_7(piece){
  var lastArg;
  $updatePiecesBitSets((lastArg = this , piece , lastArg).this$01);
}
;
_.onSet = function onSet_1(index_0, newElem){
  var lastArg;
  $updatePiecesBitSets((lastArg = this , newElem , lastArg).this$01);
}
;
var Lrook_core_GameState$3_2_classLit = createForClass('rook.core', 'GameState/3', 301, Lreact_RList$Listener_2_classLit);
function GameState$lambda$0$Type(){
}

defineClass(294, 1, {}, GameState$lambda$0$Type);
_.test_0 = function test_0(arg0){
  return arg0.side == ($clinit_Piece$Side() , PLAYER);
}
;
var Lrook_core_GameState$lambda$0$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$0$Type', 294, Ljava_lang_Object_2_classLit);
function GameState$lambda$1$Type(result_0){
  this.result_0 = result_0;
}

defineClass(295, 1, {}, GameState$lambda$1$Type);
_.accept_0 = function accept_12(arg0){
  $set_1(this.result_0, arg0.pos);
}
;
var Lrook_core_GameState$lambda$1$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$1$Type', 295, Ljava_lang_Object_2_classLit);
function GameState$lambda$10$Type($$outer_0, result_1){
  this.$$outer_0 = $$outer_0;
  this.result_1 = result_1;
}

defineClass(293, 1, $intern_43, GameState$lambda$10$Type);
_.onEmit = function onEmit_12(arg0){
  $lambda$10(this.$$outer_0, this.result_1);
}
;
var Lrook_core_GameState$lambda$10$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$10$Type', 293, Ljava_lang_Object_2_classLit);
function GameState$lambda$11$Type(pieceId_0){
  this.pieceId_0 = pieceId_0;
}

defineClass(172, 1, {}, GameState$lambda$11$Type);
_.equals_0 = function equals_35(other){
  return this === other;
}
;
_.test_0 = function test_1(input_0){
  return lambda$11(this.pieceId_0, input_0);
}
;
_.apply_0 = function apply_1(arg0){
  return lambda$11(this.pieceId_0, arg0);
}
;
_.pieceId_0 = 0;
var Lrook_core_GameState$lambda$11$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$11$Type', 172, Ljava_lang_Object_2_classLit);
function GameState$lambda$12$Type(pos_0){
  this.pos_0 = pos_0;
}

defineClass(173, 1, {}, GameState$lambda$12$Type);
_.equals_0 = function equals_36(other){
  return this === other;
}
;
_.test_0 = function test_2(input_0){
  return lambda$12(this.pos_0, input_0);
}
;
_.apply_0 = function apply_2(arg0){
  return lambda$12(this.pos_0, arg0);
}
;
_.pos_0 = 0;
var Lrook_core_GameState$lambda$12$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$12$Type', 173, Ljava_lang_Object_2_classLit);
function GameState$lambda$13$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(303, 1, {}, GameState$lambda$13$Type);
_.accept_0 = function accept_13(arg0){
  $lambda$13(this.$$outer_0, arg0);
}
;
var Lrook_core_GameState$lambda$13$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$13$Type', 303, Ljava_lang_Object_2_classLit);
function GameState$lambda$14$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(304, 1, {}, GameState$lambda$14$Type);
_.accept_0 = function accept_14(arg0){
  $lambda$14(this.$$outer_0, arg0);
}
;
var Lrook_core_GameState$lambda$14$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$14$Type', 304, Ljava_lang_Object_2_classLit);
function GameState$lambda$15$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(305, 1, {}, GameState$lambda$15$Type);
_.accept_0 = function accept_15(arg0){
  $lambda$15(this.$$outer_0, arg0);
}
;
var Lrook_core_GameState$lambda$15$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$15$Type', 305, Ljava_lang_Object_2_classLit);
function GameState$lambda$16$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(306, 1, {}, GameState$lambda$16$Type);
_.accept_0 = function accept_16(arg0){
  $lambda$16(this.$$outer_0, arg0);
}
;
var Lrook_core_GameState$lambda$16$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$16$Type', 306, Ljava_lang_Object_2_classLit);
function $test(this$static, arg0){
  return $lambda$17(this$static.$$outer_0, arg0);
}

function GameState$lambda$17$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(307, 1, {}, GameState$lambda$17$Type);
_.test_0 = function test_3(arg0){
  return $test(this, arg0);
}
;
var Lrook_core_GameState$lambda$17$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$17$Type', 307, Ljava_lang_Object_2_classLit);
function GameState$lambda$2$Type(){
}

defineClass(296, 1, {}, GameState$lambda$2$Type);
_.test_0 = function test_4(arg0){
  return arg0.side == ($clinit_Piece$Side() , ENEMY);
}
;
var Lrook_core_GameState$lambda$2$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$2$Type', 296, Ljava_lang_Object_2_classLit);
function GameState$lambda$3$Type(result_0){
  this.result_0 = result_0;
}

defineClass(297, 1, {}, GameState$lambda$3$Type);
_.accept_0 = function accept_17(arg0){
  $set_1(this.result_0, arg0.pos);
}
;
var Lrook_core_GameState$lambda$3$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$3$Type', 297, Ljava_lang_Object_2_classLit);
function GameState$lambda$4$Type(){
}

defineClass(298, 1, {}, GameState$lambda$4$Type);
_.test_0 = function test_5(arg0){
  return arg0.side == ($clinit_Piece$Side() , PLAYER);
}
;
var Lrook_core_GameState$lambda$4$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$4$Type', 298, Ljava_lang_Object_2_classLit);
function GameState$lambda$5$Type(){
}

defineClass(299, 1, {}, GameState$lambda$5$Type);
_.test_0 = function test_6(arg0){
  return arg0.side == ($clinit_Piece$Side() , ENEMY);
}
;
var Lrook_core_GameState$lambda$5$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$5$Type', 299, Ljava_lang_Object_2_classLit);
function GameState$lambda$6$Type(pos_0){
  this.pos_0 = pos_0;
}

defineClass(171, 1, {}, GameState$lambda$6$Type);
_.test_0 = function test_7(arg0){
  return lambda$6(this.pos_0, arg0);
}
;
_.pos_0 = 0;
var Lrook_core_GameState$lambda$6$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$6$Type', 171, Ljava_lang_Object_2_classLit);
function GameState$lambda$7$Type($$outer_0, result_1){
  this.$$outer_0 = $$outer_0;
  this.result_1 = result_1;
}

defineClass(290, 1, $intern_43, GameState$lambda$7$Type);
_.onEmit = function onEmit_13(arg0){
  $lambda$7(this.$$outer_0, this.result_1);
}
;
var Lrook_core_GameState$lambda$7$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$7$Type', 290, Ljava_lang_Object_2_classLit);
function GameState$lambda$8$Type($$outer_0, result_1){
  this.$$outer_0 = $$outer_0;
  this.result_1 = result_1;
}

defineClass(291, 1, $intern_43, GameState$lambda$8$Type);
_.onEmit = function onEmit_14(arg0){
  $lambda$8(this.$$outer_0, this.result_1);
}
;
var Lrook_core_GameState$lambda$8$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$8$Type', 291, Ljava_lang_Object_2_classLit);
function GameState$lambda$9$Type($$outer_0, result_1){
  this.$$outer_0 = $$outer_0;
  this.result_1 = result_1;
}

defineClass(292, 1, $intern_43, GameState$lambda$9$Type);
_.onEmit = function onEmit_15(arg0){
  $lambda$9(this.$$outer_0, this.result_1);
}
;
var Lrook_core_GameState$lambda$9$Type_2_classLit = createForClass('rook.core', 'GameState/lambda$9$Type', 292, Ljava_lang_Object_2_classLit);
function ImageLoader(plat){
  this.plat = plat;
}

defineClass(321, 1, {}, ImageLoader);
var Lrook_core_ImageLoader_2_classLit = createForClass('rook.core', 'ImageLoader', 321, Ljava_lang_Object_2_classLit);
function $pieceImage(this$static, side, type_0){
  switch (side.ordinal) {
    case 0:
      switch (type_0.ordinal) {
        case 0:
          return this$static.whiteBishop;
        case 1:
          return this$static.whiteKing;
        case 2:
          return this$static.whiteRook;
      }

      break;
    case 1:
      switch (type_0.ordinal) {
        case 0:
          return this$static.blackBishop;
        case 2:
          return this$static.blackRook;
      }

  }
  throw toJs(new RuntimeException_0('No image found for piece, side: ' + side + ', type: ' + type_0));
}

function ImageLoader$Images(this$0){
  this.this$01 = this$0;
  this.whiteBishop = $getImage(this.this$01.plat.assets, 'images/cburnett/wB.png');
  this.whiteKing = $getImage(this.this$01.plat.assets, 'images/cburnett/wK.png');
  this.whiteRook = $getImage(this.this$01.plat.assets, 'images/cburnett/wR.png');
  this.blackBishop = $getImage(this.this$01.plat.assets, 'images/cburnett/bB.png');
  this.blackRook = $getImage(this.this$01.plat.assets, 'images/cburnett/bR.png');
}

defineClass(322, 1, {}, ImageLoader$Images);
var Lrook_core_ImageLoader$Images_2_classLit = createForClass('rook.core', 'ImageLoader/Images', 322, Ljava_lang_Object_2_classLit);
function MainGame(plat){
  var gameState, gl;
  this.update = ($clinit_AbstractSignal() , new Signal);
  this.paint = new Signal;
  this.updateClock = new Clock;
  this.paintClock = new Clock;
  this.plat = plat;
  this.updateRate = 33;
  $addConnection(plat.frame_0, new Game$1(this));
  gl = plat.graphics.gl;
  gl.gl.disable(2884);
  gl.gl.enable(3042);
  gl.gl.blendFunc(1, 771);
  this.defaultBatch = $createDefaultBatch(gl);
  this.viewSurf = new Surface(plat.graphics, plat.graphics.defaultRenderTarget, this.defaultBatch);
  this.rootLayer = new RootLayer;
  $atPrio($addConnection(this.paint, new SceneGame$1(this)), -1);
  this.screens = new MainGame$1(this, this.rootLayer);
  this.images = new ImageLoader$Images(new ImageLoader(plat));
  new Pointer(plat, this.rootLayer);
  gameState = new GameState(new Random, plat.log_0);
  $add_8(gameState.pieces, new Piece_1(($clinit_Piece$Side() , PLAYER), ($clinit_Piece$Type() , KING), 0));
  $add_8(gameState.pieces, new Piece_1(PLAYER, BISHOP, 1));
  $add_8(gameState.pieces, new Piece_1(PLAYER, BISHOP, 2));
  $add_8(gameState.pieces, new Piece_1(PLAYER, BISHOP, 10));
  $add_8(gameState.pieces, new Piece_1(PLAYER, ROOK, 3));
  $add_8(gameState.pieces, new Piece_1(ENEMY, ROOK, 4));
  $add_8(gameState.pieces, new Piece_1(ENEMY, BISHOP, 12));
  $push(this.screens, new BoardScreen(this, gameState));
}

defineClass(228, 252, {}, MainGame);
var Lrook_core_MainGame_2_classLit = createForClass('rook.core', 'MainGame', 228, Lplayn_scene_SceneGame_2_classLit);
function $clinit_ScreenStack(){
  $clinit_ScreenStack = emptyMethod;
  NOOP_3 = new ScreenStack$1;
}

function $add_10(this$static, screen_0){
  var e, root, board, scaledElement;
  if ($indexOf_1(this$static._screens, screen_0, 0) != -1) {
    throw toJs(new IllegalArgumentException_0('Cannot add screen to stack twice.'));
  }
  $add_0(this$static._screens, 0, screen_0);
  try {
    root = $createRoot(screen_0.iface, new BorderLayout, $create($add_15(newSheetBuilder(screen_0.plat.graphics), Ltripleplay_ui_Element_2_classLit, make(stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(($clinit_Style() , FONT), new Font(24))])))), screen_0.layer);
    $setSize_5(root, screen_0.plat.graphics.viewSize);
    board = new Board(screen_0);
    scaledElement = new ScaledElement(board.rootLayer);
    $addStyles_0(scaledElement, stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset(new Background$1($intern_47), 10))]));
    $add_12(root, stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 51, 0, [$setConstraint(scaledElement, ($clinit_BorderLayout() , CENTER_2))]));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      $warning(($clinit_Log() , log_1), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [e]));
    }
     else 
      throw toJs($e0);
  }
}

function $addAndShow(this$static, screen_0){
  $add_10(this$static, screen_0);
  $justShow(this$static, screen_0);
}

function $hide(this$static, screen_0){
  var e;
  $remove_7(this$static._rootLayer, screen_0.layer);
  try {
    $close_4(screen_0._closeOnHide);
    $clear_2(screen_0.iface.anim);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      $warning(($clinit_Log() , log_1), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [e]));
    }
     else 
      throw toJs($e0);
  }
}

function $justShow(this$static, screen_0){
  var e;
  $addAt(this$static._rootLayer, screen_0.layer, this$static.originX, this$static.originY);
  try {
    $closeOnHide(screen_0, $addConnection(screen_0._game.update, new Signal$1(screen_0.update)));
    $closeOnHide(screen_0, $addConnection(screen_0._game.paint, new Signal$1(screen_0.paint)));
    $closeOnHide(screen_0, $connectNotify(screen_0._game.plat.graphics.deviceOrient, new ScreenStack$Screen$1(screen_0)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      $warning(($clinit_Log() , log_1), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [e]));
    }
     else 
      throw toJs($e0);
  }
}

function $push(this$static, screen_0){
  $push_0(this$static, screen_0, $dir(new SlideTransition(this$static)));
}

function $push_0(this$static, screen_0, trans){
  var otop;
  if (this$static._screens.array.length == 0) {
    $add_10(this$static, screen_0);
    $justShow(this$static, screen_0);
  }
   else {
    otop = this$static._screens.array.length == 0?null:$get_7(this$static._screens, 0);
    $transition(this$static, new ScreenStack$2(this$static, this$static, otop, screen_0, trans, otop));
  }
}

function $setInputEnabled(this$static, enabled){
  this$static._game.plat.input_0.mouseEnabled = enabled;
  this$static._game.plat.input_0.touchEnabled = enabled;
}

function $transition(this$static, transitor){
  !!this$static._transitor && $complete_0(this$static._transitor);
  this$static._transitor = transitor;
  $init_0(this$static._transitor);
}

defineClass(253, 1, {});
_.originX = 0;
_.originY = 0;
var NOOP_3;
var Ltripleplay_game_ScreenStack_2_classLit = createForClass('tripleplay.game', 'ScreenStack', 253, Ljava_lang_Object_2_classLit);
function MainGame$1($anonymous0, $anonymous1){
  $clinit_ScreenStack();
  this._screens = new ArrayList;
  this._game = $anonymous0;
  this._rootLayer = $anonymous1;
}

defineClass(254, 253, {}, MainGame$1);
var Lrook_core_MainGame$1_2_classLit = createForClass('rook.core', 'MainGame/1', 254, Ltripleplay_game_ScreenStack_2_classLit);
function $calcDest(this$static, state){
  var opponent, piece, pieceIndex, result;
  opponent = new BitSet;
  $forEach_1($filter(new StreamImpl(null, new Spliterators$IteratorSpliterator(state.pieces)), new GameState$lambda$4$Type), new MoveIntention$lambda$0$Type(opponent));
  pieceIndex = $pieceIndexById(state, this$static.pieceId);
  if (pieceIndex < 0)
    return $clinit_Optional() , $clinit_Optional() , EMPTY_0;
  piece = $get_11(state.pieces, pieceIndex);
  result = slideInDir(state.dim, piece.pos, this$static.dir_0, state.occupiedSquaresForEnemy._value, opponent, this$static.moveLength);
  return ofNullable(valueOf(result));
}

function MoveIntention(pieceId, dir_0, moveLength){
  this.pieceId = pieceId;
  this.dir_0 = dir_0;
  this.moveLength = moveLength;
}

defineClass(222, 1, {222:1}, MoveIntention);
_.toString_0 = function toString_68(){
  return $toString($addHolder($addHolder($addHolder(new MoreObjects$ToStringHelper(($ensureNamesAreInitialized(Lrook_core_MoveIntention_2_classLit) , Lrook_core_MoveIntention_2_classLit.simpleName)), 'pieceId', '' + this.pieceId), 'dir', this.dir_0), 'moveLength', '' + this.moveLength));
}
;
_.moveLength = 0;
_.pieceId = 0;
var Lrook_core_MoveIntention_2_classLit = createForClass('rook.core', 'MoveIntention', 222, Ljava_lang_Object_2_classLit);
function MoveIntention$lambda$0$Type(opponent_0){
  this.opponent_0 = opponent_0;
}

defineClass(490, 1, {}, MoveIntention$lambda$0$Type);
_.accept_0 = function accept_18(arg0){
  $set_1(this.opponent_0, arg0.pos);
}
;
var Lrook_core_MoveIntention$lambda$0$Type_2_classLit = createForClass('rook.core', 'MoveIntention/lambda$0$Type', 490, Ljava_lang_Object_2_classLit);
function Piece(id_0, side, type_0, pos){
  this.id_0 = id_0;
  this.side = side;
  this.type_0 = type_0;
  this.pos = pos;
}

function Piece_0(builder){
  this.id_0 = builder.id_0;
  this.side = builder.side;
  this.type_0 = builder.type_0;
  this.pos = builder.pos;
}

function Piece_1(side, type_0, pos){
  Piece.call(this, idCounter++, side, type_0, pos);
}

function newBuilder(copy){
  var builder;
  builder = new Piece$Builder;
  builder.id_0 = copy.id_0;
  builder.side = copy.side;
  builder.type_0 = copy.type_0;
  builder.pos = copy.pos;
  return builder;
}

defineClass(35, 1, {35:1}, Piece_0, Piece_1);
_.toString_0 = function toString_69(){
  return $toString($addHolder($addHolder($addHolder($addHolder(new MoreObjects$ToStringHelper(($ensureNamesAreInitialized(Lrook_core_Piece_2_classLit) , Lrook_core_Piece_2_classLit.simpleName)), 'id', '' + this.id_0), 'side', this.side), 'type', this.type_0), 'pos', '' + this.pos));
}
;
_.id_0 = 0;
_.pos = 0;
var idCounter = 0;
var Lrook_core_Piece_2_classLit = createForClass('rook.core', 'Piece', 35, Ljava_lang_Object_2_classLit);
function $pos(this$static, pos){
  this$static.pos = pos;
  return this$static;
}

function Piece$Builder(){
}

defineClass(341, 1, {}, Piece$Builder);
_.id_0 = 0;
_.pos = 0;
var Lrook_core_Piece$Builder_2_classLit = createForClass('rook.core', 'Piece/Builder', 341, Ljava_lang_Object_2_classLit);
function $clinit_Piece$Side(){
  $clinit_Piece$Side = emptyMethod;
  PLAYER = new Piece$Side('PLAYER', 0);
  ENEMY = new Piece$Side('ENEMY', 1);
}

function Piece$Side(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_24(){
  $clinit_Piece$Side();
  return stampJavaTypeInfo(getClassLiteralForArray(Lrook_core_Piece$Side_2_classLit, 1), $intern_1, 120, 0, [PLAYER, ENEMY]);
}

defineClass(120, 6, {3:1, 7:1, 6:1, 120:1}, Piece$Side);
var ENEMY, PLAYER;
var Lrook_core_Piece$Side_2_classLit = createForEnum('rook.core', 'Piece/Side', 120, Ljava_lang_Enum_2_classLit, values_24);
function $clinit_Piece$Type(){
  $clinit_Piece$Type = emptyMethod;
  BISHOP = new Piece$Type('BISHOP', 0);
  KING = new Piece$Type('KING', 1);
  ROOK = new Piece$Type('ROOK', 2);
}

function Piece$Type(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_25(){
  $clinit_Piece$Type();
  return stampJavaTypeInfo(getClassLiteralForArray(Lrook_core_Piece$Type_2_classLit, 1), $intern_1, 96, 0, [BISHOP, KING, ROOK]);
}

defineClass(96, 6, {3:1, 7:1, 6:1, 96:1}, Piece$Type);
var BISHOP, KING, ROOK;
var Lrook_core_Piece$Type_2_classLit = createForEnum('rook.core', 'Piece/Type', 96, Ljava_lang_Enum_2_classLit, values_25);
function PieceMovedEvent(piece, oldPos, pushedEvents, capture){
  this.piece = piece;
  this.oldPos = oldPos;
  this.pushedEvents = pushedEvents;
  this.capture = capture;
}

defineClass(170, 1, {}, PieceMovedEvent);
_.toString_0 = function toString_70(){
  return $toString($addHolder($addHolder($addHolder($addHolder(new MoreObjects$ToStringHelper(($ensureNamesAreInitialized(Lrook_core_PieceMovedEvent_2_classLit) , Lrook_core_PieceMovedEvent_2_classLit.simpleName)), 'piece', this.piece), 'oldPos', '' + this.oldPos), 'capture', this.capture), 'pushedEvents', this.pushedEvents));
}
;
_.oldPos = 0;
var Lrook_core_PieceMovedEvent_2_classLit = createForClass('rook.core', 'PieceMovedEvent', 170, Ljava_lang_Object_2_classLit);
function moves_0(dim, type_0, pos, occupied, captures, result){
  var x_0, y_0, blocked, x_1, y_1;
  switch (type_0.ordinal) {
    case 0:
      return x_0 = pos % dim.width_0 , y_0 = pos / dim.width_0 | 0 , slide(dim, x_0, y_0, ($clinit_Direction() , UP_LEFT), occupied, captures, result) , slide(dim, x_0, y_0, UP_RIGHT, occupied, captures, result) , slide(dim, x_0, y_0, DOWN_RIGHT, occupied, captures, result) , slide(dim, x_0, y_0, DOWN_LEFT, occupied, captures, result) , result;
    case 1:
      return borderingNeighbors(dim, pos, result) , blocked = new BitSet_0(copyOf(occupied.array, occupied.array.length)) , $andNot(blocked, captures) , $andNot(result, blocked) , result;
    case 2:
      return x_1 = pos % dim.width_0 , y_1 = pos / dim.width_0 | 0 , slide(dim, x_1, y_1, ($clinit_Direction() , UP_0), occupied, captures, result) , slide(dim, x_1, y_1, RIGHT_1, occupied, captures, result) , slide(dim, x_1, y_1, DOWN_0, occupied, captures, result) , slide(dim, x_1, y_1, LEFT_1, occupied, captures, result) , result;
  }
  throw toJs(new RuntimeException_0('unknown piece type: ' + type_0));
}

function slide(dim, x_0, y_0, dir_0, occupied, captures, result){
  var i, p;
  for (i = 1; contains_5(dim, x_0 + i * dir_0.x_2(), y_0 + i * dir_0.y_2()); i++) {
    p = toIndex_0(dim, x_0 + i * dir_0.x_2(), y_0 + i * dir_0.y_2());
    if ($get_8(captures, p)) {
      $set_1(result, p);
      break;
    }
    if ($get_8(occupied, p))
      break;
    $set_1(result, p);
  }
  return result;
}

function slideInDir(dim, pos, dir_0, occupied, captures, moveLength){
  var curPos, i, p, posX, posY;
  curPos = pos;
  posX = pos % dim.width_0;
  posY = pos / dim.width_0 | 0;
  for (i = 1; i <= moveLength && contains_5(dim, posX + i * dir_0.x_2(), posY + i * dir_0.y_2()); i++) {
    p = toIndex_0(dim, posX + i * dir_0.x_2(), posY + i * dir_0.y_2());
    if ($get_8(captures, p))
      return p;
    if ($get_8(occupied, p))
      return curPos;
    else 
      curPos = p;
  }
  return curPos;
}

function PiecePushedEvent(piece, oldPos){
  this.piece = piece;
  this.oldPos = oldPos;
}

defineClass(288, 1, {}, PiecePushedEvent);
_.toString_0 = function toString_71(){
  return $toString($addHolder($addHolder(new MoreObjects$ToStringHelper(($ensureNamesAreInitialized(Lrook_core_PiecePushedEvent_2_classLit) , Lrook_core_PiecePushedEvent_2_classLit.simpleName)), 'piece', this.piece), 'oldPos', '' + this.oldPos));
}
;
_.oldPos = 0;
var Lrook_core_PiecePushedEvent_2_classLit = createForClass('rook.core', 'PiecePushedEvent', 288, Ljava_lang_Object_2_classLit);
defineClass(540, 1, {});
var Ltripleplay_anim_AnimBuilder_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder', 540, Ljava_lang_Object_2_classLit);
function $set_6(this$static, x_0, y_0){
  $setTranslation(this$static.val$layer1, x_0, y_0);
}

function AnimBuilder$21(val$layer){
  this.val$layer1 = val$layer;
}

defineClass(195, 1, {}, AnimBuilder$21);
var Ltripleplay_anim_AnimBuilder$21_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder/21', 195, Ljava_lang_Object_2_classLit);
function $set_7(this$static, value_0){
  $setAlpha(this$static.val$layer2, value_0);
}

function AnimBuilder$3(val$layer){
  this.val$layer2 = val$layer;
}

defineClass(395, 1, {}, AnimBuilder$3);
var Ltripleplay_anim_AnimBuilder$3_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder/3', 395, Ljava_lang_Object_2_classLit);
function $clinit_Animation(){
  $clinit_Animation = emptyMethod;
  new Random;
}

function $apply_2(this$static, time){
  var remain;
  if (this$static._canceled)
    return 0;
  remain = this$static._current.apply_1(time);
  if (remain > 0)
    return remain;
  while (remain <= 0) {
    if (this$static._canceled)
      return 0;
    this$static._current = this$static._current._next;
    if (!this$static._current)
      return remain;
    this$static._current.init(time + remain);
    remain = this$static._current.apply_1(time);
  }
  return remain;
}

defineClass(125, 1, {125:1});
_.init = function init_0(time){
  this._start = time;
  this._current = this;
}
;
_.toString_0 = function toString_72(){
  var name_0;
  name_0 = $getName(this.___clazz);
  name_0 = $substring(name_0, name_0.lastIndexOf('.') + 1);
  return name_0 + ':' + hashCode__I__devirtual$(this) + ' start:' + this._start;
}
;
_._canceled = false;
_._start = 0;
var Ltripleplay_anim_Animation_2_classLit = createForClass('tripleplay.anim', 'Animation', 125, Ljava_lang_Object_2_classLit);
function $in(this$static, duration){
  this$static._duration = duration;
  return this$static;
}

function $using(this$static, interp){
  this$static._interp = interp;
  return this$static;
}

function Animation$Interped(){
  this._interp = ($clinit_Interpolator() , LINEAR);
}

defineClass(193, 125, {125:1});
_._duration = 1000;
var Ltripleplay_anim_Animation$Interped_2_classLit = createForClass('tripleplay.anim', 'Animation/Interped', 193, Ltripleplay_anim_Animation_2_classLit);
function $from(this$static){
  this$static._from = 0.5;
  return this$static;
}

function $to(this$static){
  this$static._to = 1;
  return this$static;
}

function Animation$One(target){
  $clinit_Animation();
  Animation$Interped.call(this);
  this._target = target;
}

defineClass(194, 193, {125:1, 194:1}, Animation$One);
_.apply_1 = function apply_3(time){
  var dt;
  dt = time - this._start;
  $set_7(this._target, dt < this._duration?$apply_3(this._interp, this._from, this._to - this._from, dt, this._duration):this._to);
  return this._duration - dt;
}
;
_.init = function init_1(time){
  this._start = time;
  this._current = this;
  this._from == $intern_49 && (this._from = this._target.val$layer2.alpha_0);
}
;
_.toString_0 = function toString_73(){
  return $ensureNamesAreInitialized(Ltripleplay_anim_Animation$One_2_classLit) , Ltripleplay_anim_Animation$One_2_classLit.typeName + ' start:' + this._start + ' to ' + this._to;
}
;
_._from = $intern_49;
_._to = 0;
var Ltripleplay_anim_Animation$One_2_classLit = createForClass('tripleplay.anim', 'Animation/One', 194, Ltripleplay_anim_Animation$Interped_2_classLit);
function $to_0(this$static, tox, toy){
  this$static._tox = tox;
  this$static._toy = toy;
  return this$static;
}

function Animation$Two(value_0){
  $clinit_Animation();
  Animation$Interped.call(this);
  this._value = value_0;
}

defineClass(145, 193, {125:1, 145:1}, Animation$Two);
_.apply_1 = function apply_4(time){
  var dt;
  dt = time - this._start;
  dt >= this._duration?$set_6(this._value, this._tox, this._toy):$set_6(this._value, $apply_3(this._interp, this._fromx, this._tox - this._fromx, dt, this._duration), $apply_3(this._interp, this._fromy, this._toy - this._fromy, dt, this._duration));
  return this._duration - dt;
}
;
_.init = function init_2(time){
  this._start = time;
  this._current = this;
  this._fromx == $intern_49 && (this._fromx = this._value.val$layer1.transform.tx);
  this._fromy == $intern_49 && (this._fromy = this._value.val$layer1.transform.ty);
}
;
_._fromx = $intern_49;
_._fromy = $intern_49;
_._tox = 0;
_._toy = 0;
var Ltripleplay_anim_Animation$Two_2_classLit = createForClass('tripleplay.anim', 'Animation/Two', 145, Ltripleplay_anim_Animation$Interped_2_classLit);
function $add_11(this$static, anim){
  $add_1(this$static._accum, anim);
  return anim;
}

function $clear_2(this$static){
  this$static._anims.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
  this$static._nanims.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
  this$static._barriers.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
  this$static._accum = this$static._nanims;
}

function $onPaint(this$static, clock){
  var ii, ii0, ll, ll0, time;
  time = clock.tick;
  if (this$static._nanims.array.length != 0) {
    for (ii0 = 0 , ll0 = this$static._nanims.array.length; ii0 < ll0; ii0++) {
      $get_7(this$static._nanims, ii0).init(time);
    }
    $addAll_0(this$static._anims, this$static._nanims);
    this$static._nanims.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
  }
  for (ii = 0 , ll = this$static._anims.array.length; ii < ll; ii++) {
    if ($apply_2($get_7(this$static._anims, ii), time) <= 0) {
      $remove_0(this$static._anims, ii--);
      ll -= 1;
    }
  }
  if (this$static._barriers.array.length != 0 && this$static._anims.array.length == 0 && this$static._nanims.array.length == 0 && $get_7(this$static._barriers, 0).$_nullMethod()) {
    $remove_0(this$static._barriers, 0);
    $addAll_0(this$static._nanims, null.$_nullField);
    this$static._barriers.array.length == 0 && (this$static._accum = this$static._nanims);
  }
}

function Animator(){
  this.onPaint = new Animator$1(this);
  this._anims = new ArrayList;
  this._nanims = new ArrayList;
  this._accum = this._nanims;
  this._barriers = new ArrayList;
}

defineClass(196, 540, {}, Animator);
var Ltripleplay_anim_Animator_2_classLit = createForClass('tripleplay.anim', 'Animator', 196, Ltripleplay_anim_AnimBuilder_2_classLit);
function Animator$1(this$0){
  this.this$01 = this$0;
}

defineClass(396, 521, $intern_31, Animator$1);
_.onEmit = function onEmit_16(clock){
  $onPaint(this.this$01, clock);
}
;
var Ltripleplay_anim_Animator$1_2_classLit = createForClass('tripleplay.anim', 'Animator/1', 396, Lreact_Slot_2_classLit);
function $clinit_Log(){
  $clinit_Log = emptyMethod;
  log_1 = new Logger;
}

var log_1;
defineClass(527, 1, {});
var Ltripleplay_game_ScreenStack$Transition_2_classLit = createForClass('tripleplay.game', 'ScreenStack/Transition', 527, Ljava_lang_Object_2_classLit);
function ScreenStack$1(){
}

defineClass(260, 527, {}, ScreenStack$1);
var Ltripleplay_game_ScreenStack$1_2_classLit = createForClass('tripleplay.game', 'ScreenStack/1', 260, Ltripleplay_game_ScreenStack$Transition_2_classLit);
function $complete_0(this$static){
  this$static.this$01._transitor = null;
  this$static._onPaint.close_0();
  $setInputEnabled(this$static.this$01, true);
  $complete_1(this$static._trans, this$static._oscreen);
  $setTranslation(this$static._nscreen.layer, this$static.this$01.originX, this$static.this$01.originY);
  $hide(this$static.this$02, this$static.val$otop6);
}

function $init_0(this$static){
  $addAndShow(this$static.this$01, this$static._nscreen);
  $init_1(this$static._trans, this$static._oscreen, this$static._nscreen);
  $setInputEnabled(this$static.this$01, false);
  this$static._trans == ($clinit_ScreenStack() , NOOP_3)?$complete_0(this$static):(this$static._onPaint = $addConnection(this$static.this$01._game.paint, new ScreenStack$Transitor$1(this$static)));
}

function $paint_0(this$static, clock){
  if (this$static._skipFrames > 0)
    this$static._skipFrames -= 1;
  else {
    this$static._elapsed += clock.dt;
    $update_1(this$static._trans, this$static._oscreen, this$static._nscreen, this$static._elapsed) && $complete_0(this$static);
  }
}

defineClass(257, 1, {});
_._elapsed = 0;
_._skipFrames = 0;
var Ltripleplay_game_ScreenStack$Transitor_2_classLit = createForClass('tripleplay.game', 'ScreenStack/Transitor', 257, Ljava_lang_Object_2_classLit);
function ScreenStack$2(this$0, this$0_1, $anonymous0, $anonymous1, $anonymous2, val$otop){
  this.this$02 = this$0_1;
  this.val$otop6 = val$otop;
  this.this$01 = this$0;
  this._onPaint = ($clinit_Closeable$Util() , NOOP);
  this._oscreen = $anonymous0;
  this._nscreen = $anonymous1;
  this._trans = $anonymous2;
}

defineClass(261, 257, {}, ScreenStack$2);
var Ltripleplay_game_ScreenStack$2_2_classLit = createForClass('tripleplay.game', 'ScreenStack/2', 261, Ltripleplay_game_ScreenStack$Transitor_2_classLit);
function $onEmit_4(this$static){
  $updateAndNotify(this$static.this$11._sizeValue, this$static.this$11._game.plat.graphics.viewSize, true);
}

function ScreenStack$Screen$1(this$1){
  this.this$11 = this$1;
}

defineClass(258, 521, $intern_31, ScreenStack$Screen$1);
_.onEmit = function onEmit_17(orient){
  var lastArg;
  $onEmit_4((lastArg = this , orient , lastArg));
}
;
var Ltripleplay_game_ScreenStack$Screen$1_2_classLit = createForClass('tripleplay.game', 'ScreenStack/Screen/1', 258, Lreact_Slot_2_classLit);
function ScreenStack$Transitor$1(this$1){
  this.this$11 = this$1;
}

defineClass(259, 521, $intern_31, ScreenStack$Transitor$1);
_.onEmit = function onEmit_18(clock){
  $paint_0(this.this$11, clock);
}
;
var Ltripleplay_game_ScreenStack$Transitor$1_2_classLit = createForClass('tripleplay.game', 'ScreenStack/Transitor/1', 259, Lreact_Slot_2_classLit);
defineClass(543, 527, {});
var Ltripleplay_game_trans_AbstractTransition_2_classLit = createForClass('tripleplay.game.trans', 'AbstractTransition', 543, Ltripleplay_game_ScreenStack$Transition_2_classLit);
defineClass(407, 543, {});
var Ltripleplay_game_trans_InterpedTransition_2_classLit = createForClass('tripleplay.game.trans', 'InterpedTransition', 407, Ltripleplay_game_trans_AbstractTransition_2_classLit);
function $complete_1(this$static, oscreen){
  $setTranslation(oscreen.layer, this$static._osx, this$static._osy);
}

function $dir(this$static){
  this$static._dir = 2;
  return this$static;
}

function $init_1(this$static, oscreen, nscreen){
  switch (this$static._dir) {
    case 0:
      this$static._odx = this$static._originX;
      this$static._ody = this$static._originY - oscreen._game.plat.graphics.viewSize.height_0;
      this$static._nsx = this$static._originX;
      this$static._nsy = this$static._originY + nscreen._game.plat.graphics.viewSize.height_0;
      break;
    case 1:
      this$static._odx = this$static._originX;
      this$static._ody = this$static._originY + oscreen._game.plat.graphics.viewSize.height_0;
      this$static._nsx = this$static._originX;
      this$static._nsy = this$static._originY - nscreen._game.plat.graphics.viewSize.height_0;
      break;
    case 2:
    default:this$static._odx = this$static._originX - oscreen._game.plat.graphics.viewSize.width_0;
      this$static._ody = this$static._originY;
      this$static._nsx = this$static._originX + nscreen._game.plat.graphics.viewSize.width_0;
      this$static._nsy = this$static._originY;
      break;
    case 3:
      this$static._odx = this$static._originX + oscreen._game.plat.graphics.viewSize.width_0;
      this$static._ody = this$static._originY;
      this$static._nsx = this$static._originX - nscreen._game.plat.graphics.viewSize.width_0;
      this$static._nsy = this$static._originY;
  }
  this$static._osx = oscreen.layer.transform.tx;
  this$static._osy = oscreen.layer.transform.ty;
  $setTranslation(nscreen.layer, this$static._nsx, this$static._nsy);
}

function $update_1(this$static, oscreen, nscreen, elapsed){
  var nx, ny, ox, oy;
  ox = $applyClamp(this$static._interp, this$static._originX, this$static._odx - this$static._originX, elapsed);
  oy = $applyClamp(this$static._interp, this$static._originY, this$static._ody - this$static._originY, elapsed);
  $setTranslation(oscreen.layer, ox, oy);
  nx = $applyClamp(this$static._interp, this$static._nsx, this$static._originX - this$static._nsx, elapsed);
  ny = $applyClamp(this$static._interp, this$static._nsy, this$static._originY - this$static._nsy, elapsed);
  $setTranslation(nscreen.layer, nx, ny);
  return elapsed >= 500;
}

function SlideTransition(stack_0){
  this._interp = ($clinit_Interpolator() , EASE_INOUT);
  this._originX = stack_0.originX;
  this._originY = stack_0.originY;
}

defineClass(408, 407, {}, SlideTransition);
_._dir = 2;
_._nsx = 0;
_._nsy = 0;
_._odx = 0;
_._ody = 0;
_._originX = 0;
_._originY = 0;
_._osx = 0;
_._osy = 0;
var Ltripleplay_game_trans_SlideTransition_2_classLit = createForClass('tripleplay.game.trans', 'SlideTransition', 408, Ltripleplay_game_trans_InterpedTransition_2_classLit);
function $inset(this$static, uniformInset){
  this$static.insets = ($clinit_Insets() , new Insets(uniformInset, uniformInset, uniformInset, uniformInset));
  return this$static;
}

function $inset_0(this$static, top_0, right, bottom, left){
  this$static.insets = new Insets(top_0, right, bottom, left);
  return this$static;
}

function Background(){
  this.insets = ($clinit_Insets() , ZERO);
}

defineClass(44, 1, $intern_50);
var Ltripleplay_ui_Background_2_classLit = createForClass('tripleplay.ui', 'Background', 44, Ljava_lang_Object_2_classLit);
function Background$1(val$color){
  this.val$color1 = val$color;
  Background.call(this);
}

defineClass(155, 44, $intern_50, Background$1);
_.instantiate = function instantiate(size_0){
  return new Background$LayerInstance(this, size_0, new Background$1$1(this.val$color1, size_0));
}
;
_.val$color1 = 0;
var Ltripleplay_ui_Background$1_2_classLit = createForClass('tripleplay.ui', 'Background/1', 155, Ltripleplay_ui_Background_2_classLit);
function Background$1$1(val$color, val$size){
  this.val$color2 = val$color;
  this.val$size3 = val$size;
  Layer.call(this);
}

defineClass(469, 20, $intern_38, Background$1$1);
_.paintImpl = function paintImpl_2(surf){
  $fillRect_0($setFillColor(surf, this.val$color2), 0, 0, this.val$size3.width_0, this.val$size3.height_0);
}
;
_.val$color2 = 0;
var Ltripleplay_ui_Background$1$1_2_classLit = createForClass('tripleplay.ui', 'Background/1/1', 469, Lplayn_scene_Layer_2_classLit);
function Background$2(val$bgColor){
  this.val$bgColor1 = val$bgColor;
  this.val$ulColor2 = $intern_51;
  this.val$brColor3 = $intern_52;
  Background.call(this);
}

defineClass(217, 44, $intern_50, Background$2);
_.instantiate = function instantiate_0(size_0){
  return new Background$LayerInstance(this, size_0, new Background$2$1(size_0, this.val$bgColor1, this.val$ulColor2, this.val$brColor3));
}
;
_.val$bgColor1 = 0;
_.val$brColor3 = 0;
_.val$ulColor2 = 0;
var Ltripleplay_ui_Background$2_2_classLit = createForClass('tripleplay.ui', 'Background/2', 217, Ltripleplay_ui_Background_2_classLit);
function Background$2$1(val$size, val$bgColor, val$ulColor, val$brColor){
  this.val$size2 = val$size;
  this.val$bgColor3 = val$bgColor;
  this.val$ulColor4 = val$ulColor;
  this.val$brColor5 = val$brColor;
  Layer.call(this);
}

defineClass(470, 20, $intern_38, Background$2$1);
_.paintImpl = function paintImpl_3(surf){
  var height, width_0;
  width_0 = this.val$size2.width_0;
  height = this.val$size2.height_0;
  $fillRect_0($setFillColor(surf, this.val$bgColor3), 0, 0, width_0, height);
  $drawLine($drawLine($setFillColor(surf, this.val$ulColor4), 0, 0, width_0, 0, 2), 0, 0, 0, height, 2);
  $drawLine($drawLine($drawLine($drawLine($setFillColor(surf, this.val$brColor5), width_0, 0, width_0, height, 1), 1, height - 1, width_0 - 1, height - 1, 1), 0, height, width_0, height, 1), width_0 - 1, 1, width_0 - 1, height - 1, 1);
}
;
_.val$bgColor3 = 0;
_.val$brColor5 = 0;
_.val$ulColor4 = 0;
var Ltripleplay_ui_Background$2$1_2_classLit = createForClass('tripleplay.ui', 'Background/2/1', 470, Lplayn_scene_Layer_2_classLit);
function Background$3(){
  this.val$bgColor1 = -1;
  this.val$color2 = 0;
  this.val$thickness3 = 1;
  Background.call(this);
}

defineClass(471, 44, $intern_50, Background$3);
_.instantiate = function instantiate_1(size_0){
  return new Background$LayerInstance(this, size_0, new Background$3$1(size_0, this.val$bgColor1, this.val$color2, this.val$thickness3));
}
;
_.val$bgColor1 = 0;
_.val$color2 = 0;
_.val$thickness3 = 0;
var Ltripleplay_ui_Background$3_2_classLit = createForClass('tripleplay.ui', 'Background/3', 471, Ltripleplay_ui_Background_2_classLit);
function Background$3$1(val$size, val$bgColor, val$color, val$thickness){
  this.val$size2 = val$size;
  this.val$bgColor3 = val$bgColor;
  this.val$color4 = val$color;
  this.val$thickness5 = val$thickness;
  Layer.call(this);
}

defineClass(472, 20, $intern_38, Background$3$1);
_.paintImpl = function paintImpl_4(surf){
  var height, width_0;
  width_0 = this.val$size2.width_0;
  height = this.val$size2.height_0;
  $fillRect_0($setFillColor(surf, this.val$bgColor3), 0, 0, width_0, height);
  $fillRect_0($fillRect_0($fillRect_0($fillRect_0($setFillColor(surf, this.val$color4), 0, 0, width_0, this.val$thickness5), 0, 0, this.val$thickness5, height), width_0 - this.val$thickness5, 0, this.val$thickness5, height), 0, height - this.val$thickness5, width_0, this.val$thickness5);
}
;
_.val$bgColor3 = 0;
_.val$color4 = 0;
_.val$thickness5 = 0;
var Ltripleplay_ui_Background$3$1_2_classLit = createForClass('tripleplay.ui', 'Background/3/1', 472, Lplayn_scene_Layer_2_classLit);
function Background$Instance(this$0, size_0){
  this.this$01 = this$0;
  this.size_0 = new Dimension_1(size_0);
}

defineClass(216, 1, $intern_29);
var Ltripleplay_ui_Background$Instance_2_classLit = createForClass('tripleplay.ui', 'Background/Instance', 216, Ljava_lang_Object_2_classLit);
function Background$LayerInstance(this$0, size_0, layer){
  Background$Instance.call(this, this$0, size_0);
  this._layer = layer;
}

defineClass(130, 216, $intern_29, Background$LayerInstance);
_.addTo = function addTo(parent_0, x_0, y_0, depthAdjust){
  $setDepth(this._layer, -10 + depthAdjust);
  $translate($transform(this._layer), x_0, y_0);
  $add_5(parent_0, this._layer);
}
;
_.close_0 = function close_23(){
  this._layer.close_0();
}
;
var Ltripleplay_ui_Background$LayerInstance_2_classLit = createForClass('tripleplay.ui', 'Background/LayerInstance', 130, Ltripleplay_ui_Background$Instance_2_classLit);
function $didAdd(this$static, child){
  $add_5(this$static.layer, child.layer);
  child._parent = this$static;
  if (!$willAdd(child)) {
    $set(child, ($clinit_Element$Flag() , IS_ADDING), true);
    child.wasAdded();
  }
}

function $wasRemoved_0(this$static){
  var child, count, ii, willDispose;
  $wasRemoved(this$static);
  willDispose = $isSet(this$static, ($clinit_Element$Flag() , WILL_DISPOSE));
  for (ii = 0 , count = this$static._children.array.length; ii < count; ii++) {
    child = $get_7(this$static._children, ii);
    willDispose && $set(child, WILL_DISPOSE, true);
    $set(child, IS_REMOVING, true);
    child.wasRemoved();
  }
}

function removeFromParent(element){
  var parent_0;
  if (!element._parent)
    return false;
  parent_0 = element._parent;
  $remove_10(parent_0, element);
  return true;
}

defineClass(105, 51, $intern_53);
_.computeSize = function computeSize_0(ldata, hintX, hintY){
  return $computeSize_0(this._layout, this, hintX, hintY);
}
;
_.layout = function layout_3(ldata, left, top_0, width_0, height){
  var ii, nn;
  $layout_0(this._layout, this, left, top_0, width_0, height);
  for (ii = 0 , nn = this._children.array.length; ii < nn; ii++)
    $get_7(this._children, ii).validate();
}
;
_.wasAdded = function wasAdded_0(){
  var child, count, ii;
  $wasAdded(this);
  for (ii = 0 , count = this._children.array.length; ii < count; ii++) {
    child = $get_7(this._children, ii);
    $set(child, ($clinit_Element$Flag() , IS_ADDING), true);
    child.wasAdded();
  }
}
;
_.wasRemoved = function wasRemoved_0(){
  $wasRemoved_0(this);
}
;
var Ltripleplay_ui_Container_2_classLit = createForClass('tripleplay.ui', 'Container', 105, Ltripleplay_ui_Element_2_classLit);
var Ltripleplay_ui_Composite_2_classLit = createForClass('tripleplay.ui', 'Composite', null, Ltripleplay_ui_Container_2_classLit);
defineClass(429, 105, $intern_53);
var Ltripleplay_ui_Container$Mutable_2_classLit = createForClass('tripleplay.ui', 'Container/Mutable', 429, Ltripleplay_ui_Container_2_classLit);
function $hitTest(this$static, layer, p){
  var hit;
  hit = null;
  if ($isSet(this$static.this$01, ($clinit_Element$Flag() , VISIBLE_2)) && $contains_0(this$static.this$01, p.x_0, p.y_0)) {
    $isSet(this$static.this$01, HIT_DESCEND) && (hit = layer.hitTestDefault(p));
    !hit && $isSet(this$static.this$01, HIT_ABSORB) && (hit = layer);
  }
  return hit;
}

function Element$1(this$0){
  this.this$01 = this$0;
}

defineClass(433, 1, {}, Element$1);
_.toString_0 = function toString_74(){
  return '<' + this.this$01._size + '>';
}
;
var Ltripleplay_ui_Element$1_2_classLit = createForClass('tripleplay.ui', 'Element/1', 433, Ljava_lang_Object_2_classLit);
function Element$7(this$0){
  this.this$01 = this$0;
  GroupLayer.call(this);
}

defineClass(434, 119, $intern_38, Element$7);
_.name_1 = function name_12(){
  return this.this$01 + ' layer';
}
;
var Ltripleplay_ui_Element$7_2_classLit = createForClass('tripleplay.ui', 'Element/7', 434, Lplayn_scene_GroupLayer_2_classLit);
function $clinit_Element$Binding(){
  $clinit_Element$Binding = emptyMethod;
  NONE = new Element$Binding$1;
}

defineClass(431, 1, {});
var NONE;
var Ltripleplay_ui_Element$Binding_2_classLit = createForClass('tripleplay.ui', 'Element/Binding', 431, Ljava_lang_Object_2_classLit);
function Element$Binding$1(){
  $clinit_Closeable$Util();
  this.next_0 = null;
}

defineClass(432, 431, {}, Element$Binding$1);
var Ltripleplay_ui_Element$Binding$1_2_classLit = createForClass('tripleplay.ui', 'Element/Binding/1', 432, Ltripleplay_ui_Element$Binding_2_classLit);
function $clinit_Element$Flag(){
  $clinit_Element$Flag = emptyMethod;
  VALID = new Element$Flag('VALID', 0, 1);
  ENABLED = new Element$Flag('ENABLED', 1, 2);
  VISIBLE_2 = new Element$Flag('VISIBLE', 2, 4);
  SELECTED = new Element$Flag('SELECTED', 3, 8);
  WILL_DISPOSE = new Element$Flag('WILL_DISPOSE', 4, 16);
  HIT_DESCEND = new Element$Flag('HIT_DESCEND', 5, 32);
  HIT_ABSORB = new Element$Flag('HIT_ABSORB', 6, 64);
  IS_REMOVING = new Element$Flag('IS_REMOVING', 7, 128);
  IS_ADDING = new Element$Flag('IS_ADDING', 8, 256);
}

function Element$Flag(enum$name, enum$ordinal, mask){
  Enum.call(this, enum$name, enum$ordinal);
  this.mask = mask;
}

function values_26(){
  $clinit_Element$Flag();
  return stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Element$Flag_2_classLit, 1), $intern_1, 42, 0, [VALID, ENABLED, VISIBLE_2, SELECTED, WILL_DISPOSE, HIT_DESCEND, HIT_ABSORB, IS_REMOVING, IS_ADDING]);
}

defineClass(42, 6, {3:1, 7:1, 6:1, 42:1}, Element$Flag);
_.mask = 0;
var ENABLED, HIT_ABSORB, HIT_DESCEND, IS_ADDING, IS_REMOVING, SELECTED, VALID, VISIBLE_2, WILL_DISPOSE;
var Ltripleplay_ui_Element$Flag_2_classLit = createForEnum('tripleplay.ui', 'Element/Flag', 42, Ljava_lang_Enum_2_classLit, values_26);
function $add_12(this$static, children){
  var child, child$index, child$index0, child$max, child$max0;
  for (child$index0 = 0 , child$max0 = children.length; child$index0 < child$max0; ++child$index0) {
    child = children[child$index0];
    removeFromParent(child);
  }
  $addAll_0(this$static._children, new Arrays$ArrayList(children));
  for (child$index = 0 , child$max = children.length; child$index < child$max; ++child$index) {
    child = children[child$index];
    $didAdd(this$static, child);
    $emit(this$static._childAdded, child);
  }
  $invalidate(this$static);
  return this$static;
}

function $remove_10(this$static, child){
  if ($remove_1(this$static._children, child)) {
    $remove_7(this$static.layer, child.layer);
    $willRemove(child);
    child._parent = null;
    $set(child, ($clinit_Element$Flag() , IS_REMOVING), true);
    child.wasRemoved();
    $emit(this$static._childRemoved, child);
    $invalidate(this$static);
  }
}

defineClass(430, 429, $intern_53);
_.iterator = function iterator_21(){
  return new Collections$UnmodifiableCollectionIterator(unmodifiableList(this._children).coll.iterator());
}
;
var Ltripleplay_ui_Elements_2_classLit = createForClass('tripleplay.ui', 'Elements', 430, Ltripleplay_ui_Container$Mutable_2_classLit);
function $clinit_IconEffect(){
  $clinit_IconEffect = emptyMethod;
  NONE_0 = new IconEffect$1;
}

defineClass(550, 1, {});
var NONE_0;
var Ltripleplay_ui_IconEffect_2_classLit = createForClass('tripleplay.ui', 'IconEffect', 550, Ljava_lang_Object_2_classLit);
function IconEffect$1(){
}

defineClass(480, 550, {}, IconEffect$1);
var Ltripleplay_ui_IconEffect$1_2_classLit = createForClass('tripleplay.ui', 'IconEffect/1', 480, Ltripleplay_ui_IconEffect_2_classLit);
function $addRoot(this$static, root){
  $add_1(this$static._roots, root);
  return root;
}

function $createRoot(this$static, layout, sheet_0, parent_0){
  var root;
  root = $addRoot(this$static, new Root(this$static, layout, sheet_0));
  $add_5(parent_0, root.layer);
  return root;
}

function $disposeRoot(this$static, root){
  if (!$remove_1(this$static._roots, root))
    return false;
  $set(root, ($clinit_Element$Flag() , WILL_DISPOSE), true);
  $wasRemoved_0(root);
  $close_3(root.layer);
  return true;
}

function $paint_1(this$static){
  var ii, ll;
  for (ii = 0 , ll = this$static._roots.array.length; ii < ll; ii++)
    $validate($get_7(this$static._roots, ii));
}

function Interface(frame_0){
  this.anim = new Animator;
  this._roots = new ArrayList;
  this._onFrame = ($clinit_Closeable$Util() , new Closeable$Util$2(stampJavaTypeInfo(getClassLiteralForArray(Lreact_Closeable_2_classLit, 1), $intern_1, 12, 0, [$addConnection(frame_0, new Interface$1(this)), $addConnection(frame_0, this.anim.onPaint)])));
}

defineClass(415, 1, $intern_29, Interface);
_.close_0 = function close_24(){
  $close_5(this._onFrame);
}
;
var Ltripleplay_ui_Interface_2_classLit = createForClass('tripleplay.ui', 'Interface', 415, Ljava_lang_Object_2_classLit);
function Interface$1(this$0){
  this.this$01 = this$0;
}

defineClass(416, 521, $intern_31, Interface$1);
_.onEmit = function onEmit_19(clock){
  var lastArg;
  $paint_1((lastArg = this , clock , lastArg).this$01);
}
;
var Ltripleplay_ui_Interface$1_2_classLit = createForClass('tripleplay.ui', 'Interface/1', 416, Lreact_Slot_2_classLit);
function $setBounds_0(elem, x_0, y_0, width_0, height){
  elem.setLocation(x_0, y_0);
  elem.setSize(width_0, height);
}

defineClass(545, 1, {});
var Ltripleplay_ui_Layout_2_classLit = createForClass('tripleplay.ui', 'Layout', 545, Ljava_lang_Object_2_classLit);
defineClass(546, 1, {});
var Ltripleplay_ui_Layout$Constraint_2_classLit = createForClass('tripleplay.ui', 'Layout/Constraint', 546, Ljava_lang_Object_2_classLit);
function $setSize_4(this$static, width_0, height){
  $setSize_2(this$static._size, width_0, height);
  $invalidate(this$static);
  return this$static;
}

function $setSize_5(this$static, size_0){
  return $setSize_4(this$static, size_0.width_0, size_0.height_0);
}

function Root(iface, layout, sheet_0){
  Element_0.call(this);
  this._children = new ArrayList;
  this._childAdded = ($clinit_AbstractSignal() , new Signal);
  this._childRemoved = new Signal;
  this._layout = layout;
  $set(this, ($clinit_Element$Flag() , HIT_DESCEND), true);
  this.validated = new Signal;
  this.iface = iface;
  this._sheet = sheet_0;
  $set(this, HIT_ABSORB, true);
}

defineClass(153, 430, {11:1, 12:1, 105:1, 51:1, 153:1}, Root);
_.setSize = function setSize_0(width_0, height){
  return $setSize_4(this, width_0, height);
}
;
_.close_0 = function close_25(){
  $disposeRoot(this.iface, this);
}
;
_.getStyleClass = function getStyleClass_0(){
  return Ltripleplay_ui_Root_2_classLit;
}
;
_.preferredSize = function preferredSize_0(hintX, hintY){
  return !this._preferredSize && (this._preferredSize = $computeSize(this, hintX, hintY)) , this._preferredSize;
}
;
_.setLocation = function setLocation_0(x_0, y_0){
  var iv, iv0;
  $setTranslation(this.layer, (iv0 = round_int(x_0) , x_0 >= 0 || iv0 == x_0 || iv0 == $intern_17?iv0:iv0 - 1), (iv = round_int(y_0) , y_0 >= 0 || iv == y_0 || iv == $intern_17?iv:iv - 1));
}
;
_.validate = function validate_0(){
  $validate(this);
}
;
_.wasValidated = function wasValidated_0(){
  $emit(this.validated, this);
}
;
var Ltripleplay_ui_Root_2_classLit = createForClass('tripleplay.ui', 'Root', 153, Ltripleplay_ui_Elements_2_classLit);
function newSheetBuilder(gfx){
  var butBg, butSelBg;
  butBg = $inset_0(new RoundRectBackground(gfx, $intern_52), 5, 6, 2, 6);
  butSelBg = $inset_0(new RoundRectBackground(gfx, $intern_51), 6, 5, 1, 7);
  return $add_16($add_14($add_16($add_16($add_14($add_16($add_14($add_16($add_14($add_16($add_14($add_16(new Stylesheet$Builder, Ltripleplay_ui_Button_2_classLit, stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(($clinit_Style() , BACKGROUND), butBg)])), Ltripleplay_ui_Button_2_classLit, 2, stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, butSelBg)])), Ltripleplay_ui_ToggleButton_2_classLit, stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, butBg)])), Ltripleplay_ui_ToggleButton_2_classLit, 2, stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, butSelBg)])), Ltripleplay_ui_CheckBox_2_classLit, stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset_0(new RoundRectBackground(gfx, $intern_52), 3, 2, 0, 3))])), Ltripleplay_ui_CheckBox_2_classLit, 2, stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset_0(new RoundRectBackground(gfx, $intern_51), 3, 2, 0, 3))])), Ltripleplay_ui_Field_2_classLit, stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset(new Background$2(-1), 5)), HALIGN.left_0])), Ltripleplay_ui_Field_2_classLit, 1, stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset(new Background$2(-3355444), 5))])), Ltripleplay_ui_Menu_2_classLit, stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset(new Background$3, 6))])), Ltripleplay_ui_MenuItem_2_classLit, stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, new Background$1(-1)), HALIGN.left_0])), Ltripleplay_ui_MenuItem_2_classLit, 2, stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, new Background$1($intern_47)), new Style$Binding(COLOR, valueOf(-1))])), Ltripleplay_ui_Tabs_2_classLit, stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(($clinit_Tabs() , HIGHLIGHTER), new Tabs$2)]));
}

function $clinit_Style(){
  $clinit_Style = emptyMethod;
  COLOR = new Style$1;
  new Style$2;
  new Style$3(true, valueOf(1426063360));
  new Style$3(true, new Float(2));
  new Style$3(true, new Float(2));
  new Style$3(true, valueOf(-3735552));
  new Style$GradientTypeStyle;
  new Style$3(true, new Float(1));
  new Style$3(true, ($clinit_Canvas$LineCap() , ROUND));
  new Style$3(true, ($clinit_Canvas$LineJoin() , ROUND_0));
  HALIGN = new Style$HAlignStyle;
  VALIGN = new Style$VAlignStyle;
  FONT = new Style$3(true, new Font(16));
  new Style$Flag(false);
  new Style$TextEffectStyle;
  new Style$Flag(true);
  new Style$Flag(false);
  new Style$3(false, new Float(6));
  new Style$Flag(false);
  BACKGROUND = new Style$3(false, new BlankBackground);
  new Style$PosStyle;
  new Style$3(false, valueOf(2));
  new Style$Flag(false);
  new Style$3(false, ($clinit_IconEffect() , NONE_0));
  new Style$3(false, null);
}

function Style(inherited){
  this.inherited = inherited;
}

defineClass(52, 1, {});
_.inherited = false;
var BACKGROUND, COLOR, FONT, HALIGN, VALIGN;
var Ltripleplay_ui_Style_2_classLit = createForClass('tripleplay.ui', 'Style', 52, Ljava_lang_Object_2_classLit);
function Style$1(){
  Style.call(this, true);
}

defineClass(467, 52, {}, Style$1);
_.getDefault = function getDefault(elem){
  return valueOf($isSet(elem, ($clinit_Element$Flag() , ENABLED))?$intern_47:-10066330);
}
;
var Ltripleplay_ui_Style$1_2_classLit = createForClass('tripleplay.ui', 'Style/1', 467, Ltripleplay_ui_Style_2_classLit);
function Style$2(){
  Style.call(this, true);
}

defineClass(468, 52, {}, Style$2);
_.getDefault = function getDefault_0(elem){
  return valueOf($isSet(elem, ($clinit_Element$Flag() , ENABLED))?-1426063361:-1429418804);
}
;
var Ltripleplay_ui_Style$2_2_classLit = createForClass('tripleplay.ui', 'Style/2', 468, Ltripleplay_ui_Style_2_classLit);
function Style$3($anonymous0, val$defaultValue){
  $clinit_Style();
  this.val$defaultValue2 = val$defaultValue;
  Style.call(this, $anonymous0);
}

defineClass(31, 52, {}, Style$3);
_.getDefault = function getDefault_1(elem){
  return this.val$defaultValue2;
}
;
var Ltripleplay_ui_Style$3_2_classLit = createForClass('tripleplay.ui', 'Style/3', 31, Ltripleplay_ui_Style_2_classLit);
function Style$Binding(style, value_0){
  this.style_0 = style;
  this.value_0 = value_0;
}

defineClass(9, 1, {9:1}, Style$Binding);
var Ltripleplay_ui_Style$Binding_2_classLit = createForClass('tripleplay.ui', 'Style/Binding', 9, Ljava_lang_Object_2_classLit);
function Style$Flag(inherited){
  this.inherited = inherited;
  new Style$Binding(this, ($clinit_Boolean() , $clinit_Boolean() , false));
  new Style$Binding(this, (null , true));
  this._default = (null , false);
}

defineClass(106, 52, {}, Style$Flag);
_.getDefault = function getDefault_2(mode){
  return this._default;
}
;
var Ltripleplay_ui_Style$Flag_2_classLit = createForClass('tripleplay.ui', 'Style/Flag', 106, Ltripleplay_ui_Style_2_classLit);
function Style$GradientTypeStyle(){
  this.inherited = true;
  new Style$Binding(this, ($clinit_EffectRenderer$Gradient$Type() , BOTTOM_0));
  new Style$Binding(this, TOP_0);
  new Style$Binding(this, CENTER_4);
}

defineClass(455, 52, {}, Style$GradientTypeStyle);
_.getDefault = function getDefault_3(elem){
  return $clinit_EffectRenderer$Gradient$Type() , BOTTOM_0;
}
;
var Ltripleplay_ui_Style$GradientTypeStyle_2_classLit = createForClass('tripleplay.ui', 'Style/GradientTypeStyle', 455, Ltripleplay_ui_Style_2_classLit);
function $clinit_Style$HAlign(){
  $clinit_Style$HAlign = emptyMethod;
  LEFT_2 = new Style$HAlign$1;
  RIGHT_2 = new Style$HAlign$2;
  CENTER_0 = new Style$HAlign$3;
}

function Style$HAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_27(){
  $clinit_Style$HAlign();
  return stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$HAlign_2_classLit, 1), $intern_1, 65, 0, [LEFT_2, RIGHT_2, CENTER_0]);
}

defineClass(65, 6, $intern_54);
var CENTER_0, LEFT_2, RIGHT_2;
var Ltripleplay_ui_Style$HAlign_2_classLit = createForEnum('tripleplay.ui', 'Style/HAlign', 65, Ljava_lang_Enum_2_classLit, values_27);
function Style$HAlign$1(){
  Style$HAlign.call(this, 'LEFT', 0);
}

defineClass(456, 65, $intern_54, Style$HAlign$1);
_.offset = function offset_0(size_0, extent){
  return 0;
}
;
var Ltripleplay_ui_Style$HAlign$1_2_classLit = createForEnum('tripleplay.ui', 'Style/HAlign/1', 456, Ltripleplay_ui_Style$HAlign_2_classLit, null);
function Style$HAlign$2(){
  Style$HAlign.call(this, 'RIGHT', 1);
}

defineClass(457, 65, $intern_54, Style$HAlign$2);
_.offset = function offset_1(size_0, extent){
  return extent - size_0;
}
;
var Ltripleplay_ui_Style$HAlign$2_2_classLit = createForEnum('tripleplay.ui', 'Style/HAlign/2', 457, Ltripleplay_ui_Style$HAlign_2_classLit, null);
function Style$HAlign$3(){
  Style$HAlign.call(this, 'CENTER', 2);
}

defineClass(458, 65, $intern_54, Style$HAlign$3);
_.offset = function offset_2(size_0, extent){
  return (extent - size_0) / 2;
}
;
var Ltripleplay_ui_Style$HAlign$3_2_classLit = createForEnum('tripleplay.ui', 'Style/HAlign/3', 458, Ltripleplay_ui_Style$HAlign_2_classLit, null);
function Style$HAlignStyle(){
  this.inherited = false;
  this.left_0 = new Style$Binding(this, ($clinit_Style$HAlign() , LEFT_2));
  new Style$Binding(this, RIGHT_2);
  new Style$Binding(this, CENTER_0);
}

defineClass(451, 52, {}, Style$HAlignStyle);
_.getDefault = function getDefault_4(elem){
  return $clinit_Style$HAlign() , CENTER_0;
}
;
var Ltripleplay_ui_Style$HAlignStyle_2_classLit = createForClass('tripleplay.ui', 'Style/HAlignStyle', 451, Ltripleplay_ui_Style_2_classLit);
function $clinit_Style$Pos(){
  $clinit_Style$Pos = emptyMethod;
  LEFT_3 = new Style$Pos('LEFT', 0);
  ABOVE_0 = new Style$Pos('ABOVE', 1);
  RIGHT_3 = new Style$Pos('RIGHT', 2);
  BELOW_0 = new Style$Pos('BELOW', 3);
}

function Style$Pos(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_28(){
  $clinit_Style$Pos();
  return stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$Pos_2_classLit, 1), $intern_1, 86, 0, [LEFT_3, ABOVE_0, RIGHT_3, BELOW_0]);
}

defineClass(86, 6, {3:1, 7:1, 6:1, 86:1}, Style$Pos);
var ABOVE_0, BELOW_0, LEFT_3, RIGHT_3;
var Ltripleplay_ui_Style$Pos_2_classLit = createForEnum('tripleplay.ui', 'Style/Pos', 86, Ljava_lang_Enum_2_classLit, values_28);
function Style$PosStyle(){
  this.inherited = false;
  new Style$Binding(this, ($clinit_Style$Pos() , LEFT_3));
  new Style$Binding(this, ABOVE_0);
  new Style$Binding(this, RIGHT_3);
  new Style$Binding(this, BELOW_0);
}

defineClass(453, 52, {}, Style$PosStyle);
_.getDefault = function getDefault_5(elem){
  return $clinit_Style$Pos() , LEFT_3;
}
;
var Ltripleplay_ui_Style$PosStyle_2_classLit = createForClass('tripleplay.ui', 'Style/PosStyle', 453, Ltripleplay_ui_Style_2_classLit);
function $clinit_Style$TextEffect(){
  $clinit_Style$TextEffect = emptyMethod;
  PIXEL_OUTLINE = new Style$TextEffect$1;
  VECTOR_OUTLINE = new Style$TextEffect$2;
  SHADOW = new Style$TextEffect$3;
  GRADIENT = new Style$TextEffect$4;
  NONE_1 = new Style$TextEffect$5;
}

function Style$TextEffect(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_29(){
  $clinit_Style$TextEffect();
  return stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$TextEffect_2_classLit, 1), $intern_1, 37, 0, [PIXEL_OUTLINE, VECTOR_OUTLINE, SHADOW, GRADIENT, NONE_1]);
}

defineClass(37, 6, $intern_55);
var GRADIENT, NONE_1, PIXEL_OUTLINE, SHADOW, VECTOR_OUTLINE;
var Ltripleplay_ui_Style$TextEffect_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect', 37, Ljava_lang_Enum_2_classLit, values_29);
function Style$TextEffect$1(){
  Style$TextEffect.call(this, 'PIXEL_OUTLINE', 0);
}

defineClass(462, 37, $intern_55, Style$TextEffect$1);
var Ltripleplay_ui_Style$TextEffect$1_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/1', 462, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffect$2(){
  Style$TextEffect.call(this, 'VECTOR_OUTLINE', 1);
}

defineClass(463, 37, $intern_55, Style$TextEffect$2);
var Ltripleplay_ui_Style$TextEffect$2_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/2', 463, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffect$3(){
  Style$TextEffect.call(this, 'SHADOW', 2);
}

defineClass(464, 37, $intern_55, Style$TextEffect$3);
var Ltripleplay_ui_Style$TextEffect$3_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/3', 464, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffect$4(){
  Style$TextEffect.call(this, 'GRADIENT', 3);
}

defineClass(465, 37, $intern_55, Style$TextEffect$4);
var Ltripleplay_ui_Style$TextEffect$4_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/4', 465, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffect$5(){
  Style$TextEffect.call(this, 'NONE', 4);
}

defineClass(466, 37, $intern_55, Style$TextEffect$5);
var Ltripleplay_ui_Style$TextEffect$5_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/5', 466, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffectStyle(){
  this.inherited = true;
  new Style$Binding(this, ($clinit_Style$TextEffect() , PIXEL_OUTLINE));
  new Style$Binding(this, VECTOR_OUTLINE);
  new Style$Binding(this, SHADOW);
  new Style$Binding(this, GRADIENT);
  new Style$Binding(this, NONE_1);
}

defineClass(454, 52, {}, Style$TextEffectStyle);
_.getDefault = function getDefault_6(elem){
  return $clinit_Style$TextEffect() , NONE_1;
}
;
var Ltripleplay_ui_Style$TextEffectStyle_2_classLit = createForClass('tripleplay.ui', 'Style/TextEffectStyle', 454, Ltripleplay_ui_Style_2_classLit);
function $clinit_Style$VAlign(){
  $clinit_Style$VAlign = emptyMethod;
  TOP = new Style$VAlign$1;
  BOTTOM = new Style$VAlign$2;
  CENTER_1 = new Style$VAlign$3;
}

function Style$VAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_30(){
  $clinit_Style$VAlign();
  return stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_Style$VAlign_2_classLit, 1), $intern_1, 66, 0, [TOP, BOTTOM, CENTER_1]);
}

defineClass(66, 6, $intern_56);
var BOTTOM, CENTER_1, TOP;
var Ltripleplay_ui_Style$VAlign_2_classLit = createForEnum('tripleplay.ui', 'Style/VAlign', 66, Ljava_lang_Enum_2_classLit, values_30);
function Style$VAlign$1(){
  Style$VAlign.call(this, 'TOP', 0);
}

defineClass(459, 66, $intern_56, Style$VAlign$1);
_.offset = function offset_3(size_0, extent){
  return 0;
}
;
var Ltripleplay_ui_Style$VAlign$1_2_classLit = createForEnum('tripleplay.ui', 'Style/VAlign/1', 459, Ltripleplay_ui_Style$VAlign_2_classLit, null);
function Style$VAlign$2(){
  Style$VAlign.call(this, 'BOTTOM', 1);
}

defineClass(460, 66, $intern_56, Style$VAlign$2);
_.offset = function offset_4(size_0, extent){
  return extent - size_0;
}
;
var Ltripleplay_ui_Style$VAlign$2_2_classLit = createForEnum('tripleplay.ui', 'Style/VAlign/2', 460, Ltripleplay_ui_Style$VAlign_2_classLit, null);
function Style$VAlign$3(){
  Style$VAlign.call(this, 'CENTER', 2);
}

defineClass(461, 66, $intern_56, Style$VAlign$3);
_.offset = function offset_5(size_0, extent){
  return (extent - size_0) / 2;
}
;
var Ltripleplay_ui_Style$VAlign$3_2_classLit = createForEnum('tripleplay.ui', 'Style/VAlign/3', 461, Ltripleplay_ui_Style$VAlign_2_classLit, null);
function Style$VAlignStyle(){
  this.inherited = false;
  new Style$Binding(this, ($clinit_Style$VAlign() , TOP));
  new Style$Binding(this, BOTTOM);
  new Style$Binding(this, CENTER_1);
}

defineClass(452, 52, {}, Style$VAlignStyle);
_.getDefault = function getDefault_7(elem){
  return $clinit_Style$VAlign() , CENTER_1;
}
;
var Ltripleplay_ui_Style$VAlignStyle_2_classLit = createForClass('tripleplay.ui', 'Style/VAlignStyle', 452, Ltripleplay_ui_Style_2_classLit);
function $clinit_Styles(){
  $clinit_Styles = emptyMethod;
  _noneSingleton = new Styles(initUnidimensionalArray(Ltripleplay_ui_Styles$Binding_2_classLit, $intern_1, 67, 0, 0, 1));
}

function $add_13(this$static, mode, bindings){
  var ii, nbindings;
  if (bindings.length == 0)
    return this$static;
  nbindings = initUnidimensionalArray(Ltripleplay_ui_Styles$Binding_2_classLit, $intern_1, 67, bindings.length, 0, 1);
  for (ii = 0; ii < bindings.length; ii++) {
    nbindings[ii] = new Styles$Binding(bindings[ii], mode);
  }
  return $merge_0(this$static, nbindings);
}

function $get_12(this$static, key, elem){
  var cmp, high, low, mid, midVal;
  low = 0;
  high = this$static._bindings.length - 1;
  while (low <= high) {
    mid = low + high >>> 1;
    midVal = this$static._bindings[mid];
    cmp = $compareToStyle(midVal, key);
    if (cmp < 0)
      low = mid + 1;
    else if (cmp > 0)
      high = mid - 1;
    else 
      return $get_13(midVal, elem);
  }
  return null;
}

function $merge(this$static, styles){
  if (this$static._bindings.length == 0)
    return styles;
  return $merge_0(this$static, styles._bindings);
}

function $merge_0(this$static, obindings){
  var didx, dupidx, dups, idx, idx0, ii, ii0, nb, nbindings, ob;
  if (obindings.length == 0)
    return this$static;
  dupidx = initUnidimensionalArray(I_classLit, $intern_22, 22, obindings.length, 15, 1);
  dups = 0;
  for (ii0 = 0; ii0 < obindings.length; ii0++) {
    idx0 = binarySearch(this$static._bindings, obindings[ii0]);
    idx0 >= 0 && ++dups;
    dupidx[ii0] = idx0;
  }
  nbindings = initUnidimensionalArray(Ltripleplay_ui_Styles$Binding_2_classLit, $intern_1, 67, this$static._bindings.length + obindings.length - dups, 0, 1);
  arraycopy(this$static._bindings, nbindings, 0, this$static._bindings.length);
  idx = this$static._bindings.length;
  for (ii = 0; ii < obindings.length; ii++) {
    didx = dupidx[ii];
    if (didx >= 0) {
      nb = nbindings[didx];
      ob = obindings[ii];
      nbindings[didx] = new Styles$Binding_1(nb.style_0, $merge_1(nb._defaultV, ob._defaultV), $merge_1(nb._disabledV, ob._disabledV), $merge_1(nb._selectedV, ob._selectedV), $merge_1(nb._disSelectedV, ob._disSelectedV));
    }
     else 
      nbindings[idx++] = obindings[ii];
  }
  mergeSort(nbindings, 0, nbindings.length);
  return new Styles(nbindings);
}

function Styles(bindings){
  this._bindings = bindings;
}

function make(bindings){
  $clinit_Styles();
  return $add_13(_noneSingleton, 0, bindings);
}

function resolveStyle(element, style){
  $clinit_Styles();
  var group, sheet_0, value_0;
  value_0 = $get_12(element._styles, style, element);
  if (value_0 != null)
    return value_0;
  group = instanceOf(element, 153)?element:element._parent;
  for (; group; group = group._parent) {
    sheet_0 = group._sheet;
    if (!sheet_0)
      continue;
    value_0 = $get_14(sheet_0, style, element.getStyleClass(), element);
    if (value_0 != null)
      return value_0;
  }
  return style.getDefault(element);
}

defineClass(160, 1, {160:1}, Styles);
var _noneSingleton;
var Ltripleplay_ui_Styles_2_classLit = createForClass('tripleplay.ui', 'Styles', 160, Ljava_lang_Object_2_classLit);
function $compareTo_3(this$static, other){
  var hc, ohc;
  if (this$static.style_0 == other.style_0)
    return 0;
  hc = hashCode__I__devirtual$(this$static.style_0);
  ohc = hashCode__I__devirtual$(other.style_0);
  return hc < ohc?-1:1;
}

function $compareToStyle(this$static, style){
  var hc, ohc;
  if (this$static.style_0 == style)
    return 0;
  hc = hashCode__I__devirtual$(this$static.style_0);
  ohc = hashCode__I__devirtual$(style);
  return hc < ohc?-1:1;
}

function $get_13(this$static, elem){
  if ($isSet(elem, ($clinit_Element$Flag() , ENABLED))) {
    if ($isSet(elem, SELECTED) && this$static._selectedV != null)
      return this$static._selectedV;
  }
   else {
    if ($isSet(elem, SELECTED) && this$static._disSelectedV != null)
      return this$static._disSelectedV;
    if (this$static._disabledV != null)
      return this$static._disabledV;
  }
  return this$static._defaultV;
}

function $merge_1(ours, theirs){
  return theirs == null?ours:theirs;
}

function Styles$Binding(binding, mode){
  Styles$Binding_0.call(this, binding.style_0);
  switch (mode) {
    case 0:
      this._defaultV = binding.value_0;
      break;
    case 1:
      this._disabledV = binding.value_0;
      break;
    case 2:
      this._selectedV = binding.value_0;
      break;
    case 3:
      this._disSelectedV = binding.value_0;
  }
}

function Styles$Binding_0(style){
  this.style_0 = style;
}

function Styles$Binding_1(style, defaultV, disabledV, selectedV, disSelectedV){
  Styles$Binding_0.call(this, style);
  this._defaultV = defaultV;
  this._disabledV = disabledV;
  this._selectedV = selectedV;
  this._disSelectedV = disSelectedV;
}

defineClass(67, 1, {7:1, 67:1}, Styles$Binding, Styles$Binding_1);
_.compareTo = function compareTo_6(other){
  return $compareTo_3(this, other);
}
;
var Ltripleplay_ui_Styles$Binding_2_classLit = createForClass('tripleplay.ui', 'Styles/Binding', 67, Ljava_lang_Object_2_classLit);
function $get_14(this$static, style, eclass, elem){
  var parent_0, styles, value_0;
  styles = $get_6(this$static._styles, eclass);
  value_0 = !styles?null:$get_12(styles, style, elem);
  if (value_0 != null)
    return value_0;
  if (!style.inherited || eclass == Ltripleplay_ui_Element_2_classLit)
    return null;
  parent_0 = eclass.superclass;
  if (!parent_0) {
    throw toJs(new RuntimeException_0('Your PlayN application must not be compiled with -XdisableClassMetadata. It breaks TriplePlay stylesheets.'));
  }
  return $get_14(this$static, style, parent_0, elem);
}

function Stylesheet(styles){
  this._styles = styles;
}

defineClass(449, 1, {}, Stylesheet);
var Ltripleplay_ui_Stylesheet_2_classLit = createForClass('tripleplay.ui', 'Stylesheet', 449, Ljava_lang_Object_2_classLit);
function $add_14(this$static, eclass, mode, styles){
  return $add_15(this$static, eclass, $add_13(($clinit_Styles() , $clinit_Styles() , _noneSingleton), mode, styles));
}

function $add_15(this$static, eclass, styles){
  var ostyles;
  ostyles = $get_6(this$static._styles, eclass);
  $put_3(this$static._styles, eclass, !ostyles?styles:$merge(ostyles, styles));
  return this$static;
}

function $add_16(this$static, eclass, styles){
  return $add_15(this$static, eclass, ($clinit_Styles() , $add_13((null , _noneSingleton), 0, styles)));
}

function $create(this$static){
  var sheet_0;
  sheet_0 = new Stylesheet(this$static._styles);
  this$static._styles = null;
  return sheet_0;
}

function Stylesheet$Builder(){
  this._styles = new HashMap;
}

defineClass(450, 1, {}, Stylesheet$Builder);
var Ltripleplay_ui_Stylesheet$Builder_2_classLit = createForClass('tripleplay.ui', 'Stylesheet/Builder', 450, Ljava_lang_Object_2_classLit);
function $clinit_Tabs(){
  $clinit_Tabs = emptyMethod;
  NOOP_HIGHLIGHTER = new Tabs$1;
  HIGHLIGHTER = ($clinit_Style() , new Style$3(true, NOOP_HIGHLIGHTER));
}

var HIGHLIGHTER, NOOP_HIGHLIGHTER;
var Ltripleplay_ui_Tabs_2_classLit = createForClass('tripleplay.ui', 'Tabs', null, Ltripleplay_ui_Composite_2_classLit);
function Tabs$1(){
}

defineClass(485, 1, {}, Tabs$1);
var Ltripleplay_ui_Tabs$1_2_classLit = createForClass('tripleplay.ui', 'Tabs/1', 485, Ljava_lang_Object_2_classLit);
function Tabs$2(){
}

defineClass(486, 1, {}, Tabs$2);
var Ltripleplay_ui_Tabs$2_2_classLit = createForClass('tripleplay.ui', 'Tabs/2', 486, Ljava_lang_Object_2_classLit);
function BlankBackground(){
  Background.call(this);
}

defineClass(483, 44, $intern_50, BlankBackground);
_.instantiate = function instantiate_2(size_0){
  return new BlankBackground$1(this, size_0);
}
;
var Ltripleplay_ui_bgs_BlankBackground_2_classLit = createForClass('tripleplay.ui.bgs', 'BlankBackground', 483, Ltripleplay_ui_Background_2_classLit);
function BlankBackground$1(this$0_1, $anonymous0){
  Background$Instance.call(this, this$0_1, $anonymous0);
}

defineClass(484, 216, $intern_29, BlankBackground$1);
_.addTo = function addTo_0(parent_0, x_0, y_0, depthAdjust){
}
;
_.close_0 = function close_26(){
}
;
var Ltripleplay_ui_bgs_BlankBackground$1_2_classLit = createForClass('tripleplay.ui.bgs', 'BlankBackground/1', 484, Ltripleplay_ui_Background$Instance_2_classLit);
function RoundRectBackground(gfx, borderColor){
  Background.call(this);
  this._gfx = gfx;
  this._bgColor = -3355444;
  this._radius = 5;
  this._borderColor = borderColor;
  this._borderWidth = 2;
  this._borderRadius = 5;
}

defineClass(109, 44, $intern_50, RoundRectBackground);
_.instantiate = function instantiate_3(size_0){
  var canvas, iheight, iradius, iwidth, layer;
  canvas = $createCanvas_0(this._gfx, size_0);
  if (this._borderWidth > 0) {
    $fillRoundRect($setFillColor_0(canvas, this._borderColor), 0, 0, size_0.width_0, size_0.height_0, this._radius);
    iwidth = size_0.width_0 - 2 * this._borderWidth;
    iheight = size_0.height_0 - 2 * this._borderWidth;
    iradius = this._borderRadius * (iheight / size_0.height_0);
    $fillRoundRect($setFillColor_0(canvas, this._bgColor), this._borderWidth, this._borderWidth, iwidth, iheight, iradius);
  }
   else {
    $fillRoundRect($setFillColor_0(canvas, this._bgColor), 0, 0, size_0.width_0, size_0.height_0, this._radius);
  }
  layer = new ImageLayer($toTexture(canvas, ($clinit_Texture$Config() , DEFAULT)));
  return new Background$LayerInstance(this, size_0, layer);
}
;
_._bgColor = 0;
_._borderColor = 0;
_._borderRadius = 0;
_._borderWidth = 0;
_._radius = 0;
var Ltripleplay_ui_bgs_RoundRectBackground_2_classLit = createForClass('tripleplay.ui.bgs', 'RoundRectBackground', 109, Ltripleplay_ui_Background_2_classLit);
function $clinit_BorderLayout(){
  $clinit_BorderLayout = emptyMethod;
  CENTER_2 = ($clinit_BorderLayout$Position() , CENTER_3).stretched;
  NS = stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 43, 0, [NORTH, SOUTH]);
  WE = stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 43, 0, [WEST, EAST]);
  WCE = stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 43, 0, [WEST, CENTER_3, EAST]);
}

function $computeSize_0(this$static, elems, hintX, hintY){
  return $computeSize_1(new BorderLayout$Slots(this$static, elems), hintX, hintY);
}

function $layout_0(this$static, elems, left, top_0, width_0, height){
  var bounds, c, dim, halign, p, slots, valign;
  halign = resolveStyle(elems, ($clinit_Style() , HALIGN));
  valign = resolveStyle(elems, VALIGN);
  slots = new BorderLayout$Slots(this$static, elems);
  bounds = new Rectangle(left, top_0, width_0, height);
  $layoutNs(slots, ($clinit_BorderLayout$Position() , NORTH), halign, bounds);
  $layoutNs(slots, SOUTH, halign, bounds);
  $layoutWe(slots, WEST, valign, bounds);
  $layoutWe(slots, EAST, valign, bounds);
  p = CENTER_3;
  dim = $size_0(slots, p, bounds.width_0, bounds.height_0);
  if (!dim) {
    return;
  }
  c = $get_6(slots.elements, p)._constraint;
  dim = $adjust(c, dim, bounds);
  $setBounds_1(slots, p, $align(c, bounds.x_0, halign.offset(dim.width_0, bounds.width_0)), $align(c, bounds.y_0, valign.offset(dim.height_0, bounds.height_0)), dim);
}

function BorderLayout(){
  $clinit_BorderLayout();
  this.hgap = 0;
  this.vgap = 0;
}

defineClass(154, 545, {}, BorderLayout);
_.hgap = 0;
_.vgap = 0;
var CENTER_2, NS, WCE, WE;
var Ltripleplay_ui_layout_BorderLayout_2_classLit = createForClass('tripleplay.ui.layout', 'BorderLayout', 154, Ltripleplay_ui_Layout_2_classLit);
function $adjust(this$static, pref, boundary){
  var dim;
  dim = new Dimension_1(pref);
  if (this$static._stretch) {
    (this$static._pos.orient & 1) != 0 && (dim.width_0 = boundary.width_0);
    (this$static._pos.orient & 2) != 0 && (dim.height_0 = boundary.height_0);
  }
  dim.width_0 = $wnd.Math.min(dim.width_0, boundary.width_0);
  dim.height_0 = $wnd.Math.min(dim.height_0, boundary.height_0);
  return dim;
}

function $align(this$static, origin, offset){
  return this$static._stretch?origin:origin + offset;
}

function BorderLayout$Constraint(pos, stretch){
  this._pos = pos;
  this._stretch = stretch;
}

defineClass(214, 546, {}, BorderLayout$Constraint);
_._stretch = false;
var Ltripleplay_ui_layout_BorderLayout$Constraint_2_classLit = createForClass('tripleplay.ui.layout', 'BorderLayout/Constraint', 214, Ltripleplay_ui_Layout$Constraint_2_classLit);
function $clinit_BorderLayout$Position(){
  $clinit_BorderLayout$Position = emptyMethod;
  CENTER_3 = new BorderLayout$Position('CENTER', 0, 3);
  NORTH = new BorderLayout$Position('NORTH', 1, 1);
  SOUTH = new BorderLayout$Position('SOUTH', 2, 1);
  EAST = new BorderLayout$Position('EAST', 3, 2);
  WEST = new BorderLayout$Position('WEST', 4, 2);
}

function BorderLayout$Position(enum$name, enum$ordinal, orient){
  Enum.call(this, enum$name, enum$ordinal);
  this.orient = orient;
  this.unstretched = new BorderLayout$Constraint(this, false);
  this.stretched = new BorderLayout$Constraint(this, true);
}

function positionOf(c){
  $clinit_BorderLayout$Position();
  var p, p$array, p$index, p$max;
  for (p$array = stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 43, 0, [CENTER_3, NORTH, SOUTH, EAST, WEST]) , p$index = 0 , p$max = p$array.length; p$index < p$max; ++p$index) {
    p = p$array[p$index];
    if (p.unstretched == c || p.stretched == c) {
      return p;
    }
  }
  return null;
}

function values_31(){
  $clinit_BorderLayout$Position();
  return stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 43, 0, [CENTER_3, NORTH, SOUTH, EAST, WEST]);
}

defineClass(43, 6, {3:1, 7:1, 6:1, 43:1}, BorderLayout$Position);
_.orient = 0;
var CENTER_3, EAST, NORTH, SOUTH, WEST;
var Ltripleplay_ui_layout_BorderLayout$Position_2_classLit = createForEnum('tripleplay.ui.layout', 'BorderLayout/Position', 43, Ljava_lang_Enum_2_classLit, values_31);
function $computeSize_1(this$static, hintX, hintY){
  var csize, dim, e, ehintX, ehintY, nsSize, pos, pos$array, pos$array0, pos$index, pos$index0, pos$max, pos$max0, wce, weSize;
  wce = $count(this$static, ($clinit_BorderLayout() , WCE));
  nsSize = new Dimension;
  for (pos$array0 = NS , pos$index0 = 0 , pos$max0 = pos$array0.length; pos$index0 < pos$max0; ++pos$index0) {
    pos = pos$array0[pos$index0];
    dim = (e = $get_6(this$static.elements, pos) , !e?null:e.preferredSize(hintX, 0));
    if (!dim) {
      continue;
    }
    nsSize.height_0 += dim.height_0;
    nsSize.width_0 = $wnd.Math.max(nsSize.width_0, dim.width_0);
    wce > 0 && (nsSize.height_0 += this$static.this$01.vgap);
  }
  ehintY = $wnd.Math.max(0, hintY - nsSize.height_0);
  weSize = new Dimension;
  for (pos$array = WE , pos$index = 0 , pos$max = pos$array.length; pos$index < pos$max; ++pos$index) {
    pos = pos$array[pos$index];
    dim = (e = $get_6(this$static.elements, pos) , !e?null:e.preferredSize(0, ehintY));
    if (!dim) {
      continue;
    }
    weSize.width_0 += dim.width_0;
    weSize.height_0 = $wnd.Math.max(weSize.height_0, dim.height_0);
  }
  weSize.width_0 += (wce - 1 > 0?wce - 1:0) * this$static.this$01.hgap;
  ehintX = $wnd.Math.max(0, hintX - weSize.width_0);
  csize = $size_0(this$static, ($clinit_BorderLayout$Position() , CENTER_3), ehintX, ehintY);
  if (csize) {
    weSize.width_0 += csize.width_0;
    nsSize.height_0 += csize.height_0;
  }
  return new Dimension_0($wnd.Math.max(weSize.width_0, nsSize.width_0), $wnd.Math.max(weSize.height_0, nsSize.height_0));
}

function $count(this$static, ps){
  var count, p, p$index, p$max;
  count = 0;
  for (p$index = 0 , p$max = ps.length; p$index < p$max; ++p$index) {
    p = ps[p$index];
    $containsKey(this$static.elements, p) && ++count;
  }
  return count;
}

function $layoutNs(this$static, p, halign, bounds){
  var c, dim, y_0;
  dim = $size_0(this$static, p, bounds.width_0, 0);
  if (!dim) {
    return;
  }
  c = $get_6(this$static.elements, p)._constraint;
  dim = $adjust(c, dim, bounds);
  y_0 = bounds.y_0;
  p == ($clinit_BorderLayout$Position() , NORTH)?(bounds.y_0 += dim.height_0 + this$static.this$01.vgap):(y_0 += bounds.height_0 - dim.height_0);
  bounds.height_0 -= dim.height_0 + this$static.this$01.vgap;
  $setBounds_1(this$static, p, $align(c, bounds.x_0, halign.offset(dim.width_0, bounds.width_0)), y_0, dim);
}

function $layoutWe(this$static, p, valign, bounds){
  var c, dim, x_0;
  dim = $size_0(this$static, p, 0, bounds.height_0);
  if (!dim) {
    return;
  }
  c = $get_6(this$static.elements, p)._constraint;
  dim = $adjust(c, dim, bounds);
  x_0 = bounds.x_0;
  p == ($clinit_BorderLayout$Position() , WEST)?(bounds.x_0 += dim.width_0 + this$static.this$01.hgap):(x_0 += bounds.width_0 - dim.width_0);
  bounds.width_0 -= dim.width_0 + this$static.this$01.hgap;
  $setBounds_1(this$static, p, x_0, $align(c, bounds.y_0, valign.offset(dim.height_0, bounds.height_0)), dim);
}

function $setBounds_1(this$static, p, x_0, y_0, dim){
  $setBounds_0($get_6(this$static.elements, p), x_0, y_0, dim.width_0, dim.height_0);
}

function $size_0(this$static, p, hintX, hintY){
  var e;
  e = $get_6(this$static.elements, p);
  return !e?null:e.preferredSize(hintX, hintY);
}

function BorderLayout$Slots(this$0, elems){
  var elem, elem$iterator, existing, p;
  this.this$01 = this$0;
  this.elements = new HashMap;
  for (elem$iterator = new Collections$UnmodifiableCollectionIterator(unmodifiableList(elems._children).coll.iterator()); elem$iterator.it.hasNext_0();) {
    elem = elem$iterator.it.next_1();
    if (!$isSet(elem, ($clinit_Element$Flag() , VISIBLE_2)))
      continue;
    p = positionOf(elem._constraint);
    if (!p) {
      throw toJs(new IllegalStateException_0('Element with a non-BorderLayout constraint: ' + elem));
    }
    existing = $put_3(this.elements, p, elem);
    if (existing) {
      throw toJs(new IllegalStateException_0('Multiple elements: ' + elem + ' and ' + existing + ' with the same BorderLayout constraint: ' + p));
    }
  }
}

defineClass(215, 1, {}, BorderLayout$Slots);
var Ltripleplay_ui_layout_BorderLayout$Slots_2_classLit = createForClass('tripleplay.ui.layout', 'BorderLayout/Slots', 215, Ljava_lang_Object_2_classLit);
function $clinit_Insets(){
  $clinit_Insets = emptyMethod;
  ZERO = new Insets(0, 0, 0, 0);
}

function Insets(top_0, right, bottom, left){
  $clinit_Insets();
  this._top = top_0;
  this._right = right;
  this._bottom = bottom;
  this._left = left;
}

defineClass(159, 1, {}, Insets);
_.toString_0 = function toString_75(){
  return this._top + ',' + this._right + ',' + this._bottom + ',' + this._left;
}
;
_._bottom = 0;
_._left = 0;
_._right = 0;
_._top = 0;
var ZERO;
var Ltripleplay_ui_util_Insets_2_classLit = createForClass('tripleplay.ui.util', 'Insets', 159, Ljava_lang_Object_2_classLit);
function $clinit_EffectRenderer$Gradient$Type(){
  $clinit_EffectRenderer$Gradient$Type = emptyMethod;
  BOTTOM_0 = new EffectRenderer$Gradient$Type('BOTTOM', 0);
  TOP_0 = new EffectRenderer$Gradient$Type('TOP', 1);
  CENTER_4 = new EffectRenderer$Gradient$Type('CENTER', 2);
}

function EffectRenderer$Gradient$Type(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_32(){
  $clinit_EffectRenderer$Gradient$Type();
  return stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_util_EffectRenderer$Gradient$Type_2_classLit, 1), $intern_1, 108, 0, [BOTTOM_0, TOP_0, CENTER_4]);
}

defineClass(108, 6, {3:1, 7:1, 6:1, 108:1}, EffectRenderer$Gradient$Type);
var BOTTOM_0, CENTER_4, TOP_0;
var Ltripleplay_util_EffectRenderer$Gradient$Type_2_classLit = createForEnum('tripleplay.util', 'EffectRenderer/Gradient/Type', 108, Ljava_lang_Enum_2_classLit, values_32);
function $clinit_Interpolator(){
  $clinit_Interpolator = emptyMethod;
  LINEAR = new Interpolator$2;
  EASE_INOUT = new Interpolator$5;
  $clinit_Interpolator();
}

function $apply_3(this$static, start_0, range, dt, t){
  var pos;
  pos = t == 0?1:this$static.apply_1(dt / t);
  return start_0 + range * pos;
}

function $applyClamp(this$static, start_0, range, dt){
  var pos;
  return pos = $apply_4((dt < 0?0:dt > 500?500:dt) / 500) , start_0 + range * pos;
}

defineClass(547, 1, {});
var EASE_INOUT, LINEAR;
var Ltripleplay_util_Interpolator_2_classLit = createForClass('tripleplay.util', 'Interpolator', 547, Ljava_lang_Object_2_classLit);
function Interpolator$2(){
}

defineClass(476, 547, {}, Interpolator$2);
_.apply_1 = function apply_5(v){
  return v;
}
;
_.toString_0 = function toString_76(){
  return 'LINEAR';
}
;
var Ltripleplay_util_Interpolator$2_2_classLit = createForClass('tripleplay.util', 'Interpolator/2', 476, Ltripleplay_util_Interpolator_2_classLit);
function $apply_4(v){
  var ov, v2;
  v2 = 2 * v;
  if (v2 < 1) {
    return v2 * v2 * v2 / 2;
  }
  ov = v2 - 2;
  return (2 + ov * ov * ov) / 2;
}

function Interpolator$5(){
}

defineClass(477, 547, {}, Interpolator$5);
_.apply_1 = function apply_6(v){
  return $apply_4(v);
}
;
_.toString_0 = function toString_77(){
  return 'EASE_INOUT';
}
;
var Ltripleplay_util_Interpolator$5_2_classLit = createForClass('tripleplay.util', 'Interpolator/5', 477, Ltripleplay_util_Interpolator_2_classLit);
function Layers$2(val$width, val$height, val$color){
  this.val$width1 = val$width;
  this.val$height2 = val$height;
  this.val$color3 = val$color;
  Layer.call(this);
}

defineClass(158, 20, $intern_38, Layers$2);
_.height_1 = function height_4(){
  return this.val$height2;
}
;
_.paintImpl = function paintImpl_5(surf){
  $fillRect_0($setFillColor(surf, this.val$color3), 0, 0, this.val$width1, this.val$height2);
}
;
_.width_1 = function width_5(){
  return this.val$width1;
}
;
_.val$color3 = 0;
_.val$height2 = 0;
_.val$width1 = 0;
var Ltripleplay_util_Layers$2_2_classLit = createForClass('tripleplay.util', 'Layers/2', 158, Lplayn_scene_Layer_2_classLit);
function $clinit_Logger(){
  $clinit_Logger = emptyMethod;
  levels = new Logger$Levels;
}

function $log_0(args){
  var error, sb;
  sb = $append_8(new StringBuilder, 'Screen choked');
  if (args.length > 1) {
    sb.string += ' [';
    format_2(sb, args);
    sb.string += ']';
  }
  error = args.length % 2 == 1?args[args.length - 1]:null;
  $clinit_System();
  !!error && error.printStackTrace(out_0);
}

function $warning(this$static, args){
  $shouldLog(levels, ($clinit_Logger$Level() , WARNING), this$static._ident) && $log_0(args);
}

function Logger(){
  $clinit_Logger();
  this._ident = 'tpgame';
}

function format_2(into, args){
  var ii, ll;
  for (ii = 0 , ll = args.length / 2 | 0; ii < ll; ii++) {
    ii > 0 && (into.string += ', ' , into);
    $append_7($append_8((into.string += '' + args[2 * ii] , into), '='), args[2 * ii + 1]);
  }
  return into;
}

defineClass(473, 1, {}, Logger);
var levels;
var Ltripleplay_util_Logger_2_classLit = createForClass('tripleplay.util', 'Logger', 473, Ljava_lang_Object_2_classLit);
function $clinit_Logger$Level(){
  $clinit_Logger$Level = emptyMethod;
  DEBUG_0 = new Logger$Level('DEBUG', 0);
  INFO_1 = new Logger$Level('INFO', 1);
  WARNING = new Logger$Level('WARNING', 2);
  ERROR_0 = new Logger$Level('ERROR', 3);
  OFF = new Logger$Level('OFF', 4);
}

function Logger$Level(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_33(){
  $clinit_Logger$Level();
  return stampJavaTypeInfo(getClassLiteralForArray(Ltripleplay_util_Logger$Level_2_classLit, 1), $intern_1, 74, 0, [DEBUG_0, INFO_1, WARNING, ERROR_0, OFF]);
}

defineClass(74, 6, {3:1, 7:1, 6:1, 74:1}, Logger$Level);
var DEBUG_0, ERROR_0, INFO_1, OFF, WARNING;
var Ltripleplay_util_Logger$Level_2_classLit = createForEnum('tripleplay.util', 'Logger/Level', 74, Ljava_lang_Enum_2_classLit, values_33);
function $shouldLog(this$static, level, ident){
  var ilevel;
  ilevel = $getStringValue(this$static._levels, ident);
  if (ilevel)
    return level.ordinal >= ilevel.ordinal;
  return level.ordinal >= this$static._defaultLevel.ordinal;
}

function Logger$Levels(){
  this._defaultLevel = ($clinit_Logger$Level() , DEBUG_0);
  this._levels = new HashMap;
}

defineClass(474, 1, {}, Logger$Levels);
var Ltripleplay_util_Logger$Levels_2_classLit = createForClass('tripleplay.util', 'Logger/Levels', 474, Ljava_lang_Object_2_classLit);
function $clear_3(this$static){
  var toBeCleared;
  if (this$static._target) {
    toBeCleared = this$static._target;
    this$static._target = null;
    toBeCleared.close_0();
  }
}

function $set_8(this$static, target){
  $clear_3(this$static);
  this$static._target = target;
  return target;
}

defineClass(555, 1, {});
var Ltripleplay_util_Ref_2_classLit = createForClass('tripleplay.util', 'Ref', 555, Ljava_lang_Object_2_classLit);
function Ref$1(){
}

defineClass(488, 555, {}, Ref$1);
var Ltripleplay_util_Ref$1_2_classLit = createForClass('tripleplay.util', 'Ref/1', 488, Ltripleplay_util_Ref_2_classLit);
var C_classLit = createForPrimitive('char', 'C');
var D_classLit = createForPrimitive('double', 'D');
var F_classLit = createForPrimitive('float', 'F');
var I_classLit = createForPrimitive('int', 'I');
var S_classLit = createForPrimitive('short', 'S');
var Ltripleplay_ui_Widget_2_classLit = createForClass('tripleplay.ui', 'Widget', null, Ltripleplay_ui_Element_2_classLit);
var Ltripleplay_ui_TextWidget_2_classLit = createForClass('tripleplay.ui', 'TextWidget', null, Ltripleplay_ui_Widget_2_classLit);
var Ltripleplay_ui_AbstractTextButton_2_classLit = createForClass('tripleplay.ui', 'AbstractTextButton', null, Ltripleplay_ui_TextWidget_2_classLit);
var Ltripleplay_ui_Button_2_classLit = createForClass('tripleplay.ui', 'Button', null, Ltripleplay_ui_AbstractTextButton_2_classLit);
var Ltripleplay_ui_ToggleButton_2_classLit = createForClass('tripleplay.ui', 'ToggleButton', null, Ltripleplay_ui_AbstractTextButton_2_classLit);
var Ltripleplay_ui_CheckBox_2_classLit = createForClass('tripleplay.ui', 'CheckBox', null, Ltripleplay_ui_TextWidget_2_classLit);
var Ltripleplay_ui_Field_2_classLit = createForClass('tripleplay.ui', 'Field', null, Ltripleplay_ui_TextWidget_2_classLit);
var Ltripleplay_ui_Menu_2_classLit = createForClass('tripleplay.ui', 'Menu', null, Ltripleplay_ui_Elements_2_classLit);
var Ltripleplay_ui_MenuItem_2_classLit = createForClass('tripleplay.ui', 'MenuItem', null, Ltripleplay_ui_TextWidget_2_classLit);
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=rook-0.js

