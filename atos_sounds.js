// for文回し用
let d;
// 放送雑種パーツ
let atos_cross = [
  ["./voiceroid_生成音源/door_close.mp3", "ドアが閉まります"],
  ["./voiceroid_生成音源/gochui.mp3", "ご注意ください"],
  ["./voiceroid_生成音源/honjitsumo.mp3", "本日も、ご利用いただき、ありがとうございます"],
  ["./voiceroid_生成音源/ohayou.mp3", "おはようございます"],
  ["./voiceroid_生成音源/kondono.mp3", "今度の"],
  ["./voiceroid_生成音源/resyaha.mp3", "列車は"],
  ["./voiceroid_生成音源/hatsu.mp3", "発"],
  ["./voiceroid_生成音源/chokutsu.mp3", "直通"],
  ["./voiceroid_生成音源/resyaga.mp3", "列車が"],
  ["./voiceroid_生成音源/densyaha.mp3", "電車は"],
  ["./voiceroid_生成音源/densyaha.mp3", "電車が"],
  ["./voiceroid_生成音源/yukidesu.mp3", "行きです"],
  ["./voiceroid_生成音源/yukiga.mp3", "行きが"],
  ["./voiceroid_生成音源/yukito.mp3", "行きと"],
  ["./voiceroid_生成音源/yukino.mp3", "行きの"],
  ["./voiceroid_生成音源/yuki.mp3", "行き"],
  ["./voiceroid_生成音源/dep_2.mp3", "当駅始発"],
  ["./voiceroid_生成音源/arrv_back.mp3", "折り返し"],
  ["./voiceroid_生成音源/arr_back_2.mp3", "当駅折り返し"],
  ["./voiceroid_生成音源/toeki_domarino.mp3", "当駅止まりの"],
  ["./voiceroid_生成音源/resyaga_mairu.mp3", "列車がまいります"],
  ["./voiceroid_生成音源/densyaga_mairu.mp3", "電車がまいります"],
  ["./voiceroid_生成音源/kaisoga.mp3", "回送列車が"],
  ["./voiceroid_生成音源/kamotuga.mp3", "貨物列車が"],
  ["./voiceroid_生成音源/dantaiga.mp3", "団体列車が"],
  ["./voiceroid_生成音源/kaisoga_den.mp3", "回送電車が"],
  ["./voiceroid_生成音源/homen_ga.mp3", "方面行きが"],
  ["./voiceroid_生成音源/mairimasu.mp3", "まいります"],
  ["./voiceroid_生成音源/tuka.mp3", "通過いたします"],
  ["./voiceroid_生成音源/no_smoking.mp3", "禁煙放送"],
  ["./voiceroid_生成音源/tenji.mp3", "危ないですから、黄色い点字ブロックまで、お下がりください"],
  ["./voiceroid_生成音源/kiken_sen.mp3", "危険ですから、黄色い線まで、お下がりください"],
  ["./voiceroid_生成音源/abunai_sen.mp3", "危ないですから、黄色い線まで、お下がりください"],
  ["./voiceroid_生成音源/toeki.mp3", "当駅"],
  ["./voiceroid_生成音源/toekide.mp3", "当駅で"],
  ["./voiceroid_生成音源/kirihanashi.mp3", "切り離しを行います"],
  ["./voiceroid_生成音源/zoketsu.mp3", "増結をいたします"],
  ["./voiceroid_生成音源/ekide.mp3", "駅で"],
  ["./voiceroid_生成音源/front_maeyori.mp3", "前より"],
  ["./voiceroid_生成音源/back_ushiroyori.mp3", "後ろより"],
  ["./voiceroid_生成音源/domaritonarimasu.mp3", "止まりとなります"],
  ["./voiceroid_生成音源/konoressyaha.mp3", "この列車は"],
  ["./voiceroid_生成音源/konoressyano.mp3", "この列車の"],
  ["./voiceroid_生成音源/konoressyaniha.mp3", "この列車には"],
  ["./voiceroid_生成音源/ressyani.mp3", "列車に"],
  ["./voiceroid_生成音源/ressya.mp3", "列車"],
  ["./voiceroid_生成音源/machiawase.mp3", "待ち合わせをいたします"],
  ["./voiceroid_生成音源/tuka_machi.mp3", "通過待ちをいたします"],
  ["./voiceroid_生成音源/not_take.mp3", "ご乗車になれませんので"],
  ["./voiceroid_生成音源/densyani.mp3", "電車に"],
  ["./voiceroid_生成音源/konodensyaha.mp3", "この電車は"],
  ["./voiceroid_生成音源/konodensyaniha.mp3", "この電車には"],
  ["./voiceroid_生成音源/konodensyano.mp3", "この電車の"],
  ["./voiceroid_生成音源/space_05.mp3", "空白0.5秒"],
  ["./voiceroid_生成音源/space_025.mp3", "空白0.25秒"],
  ["./voiceroid_生成音源/stoping.mp3", "停車中の"],
  ["./voiceroid_生成音源/hasyamade.mp3", "発車まで"],
  ["./voiceroid_生成音源/sibaraku_omachi.mp3", "しばらくお待ちください"],
  ["./voiceroid_生成音源/wait.mp3", "お待ちください"],
  ["./voiceroid_生成音源/green.mp3", "グリーン車がついております"],
  ["./voiceroid_生成音源/to.mp3", "と"],
  ["./voiceroid_生成音源/ni.mp3", "に"],
  ["./voiceroid_生成音源/homen.mp3", "方面"],
  ["./voiceroid_生成音源/nao.mp3", "なお"],
  ["./voiceroid_生成音源/suguno.mp3", "すぐの"],
  ["./voiceroid_生成音源/cleaning.mp3", "車内清掃を行います"],
  ["./voiceroid_生成音源/josyaguchi_de.mp3", "乗車口で"],
  ["./voiceroid_生成音源/desu.mp3", "です"],
  ["./voiceroid_生成音源/ueno_domari.mp3", "上野止まり"],
  ["./voiceroid_生成音源/hasyaitashimasu.mp3", "発車いたします"],
  ["./voiceroid_生成音源/mamonaku.mp3", "まもなく"],
  ["./voiceroid_生成音源/narimasu.mp3", "なります"],
  ["./voiceroid_生成音源/chokutsu.mp3", "直通"],
  ["./voiceroid_生成音源/ao_no.mp3", "青色の"],
  ["./voiceroid_生成音源/ao.mp3", "青色"],
  ["./voiceroid_生成音源/ashimoto.mp3", "足元"],
  ["./voiceroid_生成音源/ashimoto_no.mp3", "足元の"],
  ["./voiceroid_生成音源/chodo.mp3", "ちょうど"],
  ["./voiceroid_生成音源/hatsu.mp3", "発"],
  ["./voiceroid_生成音源/futsu_syaha.mp3", "普通車は"],
  ["./voiceroid_生成音源/gojosyaniha.mp3", "ご乗車には"],
  ["./voiceroid_生成音源/green_ha.mp3", "グリーン車は"],
  ["./voiceroid_生成音源/green_tick_ga.mp3", "グリーン券が"],
  ["./voiceroid_生成音源/josyaguchi.mp3", "乗車口"],
  ["./voiceroid_生成音源/josyaken_hokani.mp3", "乗車券の他に"],
  ["./voiceroid_生成音源/karano.mp3", "からの"],
  ["./voiceroid_生成音源/karanokakekiniteisya.mp3", "から先の各駅に停車します"],
  ["./voiceroid_生成音源/kirihanashi.mp3", "切り離しを行います"],
  ["./voiceroid_生成音源/last_car.mp3", "一番後ろが"],
  ["./voiceroid_生成音源/ltd_ticketga.mp3", "特急券が"],
  ["./voiceroid_生成音源/madenokakuekito.mp3", "までの各駅と"],
  ["./voiceroid_生成音源/midori_no.mp3", "緑色の"],
  ["./voiceroid_生成音源/midori.mp3", "緑色"],
  ["./voiceroid_生成音源/need_hituyoudesu.mp3", "必要です"],
  ["./voiceroid_生成音源/niwa.mp3", "には"],
  ["./voiceroid_生成音源/no_junde.mp3", "の順で"],
  ["./voiceroid_生成音源/no_stop.mp3", "停車いたしません"],
  ["./voiceroid_生成音源/orenge_no.mp3", "オレンジ色の"],
  ["./voiceroid_生成音源/orenge.mp3", "オレンジ色"],
  ["./voiceroid_生成音源/rev_tick_ga.mp3", "指定券が"],
  ["./voiceroid_生成音源/stop_2.mp3", "途中の停車駅は"],
  ["./voiceroid_生成音源/teisya.mp3", "停車します"],
  ["./voiceroid_生成音源/tomarimasu.mp3", "止まります"],
  // ["./voiceroid_生成音源/.mp3", "方面にはまいりません"],
  // ["./voiceroid_生成音源/.mp3", "次は"],
  // ["./voiceroid_生成音源/.mp3", "まで"],
  // ["./voiceroid_生成音源/.mp3", "各駅に停車します"],
  ["./voiceroid_生成音源/4car_to_5car.mp3", "4号車と5号車で"],
  // ["./voiceroid_生成音源/.mp3", "駆け込み乗車は"],
  // ["./voiceroid_生成音源/.mp3", "無理なご乗車は"],
  // ["./voiceroid_生成音源/.mp3", "おやめください"],
  // ["./voiceroid_生成音源/.mp3", "は"],
  // ["./voiceroid_生成音源/.mp3", "で"],
  // ["./voiceroid_生成音源/.mp3", "の"],
  // ["./voiceroid_生成音源/.mp3", "方面は"]
  // ["./voiceroid_生成音源/.mp3", "お乗り換えです"],,
  // ["./voiceroid_生成音源/.mp3", ""],
  // ["./voiceroid_生成音源/.mp3", ""],
  // ["./voiceroid_生成音源/.mp3", ""],
  // ["./voiceroid_生成音源/.mp3", ""],
  // ["./voiceroid_生成音源/.mp3", ""],
  // ["./voiceroid_生成音源/.mp3", ""],
  // ["./voiceroid_生成音源/.mp3", ""],
  ["./voiceroid_生成音源/thank_take2.mp3", "終着放送"],
  ["./voiceroid_生成音源/thank_take.mp3", "ご乗車、ありがとうございます"],
]
// 配列内の要素をhtmlのoptionタグで動的出
// 黄色い線他の放送選択
for (d = 30; d < 33; d++) {
  $("#seafty").append($("<option>").val(d).text(atos_cross[d][2]));
}
// 切離/増結等駅指定(当駅)
$("#stop_sta").append($("<option>").val("92_1").text(atos_cross[33][1]));

