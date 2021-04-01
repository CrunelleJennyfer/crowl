import { PLUGIN_NAME } from "../constants";
import "../../../../themes/as-starter-theme/assets/css/src/main.scss";

const { wp } = window;
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { PlainText } = wp.blockEditor;

const BLOCK_NAME = `${PLUGIN_NAME}/plain-text`;

registerBlockType(BLOCK_NAME, {
  title: __("Plain text"),
  description: __("Plain text block!"),
  icon: "nametag",
  category: "common",
  attributes: {
    title: {
      type: "string",
    },
    subtitle: {
      type: "string",
    },
    text: {
      type: "string",
    },
  },

  edit: (props) => {
    const {
      attributes: { title, subtitle, text },
      setAttributes,
      className,
    } = props;
    return (
      <>
        <div className="block-title-subtitle flex container">
          <div className="block-title-subtitle__main-title">
            <PlainText
              keepplaceholderonfocus="true"
              placeholder={__("Title")}
              className={className}
              value={title}
              onChange={(newTitle) => {
                setAttributes({ title: newTitle });
              }}
            />
          </div>
          <div className="col-2">
            <PlainText
              keepplaceholderonfocus="true"
              placeholder={__("Subtitle")}
              className={className}
              value={subtitle}
              onChange={(newSubtitle) => {
                setAttributes({ subtitle: newSubtitle });
              }}
            />
            <PlainText
              keepplaceholderonfocus="true"
              placeholder={__("text")}
              className={className}
              value={text}
              onChange={(newText) => {
                setAttributes({ text: newText });
              }}
            />
          </div>
        </div>
      </>
    );
  },

  save: ({ attributes: { title, subtitle, text } }) => (
    <section class="block-title-subtitle flex container">
      <div class="block-title-subtitle__main-title">
        <h2 className="block-title-subtitle__title">{title}</h2>
      </div>
      <div className="block-title-subtitle__main-text">
        <h3 className="block-title-subtitle__subtitle">{subtitle}</h3>
        <p className="block-title-subtitle__text">{text}</p>
      </div>
    </section>
  ),
});
