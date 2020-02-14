'use strict';

// 初期定義
let melo = new Audio("");
let melo_noiz = new Audio("./noiz_melo.mp3");
melo_noiz.volume = 0.13;

// メロディ(セレクトタブからの選曲時の処理)
$("#melo_select").change(function(){
  melo.src = $("#melo_select").val();
  console.log("now melody: " + melo.src);
});

// メロディ&ドア閉処理(手動入力時の処理)
$('#custam_sw').on('click', function(){
  // 手動入力のところが未入力の時の処理
  if ($("#melo_input").val() != "") {
    // セレクトタブで選択されているものを入れる
    melo.src = $("#melo_input").val();
  }else{
    // 手動入力されたものを入れる
    melo.src = $("#melo_select").val();
  }
  // リンク切り替えのデバッグ処理
  // console.log("now melody: " + melo.src);
});

// リンク部削除
$("#melo_url_del").on('click', function(){
  $("#melo_input").val("");
})

melo.volume = 0.5; //ボリューム初期設定値
// door.volume = 0.5; //ボリューム初期設定値
//ボリューム数値,元値を100倍して出力
$("#mv_value").html("メロディ用ボリューム" + " 現在:" + Math.floor(melo.volume * 100));
// ボリューム数値,元値を100倍して出力
$("#smoking_value").html("禁煙音源ボリューム" + " 現在:" + Math.floor(atos_volume * 100));

// off操作時の禁煙放送停止して、ドア閉め放送再生する処理の関数を定義。
function off_1(){
  // off操作時の禁煙放送停止
  // ドア閉放送種別変更
    // ○番線

    // /*
  if($('[name=atos_door][value=0]').prop('checked')){
    close_atos[0] = atos_sentence[0];
    for(d=0;d<9;d++){
      close_atos[1+d] = "";
    }
    close_atos[11] = "ドアが閉まります";
  // ○番線の
  }else if($('[name=atos_door][value=1]').prop('checked')){
    if(atos_sentence[0] != ""){
      close_atos[0] = atos_sentence[0] + "の";
    }else{
      close_atos[0] = ""
    }
    for(d=0;d<9;d++){
      close_atos[1+d] = "";
    }
    close_atos[10] = ""
    close_atos[11] = "ドアが閉まります";
    // ○番線 路線愛称 路線名
  }else if($('[name=atos_door][value=2]').prop('checked')){
    if(atos_sentence[0] != ""){
      close_atos[0] = atos_sentence[0] + "の";
    }else{
      close_atos[0] = ""
    }
    close_atos[1] = atos_sentence[2];

    if(atos_sentence[6] == "上野"){
      close_atos[2] = train_line[line_num][1] + "\n上野止まり";
    }else{
      close_atos[2] = train_line[line_num][1];
    }
    
    for(d=0;d<8;d++){
      close_atos[3+d] = "";
    }
    close_atos[11] = "ドアが閉まります";

    // ○番線から "種別" が 発車いたします
  }else if($('[name=atos_door][value=3]').prop('checked')){
    if(atos_sentence[0] != ""){
      close_atos[0] = atos_sentence[0] + "から";
    }else{
      close_atos[0] = ""
    }

    for (let d = 0; d < 3; d++) {
      close_atos[1+d] = "";
    }
    if(atos_sentence[5] === "回送" || atos_sentence[5] === "臨時" || atos_sentence[5] === "団体"){
      close_atos[4] = train_type[kind_num][1] + res_den + "が";
    }else{
      close_atos[4] = res_den + "が";
    }
    for (let d = 0; d < 4; d++) {
      close_atos[5+d] = "";
    }
    close_atos[9] = "発車いたします";
    close_atos[11] = "";

    // 仙台式
  }else if($('[name=atos_door][value=4]').prop('checked')){
    // 番線設定有無
    if(atos_sentence[0] != ""){
      close_atos[0] = atos_sentence[0] + "から";
    }else{
      close_atos[0] = "";
    } 
    // 
    for(d=0;d<4;d++){
      close_atos[1+d] = atos_sentence[2+d];
    }
    close_atos[2] = train_line[line_num][1];
    
    // 2つ(行き分け)
    if($("[name=bound_set][value=2]").prop('checked')){
      close_atos[5] = buund_for[bound][1];
      close_atos[6] = buund_for[bound_2][1];
      close_atos[7] = "";
      close_atos[8] = "行きが";
      
      // 山手用
    }else if($('[name=bound_set][value=3]').prop('checked')){
      close_atos[5] = buund_for[bound][1];
      
      for(d=0;d<bound_ga.length;d++){
        if(buund_for[bound_2][1] + "方面行きが" === bound_ga[d][1]){
          close_atos[6] = bound_ga[d][1];
          close_atos[7] = "";
          break;
        }else if(d === (bound_ga.length-1) && buund_for[bound_2][1] + "方面行きが" != bound_ga[d][1]){
          close_atos[6] = buund_for[bound_2][1];
          close_atos[7] = "方面行きが";
        }
      }
      

      // 単独(連続パーツ)
    }else if($('[name=bound_set][value=0]').prop('checked')){

      for(d=0;d<bound_ga.length;d++){
        if(buund_for[bound][1] + "行きが" === bound_ga[d][1]){
          close_atos[5] = bound_ga[d][1];
          close_atos[8] = "";
          break;
        }else if(d === (bound_ga.length-1) && buund_for[bound][1] + "行きが" != bound_ga[d][1]){
          close_atos[5] = buund_for[bound][1];
          close_atos[8] = "行きが";
        }
      }
      close_atos[6] = "";
      close_atos[7] = "";
      // 単独パーツ
    }else if($('[name=bound_set][value=1]').prop('checked')){
      close_atos[5] = buund_for[bound][1];
      close_atos[6] = "";
      close_atos[7] = "";
      close_atos[8] = "行きが";
    }

    close_atos[9] = "発車いたします";
    // close_atos[10] = "空白0.5秒";
    close_atos[11] = "空白0.5秒\nドアが閉まります";

  }
  // 戸閉ATOS再生処理
  if (atos_mode != 2) {
    atos1.pause();
    atos2.pause();
    list_link = [];
    playlist = [];
    $("#playlist_out").val("");
    if($("#kkkm").prop('checked')){
      $("#playlist_out").val(close_atos.join('\n') + "\n空白0.5秒\n空白0.5秒\n空白0.5秒\n空白0.5秒\n駆け込み乗車は\nおやめください\n空白0.5秒\n空白0.5秒\n無理なご乗車は\nおやめください\n空白0.5秒\n空白0.5秒\n駆け込み乗車は\nおやめください\n空白0.5秒\n空白0.5秒\n無理なご乗車は\nおやめください");
    }else{
      $("#playlist_out").val(close_atos.join('\n'));
    }
    soundnum = 0;
    check_sound();
    atos_mode = 3;
  }
  // */

  // 一時的でバック用
  /*
  list_link = [];
    playlist = [];
 $("#playlist_out").val("");
 $("#playlist_out").val("1番線\nドアが閉まります\nご注意ください");
 soundnum = 0;
 check_sound();*/
  
}


