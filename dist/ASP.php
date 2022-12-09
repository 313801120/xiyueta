<?PHP
/*
功能：ASP转PHP时，需要用到的函数库，详细查看网址：https://www.xiyueta.com/api/xiyuetaasp/tophp/
作者：xiyueta
网址：www.xiyueta.com
QQ：313801120
QQ交流群：35915100
*/

//header("Content-type: text/html; charset=utf-8");
//\n换行 \r换行  \t相当于按Tab键
//调用函数前面加 @ 符为出错不提示
error_reporting(E_ALL | E_STRICT);			// error_reporting(E_STRICT);		//为不显示错误
header("Content-Type: text/html; charset=utf-8");
session_start();		//开启Session20151119 

define('programe_string_charset', 'gb2312');    //当前编码


//$time = strtotime("2010-09-08 07:06:05");
//echo date("Y-m-d H:i:s",$time);
function cDate($time){
	return date("Y-m-d H:i:s",strtotime($time));
}

function aspchr($n){
	return chr($n);
}

//跳转
function RR($url){
	header('location:'.$url);
	return false;
} 

 
//vbcrlf
function vbCrlf(){
	return chr(13) . chr(10);
}
//vbtab 用不上，但写上
function vbTab(){
	return "\t";
}

//查找字符所在位置
function inStr($content,$search){	 
	if(is_array($content)){ 
		$content=arrayToString($content,"");
	}	
	if( $search!=""){
		
		if(strstr($content,$search)!=''){
			return mb_strpos($content,$search,0,programe_string_charset)+1;
		}else{
			return 0;
		}
	}else{
		return 0;
	}
}
//查找字符所在位置
function inStrRev($content,$search){	 
	if(is_array($content)){ 
		$content=arrayToString($content,"");
	}	
	if( $search!=""){
		
		if(strstr($content,$search)!=''){
			return mb_strrpos($content,$search,0,programe_string_charset)+1;
		}else{
			return 0;
		}
	}else{
		return 0;
	}
}
//字符长度
function len($content){
	//return strlen($content);				//采用这种   不采用这种，对汉字处理不了20160413
	return mb_strlen($content,programe_string_charset);	//用这会
}
//截取字符
function mid($content,$nStart,$nLength=-1){
	$nStart-=1;
 	if($nLength==-1){
		$nLength=Len($content);
	}
	return mb_substr($content,$nStart,$nLength,programe_string_charset);
} 
//给ASP用 替换内容
function replace($c,$findStr,$replaceStr){
	return str_replace($findStr, $replaceStr, $c);
}
function aspReplace($c,$findStr,$replaceStr){
	return replace($c,$findStr,$replaceStr);
}
//给ASP用  使用echo(rnd());
function rnd(){
	return ".".rand(1000000,9999999);
}
//转成小写
function lCase($content){
	return strtolower($content);
}
//转成大写
function uCase($content){
	return strtoupper($content);
}
//获得编码
function asc($content){
	return ord($content);
} 
//获得编码
function ascW($content){
	return ord($content);
}
//Chr  系统有了
//left从左边开始截取
function left($str,$nlength){
	return mb_substr($str, 0 ,$nlength,programe_string_charset);
}
//right从右边开始截取
function right($str,$nlength){
	return mb_substr($str, $nlength*-1,999999,programe_string_charset);			//用  mb_substr  比用 substr  更适用于asp转换php用法   20160511  用999999不能用-1，那样就少截取一个字符
}
//分割
function aspSplit($contnet,$splStr){
	return explode($splStr,$contnet);
}
//定义数组  与asp版一致
function aspArray($numb){
	$numb++;
	$dataArray=array();
	for($i=0;$i<$numb;$i++){
		$dataArray[$i]="";	
	}	
	return $dataArray;
}
//获

//获得数组开始长度
function lBound($content){
	return 0;
}
//获得数组长度
function uBound($content){
	return count($content)-1;
}
//chr   php有这个函数
 
