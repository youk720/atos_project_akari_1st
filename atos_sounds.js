// for文回し用
let d;
// 放送雑種パーツ
let atos_cross = [
  ["./voiceroid_生成音源/door_close.mp3", "ドアが閉まります"],
  ["./voiceroid_生成音源/door_close_2.mp3", "ドアーが閉まります"],
  ["./voiceroid_生成音源/gochui.mp3", "ご注意ください"],
  ["./voiceroid_生成音源/honjitsumo.mp3", "本日も、ご利用いただき、ありがとうございます"],
  ["./voiceroid_生成音源/ohayou.mp3", "おはようございます"],
  ["./voiceroid_生成音源/kondono.mp3", "今度の"],
  ["./voiceroid_生成音源/resyaha.mp3", "列車は"],
  ["./voiceroid_生成音源/hatsu.mp3", "発"],
  ["./voiceroid_生成音源/chokutsu.mp3", "直通"],
  ["./voiceroid_生成音源/resyaga.mp3", "列車が"],
  ["./voiceroid_生成音源/densyaha.mp3", "電車は"],
  ["./voiceroid_生成音源/densyaga.mp3", "電車が"],
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
  ["./voiceroid_生成音源/abunai_sen.mp3", "危ないですから、黄色い線まで、お下がりください", "黄色い線"],
  ["./voiceroid_生成音源/tenji.mp3", "危ないですから、黄色い点字ブロックまで、お下がりください", "点字ブロック"],
  ["./voiceroid_生成音源/kiroisen_sagate.mp3", "黄色い線まで、下がってお待ちください", "黄色い線:房総型"],
  ["./voiceroid_生成音源/tenji_boso.mp3", "黄色い点字ブロックまで、下がってお待ちください", "点字:房総型"],
  ["./voiceroid_生成音源/kiken_sen.mp3", "危険ですから、黄色い線まで、お下がりください", "危険線"],
  ["./voiceroid_生成音源/hakusen.mp3", "白線の内側で、お待ちください", "白線まで"],
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
  ["./voiceroid_生成音源/chodo.mp3", "ちょうど"],
  ["./voiceroid_生成音源/hatsu.mp3", "発"],
  ["./voiceroid_生成音源/futsu_syaha.mp3", "普通車は"],
  ["./voiceroid_生成音源/green_ha.mp3", "グリーン車は"],
  ["./voiceroid_生成音源/ashimoto.mp3", "足元"],
  ["./voiceroid_生成音源/ashimoto_no.mp3", "足元の"],
  ["./voiceroid_生成音源/josyaguchi.mp3", "乗車口"],
  ["./voiceroid_生成音源/ao_no.mp3", "青色の"],
  ["./voiceroid_生成音源/ao.mp3", "青色"],
  ["./voiceroid_生成音源/ao2.mp3", "青い"],
  ["./voiceroid_生成音源/midori_no.mp3", "緑色の"],
  ["./voiceroid_生成音源/midori.mp3", "緑色"],
  ["./voiceroid_生成音源/orenge_no.mp3", "オレンジ色の"],
  ["./voiceroid_生成音源/orenge.mp3", "オレンジ色"],
  ["./voiceroid_生成音源/red_no.mp3", "赤色の"],
  ["./voiceroid_生成音源/red.mp3", "赤色"],
  ["./voiceroid_生成音源/red2.mp3", "赤い"],
  ["./voiceroid_生成音源/yello.mp3", "黄色い"],
  ["./voiceroid_生成音源/yello_no.mp3", "黄色の"],
  ["./voiceroid_生成音源/w_blue.mp3", "水色"],
  ["./voiceroid_生成音源/w_blue_no.mp3", "水色の"],
  ["./voiceroid_生成音源/karano.mp3", "からの"],
  ["./voiceroid_生成音源/madenokakuekito.mp3", "までの各駅と"],
  ["./voiceroid_生成音源/karanokakekiniteisya.mp3", "から先の各駅に停車します"],
  ["./voiceroid_生成音源/last_car.mp3", "一番後ろが"],
  ["./voiceroid_生成音源/gojosyaniha.mp3", "ご乗車には"],
  ["./voiceroid_生成音源/green_tick_ga.mp3", "グリーン券が"],
  ["./voiceroid_生成音源/josyaken_hokani.mp3", "乗車券の他に"],
  ["./voiceroid_生成音源/ltd_ticketga.mp3", "特急券が"],
  ["./voiceroid_生成音源/rev_tick_ga.mp3", "指定券が"],
  ["./voiceroid_生成音源/need_hituyoudesu.mp3", "必要です"],
  ["./voiceroid_生成音源/niwa.mp3", "には"],
  ["./voiceroid_生成音源/no_junde.mp3", "の順で"],
  ["./voiceroid_生成音源/no_stop.mp3", "停車いたしません"],
  ["./voiceroid_生成音源/stop_2.mp3", "途中の停車駅は"],
  ["./voiceroid_生成音源/teisya.mp3", "停車します"],
  ["./voiceroid_生成音源/tomarimasu.mp3", "止まります"],
  ["./voiceroid_生成音源/homen_n.mp3", "方面にはまいりません"],
  ["./voiceroid_生成音源/next_ha.mp3", "次は"],
  ["./voiceroid_生成音源/made.mp3", "まで"],
  ["./voiceroid_生成音源/kakuekini.mp3", "各駅に停車します"],
  ["./voiceroid_生成音源/4car_to_5car.mp3", "4号車と5号車で"],
  ["./voiceroid_生成音源/kkkm.mp3", "駆け込み乗車は"],
  ["./voiceroid_生成音源/murinz.mp3", "無理なご乗車は"],
  ["./voiceroid_生成音源/oyame.mp3", "おやめください"],
  ["./voiceroid_生成音源/wa.mp3", "は"],
  ["./voiceroid_生成音源/de.mp3", "で"],
  ["./voiceroid_生成音源/no.mp3", "の"],
  ["./voiceroid_生成音源/homen_wa.mp3", "方面は"],
  ["./voiceroid_生成音源/trans.mp3", "お乗り換えです"],
  ["./voiceroid_生成音源/mawari.mp3", "周り"],
  ["./voiceroid_生成音源/kara.mp3", "から"],
  ["./voiceroid_生成音源/onrimac.mp3", "お乗り間違いの無いように"],
  ["./voiceroid_生成音源/onoriokure.mp3", "お乗り遅れの無いように"],
  ["./voiceroid_生成音源/passencg_wa.mp3", "一般のお客様は"],
  ["./voiceroid_生成音源/toekikaraha.mp3", "当駅からは"],
  ["./voiceroid_生成音源/not_take_2.mp3", "ご乗車になれません"],
  ["./voiceroid_生成音源/buton_door.mp3", "半自動案内1"],
  ["./voiceroid_生成音源/buton_door2.mp3", "半自動案内2"],
  ["./voiceroid_生成音源/go.mp3", "号"],
  ["./voiceroid_生成音源/last.mp3", "最終です"],
  ["./voiceroid_生成音源/last_2.mp3", "最終"],
  ["./voiceroid_生成音源/renraku.mp3", "連絡します"],
  ["./voiceroid_生成音源/cars/doors/1.mp3", "1つドア"],
  ["./voiceroid_生成音源/cars/doors/2.mp3", "2つドア"],
  ["./voiceroid_生成音源/cars/doors/3.mp3", "3つドア"],
  ["./voiceroid_生成音源/cars/doors/4.mp3", "4つドア"],
  [],
  ["./voiceroid_生成音源/next_res.mp3", "次の列車を"],
  ["./voiceroid_生成音源/next_den.mp3", "次の電車を"],
  ["./voiceroid_生成音源/goriyo.mp3", "ご利用ください"],
  ["./voiceroid_生成音源/ttm_seiretu.mp3", "ただいま整列乗車をお願い"],
  ["./voiceroid_生成音源/seretu_ichini.mp3", "整列位置に"],
  ["./voiceroid_生成音源/josyaguchi_ni.mp3", "乗車口に"],
  ["./voiceroid_生成音源/josyaguchi_ban_de.mp3", "乗車口案内板で"],
  ["./voiceroid_生成音源/josyaguchi_ban.mp3", "乗車口案内板"],
  ["./voiceroid_生成音源/home_door_mae_ichi.mp3", "ホームドア前の整列位置に"],
  ["./voiceroid_生成音源/zujo_no.mp3", "頭上の"],
  ["./voiceroid_生成音源/nokisita.mp3", "軒下の"],
  ["./voiceroid_生成音源/2retu.mp3", "2列で"],
  ["./voiceroid_生成音源/3retu.mp3", "3列で"],
  ["./voiceroid_生成音源/4retu.mp3", "4列で"],
  ["./voiceroid_生成音源/reserved_seat.mp3", "指定席"],
  ["./voiceroid_生成音源/reserved_ga.mp3", "指定席券が"],
  ["./voiceroid_生成音源/exp_tic_ga.mp3", "急行券が"],
  ["./voiceroid_生成音源/besides_suica.mp3", "乗車券・Suicaの他に"],
  ["./voiceroid_生成音源/all_reserved.mp3", "全車指定席です"],
  ["./voiceroid_生成音源/yukito_na.mp3", "行きとなっております"],
  ["./voiceroid_生成音源/yukiha.mp3", "行きは"],
  // ["./voiceroid_生成音源/.mp3", "ただいま"],
  // ["./voiceroid_生成音源/.mp3", "約"],
  // ["./voiceroid_生成音源/.mp3", "大幅に遅れております"],
  ["./voiceroid_生成音源/okure.mp3", "遅れになっております"],
  ["./voiceroid_生成音源/res_home_hiroku.mp3", "列車とホームの間は広く開いております"],
  ["./voiceroid_生成音源/den_home_hiroku.mp3", "電車とホームの間は広く開いております"],
  ["./voiceroid_生成音源/ashimoto_ni.mp3", "足元に"],
  ["./voiceroid_生成音源/honjitu_dake.mp3", "本日に限りまして"],
  ["./voiceroid_生成音源/yukisakiga.mp3", "行先が"],
  ["./voiceroid_生成音源/hodo.mp3", "程"],
  ["./voiceroid_生成音源/res_wo.mp3", "列車を"],
  ["./voiceroid_生成音源/den_wo.mp3", "電車を"],
  ["./voiceroid_生成音源/res_desu.mp3", "列車です"],
  ["./voiceroid_生成音源/den_desu.mp3", "電車です"],
  ["./voiceroid_生成音源/home_no.mp3", "ホームの"],
  ["./voiceroid_生成音源/nakahodo.mp3", "中程"],
  ["./voiceroid_生成音源/nakahodo_ni.mp3", "中程に"],
  ["./voiceroid_生成音源/yoriniha_tomaranai.mp3", "寄りには止まりません"],
  ["./voiceroid_生成音源/end_service.mp3", "運転を終了しております"],
  ["./voiceroid_生成音源/no_green.mp3", "グリーン車はついておりません"],
  ["./voiceroid_生成音源/keiyu.mp3", "経由"],
  ["./voiceroid_生成音源/arriving.mp3", "到着します"],
  ["./voiceroid_生成音源/hassya.mp3", "発車します"],
  ["./voiceroid_生成音源/densya.mp3", "電車"],
  ["./voiceroid_生成音源/use.mp3", "ご利用いただき"],
  ["./voiceroid_生成音源/jiyuha.mp3", "自由席は"],
  ["./voiceroid_生成音源/unten.mp3", "運転します"],
  ["./voiceroid_生成音源/sleep_to.mp3", "寝台券と"],
  ["./voiceroid_生成音源/swallo.mp3", "スワローサービス"],
  ["./voiceroid_生成音源/jiyu_deha.mp3", "自由席特急券不可"],
  ["./voiceroid_生成音源/hashira.mp3", "柱番号"],
  ["./voiceroid_生成音源/4ban_5ban.mp3", "4番と5番で"],
  ["./voiceroid_生成音源/8ban_9ban.mp3", "8番と9番で"],
  ["./voiceroid_生成音源/last_resga.mp3", "最終列車が"],
  ["./voiceroid_生成音源/last_denga.mp3", "最終電車が"],
  ["./voiceroid_生成音源/rpden_ga.mp3", "快速電車が"],
  ["./voiceroid_生成音源/rpd_ga.mp3", "快速が"],
  ["./voiceroid_生成音源/local_ga.mp3", "各駅停車が"],
  ["./voiceroid_生成音源/local2_ga.mp3", "普通列車が"],
  ["./voiceroid_生成音源/waku.mp3", "枠"],
  ["./voiceroid_生成音源/syo_stop.mp3", "少々停車します"],
  ["./voiceroid_生成音源/machiawase_ntm.mp3", "待ち合わせのため"],
  ["./voiceroid_生成音源/tuka_machi_ntm.mp3", "通過待ちのため"],
  ["./voiceroid_生成音源/home_door_attenchen.mp3", "ホームドアから、手や顔を出したり、もたれかかるのは、おやめください"],
  ["./voiceroid_生成音源/jre.mp3", "本日も、JR東をご利用いただき、ありがとうございます"],
  // ["./voiceroid_生成音源/.mp3", ""],
  // ["./voiceroid_生成音源/.mp3", ""],
  // ["./voiceroid_生成音源/.mp3", ""],
  ["./voiceroid_生成音源/thank_take2.mp3", "終着放送"],
  ["./voiceroid_生成音源/thank_take.mp3", "ご乗車、ありがとうございます"],

  ["./voiceroid_生成音源/bound/shinbashi.mp3",  "新橋"],
  ["./voiceroid_生成音源/bound/nisi_nippori.mp3",  "西日暮里"],
  ["./voiceroid_生成音源/bound/uguisudani.mp3",  "鶯谷"],
  ["./voiceroid_生成音源/bound/okachimachi.mp3",  "御徒町"],
  ["./voiceroid_生成音源/bound/kanda.mp3",  "神田"],
  ["./voiceroid_生成音源/bound/yurakucho.mp3",  "有楽町"],
  ["./voiceroid_生成音源/bound/hamamatsucho.mp3",  "浜松町"],
  ["./voiceroid_生成音源/bound/taka_baba.mp3",  "高田馬場"],
  ["./voiceroid_生成音源/bound/koenji.mp3",  "高円寺"],
  ["./voiceroid_生成音源/bound/asagaya.mp3",  "阿佐ヶ谷"],
  ["./voiceroid_生成音源/bound/ogikubo.mp3",  "荻窪"],
  ["./voiceroid_生成音源/bound/nisi_ogikubo.mp3",  "西荻窪"],
  ["./voiceroid_生成音源/bound/kichijoji.mp3",  "吉祥寺"],
  ["./voiceroid_生成音源/bound/east_koganei.mp3",  "東小金井"],
  ["./voiceroid_生成音源/bound/nishi_oi.mp3",  "西大井"],
  ["./voiceroid_生成音源/bound/musakosu.mp3",  "武蔵小杉"],
  ["./voiceroid_生成音源/bound/s_kawasaki.mp3",  "新川崎"],
  ["./voiceroid_生成音源/bound/hodogaya.mp3",  "保土ヶ谷"],
  ["./voiceroid_生成音源/bound/e_totuka.mp3",  "東戸塚"],
  ["./voiceroid_生成音源/bound/totuka.mp3",  "戸塚"],
  ["./voiceroid_生成音源/bound/k_kamakura.mp3",  "北鎌倉"],
  ["./voiceroid_生成音源/bound/tujido.mp3",  "辻堂"],
  ["./voiceroid_生成音源/long_sta/short/gunma_soja.mp3", "群馬総社"],
  ["./voiceroid_生成音源/long_sta/short/onogami.mp3", "小野上温泉"],
  ["./voiceroid_生成音源/long_sta/short/kawarayu.mp3", "川原湯温泉"],
  ["./voiceroid_生成音源/long_sta/short/k_takasaki.mp3", "北高崎"],
  ["./voiceroid_生成音源/long_sta/short/annaka.mp3", "安中"],
  ["./voiceroid_生成音源/long_sta/short/ino.mp3", "井野"],
  ["./voiceroid_生成音源/long_sta/short/takasaki_ton.mp3", "高崎問屋町"],
  ["./voiceroid_生成音源/long_sta/short/toyocho.mp3", "東洋町"],
]
// 配列内の要素をhtmlのoptionタグで動的出
// 黄色い線他の放送選択
for (d = 31; d < 37; d++) {
  $("#seafty").append($("<option>").val(d).text(atos_cross[d][2]));
}
// 切離/増結等駅指定(当駅)
$("#stop_sta").append($("<option>").val("92_1").text(atos_cross[38][1]));

