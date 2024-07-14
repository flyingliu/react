!((function (window) {
  const list = ['1000_不.jpg', '1001_欲.jpg', '1002_纷.jpg', '1003_坡.jpg', '1004_儷.jpg', '1005_勉.jpg', '1006_就.jpg', '1007_命.jpg', '1008_亦.jpg', '1009_非.jpg', '100_世.jpg', '1010_理.jpg', '1011_屈.jpg', '1012_朝.jpg', '1013_廷.jpg', '1014_纪.jpg', '1015_纲.jpg', '1016_须.jpg', '1017_共.jpg', '1018_存.jpg', '1019_立.jpg', '101_出.jpg', '1020_遇.jpg', '1021_尔.jpg', '1022_隳.jpg', '1023_坏.jpg', '1024_亦.jpg', '1025_恐.jpg', '1026_及.jpg', '1027_身.jpg', '1028_明.jpg', '1029_天.jpg', '102_功.jpg', '1030_子.jpg', '1031_忽.jpg', '1032_震.jpg', '1033_含.jpg', '1034_怒.jpg', '1035_责.jpg', '1036_縴.jpg', '1037_伦.jpg', '1038_之.jpg', '1039_人.jpg', '103_冠.jpg', '1040_则.jpg', '1041_仆.jpg', '1042_肘.jpg', '1043_将.jpg', '1044_以.jpg', '1045_对.jpg', '104_一.jpg', '105_时.jpg', '106_挫.jpg', '107_思.jpg', '108_明.jpg', '109_跋.jpg', '10_夫.jpg', '110_扈.jpg', '111_之.jpg', '112_师.jpg', '113_坑.jpg', '114_回.jpg', '115_伤.jpg', '116_无.jpg', '117_厌.jpg', '118_请.jpg', '119_故.jpg', '11_检.jpg', '120_得.jpg', '121_身.jpg', '122_画.jpg', '123_凌.jpg', '124_烟.jpg', '125_之.jpg', '126_阁.jpg', '127_名.jpg', '128_藏.jpg', '129_太.jpg', '12_校.jpg', '130_室.jpg', '131_之.jpg', '132_廷.jpg', '133_不.jpg', '134_其.jpg', '135_呼.jpg', '136_足.jpg', '137_畏.jpg', '138_也.jpg', '139_然.jpg', '13_邢.jpg', '140_美.jpg', '141_则.jpg', '142_美.jpg', '143_矣.jpg', '144_然.jpg', '145_而.jpg', '146_终.jpg', '147_之.jpg', '148_始.jpg', '149_难.jpg', '14_部.jpg', '150_故.jpg', '151_旧.jpg', '152_满.jpg', '153_而.jpg', '154_不.jpg', '155_溢.jpg', '156_所.jpg', '157_以.jpg', '158_长.jpg', '159_守.jpg', '15_尚.jpg', '160_富.jpg', '161_也.jpg', '162_高.jpg', '163_而.jpg', '164_不.jpg', '165_危.jpg', '166_所.jpg', '167_以.jpg', '168_长.jpg', '169_守.jpg', '16_书.jpg', '170_贵.jpg', '171_也.jpg', '172_何.jpg', '173_不.jpg', '174_做.jpg', '175_惧.jpg', '176_乎.jpg', '177_书.jpg', '178_旧.jpg', '179_尔.jpg', '17_上.jpg', '180_唯.jpg', '181_弗.jpg', '182_.jpg', '183_天.jpg', '184_下.jpg', '185_莫.jpg', '186_与.jpg', '187_汝.jpg', '188_争.jpg', '189_功.jpg', '18_柱.jpg', '190_尔.jpg', '191_唯.jpg', '192_不.jpg', '193_伐.jpg', '194_天.jpg', '195_下.jpg', '196_莫.jpg', '197_与.jpg', '198_汝.jpg', '199_争.jpg', '19_国.jpg', '1_十.jpg', '200_能.jpg', '201_以.jpg', '202_齐.jpg', '203_桓.jpg', '204_公.jpg', '205_之.jpg', '206_盛.jpg', '207_业.jpg', '208_片.jpg', '209_.jpg', '20_鲁.jpg', '210_勤.jpg', '211_王.jpg', '212_则.jpg', '213_九.jpg', '214_合.jpg', '215_诸.jpg', '216_侯.jpg', '217_一.jpg', '218_트.jpg', '219_天.jpg', '21_郡.jpg', '220_下.jpg', '221_葵.jpg', '222_丘.jpg', '223_之.jpg', '224_会.jpg', '225_微.jpg', '226_有.jpg', '227_振.jpg', '228_.jpg', '229_而.jpg', '22_开.jpg', '230_叛.jpg', '231_者.jpg', '232_九.jpg', '233_国.jpg', '234_故.jpg', '235_旧.jpg', '236_行.jpg', '237_百.jpg', '238_里.jpg', '239_者.jpg', '23_国.jpg', '240_半.jpg', '241_九.jpg', '242_十.jpg', '243_里.jpg', '244_.jpg', '245_晚.jpg', '246_节.jpg', '247_未.jpg', '248_路.jpg', '249_之.jpg', '24_公.jpg', '250_难.jpg', '251_也.jpg', '252_从.jpg', '253_占.jpg', '254_至.jpg', '255_今.jpg', '256_自.jpg', '257_我.jpg', '258_高.jpg', '259_祖.jpg', '25_颜.jpg', '260_太.jpg', '261_.jpg', '262_已.jpg', '263_来.jpg', '264_未.jpg', '265_有.jpg', '266_行.jpg', '267_此.jpg', '268_而.jpg', '269_不.jpg', '26_真.jpg', '270_理.jpg', '271_废.jpg', '272_而.jpg', '273_不.jpg', '274_乱.jpg', '275_者.jpg', '276_也.jpg', '277_前.jpg', '278_者.jpg', '279_菩.jpg', '27_卿.jpg', '280_提.jpg', '281_寺.jpg', '282_行.jpg', '283_香.jpg', '284_仆.jpg', '285_肘.jpg', '286_指.jpg', '287_麾.jpg', '288_率.jpg', '289_相.jpg', '28_谨.jpg', '290_与.jpg', '291_两.jpg', '292_省.jpg', '293_省.jpg', '294_已.jpg', '295_下.jpg', '296_常.jpg', '297_并.jpg', '298_为.jpg', '299_一.jpg', '29_奉.jpg', '2_一.jpg', '300_行.jpg', '301_.jpg', '302_鱼.jpg', '303_开.jpg', '304_府.jpg', '305_及.jpg', '306_仆.jpg', '307_肘.jpg', '308_率.jpg', '309_诸.jpg', '30_寓.jpg', '310_军.jpg', '311_将.jpg', '312_为.jpg', '313_一.jpg', '314_行.jpg', '315_.jpg', '316_若.jpg', '317_一.jpg', '318_时.jpg', '319_从.jpg', '31_书.jpg', '320_权.jpg', '321_犹.jpg', '322_未.jpg', '323_何.jpg', '324_何.jpg', '325_况.jpg', '326_积.jpg', '327_习.jpg', '328_更.jpg', '329_行.jpg', '32_于.jpg', '330_之.jpg', '331_乎.jpg', '332_一.jpg', '333_昨.jpg', '334_以.jpg', '335_郭.jpg', '336_令.jpg', '337_公.jpg', '338_父.jpg', '339_子.jpg', '33_右.jpg', '340_之.jpg', '341_军.jpg', '342_破.jpg', '343_犬.jpg', '344_羊.jpg', '345_凶.jpg', '346_逆.jpg', '347_之.jpg', '348_众.jpg', '349_众.jpg', '34_ト.jpg', '350_情.jpg', '351_欣.jpg', '352_喜.jpg', '353_恨.jpg', '354_不.jpg', '355_顶.jpg', '356_而.jpg', '357_戴.jpg', '358_之.jpg', '359_是.jpg', '35_肘.jpg', '360_用.jpg', '361_有.jpg', '362_兴.jpg', '363_道.jpg', '364_之.jpg', '365_会.jpg', '366_ト.jpg', '367_肘.jpg', '368_又.jpg', '369_不.jpg', '36_定.jpg', '370_悟.jpg', '371_前.jpg', '372_失.jpg', '373_径.jpg', '374_率.jpg', '375_意.jpg', '376_而.jpg', '377_指.jpg', '378_麾.jpg', '379_不.jpg', '37_襄.jpg', '380_顾.jpg', '381_班.jpg', '382_秩.jpg', '383_之.jpg', '384_高.jpg', '385_下.jpg', '386_不.jpg', '387_论.jpg', '388_文.jpg', '389_武.jpg', '38_郡.jpg', '390_之.jpg', '391_左.jpg', '392_右.jpg', '393_苟.jpg', '394_取.jpg', '395_侻.jpg', '396_军.jpg', '397_容.jpg', '398_为.jpg', '399_心.jpg', '39_王.jpg', '3_月.jpg', '400_曾.jpg', '401_不.jpg', '402_顾.jpg', '403_百.jpg', '404_寮.jpg', '405_之.jpg', '406_侧.jpg', '407_目.jpg', '408_亦.jpg', '409_何.jpg', '40_郭.jpg', '410_清.jpg', '411_画.jpg', '412_攫.jpg', '413_金.jpg', '414_之.jpg', '415_上.jpg', '416_哉.jpg', '417_甚.jpg', '418_非.jpg', '419_谓.jpg', '41_公.jpg', '420_也.jpg', '421_君.jpg', '422_子.jpg', '423_爱.jpg', '424_人.jpg', '425_以.jpg', '426_礼.jpg', '427_不.jpg', '428_窃.jpg', '429_见.jpg', '42_阁.jpg', '430_闻.jpg', '431_姑.jpg', '432_息.jpg', '433_仆.jpg', '434_肘.jpg', '435_得.jpg', '436_不.jpg', '437_深.jpg', '438_念.jpg', '439_之.jpg', '43_下.jpg', '440_乎.jpg', '441_真.jpg', '442_卿.jpg', '443_窃.jpg', '444_闻.jpg', '445_军.jpg', '446_容.jpg', '447_之.jpg', '448_为.jpg', '449_人.jpg', '44_盖.jpg', '450_清.jpg', '451_修.jpg', '452_梵.jpg', '453_行.jpg', '454_深.jpg', '455_入.jpg', '456_佛.jpg', '457_海.jpg', '458_况.jpg', '459_乎.jpg', '45_太.jpg', '460_收.jpg', '461_东.jpg', '462_京.jpg', '463_有.jpg', '464_殄.jpg', '465_贼.jpg', '466_城.jpg', '467_有.jpg', '468_戴.jpg', '469_天.jpg', '46_上.jpg', '470_之.jpg', '471_功.jpg', '472_朝.jpg', '473_.jpg', '474_之.jpg', '475_人.jpg', '476_所.jpg', '477_共.jpg', '478_贵.jpg', '479_仰.jpg', '47_有.jpg', '480_岂.jpg', '481_独.jpg', '482_有.jpg', '483_分.jpg', '484_.jpg', '485_利.jpg', '486_震.jpg', '487_涂.jpg', '488_割.jpg', '489_恬.jpg', '48_立.jpg', '490_然.jpg', '491_于.jpg', '492_心.jpg', '493_固.jpg', '494_以.jpg', '495_一.jpg', '496_毁.jpg', '497_加.jpg', '498_怒.jpg', '499_一.jpg', '49_德.jpg', '4_日.jpg', '500_敬.jpg', '501_加.jpg', '502_喜.jpg', '503_尚.jpg', '504_何.jpg', '505_半.jpg', '506_席.jpg', '507_之.jpg', '508_座.jpg', '509_咫.jpg', '50_其.jpg', '510_尺.jpg', '511_之.jpg', '512_地.jpg', '513_汩.jpg', '514_其.jpg', '515_志.jpg', '516_哉.jpg', '517_哉.jpg', '518_乡.jpg', '519_里.jpg', '51_次.jpg', '520_上.jpg', '521_齿.jpg', '522_.jpg', '523_庙.jpg', '524_上.jpg', '525_爵.jpg', '526_朝.jpg', '527_廷.jpg', '528_上.jpg', '529_位.jpg', '52_有.jpg', '530_皆.jpg', '531_有.jpg', '532_等.jpg', '533_威.jpg', '534_以.jpg', '535_明.jpg', '536_长.jpg', '537_幼.jpg', '538_故.jpg', '539_得.jpg', '53_立.jpg', '540_彝.jpg', '541_伦.jpg', '542_叙.jpg', '543_而.jpg', '544_天.jpg', '545_下.jpg', '546_和.jpg', '547_平.jpg', '548_也.jpg', '549_百.jpg', '54_功.jpg', '550_上.jpg', '551_自.jpg', '552_率.jpg', '553_相.jpg', '554_御.jpg', '555_史.jpg', '556_大.jpg', '557_夫.jpg', '558_两.jpg', '559_省.jpg', '55_是.jpg', '560_官.jpg', '561_自.jpg', '562_为.jpg', '563_一.jpg', '564_行.jpg', '565_十.jpg', '566_二.jpg', '567_卫.jpg', '568_二.jpg', '569_师.jpg', '56_之.jpg', '570_二.jpg', '571_公.jpg', '572_令.jpg', '573_仆.jpg', '574_师.jpg', '575_保.jpg', '576_傅.jpg', '577_尚.jpg', '578_九.jpg', '579_郎.jpg', '57_谓.jpg', '580_自.jpg', '581_为.jpg', '582_一.jpg', '583_行.jpg', '584_卿.jpg', '585_二.jpg', '586_监.jpg', '587_之.jpg', '588_从.jpg', '589_占.jpg', '58_不.jpg', '590_以.jpg', '591_然.jpg', '592_未.jpg', '593_至.jpg', '594_如.jpg', '595_节.jpg', '596_度.jpg', '597_军.jpg', '598_将.jpg', '599_各.jpg', '59_朽.jpg', '5_金.jpg', '600_有.jpg', '601_本.jpg', '602_班.jpg', '603_卿.jpg', '604_监.jpg', '605_监.jpg', '606_班.jpg', '607_将.jpg', '608_军.jpg', '609_有.jpg', '60_抑.jpg', '610_将.jpg', '611_军.jpg', '612_位.jpg', '613_如.jpg', '614_鱼.jpg', '615_军.jpg', '616_容.jpg', '617_阶.jpg', '618_虽.jpg', '619_开.jpg', '61_又.jpg', '620_府.jpg', '621_官.jpg', '622_即.jpg', '623_监.jpg', '624_门.jpg', '625_将.jpg', '626_军.jpg', '627_廷.jpg', '628_列.jpg', '629_位.jpg', '62_闻.jpg', '630_有.jpg', '631_次.jpg', '632_叙.jpg', '633_但.jpg', '634_以.jpg', '635_功.jpg', '636_绩.jpg', '637_既.jpg', '638_高.jpg', '639_恩.jpg', '63_之.jpg', '640_泽.jpg', '641_莫.jpg', '642_入.jpg', '643_王.jpg', '644_命.jpg', '645_众.jpg', '646_人.jpg', '647_不.jpg', '648_敢.jpg', '649_为.jpg', '64_端.jpg', '650_此.jpg', '651_不.jpg', '652_何.jpg', '653_令.jpg', '654_居.jpg', '655_本.jpg', '656_位.jpg', '657_须.jpg', '658_别.jpg', '659_长.jpg', '65_揆.jpg', '660_有.jpg', '661_尊.jpg', '662_崇.jpg', '663_只.jpg', '664_何.jpg', '665_于.jpg', '666_率.jpg', '667_相.jpg', '668_座.jpg', '669_南.jpg', '66_者.jpg', '670_横.jpg', '671_安.jpg', '672_一.jpg', '673_位.jpg', '674_如.jpg', '675_御.jpg', '676_史.jpg', '677_羼.jpg', '678_众.jpg', '679_尊.jpg', '67_百.jpg', '680_知.jpg', '681_难.jpg', '682_.jpg', '683_御.jpg', '684_史.jpg', '685_置.jpg', '686_一.jpg', '687_榻.jpg', '688_使.jpg', '689_使.jpg', '68_寮.jpg', '690_百.jpg', '691_寮.jpg', '692_共.jpg', '693_得.jpg', '694_瞻.jpg', '695_仰.jpg', '696_不.jpg', '697_亦.jpg', '698_何.jpg', '699_圣.jpg', '69_之.jpg', '6_紫.jpg', '700_皇.jpg', '701_时.jpg', '702_高.jpg', '703_上.jpg', '704_承.jpg', '705_恩.jpg', '706_傅.jpg', '707_暄.jpg', '708_亦.jpg', '709_如.jpg', '70_师.jpg', '710_此.jpg', '711_横.jpg', '712_座.jpg', '713_亦.jpg', '714_闻.jpg', '715_别.jpg', '716_有.jpg', '717_礼.jpg', '718_数.jpg', '719_亦.jpg', '71_长.jpg', '720_何.jpg', '721_必.jpg', '722_令.jpg', '723_他.jpg', '724_失.jpg', '725_位.jpg', '726_如.jpg', '727_李.jpg', '728_辅.jpg', '729_国.jpg', '72_诸.jpg', '730_倚.jpg', '731_承.jpg', '732_恩.jpg', '733_泽.jpg', '734_径.jpg', '735_居.jpg', '736_左.jpg', '737_右.jpg', '738_仆.jpg', '739_肘.jpg', '73_侯.jpg', '740_及.jpg', '741_二.jpg', '742_公.jpg', '743_之.jpg', '744_上.jpg', '745_令.jpg', '746_天.jpg', '747_下.jpg', '748_疑.jpg', '749_乎.jpg', '74_王.jpg', '750_占.jpg', '751_人.jpg', '752_云.jpg', '753_益.jpg', '754_者.jpg', '755_二.jpg', '756_友.jpg', '757_损.jpg', '758_者.jpg', '759_二.jpg', '75_者.jpg', '760_友.jpg', '761_愿.jpg', '762_仆.jpg', '763_肘.jpg', '764_与.jpg', '765_军.jpg', '766_容.jpg', '767_为.jpg', '768_.jpg', '769_之.jpg', '76_人.jpg', '770_友.jpg', '771_不.jpg', '772_愿.jpg', '773_ト.jpg', '774_肘.jpg', '775_为.jpg', '776_军.jpg', '777_容.jpg', '778_佞.jpg', '779_菜.jpg', '77_臣.jpg', '780_又.jpg', '781_一.jpg', '782_昨.jpg', '783_裴.jpg', '784_i.jpg', '785_欲.jpg', '786_令.jpg', '787_尝.jpg', '788_尚.jpg', '789_尝.jpg', '78_之.jpg', '790_ト.jpg', '791_肘.jpg', '792_贵.jpg', '793_张.jpg', '794_目.jpg', '795_见.jpg', '796_尤.jpg', '797_介.jpg', '798_众.jpg', '799_之.jpg', '79_极.jpg', '7_光.jpg', '800_中.jpg', '801_不.jpg', '802_欲.jpg', '803_显.jpg', '804_过.jpg', '805_今.jpg', '806_与.jpg', '807_道.jpg', '808_之.jpg', '809_会.jpg', '80_地.jpg', '810_还.jpg', '811_尔.jpg', '812_遂.jpg', '813_非.jpg', '814_再.jpg', '815_径.jpg', '816_八.jpg', '817_座.jpg', '818_尚.jpg', '819_书.jpg', '81_今.jpg', '820_欲.jpg', '821_令.jpg', '822_便.jpg', '823_向.jpg', '824_下.jpg', '825_座.jpg', '826_州.jpg', '827_县.jpg', '828_军.jpg', '829_城.jpg', '82_ト.jpg', '830_之.jpg', '831_礼.jpg', '832_亦.jpg', '833_恐.jpg', '834_未.jpg', '835_然.jpg', '836_朝.jpg', '837_廷.jpg', '838_公.jpg', '839_宴.jpg', '83_肘.jpg', '840_耳.jpg', '841_不.jpg', '842_应.jpg', '843_若.jpg', '844_此.jpg', '845_今.jpg', '846_既.jpg', '847_若.jpg', '848_此.jpg', '849_仆.jpg', '84_挺.jpg', '850_肘.jpg', '851_意.jpg', '852_只.jpg', '853_为.jpg', '854_若.jpg', '855_州.jpg', '856_县.jpg', '857_令.jpg', '858_乎.jpg', '859_若.jpg', '85_不.jpg', '860_以.jpg', '861_尚.jpg', '862_书.jpg', '863_同.jpg', '864_于.jpg', '865_令.jpg', '866_则.jpg', '867_仆.jpg', '868_肘.jpg', '869_见.jpg', '86_朽.jpg', '870_尚.jpg', '871_书.jpg', '872_令.jpg', '873_得.jpg', '874_如.jpg', '875_上.jpg', '876_佐.jpg', '877_事.jpg', '878_乎.jpg', '879_益.jpg', '87_之.jpg', '880_不.jpg', '881_然.jpg', '882_矣.jpg', '883_今.jpg', '884_既.jpg', '885_二.jpg', '886_厅.jpg', '887_齐.jpg', '888_列.jpg', '889_足.jpg', '88_功.jpg', '890_明.jpg', '891_不.jpg', '892_同.jpg', '893_刺.jpg', '894_史.jpg', '895_百.jpg', '896_尚.jpg', '897_书.jpg', '898_令.jpg', '899_与.jpg', '89_业.jpg', '8_禄.jpg', '900_ト.jpg', '901_肘.jpg', '902_同.jpg', '903_是.jpg', '904_二.jpg', '905_h.jpg', '906_只.jpg', '907_校.jpg', '908_上.jpg', '909_下.jpg', '90_当.jpg', '910_之.jpg', '911_阶.jpg', '912_六.jpg', '913_曹.jpg', '914_尚.jpg', '915_书.jpg', '916_并.jpg', '917_正.jpg', '918_h.jpg', '919_又.jpg', '91_人.jpg', '920_非.jpg', '921_隔.jpg', '922_h.jpg', '923_致.jpg', '924_敬.jpg', '925_之.jpg', '926_类.jpg', '927_尚.jpg', '928_书.jpg', '929_之.jpg', '92_臣.jpg', '930_事.jpg', '931_仆.jpg', '932_肘.jpg', '933_礼.jpg', '934_数.jpg', '935_未.jpg', '936_敢.jpg', '937_有.jpg', '938_失.jpg', '939_ト.jpg', '93_极.jpg', '940_肘.jpg', '941_之.jpg', '942_顾.jpg', '943_尚.jpg', '944_书.jpg', '945_何.jpg', '946_乃.jpg', '947_欲.jpg', '948_同.jpg', '949_卑.jpg', '94_地.jpg', '950_吏.jpg', '951_又.jpg', '952_据.jpg', '953_宋.jpg', '954_书.jpg', '955_百.jpg', '956_官.jpg', '957_志.jpg', '958_八.jpg', '959_座.jpg', '95_岂.jpg', '960_同.jpg', '961_是.jpg', '962_第.jpg', '963_二.jpg', '964_h.jpg', '965_隋.jpg', '966_及.jpg', '967_国.jpg', '968_家.jpg', '969_始.jpg', '96_不.jpg', '970_升.jpg', '971_别.jpg', '972_作.jpg', '973_二.jpg', '974_h.jpg', '975_高.jpg', '976_自.jpg', '977_标.jpg', '978_致.jpg', '979_诚.jpg', '97_以.jpg', '980_崇.jpg', '981_向.jpg', '982_下.jpg', '983_擠.jpg', '984_排.jpg', '985_伤.jpg', '986_甚.jpg', '987_况.jpg', '988_於.jpg', '989_公.jpg', '98_才.jpg', '990_堂.jpg', '991_昢.jpg', '992_常.jpg', '993_伯.jpg', '994_当.jpg', '995_为.jpg', '996_令.jpg', '997_公.jpg', '998_初.jpg', '999_到.jpg', '99_为.jpg', '9_大.jpg']
  function sortList (arr) {
    return arr.sort(function (a, b) {
      return a.split('_')[0] - b.split('_')[0]
    })
  }

  function getText (arr) {
    return arr.map(item => item.split('_')[1][0])
  }

  window.zhengzuowei = sortList(list).map(v => `${v}`)
  // console.log(window.zhengzuowei)
}))(window)