'use strict';

let res_den = "列車";
$('[name=type_1]').change(function() {
  if($('[name=type_1][value=0]').prop('checked')){
    res_den = "列車"
  }else if($('[name=type_1][value=1]').prop('checked')){
    res_den = "電車";
  }
})

// 接近:放送順序デフォルト定義
let jun = [
  ["接近メロディ\n空白0.5秒"],
  ["まもなく"],
  [""],
  [""], //当駅始発 or no
  [""], //路線愛称
  [""], //路線
  [""], //直通他
  [""], //種別
  [""], //行先
  [""],
  ["行きが"],
  ["まいります"],
  ["危ないですから、黄色い点字ブロックまで、お下がりください\n空白0.25秒"],
  [""], //この列車は
  [""], //ドア数
  [""], //両数
  [""],
  [""], //グリーン
  [""], //この列車の
  [""], //　前後ろ
  [""], //両数
  [""], // は
  [""], //切り離し駅
  [""], //止まりとなります or 増結をいたします
  [""]
]
let jun_yuru = [
  ["接近メロディ\n空白0.5秒"],
  ["まもなく"],
  [""],
  [], //種別
  [], //列車が
  ["まいります"], //まいります
  ["危ないですから、黄色い点字ブロックまで、お下がりください\n空白0.25秒"],
  [""]
]
// 折り返し用接近
let arriv_back = [
  ["接近メロディ\n空白0.5秒"],
  ["まもなく"],
  [""],
  ["当駅止まりの"],
  [""],
  ["危ないですから、黄色い点字ブロックまで、お下がりください\n空白0.25秒"],
  [""],
  [""], //ドア数
  [""], //両数
  [""],
  [""], //グリーン
  ["空白0.5秒\n折り返し"],
  [""],
  [""], //路線愛称
  [""], //路線
  [""], //直通他
  [""], //種別
  [""], //行先
  [""], //行先2
  [""],
  ["行きと"],
  ["なります"],
  [""],
  [""]
]
// 戸閉用
let close_atos = [
  ["3番線"], //番線
  [""], //路線愛称
  [""], //路線
  [""], //直通他
  [""], //種別
  [""], //行先
  [""], //行先2
  [""], // 方面
  [""], //行きが
  [""], //発車いたします
  [""],
  ["ドアが閉まります"],
  ["ご注意ください"]
]
// 予告:順序デフォルト定義
let info = [
  ["本日も、ご利用いただき、ありがとうございます"],
  ["今度の"],
  [""],
  [""], // 停車中の
  [""],
  [""], //時刻
  [""], //路線愛称
  [""], //路線
  [""], //直通他
  [""], //種別
  [""], //行先
  [""],
  [""], //方面
  ["行きです"],
  [""], //この列車は
  [""], //ドア数
  [""], //両数
  [""],
  [""], // green
  [""], //この列車の
  [""], //　前後ろ
  [""], //両数
  [""], // は
  [""], //切り離し駅
  [""], //止まりとなります or 増結をいたします
  [""]

]

// 列車データ格納
let atos_sentence = [
  [""], //番線
  [""],
  [""], //路線愛称
  [""], //路線
  [""], //直通他
  [""], //種別
  ["池袋"], //行先
  [""], //行先2
  [""], //ドア
  [""], //両数
  [""], // グリーン
  [""], //この列車の
  [""], //　前後ろ
  [""], //両数
  [""], // は
  [""], //切り離し駅
  [""], //止まりとなります or 増結をいたします
  [""], //手動入力
]

// ATOSモード定義, 予告:1, 接近;2, 発車:3
let atos_mode = 0;

// 番線選択
let bn_num = 0;
$("#bansen").change(function(){

  if($("#bansen").val() != 80){
    bn_num = $("#bansen").val();
    atos_sentence[0] = bansen_num[bn_num][1];
  }else{
    atos_sentence[0] = "";
  }
});

// 時刻
let t_hour_ten = "";
let t_hour = "0時\n";
let t_min_ten = "";
let t_min = "ちょうど\n";
// 時間
$("#time_h").change(function(){
  // 時間が10時まで
  if($("#time_h").val() <= 10 || $("#time_h").val() === 20){
    t_hour_ten = "";
    t_hour = $("#time_h").val() + "時\n";
  }else{
    // 21時以降
    if($("#time_h").val() > 20){
      t_hour_ten = "20\n";
      t_hour = $("#time_h").val() - 20 + "時\n"
    }else{
      t_hour_ten = "10\n";
      t_hour = $("#time_h").val() - 10 + "時\n"
    }
  }
  atos_sentence[1] = t_hour_ten+ t_hour + t_min_ten + t_min +"発";
});

