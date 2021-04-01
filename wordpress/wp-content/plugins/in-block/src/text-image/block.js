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
  URLInputButton,
} = wp.blockEditor;
const { Button, BaseControl, ToggleControl } = wp.components;

const BLOCK_NAME = `${PLUGIN_NAME}/text-img`;

registerBlockType(BLOCK_NAME, {
  title: __("Text and image"),
  description: __("text and img"),
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
    text: {
      type: "string",
    },
    link: {
      type: "string",
    },
  },

  edit: (props) => {
    const {
      attributes: {
        link,
        text,
        title,
        subtitle,
        imageUrl,
        imageId,
        switchDisplay,
      },
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
            <PlainText
              placeholder={__("Text")}
              className={className}
              value={text}
              onChange={(text) => setAttributes({ text })}
            />
            <URLInputButton
              className={__("link")}
              url={link}
              onChange={(link) => setAttributes({ link })}
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

  save: ({
    attributes: { link, text, title, subtitle, imageUrl, switchDisplay },
  }) => (
    <section class="switch flex container">
      <div class="switch__main-title">
        <h1 className="switch__title">{title}</h1>
        <h5 className="switch__subtitle">{subtitle}</h5>
        <p className="switch__link">
          <a href={link}>{text}</a>
        </p>
      </div>
      <div classe="switch__main-img">
        {imageUrl && <img src={imageUrl} alt="" />}
      </div>
    </section>
  ),
});