// 列車種別
let train_type = [
  [],
  ["./voiceroid_生成音源/kind/local_1.mp3", "各駅停車"],
  ["./voiceroid_生成音源/kind/local_2.mp3", "普通"],
  ["./voiceroid_生成音源/kind/rapid.mp3", "快速"],
  ["./voiceroid_生成音源/kind/chuou_tokkai.mp3", "中央特快"],
  ["./voiceroid_生成音源/kind/ome_tokkai.mp3", "青梅特快"],
  // ["./voiceroid_生成音源/kind/comtokkai.mp3", "通勤特快"],
  ["./voiceroid_生成音源/kind/comrip.mp3", "通勤快速"],
  ["./voiceroid_生成音源/kind/tokkai.mp3", "特別快速"],
  ["./voiceroid_生成音源/kind/extra.mp3", "臨時"],
  ["./voiceroid_生成音源/kind/group.mp3", "団体"],
  ["./voiceroid_生成音源/kind/kaiso.mp3", "回送"],
  ["./voiceroid_生成音源/kind/freight.mp3", "貨物"],
  // ["./voiceroid_生成音源/kind/junkyu.mp3", "準急"],
  // ["./voiceroid_生成音源/kind/kaikyu.mp3", "快速急行"],
  // ["./voiceroid_生成音源/kind/exp.mp3", "急行"],
  // ["./voiceroid_生成音源/kind/ltdexp.mp3", "特急"],
  // ["./voiceroid_生成音源/kind/nightltexp.mp3", "寝台特急"],
  // ["./voiceroid_生成音源/kind/horide.mp3", "ホリデー快速"],
  // ["./voiceroid_生成音源/kind/L_ltd.mp3", "L特急"],
]
// 配列内の要素をhtmlのoptionタグへ自動出力
for (d = 0; d < train_type.length; d++) {
   $("#kind").append($("<option>").val(d).text(train_type[d][1]));
}

let train_name = [
  ["./voiceroid_生成音源/train_name/akagi.mp3", "あかぎ"],
  ["./voiceroid_生成音源/train_name/swallo_akagi.mp3", "スワローあかぎ"],
  ["./voiceroid_生成音源/train_name/kusatsu.mp3", "草津"],
  ["./voiceroid_生成音源/train_name/urban.mp3", "アーバン"],
  ["./voiceroid_生成音源/train_name/rubit.mp3", "ラビット"],
  ["./voiceroid_生成音源/train_name/acty.mp3", "アクティー"],
  ["./voiceroid_生成音源/train_name/odoriko.mp3", "踊り子"],
  ["./voiceroid_生成音源/train_name/view_odoriko.mp3", "スーパービュー踊り子"],
  ["./voiceroid_生成音源/train_name/saphir_odoriko.mp3", "サフィール踊り子"],
  ["./voiceroid_生成音源/train_name/morning_liner_sjk.mp3", "おはようライナー新宿"],
  ["./voiceroid_生成音源/train_name/home_liner_ody.mp3", "ホームライナー小田原"],
  ["./voiceroid_生成音源/train_name/sho_liner.mp3", "湘南ライナー"],
  ["./voiceroid_生成音源/train_name/malin_ex.mp3", "マリンエクスプレス"],
  ["./voiceroid_生成音源/train_name/narita_ex.mp3", "成田エクスプレス"],
  ["./voiceroid_生成音源/train_name/tokiwa.mp3", "ときわ"],
  ["./voiceroid_生成音源/train_name/hitachi.mp3", "ひたち"],
  ["./voiceroid_生成音源/train_name/wakashio.mp3", "わかしお"],
  ["./voiceroid_生成音源/train_name/shiosai.mp3", "しおさい"],
  ["./voiceroid_生成音源/train_name/ayame.mp3", "あやめ"],
  ["./voiceroid_生成音源/train_name/hokutosei.mp3", "北斗星"],
  ["./voiceroid_生成音源/train_name/casiopea.mp3", "カシオペア"],
  ["./voiceroid_生成音源/train_name/akebono.mp3", "あけぼの"],
  // ["./voiceroid_生成音源/train_name/.mp3", ""],
  // ["./voiceroid_生成音源/train_name/.mp3", ""],
]
for(d=0;d<train_name.length;d++){
  $("#train_name").append($("<option>").val(d).text(train_name[d][1]));
}

