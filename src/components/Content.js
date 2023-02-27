import * as React from "react";
import PropTypes from "prop-types";

export const HTMLContent = ({ content, ...props }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} {...props} />
);

const Content = ({ content, ...props }) => (
  <div {...props}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
