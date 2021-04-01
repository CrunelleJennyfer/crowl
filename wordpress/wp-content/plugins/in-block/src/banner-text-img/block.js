import { PLUGIN_NAME } from "../constants";
import "../../../../themes/as-starter-theme/assets/css/src/main.scss";

const { wp } = window;
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const {
  MediaUpload,
  InspectorControls,
  MediaPlaceholder,
  PlainText,
} = wp.blockEditor;
const { Button, BaseControl, ToggleControl } = wp.components;

const BLOCK_NAME = `${PLUGIN_NAME}/text-image`;

registerBlockType(BLOCK_NAME, {
  title: __("Banner :Text and image"),
  description: __("Another example with text and image"),
  icon: "media-document",
  category: "common",
  attributes: {
    title: {
      type: "string",
    },
    subtitle: {
      type: "string",
    },
    imageUrl: {
      type: "string",
    },
    imageId: {
      type: "integer",
    },
    switchDisplay: {
      type: "boolean",
      default: false,
    },
  },

  edit: (props) => {
    const {
      attributes: { title, subtitle, imageUrl, imageId, switchDisplay },
      setAttributes,
      className,
    } = props;
    const classNameContainer = className + "__container flex";
    return (
      <>
        <div className={classNameContainer}>
          <div className={className + "__main-title"}>
            <PlainText
              placeholder={__("Title")}
              className={className}
              value={title}
              onChange={(newTitle) => {
                setAttributes({ title: newTitle });
              }}
            />
            <PlainText
              placeholder={__("Subtitle")}
              className={className}
              value={subtitle}
              onChange={(newSubtitle) => {
                setAttributes({ subtitle: newSubtitle });
              }}
            />
          </div>

          <div className={className + "__main-img"}>
            {imageUrl ? (
              <img src={imageUrl} alt="" />
            ) : (
              <MediaPlaceholder
                onSelect={(media) =>
                  setAttributes({ imageUrl: media.url, imageId: media.id })
                }
                allowedTypes={["image"]}
                multiple={false}
                labels={{ title: "The Image" }}
              />
            )}
          </div>
        </div>
        <InspectorControls>
          <BaseControl>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({ imageUrl: media.url, imageId: media.id })
              }
              type="image"
              value={imageId}
              className="file"
              render={({ open }) => (
                <Button
                  className={!imageUrl && "button button-large"}
                  onClick={open}
                >
                  {imageUrl ? (
                    <div className="inspector-controls-flex">
                      <img
                        className="inspector-controls-flex-img"
                        src={imageUrl}
                        alt=""
                      />
                      <p>{__("Replace image")}</p>
                    </div>
                  ) : (
                    __("Select image")
                  )}
                </Button>
              )}
            />
          </BaseControl>
          <BaseControl>
            <ToggleControl
              label={__("Alterner l'image et le texte")}
              checked={switchDisplay}
              onChange={(switchDisplay) => {
                setAttributes({ switchDisplay });
              }}
            />
          </BaseControl>
        </InspectorControls>
      </>
    );
  },

  save: ({ attributes: { title, subtitle, imageUrl } }) => (
    <section class="banner flex container">
      <div class="banner__main-title">
        <h1 className="banner__title">{title}</h1>
        <h5 className="banner__subtitle">{subtitle}</h5>
      </div>
      <div classe="banner__main-img">
        {imageUrl && <img src={imageUrl} alt="" />}
      </div>
    </section>
  ),
});