// on操作時の処理を関数定義
function on(){
  $(function(){
    
    melo.play();
    melo.loop = true;
    console.log("melody's loop is " + melo.loop);
    if($("#noiz_check").prop('checked')){
      melo_noiz.play()
      melo_noiz.loop = true;
    }
  })
}

//off関数を新たに定義しました。しとかないとoffクリックしたり,dキークリックした時の処理文が長くなってめんどくなる
function off(){
    //以下は通常モードの処理
    if($('[name=sw_mode][value=0]').prop('checked')){
    melo.pause();
    melo.currentTime = 0;
    melo.loop = false;
    melo_noiz.pause();
    melo_noiz.currentTime = 0;
    melo_noiz.loop = false;
    setTimeout(off_1, 1780);

    console.log("melody's loop is " + melo.loop);
    }
    //以下は立川モードの処理
    else if($('[name=sw_mode][value=1]').prop('checked')){
      melo.loop = false;
      setTimeout(off_1, 1780);
      // door.play();
      console.log("melody's loop is " + melo.loop);
    }
    // 別モード
    else if($('[name=sw_mode][value=2]').prop('checked')){
      melo.loop = false;
      console.log("melody's loop is " + melo.loop);
    }
  // $("#on").removeClass().addClass("btn btn-danger btn-lg  text-center");
}