//返回指定数值的整数部分
function fix($n){
	$n=cStr($n);
	if(inStr($n,".")>0){
		$n=mid($n,1,inStr($n,".")-1);
	}
	return floor($n);
}
//返回指定变量子类型的信息
function typeName($str){
	$strType=gettype($str);
	if($strType=="array"){
		return "Variant()";
	}else{
		//return $strType;
		return uCase(mid($strType,1,1)).mid($strType,2);
	}
}
//返回指定数字的整数部分
function int($str){
	//$str1=intval($str); 	
	$s2=left($str,2);
	if($s2=="&H" || $s2=="&h"){
		$s=mid($str,3);
		return hexdec('0x'.$s);
	}


	return intval($str);
}
//将表达式转化为Integer数值子类型
function cInt($string){
	//$string1=intval($string); 
	$n=intval($string);
	if(strstr($string,".")!=''){
		$n++;
	}
	return round($string);
}
//将表达式转化为Long数值子类型
function cLng($content){
	return round($content);
}
//转字符
function cStr($str){
	return strval($str);
}

//清除左边
function aspLTrim($content){
    $i="";$s="";
	for( $i=1 ; $i<= len($content); $i++){
		$s=mid($content,$i,1);
		if( $s<>" " ){
			$content=mid($content,$i,-1);
			 break;
		 }
	}
	return @$content;
}
//清除右边
function aspRTrim($content){
    $i="";$s="";
	for( $i=len($content) ; $i>=1; $i--){
		$s=mid($content,$i,1);
		if( $s<>" " ){
			$content=mid($content,1,$i);
			 break;
		 }
	}
	return @$content;
}
//ASP清除两边空格 改进于20160410
function aspTrim($content){ 
	return aspRTrim(aspLTrim($content));
}
//PHP版清除两边空格
function phpTrim($content){
	return trim($content);
}
//PHP版清除左边空格
function phpLTrim($content){
	return ltrim($content);
}
//PHP清除右边空格
function phpRTrim($content){
	return rtrim($content);
}


//获得日期
function aspDate() {
	$s=date('Y/m/d');
	$s=replace($s,"/0","/");
	return $s;	
}
//时间 date('Y/m/d H:i:s')
function aspTime(){
	$s=date('H:i:s'); 
	$s=replace($s," 0"," ");		//小时前面不要0 
	//$s=replace($s,":0",":");
	return $s;
}
//获得时期+时间
function now(){
	return aspDate().' '.aspTime();
}
function timer(){
	return now();
}
//格式化成价格如 108.00 (20150806使用ASP转PHP制作)
function formatNumber($content,$n){
	$dianLeft="";$dianRight="";$i="";$c="";$s="";
	$content=cstr($content);
	if( inStr($content,".")> 0 ){
		$dianLeft = mid($content,1,inStr($content,".")-1);
		$dianRight = mid($content,inStr($content,".")+1,-1);
	}else{
		$dianLeft=$content;
	 }
	$dianRight=$dianRight . "0000000000";
	for( $i=1 ; $i<= $n; $i++){
		$s=mid($dianRight,$i,1);
		$c=$c . $s;
	}
	if( $n>0 ){
		$dianLeft = $dianLeft . ".";
	 }
	$c = $dianLeft . $c;
 return $c;
} 
//获得年
function year($timeStr){
	return (int)getYMDHMS($timeStr,0);
}
//获得月
function month($timeStr){
	return (int)getYMDHMS($timeStr,1);
}
//获得日
function day($timeStr){
	return (int)getYMDHMS($timeStr,2);
}
//获得时
function hour($timeStr){
	return (int)getYMDHMS($timeStr,3);
}
//获得分
function minute($timeStr){
	return (int)getYMDHMS($timeStr,4);
}
//获得秒
function second($timeStr){
	return (int)getYMDHMS($timeStr,5);
}
//返回两个日期之间的时间间隔   q 季度 m 月 y 一年的日数 d 日 w 一周的日数 ww 周 h 小时 n 分钟 s 秒 
function dateDiff($part, $begin, $end){
	$diff = strtotime($end) - strtotime($begin);
	switch($part){
		case "y": $retval = bcdiv($diff, (60 * 60 * 24 * 365)); break;
		case "m": $retval = bcdiv($diff, (60 * 60 * 24 * 30)); break;
		case "w": $retval = bcdiv($diff, (60 * 60 * 24 * 7)); break;
		case "d": $retval = bcdiv($diff, (60 * 60 * 24)); break;
		case "h": $retval = bcdiv($diff, (60 * 60)); break;
		case "n": $retval = bcdiv($diff, 60); break;
		default: $retval = $diff; break;
	}
	return $retval;
}
//表示要添加的时间间隔  q 季度 m 月 y 一年的日数 d 日 w 一周的日数 ww 周 h 小时 n 分钟 s 秒 
function dateAdd($part, $n, $date){
	switch($part){
	case "y": $val = date("Y-m-d H:i:s", strtotime($date ." +$n year")); break;
	case "m": $val = date("Y-m-d H:i:s", strtotime($date ." +$n month")); break;
	case "w": $val = date("Y-m-d H:i:s", strtotime($date ." +$n week")); break;
	case "d": $val = date("Y-m-d H:i:s", strtotime($date ." +$n day")); break;
	case "h": $val = date("Y-m-d H:i:s", strtotime($date ." +$n hour")); break;
	case "n": $val = date("Y-m-d H:i:s", strtotime($date ." +$n minute")); break;
	default: $val = date("Y-m-d H:i:s", strtotime($date ." +$n second")); break;
	}
	return $val;
}
/// 返回给定日期的指定部分
function datePart($interval, $sDate){
	if($interval=="yyyy"){
		return year($sDate);
	}else if($interval=="m"){  
		return month($sDate);
	}else if($interval=="d"){  
		return day($sDate);
	}else if($interval=="h"){  
		return day($sDate);
	}else if($interval=="n"){  
		return hour($sDate);
	}else if($interval=="s"){  
		return second($sDate);
	}else{
		return -1;
	}
}