$("#time_m").change(function(){
  min_time($("#time_m").val());
  atos_sentence[1] = t_hour_ten+ t_hour + t_min_ten + t_min +"発\n";
});

// 分数(時間)処理の関数
function min_time(minut){
  // 10分まで,または20,30,40,50
  if((minut <= 10 && minut >= 1) || minut === "20" || minut === "30" || minut === "40" || minut === "50"){
    t_min = minut + "分\n";
    t_min_ten = "";
  }else if(minut === "0"){
    t_min = "ちょうど\n";
    t_min_ten = "";
  }else{
    // それ以外
      t_min_ten = minut.slice(0, 1) + "0\n";
      t_min = minut.slice(1, 2) + "分\n"
  }
}

// 路線名
let line_num = 1;
$("#line").change(function(){
  line_num = $("#line").val();
  atos_sentence[3] = train_line[line_num][1];
});

// 直通/周り追加判定
$("[name=line_2]").change(function(){
  // 直通
  if($('[name=line_2][value=2]').prop('checked')){
    // 直通パーツ,追加
    for(d=0;d<train_line.length;d++){
      if(atos_sentence[3]+"直通" === train_line[d][1]){
        atos_sentence[3]=atos_sentence[3]+"直通";
        atos_sentence[4] = "";
        break;
      }else if(d === (train_line.length-1) && atos_sentence[3]+"直通" != train_line[d][1]){
        atos_sentence[4] = "直通";
      }
    }
  // 周り
  }else if($('[name=line_2][value=3]').prop('checked')){
    atos_sentence[4] = "周り";
  // 無し
  }else if($('[name=line_2][value=4]').prop('checked')){
    // atos_sentence[3] = "";
    atos_sentence[3] = train_line[line_num][1];
    atos_sentence[4] = "";
    }
});

// 種別任意選択
let kind_num = 1;
$("#kind").change(function(){
  kind_num = $("#kind").val();
  atos_sentence[5] = train_type[kind_num][1];
});

// 行き先任意選択
let bound = 0;
$("#destination").change(function(){
  bound = $("#destination").val();
  atos_sentence[6] = buund_for[bound][1];
  
});
// 行先2
let bound_2 = 0;
$("#destination_2").change(function(){
  bound_2 = $("#destination_2").val();
  atos_sentence[7] = buund_for[bound_2][1];
});



// 危ないですからry の種類選択
let seafty = 40;
$("#seafty").change(function(){
  seafty = $("#seafty").val();
  jun[12] = atos_cross[seafty][1]+"\n空白0.25秒";
  jun_yuru[6] = atos_cross[seafty][1]+"\n空白0.25秒";
  arriv_back[5] = atos_cross[seafty][1];
})

//ドア数
// let door_at = 78;
// $("#doors").change(function(){
//   door_at = $("#doors").val();
//   atos_sentence[8] = atos_cross[door_at][1];
// })

// 両数
let cars_num = 0;
$("#cars").change(function(){
  cars_num = $("#cars").val();
  // atos_sentence[9] = cars[cars_num][1];
  for(d=1;d<cars.length;d++){
    if(cars[cars_num][1]+"です" === cars[d][1]){
      atos_sentence[9] = cars[cars_num][1]+"です";
      break;
    }else if(d === (cars.length-1) && cars[cars_num][1]+"です" != cars[d][1]){
      atos_sentence[9] = cars[cars_num][1]+"\nです";
    }
  }
  
})

//グリーン車案内 
$("#green_car").change(function(){
  if($("#green_car").prop('checked') == true){
    atos_sentence[10] = "空白0.5秒\nグリーン車がついております";
  }else{
    atos_sentence[10] = "";
  }
});

  // 手動追加
  // あらかじめ手動で入れたい音源
  $("#ply_self").change(function(){
    atos_sentence[17] = "空白0.5秒\n" + $("#ply_self").val();
  })