// 列車種別
let train_type = [
  [],
  ["./voiceroid_生成音源/kind/local_1.mp3", "各駅停車"],
  ["./voiceroid_生成音源/kind/local_2.mp3", "普通"],
  ["./voiceroid_生成音源/kind/rapid.mp3", "快速"],
  ["./voiceroid_生成音源/kind/chuou_tokkai.mp3", "中央特快"],
  ["./voiceroid_生成音源/kind/ome_tokkai.mp3", "青梅特快"],
  ["./voiceroid_生成音源/kind/comtokkai.mp3", "通勤特快"],
  ["./voiceroid_生成音源/kind/comrip.mp3", "通勤快速"],
  ["./voiceroid_生成音源/kind/tokkai.mp3", "特別快速"],
  ["./voiceroid_生成音源/kind/extra.mp3", "臨時"],
  ["./voiceroid_生成音源/kind/group.mp3", "団体"],
  ["./voiceroid_生成音源/kind/kaiso.mp3", "回送"],
  ["./voiceroid_生成音源/kind/freight.mp3", "貨物"],
  ["./voiceroid_生成音源/kind/semi_rpd.mp3", "準急"],
  ["./voiceroid_生成音源/kind/rpd_exp.mp3", "快速急行"],
  ["./voiceroid_生成音源/kind/exp.mp3", "急行"],
  ["./voiceroid_生成音源/kind/ltd_exp.mp3", "特急"],
  ["./voiceroid_生成音源/kind/ltd_exp2.mp3", "特別急行"],
  ["./voiceroid_生成音源/kind/sleep_lt_ex.mp3", "寝台特急"],
  ["./voiceroid_生成音源/kind/horide.mp3", "ホリデー快速"],
  ["./voiceroid_生成音源/kind/kaitoku.mp3", "快特"],
  ["./voiceroid_生成音源/kind/ltdex_access.mp3", "アクセス特急"],
  ["./voiceroid_生成音源/kind/kaitoku_air.mp3", "エアポート快特"],
  ["./voiceroid_生成音源/kind/ex_air.mp3", "エアポート急行"],
  ["./voiceroid_生成音源/kind/com_ltd.mp3", "通勤特急"],
  // ["./voiceroid_生成音源/kind/.mp3", ""],
]
// 配列内の要素をhtmlのoptionタグへ自動出力
for (d = 0; d < train_type.length; d++) {
   $("#kind").append($("<option>").val(d).text(train_type[d][1]));
   $("#kind_2").append($("<option>").val(d).text(train_type[d][1]));
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
  ["./voiceroid_生成音源/cars/1ryo_ha.mp3", "1両は"],
  ["./voiceroid_生成音源/cars/2ryo_ha.mp3", "2両は"],
  ["./voiceroid_生成音源/cars/3ryo_ha.mp3", "3両は"],
  ["./voiceroid_生成音源/cars/4ryo_ha.mp3", "4両は"],
  ["./voiceroid_生成音源/cars/5ryo_ha.mp3", "5両は"],
  ["./voiceroid_生成音源/cars/6ryo_ha.mp3", "6両は"],
  ["./voiceroid_生成音源/cars/7ryo_ha.mp3", "7両は"],
  ["./voiceroid_生成音源/cars/8ryo_ha.mp3", "8両は"],
  ["./voiceroid_生成音源/cars/9ryo_ha.mp3", "9両は"],
  ["./voiceroid_生成音源/cars/10ryo_ha.mp3", "10両は"],
  ["./voiceroid_生成音源/cars/11ryo_ha.mp3", "11両は"],
  ["./voiceroid_生成音源/cars/12ryo_ha.mp3", "12両は"],
  ["./voiceroid_生成音源/cars/14ryo_ha.mp3", "14両は"],
  ["./voiceroid_生成音源/cars/15ryo_ha.mp3", "15両は"],
  ["./voiceroid_生成音源/cars/ryo_d/2ryo_d.mp3", "2両です"],
  ["./voiceroid_生成音源/cars/ryo_d/3ryo_d.mp3", "3両です"],
  ["./voiceroid_生成音源/cars/ryo_d/4ryo_d.mp3", "4両です"],
  ["./voiceroid_生成音源/cars/ryo_d/5ryo_d.mp3", "5両です"],
  ["./voiceroid_生成音源/cars/ryo_d/6ryo_d.mp3", "6両です"],
  ["./voiceroid_生成音源/cars/ryo_d/7ryo_d.mp3", "7両です"],
  ["./voiceroid_生成音源/cars/ryo_d/8ryo_d.mp3", "8両です"],
  ["./voiceroid_生成音源/cars/ryo_d/9ryo_d.mp3", "9両です"],
  ["./voiceroid_生成音源/cars/ryo_d/10ryo_d.mp3", "10両です"],
  ["./voiceroid_生成音源/cars/ryo_d/11ryo_d.mp3", "11両です"],
  ["./voiceroid_生成音源/cars/ryo_d/12ryo_d.mp3", "12両です"],
  ["./voiceroid_生成音源/cars/ryo_d/14ryo_d.mp3", "14両です"],
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
  ["./voiceroid_生成音源/cars/gosya/1kara.mp3", "1号車から"],
  ["./voiceroid_生成音源/cars/gosya/2kara.mp3", "2号車から"],
  ["./voiceroid_生成音源/cars/gosya/3kara.mp3", "3号車から"],
  ["./voiceroid_生成音源/cars/gosya/4kara.mp3", "4号車から"],
  ["./voiceroid_生成音源/cars/gosya/5kara.mp3", "5号車から"],
  ["./voiceroid_生成音源/cars/gosya/6kara.mp3", "6号車から"],
  ["./voiceroid_生成音源/cars/gosya/7kara.mp3", "7号車から"],
  ["./voiceroid_生成音源/cars/gosya/8kara.mp3", "8号車から"],
  ["./voiceroid_生成音源/cars/gosya/9kara.mp3", "9号車から"],
  ["./voiceroid_生成音源/cars/gosya/10kara.mp3", "10号車から"],
  ["./voiceroid_生成音源/cars/gosya/11kara.mp3", "11号車から"],
  ["./voiceroid_生成音源/cars/gosya/12kara.mp3", "12号車から"],
  ["./voiceroid_生成音源/cars/gosya/13kara.mp3", "13号車から"],
  ["./voiceroid_生成音源/cars/gosya/14kara.mp3", "14号車から"],
  ["./voiceroid_生成音源/cars/gosya/15kara.mp3", "15号車から"],
  ["./voiceroid_生成音源/cars/gosya/1to.mp3", "1号車と"],
  ["./voiceroid_生成音源/cars/gosya/2to.mp3", "2号車と"],
  ["./voiceroid_生成音源/cars/gosya/3to.mp3", "3号車と"],
  ["./voiceroid_生成音源/cars/gosya/4to.mp3", "4号車と"],
  ["./voiceroid_生成音源/cars/gosya/5to.mp3", "5号車と"],
  ["./voiceroid_生成音源/cars/gosya/6to.mp3", "6号車と"],
  ["./voiceroid_生成音源/cars/gosya/7to.mp3", "7号車と"],
  ["./voiceroid_生成音源/cars/gosya/8to.mp3", "8号車と"],
  ["./voiceroid_生成音源/cars/gosya/9to.mp3", "9号車と"],
  ["./voiceroid_生成音源/cars/gosya/10to.mp3", "10号車と"],
  ["./voiceroid_生成音源/cars/gosya/11to.mp3", "11号車と"],
  ["./voiceroid_生成音源/cars/gosya/12to.mp3", "12号車と"],
  ["./voiceroid_生成音源/cars/gosya/13to.mp3", "13号車と"],
  ["./voiceroid_生成音源/cars/gosya/14to.mp3", "14号車と"],
  ["./voiceroid_生成音源/cars/gosya/15to.mp3", "15号車と"],
  ["./voiceroid_生成音源/cars/gosya/1de.mp3", "1号車で"],
  ["./voiceroid_生成音源/cars/gosya/2de.mp3", "2号車で"],
  ["./voiceroid_生成音源/cars/gosya/3de.mp3", "3号車で"],
  ["./voiceroid_生成音源/cars/gosya/4de.mp3", "4号車で"],
  ["./voiceroid_生成音源/cars/gosya/5de.mp3", "5号車で"],
  ["./voiceroid_生成音源/cars/gosya/6de.mp3", "6号車で"],
  ["./voiceroid_生成音源/cars/gosya/7de.mp3", "7号車で"],
  ["./voiceroid_生成音源/cars/gosya/8de.mp3", "8号車で"],
  ["./voiceroid_生成音源/cars/gosya/9de.mp3", "9号車で"],
  ["./voiceroid_生成音源/cars/gosya/10de.mp3", "10号車で"],
  ["./voiceroid_生成音源/cars/gosya/11de.mp3", "11号車で"],
  ["./voiceroid_生成音源/cars/gosya/12de.mp3", "12号車で"],
  ["./voiceroid_生成音源/cars/gosya/13de.mp3", "13号車で"],
  ["./voiceroid_生成音源/cars/gosya/14de.mp3", "14号車で"],
  ["./voiceroid_生成音源/cars/gosya/15de.mp3", "15号車で"],
  ["./voiceroid_生成音源/cars/hn_d/2hn_d.mp3", "2両編成で"],
  ["./voiceroid_生成音源/cars/hn_d/3hn_d.mp3", "3両編成で"],
  ["./voiceroid_生成音源/cars/hn_d/4hn_d.mp3", "4両編成で"],
  ["./voiceroid_生成音源/cars/hn_d/5hn_d.mp3", "5両編成で"],
  ["./voiceroid_生成音源/cars/hn_d/6hn_d.mp3", "6両編成で"],
  ["./voiceroid_生成音源/cars/hn_d/7hn_d.mp3", "7両編成で"],
  ["./voiceroid_生成音源/cars/hn_d/8hn_d.mp3", "8両編成で"],
  ["./voiceroid_生成音源/cars/hn_d/9hn_d.mp3", "9編成で"],
  ["./voiceroid_生成音源/cars/hn_d/10hn_d.mp3", "10両編成で"],
  ["./voiceroid_生成音源/cars/hn_d/11hn_d.mp3", "11両編成で"],
  ["./voiceroid_生成音源/cars/hn_d/12hn_d.mp3", "12両編成で"],
  ["./voiceroid_生成音源/cars/hn_d/15hn_d.mp3", "15両編成で"],
  ["./voiceroid_生成音源/cars/hn_d/hn_d.mp3", "編成で"],
  
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
  ["./voiceroid_生成音源/number/go/2.mp3", "2号"],
  ["./voiceroid_生成音源/number/go/3.mp3", "3号"],
  ["./voiceroid_生成音源/number/go/4.mp3", "4号"],
  ["./voiceroid_生成音源/number/go/5.mp3", "5号"],
  ["./voiceroid_生成音源/number/go/6.mp3", "6号"],
  ["./voiceroid_生成音源/number/go/7.mp3", "7号"],
  ["./voiceroid_生成音源/number/go/8.mp3", "8号"],
  ["./voiceroid_生成音源/number/go/9.mp3", "9号"],
  ["./voiceroid_生成音源/number/go/10.mp3", "10号"],
  ["./voiceroid_生成音源/number/go/20.mp3", "20号"],
  ["./voiceroid_生成音源/number/go/30.mp3", "30号"],
  ["./voiceroid_生成音源/number/go/40.mp3", "40号"],
  ["./voiceroid_生成音源/number/go/50.mp3", "50号"],
  ["./voiceroid_生成音源/number/go/60.mp3", "60号"],
  ["./voiceroid_生成音源/number/go/70.mp3", "70号"],
  ["./voiceroid_生成音源/number/go/80.mp3", "80号"],
  ["./voiceroid_生成音源/number/go/90.mp3", "90号"],
  ["./voiceroid_生成音源/number/go/100.mp3", "100号"],
  ["./voiceroid_生成音源/number/go/200.mp3", "200号"],
  ["./voiceroid_生成音源/number/go/300.mp3", "300号"],
  ["./voiceroid_生成音源/number/10.mp3", "10"],
  ["./voiceroid_生成音源/number/20.mp3", "20"],
  ["./voiceroid_生成音源/number/30.mp3", "30"],
  ["./voiceroid_生成音源/number/40.mp3", "40"],
  ["./voiceroid_生成音源/number/50.mp3", "50"],
  ["./voiceroid_生成音源/number/60.mp3", "60"],
  ["./voiceroid_生成音源/number/70.mp3", "70"],
  ["./voiceroid_生成音源/number/80.mp3", "80"],
  ["./voiceroid_生成音源/number/90.mp3", "90"],
  ["./voiceroid_生成音源/number/100.mp3", "100"],
  ["./voiceroid_生成音源/number/200.mp3", "200"],
  ["./voiceroid_生成音源/number/300.mp3", "300"], 
  ["./voiceroid_生成音源/number/ban/1.mp3", "1番"],
  ["./voiceroid_生成音源/number/ban/2.mp3", "2番"],
  ["./voiceroid_生成音源/number/ban/3.mp3", "3番"],
  ["./voiceroid_生成音源/number/ban/4.mp3", "4番"],
  ["./voiceroid_生成音源/number/ban/5.mp3", "5番"],
  ["./voiceroid_生成音源/number/ban/6.mp3", "6番"],
  ["./voiceroid_生成音源/number/ban/7.mp3", "7番"],
  ["./voiceroid_生成音源/number/ban/8.mp3", "8番"],
  ["./voiceroid_生成音源/number/ban/9.mp3", "9番"],
  ["./voiceroid_生成音源/number/ban/10.mp3", "10番"],
  // ["./voiceroid_生成音源/number/.mp3", ""],
]