//功能:ASP里的IIF 如：IIf(1 = 2, "a", "b") 
function IIF($bExp, $sVal1, $sVal2){
	//if($bExp==true){return $sVal1;}else{return $sVal2;}
	return $bExp?$sVal1:$sVal2;		//二元运算符
}


//检测是否为对象
function isObject($obj){
	return is_object($obj);
}

//检测是否为数组
function isArray($array){
	return is_array($array);
}
//判断是否为空
function isNull($content){
	return is_null($content);
}
//是否为日期
function isDate($str){
	$str=str_replace('/', '-', $str);
	$strArr = explode("-",$str);
	if(inStr($str," ")>0){
		$format="Y-m-d H:i:s";
	}else{
		$format="Y-m-d";
	}	
	if(empty($strArr)){
		return 0;
	}
	foreach($strArr as $val){
		if(strlen($val)<2){
			$val="0".$val;
		}
		$newArr[]=$val;
	}
	$str = implode("-",$newArr);
    $unixTime=strtotime($str);
    $checkDate= date($format,$unixTime);
    if($checkDate==$str){
        return 1;
    }else{
        return 0;
	}
}



//GET方式获得值
function queryString($name){ 
	return @$_GET[$name];
}
//POST方式获得值
function form($name){
	return @$_POST[$name];
}
//Cookies方式获得值
function cookies($name){
	return @$_COOKIE[$name];
}
//GetPostCookies任意
function request($name){
	return @$_REQUEST[$name];
}

//输出缓冲
function phpFlush(){
    ob_flush();
    flush(); 
	//ob_end_flush();
}



//PHP正则表达式
function test_regexp($content,$search){
	$newSearch=replace($search,'.', '\.');
	if(preg_match('/'. $newSearch .'/', $content)){ 
	
	}
} 


//************************************************************************ ASP转PHP生成
 

