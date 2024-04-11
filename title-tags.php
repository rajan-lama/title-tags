<?php

/**
 * The plugin to enable html tags in post title.
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://prosysthemes.com
 * @since             1.0
 * @package           title_tags
 *
 * @wordpress-plugin
 * Plugin Name:       Title Tags
 * Plugin URI:        https://prosysthemes.com/wordpress-plugins/title-tags
 * Description:       A WordPress plugin that helps post author to enable and display HTML tags in the title of the gutenberg editor and preserve the tags in the post Title.  
 * Version:           1.0
 * Author:            Rajan Lama
 * Author URI:        https://prosysthemes.com/
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       title-tags
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 */
define( 'TITLE_TAGS_VERSION', '1.0' );

/**
 * Enqueue a script in the WordPress admin on edit.php.
 *
 * @param int $hook Hook suffix for the current admin page.
 */
function title_tags_enqueue_admin_script( $hook ) {
    wp_enqueue_script( 'title-tags', plugin_dir_url( __FILE__ ) . 'js/tt-admin.js', array(), TITLE_TAGS_VERSION );
}
add_action( 'admin_enqueue_scripts', 'title_tags_enqueue_admin_script' );