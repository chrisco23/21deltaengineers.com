<?php 
namespace DiviBooster\PLUGIN;

class Layout {

    private $layout;
    
    static function fromShortcode($shortcode) {
        $shortcode = trim($shortcode);
        $shortcode = self::fix_unclosed_shortcodes($shortcode);
        $shortcode = preg_replace('/^<br \/>/', '', $shortcode);
        $layout = self::parse_layout($shortcode);
        return new self($layout);
    }

    static function fix_unclosed_shortcodes($shortcode_string) {
        $parts = preg_split('/(\[\/?[^\]]+\][^[]*)/s', $shortcode_string, -1, PREG_SPLIT_DELIM_CAPTURE);
        $parts = array_values(array_filter($parts)); // remove empty items

        foreach($parts as $k=>$tag) {

            // Ignore container tags
            if (preg_match('/\[(et_pb_section|et_pb_row|et_pb_column)\b/s', $tag)) {
                continue;
            }

            // If it's an opening tag
            if (preg_match('/^\[([a-z_]+)\b/s', $tag, $matches)) {
                
                if (!isset($parts[$k+1])) { 
                    continue; 
                }

                if (!preg_match('/^\[\/'.preg_quote($matches[1], '/').'/s', $parts[$k+1])) {
                    // close it ourselves
                    $parts[$k] = $parts[$k].'[/'.$matches[1].']';
                }
            }

        }
        $shortcode_string = implode('', $parts);
        return $shortcode_string;

    }

    static function parse_layout($shortcode_string) {
        $regex = get_shortcode_regex();
        if (preg_match_all("/$regex/s", $shortcode_string, $matches, PREG_SET_ORDER)) {
            $layout = array();
            foreach($matches as $match) {
                $attrs = shortcode_parse_atts($match[3]);
                $layout[] = apply_filters(
                    __NAMESPACE__.'\\layout_element',
                    array(
                        'tag' => $match[2],
                        'attrs' => $attrs,
                        'content' => self::parse_layout($match[5])
                    )
                );
            }
            return $layout;
        } else {
            $shortcode_string = str_replace('<br />', '', $shortcode_string);
            $shortcode_string = str_replace("\n", '', $shortcode_string);
            $shortcode_string = str_replace("\r", '', $shortcode_string);
            $shortcode_string = str_replace(base64_decode('wqA='), ' ', $shortcode_string); // Replace uft-8 non-breaking spaces
            $shortcode_string = trim($shortcode_string);
            return $shortcode_string;
        }
    }

    private function __construct($shortcode_string) {
        $this->layout = $shortcode_string;
    }

    public function toShortcode($layout = null, $indent = 0) {
        $layout = $layout?$layout:$this->layout;
        $indent_str = str_repeat("\t", $indent);
        $shortcode_string = '';
        foreach($layout as $item) {

            $opening_tag = '['.$item['tag'];
            if (isset($item['attrs']) && is_array($item['attrs'])) {
                foreach($item['attrs'] as $key => $value) {
                    $opening_tag .= ' '.$key.'="'.$value.'"';
                }
            }
            $opening_tag .= ']';

            if (is_array($item['content'])) {
                $content = $this->toShortcode($item['content'], $indent+1);
            }
            else {
                $content = $item['content'];
                $content = empty($content)?'':$content."\n";
            }

            $closing_tag = '[/'.$item['tag'].']';

            $shortcode_string .= $indent_str.$opening_tag."\n".$content.$indent_str.$closing_tag."\n";
        }
        return $shortcode_string;
    }
}