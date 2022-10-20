author 'XXX'
description 'perspectiveSpeedoMoter'
version '1.0.0'

fx_version 'cerulean'
game 'gta5'
-- UI
ui_page "ui/perspectiveSpeedoMoter.html"
files {
	"ui/perspectiveSpeedoMoter.html",
	"ui/perspectiveSpeedoMoter.js",
	"ui/perspectiveSpeedoMoter.css",
	"ui/speedometerSVG/gas.svg",
	"ui/speedometerSVG/turbo.svg",
	"ui/speedometerSVG/car.svg",
	"ui/speedometerSVG/perspectiveCarImage.png"
}

-- Client Scripts
client_scripts {
	"client.lua"
}