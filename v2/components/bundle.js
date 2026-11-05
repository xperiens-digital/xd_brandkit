/* @ds-bundle: {"format":4,"namespace":"XD","components":[]} */
(function () {
  'use strict';
  var ICONS={"reengineer":["<circle cx=\"12\" cy=\"12\" r=\"5\"/>","<path d=\"M20 11a8 8 0 0 0-14.3-4.9\"/><path d=\"M4 4v4h4\"/><path d=\"M4 13a8 8 0 0 0 14.3 4.9\"/><path d=\"M20 20v-4h-4\"/>"],"intelligence":["<circle cx=\"12\" cy=\"12\" r=\"4\"/>","<circle cx=\"12\" cy=\"12\" r=\"2.5\"/><circle cx=\"5\" cy=\"5\" r=\"1.8\"/><circle cx=\"19\" cy=\"5\" r=\"1.8\"/><circle cx=\"5\" cy=\"19\" r=\"1.8\"/><circle cx=\"19\" cy=\"19\" r=\"1.8\"/><path d=\"M6.4 6.4l3.8 3.8M17.6 6.4l-3.8 3.8M6.4 17.6l3.8-3.8M17.6 17.6l-3.8-3.8\"/>"],"cloud":["<path d=\"M7 18h10.5a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1.5A3.3 3.3 0 0 0 7 18z\"/>","<path d=\"M7 18.5h10.5a4.5 4.5 0 0 0 .6-8.96A6.5 6.5 0 0 0 5.6 11.2 3.7 3.7 0 0 0 7 18.5z\"/><path d=\"M12 12v4M10 14h4\"/>"],"govern":["<path d=\"M12 3.5l7 2.8v5.2c0 4.3-2.9 7.7-7 9-4.1-1.3-7-4.7-7-9V6.3z\"/>","<path d=\"M12 2.8l7.8 3.1v5.6c0 4.8-3.3 8.6-7.8 10-4.5-1.4-7.8-5.2-7.8-10V5.9z\"/><path d=\"M8.6 12.2l2.4 2.4 4.6-4.8\"/>"],"innovate":["<path d=\"M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2z\"/>","<path d=\"M12 2.5l2.4 7.1 7.1 2.4-7.1 2.4-2.4 7.1-2.4-7.1L2.5 12l7.1-2.4z\"/><path d=\"M19 3v3M17.5 4.5h3\"/>"],"growth":["<path d=\"M3 20h18V9l-6 5-4-4-8 6z\"/>","<path d=\"M3 17l6.5-6.5 4 4L21 7\"/><path d=\"M15.5 7H21v5.5\"/><path d=\"M3 21h18\"/>"],"process":["<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"2\"/>","<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"2\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"2\"/><path d=\"M10 6.5h4.5a3 3 0 0 1 3 3V14\"/><path d=\"M15.5 12l2 2 2-2\"/>"],"dashboard":["<rect x=\"13\" y=\"3\" width=\"8\" height=\"8\" rx=\"2\"/>","<rect x=\"3\" y=\"3\" width=\"8\" height=\"11\" rx=\"2\"/><rect x=\"13\" y=\"3\" width=\"8\" height=\"7\" rx=\"2\"/><rect x=\"13\" y=\"13\" width=\"8\" height=\"8\" rx=\"2\"/><rect x=\"3\" y=\"17\" width=\"8\" height=\"4\" rx=\"2\"/>"],"survey":["<rect x=\"5\" y=\"4\" width=\"14\" height=\"17\" rx=\"2.5\"/>","<rect x=\"4.5\" y=\"4\" width=\"15\" height=\"17.5\" rx=\"2.5\"/><path d=\"M9 2.5h6v3H9z\"/><path d=\"M8 11l1.5 1.5L12 10M8 16.5l1.5 1.5L12 15.5M14 11.5h2.5M14 17h2.5\"/>"],"target":["<circle cx=\"12\" cy=\"12\" r=\"5\"/>","<circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"12\" cy=\"12\" r=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"1.2\"/><path d=\"M12 12l7-7M16.5 3.5L19 5l1.5 2.5\"/>"],"layers":["<path d=\"M12 3l9 4.5-9 4.5-9-4.5z\"/>","<path d=\"M12 2.8l9.2 4.7L12 12.2 2.8 7.5z\"/><path d=\"M2.8 12L12 16.7l9.2-4.7\"/><path d=\"M2.8 16.5L12 21.2l9.2-4.7\"/>"],"data":["<ellipse cx=\"12\" cy=\"6\" rx=\"7.5\" ry=\"3\"/>","<ellipse cx=\"12\" cy=\"5.5\" rx=\"8\" ry=\"3\"/><path d=\"M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13\"/><path d=\"M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3\"/>"],"compass":["<path d=\"M15.5 8.5l-2 5-5 2 2-5z\"/>","<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M15.9 8.1l-2.3 5.5-5.5 2.3 2.3-5.5z\"/>"],"insight":["<path d=\"M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z\"/>","<path d=\"M9 18.5h6M10 21.5h4\"/><path d=\"M12 2.5a6.5 6.5 0 0 0-3.9 11.7c.5.4.9 1 .9 1.7v.6h6v-.6c0-.7.4-1.3.9-1.7A6.5 6.5 0 0 0 12 2.5z\"/><path d=\"M12 7v4\"/>"],"people":["<circle cx=\"9\" cy=\"8\" r=\"3.5\"/>","<circle cx=\"9\" cy=\"8\" r=\"3.5\"/><path d=\"M2.5 20c.6-3.6 3.2-6 6.5-6s5.9 2.4 6.5 6\"/><path d=\"M15.5 4.8a3.3 3.3 0 0 1 0 6.4M18 14.4c1.9.8 3.1 2.8 3.5 5.6\"/>"],"chat":["<path d=\"M4 5h16v11H9l-5 4z\"/>","<path d=\"M20.5 4.5h-17v12.2h4v4l5.2-4h7.8z\"/><path d=\"M8 9.5h8M8 12.5h5\"/>"],"bolt":["<path d=\"M13 2.5L4.5 13.5H11l-1 8 8.5-11H12z\"/>","<path d=\"M13.2 2.2L4.2 13.8h6.9l-1.2 8L19 10.2h-6.9z\"/>"],"lock":["<rect x=\"4.5\" y=\"10\" width=\"15\" height=\"11\" rx=\"2.5\"/>","<rect x=\"4\" y=\"10\" width=\"16\" height=\"11.5\" rx=\"2.5\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/><path d=\"M12 14.5v2.5\"/>"],"document":["<path d=\"M6 2.5h8l5 5v14H6z\"/>","<path d=\"M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8z\"/><path d=\"M14 2.5V8h5.5\"/><path d=\"M8.5 13h7M8.5 17h5\"/>"],"calendar":["<rect x=\"3.5\" y=\"5\" width=\"17\" height=\"6\" rx=\"2\"/>","<rect x=\"3\" y=\"4.5\" width=\"18\" height=\"17\" rx=\"2.5\"/><path d=\"M3 10h18M8 2.5v4M16 2.5v4\"/><path d=\"M7.5 14h2M11 14h2M14.5 14h2M7.5 17.5h2M11 17.5h2\"/>"],"clock":["<path d=\"M12 3a9 9 0 0 1 9 9h-9z\"/>","<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 6.5V12l3.5 2.5\"/>"],"star":["<path d=\"M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z\"/>","<path d=\"M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3 1.1-6.5-4.7-4.6 6.5-.9z\"/>"],"check":["<circle cx=\"12\" cy=\"12\" r=\"9\"/>","<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M7.8 12.3l2.8 2.8 5.6-5.8\"/>"],"info":["<circle cx=\"12\" cy=\"12\" r=\"9\"/>","<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 11v5.5\"/><path d=\"M12 7.5v.2\"/>"],"alert":["<path d=\"M12 3.5l9 16H3z\"/>","<path d=\"M10.3 4.1L2.6 17.6A2 2 0 0 0 4.3 20.6h15.4a2 2 0 0 0 1.7-3L13.7 4.1a2 2 0 0 0-3.4 0z\"/><path d=\"M12 9.5v4.5M12 17v.2\"/>"],"arrow-right":["","<path d=\"M4 12h15.5\"/><path d=\"M13.5 6l6 6-6 6\"/>"],"arrow-up-right":["","<path d=\"M6.5 17.5L17.5 6.5\"/><path d=\"M8.5 6.5h9v9\"/>"],"plus":["","<path d=\"M12 5v14M5 12h14\"/>"],"close":["","<path d=\"M6 6l12 12M18 6L6 18\"/>"],"menu":["","<path d=\"M3.5 6.5h17M3.5 12h17M3.5 17.5h11\"/>"],"search":["<circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\"/>","<circle cx=\"10.5\" cy=\"10.5\" r=\"7\"/><path d=\"M15.7 15.7l5 5\"/>"],"download":["<rect x=\"3.5\" y=\"15\" width=\"17\" height=\"6\" rx=\"2\"/>","<path d=\"M12 3v12M7 10.5l5 5 5-5\"/><path d=\"M3.5 15.5v3a2.5 2.5 0 0 0 2.5 2.5h12a2.5 2.5 0 0 0 2.5-2.5v-3\"/>"],"mail":["<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2.5\"/>","<rect x=\"2.5\" y=\"4.5\" width=\"19\" height=\"15\" rx=\"2.5\"/><path d=\"M3 6.5l9 6.5 9-6.5\"/>"],"phone":["<path d=\"M5 3.5h4l2 5-2.5 1.5a11 11 0 0 0 5.5 5.5L15.5 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5.5a2 2 0 0 1 2-2z\"/>","<path d=\"M5 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z\"/>"],"location":["<path d=\"M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z\"/>","<path d=\"M12 21.5s7.5-6.5 7.5-12a7.5 7.5 0 0 0-15 0c0 5.5 7.5 12 7.5 12z\"/><circle cx=\"12\" cy=\"9.5\" r=\"2.7\"/>"],"pixel":["<rect x=\"13\" y=\"3\" width=\"8\" height=\"8\" rx=\"1.5\"/>","<rect x=\"3\" y=\"13\" width=\"8\" height=\"8\" rx=\"1.5\"/><rect x=\"13\" y=\"3\" width=\"8\" height=\"8\" rx=\"1.5\"/><rect x=\"13\" y=\"16\" width=\"5\" height=\"5\" rx=\"1\"/>"]};
var LOGO={"mark":"M 381 6 L 418 6 L 418 155 L 306 155 L 306 43 L 381 43 Z M 6 43 L 43 43 L 43 80 L 6 80 Z M 81 43 L 118 43 L 118 80 L 81 80 Z M 345 80 L 344 80 L 344 81 L 343 81 L 343 118 L 381 118 L 381 80 Z M 44 81 L 81 81 L 81 118 L 44 118 Z M 81 118 L 118 118 L 118 155 L 81 155 Z M 6 118 L 43 118 L 43 155 L 6 155 Z M 194 118 L 231 118 L 231 155 L 194 155 Z","pieces":["M6 43h37v37H6z","M81 43h37v37H81z","M44 81h37v37H44z","M6 118h37v37H6z","M81 118h37v37H81z","M194 118h37v37h-37z","M381 6h37v149H306V43h75zM345 80h-1v1h-1v37h38V80z"],"wm":"M188.97265625 -681.0 354.73974609375 -429.64013671875H320.814453125L486.44580078125 -681.0H661.6650390625L416.31884765625 -321.45703125L410.3798828125 -367.75341796875L663.9365234375 0.0H483.6064453125L309.7646484375 -259.5703125H359.171875L187.49072265625 0.0H7.16064453125L257.98876953125 -367.75341796875L258.66748046875 -321.45703125L13.75341796875 -681.0ZM964.814453125 -328.7646484375H1087.07470703125Q1141.71728515625 -328.7646484375 1172.347412109375 -356.24658203125Q1202.9775390625 -383.728515625 1202.9775390625 -434.099609375Q1202.9775390625 -486.76708984375 1172.5634765625 -513.600830078125Q1142.1494140625 -540.4345703125 1087.5068359375 -540.4345703125H964.24658203125L997.01123046875 -572.5205078125V0.0H851.013671875V-681.0H1098.26025390625Q1174.5068359375 -681.0 1231.61767578125 -650.851806640625Q1288.728515625 -620.70361328125 1320.56787109375 -565.580322265625Q1352.4072265625 -510.45703125 1352.4072265625 -434.099609375Q1352.4072265625 -358.17431640625 1320.56787109375 -302.8349609375Q1288.728515625 -247.49560546875 1231.401611328125 -217.5634765625Q1174.07470703125 -187.63134765625 1097.828125 -187.63134765625H964.814453125ZM1647.61767578125 -271.71728515625V-410.5791015625H1927.728515625V-271.71728515625ZM1644.61767578125 -542.13818359375 1696.01123046875 -601.39599609375V-79.56787109375L1639.61767578125 -139.2939453125H1983.3212890625V0.0H1550.013671875V-681.0H1983.3212890625V-542.13818359375ZM2205.013671875 0.0V-681.0H2456.1494140625Q2528.98876953125 -681.0 2586.599609375 -652.06787109375Q2644.21044921875 -623.1357421875 2677.469482421875 -570.012451171875Q2710.728515625 -516.88916015625 2710.728515625 -443.53173828125Q2710.728515625 -370.17431640625 2677.469482421875 -317.051025390625Q2644.21044921875 -263.927734375 2586.599609375 -235.49560546875Q2528.98876953125 -207.0634765625 2456.1494140625 -207.0634765625H2318.814453125V-347.62890625H2445.39599609375Q2500.03857421875 -347.62890625 2530.668701171875 -372.326904296875Q2561.298828125 -397.02490234375 2561.298828125 -443.53173828125Q2561.298828125 -491.19921875 2530.668701171875 -515.81689453125Q2500.03857421875 -540.4345703125 2445.39599609375 -540.4345703125H2317.814453125L2351.01123046875 -572.5205078125V0.0ZM2557.755859375 0.0 2412.95263671875 -276.75341796875H2572.92529296875L2717.728515625 0.0ZM3071.01123046875 0.0H2925.013671875V-681.0H3071.01123046875ZM3408.61767578125 -271.71728515625V-410.5791015625H3688.728515625V-271.71728515625ZM3405.61767578125 -542.13818359375 3457.01123046875 -601.39599609375V-79.56787109375L3400.61767578125 -139.2939453125H3744.3212890625V0.0H3311.013671875V-681.0H3744.3212890625V-542.13818359375ZM4421.6201171875 0.0 4049.19677734375 -504.55908203125 4112.01123046875 -521.69482421875V0.0H3966.013671875V-681.0H4098.71484375L4464.08837890625 -185.08349609375L4407.755859375 -174.86181640625V-681.0H4554.3212890625V0.0ZM5029.0 16.70361328125Q4969.75341796875 16.70361328125 4918.5498046875 -0.716064453125Q4867.34619140625 -18.1357421875 4826.630126953125 -53.783935546875Q4785.9140625 -89.43212890625 4758.48193359375 -145.0498046875L4871.5791015625 -215.900390625Q4901.46826171875 -167.6650390625 4943.184326171875 -142.788330078125Q4984.900390625 -117.91162109375 5036.54296875 -117.91162109375Q5081.642578125 -117.91162109375 5104.62451171875 -136.96142578125Q5127.6064453125 -156.01123046875 5127.6064453125 -187.11083984375Q5127.6064453125 -206.5927734375 5117.513671875 -221.34619140625Q5107.4208984375 -236.099609375 5080.2353515625 -249.272705078125Q5053.0498046875 -262.44580078125 5002.4072265625 -274.03857421875Q4918.728515625 -294.03857421875 4870.401611328125 -324.1064453125Q4822.07470703125 -354.17431640625 4802.2353515625 -395.513671875Q4782.39599609375 -436.85302734375 4782.39599609375 -488.099609375Q4782.39599609375 -547.5068359375 4811.80322265625 -594.11767578125Q4841.21044921875 -640.728515625 4896.173095703125 -667.919677734375Q4951.1357421875 -695.11083984375 5026.65380859375 -695.11083984375Q5113.46826171875 -695.11083984375 5172.8505859375 -661.20361328125Q5232.23291015625 -627.29638671875 5267.6650390625 -572.02490234375L5154.1357421875 -493.03857421875Q5127.6787109375 -527.0634765625 5091.33935546875 -541.85986328125Q5055.0 -556.65625 5018.70361328125 -556.65625Q4976.0361328125 -556.65625 4952.3505859375 -540.186767578125Q4928.6650390625 -523.71728515625 4928.6650390625 -493.7783203125Q4928.6650390625 -466.43212890625 4952.6220703125 -447.9501953125Q4976.5791015625 -429.46826171875 5047.0859375 -412.87548828125Q5131.0859375 -393.01123046875 5181.9931640625 -363.943359375Q5232.900390625 -334.87548828125 5255.8076171875 -293.10400390625Q5278.71484375 -251.33251953125 5278.71484375 -191.78955078125Q5278.71484375 -132.24658203125 5248.443359375 -85.123291015625Q5218.171875 -38.0 5162.06103515625 -10.648193359375Q5105.9501953125 16.70361328125 5029.0 16.70361328125ZM5863.013671875 0.0V-681.0H6101.21044921875Q6206.5927734375 -681.0 6283.308837890625 -640.283935546875Q6360.02490234375 -599.56787109375 6401.75341796875 -523.351806640625Q6443.48193359375 -447.1357421875 6443.48193359375 -340.1357421875Q6443.48193359375 -232.271484375 6401.537353515625 -156.20361328125Q6359.5927734375 -80.1357421875 6282.5927734375 -40.06787109375Q6205.5927734375 0.0 6100.21044921875 0.0ZM6009.01123046875 -85.62890625 5951.185546875 -140.5654296875H6090.099609375Q6150.85302734375 -140.5654296875 6196.26708984375 -161.38671875Q6241.68115234375 -182.2080078125 6267.582763671875 -226.270263671875Q6293.484375 -270.33251953125 6293.484375 -340.1357421875Q6293.484375 -408.642578125 6268.082763671875 -453.069091796875Q6242.68115234375 -497.49560546875 6197.26708984375 -518.965087890625Q6151.85302734375 -540.4345703125 6091.099609375 -540.4345703125H5944.185546875L6009.01123046875 -582.68115234375ZM6790.01123046875 0.0H6644.013671875V-681.0H6790.01123046875ZM7337.185546875 12.271484375Q7233.61767578125 12.271484375 7155.5498046875 -32.66064453125Q7077.48193359375 -77.5927734375 7034.197998046875 -156.240966796875Q6990.9140625 -234.88916015625 6990.9140625 -334.88916015625Q6990.9140625 -414.29638671875 7016.34619140625 -479.716064453125Q7041.7783203125 -545.1357421875 7087.994384765625 -592.70361328125Q7134.21044921875 -640.271484375 7197.562255859375 -666.271484375Q7260.9140625 -692.271484375 7337.185546875 -692.271484375Q7453.75341796875 -692.271484375 7530.5927734375 -642.5Q7607.43212890625 -592.728515625 7648.75341796875 -501.37109375L7515.54541015625 -447.95263671875Q7482.6064453125 -502.4345703125 7438.908447265625 -526.63818359375Q7395.21044921875 -550.841796875 7337.185546875 -550.841796875Q7280.11083984375 -550.841796875 7235.548583984375 -524.372314453125Q7190.986328125 -497.90283203125 7165.516845703125 -449.704833984375Q7140.04736328125 -401.5068359375 7140.04736328125 -334.88916015625Q7140.04736328125 -272.6787109375 7165.516845703125 -225.116455078125Q7190.986328125 -177.55419921875 7235.2646484375 -151.084716796875Q7279.54296875 -124.615234375 7336.61767578125 -124.615234375Q7390.12451171875 -124.615234375 7431.279541015625 -145.029296875Q7472.4345703125 -165.443359375 7497.05224609375 -202.530517578125Q7521.669921875 -239.61767578125 7525.0771484375 -290.4208984375L7567.3349609375 -239.2353515625H7325.5068359375V-369.5791015625H7657.80322265625Q7661.93896484375 -354.46826171875 7663.722900390625 -336.357421875Q7665.5068359375 -318.24658203125 7665.5068359375 -300.0Q7665.5068359375 -229.75341796875 7639.37109375 -172.333740234375Q7613.2353515625 -114.9140625 7567.451416015625 -73.61767578125Q7521.66748046875 -32.3212890625 7462.587158203125 -10.02490234375Q7403.5068359375 12.271484375 7337.185546875 12.271484375ZM8011.01123046875 0.0H7865.013671875V-681.0H8011.01123046875ZM8402.07470703125 0.0V-612.24658203125H8549.2080078125V0.0ZM8200.43212890625 -540.4345703125V-681.0H8754.60400390625V-540.4345703125ZM9044.92529296875 -262.0859375H9365.35986328125V-126.63134765625H9044.92529296875ZM8895.9140625 0.0 9137.7783203125 -681.0H9299.33251953125L9528.70361328125 0.0H9381.27392578125L9194.5068359375 -580.90283203125H9243.171875L9042.77587890625 0.0ZM10133.45703125 0.0H9719.013671875V-681.0H9865.01123046875V-86.24658203125L9828.02490234375 -140.5654296875H10133.45703125Z","wmX0":7.16064453125,"wmW":10126.29638671875,"wmCap":680.0,"sweepLight":["#8fa0e0","#c9b8ec","#f2b8b6","#fbead0","#a8e0c8","#8fa0e0"],"sweepV1":["#8fa0e0","#c9b8ec","#f2b8b6","#fbead0","#a8e0c8","#8fa0e0"],"stackCap":27.666581077702485};

  var NS = 'http://www.w3.org/2000/svg';
  var CHART = ['--chart-1', '--chart-2', '--chart-3', '--chart-4', '--chart-5', '--chart-6'];
  function json(el, name, fallback) {
    var v = el.getAttribute(name);
    if (!v) return fallback;
    try { return JSON.parse(v); } catch (e) { return fallback; }
  }
  function num(el, name, d) { var v = parseFloat(el.getAttribute(name)); return isNaN(v) ? d : v; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function iconSVG(name) {
    var d = ICONS[name]; if (!d) return '';
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><g class="t">' + d[0] + '</g><g class="s">' + d[1] + '</g></svg>';
  }
  function fire(el, value) { el.value = value; el.dispatchEvent(new CustomEvent('change', { detail: { value: value }, bubbles: true })); }
  function define(name, cls) { if (!customElements.get(name)) customElements.define(name, cls); }
  function reduced() { return window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches; }

  /* ---- Logo: vector mark built on the pixel module (m = 37.5 path units) ---- */
  var M = 37.5, MX0 = 6, MY0 = 6, MW = 412, MH = 149, NAVY = '#18214D', uid = 0;
  function lerp(a, b, t) { var x = [1, 3, 5].map(function (i) { return parseInt(a.substr(i, 2), 16); }), y = [1, 3, 5].map(function (i) { return parseInt(b.substr(i, 2), 16); }); return 'rgb(' + x.map(function (v, k) { return Math.round(v + (y[k] - v) * t); }).join(',') + ')'; }
  function sweepAt(st, t) { var n = st.length - 1, i = Math.min(Math.floor(t * n), n - 1); return lerp(st[i], st[i + 1], t * n - i); }
  var WEDGES = {};
  function wedges(which) {
    if (WEDGES[which]) return WEDGES[which];
    var st = which === 'v1' ? LOGO.sweepV1 : LOGO.sweepLight, out = '', cx = 212, cy = 80, r = 262, N = 96;
    for (var k = 0; k < N; k++) {
      var a0 = (200 + k * 360 / N - 90) * Math.PI / 180, a1 = (200 + (k + 1.2) * 360 / N - 90) * Math.PI / 180;
      out += '<path d="M' + cx + ' ' + cy + 'L' + (cx + r * Math.cos(a0)).toFixed(1) + ' ' + (cy + r * Math.sin(a0)).toFixed(1) + 'A' + r + ' ' + r + ' 0 0 1 ' + (cx + r * Math.cos(a1)).toFixed(1) + ' ' + (cy + r * Math.sin(a1)).toFixed(1) + 'Z" fill="' + sweepAt(st, k / N) + '" stroke="' + sweepAt(st, k / N) + '" stroke-width="1.5"/>';
    }
    return (WEDGES[which] = out);
  }
  /* inner <svg> in mark units so the sweep turns about the mark's centre.
     mode: 'hover' = solid rest + conic on hover (Brand Board 3j); 'conic' = conic only; else a solid colour */
  function markSVG(mode, x, y, h, rest) {
    var w = h * MW / MH, inner = '', id = 'xdm' + (++uid);
    var conic = '<clipPath id="' + id + '"><path d="' + LOGO.mark + '" fill-rule="evenodd" clip-rule="evenodd"/></clipPath><g class="xd-mark__conic"' + (mode === 'conic' ? ' style="opacity:1"' : '') + ' clip-path="url(#' + id + ')"><g class="xd-mark__sweep">' + wedges('v1') + '</g></g>';
    if (mode === 'hover') inner = '<path class="xd-mark__solid" d="' + LOGO.mark + '" fill="' + rest + '" fill-rule="evenodd"/>' + conic;
    else if (mode === 'conic') inner = conic;
    else inner = '<path d="' + LOGO.mark + '" fill="' + mode + '" fill-rule="evenodd"/>';
    return '<svg x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" viewBox="' + MX0 + ' ' + MY0 + ' ' + MW + ' ' + MH + '" overflow="visible">' + inner + '</svg>';
  }
  function wordmarkPath(fill, x, baseline, cap) {
    var s = cap / LOGO.wmCap;
    return '<path transform="translate(' + (x - LOGO.wmX0 * s).toFixed(2) + ' ' + baseline.toFixed(2) + ') scale(' + s.toFixed(5) + ')" d="' + LOGO.wm + '" fill="' + fill + '"/>';
  }
  /* <xd-mark size="48" variant="hover|sweep|navy|white|box" tone="light|dark" lockup="stack|row" spin> */
  class XdMark extends HTMLElement {
    static get observedAttributes() { return ['size', 'variant', 'lockup', 'tone']; }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { if (this.isConnected) this.render(); }
    render() {
      var h = num(this, 'size', 40), v = this.getAttribute('variant') || 'hover', dark = this.getAttribute('tone') === 'dark', lock = this.getAttribute('lockup');
      var ink = dark ? 'var(--on-night, #fff)' : 'var(--logo-ink, ' + NAVY + ')';
      var mode = v === 'navy' ? 'var(--logo-ink, ' + NAVY + ')' : v === 'white' ? '#fff' : v === 'sweep' ? 'conic' : 'hover';
      var textFill = v === 'white' ? '#fff' : v === 'navy' ? 'var(--logo-ink, ' + NAVY + ')' : ink;
      var u = h / MH, svg;
      if (v === 'box') {
        var S = h * 2.4, mh = S * .70 * MH / MW;
        svg = '<svg width="' + S + '" height="' + S + '" viewBox="0 0 ' + S + ' ' + S + '"><rect width="' + S + '" height="' + S + '" rx="' + (S * .22) + '" fill="' + NAVY + '"/>' + markSVG('conic', (S - mh * MW / MH) / 2, (S - mh) / 2, mh) + '</svg>';
      } else if (lock === 'stack') {
        var cap = LOGO.stackCap * u, gap = 1.5 * M * u, W = MW * u, H = h + gap + cap * 1.03;
        svg = '<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '">' + markSVG(mode, 0, 0, h, ink) + wordmarkPath(textFill, 0, h + gap + cap, cap) + '</svg>';
      } else if (lock === 'row') {
        var rc = 37 * u, rg = 2.5 * M * u, ww = LOGO.wmW / LOGO.wmCap * rc, RW = MW * u + rg + ww;
        svg = '<svg width="' + RW + '" height="' + h + '" viewBox="0 0 ' + RW + ' ' + h + '">' + markSVG(mode, 0, 0, h, ink) + wordmarkPath(textFill, MW * u + rg, (h + rc) / 2, rc) + '</svg>';
      } else {
        svg = '<svg width="' + (h * MW / MH) + '" height="' + h + '" viewBox="0 0 ' + (h * MW / MH) + ' ' + h + '">' + markSVG(mode, 0, 0, h, ink) + '</svg>';
      }
      if (!this.hasAttribute('role')) { this.setAttribute('role', 'img'); this.setAttribute('aria-label', 'Xperiens Digital'); }
      this.innerHTML = svg;
    }
  }

  /* <xd-page-loader label="Loading" inline min="1200"> : the mark assembles cell by cell while the V1 sweep turns */
  class XdPageLoader extends HTMLElement {
    connectedCallback() {
      var self = this, id = 'xdl' + (++uid), inline = this.hasAttribute('inline'), h = num(this, 'size', 56), w = h * MW / MH;
      var pieces = LOGO.pieces.map(function (p, i) { return '<path class="xd-pageloader__piece" style="animation-delay:' + (i * .12) + 's" d="' + p + '" fill="#fff" fill-rule="evenodd"/>'; }).join('');
      this.className = 'xd-pageloader' + (inline ? ' xd-pageloader--inline' : '');
      this.setAttribute('role', 'status'); this.setAttribute('aria-live', 'polite');
      this.innerHTML = '<div class="xd-pageloader__inner"><svg class="xd-pageloader__mark" width="' + w + '" height="' + h + '" viewBox="' + MX0 + ' ' + MY0 + ' ' + MW + ' ' + MH + '" overflow="visible" aria-hidden="true"><mask id="' + id + '" maskUnits="userSpaceOnUse" x="-40" y="-40" width="504" height="241">' + pieces + '</mask><g mask="url(#' + id + ')"><g class="xd-mark__sweep">' + wedges('v1') + '</g></g></svg><span class="xd-pageloader__label">' + esc(this.getAttribute('label') || 'Loading') + '</span></div>';
      if (!inline) {
        var t0 = Date.now(), min = num(this, 'min', 1200);
        var done = function () { setTimeout(function () { self.hidden = true; }, Math.max(0, min - (Date.now() - t0))); };
        if (document.readyState === 'complete') done(); else window.addEventListener('load', done, { once: true });
      }
    }
  }

  /* <xd-icon name="process" size="24" mono> */
  class XdIcon extends HTMLElement {
    static get observedAttributes() { return ['name', 'size']; }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { if (this.isConnected) this.render(); }
    render() {
      var s = this.getAttribute('size'); if (s) this.style.setProperty('--xd-icon-size', s + 'px');
      this.innerHTML = iconSVG(this.getAttribute('name'));
    }
  }

  /* <xd-progress steps="6" current="2" label="Operations"> */
  class XdProgress extends HTMLElement {
    static get observedAttributes() { return ['current', 'steps']; }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { if (this.isConnected) this.render(); }
    render() {
      var n = num(this, 'steps', 5), c = num(this, 'current', 1), segs = '';
      for (var i = 1; i <= n; i++) segs += '<span class="xd-progress__seg" style="--i:' + (i - 1) + ';--n:' + n + '"' + (i <= c ? ' data-done' : '') + '></span>';
      this.className = 'xd-progress';
      this.setAttribute('role', 'progressbar'); this.setAttribute('aria-valuemin', 0); this.setAttribute('aria-valuemax', n); this.setAttribute('aria-valuenow', c);
      this.innerHTML = '<div class="xd-progress__track">' + segs + '</div><div class="xd-progress__meta"><span>' + esc(this.getAttribute('label') || '') + '</span><span>' + c + ' / ' + n + '</span></div>';
    }
  }

  /* <xd-choices multiple options='[{"value":"a","label":"\u2026","icon":"process"}]'> */
  class XdChoices extends HTMLElement {
    connectedCallback() {
      var self = this, opts = json(this, 'options', []), multi = this.hasAttribute('multiple');
      this.className = 'xd-choices'; this.setAttribute('role', 'group');
      this.value = multi ? [] : null;
      var tick = '<span class="xd-choice__tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>';
      this.innerHTML = opts.map(function (o) {
        return '<button type="button" class="xd-choice" aria-pressed="false" data-v="' + esc(o.value) + '">' + (o.icon ? '<span class="xd-iconbox"><xd-icon name="' + esc(o.icon) + '"></xd-icon></span>' : '') + '<span>' + esc(o.label) + '</span>' + tick + '</button>';
      }).join('');
      this.addEventListener('click', function (e) {
        var b = e.target.closest('.xd-choice'); if (!b) return;
        var on = b.getAttribute('aria-pressed') !== 'true';
        if (!multi) self.querySelectorAll('.xd-choice').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', String(multi ? on : true));
        var v = Array.prototype.map.call(self.querySelectorAll('[aria-pressed=true]'), function (x) { return x.dataset.v; });
        fire(self, multi ? v : v[0]);
      });
    }
  }

  /* <xd-scale type="nps|likert|rating" min max low="\u2026" high="\u2026"> */
  var LIKERT = ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree'];
  class XdScale extends HTMLElement {
    connectedCallback() {
      var self = this, type = this.getAttribute('type') || 'rating', items = [];
      if (type === 'likert') items = json(this, 'labels', LIKERT).map(function (l, i) { return { v: i + 1, t: l }; });
      else { var lo = num(this, 'min', type === 'nps' ? 0 : 1), hi = num(this, 'max', type === 'nps' ? 10 : 5); for (var i = lo; i <= hi; i++) items.push({ v: i, t: String(i) }); }
      var low = this.getAttribute('low') || (type === 'nps' ? 'Not at all likely' : ''), high = this.getAttribute('high') || (type === 'nps' ? 'Extremely likely' : '');
      this.className = 'xd-scale' + (type === 'likert' ? ' xd-likert' : '');
      this.innerHTML = '<div class="xd-scale__row" role="radiogroup">' + items.map(function (it) {
        return '<button type="button" role="radio" aria-checked="false" class="xd-scale__opt" data-v="' + it.v + '">' + esc(it.t) + '</button>';
      }).join('') + '</div>' + (low || high ? '<div class="xd-scale__ends"><span>' + esc(low) + '</span><span>' + esc(high) + '</span></div>' : '');
      this.addEventListener('click', function (e) {
        var b = e.target.closest('.xd-scale__opt'); if (!b) return;
        self.querySelectorAll('.xd-scale__opt').forEach(function (x) { x.setAttribute('aria-checked', 'false'); x.style.removeProperty('--sel'); });
        b.setAttribute('aria-checked', 'true');
        if (type === 'nps') { var v = +b.dataset.v; b.style.setProperty('--sel', v >= 9 ? 'var(--good)' : v >= 7 ? 'var(--brand)' : 'var(--critical)'); }
        fire(self, +b.dataset.v);
      });
    }
  }

  /* <xd-maturity levels='["Ad hoc","Repeatable",\u2026]' value="2"> */
  class XdMaturity extends HTMLElement {
    connectedCallback() {
      var self = this, lv = json(this, 'levels', ['Ad hoc', 'Repeatable', 'Defined', 'Managed', 'Optimised']);
      this.className = 'xd-maturity'; this.setAttribute('role', 'radiogroup');
      this.innerHTML = lv.map(function (name, i) {
        var bars = ''; for (var k = 0; k <= i; k++) bars += '<i></i>';
        return '<button type="button" role="radio" aria-checked="false" data-v="' + (i + 1) + '"><span class="xd-maturity__bar">' + bars + '</span><span class="xd-maturity__lvl">L' + (i + 1) + '</span><span class="xd-maturity__name">' + esc(name) + '</span></button>';
      }).join('');
      function set(v) { self.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-checked', String(+b.dataset.v === v)); }); }
      var init = num(this, 'value', 0); if (init) set(init);
      this.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; set(+b.dataset.v); fire(self, +b.dataset.v); });
    }
  }

  /* <xd-slider min max value step suffix> */
  class XdSlider extends HTMLElement {
    connectedCallback() {
      var self = this, mn = num(this, 'min', 0), mx = num(this, 'max', 100), v = num(this, 'value', 50), sfx = this.getAttribute('suffix') || '';
      this.innerHTML = '<div class="xd-range-out"></div><input class="xd-range" type="range" min="' + mn + '" max="' + mx + '" step="' + num(this, 'step', 1) + '" value="' + v + '" aria-label="' + esc(this.getAttribute('label') || 'Value') + '">';
      this.style.display = 'grid'; this.style.gap = '14px';
      var inp = this.querySelector('input'), out = this.querySelector('.xd-range-out');
      function upd() { var p = (inp.value - mn) / (mx - mn) * 100; inp.style.setProperty('--p', p + '%'); out.textContent = inp.value + sfx; }
      inp.addEventListener('input', function () { upd(); fire(self, +inp.value); }); upd();
    }
  }

  function sparkPath(vals, w, h, pad) {
    var mn = Math.min.apply(null, vals), mx = Math.max.apply(null, vals), r = mx - mn || 1;
    return vals.map(function (v, i) { return [pad + i * (w - 2 * pad) / (vals.length - 1), h - pad - (v - mn) / r * (h - 2 * pad)]; });
  }

  /* <xd-kpi label value delta icon spark="1,2,3"> */
  class XdKpi extends HTMLElement {
    connectedCallback() {
      var d = this.getAttribute('delta'), sp = (this.getAttribute('spark') || '').split(',').filter(Boolean).map(Number), ic = this.getAttribute('icon');
      var up = d && d.trim()[0] !== '-' ;
      var good = this.getAttribute('good') === 'down' ? !up : up;
      var spark = '';
      if (sp.length > 1) {
        var W = 120, H = 44, pts = sparkPath(sp, W, H, 4), line = 'M' + pts.map(function (p) { return p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join('L'), last = pts[pts.length - 1];
        spark = '<svg class="xd-spark" width="' + W + '" height="' + H + '" aria-hidden="true"><path class="area" d="' + line + 'L' + last[0] + ' ' + H + 'L' + pts[0][0] + ' ' + H + 'Z" opacity=".55"/><path class="line" d="' + line + '"/><circle r="4" cx="' + last[0] + '" cy="' + last[1] + '"/></svg>';
      }
      this.className = 'xd-kpi';
      this.innerHTML = '<div class="xd-kpi__label">' + (ic ? '<xd-icon name="' + esc(ic) + '" size="18"></xd-icon>' : '') + esc(this.getAttribute('label') || '') + '</div><div class="xd-kpi__row"><div><div class="xd-kpi__value">' + esc(this.getAttribute('value') || '') + '</div>' + (d ? '<span class="xd-delta xd-delta--' + (good ? 'up' : 'down') + '">' + (up ? '\u2191 ' : '\u2193 ') + esc(d.replace(/^[-+]/, '')) + '</span>' : '') + '</div>' + spark + '</div>';
    }
  }

  /* <xd-ring value="72" label="OKR progress" size="140" color="--mint"> */
  class XdRing extends HTMLElement {
    connectedCallback() {
      var v = Math.max(0, Math.min(100, num(this, 'value', 0))), s = num(this, 'size', 140), sw = s * .1, r = (s - sw) / 2, C = 2 * Math.PI * r, col = this.getAttribute('color');
      this.className = 'xd-ring';
      if (col) this.style.setProperty('--c', 'var(' + col + ')');
      this.setAttribute('role', 'img'); this.setAttribute('aria-label', (this.getAttribute('label') || '') + ' ' + v + '%');
      this.innerHTML = '<svg width="' + s + '" height="' + s + '"><circle class="bg" cx="' + s / 2 + '" cy="' + s / 2 + '" r="' + r + '" stroke-width="' + sw + '"/><circle class="fg" cx="' + s / 2 + '" cy="' + s / 2 + '" r="' + r + '" stroke-width="' + sw + '" stroke-dasharray="' + C + '" stroke-dashoffset="' + C + '"/></svg><div class="xd-ring__val">' + v + '%<small>' + esc(this.getAttribute('label') || '') + '</small></div>';
      var fg = this.querySelector('.fg');
      requestAnimationFrame(function () { requestAnimationFrame(function () { fg.style.strokeDashoffset = C * (1 - v / 100); }); });
    }
  }

  /* <xd-okr objective="\u2026" krs='[{"label":"\u2026","value":60}]'> */
  class XdOkr extends HTMLElement {
    connectedCallback() {
      var krs = json(this, 'krs', []);
      this.className = 'xd-okr';
      this.innerHTML = krs.map(function (k) {
        var c = k.value >= 70 ? 'var(--good)' : k.value >= 40 ? 'var(--brand)' : 'var(--warning)';
        return '<div class="xd-okr__kr"><span>' + esc(k.label) + '</span><span class="xd-okr__bar" role="img" aria-label="' + k.value + '%"><i style="--c:' + c + '" data-w="' + k.value + '"></i></span><span class="xd-okr__pct">' + k.value + '%</span></div>';
      }).join('');
      var self = this;
      requestAnimationFrame(function () { requestAnimationFrame(function () { self.querySelectorAll('i[data-w]').forEach(function (i) { i.style.width = i.dataset.w + '%'; }); }); });
    }
  }

  function tipFor(host) {
    var t = host.querySelector('.xd-tip'); if (!t) { t = document.createElement('div'); t.className = 'xd-tip'; host.appendChild(t); }
    return t;
  }

  /* <xd-bars series='["Before","After"]' data='[{"label":"Bids","values":[12,7]}]' unit="h" height="220"> */
  class XdBars extends HTMLElement {
    connectedCallback() {
      var series = json(this, 'series', []), data = json(this, 'data', []), unit = this.getAttribute('unit') || '', H = num(this, 'height', 220);
      var W = Math.max(280, this.clientWidth || 520), padL = 36, padB = 28, padT = 8, ih = H - padB - padT, iw = W - padL;
      var mx = 0; data.forEach(function (d) { d.values.forEach(function (v) { mx = Math.max(mx, v); }); });
      var step = Math.pow(10, Math.floor(Math.log10(mx || 1))), top = Math.ceil(mx / step) * step;
      var g = iw / data.length, bw = Math.min(36, (g * .7) / series.length - 2);
      var s = '<svg width="' + W + '" height="' + H + '"><g class="grid">';
      for (var k = 0; k <= 4; k++) { var y = padT + ih - ih * k / 4; s += '<line x1="' + padL + '" x2="' + W + '" y1="' + y + '" y2="' + y + '"/><text class="lbl" x="' + (padL - 8) + '" y="' + (y + 4) + '" text-anchor="end">' + Math.round(top * k / 4) + '</text>'; }
      s += '</g>';
      data.forEach(function (d, i) {
        var gx = padL + g * i + (g - (bw + 2) * series.length) / 2;
        d.values.forEach(function (v, j) {
          var bh = ih * v / top, x = gx + j * (bw + 2), y = padT + ih - bh;
          s += '<rect class="bar" x="' + x + '" y="' + y + '" width="' + bw + '" height="' + bh + '" rx="4" style="fill:var(' + CHART[j % 6] + ')" data-t="' + esc(d.label + ' \u00b7 ' + series[j] + ': ' + v + unit) + '"/>';
        });
        s += '<text class="lbl" x="' + (padL + g * i + g / 2) + '" y="' + (H - 8) + '" text-anchor="middle">' + esc(d.label) + '</text>';
      });
      s += '</svg>';
      this.className = 'xd-chart';
      this.innerHTML = (series.length > 1 ? '<div class="xd-legend">' + series.map(function (n, j) { return '<span><i style="--c:var(' + CHART[j % 6] + ')"></i>' + esc(n) + '</span>'; }).join('') + '</div>' : '') + s;
      var self = this, tip = tipFor(this);
      this.addEventListener('mousemove', function (e) {
        var r = e.target.closest('rect.bar'); if (!r) { tip.style.opacity = 0; return; }
        var hb = self.getBoundingClientRect(), rb = r.getBoundingClientRect();
        tip.textContent = r.dataset.t; tip.style.left = (rb.left - hb.left + rb.width / 2) + 'px'; tip.style.top = (rb.top - hb.top) + 'px'; tip.style.opacity = 1;
      });
      this.addEventListener('mouseleave', function () { tip.style.opacity = 0; });
    }
  }

  /* <xd-radar axes='["Strategy",\u2026]' series='[{"name":"Today","values":[2,3,\u2026]}]' max="5" size="300"> */
  class XdRadar extends HTMLElement {
    connectedCallback() {
      var axes = json(this, 'axes', []), ser = json(this, 'series', []), mx = num(this, 'max', 5), S = num(this, 'size', 300), cx = S / 2, cy = S / 2, R = S / 2 - 52, n = axes.length;
      function pt(i, v) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + Math.cos(a) * R * v / mx, cy + Math.sin(a) * R * v / mx]; }
      var s = '<svg width="' + S + '" height="' + S + '" class="xd-radar">';
      for (var l = 1; l <= mx; l++) s += '<polygon class="web" points="' + axes.map(function (_, i) { return pt(i, l).join(','); }).join(' ') + '"/>';
      axes.forEach(function (a, i) { var p = pt(i, mx), q = pt(i, mx + .9); s += '<line class="web" x1="' + cx + '" y1="' + cy + '" x2="' + p[0] + '" y2="' + p[1] + '" stroke="currentColor"/><text class="lbl" x="' + q[0] + '" y="' + (q[1] + 4) + '" text-anchor="middle">' + esc(a) + '</text>'; });
      ser.forEach(function (sr, j) {
        var c = 'var(' + CHART[j % 6] + ')';
        s += '<g style="--c:' + c + '"><polygon class="area" points="' + sr.values.map(function (v, i) { return pt(i, v).join(','); }).join(' ') + '"/>' + sr.values.map(function (v, i) { var p = pt(i, v); return '<circle class="pt" r="5" cx="' + p[0] + '" cy="' + p[1] + '" data-t="' + esc(sr.name + ' \u00b7 ' + axes[i] + ': ' + v + '/' + mx) + '"/>'; }).join('') + '</g>';
      });
      s += '</svg>';
      this.className = 'xd-chart';
      this.innerHTML = (ser.length > 1 ? '<div class="xd-legend">' + ser.map(function (sr, j) { return '<span><i style="--c:var(' + CHART[j % 6] + ')"></i>' + esc(sr.name) + '</span>'; }).join('') + '</div>' : '') + s;
      var self = this, tip = tipFor(this);
      this.addEventListener('mousemove', function (e) {
        var c = e.target.closest('circle.pt'); if (!c) { tip.style.opacity = 0; return; }
        var hb = self.getBoundingClientRect(), rb = c.getBoundingClientRect();
        tip.textContent = c.dataset.t; tip.style.left = (rb.left - hb.left + rb.width / 2) + 'px'; tip.style.top = (rb.top - hb.top) + 'px'; tip.style.opacity = 1;
      });
    }
  }

  function toast(msg, icon) {
    var st = document.querySelector('.xd-toast-stack');
    if (!st) { st = document.createElement('div'); st.className = 'xd-toast-stack xd'; st.setAttribute('role', 'status'); document.body.appendChild(st); }
    var t = document.createElement('div'); t.className = 'xd-toast';
    t.innerHTML = '<xd-icon name="' + (icon || 'check') + '"></xd-icon><span>' + esc(msg) + '</span>';
    st.appendChild(t); setTimeout(function () { t.remove(); }, 3200);
  }

  function burst(el) {
    if (reduced()) return;
    var r = el.getBoundingClientRect(), b = document.createElement('div'), cols = ['--transform-3', '--govern-1', '--discover-2', '--transform-2', '--enable-1', '--brand'];
    b.className = 'xd-burst'; b.style.left = (r.left + r.width / 2 + scrollX) + 'px'; b.style.top = (r.top + r.height / 2 + scrollY) + 'px'; b.style.position = 'absolute';
    for (var i = 0; i < 18; i++) {
      var a = Math.random() * Math.PI * 2, d = 40 + Math.random() * 70, p = document.createElement('i');
      p.style.background = 'var(' + cols[i % 6] + ')'; p.style.setProperty('--dx', Math.cos(a) * d + 'px'); p.style.setProperty('--dy', Math.sin(a) * d + 'px'); p.style.setProperty('--rot', (Math.random() * 360) + 'deg');
      b.appendChild(p);
    }
    document.body.appendChild(b); setTimeout(function () { b.remove(); }, 900);
  }


  /* Trademark rule: every "\u2122" in text is wrapped in <span class="xd-tm"> so it is set small and raised.
     Runs on load and on any content added later; skips code, form fields and SVG. */
  var TM_SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, CODE: 1, PRE: 1, svg: 1, SVG: 1 };
  function wrapTM(root) {
    if (!root || !document.createTreeWalker) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: function (n) {
      if (n.nodeValue.indexOf('\u2122') < 0) return NodeFilter.FILTER_REJECT;
      for (var p = n.parentNode; p && p !== root.parentNode; p = p.parentNode) {
        if (p.nodeType === 1 && (TM_SKIP[p.nodeName] || (p.classList && p.classList.contains('xd-tm')) || p.isContentEditable)) return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    } }), list = [], n;
    while ((n = w.nextNode())) list.push(n);
    list.forEach(function (t) {
      var parts = t.nodeValue.split('\u2122'), frag = document.createDocumentFragment();
      parts.forEach(function (txt, i) {
        if (txt) frag.appendChild(document.createTextNode(txt));
        if (i < parts.length - 1) { var sp = document.createElement('span'); sp.className = 'xd-tm'; sp.textContent = '\u2122'; frag.appendChild(sp); }
      });
      t.parentNode.replaceChild(frag, t);
    });
  }
  function startTM() {
    wrapTM(document.body);
    new MutationObserver(function (ms) {
      ms.forEach(function (m) {
        m.addedNodes.forEach(function (nd) { if (nd.nodeType === 1) wrapTM(nd); else if (nd.nodeType === 3 && nd.parentNode) wrapTM(nd.parentNode); });
        if (m.type === 'characterData' && m.target.parentNode) wrapTM(m.target.parentNode);
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (document.body) startTM(); else document.addEventListener('DOMContentLoaded', startTM);

  define('xd-mark', XdMark); define('xd-page-loader', XdPageLoader); define('xd-icon', XdIcon); define('xd-progress', XdProgress); define('xd-choices', XdChoices);
  define('xd-scale', XdScale); define('xd-maturity', XdMaturity); define('xd-slider', XdSlider); define('xd-kpi', XdKpi);
  define('xd-ring', XdRing); define('xd-okr', XdOkr); define('xd-bars', XdBars); define('xd-radar', XdRadar);

  window.XD = { icons: Object.keys(ICONS), iconSVG: iconSVG, logo: LOGO,
    tm: wrapTM,
    pageLoader: { show: function () { var l = document.querySelector('xd-page-loader'); if (!l) { l = document.createElement('xd-page-loader'); l.setAttribute('min', '0'); document.body.appendChild(l); } l.hidden = false; }, hide: function () { var l = document.querySelector('xd-page-loader'); if (l) l.hidden = true; } }, toast: toast, burst: burst, version: '2.0.0-draft' };
})();