$("#train_no_one").append($("<option>").text("0号"));
for (d = 26; d <= 34; d++) {
    $("#train_no_one").append($("<option>").text(no[d][1]));
}
// 号数
for(d=0;d<=9;d++){
  if(d<=3){
    $("#train_no_ten").append($("<option>").text(d));
    $("#train_no_hnd").append($("<option>").text(d));
  }else{
    $("#train_no_ten").append($("<option>").text(d));
  }
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
  ["./voiceroid_生成音源/bound/ga/tateyama.mp3",  "館山行きが"],
  ["./voiceroid_生成音源/bound/ga/sakura.mp3",  "佐倉行きが"],
  ["./voiceroid_生成音源/bound/ga/choshi.mp3",  "銚子行きが"],
  ["./voiceroid_生成音源/bound/ga/narita.mp3",  "成田行きが"],
  ["./voiceroid_生成音源/bound/ga/narita_air.mp3",  "成田空港行きが"],
  ["./voiceroid_生成音源/bound/ga/kashimajingu.mp3",  "鹿島神宮行きが"],
  ["./voiceroid_生成音源/bound/ga/iwaki.mp3",  "いわき行きが"],
  ["./voiceroid_生成音源/bound/ga/chiba.mp3",  "千葉行きが"],
  ["./voiceroid_生成音源/bound/ga/mu_koganei.mp3",  "武蔵小金井行きが"],
  ["./voiceroid_生成音源/bound/ga/tachikawa.mp3",  "立川行きが"],
  ["./voiceroid_生成音源/bound/ga/toyoda.mp3",  "豊田行きが"],
  ["./voiceroid_生成音源/bound/ga/hachioji.mp3",  "八王子行きが"],
  ["./voiceroid_生成音源/bound/ga/takao.mp3",  "高尾行きが"],
  ["./voiceroid_生成音源/bound/ga/otsuki.mp3",  "大月行きが"],
  ["./voiceroid_生成音源/bound/ga/kawaguhiko.mp3",  "河口湖行きが"],
  ["./voiceroid_生成音源/bound/ga/kofu.mp3",  "甲府行きが"],
  ["./voiceroid_生成音源/bound/ga/ryuou.mp3",  "竜王行きが"],
  ["./voiceroid_生成音源/bound/ga/kobuchizawa.mp3",  "小渕沢行きが"],
  ["./voiceroid_生成音源/bound/ga/siojiri.mp3",  "塩尻行きが"],
  ["./voiceroid_生成音源/bound/ga/matsumoto.mp3",  "松本行きが"],
  ["./voiceroid_生成音源/bound/ga/nagano.mp3",  "長野行きが"],
  ["./voiceroid_生成音源/bound/ga/sinano_omachi.mp3",  "信濃大町行きが"],
  ["./voiceroid_生成音源/bound/ga/hakuba.mp3",  "白馬行きが"],
  ["./voiceroid_生成音源/bound/ga/mi_otari.mp3",  "南小谷行きが"],
  ["./voiceroid_生成音源/bound/ga/haijima.mp3",  "拝島行きが"],
  ["./voiceroid_生成音源/bound/ga/ome.mp3",  "青梅行きが"],
  ["./voiceroid_生成音源/bound/ga/okutama.mp3",  "奥多摩行きが"],
  ["./voiceroid_生成音源/bound/ga/mu_itsukaichi.mp3",  "武蔵五日市行きが"],
  ["./voiceroid_生成音源/bound/ga/hakonegasaki.mp3",  "箱根ヶ崎行きが"],
  ["./voiceroid_生成音源/bound/ga/mu_nakahara.mp3",  "武蔵中原行きが"],
  ["./voiceroid_生成音源/bound/ga/noborito.mp3",  "登戸行きが"],
  ["./voiceroid_生成音源/bound/ga/inagi_naganuma.mp3",  "稲城長沼行きが"],
  ["./voiceroid_生成音源/bound/ga/machida.mp3",  "町田行きが"],
  ["./voiceroid_生成音源/bound/ga/hashimoto.mp3",  "橋下行きが"],
  ["./voiceroid_生成音源/bound/ga/ogaki.mp3",  "大垣行きが"],
  ["./voiceroid_生成音源/bound/ga/iz_simoda.mp3",  "伊豆急下田行きが"],
  ["./voiceroid_生成音源/bound/ga/maebashi.mp3",  "前橋行きが"],
  ["./voiceroid_生成音源/bound/ga/shinjuku.mp3",  "新宿行きが"],
  ["./voiceroid_生成音源/bound/ga/nikko.mp3",  "日光行きが"],
  ["./voiceroid_生成音源/bound/ga/syuzenji.mp3",  "修善寺行きが"],
  ["./voiceroid_生成音源/bound/ga/fuji.mp3",  "富士行きが"],
  ["./voiceroid_生成音源/bound/ga/simada.mp3",  "島田行きが"],
  ["./voiceroid_生成音源/bound/ga/hamamatu.mp3",  "浜松行きが"],
  ["./voiceroid_生成音源/bound/ga/toyohasi.mp3",  "豊橋行きが"],
  ["./voiceroid_生成音源/bound/ga/naga_kusatsu.mp3",  "長野原草津口行きが"],
  ["./voiceroid_生成音源/bound/ga/manza_kazawa.mp3",  "万座・鹿沢口行きが"],
//  ["./voiceroid_生成音源/bound/ga/oyama.mp3", "小山行きが"],
  ["./voiceroid_生成音源/bound/ga/yotsukaido.mp3", "四街道行きが"],
  ["./voiceroid_生成音源/bound/ga/sawara.mp3", "佐原行きが"],
  ["./voiceroid_生成音源/bound/ga/anegasaki.mp3", "姉ケ崎行きが"],
  ["./voiceroid_生成音源/bound/ga/chikura.mp3", "千倉行きが"],
  ["./voiceroid_生成音源/bound/ga/oami.mp3", "大網行きが"],
  ["./voiceroid_生成音源/bound/ga/yokoshiba.mp3",  "横芝行きが"],
  ["./voiceroid_生成音源/bound/ga/kanazawa.mp3",  "金沢行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  // ["./voiceroid_生成音源/bound/ga/.mp3",  "行きが"],
  ["./voiceroid_生成音源/bound/ga/sendai_air.mp3",  "仙台空港行きが"],
  ["./voiceroid_生成音源/bound/ga/sendai.mp3",  "仙台行きが"],
  ["./voiceroid_生成音源/bound/ga/sapporo.mp3",  "札幌行きが"],
  ["./voiceroid_生成音源/bound/ga/haranomachi.mp3",  "原ノ町行きが"],
  ["./voiceroid_生成音源/bound/ga/yamashita.mp3",  "山下行きが"],
  ["./voiceroid_生成音源/bound/ga/ayashi.mp3",  "愛子行きが"],
  ["./voiceroid_生成音源/bound/ga/sakunami.mp3",  "作並行きが"],
  ["./voiceroid_生成音源/bound/ga/yamagata.mp3",  "山形行きが"],
  ["./voiceroid_生成音源/bound/ga/ishinomaki.mp3",  "石巻行きが"],
  ["./voiceroid_生成音源/bound/ga/tagajo.mp3",  "多賀城行きが"],
  ["./voiceroid_生成音源/bound/ga/onagawa.mp3",  "女川行きが"],
  ["./voiceroid_生成音源/bound/ga/kogota.mp3",  "小牛田行きが"],
  ["./voiceroid_生成音源/bound/ga/rifu.mp3",  "利府行きが"],
  ["./voiceroid_生成音源/bound/ga/ichinoseki.mp3",  "一ノ関行きが"],
  ["./voiceroid_生成音源/bound/ga/ishikoshi.mp3",  "石越行きが"],
  ["./voiceroid_生成音源/bound/ga/matsushima.mp3",  "松島行きが"],
  ["./voiceroid_生成音源/bound/ga/shiroishi.mp3",  "白石行きが"],
  ["./voiceroid_生成音源/bound/ga/iwanuma.mp3",  "岩沼行きが"],
  ["./voiceroid_生成音源/bound/ga/koriyama.mp3",  "郡山行きが"],
  ["./voiceroid_生成音源/bound/ga/fukushima.mp3",  "福島行きが"],
  ["./voiceroid_生成音源/bound/ga/morioka.mp3",  "盛岡行きが"],
  ["./voiceroid_生成音源/bound/ga/yanagawa.mp3",  "梁川行きが"],
  ["./voiceroid_生成音源/bound/ga/kitakami.mp3",  "北上行きが"],
  ["./voiceroid_生成音源/bound/ga/hachinohe.mp3",  "八戸行きが"],
  ["./voiceroid_生成音源/bound/ga/ninohe.mp3",  "二戸行きが"],
  ["./voiceroid_生成音源/bound/ga/aomori.mp3",  "青森行きが"],
  ["./voiceroid_生成音源/bound/ga/sakata.mp3",  "坂田行きが"],
  ["./voiceroid_生成音源/bound/ga/shinjo.mp3",  "新庄行きが"],
  ["./voiceroid_生成音源/bound/ga/akita.mp3",  "秋田行きが"],
  ["./voiceroid_生成音源/bound/ga/odate.mp3",  "大館行きが"],
  ["./voiceroid_生成音源/bound/ga/hirosaki.mp3",  "弘前行きが"],
  ["./voiceroid_生成音源/bound/ga/kawasaki.mp3",  "川崎行きが"],
  ["./voiceroid_生成音源/bound/ga/ebina.mp3",  "海老名行きが"],
]

// textareaサイズ初期設定
$("#all_parts").width(321);
$("#all_parts").height(196);

// 完全手動で音源を選択時に、選択欄に音源のパーツを追加してあげる
let atos =  atos_cross.concat(train_type, bansen_num, bound_ga, cars, no);

// for (d = 0; d < atos.length; d++) {
//   $("#all_parts").append($("<option>").text(atos[d][1]));
// }