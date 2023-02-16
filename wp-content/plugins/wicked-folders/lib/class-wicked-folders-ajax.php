<?php

// Disable direct load
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

final class Wicked_Folders_Ajax {

	private static $instance;

	private function __construct() {

		add_action( 'wp_ajax_wicked_folders_save_state', 			array( $this, 'ajax_save_state' ) );
		add_action( 'wp_ajax_wicked_folders_move_object', 			array( $this, 'ajax_move_object' ) );
		add_action( 'wp_ajax_wicked_folders_clone_folder', 			array( $this, 'ajax_clone_folder' ) );
		add_action( 'wp_ajax_wicked_folders_save_folder', 			array( $this, 'ajax_save_folder' ) );
		add_action( 'wp_ajax_wicked_folders_dismiss_message', 		array( $this, 'ajax_dismiss_message' ) );
		add_action( 'wp_ajax_wicked_folders_get_child_folders', 	array( $this, 'ajax_get_child_folders' ) );
		add_action( 'wp_ajax_wicked_folders_unassign_folders', 		array( $this, 'ajax_unassign_folders' ) );
		add_action( 'wp_ajax_wicked_folders_save_folder_order', 	array( $this, 'ajax_save_folder_order' ) );
		add_action( 'wp_ajax_wicked_folders_fetch_folders', 		array( $this, 'ajax_fetch_folders' ) );

	}

	public static function get_instance() {
		if ( empty( self::$instance ) ) {
			self::$instance = new Wicked_Folders_Ajax();
		}
		return self::$instance;
	}

	/**
	 * Admin AJAX callback for moving an item to a new folder.
	 *
	 * @uses Wicked_Folders::move_object
	 * @see Wicked_Folders::move_object
	 */
	public function ajax_move_object() {
		$result 				= array( 'error' => false, 'items' => array(), 'folders' => array() );
		$nonce 					= isset( $_REQUEST['nonce'] ) ? sanitize_text_field( $_REQUEST['nonce'] ) : false;
		$object_type 			= isset( $_REQUEST['object_type'] ) ? sanitize_text_field( $_REQUEST['object_type'] ) : false;
		$object_id 				= isset( $_REQUEST['object_id'] ) ? array_map( 'absint', $_REQUEST['object_id'] ) : false;
		$destination_object_id 	= isset( $_REQUEST['destination_object_id'] ) ? (int) $_REQUEST['destination_object_id'] : false;
		$source_folder_id 		= isset( $_REQUEST['source_folder_id'] ) ? (int) $_REQUEST['source_folder_id'] : false;
		$post_type 				= isset( $_REQUEST['post_type'] ) ? sanitize_text_field( $_REQUEST['post_type'] ) : false;

		if ( ! wp_verify_nonce( $nonce, 'wicked_folders_ajax_action' ) ) {
			wp_send_json_error( null, 403 );
		}

		if ( ! current_user_can( 'edit_posts' ) ) {
			wp_send_json_error( null, 403 );
		}

		if ( ! $object_type || ! false === $object_id || ! false === $destination_object_id ) {
			$result['error'] = true;
		}

		if ( ! $result['error'] ) {
			foreach ( $object_id as $id ) {
				Wicked_Folders::move_object( $object_type, ( int ) $id, $destination_object_id, $source_folder_id );
			}

			// Folders are used in response to update item counts
			$result['folders'] = Wicked_Folders::get_folders( $post_type );
		}

		echo json_encode( $result );

		wp_die();

	}

