(function(){
	(function (lib, img, cjs, ss, an) {

	var p; // shortcut to reference prototypes
	lib.ssMetadata = [];


	// symbols:
	// helper functions:

	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}

	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
		}


	(lib.元件3 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)"],[0,1],117,105,-229,-81.2).s().p("A52UEQq0q0AAvUQABs9HwpxQBchzCRgRQCSgRB0BcQBzBcARCRQARCShbB0QlZGzACJBQAAKtHkHkQHlHlKtAAQKtAAHlnkIAAgBQFnlnBenUQAdiQB6hSQB6hTCQAdQCQAcBTB7QBSB6gcCPQiDKloFIFQq1K1vUAAQvUAAq1q1g");
		this.shape.setTransform(234.7,197.7);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,469.4,395.5), null);


	(lib.元件2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 图层 1
		this.instance = new lib.元件3();
		this.instance.parent = this;
		this.instance.setTransform(337.7,173.4,1,1,0,0,0,234.7,197.7);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({x:337.5},0).wait(1).to({x:337.3,y:173.5},0).wait(1).to({x:336.9},0).wait(1).to({x:336.4,y:173.6},0).wait(1).to({x:335.9},0).wait(1).to({x:335.2,y:173.7},0).wait(1).to({x:334.4,y:173.9},0).wait(1).to({x:333.4,y:174},0).wait(1).to({x:332.3,y:174.1},0).wait(1).to({x:331.1,y:174.3},0).wait(1).to({x:329.7,y:174.5},0).wait(1).to({x:328.2,y:174.7},0).wait(1).to({x:326.5,y:174.9},0).wait(1).to({x:324.7,y:175.2},0).wait(1).to({x:322.6,y:175.4},0).wait(1).to({x:320.4,y:175.7},0).wait(1).to({x:318,y:176.1},0).wait(1).to({x:315.4,y:176.4},0).wait(1).to({x:312.6,y:176.8},0).wait(1).to({x:309.6,y:177.2},0).wait(1).to({x:306.3,y:177.7},0).wait(1).to({x:302.8,y:178.1},0).wait(1).to({x:299.1,y:178.6},0).wait(1).to({x:295.1,y:179.2},0).wait(1).to({x:290.9,y:179.8},0).wait(1).to({x:286.4,y:180.4},0).wait(1).to({x:281.7,y:181},0).wait(1).to({x:276.8,y:181.7},0).wait(1).to({x:271.6,y:182.4},0).wait(1).to({x:266.1,y:183.1},0).wait(1).to({x:260.5,y:183.9},0).wait(1).to({x:254.7,y:184.7},0).wait(1).to({x:248.7,y:185.5},0).wait(1).to({x:242.7,y:186.3},0).wait(1).to({x:236.5,y:187.1},0).wait(1).to({x:230.5,y:188},0).wait(1).to({x:224.4,y:188.8},0).wait(1).to({x:218.4,y:189.6},0).wait(1).to({x:212.6,y:190.4},0).wait(1).to({x:207,y:191.2},0).wait(1).to({x:201.6,y:191.9},0).wait(1).to({x:196.5,y:192.6},0).wait(1).to({x:191.7,y:193.2},0).wait(1).to({x:187.3,y:193.8},0).wait(1).to({x:183.2,y:194.4},0).wait(1).to({x:179.4,y:194.9},0).wait(1).to({x:176,y:195.4},0).wait(1).to({x:172.9,y:195.8},0).wait(1).to({x:170.2,y:196.1},0).wait(1).to({x:167.8,y:196.5},0).wait(1).to({x:165.7,y:196.8},0).wait(1).to({x:163.9,y:197},0).wait(1).to({x:162.3,y:197.2},0).wait(1).to({x:161.1,y:197.4},0).wait(1).to({x:160.1,y:197.5},0).wait(1).to({x:159.3,y:197.6},0).wait(1).to({x:158.8,y:197.7},0).wait(1).to({x:158.5},0).wait(1).to({x:158.4},0).wait(1).to({x:158.6,y:197.6},0).wait(1).to({x:159,y:197.3},0).wait(1).to({x:159.8,y:196.7},0).wait(1).to({x:161,y:195.8},0).wait(1).to({x:162.4,y:194.7},0).wait(1).to({x:164.3,y:193.3},0).wait(1).to({x:166.5,y:191.6},0).wait(1).to({x:169,y:189.7},0).wait(1).to({x:172,y:187.5},0).wait(1).to({x:175.3,y:184.9},0).wait(1).to({x:179.1,y:182.1},0).wait(1).to({x:183.2,y:178.9},0).wait(1).to({x:187.8,y:175.5},0).wait(1).to({x:192.7,y:171.7},0).wait(1).to({x:198.1,y:167.6},0).wait(1).to({x:204,y:163.2},0).wait(1).to({x:210.2,y:158.5},0).wait(1).to({x:216.9,y:153.4},0).wait(1).to({x:224,y:148},0).wait(1).to({x:231.5,y:142.3},0).wait(1).to({x:239.4,y:136.3},0).wait(1).to({x:247.7,y:130},0).wait(1).to({x:256.4,y:123.4},0).wait(1).to({x:265.4,y:116.5},0).wait(1).to({x:274.8,y:109.4},0).wait(1).to({x:284.5,y:102.1},0).wait(1).to({x:294.4,y:94.5},0).wait(1).to({x:304.6,y:86.8},0).wait(1).to({x:314.9,y:79},0).wait(1).to({x:325.4,y:71},0).wait(1).to({x:336,y:63},0).wait(1).to({x:346.6,y:55},0).wait(1).to({x:357.2,y:46.9},0).wait(1).to({x:367.8,y:38.9},0).wait(1).to({x:378.2,y:31},0).wait(1).to({x:388.4,y:23.3},0).wait(1).to({x:398.4,y:15.7},0).wait(1).to({x:408.2,y:8.3},0).wait(1).to({x:417.7,y:1.1},0).wait(1).to({x:426.8,y:-5.8},0).wait(1).to({x:435.5,y:-12.4},0).wait(1).to({x:443.8,y:-18.7},0).wait(1).to({x:451.7,y:-24.7},0).wait(1).to({x:459.2,y:-30.4},0).wait(1).to({x:466.1,y:-35.7},0).wait(1).to({x:472.7,y:-40.6},0).wait(1).to({x:478.7,y:-45.2},0).wait(1).to({x:484.2,y:-49.4},0).wait(1).to({x:489.3,y:-53.2},0).wait(1).to({x:493.9,y:-56.7},0).wait(1).to({x:498,y:-59.8},0).wait(1).to({x:501.6,y:-62.6},0).wait(1).to({x:504.8,y:-65},0).wait(1).to({x:507.5,y:-67},0).wait(1).to({x:509.8,y:-68.8},0).wait(1).to({x:511.6,y:-70.2},0).wait(1).to({x:513,y:-71.2},0).wait(1).to({x:514,y:-72},0).wait(1).to({x:514.6,y:-72.4},0).wait(1).to({x:514.8,y:-72.6},0).wait(1).to({x:514.7,y:-72.3},0).wait(1).to({x:514.6,y:-71.6},0).wait(1).to({x:514.3,y:-70.4},0).wait(1).to({x:514,y:-68.6},0).wait(1).to({x:513.6,y:-66.3},0).wait(1).to({x:513,y:-63.4},0).wait(1).to({x:512.4,y:-60},0).wait(1).to({x:511.6,y:-55.9},0).wait(1).to({x:510.8,y:-51.3},0).wait(1).to({x:509.8,y:-45.9},0).wait(1).to({x:508.7,y:-40},0).wait(1).to({x:507.4,y:-33.3},0).wait(1).to({x:506,y:-25.9},0).wait(1).to({x:504.5,y:-17.8},0).wait(1).to({x:502.9,y:-9},0).wait(1).to({x:501.1,y:0.5},0).wait(1).to({x:499.2,y:10.9},0).wait(1).to({x:497.1,y:22},0).wait(1).to({x:494.9,y:33.8},0).wait(1).to({x:492.5,y:46.4},0).wait(1).to({x:490,y:59.7},0).wait(1).to({x:487.4,y:73.8},0).wait(1).to({x:484.7,y:88.6},0).wait(1).to({x:481.8,y:104},0).wait(1).to({x:478.8,y:120},0).wait(1).to({x:475.7,y:136.6},0).wait(1).to({x:472.5,y:153.6},0).wait(1).to({x:469.3,y:171},0).wait(1).to({x:465.9,y:188.8},0).wait(1).to({x:462.6,y:206.7},0).wait(1).to({x:459.2,y:224.7},0).wait(1).to({x:455.9,y:242.7},0).wait(1).to({x:452.5,y:260.7},0).wait(1).to({x:449.2,y:278.3},0).wait(1).to({x:446,y:295.7},0).wait(1).to({x:442.8,y:312.7},0).wait(1).to({x:439.7,y:329.1},0).wait(1).to({x:436.8,y:345},0).wait(1).to({x:433.9,y:360.3},0).wait(1).to({x:431.2,y:374.8},0).wait(1).to({x:428.6,y:388.7},0).wait(1).to({x:426.2,y:401.7},0).wait(1).to({x:423.9,y:414},0).wait(1).to({x:421.7,y:425.4},0).wait(1).to({x:419.8,y:436.1},0).wait(1).to({x:417.9,y:446},0).wait(1).to({x:416.2,y:455},0).wait(1).to({x:414.7,y:463.3},0).wait(1).to({x:413.3,y:470.7},0).wait(1).to({x:412,y:477.5},0).wait(1).to({x:410.9,y:483.4},0).wait(1).to({x:409.9,y:488.7},0).wait(1).to({x:409.1,y:493.2},0).wait(1).to({x:408.4,y:497.1},0).wait(1).to({x:407.8,y:500.3},0).wait(1).to({x:407.3,y:502.9},0).wait(1).to({x:406.9,y:504.9},0).wait(1).to({x:406.7,y:506.3},0).wait(1).to({x:406.5,y:507.1},0).wait(1).to({y:507.4},0).wait(1).to({x:406.4,y:507.3},0).wait(1).to({x:406.3,y:507},0).wait(1).to({x:406,y:506.6},0).wait(1).to({x:405.6,y:506.1},0).wait(1).to({x:405.2,y:505.3},0).wait(1).to({x:404.6,y:504.4},0).wait(1).to({x:403.9,y:503.3},0).wait(1).to({x:403,y:502},0).wait(1).to({x:402.1,y:500.5},0).wait(1).to({x:401,y:498.8},0).wait(1).to({x:399.8,y:496.9},0).wait(1).to({x:398.4,y:494.8},0).wait(1).to({x:396.9,y:492.4},0).wait(1).to({x:395.3,y:489.8},0).wait(1).to({x:393.5,y:487},0).wait(1).to({x:391.5,y:484},0).wait(1).to({x:389.4,y:480.7},0).wait(1).to({x:387.1,y:477.1},0).wait(1).to({x:384.7,y:473.3},0).wait(1).to({x:382.1,y:469.3},0).wait(1).to({x:379.4,y:465},0).wait(1).to({x:376.5,y:460.5},0).wait(1).to({x:373.4,y:455.7},0).wait(1).to({x:370.2,y:450.6},0).wait(1).to({x:366.8,y:445.4},0).wait(1).to({x:363.3,y:439.9},0).wait(1).to({x:359.7,y:434.3},0).wait(1).to({x:356,y:428.4},0).wait(1).to({x:352.1,y:422.4},0).wait(1).to({x:348.2,y:416.3},0).wait(1).to({x:344.2,y:410},0).wait(1).to({x:340.2,y:403.7},0).wait(1).to({x:336.1,y:397.4},0).wait(1).to({x:332,y:391},0).wait(1).to({x:328,y:384.7},0).wait(1).to({x:324,y:378.5},0).wait(1).to({x:320.1,y:372.4},0).wait(1).to({x:316.3,y:366.4},0).wait(1).to({x:312.6,y:360.6},0).wait(1).to({x:309,y:355},0).wait(1).to({x:305.6,y:349.6},0).wait(1).to({x:302.3,y:344.5},0).wait(1).to({x:299.2,y:339.6},0).wait(1).to({x:296.3,y:335.1},0).wait(1).to({x:293.6,y:330.8},0).wait(1).to({x:291,y:326.8},0).wait(1).to({x:288.7,y:323.2},0).wait(1).to({x:286.5,y:319.8},0).wait(1).to({x:284.6,y:316.8},0).wait(1).to({x:282.8,y:314},0).wait(1).to({x:281.2,y:311.6},0).wait(1).to({x:279.8,y:309.4},0).wait(1).to({x:278.6,y:307.5},0).wait(1).to({x:277.6,y:305.9},0).wait(1).to({x:276.8,y:304.6},0).wait(1).to({x:276.1,y:303.5},0).wait(1).to({x:275.6,y:302.7},0).wait(1).to({x:275.2,y:302.1},0).wait(1).to({x:275,y:301.8},0).wait(1).to({x:274.9,y:301.7},0).wait(1).to({x:275,y:301.5},0).wait(1).to({x:275.2,y:301.1},0).wait(1).to({x:275.6,y:300.5},0).wait(1).to({x:276.1,y:299.5},0).wait(1).to({x:276.8,y:298.3},0).wait(1).to({x:277.7,y:296.8},0).wait(1).to({x:278.7,y:294.9},0).wait(1).to({x:280,y:292.7},0).wait(1).to({x:281.4,y:290.2},0).wait(1).to({x:283.1,y:287.3},0).wait(1).to({x:284.9,y:284.1},0).wait(1).to({x:287,y:280.4},0).wait(1).to({x:289.3,y:276.4},0).wait(1).to({x:291.9,y:271.9},0).wait(1).to({x:294.6,y:267},0).wait(1).to({x:297.7,y:261.7},0).wait(1).to({x:301,y:256},0).wait(1).to({x:304.5,y:249.8},0).wait(1).to({x:308.3,y:243.1},0).wait(1).to({x:312.3,y:236},0).wait(1).to({x:316.7,y:228.4},0).wait(1).to({x:321.2,y:220.4},0).wait(1).to({x:326,y:212},0).wait(1).to({x:331.1,y:203.2},0).wait(1).to({x:336.3,y:194},0).wait(1).to({x:341.8,y:184.5},0).wait(1).to({x:347.4,y:174.7},0).wait(1).to({x:353.1,y:164.6},0).wait(1).to({x:358.9,y:154.4},0).wait(1).to({x:364.8,y:144},0).wait(1).to({x:370.8,y:133.7},0).wait(1).to({x:376.7,y:123.3},0).wait(1).to({x:382.5,y:113.1},0).wait(1).to({x:388.3,y:103},0).wait(1).to({x:393.9,y:93.1},0).wait(1).to({x:399.3,y:83.6},0).wait(1).to({x:404.6,y:74.3},0).wait(1).to({x:409.7,y:65.5},0).wait(1).to({x:414.5,y:57},0).wait(1).to({x:419,y:49},0).wait(1).to({x:423.3,y:41.5},0).wait(1).to({x:427.4,y:34.4},0).wait(1).to({x:431.2,y:27.8},0).wait(1).to({x:434.7,y:21.6},0).wait(1).to({x:437.9,y:15.9},0).wait(1).to({x:440.9,y:10.7},0).wait(1).to({x:443.6,y:5.9},0).wait(1).to({x:446.1,y:1.6},0).wait(1).to({x:448.3,y:-2.3},0).wait(1).to({x:450.3,y:-5.8},0).wait(1).to({x:452.1,y:-8.9},0).wait(1).to({x:453.6,y:-11.6},0).wait(1).to({x:455,y:-14},0).wait(1).to({x:456.1,y:-16},0).wait(1).to({x:457.1,y:-17.6},0).wait(1).to({x:457.8,y:-18.9},0).wait(1).to({x:458.4,y:-19.9},0).wait(1).to({x:458.8,y:-20.7},0).wait(1).to({x:459,y:-21.1},0).wait(1).to({x:459.1,y:-21.2},0).wait(1).to({y:-21.1},0).wait(1).to({x:458.9,y:-21},0).wait(1).to({x:458.7,y:-20.7},0).wait(1).to({x:458.4,y:-20.4},0).wait(1).to({x:458.1,y:-19.9},0).wait(1).to({x:457.6,y:-19.3},0).wait(1).to({x:457,y:-18.5},0).wait(1).to({x:456.3,y:-17.7},0).wait(1).to({x:455.6,y:-16.7},0).wait(1).to({x:454.7,y:-15.6},0).wait(1).to({x:453.7,y:-14.3},0).wait(1).to({x:452.6,y:-12.9},0).wait(1).to({x:451.4,y:-11.4},0).wait(1).to({x:450,y:-9.7},0).wait(1).to({x:448.6,y:-7.8},0).wait(1).to({x:447,y:-5.8},0).wait(1).to({x:445.3,y:-3.6},0).wait(1).to({x:443.4,y:-1.3},0).wait(1).to({x:441.4,y:1.3},0).wait(1).to({x:439.2,y:4},0).wait(1).to({x:437,y:6.9},0).wait(1).to({x:434.5,y:10},0).wait(1).to({x:431.9,y:13.3},0).wait(1).to({x:429.1,y:16.8},0).wait(1).to({x:426.2,y:20.5},0).wait(1).to({x:423.1,y:24.4},0).wait(1).to({x:419.8,y:28.6},0).wait(1).to({x:416.4,y:33},0).wait(1).to({x:412.8,y:37.6},0).wait(1).to({x:409,y:42.4},0).wait(1).to({x:405,y:47.4},0).wait(1).to({x:400.8,y:52.7},0).wait(1).to({x:396.5,y:58.2},0).wait(1).to({x:392,y:63.9},0).wait(1).to({x:387.3,y:69.8},0).wait(1).to({x:382.5,y:75.9},0).wait(1).to({x:377.5,y:82.2},0).wait(1).to({x:372.4,y:88.7},0).wait(1).to({x:367.2,y:95.4},0).wait(1).to({x:361.8,y:102.2},0).wait(1).to({x:356.4,y:109.1},0).wait(1).to({x:350.9,y:116.1},0).wait(1).to({x:345.3,y:123.1},0).wait(1).to({x:339.7,y:130.2},0).wait(1).to({x:334.1,y:137.3},0).wait(1).to({x:328.6,y:144.4},0).wait(1).to({x:323,y:151.4},0).wait(1).to({x:317.6,y:158.3},0).wait(1).to({x:312.2,y:165.1},0).wait(1).to({x:307,y:171.7},0).wait(1).to({x:301.9,y:178.2},0).wait(1).to({x:296.9,y:184.5},0).wait(1).to({x:292.2,y:190.5},0).wait(1).to({x:287.6,y:196.4},0).wait(1).to({x:283.1,y:201.9},0).wait(1).to({x:278.9,y:207.3},0).wait(1).to({x:274.9,y:212.4},0).wait(1).to({x:271.1,y:217.2},0).wait(1).to({x:267.5,y:221.7},0).wait(1).to({x:264.1,y:226},0).wait(1).to({x:260.9,y:230.1},0).wait(1).to({x:258,y:233.8},0).wait(1).to({x:255.2,y:237.3},0).wait(1).to({x:252.6,y:240.6},0).wait(1).to({x:250.3,y:243.6},0).wait(1).to({x:248.1,y:246.4},0).wait(1).to({x:246.1,y:248.9},0).wait(1).to({x:244.3,y:251.2},0).wait(1).to({x:242.7,y:253.2},0).wait(1).to({x:241.2,y:255.1},0).wait(1).to({x:239.9,y:256.8},0).wait(1).to({x:238.8,y:258.2},0).wait(1).to({x:237.8,y:259.5},0).wait(1).to({x:236.9,y:260.5},0).wait(1).to({x:236.2,y:261.4},0).wait(1).to({x:235.7,y:262.1},0).wait(1).to({x:235.2,y:262.7},0).wait(1).to({x:234.9,y:263.1},0).wait(1).to({x:234.8,y:263.3},0).wait(1).to({x:234.7,y:263.4},0).wait(1).to({y:263.3},0).wait(1).to({x:234.9,y:263.2},0).wait(1).to({x:235.1,y:263},0).wait(1).to({x:235.3,y:262.8},0).wait(1).to({x:235.7,y:262.5},0).wait(1).to({x:236.2,y:262.1},0).wait(1).to({x:236.7,y:261.6},0).wait(1).to({x:237.4,y:261},0).wait(1).to({x:238.2,y:260.3},0).wait(1).to({x:239,y:259.6},0).wait(1).to({x:240,y:258.7},0).wait(1).to({x:241.1,y:257.8},0).wait(1).to({x:242.3,y:256.7},0).wait(1).to({x:243.6,y:255.5},0).wait(1).to({x:245.1,y:254.3},0).wait(1).to({x:246.7,y:252.9},0).wait(1).to({x:248.4,y:251.4},0).wait(1).to({x:250.2,y:249.8},0).wait(1).to({x:252.2,y:248},0).wait(1).to({x:254.3,y:246.2},0).wait(1).to({x:256.6,y:244.2},0).wait(1).to({x:259,y:242.1},0).wait(1).to({x:261.5,y:239.9},0).wait(1).to({x:264.1,y:237.6},0).wait(1).to({x:266.9,y:235.2},0).wait(1).to({x:269.8,y:232.7},0).wait(1).to({x:272.8,y:230.1},0).wait(1).to({x:275.8,y:227.4},0).wait(1).to({x:279,y:224.7},0).wait(1).to({x:282.1,y:221.9},0).wait(1).to({x:285.4,y:219.1},0).wait(1).to({x:288.6,y:216.2},0).wait(1).to({x:291.9,y:213.4},0).wait(1).to({x:295.1,y:210.6},0).wait(1).to({x:298.3,y:207.8},0).wait(1).to({x:301.4,y:205},0).wait(1).to({x:304.5,y:202.4},0).wait(1).to({x:307.4,y:199.8},0).wait(1).to({x:310.3,y:197.4},0).wait(1).to({x:313,y:195},0).wait(1).to({x:315.6,y:192.7},0).wait(1).to({x:318,y:190.6},0).wait(1).to({x:320.3,y:188.6},0).wait(1).to({x:322.5,y:186.7},0).wait(1).to({x:324.5,y:185},0).wait(1).to({x:326.3,y:183.4},0).wait(1).to({x:328,y:181.9},0).wait(1).to({x:329.5,y:180.5},0).wait(1).to({x:330.9,y:179.3},0).wait(1).to({x:332.2,y:178.2},0).wait(1).to({x:333.3,y:177.3},0).wait(1).to({x:334.3,y:176.4},0).wait(1).to({x:335.1,y:175.7},0).wait(1).to({x:335.8,y:175},0).wait(1).to({x:336.4,y:174.5},0).wait(1).to({x:336.9,y:174.1},0).wait(1).to({x:337.2,y:173.8},0).wait(1).to({x:337.5,y:173.6},0).wait(1).to({x:337.7,y:173.4},0).wait(2));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(103,-24.3,469.4,395.5);


	// stage content:
	(lib.最后循环logo = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 元件 2
		this.instance = new lib.元件2();
		this.instance.parent = this;
		this.instance.setTransform(965.7,342.5,0.245,0.245,-45,0,0,346.7,198.2);
		this.instance.compositeOperation = "lighter";

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:346.8,regY:198.5,rotation:-765,x:965.8},1000).wait(1));

		// 元件 2
		this.instance_1 = new lib.元件2();
		this.instance_1.parent = this;
		this.instance_1.setTransform(965.7,342.4,0.245,0.245,-135,0,0,346.3,197.8);
		this.instance_1.compositeOperation = "lighter";

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:346.2,regY:197.7,rotation:-855,x:965.8,y:342.5},1000).wait(1));

		// 元件 2
		this.instance_2 = new lib.元件2();
		this.instance_2.parent = this;
		this.instance_2.setTransform(965.7,342.5,0.245,0.245,135,0,0,346.7,197.3);
		this.instance_2.compositeOperation = "lighter";

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:346.8,regY:197.1,rotation:-585,x:965.8},1000).wait(1));

		// 元件 2
		this.instance_3 = new lib.元件2();
		this.instance_3.parent = this;
		this.instance_3.setTransform(965.7,342.5,0.245,0.245,45,0,0,347.2,197.5);
		this.instance_3.compositeOperation = "lighter";

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:347.3,regY:197.7,rotation:-675,x:965.8},1000).wait(1));

		// 元件 2
		this.instance_4 = new lib.元件2();
		this.instance_4.parent = this;
		this.instance_4.setTransform(965.7,342.5,0.245,0.245,-90,0,0,346.5,198);
		this.instance_4.compositeOperation = "lighter";

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:346.3,regY:198.2,rotation:-810,x:965.8},1000).wait(1));

		// 元件 2
		this.instance_5 = new lib.元件2();
		this.instance_5.parent = this;
		this.instance_5.setTransform(965.7,342.5,0.245,0.245,180,0,0,346.5,197.3);
		this.instance_5.compositeOperation = "lighter";

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:346.3,rotation:-540,x:965.8},1000).wait(1));

		// 元件 2
		this.instance_6 = new lib.元件2();
		this.instance_6.parent = this;
		this.instance_6.setTransform(965.7,342.5,0.245,0.245,90,0,0,347.1,197.3);
		this.instance_6.compositeOperation = "lighter";

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:347.4,regY:197.2,rotation:-630,x:965.8},1000).wait(1));

		// 元件 2
		this.instance_7 = new lib.元件2();
		this.instance_7.parent = this;
		this.instance_7.setTransform(965.7,342.5,0.245,0.245,0,0,0,347.1,198);
		this.instance_7.compositeOperation = "lighter";

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:347.2,rotation:-720,x:965.8},1000).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(1845,801.8,161.2,161.1);
	// library properties:
	lib.properties = {
		width: 1920,
		height: 1080,
		fps: 60,
		color: "#000000",
		opacity: 1.00,
		manifest: [],
		preloads: []
	};




	})(lib = lib||{}, images = images||{}, createjs, ss = ss||{}, AdobeAn = AdobeAn||{});
	var lib, images, ss, AdobeAn;

	var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
	function init() {
		canvas = document.getElementById("canvas1");
		anim_container = document.getElementById("animation_container1");
		dom_overlay_container = document.getElementById("dom_overlay_container1");
		handleComplete();
	}
	function handleComplete() {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		exportRoot = new lib.最后循环logo();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);	
		//Registers the "tick" event listener.
		fnStartAnimation = function() {
			createjs.Ticker.setFPS(lib.properties.fps);
			createjs.Ticker.addEventListener("tick", stage);
		}	    
		//Code to support hidpi screens and responsive scaling.
		function makeResponsive(isResp, respDim, isScale, scaleType) {		
			var lastW, lastH, lastS=1;		
			window.addEventListener('resize', resizeCanvas);		
			resizeCanvas();		
			function resizeCanvas() {			
				var w = lib.properties.width, h = lib.properties.height;			
				var iw = window.innerWidth, ih=window.innerHeight;			
				var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
				if(isResp) {                
					if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
						sRatio = lastS;                
					}				
					else if(!isScale) {					
						if(iw<w || ih<h)						
							sRatio = Math.min(xRatio, yRatio);				
					}				
					else if(scaleType==1) {					
						sRatio = Math.min(xRatio, yRatio);				
					}				
					else if(scaleType==2) {					
						sRatio = Math.max(xRatio, yRatio);				
					}			
				}			
				canvas.width = w*pRatio*sRatio;			
				canvas.height = h*pRatio*sRatio;
				canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
				canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
				stage.scaleX = pRatio*sRatio;			
				stage.scaleY = pRatio*sRatio;			
				lastW = iw; lastH = ih; lastS = sRatio;	
				if(iw < canvas.width){
					anim_container.style.transform = "translateX(-50%)",
					anim_container.style.left = '50%';
				}else{
					anim_container.style.transform = "translateX(0)",
					anim_container.style.left = '0';
				}	
			}
		}
		makeResponsive(1,'width',1,2);	
		fnStartAnimation();
	}
	init();
	// window.startMiniLogo = fnStartAnimation;
})()