// 路線名
let train_line = [
  ["./voiceroid_生成音源/line/joto_takasaki_cho.mp3", "上東高崎線直通"], 
  ["./voiceroid_生成音源/line/joto_utsu_cho.mp3", "上東宇都宮線直通"], 
  ["./voiceroid_生成音源/line/joto_umi_cho.mp3", "上東東海道線直通"], 
  ["./voiceroid_生成音源/line/shoshin_takasaki_cho.mp3", "湘新高崎線直通"], 
  ["./voiceroid_生成音源/line/shoshin_utsu_cho.mp3", "湘新宇都宮線直通"], 
  ["./voiceroid_生成音源/line/shoshin_umi_cho.mp3", "湘新東海道線直通"], 
  ["./voiceroid_生成音源/line/shoshin_yokosuka_cho.mp3", "湘新横須賀線直通"], 
  ["./voiceroid_生成音源/line/rinkai_cho.mp3", "りんかい線直通"], 
  [],  
  ["./voiceroid_生成音源/line/takasaki.mp3", "高崎線"], 
  ["./voiceroid_生成音源/line/utsunomiya.mp3", "宇都宮線"], 
  ["./voiceroid_生成音源/line/tokaido.mp3", "東海道線"], 
  ["./voiceroid_生成音源/line/joto.mp3", "上野東京ライン"],
  ["./voiceroid_生成音源/line/joto_takasaki.mp3", "上東高崎線"], 
  ["./voiceroid_生成音源/line/joto_utsu.mp3", "上東宇都宮線"], 
  ["./voiceroid_生成音源/line/joto_umi.mp3", "上東東海道線"], 
  // ["./voiceroid_生成音源/line/joban.mp3", "常磐線"],
  ["./voiceroid_生成音源/line/shoshin.mp3", "湘南新宿ライン"],
  ["./voiceroid_生成音源/line/shoshin_takasaki.mp3", "湘新高崎線"], 
  ["./voiceroid_生成音源/line/shoshin_utsu.mp3", "湘新宇都宮線"], 
  ["./voiceroid_生成音源/line/shoshin_umi.mp3", "湘新東海道線"], 
  ["./voiceroid_生成音源/line/shoshin_yokosuka.mp3", "湘新横須賀線"],
  ["./voiceroid_生成音源/line/yokosuka.mp3", "横須賀線"], 
  ["./voiceroid_生成音源/line/rinkai.mp3", "りんかい線"],
  ["./voiceroid_生成音源/line/sotetu.mp3", "相鉄線"], 
  ["./voiceroid_生成音源/line/saikyo.mp3", "埼京線"], 
  ["./voiceroid_生成音源/line/sobu.mp3", "総武線"], 
  ["./voiceroid_生成音源/line/sobu_local.mp3", "総武線各停"],  
  ["./voiceroid_生成音源/line/chuou.mp3", "中央線"], 
  ["./voiceroid_生成音源/line/hachiko.mp3", "八高線"],  
  ["./voiceroid_生成音源/line/keiyo.mp3", "京葉線"], 
  ["./voiceroid_生成音源/line/musashino.mp3", "武蔵野線"], 
  ["./voiceroid_生成音源/line/yamate.mp3", "山手線"], 
  ["./voiceroid_生成音源/line/keihin_tohoku.mp3", "京浜東北線"], 
  ["./voiceroid_生成音源/line/negishi.mp3", "根岸線"],
  ["./voiceroid_生成音源/line/kawagoe.mp3", "川越線"], 
  ["./voiceroid_生成音源/line/namb.mp3", "南武線"], 
  ["./voiceroid_生成音源/line/ome.mp3", "青梅線"],  
  ["./voiceroid_生成音源/line/ryomo.mp3", "両毛線"], 
  ["./voiceroid_生成音源/line/joetsu.mp3", "上越線"], 
  ["./voiceroid_生成音源/line/sinetsu.mp3", "信越線"], 
  ["./voiceroid_生成音源/line/yokohama.mp3", "横浜線"], 
  // ["./voiceroid_生成音源/line/.mp3", ""], 
  // ["./voiceroid_生成音源/line/.mp3", ""], 
  // ["./voiceroid_生成音源/line/.mp3", ""], 

]
for (d = 8; d < train_line.length; d++) {
  $("#line").append($("<option>").val(d).text(train_line[d][1]));
}

// 番線用音源
let bansen_num = [
  [],
  ["./voiceroid_生成音源/bansen/1.mp3", "1番線"],
  ["./voiceroid_生成音源/bansen/2.mp3", "2番線"],
  ["./voiceroid_生成音源/bansen/3.mp3", "3番線"],
  ["./voiceroid_生成音源/bansen/4.mp3", "4番線"],
  ["./voiceroid_生成音源/bansen/5.mp3", "5番線"],
  ["./voiceroid_生成音源/bansen/6.mp3", "6番線"],
  ["./voiceroid_生成音源/bansen/7.mp3", "7番線"],
  ["./voiceroid_生成音源/bansen/8.mp3", "8番線"],
  ["./voiceroid_生成音源/bansen/9.mp3", "9番線"],
  ["./voiceroid_生成音源/bansen/10.mp3", "10番線"],
  ["./voiceroid_生成音源/bansen/11.mp3", "11番線"],
  ["./voiceroid_生成音源/bansen/12.mp3", "12番線"],
  ["./voiceroid_生成音源/bansen/13.mp3", "13番線"],
  ["./voiceroid_生成音源/bansen/14.mp3", "14番線"],
  ["./voiceroid_生成音源/bansen/15.mp3", "15番線"],
  ["./voiceroid_生成音源/bansen/16.mp3", "16番線"],
  ["./voiceroid_生成音源/bansen/17.mp3", "17番線"],
  ["./voiceroid_生成音源/bansen/18.mp3", "18番線"],
  ["./voiceroid_生成音源/bansen/19.mp3", "19番線"],
  ["./voiceroid_生成音源/bansen/20.mp3", "20番線"],
  ["./voiceroid_生成音源/bansen/21.mp3", "21番線"],
  ["./voiceroid_生成音源/bansen/22.mp3", "22番線"],
  ["./voiceroid_生成音源/bansen/1no.mp3", "1番線の"],
  ["./voiceroid_生成音源/bansen/2no.mp3", "2番線の"],
  ["./voiceroid_生成音源/bansen/3no.mp3", "3番線の"],
  ["./voiceroid_生成音源/bansen/4no.mp3", "4番線の"],
  ["./voiceroid_生成音源/bansen/5no.mp3", "5番線の"],
  ["./voiceroid_生成音源/bansen/6no.mp3", "6番線の"],
  ["./voiceroid_生成音源/bansen/7no.mp3", "7番線の"],
  ["./voiceroid_生成音源/bansen/8no.mp3", "8番線の"],
  ["./voiceroid_生成音源/bansen/9no.mp3", "9番線の"],
  ["./voiceroid_生成音源/bansen/10no.mp3", "10番線の"],
  ["./voiceroid_生成音源/bansen/11no.mp3", "11番線の"],
  ["./voiceroid_生成音源/bansen/12no.mp3", "12番線の"],
  ["./voiceroid_生成音源/bansen/13no.mp3", "13番線の"],
  ["./voiceroid_生成音源/bansen/14no.mp3", "14番線の"],
  ["./voiceroid_生成音源/bansen/15no.mp3", "15番線の"],
  ["./voiceroid_生成音源/bansen/16no.mp3", "16番線の"],
  ["./voiceroid_生成音源/bansen/17no.mp3", "17番線の"],
  ["./voiceroid_生成音源/bansen/18no.mp3", "18番線の"],
  ["./voiceroid_生成音源/bansen/19no.mp3", "19番線の"],
  ["./voiceroid_生成音源/bansen/20no.mp3", "20番線の"],
  ["./voiceroid_生成音源/bansen/21no.mp3", "21番線の"],
  ["./voiceroid_生成音源/bansen/22no.mp3", "22番線の"],
  ["./voiceroid_生成音源/bansen/1ni.mp3", "1番線に"],
  ["./voiceroid_生成音源/bansen/2ni.mp3", "2番線に"],
  ["./voiceroid_生成音源/bansen/3ni.mp3", "3番線に"],
  ["./voiceroid_生成音源/bansen/4ni.mp3", "4番線に"],
  ["./voiceroid_生成音源/bansen/5ni.mp3", "5番線に"],
  ["./voiceroid_生成音源/bansen/6ni.mp3", "6番線に"],
  ["./voiceroid_生成音源/bansen/7ni.mp3", "7番線に"],
  ["./voiceroid_生成音源/bansen/8ni.mp3", "8番線に"],
  ["./voiceroid_生成音源/bansen/9ni.mp3", "9番線に"],
  ["./voiceroid_生成音源/bansen/10ni.mp3", "10番線に"],
  ["./voiceroid_生成音源/bansen/11ni.mp3", "11番線に"],
  ["./voiceroid_生成音源/bansen/12ni.mp3", "12番線に"],
  ["./voiceroid_生成音源/bansen/13ni.mp3", "13番線に"],
  ["./voiceroid_生成音源/bansen/14ni.mp3", "14番線に"],
  ["./voiceroid_生成音源/bansen/15ni.mp3", "15番線に"],
  ["./voiceroid_生成音源/bansen/16ni.mp3", "16番線に"],
  ["./voiceroid_生成音源/bansen/17ni.mp3", "17番線に"],
  ["./voiceroid_生成音源/bansen/18ni.mp3", "18番線に"],
  ["./voiceroid_生成音源/bansen/19ni.mp3", "19番線に"],
  ["./voiceroid_生成音源/bansen/20ni.mp3", "20番線に"],
  ["./voiceroid_生成音源/bansen/21ni.mp3", "21番線に"],
  ["./voiceroid_生成音源/bansen/22ni.mp3", "22番線に"],
  ["./voiceroid_生成音源/bansen/1wo.mp3", "1番線を"],
  ["./voiceroid_生成音源/bansen/2wo.mp3", "2番線を"],
  ["./voiceroid_生成音源/bansen/3wo.mp3", "3番線を"],
  ["./voiceroid_生成音源/bansen/4wo.mp3", "4番線を"],
  ["./voiceroid_生成音源/bansen/5wo.mp3", "5番線を"],
  ["./voiceroid_生成音源/bansen/6wo.mp3", "6番線を"],
  ["./voiceroid_生成音源/bansen/7wo.mp3", "7番線を"],
  ["./voiceroid_生成音源/bansen/8wo.mp3", "8番線を"],
  ["./voiceroid_生成音源/bansen/9wo.mp3", "9番線を"],
  ["./voiceroid_生成音源/bansen/10wo.mp3", "10番線を"],
  ["./voiceroid_生成音源/bansen/11wo.mp3", "11番線を"],
  ["./voiceroid_生成音源/bansen/12wo.mp3", "12番線を"],
  ["./voiceroid_生成音源/bansen/13wo.mp3", "13番線を"],
  ["./voiceroid_生成音源/bansen/14wo.mp3", "14番線を"],
  ["./voiceroid_生成音源/bansen/15wo.mp3", "15番線を"],
  ["./voiceroid_生成音源/bansen/16wo.mp3", "16番線を"],
  ["./voiceroid_生成音源/bansen/17wo.mp3", "17番線を"],
  ["./voiceroid_生成音源/bansen/18wo.mp3", "18番線を"],
  ["./voiceroid_生成音源/bansen/19wo.mp3", "19番線を"],
  ["./voiceroid_生成音源/bansen/20wo.mp3", "20番線を"],
  ["./voiceroid_生成音源/bansen/21wo.mp3", "21番線を"],
  ["./voiceroid_生成音源/bansen/22wo.mp3", "22番線を"],
  ["./voiceroid_生成音源/bansen/1kara.mp3", "1番線から"],
  ["./voiceroid_生成音源/bansen/2kara.mp3", "2番線から"],
  ["./voiceroid_生成音源/bansen/3kara.mp3", "3番線から"],
  ["./voiceroid_生成音源/bansen/4kara.mp3", "4番線から"],
  ["./voiceroid_生成音源/bansen/5kara.mp3", "5番線から"],
  ["./voiceroid_生成音源/bansen/6kara.mp3", "6番線から"],
  ["./voiceroid_生成音源/bansen/7kara.mp3", "7番線から"],
  ["./voiceroid_生成音源/bansen/8kara.mp3", "8番線から"],
  ["./voiceroid_生成音源/bansen/9kara.mp3", "9番線から"],
  ["./voiceroid_生成音源/bansen/10kara.mp3", "10番線から"],
  ["./voiceroid_生成音源/bansen/11kara.mp3", "11番線から"],
  ["./voiceroid_生成音源/bansen/12kara.mp3", "12番線から"],
  ["./voiceroid_生成音源/bansen/13kara.mp3", "13番線から"],
  ["./voiceroid_生成音源/bansen/14kara.mp3", "14番線から"],
  ["./voiceroid_生成音源/bansen/15kara.mp3", "15番線から"],
  ["./voiceroid_生成音源/bansen/16kara.mp3", "16番線から"],
  ["./voiceroid_生成音源/bansen/17kara.mp3", "17番線から"],
  ["./voiceroid_生成音源/bansen/18kara.mp3", "18番線から"],
  ["./voiceroid_生成音源/bansen/19kara.mp3", "19番線から"],
  ["./voiceroid_生成音源/bansen/20kara.mp3", "20番線から"],
  ["./voiceroid_生成音源/bansen/21kara.mp3", "21番線から"],
  ["./voiceroid_生成音源/bansen/22kara.mp3", "22番線から"],
]
for (d = 0; d < 23; d++) {
  $("#bansen").append($("<option>").val(d).text(bansen_num[d][1]));
}