// 増結・切離し
function add_tr(){
  // 増結選択時
  if($("#add_tr_a").val() === "0"){
    if($("#stop_sta").val() === "92_1"){
      atos_sentence[11] = "空白0.5秒\n当駅で";
      atos_sentence[12] = "";
    }else{
      atos_sentence[11] = "空白0.5秒\n" + buund_for[$("#stop_sta").val()][1];
      atos_sentence[12] = "で";
    }
    atos_sentence[13] = atos_cross[$("#add_tr_b").val()][1];
    atos_sentence[14] = cars[$("#add_tr_c").val()][1];
    atos_sentence[15] = "増結をいたします";
    atos_sentence[16] = "";

    // 切離し
  }else if($("#add_tr_a").val() === "1"){
    atos_sentence[11] = "空白0.5秒\nこの"+res_den+"の";
    atos_sentence[12] = atos_cross[$("#add_tr_b").val()][1];
    atos_sentence[13] = cars[$("#add_tr_c").val()][1];
    atos_sentence[14] = "は";

    if($("#stop_sta").val() === "92_1"){
      atos_sentence[15] = "当駅";
    }else{
      atos_sentence[15] = buund_for[$("#stop_sta").val()][1];
    }
    atos_sentence[16] = "止まりとなります";
    
      // なし
  }else if($("#add_tr_a").val() === "2"){
    for(d=0;d<6;d++){
      atos_sentence[11+d] = "";
    }

  }
}
// 114*184

