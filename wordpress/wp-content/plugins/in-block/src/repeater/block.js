import { PLUGIN_NAME } from "../constants";
import "../../../../themes/as-starter-theme/assets/css/src/main.scss";

const { wp } = window;
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { PlainText, MediaUpload } = wp.blockEditor;
const { Button } = wp.components;

const BLOCK_NAME = `${PLUGIN_NAME}/repeater-block`;

registerBlockType(BLOCK_NAME, {
  title: __("Repeater block"),
  description: __("Example repeater block!"),
  icon: "nametag",
  category: "common",
  attributes: {
    title: {
      type: "string",
    },
    text: {
      type: "string",
    },
    imageUrl: {
      type: "string",
    },
    imageId: {
      type: "integer",
    },
    content: {
      type: "array",
    },
  },

  // Const content =[
  //   {titl, img, subtitle},
  //   {},
  //   {},
  //   {}
  // ]

  edit: (props) => {
    const {
      attributes: { content = [] },
      setAttributes,
    } = props;
    return (
      <>
        {content.map((value, index) => {
          //a chaque tour de boucle index +1
          return (
            <>
              {/* <MediaUpload
                type="image"
                value={value.imageUrl}
                onSelect={(imageUrl, imageId) => {
                  const newContent = [...content];
                  newContent[index].imageUrl = imageUrl;
                  newContent[index].imageId = imageId;
                  setAttributes({ content: newContent });
                }}
              /> */}
              <PlainText
                keepplaceholderonfocus
                placeholder={__("Title")}
                value={value.title}
                onChange={(title) => {
                  const newContent = [...content];
                  //newContent est un nouveau tableau qui est copie du Tabl Content existant
                  //pour faire la copie on utilise ...
                  newContent[index].title = title;
                  setAttributes({ content: newContent });
                }}
              />
              <PlainText
                keepplaceholderonfocus
                placeholder={__("text")}
                value={value.text}
                onChange={(text) => {
                  const newContent = [...content];
                  newContent[index].text = text;
                  setAttributes({ content: newContent });
                }}
              />

              <Button
                onClick={() => {
                  const newContent = [
                    ...content.slice(0, index),
                    ...content.slice(index + 1),
                  ];
                  setAttributes({ content: newContent });
                }}
              >
                {__("Supprimer")}
              </Button>
            </>
          );
        })}
        <Button
          onClick={() => {
            const newContent = [...content, {}];
            setAttributes({ content: newContent });
          }}
        >
          {__("Ajouter")}
        </Button>
      </>
    );
  },

  save: ({ attributes: { content = [] } }) =>
    content.map((index, element) => {
      <>
        {
          <section key={`repeter-${index}`} class="repeter flex container">
            <div class="repeter__main-title">
              {/* <img
                src={element.imageUrl}
                className="block-title-subtitle__title"
              /> */}
              <h1 className="block-title-subtitle__title">{element.title}</h1>
              <h5 className="block-title-subtitle__text">{element.text}</h5>
            </div>
          </section>
        }
      </>;
    }),
});