let cars = [
  [],
  ["./voiceroid_生成音源/cars/1ryo.mp3", "1両"],
  ["./voiceroid_生成音源/cars/2ryo.mp3", "2両"],
  ["./voiceroid_生成音源/cars/3ryo.mp3", "3両"],
  ["./voiceroid_生成音源/cars/4ryo.mp3", "4両"],
  ["./voiceroid_生成音源/cars/5ryo.mp3", "5両"],
  ["./voiceroid_生成音源/cars/6ryo.mp3", "6両"],
  ["./voiceroid_生成音源/cars/7ryo.mp3", "7両"],
  ["./voiceroid_生成音源/cars/8ryo.mp3", "8両"],
  ["./voiceroid_生成音源/cars/9ryo.mp3", "9両"],
  ["./voiceroid_生成音源/cars/10ryo.mp3", "10両"],
  ["./voiceroid_生成音源/cars/11ryo.mp3", "11両"],
  ["./voiceroid_生成音源/cars/12ryo.mp3", "12両"],
  ["./voiceroid_生成音源/cars/14ryo.mp3", "14両"],
  ["./voiceroid_生成音源/cars/15ryo.mp3", "15両"],
  ["./voiceroid_生成音源/cars/5ryo_ha.mp3", "5両は"],
  ["./voiceroid_生成音源/cars/ryo_d/5ryo_d.mp3", "5両です"],
  ["./voiceroid_生成音源/cars/ryo_d/6ryo_d.mp3", "6両です"],
  ["./voiceroid_生成音源/cars/ryo_d/10ryo_d.mp3", "10両です"],
  ["./voiceroid_生成音源/cars/ryo_d/15ryo_d.mp3", "15両です"],
  ["./voiceroid_生成音源/cars/gosya/1.mp3", "1号車"],
  ["./voiceroid_生成音源/cars/gosya/2.mp3", "2号車"],
  ["./voiceroid_生成音源/cars/gosya/3.mp3", "3号車"],
  ["./voiceroid_生成音源/cars/gosya/4.mp3", "4号車"],
  ["./voiceroid_生成音源/cars/gosya/5.mp3", "5号車"],
  ["./voiceroid_生成音源/cars/gosya/6.mp3", "6号車"],
  ["./voiceroid_生成音源/cars/gosya/7.mp3", "7号車"],
  ["./voiceroid_生成音源/cars/gosya/8.mp3", "8号車"],
  ["./voiceroid_生成音源/cars/gosya/9.mp3", "9号車"],
  ["./voiceroid_生成音源/cars/gosya/10.mp3", "10号車"],
  ["./voiceroid_生成音源/cars/gosya/11.mp3", "11号車"],
  ["./voiceroid_生成音源/cars/gosya/12.mp3", "12号車"],
  ["./voiceroid_生成音源/cars/gosya/13.mp3", "13号車"],
  ["./voiceroid_生成音源/cars/gosya/14.mp3", "14号車"],
  ["./voiceroid_生成音源/cars/gosya/15.mp3", "15号車"],
  
]
for (d = 0; d < 15; d++) {
  $("#cars").append($("<option>").val(d).text(cars[d][1]));
  $("#add_tr_c").append($("<option>").val(d).text(cars[d][1]));
}