// 接近用パーツ順序表示
function arriv(){
  list_link = [];
  playlist = [];
  $("#playlist_out").val("");
  // 番線代入
  if(atos_sentence[0] != ""){
    jun[2] = atos_sentence[0] + "に";
    arriv_back[2] = atos_sentence[0] + "に";
  }else{
    jun[2] = "";
    arriv_back[2] = "";
  }
  

  // ループで路線愛称から行き先までの音源を自動追加
  for(d=0;d<5;d++){
    jun[4+d] = atos_sentence[2+d];
  }
  for(d=0;d<6;d++){
    arriv_back[12+d] = atos_sentence[1+d];
  }

  // ドア数&両数
  if($("#door_car").prop('checked') == true){
    jun[13] = "空白0.5秒\nこの"+res_den+"は";
    jun[14] = atos_sentence[8];
    jun[15] = atos_sentence[9];
    // jun[16] = "です";
  }else{
    for(d=0;d<4;d++){
      jun[13+d] = "";
    }
  }
  // グリーン追加
  jun[17] = atos_sentence[10];
  arriv_back[10] = atos_sentence[10];

  // 増解結案内
  add_tr();
  for(d=0;d<6;d++){
    jun[18+d] = atos_sentence[11+d];
  }

    // 手動追加
  // あらかじめ手動で入れたい音源
  arriv_back[22] = atos_sentence[17];
  jun[24] = atos_sentence[17];


  // 行き先
  // 2つ(行き分け)
  if($("[name=bound_set][value=2]").prop('checked')){
    jun[8] = buund_for[bound][1];
    jun[9] = buund_for[bound_2][1];
    jun[10] = "行きが";

    arriv_back[17] = buund_for[bound][1];
    arriv_back[18] = buund_for[bound_2][1];
    arriv_back[19] = "";
  // 単独(非連続)
  }else if($("[name=bound_set][value=1]").prop('checked')){
    jun[8] = buund_for[bound][1];
    jun[9] = "";
    jun[10] = "行きが";
    
    arriv_back[17] = buund_for[bound][1];
    arriv_back[18] = "";
    arriv_back[19] = "";
    // 山手用
  }else if($('[name=bound_set][value=3]').prop('checked')){
    jun[8] = buund_for[bound][1];

    for(d=0;d<bound_ga.length;d++){
      if(buund_for[bound_2][1] + "方面行きが" === bound_ga[d][1]){
        jun[9] = bound_ga[d][1];
        jun[10] = "";
        break;
      }else if(d === (bound_ga.length-1) && buund_for[bound_2][1] + "方面行きが" != bound_ga[d][1]){
        jun[9] = buund_for[bound_2][1];
        jun[10] = "方面行きが";
      }
    }

    arriv_back[17] = buund_for[bound][1];
    arriv_back[18] = buund_for[bound_2][1];
    arriv_back[19] = "方面";    
    // 単独(連続)
  }else if($('[name=bound_set][value=0]').prop('checked')){
    jun[8] = buund_for[bound][1];
    jun[9] = "";
    for(d=0;d<bound_ga.length;d++){
      if(buund_for[bound][1] + "行きが" === bound_ga[d][1]){
        jun[8] = bound_ga[d][1];
        jun[10] = "";
        break;
      }else if(d === (bound_ga.length-1) && buund_for[bound][1] + "行きが" != bound_ga[d][1]){
        jun[8] = buund_for[bound][1];
        jun[10] = "行きが";
      }
    }

    arriv_back[17] = buund_for[bound][1];
    arriv_back[18] = "";
    arriv_back[19] = "";
  }

  // 通常
  if($('[name=type_2][value=0]').prop('checked')){
    jun[3] = "";
    // jun[4] = atos_sentence[1];
    $("#playlist_out").val(jun.join('\n'));

    // 当駅始発
  }else if($('[name=type_2][value=1]').prop('checked')){
    jun[3] = "当駅始発";
    $("#playlist_out").val(jun.join('\n'));

    // 折り返し
  }else if($('[name=type_2][value=2]').prop('checked')){
    // arriv_back[8] = atos_sentence[1]
    arriv_back[4] = res_den+"がまいります";
    arriv_back[6] = "この"+res_den+"は";

    // ドア
    if($("#door_car").prop('checked') == true){
      arriv_back[7] = atos_sentence[8];
      arriv_back[8] = atos_sentence[9];
      // arriv_back[9] = "です";
      arriv_back[11] = "空白0.5秒\n折り返し";
    }else{
      for(d=0;d<3;d++){
        arriv_back[7+d] = "";
      }
      arriv_back[11] = "折り返し";
    }
    arriv_back[17] = buund_for[bound][1];
    arriv_back[22] =　"";
    $("#playlist_out").val(arriv_back.join('\n'));
// 清掃ありの折り返し
  }else if($('[name=type_2][value=6]').prop('checked')){
    arriv_back[4] = res_den+"がまいります";
    arriv_back[6] = "この"+res_den+"は";

    // ドア
    if($("#door_car").prop('checked') == true){
      arriv_back[7] = atos_sentence[8];
      arriv_back[8] = atos_sentence[9];
      // arriv_back[9] = "です";
      arriv_back[11] = "空白0.5秒\n折り返し";
    }else{
      for(d=0;d<3;d++){
        arriv_back[7+d] = "";
      }
      arriv_back[11] = "折り返し";
    }
    arriv_back[17] = buund_for[bound][1];
    arriv_back[21] = "空白0.5秒\n空白0.5秒\nなお\n折り返し\n車内清掃を行います\nすぐの\nご乗車になれませんので\n乗車口で\nお待ちください";
    $("#playlist_out").val(arriv_back.join('\n'));

    // 簡易放送
  }else if($('[name=type_2][value=3]').prop('checked')){
    if(atos_sentence[0] != ""){
      jun_yuru[2] = atos_sentence[0] + "に";
    }else{
      jun_yuru[2] = "";
    }
    jun_yuru[3] = "";
    jun_yuru[4] = "";
    jun_yuru[5] =  res_den+"がまいります";
    jun_yuru[7] = "";
    $("#playlist_out").val(jun_yuru.join('\n'));

    // 種別のみ接近
  }else if($('[name=type_2][value=4]').prop('checked')){
    // 種別
    if(atos_sentence[0] != ""){
      jun_yuru[2] = atos_sentence[0] + "に";
    }else{
      jun_yuru[2] = "";
    }
    
    jun_yuru[5] = "まいります";
    if(atos_sentence[5] == "回送"){
      jun_yuru[3] = atos_sentence[5] + res_den +"が";
      jun_yuru[4] = "";
      jun_yuru[5] = "まいります";
      jun_yuru[7] = "この"+res_den+"には\nご乗車になれませんので\nご注意ください";
    }else if(atos_sentence[5] == ""){
      jun_yuru[3] = "";
      jun_yuru[4] = "";
      jun_yuru[5] = res_den + "がまいります";
      jun_yuru[7] = "";
    }else{
      jun_yuru[3] = atos_sentence[5]
      jun_yuru[4] = res_den + "が";
      jun_yuru[5] = "まいります";
      jun_yuru[7] = "";
    }
    $("#playlist_out").val(jun_yuru.join('\n'));

    // 当駅止まり
  }else if($('[name=type_2][value=7]').prop('checked')){
    if(atos_sentence[0] != ""){
      jun_yuru[2] = atos_sentence[0] + "に";
    }else{
      jun_yuru[2] = "";
    }
    jun_yuru[3] = "当駅止まりの";
    jun_yuru[4] = "";
    jun_yuru[5] = res_den+"がまいります";
    jun_yuru[7] = "この"+res_den+"には\nご乗車になれませんので\nご注意ください"

     $("#playlist_out").val(jun_yuru.join('\n'));
    // 通過放送
  }else if($('[name=type_2][value=5]').prop('checked')){
    if(atos_sentence[0] != ""){
      jun_yuru[2] = atos_sentence[0] + "を";
    }else{
      jun_yuru[2] = "";
    }
    
    jun_yuru[3] = res_den+"が";
    jun_yuru[4] = "";
    jun_yuru[5] = "通過いたします";
    jun_yuru[7] = "";
    $("#playlist_out").val(jun_yuru.join('\n'));

  }
  atos_mode = 2;
  console.log("atos_mode: " + atos_mode);
}