//获得年月日时分钞
function getYMDHMS( $timeStr,$sType){
	$splstr="";
	$timeStr=replace(replace(replace(replace(replace(replace($timeStr,"年","-"),"月","-"),"日","-"),"时","-"),"分","-"),"秒","-");
	$timeStr=replace(replace(replace(replace(replace($timeStr," ","-"),":","-"),"/","-"),"--","-"),"--","-") . "------";
	$splstr=aspSplit($timeStr,"-");
	//aspecho($sType, $timeStr);
	$nYear = $splstr[0];
	$nMonth = $splstr[1];
	$nDay = $splstr[2];
	$nHour = $splstr[3];
	$nMinute = $splstr[4];
	$nSecond = $splstr[5];
	if( len($nYear)==1 ){ $nYear="0" . $nYear;}
	if( len($nMonth)==1 ){ $nMonth="0" . $nMonth;}
	if( len($nDay)==1 ){ $nDay="0" . $nDay;}
	if( len($nHour)==1 ){ $nHour="0" . $nHour;}
	if( len($nMinute)==1 ){ $nMinute="0" . $nMinute;}
	if( len($nSecond)==1 ){ $nSecond="0" . $nSecond ;}

	if( $nHour=="" ){ $nHour="00";}
	if( $nMinute=="" ){ $nMinute="00";}
	if( $nSecond=="" ){ $nSecond="00";}

	$sType=CStr($sType);
	if( $sType=="年" || $sType=="0" ){
		$getYMDHMS=$nYear;
	}else if( $sType=="月" || $sType=="1" ){
		$getYMDHMS=$nMonth;
	}else if( $sType=="日" || $sType=="2" ){
		$getYMDHMS=$nDay;
	}else if( $sType=="时" || $sType=="3" ){
		$getYMDHMS=$nHour;
	}else if( $sType=="分" || $sType=="4" ){
		$getYMDHMS=$nMinute;
	}else if( $sType=="秒" || $sType=="5" ){
		$getYMDHMS=$nSecond;
	 }
 return @$getYMDHMS;} 

//获得系统参数20160224
function serverVariables($sName){
	$sName=strtoupper($sName);	
	if($sName=='SERVER_NAME'){
		$sName='HTTP_HOST';
	}
	return @$_SERVER[$sName];
}


//执行SQL语句
function connExecute($sql){ 
	//打开数据库
    $conn=OpenConn();
	$conn->query($sql);
	/*
	$User = M(); 
	$User->execute($sql);
	*/
	return array("1","22");
}

//获得POST字段名称列表 20160226
function getFormFieldName(){
	$c='';
	foreach($_POST as $key =>$val){
		if($c!=''){
			$c.='|';
		}
		$c.=$key;
	} 
	return $c;
}

//判断传值是否相等
function  checkFunValue($Action,$FunName){
	$checkFunValue = ( substr($Action, 0 ,strlen($FunName)) == $FunName );
 return @$checkFunValue;}
//ASP版md5
function aspMD5($str,$sType){
	return md5($str);
}
//我的md5加密
function myMD5($str){
	return md5(md5($str));
}

//asp里用到，php里不需要处理
function ADSqlRf($inputName){
	$s=rf($inputName);
	//echo(mysql_escape_string("'-"));
	return replace(replace(replace($s,"\\","\\\\"),"'","\'"),'"','\"');				//更新于20160118
}

//asp里用到，php里不需要处理
function ADSql($s){
	return replace(replace(replace($s,"\\","\\\\"),"'","\'"),'"','\"');				//更新于20160118
}
//php里插入更新时对\'处理
function phpADSql($s){
	return replace(replace(replace($s,"\\","\\\\"),"'","\'"),'"','\"');				//更新于20160118
}

//转成utf-8内容 （20151201）
function toUTFChar($data){
  if( !empty($data) ){    
    $fileType = mb_detect_encoding($data , array('UTF-8','GBK','LATIN1','BIG5')) ;   
    if( $fileType != 'UTF-8'){   
      $data = mb_convert_encoding($data ,'utf-8' , $fileType);   
    }   
  }   
  return $data;    
}
//转gb2312内容(20151203)
function toGB2312Char($data){
    if( !empty($data) ){
        $fileType = mb_detect_encoding($data , array('UTF-8','GBK','LATIN1','BIG5'));
        if( $fileType != 'GBK'){
            $data = mb_convert_encoding($data ,'GBK' , $fileType);
            //删除BOM留下的乱码?号
            if(substr($data, 0, 1)=="?"){
                $data=substr($data,1);
            }
        }
    }
    return $data;
} 
//自定义var_dump
function p($str){
	echo('<pre>');
	var_dump($str);
	echo('</pre>');
}

 
//获得当前时期还可以计算
function getHandleDate($numb){
	if($numb<>''){ 
		return date("Y-m-d",strtotime($numb.' day')); 
	}else{
		return date("Y-m-d" );
	}
}  
//获得POST字段名称列表 20160226
function getFormFieldList(){
    $s='';$c='';$splstr='';
	foreach( @$_POST as $key=>$s){ 
        if( $c<>'' ){ $c=$c . '|';}
        $c=$c . $key;
    }
    return $c;
}

