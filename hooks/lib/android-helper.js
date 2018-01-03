
var fs = require("fs");
var path = require("path");
var utilities = require("./utilities");

module.exports = {

    addFabricBuildToolsGradle: function() {

        var buildGradle = utilities.readBuildGradle();

        buildGradle +=  [
            "",
            "// Fabric Cordova Plugin - Start Fabric Build Tools ",
            "buildscript {",
            "    repositories {",
            "        maven { url 'https://maven.fabric.io/public' }",
            "    }",
            "    dependencies {",
            "        classpath 'io.fabric.tools:gradle:1.+'",
            "    }",
            "}",
            "",
            "allprojects {",
            "    repositories {",
            "       maven {",
            "           url 'https://maven.google.com/'",
            "       }",
            "    }",
            "}",
            "",
            "apply plugin: 'io.fabric'",
            "",
            "dependencies {",
            "    compile('com.crashlytics.sdk.android:crashlytics:2.7.1@aar') {",
            "       transitive = true",
            "    }",
            "    compile 'com.google.firebase:firebase-core:11.8.0'",
            "}",
            "",
            "// Fabric Cordova Plugin - End Fabric Build Tools",
        ].join("\n");

        utilities.writeBuildGradle(buildGradle);
    },

    removeFabricBuildToolsFromGradle: function() {

        var buildGradle = utilities.readBuildGradle();

        buildGradle = buildGradle.replace(/\n\/\/ Fabric Cordova Plugin - Start Fabric Build Tools[\s\S]*\/\/ Fabric Cordova Plugin - End Fabric Build Tools/, "");

        utilities.writeBuildGradle(buildGradle);
    }
};
