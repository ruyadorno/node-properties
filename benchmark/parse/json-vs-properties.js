"use strict";

var speedy = require ("speedy");
var properties = require ("../../lib");
var fs = require ("fs");

var jsonData = fs.readFileSync ("json", { encoding: "utf8" });
var propertiesData = fs.readFileSync ("properties", { encoding: "utf8" });

speedy.run ({
	json: function (){
		JSON.parse (jsonData);
	},
	properties: function (){
		properties.parse (propertiesData, { sections: true, json: true });
	}
});

//Note: JSON.parse is written in native code by the people that made the V8
//engine! Their uses are quite different.

/*
File: json-vs-properties.js

Node v0.10.15
V8 v3.14.5.9
Speedy v0.0.8

Benchmarks: 2
Timeout: 1000ms (1s 0ms)
Samples: 3
Total time per benchmark: ~3000ms (3s 0ms)
Total time: ~6000ms (6s 0ms)

Higher is better (ops/sec)

json
  355,426 ± 0.0%
properties
  39,457 ± 0.2%

Elapsed time: 6141ms (6s 141ms)
*/