//删除Html
function delHtml($str){
	return strip_tags($str);
} 

//获得两数之间随机数
function phpRand($nMinimum,$nMaximum){
	return rand($nMinimum,$nMaximum);
}
//获得两数之间随机数
function phpRnd($nMinimum,$nMaximum){
	return rand($nMinimum,$nMaximum);
}


//URL跳转
function aspRedirect($url){
    header("Location: " . $url); 
    exit;
}





/**
* 方法:isdate()   引用别人加自我改进 20160425
*/
/*
//判断时间
function isDate($timeStr){
	if(inStr($timeStr,"-")>0 || inStr($timeStr,"\/")>0 || inStr($timeStr," ")>0){
		return true;
	}else{
		return false;
	}
}
*/  
//开始随机数，在php无效，转php时用到,留着，不处理20221208
// function randomize(){

// }

function XY_AutoAddHandle($Action){
	return "";
}
function DisplayOnlineEditDialog($a,$Action){
	return "";
}
//css.asp文件里用到的正则表达式处理20160712
function RegExp_Replace($s,$s2,$s3){
	return "";
}
function phpStrLen_temp($content){
	return Len($content);
}



function escape($string) {
    $n = $bn = $tn = 0;
    $output = '';
    $special = "-_.+@/*0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    while($n < strlen($string)) {
        $ascii = ord($string[$n]);
        if($ascii == 9 || $ascii == 10 || (32 <= $ascii && $ascii <= 126)) {
            $tn = 1;$n++;
        } elseif(194 <= $ascii && $ascii <= 223) {
            $tn = 2;$n += 2;
        } elseif(224 <= $ascii && $ascii <= 239) {
            $tn = 3;$n += 3;
        } elseif(240 <= $ascii && $ascii <= 247) {
            $tn = 4;$n += 4;
        } elseif(248 <= $ascii && $ascii <= 251) {
            $tn = 5;$n += 5;
        } elseif($ascii == 252 || $ascii == 253) {
            $tn = 6;$n += 6;
        } else {
            $n++;
        }
        $singleStr = substr($string,$bn,$tn);
        $charVal = bin2hex(iconv('utf-8', 'ucs-2', $singleStr));
        if(base_convert($charVal, 16, 10) > 0xff) {
           if (!preg_match("/win/i", PHP_OS))
            $charVal = substr($charVal, 2, 2).substr($charVal, 0, 2);
          $output .= '%u' . $charVal;
        }
        else {
            if(false !== strpos($special, $singleStr))
               $output .= $singleStr;
            else
               $output .="%" . dechex(ord($string[$bn]));
        }
     $bn = $n;
    }
    return $output;
}


//url解密  20160506    待测试
function unescape($str){ 
    $ret = ''; 
    $len = strlen($str); 
    for ($i = 0; $i < $len; $i ++) 
    { 
        if ($str[$i] == '%' && $str[$i + 1] == 'u') 
        { 
            $val = hexdec(substr($str, $i + 2, 4)); 
            if ($val < 0x7f) 
                $ret .= chr($val); 
            else  
                if ($val < 0x800) 
                    $ret .= chr(0xc0 | ($val >> 6)) . 
                     chr(0x80 | ($val & 0x3f)); 
                else 
                    $ret .= chr(0xe0 | ($val >> 12)) . 
                     chr(0x80 | (($val >> 6) & 0x3f)) . 
                     chr(0x80 | ($val & 0x3f)); 
            $i += 5; 
        } else  
            if ($str[$i] == '%') 
            { 
                $ret .= urldecode(substr($str, $i, 3)); 
                $i += 2; 
            } else 
                $ret .= $str[$i]; 
    } 
    return $ret; 
}
?>