// 予告用パーツ順序表示
function yokoku(){
  list_link = [];
  playlist = [];
  $("#playlist_out").val("");

  if($('[name=mor_honj][value=0]').prop('checked')){
    info[0] = "おはようございます\n空白0.5秒";
  }else{
    info[0] = "本日も、ご利用いただき、ありがとうございます\n空白0.5秒";
  }
  info[4] = res_den + "は"
  // 到着前の予告放送
  if($('[name=type_3][value=0]').prop('checked')){
    info[1] = "今度の";
    if(atos_sentence[0] != ""){
      info[2] = atos_sentence[0] + "の";
    }else{
      info[2] = "";
    }
    info[3] = "";

    // グリーン
    info[19] = atos_sentence[10];

    //増解結放送追加
    add_tr();
    for(d=0;d<6;d++){
      info[20+d] = atos_sentence[11+d];
    }

    // ドア案内
    if($("#door_car").prop('checked') == true){
      info[14] = "空白0.5秒\nこの"+res_den+"は";
      // ドア&両数
      info[15] = atos_sentence[8];
      info[16] = atos_sentence[9];
      // info[17] = "です";
    }else{
      // 省略
      for(d=0;d<4;d++){
        info[d+14] = "";
      }
    }
    info[27] = "";

    // 出発予告
  }else if($('[name=type_3][value=1]').prop('checked')){
    info[1] = "";
    if(atos_sentence[0] != ""){
      info[2] = atos_sentence[0] + "に";
    }else{
      info[2] = ""
    }
    info[3] = "停車中の";
    // 両数案内省略 & 発車待ち案内
    info[27] = "空白0.5秒\n発車まで\nしばらくお待ちください";
    for(d=0;d<6;d++){
      info[14+d] = "";
    }

    // 増解結等
    add_tr();
    if($("#stop_sta").val() != "93_1"){
      for(d=0;d<6;d++){
        info[20+d] = atos_sentence[11+d];
      }
    }else{
      for(d=0;d<6;d++){
        info[20+d] = "";
      }
    }
  }
  info[26] = atos_sentence[17];

  // ループで路線愛称から行き先までの音源を自動追加
  for(d=0;d<8;d++){
    info[5+d] = atos_sentence[1+d];
  }



  // 行き先info[9], info[10]
  // 2つ(行き分け)
  if($("[name=bound_set][value=2]").prop('checked')){
    info[10] = buund_for[bound][1];
    info[11] = buund_for[bound_2][1];
    info[12] = "";
    // 山手用
  }else if($('[name=bound_set][value=3]').prop('checked')){
    info[10] = buund_for[bound][1];
    info[11] = buund_for[bound_2][1];
    info[12] = "方面";
    // 単独
  }else if($('[name=bound_set][value=0]').prop('checked') || $('[name=bound_set][value=1]').prop('checked')){
    info[10] = buund_for[bound][1];
    info[11] = "";
    info[12] = "";
  }

  // 最終的にセットした予告を、再生リストへ追加
  $("#playlist_out").val(info.join('\n'));
  // 予告放送用モード
  atos_mode = 1;
  console.log("atos_mode: " + atos_mode);
}

$('#arriv').on('click', function(){
  arriv();
});
$("#info").on('click', function(){
  yokoku();
})