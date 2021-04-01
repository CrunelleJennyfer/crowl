<?php
/**
 * Registers the `testimony` post type.
 */
function testimony_init() {
	register_post_type( 'testimony', array(
		'labels'                => array(
			'name'                  => __( 'Témoignages', 'skin' ),
			'singular_name'         => __( 'Témoignage', 'skin' ),
			'all_items'             => __( 'All Témoignages', 'skin' ),
			'archives'              => __( 'Témoignage Archives', 'skin' ),
			'attributes'            => __( 'Témoignage Attributes', 'skin' ),
			'insert_into_item'      => __( 'Insert into témoignage', 'skin' ),
			'uploaded_to_this_item' => __( 'Uploaded to this témoignage', 'skin' ),
			'featured_image'        => _x( 'Featured Image', 'testimony', 'skin' ),
			'set_featured_image'    => _x( 'Set featured image', 'testimony', 'skin' ),
			'remove_featured_image' => _x( 'Remove featured image', 'testimony', 'skin' ),
			'use_featured_image'    => _x( 'Use as featured image', 'testimony', 'skin' ),
			'filter_items_list'     => __( 'Filter témoignages list', 'skin' ),
			'items_list_navigation' => __( 'Témoignages list navigation', 'skin' ),
			'items_list'            => __( 'Témoignages list', 'skin' ),
			'new_item'              => __( 'New Témoignage', 'skin' ),
			'add_new'               => __( 'Add New', 'skin' ),
			'add_new_item'          => __( 'Add New Témoignage', 'skin' ),
			'edit_item'             => __( 'Edit Témoignage', 'skin' ),
			'view_item'             => __( 'View Témoignage', 'skin' ),
			'view_items'            => __( 'View Témoignages', 'skin' ),
			'search_items'          => __( 'Search témoignages', 'skin' ),
			'not_found'             => __( 'No témoignages found', 'skin' ),
			'not_found_in_trash'    => __( 'No témoignages found in trash', 'skin' ),
			'parent_item_colon'     => __( 'Parent Témoignage:', 'skin' ),
			'menu_name'             => __( 'Témoignages', 'skin' ),
		),
		'public'                => true,
		'hierarchical'          => false,
		'show_ui'               => true,
		'show_in_nav_menus'     => true,
		'supports'              => array( 'title', 'editor' ),
		'has_archive'           => true,
		'rewrite'               => true,
		'query_var'             => true,
		'menu_position'         => null,
		'menu_icon'             => 'dashicons-nametag',
		'show_in_rest'          => true,
		'rest_base'             => 'testimony',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
	) );

}
add_action( 'init', 'testimony_init' );

/**
 * Sets the post updated messages for the `testimony` post type.
 *
 * @param  array $messages Post updated messages.
 * @return array Messages for the `testimony` post type.
 */
function testimony_updated_messages( $messages ) {
	global $post;

	$permalink = get_permalink( $post );

	$messages['testimony'] = array(
		0  => '', // Unused. Messages start at index 1.
		/* translators: %s: post permalink */
		1  => sprintf( __( 'Témoignage updated. <a target="_blank" href="%s">View témoignage</a>', 'skin' ), esc_url( $permalink ) ),
		2  => __( 'Custom field updated.', 'skin' ),
		3  => __( 'Custom field deleted.', 'skin' ),
		4  => __( 'Témoignage updated.', 'skin' ),
		/* translators: %s: date and time of the revision */
		5  => isset( $_GET['revision'] ) ? sprintf( __( 'Témoignage restored to revision from %s', 'skin' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		/* translators: %s: post permalink */
		6  => sprintf( __( 'Témoignage published. <a href="%s">View témoignage</a>', 'skin' ), esc_url( $permalink ) ),
		7  => __( 'Témoignage saved.', 'skin' ),
		/* translators: %s: post permalink */
		8  => sprintf( __( 'Témoignage submitted. <a target="_blank" href="%s">Preview témoignage</a>', 'skin' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
		/* translators: 1: Publish box date format, see https://secure.php.net/date 2: Post permalink */
		9  => sprintf( __( 'Témoignage scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview témoignage</a>', 'skin' ),
		date_i18n( __( 'M j, Y @ G:i', 'skin' ), strtotime( $post->post_date ) ), esc_url( $permalink ) ),
		/* translators: %s: post permalink */
		10 => sprintf( __( 'Témoignage draft updated. <a target="_blank" href="%s">Preview témoignage</a>', 'skin' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
	);

	return $messages;
}
add_filter( 'post_updated_messages', 'testimony_updated_messages' );