	/**
	 * Admin AJAX callback that unassigns folders from an item.
	 *
	 */
	public function ajax_unassign_folders() {
		$result 	= array( 'error' => false, 'items' => array(), 'folders' => array() );
		$nonce 		= isset( $_REQUEST['nonce'] ) ? sanitize_text_field( $_REQUEST['nonce'] ) : false;
		$taxonomy 	= isset( $_REQUEST['taxonomy'] ) ? sanitize_key( $_REQUEST['taxonomy'] ) : false;
		$object_id 	= isset( $_REQUEST['object_id'] ) ? array_map( 'absint', $_REQUEST['object_id'] ) : false;
		$post_type 	= Wicked_Folders::get_post_name_from_tax_name( $taxonomy );
		$policy 	= false;
		$user_id 	= get_current_user_id();

		if ( ! wp_verify_nonce( $nonce, 'wicked_folders_ajax_action' ) ) {
			wp_send_json_error( null, 403 );
		}

		if ( ! current_user_can( 'edit_posts' ) ) {
			wp_send_json_error( null, 403 );
		}

		if ( class_exists( 'Wicked_Folders_Folder_Collection_Policy' ) ) {
			$policy = Wicked_Folders_Folder_Collection_Policy::get_taxonomy_policy( $taxonomy );
		}

		if ( ! $taxonomy ) {
			$result['error'] = true;
		}

		if ( ! $result['error'] ) {
			foreach ( $object_id as $id ) {
				$folder_ids = array();

				// If a policy exists for the taxonomy, only unassign folders
				// from the object that the user has assign permission for
				if ( $policy ) {
					$folder_ids = wp_get_object_terms( $id, $taxonomy, array( 'fields' => 'ids' ) );

					for ( $i = count( $folder_ids ) - 1; $i > -1; $i-- ) {
						if ( $policy->can_assign( $folder_ids[ $i ], $user_id ) ) {
							unset( $folder_ids[ $i ] );
						}
					}
				}

				$update_terms_result = wp_set_object_terms( ( int ) $id, $folder_ids, $taxonomy );

				$result['items'][] = array(
					'objectId' 	=> $id,
					'taxonomy' 	=> $taxonomy,
					'result' 	=> $update_terms_result,
				);
			}

			// Folders are used in response to update item counts
			$result['folders'] = Wicked_Folders::get_folders( $post_type );
		}

		echo json_encode( $result );

		wp_die();
	}

	public function ajax_save_state() {

		$result = array( 'error' => false );
		$data 	= json_decode( file_get_contents( 'php://input' ) );
		$nonce 	= $data->nonce;
		$screen = $data->screen;
		$state 	= new Wicked_Folders_Screen_State( $screen, get_current_user_id(), $data->lang );

		if ( ! wp_verify_nonce( $nonce, 'wicked_folders_ajax_action' ) ) {
			wp_send_json_error( null, 403 );
		}

		if ( ! current_user_can( 'edit_posts' ) ) {
			wp_send_json_error( null, 403 );
		}

		$state->folder 					= isset( $data->folder->id ) ? $data->folder->id : '0';
		$state->folder_type 			= isset( $data->folder->type ) ? $data->folder->type : 'Wicked_Folders_Folder';
		$state->expanded_folders 		= $data->expanded;
		$state->tree_pane_width 		= $data->treePaneWidth;
		$state->orderby 				= $data->orderby;
		$state->order 					= $data->order;
		$state->is_folder_pane_visible 	= $data->isFolderPaneVisible;
		$state->sort_mode 				= $data->sortMode;

		if ( isset( $data->hideAssignedItems ) ) {
			$state->hide_assigned_items = $data->hideAssignedItems;
		}

		$state->save();

		echo json_encode( $result );

		wp_die();

	}

