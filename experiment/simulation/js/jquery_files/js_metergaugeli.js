//---------------------------------------------Metergauge1(output volt)----------------------------------------------//
$(document).ready(function () {
    s1 = [0];
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 20,
                intervals: [5, 10, 15, 20],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });
});

//---------------------------------------------Metergauge2(source current)---------------------------------------------------//
$(document).ready(function () {
    s2 = [0];
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 40,
                intervals: [10, 20, 30, 40],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});

//---------------------------------------------Metergauge3(load current)---------------------------------------------------//
$(document).ready(function () {
    s3 = [0];
    plot3 = $.jqplot('chart3', [s3], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 40,
                intervals: [10, 20, 30, 40],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});
//---------------------------------------------Metergauge4(zener current)---------------------------------------------------//
$(document).ready(function () {
    s4 = [0];
    plot3 = $.jqplot('chart4', [s4], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 40,
                intervals: [10, 20, 30, 40],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});

var vi, rs, rl;
var is, il, iz, vo, vr;
//---------------------------------------------------------Simulation--------------------------------------------------------------------------------//
function check() {
    var vz = document.getElementById("zenrv").value;

    vi = document.getElementById("dc").value;
    rs = document.getElementById("res").value;
    
    rl = document.getElementById("resl").value;


    is = (parseFloat(vi) - parseFloat(vz)) / parseInt(rs);
    var ise = parseFloat(is) * 1000;
    document.getElementById("amps").value = ise.toPrecision(3);
    il = parseFloat(vz) / parseInt(rl);
    var ile = parseFloat(il) * 1000;
    document.getElementById("ampl").value = ile.toPrecision(3);
    iz = parseFloat(is) - parseFloat(il);
    var ize = parseFloat(iz) * 1000;
    document.getElementById("ampz").value = ize.toFixed(3);

    if (parseFloat(vi) > parseFloat(vz)) {
        vo = parseFloat(vi) - (parseFloat(is) * parseInt(rs));
        document.getElementById("volt").value = vo.toPrecision(3);
    }
    else {
        document.getElementById("volt").value = vi;//output voltage
         document.getElementById("ampz").value=0; // zener current , diode will be off
    }
    vr = parseInt(vo) / parseInt(vi);
//    if (vi == "") {
//        Alert.render("Enter the Input Voltage");
//        document.getElementById("add").style.display = "none";
//    }
//    else if (vz == "") {
//        Alert.render("Enter the Zener Voltage");
//        document.getElementById("add").style.display = "none";
//
//    }
//    else if (rs == "") {
//        Alert.render("Enter the Series Resistance Value");
//        document.getElementById("add").style.display = "none";
//    }
//    else if (rs != 5000) {
//        Alert.render("Set Series Resistance Value to 5 Kohm");
//        document.getElementById("add").style.display = "none";
//    }
//    else if (rl == "") {
//        Alert.render("Enter the Load Resistance Value");
//        document.getElementById("add").style.display = "none";
//    }
//    else if (rl != 10000) {
//        Alert.render("Set Load Resistance Value to 10KOhm");
//        document.getElementById("add").style.display = "none";
//    }
//    else {
//        document.getElementById("add").style.display = "block";
//    }

    s1[0] = parseFloat(document.getElementById('volt').value);
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 20,
                intervals: [5, 10, 15, 20],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });

    s2[0] = parseFloat(document.getElementById('amps').value);
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 40,
                intervals: [10, 20, 30, 40],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });

    s3[0] = parseFloat(document.getElementById('ampl').value);
    plot3 = $.jqplot('chart3', [s3], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 40,
                intervals: [10, 20, 30, 40],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
    s4[0] = parseFloat(document.getElementById('ampz').value);
    plot3 = $.jqplot('chart4', [s4], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 40,
                intervals: [10, 20, 30, 40],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });


    var table = document.getElementById("mytable");

    //var columns = table.rows[1].cells[3];


    var clmns = table.rows[tabrowindex].cells[1];
    var vlt = clmns.innerHTML;

//
    if (document.getElementById("znv").value != document.getElementById("zenrv").value) {
       // document.getElementById("add").style.display = "none";
        //Alert.render("Make the Zener Voltage Constant");
         document.getElementById("zenrv").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Make the Zener Voltage Constant";
    }
    else if (document.getElementById("rs").value != (document.getElementById("res").value)/1000) {
        //document.getElementById("add").style.display = "none";
       // Alert.render("Make the Series Resistance Constant");
       document.getElementById("demo").innerHTML = "Make the Series Resistance Constant";
        document.getElementById("res").style.borderColor = "red";
    }
    else if (document.getElementById("rl").value != (document.getElementById("resl").value)/1000) {
        //document.getElementById("add").style.display = "none";
       // Alert.render("Make the Load Resistance Constant");
       ocument.getElementById("demo").innerHTML = "Make the Load Resistance Constant";
        document.getElementById("res1").style.borderColor = "red";
    }

    else if (vlt == document.getElementById("dc").value) {
        //document.getElementById("add").style.display = "none";
       // Alert.render("Change the DC voltage");
       document.getElementById("demo").innerHTML = "Change the DC Voltage";
        document.getElementById("volt").style.borderColor = "red";
        document.getElementById("dc").style.borderColor = "red";
    }
//    else {
//        document.getElementById("add").style.display = "block";
//    }

}