// その他数字
let no = [
  ["./voiceroid_生成音源/number/hour/0.mp3", "0時"],
  ["./voiceroid_生成音源/number/hour/1.mp3", "1時"],
  ["./voiceroid_生成音源/number/hour/2.mp3", "2時"],
  ["./voiceroid_生成音源/number/hour/3.mp3", "3時"],
  ["./voiceroid_生成音源/number/hour/4.mp3", "4時"],
  ["./voiceroid_生成音源/number/hour/5.mp3", "5時"],
  ["./voiceroid_生成音源/number/hour/6.mp3", "6時"],
  ["./voiceroid_生成音源/number/hour/7.mp3", "7時"],
  ["./voiceroid_生成音源/number/hour/8.mp3", "8時"],
  ["./voiceroid_生成音源/number/hour/9.mp3", "9時"],
  ["./voiceroid_生成音源/number/hour/10.mp3", "10時"],
  ["./voiceroid_生成音源/number/hour/20.mp3", "20時"],
  ["./voiceroid_生成音源/number/min/1.mp3", "1分"],
  ["./voiceroid_生成音源/number/min/2.mp3", "2分"],
  ["./voiceroid_生成音源/number/min/3.mp3", "3分"],
  ["./voiceroid_生成音源/number/min/4.mp3", "4分"],
  ["./voiceroid_生成音源/number/min/5.mp3", "5分"],
  ["./voiceroid_生成音源/number/min/6.mp3", "6分"],
  ["./voiceroid_生成音源/number/min/7.mp3", "7分"],
  ["./voiceroid_生成音源/number/min/8.mp3", "8分"],
  ["./voiceroid_生成音源/number/min/9.mp3", "9分"],
  ["./voiceroid_生成音源/number/min/10.mp3", "10分"],
  ["./voiceroid_生成音源/number/min/20.mp3", "20分"],
  ["./voiceroid_生成音源/number/min/30.mp3", "30分"],
  ["./voiceroid_生成音源/number/min/40.mp3", "40分"],
  ["./voiceroid_生成音源/number/min/50.mp3", "50分"],
  ["./voiceroid_生成音源/number/go/1.mp3", "1号"],
  ["./voiceroid_生成音源/number/go/3.mp3", "3号"],
  ["./voiceroid_生成音源/number/go/4.mp3", "4号"],
  ["./voiceroid_生成音源/number/go/7.mp3", "7号"],
  ["./voiceroid_生成音源/number/go/10.mp3", "10号"],
  ["./voiceroid_生成音源/number/go/20.mp3", "20号"],
  ["./voiceroid_生成音源/number/10.mp3", "10"],
  ["./voiceroid_生成音源/number/20.mp3", "20"],
  ["./voiceroid_生成音源/number/30.mp3", "30"],
  ["./voiceroid_生成音源/number/40.mp3", "40"],
  ["./voiceroid_生成音源/number/50.mp3", "50"],
  // ["./voiceroid_生成音源/number/.mp3", ""],
]