	public function ajax_save_folder() {
		$response 	= array( 'error' => false );
		$nonce 		= isset( $_REQUEST['nonce'] ) ? sanitize_text_field( $_REQUEST['nonce'] ) : false;
		$method 	= isset( $_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'] ) ? $_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'] : 'POST';
		$method 	= isset( $_REQUEST['_method_override'] ) ? sanitize_text_field( $_REQUEST['_method_override'] ) : $method;
		$folder		= json_decode( file_get_contents( 'php://input' ) );
		$policy 	= false;
		$user_id 	= get_current_user_id();

		if ( ! wp_verify_nonce( $nonce, 'wicked_folders_save_folder_ajax_action' ) ) {
			wp_send_json_error( null, 403 );
		}

		if ( ! current_user_can( 'edit_posts' ) ) {
			wp_send_json_error( null, 403 );
		}

		if ( 'DELETE' == $method ) {
			$folder_id 	= ( int ) $_REQUEST['id'];
			$taxonomy 	= sanitize_key( $_REQUEST['taxonomy'] );
		} else {
			$folder_id 	= isset( $folder->id ) ? $folder->id : null;
			$taxonomy 	= $folder->taxonomy;
		}

		// The Polylang plugin uses the jQuery ajaxPrefilter function to alter
		// AJAX requests which breaks the request (see polylang/js/media.js).
		// The following code checks to see if the Polylang plugin is active and,
		// if so, removes the string added by the Polylang plugin so the request
		// can be processed properly.
		if ( function_exists( 'is_plugin_active' ) && ( is_plugin_active( 'polylang/polylang.php' ) || is_plugin_active( 'polylang-pro/polylang.php' ) ) ) {
			$data 	= file_get_contents( 'php://input' );
			$data 	= preg_replace( '/^pll_post_id=([0-9|undefined]*)?&/', '', $data );
			$data 	= preg_replace( '/&pll_ajax_backend=1/', '', $data );
			$folder = json_decode( $data );
		}

		// Similar issue with Anything Order by Terms plugin; adds a screen_id
		// parameter (see anything-order-by-terms/modules/base/script.js) which
		// breaks the request
		if ( function_exists( 'is_plugin_active' ) && is_plugin_active( 'anything-order-by-terms/anything-order.php' ) ) {
			$data 	= file_get_contents( 'php://input' );
			$data 	= preg_replace( '/&screen_id=([A-Z\-\_0-9]*)/i', '', $data );
			$folder = json_decode( $data );
		}

		if ( class_exists( 'Wicked_Folders_Folder_Collection_Policy' ) ) {
			$policy = Wicked_Folders_Folder_Collection_Policy::get_taxonomy_policy( $taxonomy );

			// If there's a security policy, enforce it
			if ( $policy ) {
				if (
					( 'POST' == $method && false == $policy->can_create( $user_id ) ) ||
					( 'PUT' == $method && false == $policy->can_edit( $folder_id, $user_id ) ) ||
					( 'DELETE' == $method && false == $policy->can_delete( $folder_id, $user_id ) )
				) {
					$response['message'] 	= __( 'Permission denied.', 'wicked-folders' );
					$response['error'] 		= true;

					status_header( 400 );

					echo json_encode( $response );

					die();
				}
			}
		}

		// Insert folder
		if ( 'POST' == $method ) {
			// TODO: Refactor. We should be working with a proper folder object
			// that is initalized from the JSON in the request and then
			// serialized as JSON
			$term = wp_insert_term( $folder->name, $folder->taxonomy, array(
				'parent' 	=> $folder->parent,
				'slug' 		=> Wicked_Folders_Term_Folder::generate_unique_slug( $folder->name, $folder->taxonomy ),
			) );

			if ( ! is_wp_error( $term ) ) {
				$owner_data 		= get_userdata( $user_id );
				$folder->id 		= ( string ) $term['term_id'];
				$folder->ownerId 	= $user_id;
				$folder->ownerName 	= isset( $owner_data->data->display_name ) ? $owner_data->data->display_name : '';

				add_term_meta( $term['term_id'], 'wf_owner_id', $user_id );
			}
		}

		// Update folder
		if ( 'PUT' == $method ) {
			$term = wp_update_term( $folder->id, $folder->taxonomy, array(
				'name' 		=> $folder->name,
				'parent' 	=> $folder->parent,
			) );

			update_term_meta( $folder->id, 'wf_owner_id', ( int ) $folder->ownerId );
		}

		// Delete folder
		if ( 'DELETE' == $method ) {
			$term = wp_delete_term( ( int ) $_REQUEST['id'], sanitize_key( $_REQUEST['taxonomy'] ) );
			// Delete the sort meta for the folder
			delete_metadata( 'post', 0, '_wicked_folder_order__' . sanitize_key( $_REQUEST['taxonomy'] ) . '__' . sanitize_text_field( $_REQUEST['id'] ), false, true );
		}

		if ( is_wp_error( $term ) ) {
			if ( isset( $term->errors['term_exists'] ) ) {
				$response['message'] = __( 'A folder with that name already exists in the selected parent folder. Please enter a different name or select a different parent folder.', 'wicked-folders' );
			} else {
				$response['message'] = $term->get_error_message();
			}
			$response['error'] = true;
			status_header( 400 );
			echo json_encode( $response );
			die();
		} else {
			echo json_encode( $folder );
		}

		wp_die();

	}

	public function ajax_clone_folder() {
		$folders 		= array();
		$nonce 			= isset( $_REQUEST['nonce'] ) ? sanitize_text_field( $_REQUEST['nonce'] ) : false;
		$id 			= isset( $_REQUEST['id'] ) ? ( int ) $_REQUEST['id'] : false;
		$post_type 		= isset( $_REQUEST['post_type'] ) ? sanitize_key( $_REQUEST['post_type'] ) : false;
		$parent 		= isset( $_REQUEST['parent'] ) ? ( int ) $_REQUEST['parent'] : false;
		$clone_children = isset( $_REQUEST['clone_children'] ) && 'true' == $_REQUEST['clone_children'] ? true : false;
		$taxonomy 		= Wicked_Folders::get_tax_name( $post_type );
		$user_id 		= get_current_user_id();

		if ( ! wp_verify_nonce( $nonce, 'wicked_folders_save_folder_ajax_action' ) ) {
			wp_send_json_error( null, 403 );
		}

		if ( ! current_user_can( 'edit_posts' ) ) {
			wp_send_json_error( null, 403 );
		}

		try {
			if ( class_exists( 'Wicked_Folders_Folder_Collection_Policy' ) ) {
				$policy = Wicked_Folders_Folder_Collection_Policy::get_taxonomy_policy( $taxonomy );

				// If there's a security policy, enforce it
				if ( $policy ) {
					// Require edit permission to clone folder
					if ( ! $policy->can_edit( $id, $user_id ) ) {
						throw new Exception( __( 'Permission denied.', 'wicked-folders' ) );
					}
				}
			}

			$folder 	= Wicked_Folders::get_folder( $id, $post_type );
			$folders 	= $folder->clone_folder( $clone_children, $parent );

			echo json_encode( $folders );
		} catch ( Exception $e ) {
			status_header( 400 );

			echo esc_html( $e->getMessage() );

			die();
		}

		wp_die();
	}

