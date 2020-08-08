/**
 * WordPress dependencies.
 */
const { registerBlockType } = wp.blocks;
const { createElement, Fragment, useState, useEffect, Component } = wp.element;
const { __ } = wp.i18n;
const {
	Placeholder,
	SandBox,
	Button,
	ExternalLink,
	Spinner,
	Toolbar,
	ToolbarButton
} = wp.components;
const { compose } = wp.compose;
const { withSelect } = wp.data;
const { RichText, BlockControls } = wp.blockEditor;

const EditEmbedActivity = ( {
	attributes,
	setAttributes,
	isSelected,
	bpSettings,
	preview,
	fetching
} ) => {
	const { url, caption } = attributes;
	const { embedScriptURL } = bpSettings;
	const label = __( 'BuddyPress Activity URL', 'buddypress' );
	const [ value, setURL ] = useState( url );
	const [ isEditingURL, setIsEditingURL ] = useState( ! url );

	const onSubmit = ( event ) => {
		if ( event ) {
			event.preventDefault();
		}

		setIsEditingURL( false );
		setAttributes( { url: value } );
	};

	const switchBackToURLInput = ( event ) => {
		if ( event ) {
			event.preventDefault();
		}

		setIsEditingURL( true );
		setURL( '' );
		setAttributes( { url: '' } );
	};

	const editToolbar = (
		<BlockControls>
			<Toolbar>
				<ToolbarButton
					icon="edit"
					title={ __( 'Edit URL', 'buddypress' ) }
					onClick={ switchBackToURLInput }
				/>
			</Toolbar>
		</BlockControls>
	);

	if ( isEditingURL ) {
		return (
			<Placeholder
				icon="buddicons-activity"
				label={ label }
				className="wp-block-embed"
				instructions={ __( 'Paste the link to the activity content you want to display on your site.', 'buddypress' ) }
			>
				<form onSubmit={ onSubmit }>
					<input
						type="url"
						value={ value || '' }
						className="components-placeholder__input"
						aria-label={ label }
						placeholder={ __( 'Enter URL to embed here…', 'buddypress' ) }
						onChange={ ( event ) => setURL( event.target.value ) }
					/>
					<Button isPrimary type="submit">
						{ __( 'Embed', 'buddypress' ) }
					</Button>
				</form>
				<div className="components-placeholder__learn-more">
					<ExternalLink
						href={ __(
							'https://codex.buddypress.org/activity-embeds/'
						) }
					>
						{ __( 'Learn more about activity embeds', 'buddypress' ) }
					</ExternalLink>
				</div>
			</Placeholder>
		);
	}

	if ( fetching ) {
		return (
			<div className="wp-block-embed is-loading">
				<Spinner />
				<p>{ __( 'Embedding…', 'buddypress' ) }</p>
			</div>
		);
	}

	if ( ! preview || ! preview['x_buddypress'] || 'activity' !== preview['x_buddypress'] ) {
		// Reset the URL.
		setAttributes( { url: '' } );

		return (
			<Fragment>
				{ editToolbar }
				<Placeholder
					icon="buddicons-activity"
					label={ label }
				>
					<p className="components-placeholder__error">
						{ __( 'The URL you provided is not a permalink to a BuddyPress Activity. Please use another URL.', 'buddypress' ) }
					</p>
				</Placeholder>
			</Fragment>
		);
	}

	return (
		<Fragment>
			{ ! isEditingURL && editToolbar }
			<figure className="wp-block-embed is-type-bp-activity">
				<div className="wp-block-embed__wrapper">
					<SandBox
						html={ preview && preview.html ? preview.html : '' }
						scripts={ [ embedScriptURL ] }
					/>
				</div>
				{ ( ! RichText.isEmpty( caption ) || isSelected ) && (
					<RichText
						tagName="figcaption"
						placeholder={ __( 'Write caption…', 'buddypress' ) }
						value={ caption }
						onChange={ ( value ) => setAttributes( { caption: value } ) }
						inlineToolbar
					/>
				) }
			</figure>
		</Fragment>
	);
}

const editEmbedActivityBlock = compose( [
	withSelect( ( select, ownProps ) => {
		const { url } = ownProps.attributes;
		const editorSettings = select( 'core/editor' ).getEditorSettings();
		const {
			getEmbedPreview,
			isRequestingEmbedPreview,
		} = select( 'core' );

		const preview = undefined !== url && getEmbedPreview( url );
		const fetching = undefined !== url && isRequestingEmbedPreview( url );

		return {
			bpSettings: editorSettings.bp.activity || {},
			preview: preview,
			fetching: fetching,
		};
	} ),
] )( EditEmbedActivity );

registerBlockType( 'bp/embed-activity', {
	title: __( 'Embed an activity', 'buddypress' ),

	description: __( 'Add a block that displays the activity content pulled from this or other community sites.', 'buddypress' ),

	icon: 'buddicons-activity',

	category: 'buddypress',

	attributes: {
		url: {
			type: 'string',
		},
		caption: {
			type: 'string',
			source: 'html',
			selector: 'figcaption',
		},
	},

	supports: {
		align: true,
	},

	edit: editEmbedActivityBlock,

	save: function( { attributes } ) {
		const { url, caption } = attributes;

		if ( ! url ) {
			return null;
		}

		return (
			<figure className="wp-block-embed is-type-bp-activity">
				<div className="wp-block-embed__wrapper">
					{
						`\n${ url }\n` /* URL needs to be on its own line. */
					}
				</div>
				{ ! RichText.isEmpty( caption ) && (
					<RichText.Content
						tagName="figcaption"
						value={ caption }
					/>
				) }
			</figure>
		);
	},
} );