// 行先_単体
let buund_for = [
  ["./voiceroid_生成音源/bound/ikebukuro.mp3",  "池袋"],
  ["./voiceroid_生成音源/bound/nippori.mp3",  "日暮里"],
  ["./voiceroid_生成音源/bound/shibuya.mp3",  "渋谷"],
  ["./voiceroid_生成音源/bound/shinjuku.mp3",  "新宿"],
  ["./voiceroid_生成音源/bound/shinagawa.mp3",  "品川"],
  ["./voiceroid_生成音源/bound/tabata.mp3",  "田端"],
  ["./voiceroid_生成音源/bound/tokyo.mp3",  "東京"],
  ["./voiceroid_生成音源/bound/ueno.mp3",  "上野"],
  ["./voiceroid_生成音源/bound/osaki.mp3",  "大崎"],  
  ["./voiceroid_生成音源/bound/ebisu.mp3",  "恵比寿"],
  ["./voiceroid_生成音源/bound/harajuku.mp3",  "原宿"],
  ["./voiceroid_生成音源/bound/kagohara.mp3",  "籠原"],
  ["./voiceroid_生成音源/bound/fukaya.mp3",  "深谷"],
  ["./voiceroid_生成音源/bound/honjo.mp3",  "本庄"],
  ["./voiceroid_生成音源/bound/takasaki.mp3",  "高崎"],
  ["./voiceroid_生成音源/bound/maebashi.mp3",  "前橋"],
  ["./voiceroid_生成音源/bound/shin-maebashi.mp3",  "新前橋"],
  ["./voiceroid_生成音源/bound/kumagaya.mp3",  "熊谷"],
  ["./voiceroid_生成音源/bound/konosu.mp3",  "鴻巣"],
  ["./voiceroid_生成音源/bound/kitamoto.mp3",  "北本"],
  ["./voiceroid_生成音源/bound/okegawa.mp3",  "桶川"],
  ["./voiceroid_生成音源/bound/ageo.mp3",  "上尾"],
  ["./voiceroid_生成音源/bound/miyahara.mp3",  "宮原"],
  // ["./voiceroid_生成音源/bound/chichibu.mp3",  "秩父"],
  // ["./voiceroid_生成音源/bound/kagemori.mp3",  "影森"],
  ["./voiceroid_生成音源/bound/omiya.mp3",  "大宮"],
  ["./voiceroid_生成音源/bound/yokohama.mp3",  "横浜"],
  ["./voiceroid_生成音源/bound/ofuna.mp3",  "大船"],
  ["./voiceroid_生成音源/bound/hiratsuka.mp3",  "平塚"],
  ["./voiceroid_生成音源/bound/kozu.mp3",  "国府津"],
  ["./voiceroid_生成音源/bound/odawara.mp3",  "小田原"],
  ["./voiceroid_生成音源/bound/atami.mp3",  "熱海"],
  ["./voiceroid_生成音源/bound/ito.mp3",  "伊東"],
  ["./voiceroid_生成音源/bound/mishima.mp3",  "三島"],
  ["./voiceroid_生成音源/bound/numazu.mp3",  "沼津"],
  ["./voiceroid_生成音源/bound/gotenba.mp3",  "御殿場"],
  ["./voiceroid_生成音源/bound/yamakita.mp3",  "山北"],
  ["./voiceroid_生成音源/bound/koganei.mp3",  "小金井"],
  ["./voiceroid_生成音源/bound/koga.mp3",  "古河"],
  ["./voiceroid_生成音源/bound/oyama.mp3",  "小山"],
  ["./voiceroid_生成音源/bound/utsunomiya.mp3",  "宇都宮"],
  ["./voiceroid_生成音源/bound/hasuda.mp3",  "蓮田"],
  ["./voiceroid_生成音源/bound/shiraoka.mp3",  "白岡"],
  ["./voiceroid_生成音源/bound/hosyakuji.mp3",  "宝積寺"],
  ["./voiceroid_生成音源/bound/nozaki.mp3",  "野崎"],
  // ["./voiceroid_生成音源/bound/nasu_shiobara.mp3",  "那須塩原:音源なし"],
  ["./voiceroid_生成音源/bound/yaita.mp3",  "矢板"],
  ["./voiceroid_生成音源/bound/kuroiso.mp3",  "黒磯"],
  ["./voiceroid_生成音源/bound/kamakura.mp3",  "鎌倉"],
  ["./voiceroid_生成音源/bound/zushi.mp3",  "逗子"],
  ["./voiceroid_生成音源/bound/yokosuka.mp3",  "横須賀"],
  ["./voiceroid_生成音源/bound/kurihama.mp3",  "久里浜"],
  ["./voiceroid_生成音源/bound/kinshicho.mp3",  "錦糸町"],
  ["./voiceroid_生成音源/bound/chiba.mp3",  "千葉"],
  ["./voiceroid_生成音源/bound/makuhari.mp3",  "幕張"],
  ["./voiceroid_生成音源/bound/tsudanuma.mp3",  "津田沼"],
  ["./voiceroid_生成音源/bound/ryogoku.mp3",  "両国"],
  ["./voiceroid_生成音源/bound/funabashi.mp3",  "船橋"],
  ["./voiceroid_生成音源/bound/kaihinmakuhari.mp3",  "海浜幕張"],
  ["./voiceroid_生成音源/bound/minamifunabashi.mp3",  "南船橋"],
  ["./voiceroid_生成音源/bound/nishifunabashi.mp3",  "西船橋"],
  ["./voiceroid_生成音源/bound/shinarashino.mp3",  "新習志野"],
  ["./voiceroid_生成音源/bound/maihama.mp3",  "舞浜"],
  ["./voiceroid_生成音源/bound/kasai_rinkai.mp3",  "葛西臨海公園"],
  ["./voiceroid_生成音源/bound/shinurayasu.mp3",  "新浦安"],
  ["./voiceroid_生成音源/bound/chibaminato.mp3",  "千葉みなと"],
  ["./voiceroid_生成音源/bound/soga.mp3",  "蘇我"],
  ["./voiceroid_生成音源/bound/mobara.mp3",  "茂原"],
  ["./voiceroid_生成音源/bound/honda.mp3",  "誉田"],
  ["./voiceroid_生成音源/bound/kazusaichinomiya.mp3",  "上総一ノ宮"],
  ["./voiceroid_生成音源/bound/katsura.mp3",  "勝浦"],
  ["./voiceroid_生成音源/bound/tougane.mp3",  "東金"],
  ["./voiceroid_生成音源/bound/naruto.mp3",  "成東"],
  ["./voiceroid_生成音源/bound/awakamogawa.mp3",  "安房鴨川"],
  ["./voiceroid_生成音源/bound/kimitsu.mp3",  "君津"],
  ["./voiceroid_生成音源/bound/kisarazu.mp3",  "木更津"],
  ["./voiceroid_生成音源/bound/tateyama.mp3",  "館山"],
  ["./voiceroid_生成音源/bound/anegasaki.mp3",  "姉ヶ崎"],
  ["./voiceroid_生成音源/bound/kazusaminato.mp3",  "上総湊"],
  ["./voiceroid_生成音源/bound/chikura.mp3",  "千倉"],
  ["./voiceroid_生成音源/bound/sakura.mp3",  "佐倉"],
  ["./voiceroid_生成音源/bound/choshi.mp3",  "銚子"],
  ["./voiceroid_生成音源/bound/narita.mp3",  "成田"],
  ["./voiceroid_生成音源/bound/narita_air.mp3",  "成田空港"],
  ["./voiceroid_生成音源/bound/sawara.mp3",  "佐原"],
  ["./voiceroid_生成音源/bound/kashimajingu.mp3",  "鹿島神宮"],
  ["./voiceroid_生成音源/bound/nakano.mp3",  "中野"],
  ["./voiceroid_生成音源/bound/mitaka.mp3",  "三鷹"],
  ["./voiceroid_生成音源/bound/suidobashi.mp3",  "水道橋"],
  ["./voiceroid_生成音源/bound/ochanomizu.mp3",  "御茶ノ水"],
  ["./voiceroid_生成音源/bound/akihabara.mp3",  "秋葉原"],
  ["./voiceroid_生成音源/bound/mu_koganei.mp3",  "武蔵小金井"],
  ["./voiceroid_生成音源/bound/kokubunji.mp3",  "国分寺"],
  ["./voiceroid_生成音源/bound/tachikawa.mp3",  "立川"],
  ["./voiceroid_生成音源/bound/kunitachi.mp3", "国立"],
  ["./voiceroid_生成音源/bound/toyoda.mp3",  "豊田"],
  ["./voiceroid_生成音源/bound/hachiouij.mp3",  "八王子"],
  ["./voiceroid_生成音源/bound/takao.mp3",  "高尾"],
  ["./voiceroid_生成音源/bound/otsuki.mp3",  "大月"],
  ["./voiceroid_生成音源/bound/kawaguchiko.mp3",  "河口湖"],
  ["./voiceroid_生成音源/bound/kofu.mp3",  "甲府"],
  ["./voiceroid_生成音源/bound/ryuou.mp3",  "竜王"],
  ["./voiceroid_生成音源/bound/kobuchizawa.mp3",  "小渕沢"],
  ["./voiceroid_生成音源/bound/chino.mp3",  "茅野"],
  ["./voiceroid_生成音源/bound/kamisuwa.mp3",  "上諏訪"],
  ["./voiceroid_生成音源/bound/shimosuwa.mp3",  "下諏訪"],
  ["./voiceroid_生成音源/bound/shiojiri.mp3",  "塩尻"],
  ["./voiceroid_生成音源/bound/matsumoto.mp3",  "松本"],
  ["./voiceroid_生成音源/bound/obasute.mp3",  "姨捨"],
  ["./voiceroid_生成音源/bound/shinonoi.mp3",  "篠ノ井"],
  ["./voiceroid_生成音源/bound/nagano.mp3",  "長野"],
  ["./voiceroid_生成音源/bound/shinano_omachi.mp3",  "信濃大町"],
  ["./voiceroid_生成音源/bound/hotaka.mp3",  "穂高"],
  ["./voiceroid_生成音源/bound/ariake.mp3",  "有明"],
  ["./voiceroid_生成音源/bound/hakuba.mp3",  "白馬"],
  ["./voiceroid_生成音源/bound/s_otari.mp3",  "南小谷"],
  ["./voiceroid_生成音源/bound/haijima.mp3",  "拝島"],
  ["./voiceroid_生成音源/bound/ome.mp3",  "青梅"],
  ["./voiceroid_生成音源/bound/okutama.mp3",  "奥多摩"],
  ["./voiceroid_生成音源/bound/mu_itsukaichi.mp3",  "武蔵五日市"],
  ["./voiceroid_生成音源/bound/komagawa.mp3",  "高麗川"],
  ["./voiceroid_生成音源/bound/hakonegasaki.mp3",  "箱根ヶ崎"],
  ["./voiceroid_生成音源/bound/minakami.mp3",  "水上"],
  ["./voiceroid_生成音源/bound/numata.mp3",  "沼田"],
  ["./voiceroid_生成音源/bound/shibukawa.mp3",  "渋川"],
  ["./voiceroid_生成音源/bound/omae.mp3",  "大前"],
  ["./voiceroid_生成音源/bound/manza.mp3",  "万座・鹿沢口"],
  ["./voiceroid_生成音源/bound/naganohara.mp3",  "長野原草津口"],
  ["./voiceroid_生成音源/bound/kiryu.mp3",  "桐生"],
  ["./voiceroid_生成音源/bound/sano.mp3",  "佐野"],
  ["./voiceroid_生成音源/bound/ashikaga.mp3",  "足利"],
  ["./voiceroid_生成音源/bound/isesaki.mp3",  "伊勢崎"],
  ["./voiceroid_生成音源/bound/shimodate.mp3",  "下館"],
  ["./voiceroid_生成音源/bound/tomobe.mp3",  "友部"],
  ["./voiceroid_生成音源/bound/tsuchiura.mp3",  "土浦"],
  ["./voiceroid_生成音源/bound/mito.mp3",  "水戸"],
  ["./voiceroid_生成音源/bound/katsuta.mp3",  "勝田"],
  ["./voiceroid_生成音源/bound/iwaki.mp3",  "いわき"],
  ["./voiceroid_生成音源/bound/kitasenju.mp3",  "北千住"],
  ["./voiceroid_生成音源/bound/matsudo.mp3",  "松戸"],
  ["./voiceroid_生成音源/bound/abiko.mp3",  "我孫子"],
  ["./voiceroid_生成音源/bound/toride.mp3",  "取手"],
  ["./voiceroid_生成音源/bound/kashiwa.mp3",  "柏"],
  ["./voiceroid_生成音源/bound/hitachi.mp3",  "日立"],
  ["./voiceroid_生成音源/bound/takahagi.mp3",  "高萩"],
  ["./voiceroid_生成音源/bound/tomioka.mp3",  "富岡"],
  ["./voiceroid_生成音源/bound/otsuko.mp3",  "大津港"],
  ["./voiceroid_生成音源/bound/hitachidaigo.mp3",  "常陸大子"],
  ["./voiceroid_生成音源/bound/ayase.mp3",  "綾瀬"],
  ["./voiceroid_生成音源/bound/yoyoue.mp3",  "代々木上原"],
  ["./voiceroid_生成音源/bound/chigasaki.mp3",  "茅ヶ崎"],
  ["./voiceroid_生成音源/bound/fujisawa.mp3",  "藤沢"],
  ["./voiceroid_生成音源/bound/minamiurawa.mp3",  "南浦和"],
  ["./voiceroid_生成音源/bound/akabane.mp3",  "赤羽"],
  ["./voiceroid_生成音源/bound/east_jujo.mp3",  "東十条"],
  ["./voiceroid_生成音源/bound/kamata.mp3",  "蒲田"],
  ["./voiceroid_生成音源/bound/tsurumi.mp3",  "鶴見"],
  ["./voiceroid_生成音源/bound/sakuragicho.mp3",  "桜木町"],
  ["./voiceroid_生成音源/bound/isogo.mp3", "磯子"],
  ["./voiceroid_生成音源/bound/ebina.mp3",  "海老名"],
  ["./voiceroid_生成音源/bound/nishiya.mp3",  "西谷"],
  ["./voiceroid_生成音源/bound/yokokoku.mp3",  "羽沢横浜国大"],
  ["./voiceroid_生成音源/bound/musashiurawa.mp3",  "武蔵浦和"],
  ["./voiceroid_生成音源/bound/shinkiba.mp3",  "新木場"],
  ["./voiceroid_生成音源/bound/tokyo_tereport.mp3",  "東京テレポート"],
  ["./voiceroid_生成音源/bound/kawagoe.mp3",  "川越"],
  ["./voiceroid_生成音源/bound/minami-furuya.mp3",  "南古谷"],
  ["./voiceroid_生成音源/bound/higashitokorozawa.mp3",  "東所沢"],
  ["./voiceroid_生成音源/bound/fuchuhonmachi.mp3",  "府中本町"],
  ["./voiceroid_生成音源/bound/minami_koshigaya.mp3",  "南越谷"],
  ["./voiceroid_生成音源/bound/yoshikawa_minami.mp3",  "吉川美南"],
  ["./voiceroid_生成音源/bound/kawasaki.mp3",  "川崎"],
  // ["./voiceroid_生成音源/bound/yako.mp3", "矢向"],
  // ["./voiceroid_生成音源/bound/musashi_nakahara.mp3", "武蔵中原"],
  // ["./voiceroid_生成音源/bound/noborito.mp3",  "登戸"],
  // ["./voiceroid_生成音源/bound/inaginaganuma.mp3",  "稲城長沼"],
  // ["./voiceroid_生成音源/bound/kikuna.mp3",  "菊名"],
  // ["./voiceroid_生成音源/bound/nagatsuta.mp3",  "長津田"],
  // ["./voiceroid_生成音源/bound/hashimoto.mp3",  "橋下"],
  // ["./voiceroid_生成音源/bound/machida.mp3",  "町田"],
  ["./voiceroid_生成音源/bound/higashikanagawa.mp3",  "東神奈川"],
  // ["./voiceroid_生成音源/bound/shin_yokohama.mp3",  "新横浜"],
  ["./voiceroid_生成音源/bound/shizuoka.mp3",  "静岡"],
  // ["./voiceroid_生成音源/bound/ogaki.mp3",  "大垣"],
  ["./voiceroid_生成音源/bound/nagoya.mp3",  "名古屋"],
  ["./voiceroid_生成音源/bound/nebukawa.mp3",  "根府川"],
  ["./voiceroid_生成音源/bound/shinbashi.mp3",  "新橋"],
  ["./voiceroid_生成音源/bound/nisi_nippori.mp3",  "西日暮里"],
  ["./voiceroid_生成音源/bound/uguisudani.mp3",  "鶯谷"],
  ["./voiceroid_生成音源/bound/okachimachi.mp3",  "御徒町"],
  ["./voiceroid_生成音源/bound/kanda.mp3",  "神田"],
  ["./voiceroid_生成音源/bound/yurakucho.mp3",  "有楽町"],
  ["./voiceroid_生成音源/bound/hamamatsucho.mp3",  "浜松町"],
  ["./voiceroid_生成音源/bound/tamachi.mp3",  "田町"],
  ["./voiceroid_生成音源/bound/taka_baba.mp3",  "高田馬場"],
  ["./voiceroid_生成音源/bound/koenji.mp3",  "高円寺"],
  ["./voiceroid_生成音源/bound/asagaya.mp3",  "阿佐ヶ谷"],
  ["./voiceroid_生成音源/bound/ogikubo.mp3",  "荻窪"],
  ["./voiceroid_生成音源/bound/nisi_ogikubo.mp3",  "西荻窪"],
  ["./voiceroid_生成音源/bound/kichijoji.mp3",  "吉祥寺"],
  ["./voiceroid_生成音源/bound/east_koganei.mp3",  "東小金井"],
  // ["./voiceroid_生成音源/bound/.mp3",  ""],
  // ["./voiceroid_生成音源/bound/.mp3",  ""],
  // ["./voiceroid_生成音源/bound/.mp3",  ""],
  // ["./voiceroid_生成音源/bound/.mp3",  ""],
  // ["./voiceroid_生成音源/bound/.mp3",  ""],
  // ["./voiceroid_生成音源/bound/.mp3",  ""],
]

