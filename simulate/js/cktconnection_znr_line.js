jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
               
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
	//-----------------voltage------------------//
         endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 5, stroke: "rgba(255,0,0,1)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },
		//-----------------ground------------------//
         endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 5, stroke: "rgba(0,0,0,1)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare1 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint1);
        },


    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: -10 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e3 = prepare("ld3"),
            e4 = prepare("ld4"),
            e5 = prepare("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare("ld10"),
            e11 = prepare("ld11"),
            e12 = prepare1("ld12"),
			e13 = prepare("ld13"),
			e14 = prepare("ld14"),
			e15 = prepare("ld15"),
			e16 = prepare("ld16"),
			e17 = prepare("ld17"),
			e18 = prepare("ld18"),
			e19 = prepare("ld19"),

            clearBtn = jsPlumb.getSelector("#delete-connct"),
            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            //instance.on(document.getElementById("delete-connct"), "click", function (e) {
               // instance.detachEveryConnection();
            //showConnectionInfo("");
               // jsPlumbUtil.consume(e);

            //});
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

      
        var correct_connections_1_3 = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            }
        ];

        var correct_connections_4_7 = [
            {
                "source": "ld4",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld4"
            }
        ];        

        var correct_connections_8_15 = [
            {
                "source": "ld8",
                "target": "ld15"
            },
    
            {
                "source": "ld15",
                "target": "ld8"
            }
        ];

        var correct_connections_15_10 = [
            {
                "source": "ld15",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld15"
            }
        ];

        var correct_connections_9_12 = [
            {
                "source": "ld9",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld9"
            }
        ];

        var correct_connections_11_17 = [
            {
                "source": "ld11",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld11"
            }
        ];

        var correct_connections_16_18 = [
            {
                "source": "ld16",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld16"
            }
        ];
var correct_connections_17_5 = [
            {
                "source": "ld17",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld17"
            }
        ];
var correct_connections_18_6 = [
            {
                "source": "ld18",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld18"
            }
        ];
var correct_connections_13_15 = [
            {
                "source": "ld13",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld13"
            }
        ];
		var correct_connections_14_19 = [
            {
                "source": "ld14",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "ld14"
            }
        ];
		var correct_connections_9_16 = [
            {
                "source": "ld9",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld9"
            }
        ];
        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld1"
            },
            
            {
                "source": "ld4",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld4"
            },

            {
                "source": "ld8",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld8"
            },

            {
                "source": "ld15",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld15"
            },
        

            {
                "source": "ld9",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld9"
            },
            {
                "source": "ld11",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld11"
            },
            {
                "source": "ld16",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld16"
            },
			{
                "source": "ld17",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld17"
            },
			{
                "source": "ld18",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld18"
            },
			{
                "source": "ld13",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld13"
            },
			{
                "source": "ld14",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "ld14"
            },
			{
                "source": "ld9",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld9"
            },
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_3 = false;
        var is_connected_4_7 = false;
        var is_connected_8_15 = false;
        var is_connected_15_10 = false;
        var is_connected_9_12 = false;
        var is_connected_11_17 = false;
        var is_connected_16_18 = false;
		var is_connected_17_5 = false;
		var is_connected_18_6 = false;
		var is_connected_13_15 = false;
		var is_connected_14_19 = false;
		var is_connected_9_16 = false;
        var unallowed_connection_present = false;
        var count =0; // counts number of connection


        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_3){
                is_connected_1_3 = correct_connections_1_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false

        });

        //checking for 4_7 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_7){
                is_connected_4_7 = correct_connections_4_7.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_8_15){
                is_connected_8_15 = correct_connections_8_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_15_10){
                is_connected_15_10 = correct_connections_15_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_9_12){
                is_connected_9_12 = correct_connections_9_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_11_17){
                is_connected_11_17 = correct_connections_11_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_16_18){
                is_connected_16_18 = correct_connections_16_18.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_17_5){
                is_connected_17_5 = correct_connections_17_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_18_6){
                is_connected_18_6 = correct_connections_18_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_13_15){
                is_connected_13_15 = correct_connections_13_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_14_19){
                is_connected_14_19 = correct_connections_14_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_9_16){
                is_connected_9_16 = correct_connections_9_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        if (is_connected_1_3 && is_connected_4_7 && is_connected_8_15 && is_connected_15_10 && is_connected_9_12 && is_connected_11_17 && is_connected_16_18&&is_connected_17_5&&is_connected_18_6 &&is_connected_13_15&&is_connected_14_19&&is_connected_9_16 && !unallowed_connection_present) {
			
			
			 	document.getElementById('add').disabled = false;
  				document.getElementById('plt').disabled = false;
 				document.getElementById('clr').disabled = false;
	   			
	  
            alert("RIGHT CONNECTION \n set resistance and input DC voltage");
            } else {
               alert("WRONG CONNECTION");
                return;
            }  



    });
});



function deleteconnection(){
window.location.reload();
}


