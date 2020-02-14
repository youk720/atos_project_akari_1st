'use strict';

let atos_sentence = [
  [""], //列車・電車
  [""], //番線
  [""], //時刻:A
  [""], //路線:A
  [""], //路線(直通パーツ付):A
  [""], //種別:A
  [""], //列車名:A
  [""], //号数:A
  [""], //行先:A
  [""], //ドア
  [""], //両数
  [""], //先頭号車
  [""], //最後尾
  [""], //グリーン車
  [""], //自由席
  [""], //切離し or 増結
  [""], //前,後ろ
  [""], //両数
  [""], //する駅
  [""], //手動入力
]

$('[name=type_1]').change(function() {
  if($('[name=type_1][value=0]').prop('checked')){
    atos_sentence[0] = "列車"
  }else if($('[name=type_1][value=1]').prop('checked')){
    atos_sentence[0] = "電車";
  }
})

// 番線選択
d = 0;
$("#bansen").change(function(){
  if($("#bansen").val() != 80){
    d = $("#bansen").val();
    atos_sentence[1] = bansen_num[d][1];
  }else{
    atos_sentence[1] = "";
  }
});

// 時刻
let t_hour_ten = "";
let t_hour = "0時";
let t_min_ten = "";
let t_min = "ちょうど";
// 時間
$("#time_h").change(function(){
  // 時間が10時まで
  if($("#time_h").val() <= 10 || $("#time_h").val() === 20){
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
  atos_sentence[2] = t_hour_ten+ t_hour + t_min_ten + t_min +"発";
});

$("#time_m").change(function(){
  min_time($("#time_m").val());
  atos_sentence[2] = t_hour_ten+ t_hour + t_min_ten + t_min +"発";
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
d = 1;
$("#line").change(function(){
  d = $("#line").val();
  atos_sentence[3] = train_line[d][1];
});

/*
// 直通/周り追加判定
$("[name=line_2]").change(function(){
  // 直通
  if($('[name=line_2][value=2]').prop('checked')){
    // 直通パーツ,追加
    for(d=0;d<train_line.length;d++){
      if(atos_sentence[3]+"直通" === train_line[d][1]){
        atos_sentence[3] = atos_sentence[3]+"直通";
        atos_sentence[4] = "";
        break;
      }else if(d === (train_line.length-1) && atos_sentence[3]+"直通" != train_line[d][1]){
        atos_sentence[4] = "直通";
      }
    }
  // 周り
  }else if($('[name=line_2][value=3]').prop('checked')){
    atos_sentence[3] = "周り";
  // 無し
  }else if($('[name=line_2][value=4]').prop('checked')){
    // atos_sentence[2] = "";
    atos_sentence[3] = train_line[d][1];
    atos_sentence[4] = "";
    }
});
*/

// 種別任意選択
d = 1;
$("#kind").change(function(){
  d = $("#kind").val();
  atos_sentence[5] = train_type[d][1];
});

// 愛称
d = 0;
$("#train_name").change(function(){
  d = $("#train_name").val();
  atos_sentence[6] = train_name[d][1];
})

// 行き先
d = 0;
$("#destination").change(function(){
  d = $("#destination").val();
  atos_sentence[8] = buund_for[d][1];
  
});

// 両数
d = 0;
$("#cars").change(function(){
  d = $("#cars").val();
  atos_sentence[10] = cars[d][1];
})

// 増結・切離し
function add_tr(){
  // 増結選択時
  if($("#add_tr_a").val() === "0"){
    if($("#stop_sta").val() === "92_1"){
      atos_sentence[10] = "空白0.5秒\n当駅で";
      atos_sentence[11] = "";
    }else{
      atos_sentence[10] = "空白0.5秒\n" + buund_for[$("#stop_sta").val()][1];
      atos_sentence[11] = "で";
    }
    atos_sentence[12] = atos_cross[$("#add_tr_b").val()][1];
    atos_sentence[13] = cars[$("#add_tr_c").val()][1];
    atos_sentence[14] = "増結をいたします";
    atos_sentence[15] = "";

    // 切離し
  }else if($("#add_tr_a").val() === "1"){
    atos_sentence[10] = "空白0.5秒\nこの"+res_den+"の";
    atos_sentence[11] = atos_cross[$("#add_tr_b").val()][1];
    atos_sentence[12] = cars[$("#add_tr_c").val()][1];
    atos_sentence[13] = "は";

    if($("#stop_sta").val() === "92_1"){
      atos_sentence[14] = "当駅";
    }else{
      atos_sentence[14] = buund_for[$("#stop_sta").val()][1];
    }
    atos_sentence[15] = "止まりとなります";
    
      // なし
  }else if($("#add_tr_a").val() === "2"){
    for(d=0;d<6;d++){
      atos_sentence[10+d] = "";
    }

  }
}


function result_output(){
  for(d=0;d<atos_sentence.length;d++){
    console.log(atos_sentence[d]);
  }
}