for (d = 0; d < buund_for.length; d++) {
  $("#destination").append($("<option>").val(d).text(buund_for[d][1]));
  $("#destination_2").append($("<option>").val(d).text(buund_for[d][1]));
  $("#stop_sta").append($("<option>").val(d).text(buund_for[d][1]));
}
// 行先_接近用
let bound_ga = [
  ["./voiceroid_生成音源/bound/ga/akabane.mp3",  "赤羽行きが"],
  ["./voiceroid_生成音源/bound/ga/atami.mp3",  "熱海行きが"],
  ["./voiceroid_生成音源/bound/ga/fukaya.mp3",  "深谷行きが"],
  ["./voiceroid_生成音源/bound/ga/hiratsuka.mp3",  "平塚行きが"],
  ["./voiceroid_生成音源/bound/ga/honjo.mp3",  "本庄行きが"],
  ["./voiceroid_生成音源/bound/ga/ikebukuro.mp3",  "池袋行きが"],
  ["./voiceroid_生成音源/bound/ga/ito.mp3",  "伊東行きが"],
  ["./voiceroid_生成音源/bound/ga/kiryu.mp3",  "桐生行きが"],
  ["./voiceroid_生成音源/bound/ga/koga.mp3",  "古河行きが"],
  ["./voiceroid_生成音源/bound/ga/koganei.mp3",  "小金井行きが"],
  ["./voiceroid_生成音源/bound/ga/komagawa.mp3",  "高麗川行きが"],
  ["./voiceroid_生成音源/bound/ga/kawagoe.mp3",  "川越行きが"],
  ["./voiceroid_生成音源/bound/ga/kuroiso.mp3",  "黒磯行きが"],
  ["./voiceroid_生成音源/bound/ga/kozu.mp3",  "国府津行きが"],
  ["./voiceroid_生成音源/bound/ga/makuhari.mp3",  "幕張行きが"],
  ["./voiceroid_生成音源/bound/ga/minakami.mp3",  "水上行きが"],
  ["./voiceroid_生成音源/bound/ga/mishima.mp3",  "三島行きが"],
  ["./voiceroid_生成音源/bound/ga/mitaka.mp3",  "三鷹行きが"],
  ["./voiceroid_生成音源/bound/ga/musashiurawa.mp3",  "武蔵浦和行きが"],
  ["./voiceroid_生成音源/bound/ga/nakano.mp3",  "中野行きが"],
  ["./voiceroid_生成音源/bound/ga/numadu.mp3",  "沼津行きが"],
  ["./voiceroid_生成音源/bound/ga/numata.mp3",  "沼田行きが"],
  ["./voiceroid_生成音源/bound/ga/ochanomizu.mp3",  "御茶ノ水行きが"],
  ["./voiceroid_生成音源/bound/ga/odawara.mp3",  "小田原行きが"],
  ["./voiceroid_生成音源/bound/ga/ofuna.mp3",  "大船行きが"],
  ["./voiceroid_生成音源/bound/ga/omiya.mp3",  "大宮行きが"],
  ["./voiceroid_生成音源/bound/ga/osaki.mp3",  "大崎行きが"],
  ["./voiceroid_生成音源/bound/ga/shibukawa.mp3",  "渋川行きが"],
  ["./voiceroid_生成音源/bound/ga/shin-maebashi.mp3",  "新前橋行きが"],
  ["./voiceroid_生成音源/bound/ga/shinagawa.mp3",  "品川行きが"],
  ["./voiceroid_生成音源/bound/ga/shinkiba.mp3",  "新木場行きが"],
  ["./voiceroid_生成音源/bound/ga/takasaki.mp3",  "高崎行きが"],
  ["./voiceroid_生成音源/bound/ga/tokyo.mp3",  "東京行きが"],
  ["./voiceroid_生成音源/bound/ga/ueno.mp3",  "上野行きが"],
  ["./voiceroid_生成音源/bound/ga/utsunomiya.mp3",  "宇都宮行きが"],
  ["./voiceroid_生成音源/bound/ga/yokokawa.mp3",  "横川行きが"],
  ["./voiceroid_生成音源/bound/ga/yokokoku.mp3",  "羽沢横浜国大行きが"],
  ["./voiceroid_生成音源/bound/ga/matsudo.mp3",  "松戸行きが"],
  ["./voiceroid_生成音源/bound/ga/kashiwa.mp3",  "柏行きが"],
  ["./voiceroid_生成音源/bound/ga/abiko.mp3",  "我孫子行きが"],
  ["./voiceroid_生成音源/bound/ga/toride.mp3",  "取手行きが"],
  ["./voiceroid_生成音源/bound/ga/tsuchiura.mp3",  "土浦行きが"],
  ["./voiceroid_生成音源/bound/ga/tomobe.mp3",  "友部行きが"],
  ["./voiceroid_生成音源/bound/ga/mito.mp3",  "水戸行きが"],
  ["./voiceroid_生成音源/bound/ga/katsuta.mp3",  "勝田行きが"],
  ["./voiceroid_生成音源/bound/ga/hitachi.mp3",  "日立行きが"],
  ["./voiceroid_生成音源/bound/ga/takahagi.mp3",  "高萩行きが"],
  ["./voiceroid_生成音源/bound/ga/otsuko.mp3",  "大津港行きが"],
  ["./voiceroid_生成音源/bound/ga/hitachi_daigo.mp3",  "常陸大子行きが"],
  ["./voiceroid_生成音源/bound/ga/soga.mp3",  "蘇我行きが"],
  ["./voiceroid_生成音源/bound/ga/kaihin_makuhari.mp3",  "海浜幕張行きが"],
  ["./voiceroid_生成音源/bound/ga/shin_narashino.mp3",  "新習志野行きが"],
  ["./voiceroid_生成音源/bound/ga/south_funabashi.mp3",  "南船橋行きが"],
  ["./voiceroid_生成音源/bound/ga/west_funabashi.mp3",  "西船橋行きが"],
  ["./voiceroid_生成音源/bound/ga/yamate_shibuya.mp3",  "渋谷方面行きが"],
  ["./voiceroid_生成音源/bound/ga/yamate_sjk.mp3",  "新宿方面行きが"],
  ["./voiceroid_生成音源/bound/ga/yamate_ikb.mp3",  "池袋方面行きが"],
  ["./voiceroid_生成音源/bound/ga/yamate_npp.mp3",  "日暮里方面行きが"],
  ["./voiceroid_生成音源/bound/ga/yamate_uen.mp3",  "上野方面行きが"],
  ["./voiceroid_生成音源/bound/ga/yamate_akb.mp3",  "秋葉原方面行きが"],
  ["./voiceroid_生成音源/bound/ga/yamate_tokyo.mp3",  "東京方面行きが"],
  ["./voiceroid_生成音源/bound/ga/yamate_sng.mp3",  "品川方面行きが"],
  ["./voiceroid_生成音源/bound/ga/kagohara.mp3",  "籠原行きが"],
  ["./voiceroid_生成音源/bound/ga/fuchu_honmachi.mp3",  "府中本町行きが"],
  ["./voiceroid_生成音源/bound/ga/east_tokorozawa.mp3",  "東所沢行きが"],
  ["./voiceroid_生成音源/bound/ga/yoshikawa_mi.mp3",  "吉川美南行きが"],
  ["./voiceroid_生成音源/bound/ga/mi_koshigaya.mp3",  "南越谷行きが"],
  ["./voiceroid_生成音源/bound/ga/mi_urawa.mp3",  "南浦和行きが"],
  ["./voiceroid_生成音源/bound/ga/east_jujo.mp3",  "東十条行きが"],
  ["./voiceroid_生成音源/bound/ga/kamata.mp3",  "蒲田行きが"],
  ["./voiceroid_生成音源/bound/ga/tsurumi.mp3",  "鶴見行きが"],
  ["./voiceroid_生成音源/bound/ga/east_kanagawa.mp3",  "東神奈川行きが"],
  ["./voiceroid_生成音源/bound/ga/sakuragicho.mp3",  "桜木町行きが"],
  ["./voiceroid_生成音源/bound/ga/isogo.mp3",  "磯子行きが"],
  ["./voiceroid_生成音源/bound/ga/kitasenju.mp3",  "北千住行きが"],
  ["./voiceroid_生成音源/bound/ga/yoyoue.mp3",  "代々木上原行きが"],
  ["./voiceroid_生成音源/bound/ga/zushi.mp3",  "逗子行きが"],
  ["./voiceroid_生成音源/bound/ga/yokosuka.mp3",  "横須賀行きが"],
  ["./voiceroid_生成音源/bound/ga/kurihama.mp3",  "久里浜行きが"],
  ["./voiceroid_生成音源/bound/ga/ryogoku.mp3",  "両国行きが"],
  ["./voiceroid_生成音源/bound/ga/tsudanuma.mp3",  "津田沼行きが"],
  ["./voiceroid_生成音源/bound/ga/mobara.mp3",  "茂原行きが"],
  ["./voiceroid_生成音源/bound/ga/honda.mp3",  "誉田行きが"],
  ["./voiceroid_生成音源/bound/ga/k_ichinomiya.mp3",  "上総一ノ宮行きが"],
  ["./voiceroid_生成音源/bound/ga/katsura.mp3",  "勝浦行きが"],
  ["./voiceroid_生成音源/bound/ga/naruto.mp3",  "成東行きが"],
  ["./voiceroid_生成音源/bound/ga/togane.mp3",  "東金行きが"],
  ["./voiceroid_生成音源/bound/ga/awa_km.mp3",  "安房鴨川行きが"],
  ["./voiceroid_生成音源/bound/ga/kimitsu.mp3",  "君津行きが"],
  ["./voiceroid_生成音源/bound/ga/kisarazu.mp3",  "木更津行きが"],
  // ["./voiceroid_生成音源/bound/ga/tateyama.mp3",  "館山行きが"],
  ["./voiceroid_生成音源/bound/ga/sakura.mp3",  "佐倉行きが"],
  ["./voiceroid_生成音源/bound/ga/choshi.mp3",  "銚子行きが"],
  ["./voiceroid_生成音源/bound/ga/narita.mp3",  "成田行きが"],
  ["./voiceroid_生成音源/bound/ga/narita_air.mp3",  "成田空港行きが"],
  ["./voiceroid_生成音源/bound/ga/kashimajingu.mp3",  "鹿島神宮行きが"],
  ["./voiceroid_生成音源/bound/ga/iwaki.mp3",  "いわき行きが"],
  ["./voiceroid_生成音源/bound/ga/chiba.mp3",  "千葉行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  
]

let atos_melo_d = [
  ["./voiceroid_生成音源/arriv_melo.mp3", "接近メロディ"],
  // ["./voiceroid_生成音源/接近メロディ_2.mp3", "接近メロディ_2"],
  // ["./voiceroid_生成音源/接近メロディ_3.mp3", "接近メロディ_3"],
  // ["./voiceroid_生成音源/接近メロディ_4.mp3", "接近メロディ_4"],
  // [""]
]

// textareaサイズ初期設定
$("#all_parts").width(321);
$("#all_parts").height(196);

// 完全手動で音源を選択時に、選択欄に音源のパーツを追加してあげる
let atos =  atos_cross.concat(train_type, train_line, bansen_num, buund_for, bound_ga, cars, atos_melo_d, train_name, no);

for (d = 0; d < atos.length; d++) {
  $("#all_parts").append($("<option>").text(atos[d][1]));
}