// メロディが流れ終わってからの処理
$(melo).on("ended", function(){
    melo_noiz.pause();
    melo_noiz.currentTime = 0;
    melo_noiz.loop = false;
  if ($('[name=sw_mode][value=2]').prop('checked')) {
    setTimeout(off_1, 1500);
  }
  // 仙台式選択時に、メロディ終了後に駆け込み防止放送再生
  // if($('[name=atos_door][value=4]').prop('checked')　&& over === true){
  //   list_link = [];
  //   playlist = [];
  //   $("#playlist_out").val("");
  //   $("#playlist_out").val("駆け込み乗車は\nおやめください\n空白0.5秒\n空白0.5秒\n無理なご乗車は\nおやめください\n空白0.5秒\n空白0.5秒\n駆け込み乗車は\nおやめください\n空白0.5秒\n空白0.5秒\n無理なご乗車は\nおやめください");
  //   soundnum = 0;
  //   check_sound();
  // }
});

//戸閉放送流れてる時にonを押したら止める処理の関数定義
function on_door(){
    if($('[name=on_mode][value=0]').prop('checked')){
      return;
    };
    if($('[name=on_mode][value=1]').prop('checked')){
      // 禁煙放送強制停止
      stop_atos();
    }
}

// メロディの再生時間と、合計時間表示
function time(){
  $(function (){
    setInterval(function(){
      let m = ('0' + Math.floor( melo.currentTime / 60 )) .slice( -2 );
      let s = ( '0' + Math.floor( melo.currentTime % 60 )) .slice( -2 );
      let dm = ( '0' + Math.floor( melo.duration / 60 ) ) .slice( -2 );
      let ds = ( '0' + Math.floor( melo.duration % 60 ) ) .slice( -2 );
      $("#time").html(m + ":" + s + " / " + dm + ":" + ds);

    }, 100);
  });
}

time();

function smoking(){
  list_link = [];
  playlist = [];
  $("#playlist_out").val("禁煙放送\n空白0.25秒");
  soundnum = 0;
  check_sound()
}



$('#smoking').on('click', function(f){
  smoking();
});
$('#on').on('click', function(f) {
  //on関数召喚
  on();
  on_door()
});
$('#off').on('click', function (){
  //off関数召喚
    off();
});

// キーボード各種操作
$('body').on('keydown', function(m){
  // off操作時
  if(m.keyCode === 68){
    //68 = dキー
    off();
    // on操作
  }else if(m.keyCode === 69) {
    //69キー=Eキー
    on();
    on_door()
    // 禁煙放送操作時
  }else if(m.keyCode === 88){
    // 88 = xキー
    smoking();
    // ATOS起動
  }else if(m.keyCode === 71){
    // 71 = Gキー
    soundnum = 0;
    check_sound();
    // ATOS停止
  }else if(m.keyCode === 83){
    // 83 = sキー
    stop_atos();
    // result_output();
    // 接近
  }else if(m.keyCode === 82){
    // 82 = Rキー
    arriv();
    // 予告
  }else if(m.keyCode === 87){
    // W = 87
    yokoku();
  }
})

// ボタン押した時
$("#first_off").mousedown(function(){
  on();
});

// ボタン離した瞬間　
$("#first_off").mouseup(function(){
  melo.loop = false;
  setTimeout(() => {
    off_1();
  }, 10000);
})


//メロディ音源ボリューム制御
let volume = $("#melo_volume");
$(volume).change(function() {

  let volumeValue = (volume.val().length == 1) ? '0.0' + volume.val() : '0.' + volume.val();

    if (volumeValue === "0.100") {
        melo.volume = 1;
        $("#mv_value").html("メロディ用ボリューム" + " 現在:" + 100);//ボリューム数値,元値を100倍して出力
    }else{
      melo.volume = volumeValue;
      $("#mv_value").html("メロディ用ボリューム" + " 現在:" + (volumeValue * 1000)/ 10);//ボリューム数値,元値を100倍して出力
    }

  // $(volume).val(volumeValue);
});
// 禁煙放送ボリューム制御
let volume_smoking = $("#smoking_volume");
$(volume_smoking).change(function(){
  let volumeValue = (volume_smoking.val().length === 1) ? '0.0' + volume_smoking.val() : '0.' + volume_smoking.val();
  if(volumeValue === "0.100"){
    atos_volume = 1;
    $("#smoking_value").html("禁煙音源ボリューム" + " 現在:" + 100);
  }else{
    $("#smoking_value").html("禁煙音源ボリューム" + " 現在:" + ((volumeValue) * 1000)/10);
    //ボリューム数値,元値を100倍して出力
    atos_volume = volumeValue;
  }
});