<?php

namespace DiviBooster\DiviBooster;

class Color {
    
    private $red = 0;
    private $blue = 0;
    private $green = 0;
    private $opacity = 1.0;

    static function fromText($color="") {
        $color = trim($color);
        if (empty($color)) {
            return new self();
        } elseif (preg_match('/^rgba/', $color)) {
            return self::fromRGBA($color);
        } elseif (preg_match('/^rgb/', $color)) {
            return self::fromRGB($color);
        } elseif (preg_match('/^#/', $color)) {
            return self::fromHex($color);
        } else {
            return new self();
        }
    }

    static function fromRGB($color="rgb(255, 255, 255)") {
        $matches = array();
        if (preg_match('/rgb\((\d+),\s*(\d+),\s*(\d+)\)/', $color, $matches)) {
            return new self($matches[1], $matches[2], $matches[3]);
        } else {
            return new self();
        }
    }

    static function fromRGBA($color="rgba(255, 255, 255, 1.0)") {
        $matches = array();
        if (preg_match('/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d\.]+)\)/', $color, $matches)) {
            return new self($matches[1], $matches[2], $matches[3], $matches[4]);
        } else {
            return new self();
        }
    }

    static function fromHex($color="#ffffff") {
        return self::fromHexAndOpacity($color, 1.0);
    }

    static function fromHexAndOpacity($color="#ffffff", $opacity=1.0) {

        if (isset($color[0]) && $color[0]==='#') {

            $hex_color = substr($color, 1);
            
            if (strlen($hex_color) === 6) { // #ffffff format
                list($red, $green, $blue) = str_split($hex_color, 2); 
                return new self(
                    hexdec($red), 
                    hexdec($green), 
                    hexdec($blue), 
                    $opacity
                );
            } elseif ( strlen( $hex_color ) === 3 ) { // #fff format
                list($red, $green, $blue) = str_split($hex_color, 1); 
                return new self(
                    hexdec($red.$red), 
                    hexdec($green.$green), 
                    hexdec($blue.$blue), 
                    $opacity
                );
            } 
        }
        return new self();
    }
    
    private function __construct($red=255, $green=255, $blue=255, $opacity=1.0) {
        $this->red = $red;
        $this->green = $green;
        $this->blue = $blue;
        $this->opacity = $opacity;
    }
    
    public function rgba() {
        return sprintf('rgba(%d, %d, %d, %g)', 
            $this->red(),
            $this->green(),
            $this->blue(),
            $this->opacity()
        );
    }

    public function hex() {
        return sprintf('#%02x%02x%02x', 
            $this->red(),
            $this->green(),
            $this->blue()
        );
    }
    
    private function red() {
        return intval($this->red);
    }
    
    private function green() {
        return intval($this->green);
    }
    
    private function blue() {
        return intval($this->blue);
    }
    
    private function opacity() {
        return floatval($this->opacity);
    }
}