	public function ajax_dismiss_message() {
		$nonce 					= isset( $_REQUEST['nonce'] ) ? sanitize_text_field( $_REQUEST['nonce'] ) : false;
		$result 				= array( 'error' => false );
		$dismissed_messages 	= ( array ) get_user_option( 'wicked_folders_dismissed_messages' );
		$dismissed_messages[] 	= $_POST['key'];

		if ( ! wp_verify_nonce( $nonce, 'wicked_folders_dismiss_message_ajax_action' ) ) {
			wp_send_json_error( null, 403 );
		}

		update_user_meta( get_current_user_id(), 'wicked_folders_dismissed_messages', $dismissed_messages );

		echo json_encode( $result );

		wp_die();
	}

	public function ajax_get_child_folders() {
		global $wpdb;

		$folders 		= array();
		$folder_type 	= sanitize_text_field( $_REQUEST['folder_type'] );
		$folder_id 		= sanitize_key( $_REQUEST['folder_id'] );
		$post_type 		= sanitize_key( $_REQUEST['post_type'] );

		if ( ! current_user_can( 'edit_posts' ) ) {
			wp_send_json_error( null, 403 );
		}

		$folder = Wicked_Folders::get_dynamic_folder( $folder_type, $folder_id, $post_type );

		if ( $folder ) {
			$folder->fetch();
			$folders = $folder->get_child_folders();
		}

		echo json_encode( $folders );

		wp_die();
	}

	public function ajax_save_folder_order() {
		global $wpdb;

		$nonce 				= isset( $_REQUEST['nonce'] ) ? sanitize_text_field( $_REQUEST['nonce'] ) : false;
		$result  			= array( 'error' => false );
		$folders 			= isset( $_REQUEST['folders'] ) && is_array( $_REQUEST['folders' ] ) ? array_map( array( $this, 'sanitize_folder_order_param' ), $_REQUEST['folders'] ) : array();
		$order_field_exists = Wicked_Folders::get_instance()->term_order_field_exists();

		if ( ! wp_verify_nonce( $nonce, 'wicked_folders_save_folder_ajax_action' ) ) {
			wp_send_json_error( null, 403 );
		}

		if ( ! current_user_can( 'edit_posts' ) ) {
			wp_send_json_error( null, 403 );
		}

		foreach ( $folders as $folder ) {
			update_term_meta( $folder['id'], 'wf_order', ( int ) $folder['order'] );

			// Update wp_terms.term_order if the field exists. This field is
			// used by the Category Order and Taxonomy Terms Order plugin so
			// this should ensure that the folders appear in the expected order
			// for users who use this plugin
			if ( $order_field_exists ) {
				$wpdb->update(
					$wpdb->terms,
					array( 'term_order' => $folder['order'] ),
					array( 'term_id' => ( int ) $folder['id'] ),
					array( '%d' ),
					array( '%d' )
				);
			}
		}

		echo json_encode( $result );

		wp_die();
	}

	public function ajax_fetch_folders() {
		$folders 	= array();
		$taxonomy 	= isset( $_GET['taxonomy'] ) ?  sanitize_text_field( $_GET['taxonomy'] ) : false;

		if ( ! current_user_can( 'edit_posts' ) ) {
			wp_send_json_error( null, 403 );
		}
		
		if ( $taxonomy ) {
			$post_type = Wicked_Folders::get_post_name_from_tax_name( $taxonomy );

			$folders = Wicked_Folders::get_folders( $post_type, $taxonomy );
		}

		echo json_encode( $folders );

		wp_die();
	}

	/**
	 * Sanitizes the value of an entry within a folder order array.
	 */
	public function sanitize_folder_order_param( $value ) {
		return array(
			'id' 	=> ( int ) $value['id'],
			'order' => ( int ) $value['order'],
		);
	}
}
